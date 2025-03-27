{
  "checklistsRule": "",
  "decisionConcepts": [],
  "decisionRule": "",
  "formElementGroups": [
    {
      "display": "Address",
      "displayOrder": 1,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 3",
                "order": 2,
                "uuid": "022f498b-d68d-43b5-95a2-07a388b8b746"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 1",
                "order": 0,
                "unique": true,
                "uuid": "1449c205-e3df-4e57-8068-24a533688ffc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 2",
                "order": 1,
                "uuid": "fea4b9ca-e3bd-423e-98ed-ae41cecdf8d1"
              }
            ],
            "dataType": "Coded",
            "name": "Districts (voided~207396)",
            "uuid": "45008c2c-e3cf-45b7-96fc-0350b2927d42",
            "voided": true
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Districts",
          "type": "SingleSelect",
          "uuid": "99ae2120-1c1e-4a74-ad87-69937883621e",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 2",
                "order": 1,
                "uuid": "fea4b9ca-e3bd-423e-98ed-ae41cecdf8d1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 3",
                "order": 2,
                "uuid": "022f498b-d68d-43b5-95a2-07a388b8b746"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 1",
                "order": 0,
                "uuid": "1449c205-e3df-4e57-8068-24a533688ffc"
              }
            ],
            "dataType": "Coded",
            "name": "Blocks (voided~220547)",
            "uuid": "706ec20c-611e-4acd-a046-d6a45e161b19",
            "voided": true
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Blocks",
          "type": "SingleSelect",
          "uuid": "ae238b65-0dc7-4833-a74c-526b9daa2a7a",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 1",
                "order": 0,
                "uuid": "1449c205-e3df-4e57-8068-24a533688ffc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 2",
                "order": 1,
                "uuid": "fea4b9ca-e3bd-423e-98ed-ae41cecdf8d1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 3",
                "order": 2,
                "uuid": "022f498b-d68d-43b5-95a2-07a388b8b746"
              }
            ],
            "dataType": "Coded",
            "name": "Villages (voided~220507)",
            "uuid": "17d911ad-18a5-4903-b43e-32d4674e86f0",
            "voided": true
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Village",
          "type": "SingleSelect",
          "uuid": "d24fda26-7b85-4227-9a2b-8cc2bb2a95da",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Location",
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "3410e7a2-cefe-4fc7-94b4-6631656c548c"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ],
            "name": "State",
            "uuid": "fdcb1ae2-505d-4784-993f-1de9d5e2ba60"
          },
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "State",
          "type": "SingleSelect",
          "uuid": "e2c96546-de28-4c25-8bd3-358353ef0199",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Village (voided~207375)",
            "uuid": "1f22b2fd-7279-4b6d-a92d-9a7415a8b14b",
            "voided": true
          },
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": true,
          "name": "Village",
          "type": "SingleSelect",
          "uuid": "7cbb726c-b488-4bf5-8481-1dc5599142ba",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Location",
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "47a9e070-090d-46f8-8f06-834c193b8bec"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ],
            "name": "Location",
            "uuid": "164971fe-2166-4b06-b215-926fba6362ef"
          },
          "displayOrder": 6,
          "keyValues": [],
          "mandatory": true,
          "name": "Village",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "1a03c018-7358-4441-90ea-d895f1768631"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of Participants (Female)",
            "uuid": "2966afcc-2c07-44cf-8711-3fc23f52a6b5"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptNameOtherThan",
                        "rhs": {
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of participants (Female)",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "c67a2e51-b00b-496f-8c3e-0aa48c001506"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "lowAbsolute": 1,
            "lowNormal": 1,
            "name": "Number of participants (voided~220326)",
            "uuid": "31ea4861-8939-42c2-a7a1-bcd2313946c6",
            "voided": true
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of participants",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "6bca3d44-66e9-4ff6-9c4d-3cb4eb6f30f1"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Date",
            "name": "Activity Start Date",
            "uuid": "8c938361-485e-4b5a-9643-51b741905fd8"
          },
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity start date",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  let visitDate = imports.moment(encounter.encounterDateTime).format('YYYYMMDD');  
  let activityStartDate = encounter.getObservationReadableValue('Activity Start Date');
  const activityStartDateStr = (activityStartDate && imports.moment(activityStartDate).format('YYYYMMDD')) || '0';
  
//  if(activityStartDate && visitDate > activityStartDateStr) { 
// statusBuilder.validationError("Activity start date cannot be after visit date");
// }
 // Changes start
 
 if( activityStartDate && imports.moment(encounter.individual.registrationDate).startOf('day') > imports.moment(activityStartDate).startOf('day')) {
   statusBuilder.validationError("Activity start date cannot be earlier than the Demand registration date");
 }
 
 // Changes End
 
  return statusBuilder.build();
},
          "type": "SingleSelect",
          "uuid": "b8b77965-4769-406a-9b8b-854e7ad64317"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Date",
            "name": "Activity End Date",
            "uuid": "2e85dffe-c09e-4adb-a1b2-41f59aa68d49"
          },
          "displayOrder": 6,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity end date",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  let activityStartDateObservation = encounter.findObservation('8c938361-485e-4b5a-9643-51b741905fd8');
  let activityStartDateValue = _.isEmpty(activityStartDateObservation) ? activityStartDateObservation : activityStartDateObservation.getReadableValue();
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("2e85dffe-c09e-4adb-a1b2-41f59aa68d49").lessThan(activityStartDateValue, 'day').matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("8c938361-485e-4b5a-9643-51b741905fd8").defined.matches();
  
  if(condition11 ){
    validationErrors.push("Activity End Date cannot be before Activity Start Date");  
}
    visibility = condition12 ;

  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "bdc0559a-8cd3-48ee-b4d0-ce11f2b66151"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of Days of Participation",
            "uuid": "9a182a63-61df-441c-af58-953253c8d0f2"
          },
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of days of participation",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  
  const startDate = encounter.getObservationReadableValue('Activity Start Date');
  const endDate = encounter.getObservationReadableValue('Activity End Date');
  const value = imports.moment(endDate).diff(imports.moment(startDate) ,'days') + 1;
  
  const duration = encounter.getObservationReadableValue('Number of Days of Participation');
  
  if(duration != undefined){
    if(duration > value){
    statusBuilder.validationError("Duration of activity cannot be more than the start and end dates entered!");
    }
  }
    
    if(duration != undefined){
    if(duration == 0){
    statusBuilder.validationError("Number of days participated cannot be zero");
    }
  }
    
  return statusBuilder.build();
},
          "type": "SingleSelect",
          "uuid": "d5366302-b570-4d18-98fc-cf04b74aa1e1"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Cultural (Dance/Drama/Singing/Poem/Skit/Story Telling/Rhymes)",
                "order": 2,
                "uuid": "bb9ba1dd-82c9-45ac-86c4-d524ab514f49"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Academic (Counting/Writing/Essay/Alphabet)",
                "order": 0,
                "uuid": "267c7456-ba18-44b3-93b3-a371460f9a30"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Sports (Games/Kho Kho/Yoga/Any other)",
                "order": 5,
                "uuid": "6f1feaba-3286-414d-a40b-d7eb259b7183"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Knowledge Activities (Health/Hygiene/Environment/Conservation)",
                "order": 3,
                "uuid": "ad8143ae-40f1-4b6b-ba97-c95cc091e9d8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Art & Craft (Painting/Drawing/Rangoli/ Craft Activity/Poster)",
                "order": 1,
                "uuid": "e1c97f61-ec50-4594-9254-606c2f15d2b9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "School Improvement Activities (Plantation/Kitchen Garden/Cleaning of School/Garden)",
                "order": 4,
                "uuid": "5a74c9f8-e5eb-4113-9c61-720d7eb4de7e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any other",
                "order": 6,
                "uuid": "f903963d-1c98-4f85-827c-c15a0930b845"
              }
            ],
            "dataType": "Coded",
            "name": "Activity Conducted With Students",
            "uuid": "2d3389d4-07ae-42cd-8c25-e9a0203e2c9a"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "or",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": true,
          "name": "S2S related activity",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "4d157151-8c28-4869-8c4c-6f88eb23c5e9"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Specify other S2S related activity",
            "uuid": "885b713c-7c3b-469e-bcab-5b30c742c2c4"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "S2S related activity",
                          "conceptUuid": "2d3389d4-07ae-42cd-8c25-e9a0203e2c9a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Any other"
                          ],
                          "answerConceptUuids": [
                            "f903963d-1c98-4f85-827c-c15a0930b845"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 9,
          "keyValues": [],
          "mandatory": true,
          "name": "Specify other S2S related activity",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("2d3389d4-07ae-42cd-8c25-e9a0203e2c9a").containsAnswerConceptName("f903963d-1c98-4f85-827c-c15a0930b845").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "7f84be8e-6b8d-4699-8179-7c5ba8382108"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "School / Anganwadi / Learning Center Name",
            "uuid": "2e39d19d-fc03-400e-9f5e-1f815483ea47"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "or",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 10,
          "keyValues": [],
          "mandatory": true,
          "name": "Name of Organization/School",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "2befa4dd-8ec9-4f21-9fdc-d5c29fd33669"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Electric Pole",
                    "order": 0,
                    "uuid": "38dc542e-277d-4790-8982-0d2f3253f0fc"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Others",
                    "order": 2,
                    "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Truck Unloading",
                    "order": 1,
                    "uuid": "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Toilet/Bathroom/private spaces",
                    "order": 3,
                    "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5"
                  }
                ],
                "dataType": "Coded",
                "name": "Miscellaneous",
                "order": 4,
                "uuid": "278d95a9-5a62-4ff2-b515-4a6332e09aca"
              },
              {
                "active": true,
                "answers": [
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Water was too dirty to drink",
                    "order": 2,
                    "uuid": "4cf67429-031f-41ae-a8e1-5e1a3dd696d5"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Water was dirty for use for livestock related needs",
                    "order": 3,
                    "uuid": "a4818198-5117-4d32-8ed0-aa7e1eaa6e80"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Shortage of water in the village",
                    "order": 0,
                    "uuid": "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "It was difficult to get clean and adequate water to fulfil household responsibilities",
                    "order": 10,
                    "uuid": "5381428f-cc8e-4a20-9e3c-994794de27f5"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Difficulty to get water for livestock related needs",
                    "order": 11,
                    "uuid": "50bd6eb9-cce1-4eff-b4c2-e7177256e83f"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Villagers especially women and children were spending too much time in collecting waters",
                    "order": 8,
                    "uuid": "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Water used to collect and the place would get flooded/swamped",
                    "order": 13,
                    "uuid": "14816271-baf3-4c13-865f-dcef92ab0c03"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Water was dirty to use for household related needs",
                    "order": 4,
                    "uuid": "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Villagers including children were getting sick",
                    "order": 9,
                    "uuid": "829f7f00-fcca-46fe-b0b5-ef39f2548141"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Any other not given above",
                    "order": 14,
                    "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Difficulty in reaching to water source",
                    "order": 1,
                    "uuid": "835cab14-f41e-43d4-a77f-db59b715317f"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Shortage of water for irrigation purposes",
                    "order": 12,
                    "uuid": "0605d833-b691-4a85-88a6-8dcba0405dbc"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Water needed to be conserved",
                    "order": 6,
                    "uuid": "c3bed0f8-f8fd-4403-ba66-837547d38623"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was a need for water tables to increase",
                    "order": 7,
                    "uuid": "b748ae00-0844-473d-b427-6031936809fa"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Water was getting wasted",
                    "order": 5,
                    "uuid": "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a"
                  }
                ],
                "dataType": "Coded",
                "name": "Water_Management",
                "order": 8,
                "uuid": "476a03c0-071a-42df-a04e-ec60752d1283"
              },
              {
                "active": true,
                "answers": [
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Water needed to be conserved, hence planted trees",
                    "order": 0,
                    "uuid": "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To ensure better nutrition to pregnant and lactating mother, hence kitchen garden",
                    "order": 5,
                    "uuid": "18121e37-b6e6-4301-a61b-4ccad01d1aad"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "The crops needed organic manure hence composting",
                    "order": 2,
                    "uuid": "75813429-7612-49f9-b159-e746c38be9da"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To construct partitions to demarcate areas",
                    "order": 11,
                    "uuid": "6e387d83-5663-458a-b69a-4eb2252e0594"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                    "order": 4,
                    "uuid": "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Any other not given above",
                    "order": 12,
                    "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To improve water retention capacity",
                    "order": 7,
                    "uuid": "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To increase incomes in the village from sales of vegetables",
                    "order": 6,
                    "uuid": "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was soil erosion due to heavy water flow hence need for plantation",
                    "order": 1,
                    "uuid": "07557c41-b1e1-47fd-8a16-d3dc5363a16e"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To improve agricultural productivity",
                    "order": 8,
                    "uuid": "14c72422-9cfc-49f4-a835-7ab131dd3190"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To decrease the impact of deforestation",
                    "order": 10,
                    "uuid": "9359f1ad-5024-4464-8cea-39579c1468ec"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                    "order": 3,
                    "uuid": "448ebcb5-6974-43b7-8d9b-67002770e1b5"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To improve grazing facilities for livestock",
                    "order": 9,
                    "uuid": "508c3b0b-9ba2-44a5-b8e4-9c82713368a4"
                  }
                ],
                "dataType": "Coded",
                "name": "Agriculture_Plantation",
                "order": 3,
                "uuid": "dc829fd5-0c19-4223-93a0-c29b8919dcc9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Access Infrastructure",
                "order": 0,
                "uuid": "452bc10f-09b4-446e-93f4-52d477885be0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Agriculture Plantation",
                "order": 2,
                "uuid": "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
              },
              {
                "active": true,
                "answers": [
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was limited/or no connectivity to nearly educational facilities/schools",
                    "order": 4,
                    "uuid": "adecc97c-6583-4439-9c8d-06b552b10e1d"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was no meeting place for villagers",
                    "order": 0,
                    "uuid": "20a4f33f-caa5-44ef-97dd-c39d50aade45"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To protect community infrastructure from getting damaged",
                    "order": 11,
                    "uuid": "027da0d9-9fab-4d60-aea7-f232c386a7b7"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was limited/or no connectivity to nearby market facilities",
                    "order": 5,
                    "uuid": "abb094e0-64f5-4058-9d56-0f270cb4add2"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To protect school facilities and ensure safety for children",
                    "order": 10,
                    "uuid": "cf36fe36-d7fe-4f2f-be9b-54f02480ed79"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To repair/rebuilt damaged community infrastructure",
                    "order": 12,
                    "uuid": "3ce67f78-49b8-4663-bb9d-00293e4e67a3"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "In order to increase life and longevity of trees",
                    "order": 9,
                    "uuid": "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was limited/or no connectivity to water facilities/sources",
                    "order": 6,
                    "uuid": "c1b668ce-5d81-4e25-80f2-10a0fc98d313"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was no connectivity to the market",
                    "order": 1,
                    "uuid": "834993e6-5643-4229-914d-a58df97cef30"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "The walls/boundaries of the school were damaged affecting studies",
                    "order": 8,
                    "uuid": "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was limited/or no connectivity to nearly medical facilities",
                    "order": 3,
                    "uuid": "865be3b0-6b05-475b-b624-43aca7568538"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Any other not given above",
                    "order": 13,
                    "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was limited/ or no connectivity to the nearby villages",
                    "order": 2,
                    "uuid": "6980e13a-5071-4b87-88b9-54f8d6bcce36"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "The children did not have a proper place to study",
                    "order": 7,
                    "uuid": "32d75b8f-e0c0-424b-85ae-a1d2829ee86a"
                  }
                ],
                "dataType": "Coded",
                "name": "Access_Infrastructure",
                "order": 1,
                "uuid": "72a547e0-0058-4840-8f9e-d22479e4a48f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Sanitation",
                "order": 6,
                "uuid": "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Miscellaneous Activity",
                "order": 5,
                "uuid": "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water Management",
                "order": 7,
                "uuid": "1b061e73-b94f-499d-b82c-234670e104c5"
              }
            ],
            "dataType": "Coded",
            "name": "Activity Type",
            "uuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "DFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 11,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity type",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "6b200803-bc74-4d58-84a6-1be3fcd87fc2"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Protection wall for roads",
                "order": 8,
                "uuid": "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Benches",
                "order": 1,
                "uuid": "db432dbe-7aed-44e8-9385-42973b3cf7bb"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Community Hall/Center/House",
                "order": 3,
                "uuid": "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Bridge/Pulia",
                "order": 2,
                "uuid": "61d8f60f-8496-4b6d-8d1a-9967e0ff024f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Fencing & boundary wall",
                "order": 4,
                "uuid": "f431cbac-b99d-48fb-8694-0299c352eb9a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 7,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Bandstand",
                "order": 0,
                "uuid": "f599df1e-a5e6-4f3e-b985-a196d55a3c73"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ground levelling",
                "order": 6,
                "uuid": "961b337f-fee4-4bed-a77a-83db71f1b5a2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Road",
                "order": 5,
                "uuid": "f98bacd7-701e-49ce-a268-b3e83d8f194f"
              }
            ],
            "dataType": "Coded",
            "name": "Activity Sub-type (voided~207436)",
            "uuid": "6bc60f7a-fe77-435a-b9ba-93de5e131123",
            "voided": true
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 12,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity Sub-type for Access infrastructure",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "a43a066c-fd40-4c11-bb6e-cea8553e7d49",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "River",
                "order": 7,
                "uuid": "00ee1a95-2236-4c43-83d7-36c911172069"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Check dam",
                "order": 4,
                "uuid": "824d11d4-525d-4610-9afe-f87c030a54eb"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Canal",
                "order": 0,
                "uuid": "a44830b7-3271-4313-baea-b6dc4e9cd5ae"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water-Tank/Pipeline",
                "order": 9,
                "uuid": "82246b7a-c13f-435d-9e17-d8d288ff3891"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "BackwaterDugwell/Chua/Jalkund (voided~207440)",
                "order": 5,
                "uuid": "64fe012a-3230-4115-8092-f16bf6286200",
                "voided": true
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 11,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Soak pit",
                "order": 12,
                "uuid": "be655900-d882-4d99-ab29-faf560b8e832"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Well",
                "order": 10,
                "uuid": "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Waterfall/Jharna/Spring Water/Dhara",
                "order": 8,
                "uuid": "a5f019c6-17a0-4536-8222-67935d482774"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Backwater",
                "order": 2,
                "uuid": "1a4d980d-30ef-46e4-8b76-44da9002be6b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                "order": 1,
                "uuid": "0dfe3de6-6bb0-4514-9c8a-3fde7752c440"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dugwell/Chua/Jalkhund",
                "order": 3,
                "uuid": "8cb3d890-db22-4c8b-885d-0cd71a0e4aad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Pond",
                "order": 6,
                "uuid": "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e"
              }
            ],
            "dataType": "Coded",
            "name": "Activity Sub-type for Water management",
            "uuid": "b116f78d-1c06-4014-a511-72378136204f"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 13,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity Sub-type for Water management",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("1b061e73-b94f-499d-b82c-234670e104c5").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "8f2d8338-3246-4e04-8750-22789bb2e93a",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Drainage",
                "order": 3,
                "uuid": "3f0bd027-abf0-4beb-a7e7-9967d1994852"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Road & road-side bush cutting",
                "order": 4,
                "uuid": "ba6d69d5-bdb8-48bd-bd70-87e0b9848178"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dustbin",
                "order": 0,
                "uuid": "ec39b654-3009-46ad-a2d4-2fda9f40d856"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water body premises",
                "order": 6,
                "uuid": "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Toilet/Bathroom/private spaces",
                "order": 1,
                "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Community spaces- Meeting point/ Religious places/ School/ Park & AWC etc",
                "order": 2,
                "uuid": "58653f74-082c-47a7-9a25-548990a4bd4c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 5,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              }
            ],
            "dataType": "Coded",
            "name": "Activity Sub-type for Sanitation (voided~207454)",
            "uuid": "3ab64b6c-8ad3-4cbe-9dc8-fa3a8246d6e6",
            "voided": true
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Sanitaiton"
                          ],
                          "answerConceptUuids": [
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 14,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity Sub-type for Sanitation",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "39fa204d-03d7-464a-bd69-5b71b009e9ae",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Plantation",
                "order": 4,
                "uuid": "74d20d4a-8444-476c-9b7b-b5b4341bcf8e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Compost Pit",
                "order": 0,
                "uuid": "798e61fa-8d8d-43b4-8738-251be7bdc5b4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Community farming",
                "order": 1,
                "uuid": "4ca95b4a-0d74-4bea-aac5-9f45da876178"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Land Bundling (voided~207458)",
                "order": 3,
                "uuid": "d7356902-e705-414d-99e4-f08b10fe7f73",
                "voided": true
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kitchen Garden",
                "order": 2,
                "uuid": "a9375cc4-e115-4f06-aa6c-33b7b4217685"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 5,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              }
            ],
            "dataType": "Coded",
            "name": "Activity Sub-type for Agricultural plantation",
            "uuid": "bdb69c4d-d46a-4387-9b08-aba1cdaf66cc"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 15,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity Sub-type for Agricultural plantation",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "e1831560-fb03-417a-8c7d-a5066d1349fe",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Electric Pole",
                "order": 0,
                "uuid": "38dc542e-277d-4790-8982-0d2f3253f0fc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 2,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Truck Unloading",
                "order": 1,
                "uuid": "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Toilet/Bathroom/private spaces",
                "order": 3,
                "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5"
              }
            ],
            "dataType": "Coded",
            "name": "Miscellaneous",
            "uuid": "278d95a9-5a62-4ff2-b515-4a6332e09aca"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Miscelleneous"
                          ],
                          "answerConceptUuids": [
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 16,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity Sub-type for Miscellaneous",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "1a13b496-6d77-4ebc-8a8c-ca72411ac54d",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Canal",
                "order": 4,
                "uuid": "a44830b7-3271-4313-baea-b6dc4e9cd5ae"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Backwater",
                "order": 0,
                "uuid": "1a4d980d-30ef-46e4-8b76-44da9002be6b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Toilet/Bathroom/private spaces",
                "order": 30,
                "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Plantation",
                "order": 22,
                "uuid": "74d20d4a-8444-476c-9b7b-b5b4341bcf8e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Soak pit",
                "order": 29,
                "uuid": "be655900-d882-4d99-ab29-faf560b8e832"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Truck Unloading",
                "order": 31,
                "uuid": "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "River",
                "order": 25,
                "uuid": "00ee1a95-2236-4c43-83d7-36c911172069"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Community spaces- Meeting point/ Religious places/ School/ Park & AWC etc",
                "order": 10,
                "uuid": "58653f74-082c-47a7-9a25-548990a4bd4c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Road",
                "order": 26,
                "uuid": "f98bacd7-701e-49ce-a268-b3e83d8f194f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Land Bunding",
                "order": 19,
                "uuid": "9ada0111-bbea-4fde-8097-32ccc0de6c78"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water body premises",
                "order": 33,
                "uuid": "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 21,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Bandstand",
                "order": 1,
                "uuid": "f599df1e-a5e6-4f3e-b985-a196d55a3c73"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Flower garden",
                "order": 39,
                "uuid": "2d229755-ee38-4f7f-a7f8-404125b3c393"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Electric Pole",
                "order": 15,
                "uuid": "38dc542e-277d-4790-8982-0d2f3253f0fc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Protection wall for roads",
                "order": 32,
                "uuid": "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                "order": 6,
                "uuid": "0dfe3de6-6bb0-4514-9c8a-3fde7752c440"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Compost pit",
                "order": 11,
                "uuid": "b462ddf4-977b-4bc5-8157-7f0132c5245d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kitchen Garden",
                "order": 18,
                "uuid": "a9375cc4-e115-4f06-aa6c-33b7b4217685"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Bridge/Pulia",
                "order": 3,
                "uuid": "61d8f60f-8496-4b6d-8d1a-9967e0ff024f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Pond",
                "order": 23,
                "uuid": "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Waterfall/Jharna/Spring Water/Dhara",
                "order": 36,
                "uuid": "a5f019c6-17a0-4536-8222-67935d482774"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Fencing & boundary wall",
                "order": 16,
                "uuid": "f431cbac-b99d-48fb-8694-0299c352eb9a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dugwell/Chua/Jalkhund",
                "order": 13,
                "uuid": "8cb3d890-db22-4c8b-885d-0cd71a0e4aad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Seed Balls",
                "order": 28,
                "uuid": "32699e9f-c289-4581-9781-24b2bdbb0841"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Nursery Making",
                "order": 40,
                "uuid": "bfee4ca1-77f7-4e19-8617-4f0e54d052a3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Land Bundling (voided~207458)",
                "order": 20,
                "uuid": "d7356902-e705-414d-99e4-f08b10fe7f73",
                "voided": true
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dustbin",
                "order": 14,
                "uuid": "ec39b654-3009-46ad-a2d4-2fda9f40d856"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Road & road-side bush cutting",
                "order": 27,
                "uuid": "ba6d69d5-bdb8-48bd-bd70-87e0b9848178"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Drainage",
                "order": 12,
                "uuid": "3f0bd027-abf0-4beb-a7e7-9967d1994852"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water-Tank/Pipeline",
                "order": 35,
                "uuid": "82246b7a-c13f-435d-9e17-d8d288ff3891"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Benches",
                "order": 2,
                "uuid": "db432dbe-7aed-44e8-9385-42973b3cf7bb"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Embankment / ghat",
                "order": 24,
                "uuid": "ec5c4214-ddd6-4146-8282-195f4d711c59"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Check dam",
                "order": 7,
                "uuid": "824d11d4-525d-4610-9afe-f87c030a54eb"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Whitewash/ painting",
                "order": 41,
                "uuid": "654e67f1-9d45-444e-aab5-20a980733ca4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ground levelling",
                "order": 17,
                "uuid": "961b337f-fee4-4bed-a77a-83db71f1b5a2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Well",
                "order": 37,
                "uuid": "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Community Hall/Center/House",
                "order": 9,
                "uuid": "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water storage pit",
                "order": 34,
                "uuid": "8748bdc4-de26-4411-a9b4-269abf7fc6f5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Percolation pit",
                "order": 38,
                "uuid": "1162b0e5-7ccf-4eac-92b4-6e71898fa268"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Community farming",
                "order": 8,
                "uuid": "4ca95b4a-0d74-4bea-aac5-9f45da876178"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "CCT",
                "order": 5,
                "uuid": "f246f297-f123-4b7a-b06f-d8c22a10bac2"
              }
            ],
            "dataType": "Coded",
            "name": "Activity sub type",
            "uuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "32699e9f-c289-4581-9781-24b2bdbb0841",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59"
                    ],
                    "answersToSkip": [
                      "Backwater",
                      "Canal",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Community Farming",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Compost pit",
                      "Drainage",
                      "Dugwell/Chua/Jalkund",
                      "Dustbin",
                      "Electric Pole",
                      "Kitchen Garden",
                      "Land bunding",
                      "Plantation",
                      "Pond",
                      "Pond ghat / embankment",
                      "River",
                      "Road & road side bush cutting",
                      "Seed ball",
                      "Soak Pit",
                      "Toilet/Bathroom/private spaces",
                      "Truck Unloading",
                      "Water storage pit",
                      "Water Tank/Pipeline",
                      "Water-body premises",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Well"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "or",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "32699e9f-c289-4581-9781-24b2bdbb0841",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                    ],
                    "answersToSkip": [
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Community Farming",
                      "Community Hall/Centre/House",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Compost pit",
                      "Drainage",
                      "Dustbin",
                      "Electric Pole",
                      "Fencing & Boundary Wall",
                      "Ground Levelling",
                      "Kitchen Garden",
                      "Land bunding",
                      "Plantation",
                      "Road",
                      "Road & road side bush cutting",
                      "Seed ball",
                      "Toilet/Bathroom/private spaces",
                      "Truck Unloading",
                      "Wall for Roads",
                      "Water-body premises"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "32699e9f-c289-4581-9781-24b2bdbb0841",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                    ],
                    "answersToSkip": [
                      "Backwater",
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Canal",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Community Farming",
                      "Community Hall/Centre/House",
                      "Compost pit",
                      "Dugwell/Chua/Jalkund",
                      "Electric Pole",
                      "Fencing & Boundary Wall",
                      "Ground Levelling",
                      "Kitchen Garden",
                      "Land bunding",
                      "Plantation",
                      "Pond",
                      "Pond ghat / embankment",
                      "River",
                      "Road",
                      "Seed ball",
                      "Soak Pit",
                      "Truck Unloading",
                      "Wall for Roads",
                      "Water storage pit",
                      "Water Tank/Pipeline",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Well"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Sanitation"
                          ],
                          "answerConceptUuids": [
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                    ],
                    "answersToSkip": [
                      "Backwater",
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Canal",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Community Hall/Centre/House",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Drainage",
                      "Dugwell/Chua/Jalkund",
                      "Dustbin",
                      "Electric Pole",
                      "Fencing & Boundary Wall",
                      "Ground Levelling",
                      "Pond",
                      "Pond ghat / embankment",
                      "River",
                      "Road",
                      "Road & road side bush cutting",
                      "Soak Pit",
                      "Toilet/Bathroom/private spaces",
                      "Truck Unloading",
                      "Wall for Roads",
                      "Water storage pit",
                      "Water Tank/Pipeline",
                      "Water-body premises",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Well"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "32699e9f-c289-4581-9781-24b2bdbb0841",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                    ],
                    "answersToSkip": [
                      "Backwater",
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Canal",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Community Farming",
                      "Community Hall/Centre/House",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Compost pit",
                      "Drainage",
                      "Dugwell/Chua/Jalkund",
                      "Dustbin",
                      "Fencing & Boundary Wall",
                      "Ground Levelling",
                      "Kitchen Garden",
                      "Land bunding",
                      "Plantation",
                      "Pond",
                      "Pond ghat / embankment",
                      "River",
                      "Road",
                      "Road & road side bush cutting",
                      "Seed ball",
                      "Soak Pit",
                      "Toilet/Bathroom/private spaces",
                      "Wall for Roads",
                      "Water storage pit",
                      "Water Tank/Pipeline",
                      "Water-body premises",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Well"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Agriculture Plantation",
                            "Miscellaneous Activity",
                            "Sanitaiton",
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5",
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f",
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 17,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity sub type",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("1b061e73-b94f-499d-b82c-234670e104c5").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").matches();
    
  const condition15 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
    
  const condition16 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","1b061e73-b94f-499d-b82c-234670e104c5","fe6cd113-e3e3-44b6-abe7-81ba7605787b","d0162f3e-d9a5-40e0-84e4-7130e8e732ee","f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
  
  if(condition11 ) {
    _.forEach(["a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","b462ddf4-977b-4bc5-8157-7f0132c5245d","9ada0111-bbea-4fde-8097-32ccc0de6c78","ec5c4214-ddd6-4146-8282-195f4d711c59","32699e9f-c289-4581-9781-24b2bdbb0841","8748bdc4-de26-4411-a9b4-269abf7fc6f5"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition12 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","b462ddf4-977b-4bc5-8157-7f0132c5245d","9ada0111-bbea-4fde-8097-32ccc0de6c78","32699e9f-c289-4581-9781-24b2bdbb0841"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","b462ddf4-977b-4bc5-8157-7f0132c5245d","9ada0111-bbea-4fde-8097-32ccc0de6c78","ec5c4214-ddd6-4146-8282-195f4d711c59","32699e9f-c289-4581-9781-24b2bdbb0841","8748bdc4-de26-4411-a9b4-269abf7fc6f5"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","ec5c4214-ddd6-4146-8282-195f4d711c59","8748bdc4-de26-4411-a9b4-269abf7fc6f5"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition15 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","ec39b654-3009-46ad-a2d4-2fda9f40d856","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","b462ddf4-977b-4bc5-8157-7f0132c5245d","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","9ada0111-bbea-4fde-8097-32ccc0de6c78","3f7366d8-350c-4290-aa9e-e265eea76ae5","ec5c4214-ddd6-4146-8282-195f4d711c59","8748bdc4-de26-4411-a9b4-269abf7fc6f5","32699e9f-c289-4581-9781-24b2bdbb0841"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    visibility = condition16 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "068992fb-3988-4063-88d9-46f56cca44df"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Specify Other Sub Type",
            "uuid": "e08bdfcc-fefc-4425-9abb-22578697e5a0"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Others"
                          ],
                          "answerConceptUuids": [
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 18,
          "keyValues": [],
          "mandatory": true,
          "name": "Specify Other Sub Type",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("016a6d0a-60f9-405f-8dac-08fcf6b39823").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "cb797444-c7e5-4b01-8985-3a0e4258e75a"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was getting wasted",
                "order": 49,
                "uuid": "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To repair/rebuilt damaged community infrastructure",
                "order": 40,
                "uuid": "3ce67f78-49b8-4663-bb9d-00293e4e67a3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Difficulty to get water for livestock related needs",
                "order": 2,
                "uuid": "50bd6eb9-cce1-4eff-b4c2-e7177256e83f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There is fear of being attacked by animals in heavily bushed roads",
                "order": 15,
                "uuid": "2db06055-67eb-4966-8591-c414aa00c774"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearly medical facilities",
                "order": 23,
                "uuid": "865be3b0-6b05-475b-b624-43aca7568538"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The road could not be used for commuting",
                "order": 12,
                "uuid": "3035de80-1603-4ea9-947b-82d093e2bba2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was stench all over the place",
                "order": 28,
                "uuid": "67977dec-8209-4483-8b77-030797cbd53e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/ or no connectivity to the nearby villages",
                "order": 19,
                "uuid": "6980e13a-5071-4b87-88b9-54f8d6bcce36"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There were mosquitoes breeding",
                "order": 29,
                "uuid": "486aceb0-4960-485a-a8e4-9bdad2f65c58"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Shortage of water for irrigation purposes",
                "order": 5,
                "uuid": "0605d833-b691-4a85-88a6-8dcba0405dbc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve grazing facilities for livestock",
                "order": 35,
                "uuid": "508c3b0b-9ba2-44a5-b8e4-9c82713368a4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve water retention capacity",
                "order": 36,
                "uuid": "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was a need for water tables to increase",
                "order": 16,
                "uuid": "b748ae00-0844-473d-b427-6031936809fa"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To increase incomes in the village from sales of vegetables",
                "order": 37,
                "uuid": "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was fear of getting bitten by snakes and worms while commuting",
                "order": 18,
                "uuid": "38ca7b94-0432-4e3a-bea8-1d33f9b2abad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers especially women and children were spending too much time in collecting waters",
                "order": 41,
                "uuid": "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Shortage of water in the village",
                "order": 6,
                "uuid": "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was fear of diseases like cholera and typhoid happening",
                "order": 17,
                "uuid": "7759083b-3bdd-4fac-b198-04ea94955631"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve agricultural productivity",
                "order": 34,
                "uuid": "14c72422-9cfc-49f4-a835-7ab131dd3190"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearly educational facilities/schools",
                "order": 21,
                "uuid": "adecc97c-6583-4439-9c8d-06b552b10e1d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To protect school facilities and ensure safety for children",
                "order": 39,
                "uuid": "cf36fe36-d7fe-4f2f-be9b-54f02480ed79"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To decrease the impact of deforestation",
                "order": 32,
                "uuid": "9359f1ad-5024-4464-8cea-39579c1468ec"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Children were unable to play",
                "order": 0,
                "uuid": "4fed6486-9c2e-4cbc-a6bb-92ad7c669955"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was too dirty to drink",
                "order": 50,
                "uuid": "4cf67429-031f-41ae-a8e1-5e1a3dd696d5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was dirty to use for household related needs",
                "order": 48,
                "uuid": "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The garbage used to be dumped everywhere",
                "order": 10,
                "uuid": "e550818a-037c-4cad-8565-5a9d6ed4b76e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The place was very dirty",
                "order": 11,
                "uuid": "f667c9e4-4300-4d4d-a726-009046566fa1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water needed to be conserved",
                "order": 44,
                "uuid": "c3bed0f8-f8fd-4403-ba66-837547d38623"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                "order": 26,
                "uuid": "448ebcb5-6974-43b7-8d9b-67002770e1b5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 52,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was no meeting place for villagers",
                "order": 25,
                "uuid": "20a4f33f-caa5-44ef-97dd-c39d50aade45"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "It was difficult to get clean and adequate water to fulfil household responsibilities",
                "order": 4,
                "uuid": "5381428f-cc8e-4a20-9e3c-994794de27f5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was soil erosion due to heavy water flow hence need for plantation",
                "order": 27,
                "uuid": "07557c41-b1e1-47fd-8a16-d3dc5363a16e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The crops needed organic manure hence composting",
                "order": 8,
                "uuid": "75813429-7612-49f9-b159-e746c38be9da"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To ensure better nutrition to pregnant and lactating mother, hence kitchen garden",
                "order": 33,
                "uuid": "18121e37-b6e6-4301-a61b-4ccad01d1aad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The children did not have a proper place to study",
                "order": 7,
                "uuid": "32d75b8f-e0c0-424b-85ae-a1d2829ee86a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers were getting sick repeatedly",
                "order": 43,
                "uuid": "18803ff7-484e-4187-a2ae-64e4f47890aa"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearby market facilities",
                "order": 20,
                "uuid": "abb094e0-64f5-4058-9d56-0f270cb4add2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was no connectivity to the market",
                "order": 24,
                "uuid": "834993e6-5643-4229-914d-a58df97cef30"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The drains were clogged",
                "order": 9,
                "uuid": "951ec09c-d99b-4830-9ea5-e5f9b4ddead9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To construct partitions to demarcate areas",
                "order": 31,
                "uuid": "6e387d83-5663-458a-b69a-4eb2252e0594"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The walls/boundaries of the school were damaged affecting studies",
                "order": 13,
                "uuid": "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Difficulty in reaching to water source",
                "order": 1,
                "uuid": "835cab14-f41e-43d4-a77f-db59b715317f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The women did not have bathrooms to change or bathe in privacy",
                "order": 14,
                "uuid": "b145f169-e306-4d4c-a820-88b51a63b2a6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water used to collect and the place would get flooded/swamped",
                "order": 46,
                "uuid": "14816271-baf3-4c13-865f-dcef92ab0c03"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To protect community infrastructure from getting damaged",
                "order": 38,
                "uuid": "027da0d9-9fab-4d60-aea7-f232c386a7b7"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water needed to be conserved, hence planted trees",
                "order": 45,
                "uuid": "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                "order": 30,
                "uuid": "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers including children were getting sick",
                "order": 42,
                "uuid": "829f7f00-fcca-46fe-b0b5-ef39f2548141"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any other not given above",
                "order": 51,
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was dirty for use for livestock related needs",
                "order": 47,
                "uuid": "a4818198-5117-4d32-8ed0-aa7e1eaa6e80"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "In order to increase life and longevity of trees",
                "order": 3,
                "uuid": "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to water facilities/sources",
                "order": 22,
                "uuid": "c1b668ce-5d81-4e25-80f2-10a0fc98d313"
              }
            ],
            "dataType": "Coded",
            "name": "Objective of Work",
            "uuid": "0ea2a76f-933e-448e-896a-46a4238a3488"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "DFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Agriculture Plantation",
                            "Miscellaneous Activity",
                            "Sanitaiton",
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5",
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f",
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
                    ],
                    "answersToSkip": [
                      "Children were unable to play",
                      "In order to increase life and longevity of trees",
                      "The children did not have a proper place to study",
                      "The crops needed organic manure hence composting",
                      "The drains were clogged",
                      "The garbage used to be dumped everywhere",
                      "The place was very dirty",
                      "The road could not be used for commuting",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was no connectivity to the market",
                      "There was no meeting place for villagers",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "There was stench all over the place",
                      "There were mosquitoes breeding",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To construct partitions to demarcate areas",
                      "To decrease the impact of deforestation",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To increase incomes in the village from sales of vegetables",
                      "To protect community infrastructure from getting damaged",
                      "To protect school facilities and ensure safety for children",
                      "To repair/rebuilt damaged community infrastructure",
                      "Villagers were getting sick repeatedly",
                      "Water needed to be conserved, hence planted trees"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
                    ],
                    "answersToSkip": [
                      "Children were unable to play",
                      "Difficulty in reaching to water source",
                      "Difficulty to get water for livestock related needs",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Shortage of water for irrigation purposes",
                      "Shortage of water in the village",
                      "The crops needed organic manure hence composting",
                      "The drains were clogged",
                      "The garbage used to be dumped everywhere",
                      "The place was very dirty",
                      "The road could not be used for commuting",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "There was a need for water tables to increase",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "There was stench all over the place",
                      "There were mosquitoes breeding",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To construct partitions to demarcate areas",
                      "To decrease the impact of deforestation",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To increase incomes in the village from sales of vegetables",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "Villagers were getting sick repeatedly",
                      "Water needed to be conserved",
                      "Water needed to be conserved",
                      "Water needed to be conserved, hence planted trees",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water was too dirty to drink"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
                    ],
                    "answersToSkip": [
                      "Difficulty in reaching to water source",
                      "Difficulty to get water for livestock related needs",
                      "In order to increase life and longevity of trees",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Shortage of water for irrigation purposes",
                      "Shortage of water in the village",
                      "The children did not have a proper place to study",
                      "The crops needed organic manure hence composting",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "There was a need for water tables to increase",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was no connectivity to the market",
                      "There was no meeting place for villagers",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To construct partitions to demarcate areas",
                      "To decrease the impact of deforestation",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To increase incomes in the village from sales of vegetables",
                      "To protect community infrastructure from getting damaged",
                      "To protect school facilities and ensure safety for children",
                      "To repair/rebuilt damaged community infrastructure",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "Water needed to be conserved",
                      "Water needed to be conserved",
                      "Water needed to be conserved, hence planted trees",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water was too dirty to drink"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Sanitaiton"
                          ],
                          "answerConceptUuids": [
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "f667c9e4-4300-4d4d-a726-009046566fa1"
                    ],
                    "answersToSkip": [
                      "Children were unable to play",
                      "Difficulty in reaching to water source",
                      "Difficulty to get water for livestock related needs",
                      "In order to increase life and longevity of trees",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Shortage of water for irrigation purposes",
                      "Shortage of water in the village",
                      "The children did not have a proper place to study",
                      "The drains were clogged",
                      "The garbage used to be dumped everywhere",
                      "The place was very dirty",
                      "The road could not be used for commuting",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "There was a need for water tables to increase",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was no connectivity to the market",
                      "There was no meeting place for villagers",
                      "There was stench all over the place",
                      "There were mosquitoes breeding",
                      "To protect community infrastructure from getting damaged",
                      "To protect school facilities and ensure safety for children",
                      "To repair/rebuilt damaged community infrastructure",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "Villagers were getting sick repeatedly",
                      "Water needed to be conserved",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water was too dirty to drink"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
                    ],
                    "answersToSkip": [
                      "Children were unable to play",
                      "Difficulty in reaching to water source",
                      "Difficulty to get water for livestock related needs",
                      "In order to increase life and longevity of trees",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Others",
                      "Shortage of water for irrigation purposes",
                      "Shortage of water in the village",
                      "The children did not have a proper place to study",
                      "The crops needed organic manure hence composting",
                      "The drains were clogged",
                      "The garbage used to be dumped everywhere",
                      "The place was very dirty",
                      "The road could not be used for commuting",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "There was a need for water tables to increase",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was no connectivity to the market",
                      "There was no meeting place for villagers",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "There was stench all over the place",
                      "There were mosquitoes breeding",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To construct partitions to demarcate areas",
                      "To decrease the impact of deforestation",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To increase incomes in the village from sales of vegetables",
                      "To protect community infrastructure from getting damaged",
                      "To protect school facilities and ensure safety for children",
                      "To repair/rebuilt damaged community infrastructure",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "Villagers were getting sick repeatedly",
                      "Water needed to be conserved",
                      "Water needed to be conserved, hence planted trees",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water was too dirty to drink"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 19,
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Others"
              ]
            }
          ],
          "mandatory": true,
          "name": "Objective of work",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","fe6cd113-e3e3-44b6-abe7-81ba7605787b","1b061e73-b94f-499d-b82c-234670e104c5","d0162f3e-d9a5-40e0-84e4-7130e8e732ee","f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("1b061e73-b94f-499d-b82c-234670e104c5").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
    
  const condition15 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").matches();
    
  const condition16 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
  
  visibility = condition11 && condition21 ;
    if(condition12 ) {
    _.forEach(["f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","f674eee6-c577-4807-a5c2-b7bfa6d1c516","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","c1b668ce-5d81-4e25-80f2-10a0fc98d313","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","834993e6-5643-4229-914d-a58df97cef30","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","c3bed0f8-f8fd-4403-ba66-837547d38623","cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","f674eee6-c577-4807-a5c2-b7bfa6d1c516","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","c3bed0f8-f8fd-4403-ba66-837547d38623","448ebcb5-6974-43b7-8d9b-67002770e1b5","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","14c72422-9cfc-49f4-a835-7ab131dd3190","f674eee6-c577-4807-a5c2-b7bfa6d1c516","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition15 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition16 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","829f7f00-fcca-46fe-b0b5-ef39f2548141","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","07557c41-b1e1-47fd-8a16-d3dc5363a16e","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","f674eee6-c577-4807-a5c2-b7bfa6d1c516","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","016a6d0a-60f9-405f-8dac-08fcf6b39823","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "b02bfa24-b286-491e-b3c9-e09d0f5c86c4"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Any other not given above, Specify other",
            "uuid": "33919c90-92b1-44f6-a5c8-3d04a3d159a1"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Objective of Work",
                          "conceptUuid": "0ea2a76f-933e-448e-896a-46a4238a3488",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Any other not given above"
                          ],
                          "answerConceptUuids": [
                            "f9a72c48-3238-441d-a1de-2d8cd938dc22"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 20,
          "keyValues": [],
          "mandatory": true,
          "name": "Specify other",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("0ea2a76f-933e-448e-896a-46a4238a3488").containsAnswerConceptName("f9a72c48-3238-441d-a1de-2d8cd938dc22").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "fcb15fc3-3778-4d4b-8501-aaa4e5fb838b"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Specify Other Objective",
            "uuid": "3e1070a7-6c19-4594-aeb6-542025a66f8a"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Objective of Work",
                          "conceptUuid": "0ea2a76f-933e-448e-896a-46a4238a3488",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Others"
                          ],
                          "answerConceptUuids": [
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 21,
          "keyValues": [],
          "mandatory": false,
          "name": "Specify Other Objective",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("0ea2a76f-933e-448e-896a-46a4238a3488").containsAnswerConceptName("016a6d0a-60f9-405f-8dac-08fcf6b39823").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "08b9f98e-2f76-4fa4-9c08-ac841fe38046",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Making / Repairing",
                "order": 3,
                "uuid": "3c01a59c-3428-4f10-b95a-34c0b0dd2c67"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Repairing",
                "order": 2,
                "uuid": "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Cleaning",
                "order": 0,
                "uuid": "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Making",
                "order": 1,
                "uuid": "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Repairing / Cleaning",
                "order": 4,
                "uuid": "6116fbd2-f5e4-46bb-930d-7df3d7bc2292"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 6,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Making / Repairing / Cleaning",
                "order": 5,
                "uuid": "dca93504-ecb5-40fc-bfca-8d96d54f35f2"
              }
            ],
            "dataType": "Coded",
            "name": "Activity category",
            "uuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Agriculture Plantation",
                            "Miscellaneous Activity",
                            "Sanitaiton",
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5",
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f",
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                    ],
                    "answersToSkip": [
                      "Cleaning"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Bandstand",
                            "Benches",
                            "Bridge/Pulia",
                            "Community Farming",
                            "Community Hall/Centre/House",
                            "Compost pit",
                            "Dustbin",
                            "Electric Pole",
                            "Fencing & Boundary Wall",
                            "Ground Levelling",
                            "Kitchen Garden",
                            "Land bunding",
                            "Plantation",
                            "Road",
                            "Seed ball",
                            "Toilet/Bathroom/private spaces",
                            "Wall for Roads"
                          ],
                          "answerConceptUuids": [
                            "32699e9f-c289-4581-9781-24b2bdbb0841",
                            "38dc542e-277d-4790-8982-0d2f3253f0fc",
                            "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                            "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                            "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                            "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                            "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                            "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                            "f431cbac-b99d-48fb-8694-0299c352eb9a",
                            "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                    ],
                    "answersToSkip": [
                      "Making"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                            "Ground levelling",
                            "Road & road side bush cutting",
                            "Truck Unloading",
                            "Water-body premises"
                          ],
                          "answerConceptUuids": [
                            "58653f74-082c-47a7-9a25-548990a4bd4c",
                            "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                            "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                            "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                    ],
                    "answersToSkip": [
                      "Repairing"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                            "Compost pit",
                            "Dustbin",
                            "Land Bunding",
                            "Plantation",
                            "Road & road side bush cutting",
                            "Seed ball",
                            "Truck Unloading",
                            "Water-body premises"
                          ],
                          "answerConceptUuids": [
                            "32699e9f-c289-4581-9781-24b2bdbb0841",
                            "58653f74-082c-47a7-9a25-548990a4bd4c",
                            "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                            "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                            "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                            "ec39b654-3009-46ad-a2d4-2fda9f40d856"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 22,
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Making / Repairing",
                "Making / Repairing / Cleaning",
                "Repairing / Cleaning"
              ]
            }
          ],
          "mandatory": true,
          "name": "Activity category",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","1b061e73-b94f-499d-b82c-234670e104c5","d0162f3e-d9a5-40e0-84e4-7130e8e732ee","fe6cd113-e3e3-44b6-abe7-81ba7605787b","f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","9ada0111-bbea-4fde-8097-32ccc0de6c78","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","b462ddf4-977b-4bc5-8157-7f0132c5245d","38dc542e-277d-4790-8982-0d2f3253f0fc","32699e9f-c289-4581-9781-24b2bdbb0841").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("58653f74-082c-47a7-9a25-548990a4bd4c","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","961b337f-fee4-4bed-a77a-83db71f1b5a2","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("58653f74-082c-47a7-9a25-548990a4bd4c","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","9ada0111-bbea-4fde-8097-32ccc0de6c78","ec39b654-3009-46ad-a2d4-2fda9f40d856","b462ddf4-977b-4bc5-8157-7f0132c5245d","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","32699e9f-c289-4581-9781-24b2bdbb0841").matches();
  
  visibility = condition11 ;
    if(condition12 ) {
    _.forEach(["cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["95882ddd-13f3-4ea8-b7f2-026e332bdc06"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["b66fa362-b975-4f0e-a7b2-9b0c37205c54"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "d2ba4c04-70ca-48a0-a1de-e659d9cad701"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "QuestionGroup",
            "name": "Objective of work (voided~207476)",
            "uuid": "6e6fe7fc-0cf0-4b68-93a6-7b95e12fd08c",
            "voided": true
          },
          "displayOrder": 23,
          "keyValues": [],
          "mandatory": true,
          "name": "Objective of work",
          "type": "SingleSelect",
          "uuid": "2783e8b1-51c8-4f1e-85f2-6bdaf25e2b7e",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Cleaning",
                "order": 0,
                "uuid": "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Making",
                "order": 1,
                "uuid": "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Repairing",
                "order": 2,
                "uuid": "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
              }
            ],
            "dataType": "Coded",
            "name": "Activity Category (voided~207467)",
            "uuid": "5c26afbe-c19e-4419-b89e-d03846c0e2e2",
            "voided": true
          },
          "displayOrder": 24,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity Category",
          "parentFormElementUuid": "2783e8b1-51c8-4f1e-85f2-6bdaf25e2b7e",
          "type": "SingleSelect",
          "uuid": "ac18bf96-58aa-4a8f-8404-3af9dd24032c",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was stench all over the place",
                "order": 5,
                "uuid": "67977dec-8209-4483-8b77-030797cbd53e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The place was very dirty",
                "order": 0,
                "uuid": "f667c9e4-4300-4d4d-a726-009046566fa1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers were getting sick repeatedly",
                "order": 7,
                "uuid": "18803ff7-484e-4187-a2ae-64e4f47890aa"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The road could not be used for commuting",
                "order": 3,
                "uuid": "3035de80-1603-4ea9-947b-82d093e2bba2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was fear of diseases like cholera and typhoid happening",
                "order": 9,
                "uuid": "7759083b-3bdd-4fac-b198-04ea94955631"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The drains were clogged",
                "order": 2,
                "uuid": "951ec09c-d99b-4830-9ea5-e5f9b4ddead9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Children were unable to play",
                "order": 6,
                "uuid": "4fed6486-9c2e-4cbc-a6bb-92ad7c669955"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was fear of getting bitten by snakes and worms while commuting",
                "order": 8,
                "uuid": "38ca7b94-0432-4e3a-bea8-1d33f9b2abad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The garbage used to be dumped everywhere",
                "order": 4,
                "uuid": "e550818a-037c-4cad-8565-5a9d6ed4b76e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The women did not have bathrooms to change or bathe in privacy",
                "order": 11,
                "uuid": "b145f169-e306-4d4c-a820-88b51a63b2a6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There were mosquitoes breeding",
                "order": 1,
                "uuid": "486aceb0-4960-485a-a8e4-9bdad2f65c58"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There is fear of being attacked by animals in heavily bushed roads",
                "order": 10,
                "uuid": "2db06055-67eb-4966-8591-c414aa00c774"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any other not given above",
                "order": 12,
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
              }
            ],
            "dataType": "Coded",
            "name": "Sanitation activity",
            "uuid": "21a0ec64-d7d7-4dd9-a4b9-3ce68cc6be3c"
          },
          "displayOrder": 25,
          "keyValues": [],
          "mandatory": true,
          "name": "Sanitation",
          "parentFormElementUuid": "2783e8b1-51c8-4f1e-85f2-6bdaf25e2b7e",
          "type": "SingleSelect",
          "uuid": "c7a30eeb-bdf8-4106-9278-0fceb7a8a462",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water needed to be conserved, hence planted trees",
                "order": 0,
                "uuid": "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To ensure better nutrition to pregnant and lactating mother, hence kitchen garden",
                "order": 5,
                "uuid": "18121e37-b6e6-4301-a61b-4ccad01d1aad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The crops needed organic manure hence composting",
                "order": 2,
                "uuid": "75813429-7612-49f9-b159-e746c38be9da"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To construct partitions to demarcate areas",
                "order": 11,
                "uuid": "6e387d83-5663-458a-b69a-4eb2252e0594"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                "order": 4,
                "uuid": "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any other not given above",
                "order": 12,
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve water retention capacity",
                "order": 7,
                "uuid": "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To increase incomes in the village from sales of vegetables",
                "order": 6,
                "uuid": "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was soil erosion due to heavy water flow hence need for plantation",
                "order": 1,
                "uuid": "07557c41-b1e1-47fd-8a16-d3dc5363a16e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve agricultural productivity",
                "order": 8,
                "uuid": "14c72422-9cfc-49f4-a835-7ab131dd3190"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To decrease the impact of deforestation",
                "order": 10,
                "uuid": "9359f1ad-5024-4464-8cea-39579c1468ec"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                "order": 3,
                "uuid": "448ebcb5-6974-43b7-8d9b-67002770e1b5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve grazing facilities for livestock",
                "order": 9,
                "uuid": "508c3b0b-9ba2-44a5-b8e4-9c82713368a4"
              }
            ],
            "dataType": "Coded",
            "name": "Agriculture_Plantation",
            "uuid": "dc829fd5-0c19-4223-93a0-c29b8919dcc9"
          },
          "displayOrder": 26,
          "keyValues": [],
          "mandatory": true,
          "name": "Agriculture_Plantation",
          "parentFormElementUuid": "2783e8b1-51c8-4f1e-85f2-6bdaf25e2b7e",
          "type": "SingleSelect",
          "uuid": "1dd68c64-fe86-4afb-9865-d715fc6d50dd",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Difficulty in reaching to water source",
                "order": 1,
                "uuid": "835cab14-f41e-43d4-a77f-db59b715317f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was too dirty to drink",
                "order": 2,
                "uuid": "4cf67429-031f-41ae-a8e1-5e1a3dd696d5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was getting wasted",
                "order": 5,
                "uuid": "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers especially women and children were spending too much time in collecting waters",
                "order": 8,
                "uuid": "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers including children were getting sick",
                "order": 9,
                "uuid": "829f7f00-fcca-46fe-b0b5-ef39f2548141"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was dirty for use for livestock related needs",
                "order": 3,
                "uuid": "a4818198-5117-4d32-8ed0-aa7e1eaa6e80"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water needed to be conserved",
                "order": 6,
                "uuid": "c3bed0f8-f8fd-4403-ba66-837547d38623"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any other not given above",
                "order": 14,
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Shortage of water for irrigation purposes",
                "order": 12,
                "uuid": "0605d833-b691-4a85-88a6-8dcba0405dbc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water used to collect and the place would get flooded/swamped",
                "order": 13,
                "uuid": "14816271-baf3-4c13-865f-dcef92ab0c03"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Shortage of water in the village",
                "order": 0,
                "uuid": "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "It was difficult to get clean and adequate water to fulfil household responsibilities",
                "order": 10,
                "uuid": "5381428f-cc8e-4a20-9e3c-994794de27f5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Difficulty to get water for livestock related needs",
                "order": 11,
                "uuid": "50bd6eb9-cce1-4eff-b4c2-e7177256e83f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was a need for water tables to increase",
                "order": 7,
                "uuid": "b748ae00-0844-473d-b427-6031936809fa"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was dirty to use for household related needs",
                "order": 4,
                "uuid": "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c"
              }
            ],
            "dataType": "Coded",
            "name": "Water management",
            "uuid": "0730dcd3-d272-481f-8a5d-09de5fae1005"
          },
          "displayOrder": 27,
          "keyValues": [],
          "mandatory": true,
          "name": "Water management",
          "parentFormElementUuid": "2783e8b1-51c8-4f1e-85f2-6bdaf25e2b7e",
          "type": "SingleSelect",
          "uuid": "158afa1f-84e4-4805-ab6d-73ed9fd1d11a",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearly educational facilities/schools",
                "order": 4,
                "uuid": "adecc97c-6583-4439-9c8d-06b552b10e1d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was no meeting place for villagers",
                "order": 0,
                "uuid": "20a4f33f-caa5-44ef-97dd-c39d50aade45"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To protect community infrastructure from getting damaged",
                "order": 11,
                "uuid": "027da0d9-9fab-4d60-aea7-f232c386a7b7"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearby market facilities",
                "order": 5,
                "uuid": "abb094e0-64f5-4058-9d56-0f270cb4add2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To protect school facilities and ensure safety for children",
                "order": 10,
                "uuid": "cf36fe36-d7fe-4f2f-be9b-54f02480ed79"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To repair/rebuilt damaged community infrastructure",
                "order": 12,
                "uuid": "3ce67f78-49b8-4663-bb9d-00293e4e67a3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "In order to increase life and longevity of trees",
                "order": 9,
                "uuid": "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to water facilities/sources",
                "order": 6,
                "uuid": "c1b668ce-5d81-4e25-80f2-10a0fc98d313"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was no connectivity to the market",
                "order": 1,
                "uuid": "834993e6-5643-4229-914d-a58df97cef30"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The walls/boundaries of the school were damaged affecting studies",
                "order": 8,
                "uuid": "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearly medical facilities",
                "order": 3,
                "uuid": "865be3b0-6b05-475b-b624-43aca7568538"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any other not given above",
                "order": 13,
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/ or no connectivity to the nearby villages",
                "order": 2,
                "uuid": "6980e13a-5071-4b87-88b9-54f8d6bcce36"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The children did not have a proper place to study",
                "order": 7,
                "uuid": "32d75b8f-e0c0-424b-85ae-a1d2829ee86a"
              }
            ],
            "dataType": "Coded",
            "name": "Access_Infrastructure",
            "uuid": "72a547e0-0058-4840-8f9e-d22479e4a48f"
          },
          "displayOrder": 28,
          "keyValues": [],
          "mandatory": true,
          "name": "Access_Infrastructure",
          "parentFormElementUuid": "2783e8b1-51c8-4f1e-85f2-6bdaf25e2b7e",
          "type": "SingleSelect",
          "uuid": "a79895bf-317a-4ba0-992a-c3701a5cc93c",
          "voided": true
        }
      ],
      "name": "Activity Details",
      "timed": false,
      "uuid": "439443e2-63fd-4b08-920f-9775e77b38db"
    },
    {
      "declarativeRule": [
        {
          "actions": [
            {
              "actionType": "hideFormElementGroup"
            }
          ],
          "conditions": [
            {
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "conceptDataType": "Coded",
                      "conceptName": "Activity sub type",
                      "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                      "scope": "encounter",
                      "type": "concept"
                    },
                    "operator": "containsAnyAnswerConceptName",
                    "rhs": {
                      "answerConceptNames": [
                        "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                        "Fencing & Boundary Wall",
                        "Ground Levelling",
                        "Others",
                        "Truck Unloading",
                        "Water Tank/Pipeline",
                        "Waterfall/Jharna/Spring Water/Dhara"
                      ],
                      "answerConceptUuids": [
                        "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                        "58653f74-082c-47a7-9a25-548990a4bd4c",
                        "82246b7a-c13f-435d-9e17-d8d288ff3891",
                        "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                        "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                        "a5f019c6-17a0-4536-8222-67935d482774",
                        "f431cbac-b99d-48fb-8694-0299c352eb9a"
                      ],
                      "type": "answerConcept"
                    }
                  }
                ]
              },
              "conjunction": "or"
            },
            {
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "conceptDataType": "Coded",
                      "conceptName": "Type of Initiative",
                      "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                      "scope": "encounter",
                      "type": "concept"
                    },
                    "operator": "containsAnswerConceptNameOtherThan",
                    "rhs": {
                      "answerConceptNames": [
                        "DFW"
                      ],
                      "answerConceptUuids": [
                        "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
                      ],
                      "type": "answerConcept"
                    }
                  }
                ]
              }
            }
          ]
        }
      ],
      "display": "Measurement",
      "displayOrder": 3,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Numbers (voided~207468)",
                "order": 2,
                "uuid": "61848cd7-b583-4640-b426-331de38417ee",
                "voided": true
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Volume",
                "order": 4,
                "uuid": "700c0785-7f52-43b4-917d-e1c482c62db2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Numbers",
                "order": 1,
                "uuid": "23598869-15a8-43d3-a8f3-4f75b372cdc1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "Numeric",
                "name": "Numbers (voided~207563)",
                "order": 3,
                "uuid": "d4c428d1-512f-4881-87f0-611d7746dd6c",
                "voided": true
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Area",
                "order": 0,
                "uuid": "96452733-db5e-4e82-8e75-8ef8a308ea8a"
              }
            ],
            "dataType": "Coded",
            "name": "Measurements Type",
            "uuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "23598869-15a8-43d3-a8f3-4f75b372cdc1"
                    ],
                    "answersToSkip": [
                      "Number"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Backwater",
                            "Bridge/Pulia",
                            "Canal",
                            "Check Dam",
                            "Community Farming",
                            "Drainage",
                            "Land bunding",
                            "Others",
                            "Pond",
                            "Pond ghat / embankment",
                            "River",
                            "Road",
                            "Road & road side bush cutting",
                            "Truck Unloading",
                            "Wall for Roads",
                            "Well"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "23598869-15a8-43d3-a8f3-4f75b372cdc1",
                      "700c0785-7f52-43b4-917d-e1c482c62db2"
                    ],
                    "answersToSkip": [
                      "Number",
                      "Volume"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Bridge/Pulia",
                            "Community Farming",
                            "Drainage",
                            "Land bunding",
                            "River",
                            "Road",
                            "Road & road side bush cutting",
                            "Wall for Roads"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "700c0785-7f52-43b4-917d-e1c482c62db2",
                      "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                    ],
                    "answersToSkip": [
                      "Area",
                      "Volume"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Bandstand",
                            "Benches",
                            "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                            "Community Hall/Centre/House",
                            "Compost pit",
                            "Dugwell/Chua/Jalkhund",
                            "Dustbin",
                            "Electric Pole",
                            "Kitchen Garden",
                            "Plantation",
                            "Seed ball",
                            "Soak pit",
                            "Soak Pit",
                            "Toilet/Bathroom/private spaces",
                            "Water storage pit",
                            "Water-body premises"
                          ],
                          "answerConceptUuids": [
                            "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                            "32699e9f-c289-4581-9781-24b2bdbb0841",
                            "38dc542e-277d-4790-8982-0d2f3253f0fc",
                            "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                            "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                            "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                            "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                            "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                            "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                            "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                            "be655900-d882-4d99-ab29-faf560b8e832",
                            "be655900-d882-4d99-ab29-faf560b8e832",
                            "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                            "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                            "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                            "f599df1e-a5e6-4f3e-b985-a196d55a3c73"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                    ],
                    "answersToSkip": [
                      "Area"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Canal"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Measurements type",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","3f0bd027-abf0-4beb-a7e7-9967d1994852","4ca95b4a-0d74-4bea-aac5-9f45da876178","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","a44830b7-3271-4313-baea-b6dc4e9cd5ae","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a7b922a1-a389-4ba1-94ca-59baf7a961d0","9ada0111-bbea-4fde-8097-32ccc0de6c78","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","016a6d0a-60f9-405f-8dac-08fcf6b39823","ec5c4214-ddd6-4146-8282-195f4d711c59").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","3f0bd027-abf0-4beb-a7e7-9967d1994852","4ca95b4a-0d74-4bea-aac5-9f45da876178","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","9ada0111-bbea-4fde-8097-32ccc0de6c78","00ee1a95-2236-4c43-83d7-36c911172069").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","b462ddf4-977b-4bc5-8157-7f0132c5245d","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","be655900-d882-4d99-ab29-faf560b8e832","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","be655900-d882-4d99-ab29-faf560b8e832","38dc542e-277d-4790-8982-0d2f3253f0fc","32699e9f-c289-4581-9781-24b2bdbb0841","8748bdc4-de26-4411-a9b4-269abf7fc6f5").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae").matches();
  
  if(condition11 ) {
    _.forEach(["23598869-15a8-43d3-a8f3-4f75b372cdc1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition12 ) {
    _.forEach(["23598869-15a8-43d3-a8f3-4f75b372cdc1","700c0785-7f52-43b4-917d-e1c482c62db2"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["96452733-db5e-4e82-8e75-8ef8a308ea8a","700c0785-7f52-43b4-917d-e1c482c62db2"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["96452733-db5e-4e82-8e75-8ef8a308ea8a"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "d6456af9-d1f8-4dff-976a-f6130d4231ed"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Nos",
            "uuid": "c8d91a28-238d-40ad-a26b-1be059c47863"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Number"
                          ],
                          "answerConceptUuids": [
                            "23598869-15a8-43d3-a8f3-4f75b372cdc1"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Nos",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("23598869-15a8-43d3-a8f3-4f75b372cdc1").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "42f0b85e-410c-4810-bdef-b4834c7ede9d"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Numbers (voided~207563)",
            "uuid": "d4c428d1-512f-4881-87f0-611d7746dd6c",
            "voided": true
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Number"
                          ],
                          "answerConceptUuids": [
                            "23598869-15a8-43d3-a8f3-4f75b372cdc1"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Nos",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("23598869-15a8-43d3-a8f3-4f75b372cdc1").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "de647d2e-b399-4ead-890e-16b234be6ba8",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Length",
            "uuid": "7ea0b0c5-e593-44ac-80f0-e675a53d1d4a"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Bridge/Pulia",
                            "Community Farming",
                            "Land bunding",
                            "Road",
                            "Wall for Roads"
                          ],
                          "answerConceptUuids": [
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Backwater",
                            "Canal",
                            "Check Dam",
                            "Pond",
                            "Pond ghat / embankment",
                            "River"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Drainage"
                          ],
                          "answerConceptUuids": [
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Road & road side bush cutting"
                          ],
                          "answerConceptUuids": [
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Backwater",
                            "Canal",
                            "Check Dam",
                            "Pond",
                            "Pond ghat / embankment",
                            "River"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "Length",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","4ca95b4a-0d74-4bea-aac5-9f45da876178","9ada0111-bbea-4fde-8097-32ccc0de6c78","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition41 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","824d11d4-525d-4610-9afe-f87c030a54eb","ec5c4214-ddd6-4146-8282-195f4d711c59").matches();
  
  const condition51 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition61 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition71 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("3f0bd027-abf0-4beb-a7e7-9967d1994852").matches();
  
  const condition81 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition91 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition101 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("ba6d69d5-bdb8-48bd-bd70-87e0b9848178").matches();
  
  const condition111 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnswerConceptName("cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition121 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition131 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","824d11d4-525d-4610-9afe-f87c030a54eb","ec5c4214-ddd6-4146-8282-195f4d711c59").matches();
  
  const condition141 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition151 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 || condition41 && condition51 && condition61 || condition71 && condition81 && condition91 || condition101 && condition111 && condition121 || condition131 && condition141 && condition151 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "84fd5d6c-469d-4644-bb76-2016bb792d22"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Breadth",
            "uuid": "1197d309-c9a1-4d65-8e45-61bfd6f01aee"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Bridge/Pulia",
                            "Community Farming",
                            "Land bunding",
                            "Road"
                          ],
                          "answerConceptUuids": [
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Drainage"
                          ],
                          "answerConceptUuids": [
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Backwater",
                            "Canal",
                            "Check Dam",
                            "Pond",
                            "Pond ghat / embankment",
                            "River"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Road & road side bush cutting"
                          ],
                          "answerConceptUuids": [
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Backwater",
                            "Canal",
                            "Check Dam",
                            "Pond",
                            "Pond ghat / embankment",
                            "River"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": true,
          "name": "Breadth",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","4ca95b4a-0d74-4bea-aac5-9f45da876178","9ada0111-bbea-4fde-8097-32ccc0de6c78").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition41 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("3f0bd027-abf0-4beb-a7e7-9967d1994852").matches();
  
  const condition51 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition61 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition71 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","ec5c4214-ddd6-4146-8282-195f4d711c59").matches();
  
  const condition81 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition91 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition101 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("ba6d69d5-bdb8-48bd-bd70-87e0b9848178").matches();
  
  const condition111 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnswerConceptName("cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition121 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition131 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","824d11d4-525d-4610-9afe-f87c030a54eb","ec5c4214-ddd6-4146-8282-195f4d711c59").matches();
  
  const condition141 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition151 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 || condition41 && condition51 && condition61 || condition71 && condition81 && condition91 || condition101 && condition111 && condition121 || condition131 && condition141 && condition151 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "25a2d0d2-70c2-4d83-847d-7467b2efa05d"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Breadth (voided~207550)",
            "uuid": "acf809e2-30ba-49ab-9119-a344cc5ea7cb",
            "voided": true
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 6,
          "keyValues": [],
          "mandatory": true,
          "name": "Breadth",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "1d0a2e0f-6388-4c44-9bf7-1a4ffc1297fd",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Height / Depth",
            "uuid": "4542ba21-0801-416b-b739-9ca6707dc4b4"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Wall for Roads"
                          ],
                          "answerConceptUuids": [
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Backwater",
                            "Canal",
                            "Check Dam",
                            "Pond",
                            "Pond ghat / embankment",
                            "River"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Well"
                          ],
                          "answerConceptUuids": [
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": true,
          "name": "Height / Depth",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("62f4b7d6-4a4a-4064-aa0e-a0c21053eec2").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnyAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition41 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","824d11d4-525d-4610-9afe-f87c030a54eb","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","ec5c4214-ddd6-4146-8282-195f4d711c59").matches();
  
  const condition51 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition61 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  const condition71 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("a7b922a1-a389-4ba1-94ca-59baf7a961d0").matches();
  
  const condition81 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition91 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 || condition41 && condition51 && condition61 || condition71 && condition81 && condition91 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "4bd53ca3-d37a-40ee-ba74-c87e53046dc9"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Height",
            "uuid": "a32d438f-ecd6-4f7a-9753-d42f923f743a"
          },
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": false,
          "name": "Height",
          "type": "SingleSelect",
          "uuid": "e87bf4e8-f638-49b5-8391-fd75e6aa215d",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Diameter",
            "uuid": "614c185c-7f63-406d-9f2a-6619564947f4"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Well"
                          ],
                          "answerConceptUuids": [
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area",
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2",
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 9,
          "keyValues": [],
          "mandatory": true,
          "name": "Diameter",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("a7b922a1-a389-4ba1-94ca-59baf7a961d0").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnyAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a","700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "9497b9e4-494a-43b0-a9ad-4f9b15d02244"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Depth",
            "uuid": "ad7e9f42-d8b9-420b-b281-f5fc9cee43ef"
          },
          "displayOrder": 10,
          "keyValues": [],
          "mandatory": false,
          "name": "Depth",
          "type": "SingleSelect",
          "uuid": "02f45239-e5d5-4583-a80e-df7409cd4cd1",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Height (voided~207551)",
            "uuid": "09ee602c-ed75-4df9-b0c2-04f6adbcd199",
            "voided": true
          },
          "displayOrder": 11,
          "keyValues": [],
          "mandatory": false,
          "name": "Height",
          "type": "SingleSelect",
          "uuid": "bf68ccc0-584b-4606-8c9b-36b40edd5a6c",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Diameter (voided~207552)",
            "uuid": "7405d9a6-465b-4e74-a6bb-4e4b93b1856c",
            "voided": true
          },
          "displayOrder": 12,
          "keyValues": [],
          "mandatory": false,
          "name": "Diameter",
          "type": "SingleSelect",
          "uuid": "90c0bc81-5988-45d9-a90d-8b7925f01dbb",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Depth (voided~207553)",
            "uuid": "f82fa2e6-19a0-4ef8-886f-e485dc677925",
            "voided": true
          },
          "displayOrder": 13,
          "keyValues": [],
          "mandatory": false,
          "name": "Depth",
          "type": "SingleSelect",
          "uuid": "d4a5bf89-c1bf-4957-9fdc-67dd12a603bc",
          "voided": true
        }
      ],
      "name": "Measurement",
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("f431cbac-b99d-48fb-8694-0299c352eb9a","961b337f-fee4-4bed-a77a-83db71f1b5a2","016a6d0a-60f9-405f-8dac-08fcf6b39823","58653f74-082c-47a7-9a25-548990a4bd4c","82246b7a-c13f-435d-9e17-d8d288ff3891","a5f019c6-17a0-4536-8222-67935d482774","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptNameOtherThan("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
        visibility = !(condition11 || condition21 );
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "timed": false,
      "uuid": "c89596a4-49dd-4e84-a689-70a0d9120add"
    }
  ],
  "formType": "Encounter",
  "name": "Activity Form (voided~3734)",
  "uuid": "b7b96ac1-8dbc-4fa8-a5a5-bc07ba000ab8",
  "validationRule": "",
  "visitScheduleRule": "",
  "voided": true
}