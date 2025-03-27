{
  "checklistsRule": "",
  "decisionConcepts": [],
  "decisionRule": "",
  "formElementGroups": [
    {
      "display": "Dispatch receipt",
      "displayOrder": 1,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Dispatch status id (voided~207738)",
            "uuid": "42ba2dbe-3dc1-4718-b924-237eb637e089",
            "voided": true
          },
          "displayOrder": 1,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Dispatch status id",
          "type": "SingleSelect",
          "uuid": "72666c1a-7256-4e70-aa7a-30d74c5ec007",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Account / Organisation name",
            "uuid": "3b371318-ca39-4fd5-9fd8-fa6cc50f6543"
          },
          "displayOrder": 2,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Account / Organisation name",
          "type": "SingleSelect",
          "uuid": "df958a0c-0eb0-4166-bdb4-1d1ac43f2a79",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Dispatch Status Id",
            "uuid": "132868ab-811a-401e-9fd3-7c87f5512436"
          },
          "displayOrder": 3,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": true,
          "name": "Dispatch status id",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const dispatchIdValue = encounter.individual.getObservationReadableValue("132868ab-811a-401e-9fd3-7c87f5512436");  
  if (dispatchIdValue) {
  visibility = true;
  value = dispatchIdValue;
  }
 
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "b5357dc4-1f30-4121-9120-107aa8bd38be"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Account name (voided~207310)",
            "uuid": "ba04af96-c044-48f5-ae3b-b8fe78579e10",
            "voided": true
          },
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": false,
          "name": "Account/Organisation Name",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  const _ = imports.lodash;
  const firstDispatchEncounter = _.find(encounter.individual.encounters, enc => enc.encounterType.name === 'Dispatch');
  if(firstDispatchEncounter) {
    const accountNameValue = firstDispatchEncounter.getObservationReadableValue('2978117c-a297-4171-99c6-23c3522ca0f8');
    
    statusBuilder.value(accountNameValue);
  }
  return statusBuilder.build();
},
          "type": "SingleSelect",
          "uuid": "95e42e3e-7510-4850-b92a-5ad2712be04e",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Date",
            "name": "Dispatch Received Date",
            "uuid": "78f9d6cb-356e-45dc-90d5-216185784fe6"
          },
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": true,
          "name": "Dispatch Received Date",
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
  
  let dispatchDateValue = encounter.individual.registrationDate;
  dispatchDateValue = moment(dispatchDateValue);
  let dispatchReceivedDateObservation = encounter.findObservation('78f9d6cb-356e-45dc-90d5-216185784fe6');

  let dispatchReceivedDateValue = _.isEmpty(dispatchReceivedDateObservation) ? dispatchReceivedDateObservation : dispatchReceivedDateObservation.getReadableValue();
  dispatchReceivedDateValue = moment(dispatchReceivedDateValue);
  
  const condition11 = dispatchDateValue.isSame(dispatchReceivedDateValue, 'year') && dispatchDateValue.isSame(dispatchReceivedDateValue, 'month') && dispatchDateValue.isSame(dispatchReceivedDateValue, 'day')
  
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("78f9d6cb-356e-45dc-90d5-216185784fe6").lessThan(dispatchDateValue, 'ms').matches();

  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("78f9d6cb-356e-45dc-90d5-216185784fe6").greaterThan(encounter.encounterDateTime, 'ms').matches();
  
  if (!condition11) {
    if (condition12) {
      validationErrors.push("Date cannot be earlier than Dispatch date");
    }
    if (condition13) {
      validationErrors.push("Dispatch received date cannot be after dispatch receipt encounter's date");
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "87fc77d2-2f6c-419a-8d55-92cb84ff1bf9"
        }
      ],
      "name": "Dispatch receipt",
      "timed": false,
      "uuid": "a8941c26-f3ab-4f12-8c91-216d25729e45"
    },
    {
      "display": "Received Material",
      "displayOrder": 2,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "QuestionGroup",
            "name": "Received Material",
            "uuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
          },
          "displayOrder": 1,
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            },
            {
              "key": "disableManualActions",
              "value": true
            }
          ],
          "mandatory": false,
          "name": "Received Material",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const formElement = params.formElement;
    const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
    const _ = imports.lodash;
    const conceptsToCopy = ['f25402e3-8d6c-4436-ba81-ad7b4f97131e', '944cb7a1-a537-4e4f-bd15-74db621abefa',
        '1b637749-2537-42d5-a5a4-b7e522967855', 'ef2f247e-209f-4a8a-9fc5-4b27264d0cec',
        '4d9a9cb8-1c7c-4d86-b7d7-f6a03a1d520b',
        '384789ec-1f69-4407-932c-9451d4e05a51', '44cd43e1-d2a7-46e4-92f3-1fcf3508f8aa',
        '318902e6-f7a5-4e70-8f5f-72b83f3ccb22', 'aaede45f-53ca-40dc-a349-feca810810f5'];
    if(encounter.individual) {
        const materialsDispatchedValue = encounter.individual.getObservationValue('267fbb23-4168-4fb1-9bce-6b0d5f378c46');
        const valueArray = _.map(materialsDispatchedValue, groupObservations => {
            const valueObj = groupObservations.toResource;
            const newQuantityValue = {'4d9a9cb8-1c7c-4d86-b7d7-f6a03a1d520b': valueObj['bf591bee-f3a5-4481-9b01-ab40ca01c8b4']};
            return _.pick({...valueObj, ...newQuantityValue}, conceptsToCopy);
        });
        statusBuilder.value(valueArray);
    }
    return statusBuilder.build();
},
          "type": "SingleSelect",
          "uuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Contributed item",
                "order": 2,
                "unique": true,
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Purchased item",
                "order": 0,
                "unique": true,
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kit",
                "order": 1,
                "unique": true,
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624"
              }
            ],
            "dataType": "Coded",
            "name": "Type of material (voided~207327)",
            "uuid": "10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae",
            "voided": true
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of material",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "type": "SingleSelect",
          "uuid": "502838fb-cbd6-4643-8f3d-7edb3f0fad3b",
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
                "name": "Contributed item",
                "order": 2,
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Purchased item",
                "order": 0,
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kit",
                "order": 1,
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624"
              }
            ],
            "dataType": "Coded",
            "name": "Type of Material (voided~207317)",
            "uuid": "274a5e34-2cc8-46f9-9e1f-a0044e7397fc",
            "voided": true
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of material",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "type": "SingleSelect",
          "uuid": "00208323-713f-4853-9ae9-40364347869b",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Dispatch Status Line Item Id (voided~209758)",
            "uuid": "1b097354-81f5-4466-97c1-ff4028699b95",
            "voided": true
          },
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "Dispatch Line Item Id",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "type": "SingleSelect",
          "uuid": "9ff169d8-3cfa-4ed6-b66b-9f28d3bd44cb",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Dispatch Line Item Id",
            "uuid": "44cd43e1-d2a7-46e4-92f3-1fcf3508f8aa"
          },
          "displayOrder": 5,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Dispatch Line Item Id",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "08c5ec0b-9347-49bc-8b3e-fa2935b966a7"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Contributed item",
                "order": 0,
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Contributed track",
                "order": 1,
                "uuid": "6f6eb1de-88c4-4df2-a8ae-997a339a78c5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Goonj product",
                "order": 2,
                "uuid": "73e4cab9-b0d5-49a8-9cf2-c42f41523143"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Purchased item",
                "order": 5,
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Bulk Material",
                "order": 3,
                "uuid": "11c11e55-7604-4f38-9f4f-3560e116e76e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kit",
                "order": 4,
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624"
              }
            ],
            "dataType": "Coded",
            "name": "Type Of Material",
            "uuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e"
          },
          "displayOrder": 6,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Type of material",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "d454f6b8-d3d9-4e6c-8789-c26a796e7d13",
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
                "name": "Vaapsi",
                "order": 10,
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Toiletry",
                "order": 14,
                "uuid": "9d61ae52-6359-41bd-a8ed-b3e9cdb807f1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dance drama",
                "order": 11,
                "uuid": "9d4f0cc8-0be2-4c2c-9485-696650f0e0c3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "CBE",
                "order": 16,
                "uuid": "8c48b5ae-0b0a-45b8-bc61-93f370c56fff"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "CFW",
                "order": 0,
                "uuid": "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Office",
                "order": 7,
                "uuid": "ce5bb7ef-b14c-4aaf-b9b6-c353c4e0e62b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Other",
                "order": 15,
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Volunteer",
                "order": 8,
                "uuid": "b5d24787-22ce-4887-b211-f0d65718976c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tent house",
                "order": 9,
                "uuid": "603883db-ea5b-4c46-b1a7-78618e052268"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S (Non-GBG)",
                "order": 4,
                "uuid": "bdd49cd0-5f26-4f80-98e0-a046b095a9e3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S (GBG)",
                "order": 3,
                "uuid": "63555829-f7d1-41fa-b1ec-2079e960fa9d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Parlor",
                "order": 2,
                "uuid": "b716454c-9604-439e-9100-a28aa15aa3de"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S",
                "order": 5,
                "uuid": "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "New born baby",
                "order": 12,
                "uuid": "9bb7c536-ab34-420c-b60c-8a844892e65b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "My pad woman",
                "order": 13,
                "uuid": "aeb9a11d-c672-451d-ac13-5c97bc6523d9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S – AW",
                "order": 6,
                "uuid": "74144b99-b527-44b7-81d6-8f7c335b202b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Marriage kits",
                "order": 1,
                "uuid": "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
              }
            ],
            "dataType": "Coded",
            "name": "Kit Type",
            "uuid": "944cb7a1-a537-4e4f-bd15-74db621abefa"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Kit type",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "0b31b8e5-5719-4143-b0e9-4e05f34ba4ca"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Sub type (Dispatched) (voided~207733)",
            "uuid": "36b3abc2-663f-45c3-bdf2-b89cb5984f77",
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": true,
          "name": "Sub type",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "edad336a-3d8d-4260-96b4-8e85ad04a658",
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
                "name": "Marriage Kits (M)",
                "order": 17,
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Mason Kit",
                "order": 8,
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Barber Kit",
                "order": 3,
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "B",
                "order": 1,
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "L",
                "order": 20,
                "uuid": "ceefacdd-14b0-408f-b1cb-d6c3651299ff"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Egg Shop Kit",
                "order": 13,
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Painter Kit",
                "order": 11,
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "C",
                "order": 2,
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Puncture Repair Kit",
                "order": 5,
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Cobbler Kit",
                "order": 4,
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "NA",
                "order": 21,
                "uuid": "a98a4e9d-e110-433d-94a6-d471c0157a75"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Labor Kit",
                "order": 16,
                "uuid": "90d580bd-f76c-4633-bb5b-4b92bc057c86"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "X",
                "order": 19,
                "uuid": "687c20b4-617a-4ae6-ac46-e686aa1283f1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "A",
                "order": 0,
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Marriage Kits (F)",
                "order": 18,
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Electrician Kit",
                "order": 6,
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Farmer Kit",
                "order": 12,
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kirana Shop Kit",
                "order": 15,
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ironing Kit",
                "order": 9,
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Carpenter Kit",
                "order": 7,
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Plumbing Kit",
                "order": 10,
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tea Shop Kit",
                "order": 14,
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe"
              }
            ],
            "dataType": "Coded",
            "name": "Sub type",
            "uuid": "1b637749-2537-42d5-a5a4-b7e522967855"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "4a29b8af-dc91-44b8-b820-586568a02870",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35"
                    ],
                    "answersToSkip": [
                      "Barber Kit",
                      "Carpenter Kit",
                      "Cobbler Kit",
                      "Egg Shop Kit",
                      "Electrician Kit",
                      "Farmer Kit",
                      "Ironing Kit",
                      "Kirana Shop Kit",
                      "Labour Kit",
                      "Marriage Kits (F)",
                      "Marriage Kits (M)",
                      "Mason Kit",
                      "Painter Kit",
                      "Plumbing Kit",
                      "Puncture Repair Kit",
                      "Tea Shop Kit"
                    ]
                  }
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "CFW"
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
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "CFW",
                            "Marriage kits",
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
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
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "4a29b8af-dc91-44b8-b820-586568a02870",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "687c20b4-617a-4ae6-ac46-e686aa1283f1",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "ceefacdd-14b0-408f-b1cb-d6c3651299ff",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae"
                    ],
                    "answersToSkip": [
                      "A",
                      "B",
                      "Barber Kit",
                      "C",
                      "Carpenter Kit",
                      "Cobbler Kit",
                      "Egg Shop Kit",
                      "Electrician Kit",
                      "Farmer Kit",
                      "Ironing Kit",
                      "Kirana Shop Kit",
                      "L",
                      "Labour Kit",
                      "Mason Kit",
                      "Painter Kit",
                      "Plumbing Kit",
                      "Puncture Repair Kit",
                      "Tea Shop Kit",
                      "X"
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
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Marriage kits"
                          ],
                          "answerConceptUuids": [
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
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
                      "687c20b4-617a-4ae6-ac46-e686aa1283f1",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                      "ceefacdd-14b0-408f-b1cb-d6c3651299ff",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35"
                    ],
                    "answersToSkip": [
                      "A",
                      "B",
                      "C",
                      "L",
                      "Marriage Kits (F)",
                      "Marriage Kits (M)",
                      "X"
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
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Sub type",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnyAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca","e246e9b5-e7b9-42f0-be1c-daf4a4393a36","85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
  if(condition11 ) {
    _.forEach(["04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    visibility = condition12 ;
    if(condition13 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870","ceefacdd-14b0-408f-b1cb-d6c3651299ff","687c20b4-617a-4ae6-ac46-e686aa1283f1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1","ceefacdd-14b0-408f-b1cb-d6c3651299ff","687c20b4-617a-4ae6-ac46-e686aa1283f1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "ca1cac0b-62f6-495d-babf-0399f4d5f1d6"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Kit Name",
            "uuid": "318902e6-f7a5-4e70-8f5f-72b83f3ccb22"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Kit Name",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "612d7633-163a-474c-8903-9eab4f2f9d5a"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Contributed Item",
            "uuid": "ef2f247e-209f-4a8a-9fc5-4b27264d0cec"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": true,
          "name": "Contributed item",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnyAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "0cb216c4-2749-4054-b77f-b83a7741f4ee"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Purchased /High Value",
            "uuid": "8f2ce1e6-f2f9-4ce3-94c8-8b1f761a3b95"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Purchased /High value",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "a5b7ef16-d374-4661-b496-82bb7be98b8a",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Material Name",
            "uuid": "aaede45f-53ca-40dc-a349-feca810810f5"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Contributed track",
                            "Goonj product",
                            "High Value Material",
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "11c11e55-7604-4f38-9f4f-3560e116e76e",
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "6f6eb1de-88c4-4df2-a8ae-997a339a78c5",
                            "73e4cab9-b0d5-49a8-9cf2-c42f41523143"
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
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": true,
          "name": "Material Name",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","73e4cab9-b0d5-49a8-9cf2-c42f41523143","6f6eb1de-88c4-4df2-a8ae-997a339a78c5","11c11e55-7604-4f38-9f4f-3560e116e76e").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "21d4ff36-19e3-47ba-b095-e6a11d8f1434"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Quantity as per dispatch",
            "uuid": "4d9a9cb8-1c7c-4d86-b7d7-f6a03a1d520b"
          },
          "displayOrder": 15,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": true,
          "name": "Quantity as per dispatch",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "type": "SingleSelect",
          "uuid": "08bbc52c-3601-4676-abba-1a2889cb6bb4"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Unit",
            "uuid": "384789ec-1f69-4407-932c-9451d4e05a51"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptNameOtherThan",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": true,
          "name": "Unit",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "2c864413-75b3-421f-96d6-aa4db6619df8"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Yes",
                "order": 0,
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "No",
                "order": 1,
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a"
              }
            ],
            "dataType": "Coded",
            "name": "Quantity matching",
            "uuid": "71644765-6e55-4b8b-b01a-082e311bfa11"
          },
          "displayOrder": 17,
          "keyValues": [],
          "mandatory": true,
          "name": "Quantity matching",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "type": "SingleSelect",
          "uuid": "018f21e3-97a5-41ad-a6ac-4c268140f637"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Quantity received (voided~207830)",
            "uuid": "45172599-4b47-42cc-8b64-a55f8ce2276d",
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
                          "conceptName": "Quantity matching",
                          "conceptUuid": "71644765-6e55-4b8b-b01a-082e311bfa11",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "40f13680-bc05-46ef-8223-e56cf20b8d0a"
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
          "name": "Quantity",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("71644765-6e55-4b8b-b01a-082e311bfa11", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("40f13680-bc05-46ef-8223-e56cf20b8d0a").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "4feaee3c-1407-46ae-93b6-4a47a7b07599",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Quantity",
            "uuid": "bf591bee-f3a5-4481-9b01-ab40ca01c8b4"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Quantity matching",
                          "conceptUuid": "71644765-6e55-4b8b-b01a-082e311bfa11",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "40f13680-bc05-46ef-8223-e56cf20b8d0a"
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
          "keyValues": [],
          "mandatory": true,
          "name": "Quantity",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("71644765-6e55-4b8b-b01a-082e311bfa11", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("40f13680-bc05-46ef-8223-e56cf20b8d0a").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "d748e438-dd32-4b72-889d-e38efb1fcc08"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Quantity for not matching",
            "uuid": "78ef9fcf-0d32-49f8-b0af-a29e80c4a9ed"
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
                          "conceptName": "Quantity matching",
                          "conceptUuid": "71644765-6e55-4b8b-b01a-082e311bfa11",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "40f13680-bc05-46ef-8223-e56cf20b8d0a"
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
          "name": "Quantity",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("71644765-6e55-4b8b-b01a-082e311bfa11", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("40f13680-bc05-46ef-8223-e56cf20b8d0a").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "43c04206-7c11-4520-8ca5-68e1dc81da0f",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Net Quantity (voided~207562)",
            "uuid": "0b302304-8534-459d-a151-08289ac97a6e",
            "voided": true
          },
          "displayOrder": 21,
          "keyValues": [],
          "mandatory": true,
          "name": "Quantity",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "MultiSelect",
          "uuid": "d4119c28-2e06-4a4a-a9f0-2f49b1bd104a",
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
                "name": "Ironing Kit",
                "order": 9,
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Painter Kit",
                "order": 11,
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Cobbler Kit",
                "order": 4,
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Labour Kit",
                "order": 16,
                "uuid": "4a29b8af-dc91-44b8-b820-586568a02870"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Egg Shop Kit",
                "order": 13,
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Barber Kit",
                "order": 3,
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Plumbing Kit",
                "order": 10,
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Farmer Kit",
                "order": 12,
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Carpenter Kit",
                "order": 7,
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "C",
                "order": 2,
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Marriage Kits (M)",
                "order": 17,
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "A",
                "order": 0,
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Marriage Kits (F)",
                "order": 18,
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tea Shop Kit",
                "order": 14,
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Puncture Repair Kit",
                "order": 5,
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Mason Kit",
                "order": 8,
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kirana Shop Kit",
                "order": 15,
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Electrician Kit",
                "order": 6,
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "B",
                "order": 1,
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d"
              }
            ],
            "dataType": "Coded",
            "name": "Sub-Type",
            "uuid": "edc2c868-9380-4855-b670-7193e9ccad94"
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
                          "conceptName": "Type of material",
                          "conceptUuid": "10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "displayOrder": 28,
          "keyValues": [],
          "mandatory": true,
          "name": "Sub-Type",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "MultiSelect",
          "uuid": "f52e2d2d-f28e-41e0-b29d-3b071225d791",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Item name",
            "uuid": "64f74002-bb29-48b2-a5ce-2cbe31b1d71d"
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
                          "conceptName": "Type of material",
                          "conceptUuid": "10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
                          ],
                          "type": "answerConcept"
                        }
                      },
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Type of material",
                          "conceptUuid": "10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "displayOrder": 29,
          "keyValues": [],
          "mandatory": true,
          "name": "Item name",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").or.when.valueInEncounter("10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "88d1f928-fcfd-4a9b-bf13-80c0f5d5d8bd",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Item Category",
            "uuid": "54f456f5-94ee-4537-bc72-49947404521e"
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
                          "conceptName": "Type of material",
                          "conceptUuid": "10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
          "displayOrder": 30,
          "keyValues": [],
          "mandatory": true,
          "name": "Item Category",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "798d6977-ecc6-4fca-bb08-3ba09a155bc2",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Net quantity (voided~207369)",
            "uuid": "964bdf93-a65c-410f-8f42-a76e46a5bfab",
            "voided": true
          },
          "displayOrder": 31,
          "keyValues": [],
          "mandatory": true,
          "name": "Net quantity",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "type": "SingleSelect",
          "uuid": "1374ac17-2432-4e9e-918b-dbd53fde7b90",
          "voided": true
        }
      ],
      "name": "Received Material",
      "timed": false,
      "uuid": "f20534ab-931a-44dc-85dc-bae6911857be"
    },
    {
      "display": "Other Details",
      "displayOrder": 3,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Remarks",
            "uuid": "e132e4fe-7c7a-4612-b086-426b9f74147b"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Remarks",
          "type": "SingleSelect",
          "uuid": "31bd1417-77cb-4fff-ba59-4373e40a951b"
        }
      ],
      "name": "Other Details",
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = false;
    return formElementGroup.formElements.map((formElement) => {
        
     const qgroupsList = encounter.getObservationReadableValue("5dfb2f28-b866-4442-be01-0ed451c6aad9");
    
    if(qgroupsList){
        let isQuantityMatching = 'Quantity matching';
        qgroupsList.forEach(qgroup=>{
            qgroup.forEach(question=>{
                if(question[isQuantityMatching] && question[isQuantityMatching]=== 'No'){
                  visibility = true;
                }
            });
        });
    }
    

  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "timed": false,
      "uuid": "cea60ef9-af6f-434a-95ef-c1cd2df4968e"
    }
  ],
  "formType": "Encounter",
  "name": "Dispatch receipt form",
  "uuid": "57bb2d3a-f8a5-4405-8d2c-514456e91533",
  "validationRule": "",
  "visitScheduleRule": ""
}