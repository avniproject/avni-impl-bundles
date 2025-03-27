{
  "checklistsRule": "",
  "decisionConcepts": [],
  "decisionRule": "",
  "formElementGroups": [
    {
      "display": "Nothing",
      "displayOrder": 1,
      "formElements": [],
      "name": "Nothing",
      "timed": false,
      "uuid": "556cdb63-0179-4066-922f-6f45d2bf4df7",
      "voided": true
    },
    {
      "display": "Geography information",
      "displayOrder": 2,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "hidden",
            "uuid": "16b34bfc-00e6-4021-9dbe-1ee569475e37"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "hideFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {},
                        "rhs": {}
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": false,
          "name": "hidden",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  visibility = !(true);
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "4be0a1d3-30d4-4c6e-b485-466edee8b93d",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Other Block",
            "uuid": "e2d35dee-c34f-4f54-a68b-f32ee81835b6"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Other Block",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;

  const isDefined = individual && 
                    individual.lowestAddressLevel && 
                    (Array.isArray(individual.lowestAddressLevel.locationMappings) && 
                     !_.isEmpty(individual.lowestAddressLevel.locationMappings) || 
                     !_.isEmpty(individual.lowestAddressLevel.titleLineage));

  if (isDefined) {
        let block = undefined;

        if (
            Array.isArray(individual.lowestAddressLevel.locationMappings) &&
            !_.isEmpty(individual.lowestAddressLevel.locationMappings) &&
            individual.lowestAddressLevel.locationMappings[0] &&
            individual.lowestAddressLevel.locationMappings[0].parent &&
            individual.lowestAddressLevel.locationMappings[0].parent.name
        ) {
            block = individual.lowestAddressLevel.locationMappings[0].parent.name;
        } else if (
            individual.lowestAddressLevel &&
            individual.lowestAddressLevel.titleLineage
        ) {
            const titleParts = _.split(individual.lowestAddressLevel.titleLineage, ', ');
            block = titleParts.length > 2 ? titleParts[2] : undefined;
        }

        visibility = block === 'Other';
    }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "type": "SingleSelect",
          "uuid": "db1ab735-962f-421b-af58-d26e315074bf"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Other Village",
            "uuid": "16b4db7c-e0a8-41f1-ac67-07470a762d9f"
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Other Village",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;
  
  const isDefined = individual && 
                    individual.lowestAddressLevel && 
                    (Array.isArray(individual.lowestAddressLevel.locationMappings) && 
                     !_.isEmpty(individual.lowestAddressLevel.locationMappings) || 
                     !_.isEmpty(individual.lowestAddressLevel.titleLineage));

  if (isDefined) {
      let village = undefined;
  
      if (
        Array.isArray(individual.lowestAddressLevel.locationMappings) &&
        !_.isEmpty(individual.lowestAddressLevel.locationMappings) &&
        individual.lowestAddressLevel.locationMappings[0] &&
        individual.lowestAddressLevel.locationMappings[0].child &&
        individual.lowestAddressLevel.locationMappings[0].child.name
      ) {
        village = individual.lowestAddressLevel.locationMappings[0].child.name;
      } else if (
        individual.lowestAddressLevel &&
        individual.lowestAddressLevel.titleLineage
      ) {
        const titleParts = _.split(individual.lowestAddressLevel.titleLineage, ', ');
        village = titleParts.length > 3 ? titleParts[3] : undefined;
      }
      

  
      visibility = village === 'Other';
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "type": "SingleSelect",
          "uuid": "824a8295-3c12-4e9a-a302-c6f6beb3e772"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Gram Panchayat Name",
            "uuid": "abd267d7-2c9f-4d72-aabe-fc59ce4c877f"
          },
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "Gram Panchayat",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individualService = params.services.individualService;
  
  const villages = individualService.getSubjectsInLocation(individual.lowestAddressLevel, 'Village');


if(villages && villages.length > 0){
    console.log("Inside Error");
    validationErrors.push("Already Village is avaiable");
}     
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "86e652cc-b780-482b-bbbd-05b283add039"
        }
      ],
      "name": "Geography information",
      "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const validationResults = [];
  const individualService = params.services.individualService;
  
console.log("Start");
const villages = individualService.getSubjectsInLocation(individual.lowestAddressLevel, 'Village');

console.log("villages",villages);

if(villages && villages.length > 0){
    console.log("Inside Error");
    validationResults.push(imports.common.createValidationError("Already Village is avaiable"));
}                                                              
  return validationResults;
},
  "visitScheduleRule": ""
}