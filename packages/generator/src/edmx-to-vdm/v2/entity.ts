import {
  createEntityClassNames,
  joinEntityMetadata,
  navigationPropertyBase,
  transformEntityBase
} from '../common';
import {
  VdmComplexType,
  VdmEntity,
  VdmNavigationProperty
} from '../../vdm-types';
import { ServiceNameFormatter } from '../../service-name-formatter';
import {
  EdmxEntitySetBase,
  JoinedEntityMetadata
} from '../../edmx-parser/common';
import {
  EdmxAssociation,
  EdmxAssociationSet,
  EdmxEntityType,
  End,
  JoinedAssociationMetadata,
  parseAssociation,
  parseAssociationSets,
  parseEntitySets,
  parseEntityTypes
} from '../../edmx-parser/v2';
import { ServiceMetadata } from '../../edmx-parser/edmx-file-reader';
import { stripNamespace } from '../edmx-to-vdm-util';

export function generateEntitiesV2(
  serviceMetadata: ServiceMetadata,
  complexTypes: Omit<VdmComplexType, 'factoryName'>[],
  formatter: ServiceNameFormatter
): VdmEntity[] {
  const entitySets = parseEntitySets(serviceMetadata.edmx.root);
  const entityTypes = parseEntityTypes(serviceMetadata.edmx.root);
  const entitiesMetadata = joinEntityMetadata(
    entitySets,
    entityTypes,
    serviceMetadata.edmx.namespace,
    serviceMetadata.swagger
  );
  const classNames = createEntityClassNames(entitiesMetadata, formatter);

  const associations = joinAssociationMetadata(
    parseAssociationSets(serviceMetadata.edmx.root),
    parseAssociation(serviceMetadata.edmx.root)
  );

  return entitiesMetadata.map(entityMetadata => ({
    ...transformEntityBase(
      entityMetadata,
      classNames,
      complexTypes,
      [],
      formatter
    ),
    navigationProperties: navigationProperties(
      entityMetadata,
      associations,
      classNames,
      formatter
    )
  }));
}

function navigationProperties(
  entity: JoinedEntityMetadata<EdmxEntitySetBase, EdmxEntityType>,
  associations: JoinedAssociationMetadata[],
  classNames: { [originalName: string]: string },
  formatter: ServiceNameFormatter
): VdmNavigationProperty[] {
  const entityType = entity.entityType;

  return entityType.NavigationProperty.map(navProp => {
    const relationship = navProp.Relationship.split('.').pop();
    const association = associations
      .filter(ass => ass.Name === relationship)
      .pop();
    if (!association) {
      throw Error(
        `Unable to find the association with the name: ${relationship}`
      );
    }
    const from = association.Ends.find(end => end.Role === navProp.FromRole);
    const to = association.Ends.find(end => end.Role === navProp.ToRole);

    if (!from) {
      throw Error(
        `Unable to get the role property of the association ends: ${association.Ends} with the name: ${navProp.FromRole}`
      );
    }
    if (!to) {
      throw Error(
        `Unable to get the role property of the association ends: ${association.Ends} with the name: ${navProp.ToRole}`
      );
    }

    return {
      ...navigationPropertyBase(navProp.Name, entity.entitySet.Name, formatter),
      from: entity.entityType.Name,
      to: to.EntitySet,
      toEntityClassName: classNames[to.EntitySet],
      multiplicity: from.Multiplicity + ' - ' + to.Multiplicity,
      isMultiLink: to.Multiplicity.endsWith('*'),
      isCollection: to.Multiplicity.endsWith('*')
    };
  });
}

export function joinAssociationMetadata(
  associationSets: EdmxAssociationSet[],
  associations: EdmxAssociation[]
): JoinedAssociationMetadata[] {
  return associationSets.map(assocSet => {
    const matchingAssoc = associations.find(
      a => a.Name === stripNamespace(assocSet.Association)
    );

    if (!matchingAssoc) {
      throw Error(
        `Unable to match the association set: ${assocSet.Association} with associations: ${associations}.`
      );
    }

    const ends = assocSet.End.map(
      assocSetEnd =>
        ({
          ...assocSetEnd,
          ...matchingAssoc.End.find(end => end.Role === assocSetEnd.Role)
        } as End)
    );

    return {
      Name: matchingAssoc.Name,
      'sap:creatable': assocSet['sap:creatable'],
      'sap:updatable': assocSet['sap:updatable'],
      'sap:deletable': assocSet['sap:deletable'],
      'sap:content-version': assocSet['sap:content-version'],
      Ends: ends
    };
  });
}
