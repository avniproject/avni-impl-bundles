{
  "checklistsRule": "",
  "decisionConcepts": [],
  "decisionRule": "",
  "formElementGroups": [
    {
      "display": "Dispatch details",
      "displayOrder": 1,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Account  name",
            "uuid": "2978117c-a297-4171-99c6-23c3522ca0f8"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Account  name",
          "type": "SingleSelect",
          "uuid": "8eccad95-68f5-4139-9588-bf11583b3df2"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Dispatch Status Id",
            "uuid": "132868ab-811a-401e-9fd3-7c87f5512436"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Dispatch Status Id",
          "type": "SingleSelect",
          "uuid": "ec34825e-9360-4857-bdaf-f01e51e0d3ff"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Dispatch Status Name",
            "uuid": "c5bf896e-a2a5-434f-8d7c-dedf7bab7f0d"
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Dispatch Status Name",
          "type": "SingleSelect",
          "uuid": "b30c181e-eb93-4bc1-a6e3-b9a374487cf4"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "DemandId",
            "uuid": "845b31cb-a4ea-495a-9748-884227415c8b"
          },
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": false,
          "name": "Demand Id",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const formElement = params.formElement;
  let visibility = false;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "type": "SingleSelect",
          "uuid": "a5b281ae-e3ef-4e60-9d73-38e1b2793a5c"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Demand name",
            "uuid": "c04262b1-10b9-408b-87e0-fde09de0a253"
          },
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": false,
          "name": "Demand name",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const formElement = params.formElement;
  let visibility = false;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "type": "SingleSelect",
          "uuid": "b817c844-e724-4ba3-865a-720561df56ec"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Status",
            "uuid": "df408b06-e90b-47c2-89dc-ed2b5967de2d"
          },
          "displayOrder": 6,
          "keyValues": [],
          "mandatory": true,
          "name": "Status",
          "type": "SingleSelect",
          "uuid": "555387a5-405a-424c-87d6-d1035f954dde"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Dispatch Stage",
            "uuid": "b7e82e4d-ee4c-4a6e-bb98-7a0b4eb21392"
          },
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": true,
          "name": "Dispatch Stage",
          "type": "SingleSelect",
          "uuid": "48d6a0d6-575d-4677-9629-6c1a819fd330"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Demand name",
            "uuid": "c04262b1-10b9-408b-87e0-fde09de0a253"
          },
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": false,
          "name": "Demand Name",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const formElement = params.formElement;

  let visibility = false;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "type": "SingleSelect",
          "uuid": "28010f41-2d93-4b44-ade5-8b98b8d63d55",
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
          "displayOrder": 9,
          "keyValues": [],
          "mandatory": true,
          "name": "State",
          "type": "SingleSelect",
          "uuid": "9bfef5c6-0b58-4ef0-9362-717ab3f2107a",
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
                "value": "6b0db0bd-93ad-4f54-b09a-a8f935ba4d85"
              }
            ],
            "name": "District (Dispatch)",
            "uuid": "aef8c7cb-69b7-4678-8df0-553fb4f3eb0a"
          },
          "displayOrder": 10,
          "keyValues": [],
          "mandatory": true,
          "name": "District",
          "type": "SingleSelect",
          "uuid": "d4b2dcc0-f833-48b3-add3-d1d621ce0e51",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "DateTime",
            "name": "Dispatch Date",
            "uuid": "1a1097bc-c06a-493b-a7da-63f9e70f4ae0"
          },
          "displayOrder": 11,
          "keyValues": [],
          "mandatory": true,
          "name": "Date",
          "type": "SingleSelect",
          "uuid": "5b5fefa4-a481-4aad-b6bb-18582254655c",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Account  name",
            "uuid": "2978117c-a297-4171-99c6-23c3522ca0f8"
          },
          "displayOrder": 12,
          "keyValues": [],
          "mandatory": true,
          "name": "Account  name",
          "type": "SingleSelect",
          "uuid": "17723b8c-097e-4fa6-a786-269736ea6dd6",
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
                "value": "6b0db0bd-93ad-4f54-b09a-a8f935ba4d85"
              }
            ],
            "name": "District (Dispatch)",
            "uuid": "aef8c7cb-69b7-4678-8df0-553fb4f3eb0a"
          },
          "displayOrder": 13,
          "keyValues": [],
          "mandatory": true,
          "name": "District",
          "type": "SingleSelect",
          "uuid": "278a0b60-1b70-44fc-b99d-761211f4cd67",
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
          "displayOrder": 14,
          "keyValues": [],
          "mandatory": true,
          "name": "State",
          "type": "SingleSelect",
          "uuid": "5f08bee4-f207-4c46-a2c4-2be8f7cc313e",
          "voided": true
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
          "displayOrder": 15,
          "keyValues": [],
          "mandatory": true,
          "name": "Account name",
          "type": "SingleSelect",
          "uuid": "3357a09c-27ac-4fa4-873b-68c3646a23de",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Demand name",
            "uuid": "c04262b1-10b9-408b-87e0-fde09de0a253"
          },
          "displayOrder": 16,
          "keyValues": [],
          "mandatory": true,
          "name": "Demand name",
          "type": "SingleSelect",
          "uuid": "8e46d05c-1863-4602-a70a-5375834e92fb",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Demand Id",
            "uuid": "5a79e56e-5239-4778-aaf7-ef65913d0754"
          },
          "displayOrder": 17,
          "keyValues": [],
          "mandatory": true,
          "name": "Demand Id",
          "type": "SingleSelect",
          "uuid": "aa72d3b3-ba61-40ad-ba9d-0d5e180742da",
          "voided": true
        }
      ],
      "name": "Dispatch details",
      "timed": false,
      "uuid": "17568e92-41fa-491e-a6de-8c883c04f834"
    },
    {
      "display": "Driver's Details",
      "displayOrder": 2,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "keyValues": [],
            "name": "Driver Name",
            "uuid": "d769c64c-a62a-4c30-b281-573b2d2835a9"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Driver Name",
          "type": "SingleSelect",
          "uuid": "548ac71f-74da-4a4c-a1dc-553f2bfcbcbf"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "keyValues": [],
            "name": "Driver Contact Number",
            "uuid": "450a5a0c-56f3-4aa7-82bf-d678c871c54b"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Driver Contact Number",
          "type": "SingleSelect",
          "uuid": "343d9929-3d3d-408a-92d1-cbafefaf7daf"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "keyValues": [],
            "name": "Vehicle Number",
            "uuid": "ac224d32-579c-4fda-900e-3a03ef4ff56e"
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Vehicle Number",
          "type": "SingleSelect",
          "uuid": "e93b8067-5537-4584-9395-6c845eead219"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Image",
            "keyValues": [],
            "name": "Loading And Truck Images",
            "uuid": "41ad313d-8c05-461b-91ef-faabe76d84ca"
          },
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": false,
          "name": "Loading And Truck Images",
          "type": "MultiSelect",
          "uuid": "46978f22-b867-425c-9e50-e081d9c22b3b"
        }
      ],
      "name": "Driver's Details",
      "timed": false,
      "uuid": "6b03b5b8-2cd1-44f3-be36-e71ed3e04901"
    },
    {
      "display": "Materials Dispatched",
      "displayOrder": 3,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "QuestionGroup",
            "name": "Materials Dispatched",
            "uuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
          },
          "displayOrder": 1,
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "mandatory": false,
          "name": "Materials Dispatched",
          "type": "SingleSelect",
          "uuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f"
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
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of material",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "type": "SingleSelect",
          "uuid": "ae6aaf9f-0229-4234-afd6-e3c89d63bbcf"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Dispatch Line Item Id",
            "uuid": "44cd43e1-d2a7-46e4-92f3-1fcf3508f8aa"
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Dispatch Line Item Id",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "type": "SingleSelect",
          "uuid": "8d116869-eccb-4ce2-a61d-52205d7a0c2c"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Kit type (Dispatched) (voided~207732)",
            "uuid": "590f96fb-7c51-4f33-96ad-cd66997aa278",
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
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
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "Kit type",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "19ff7ba5-318d-4cbc-acb9-c29815dc7b54",
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "registration",
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
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": true,
          "name": "Kit type",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "3a90ffe9-d57b-4d18-9575-78055c1da4f0"
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "registration",
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
          "displayOrder": 6,
          "keyValues": [],
          "mandatory": false,
          "name": "Kit Name",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "35487a42-69ab-4faa-a088-7b5618fa0a55"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "keyValues": [],
            "name": "Kit Id",
            "uuid": "e7963e9a-f0ac-4666-af69-173e4e8bbcf6"
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "registration",
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
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": false,
          "name": "Kit Id",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "0dd6acf3-b110-4079-bff7-0930b929d0ff"
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
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
          "keyValues": [],
          "mandatory": true,
          "name": "Sub type",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "6b6e0610-f7a6-4ff3-935c-e266b039cca2",
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
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "90d580bd-f76c-4633-bb5b-4b92bc057c86",
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
                      "Labor Kit",
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "registration",
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "registration",
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
                          "conceptName": "Kit type (Dispatched)",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "registration",
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
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "687c20b4-617a-4ae6-ac46-e686aa1283f1",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "90d580bd-f76c-4633-bb5b-4b92bc057c86",
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
                      "Labor Kit",
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
                          "conceptName": "Kit type (Dispatched)",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "registration",
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
            }
          ],
          "displayOrder": 9,
          "keyValues": [],
          "mandatory": true,
          "name": "Sub type",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("944cb7a1-a537-4e4f-bd15-74db621abefa", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("944cb7a1-a537-4e4f-bd15-74db621abefa", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnyAnswerConceptName("e246e9b5-e7b9-42f0-be1c-daf4a4393a36","971c7a76-d296-4d47-9a90-47a612ceb4ca","85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("944cb7a1-a537-4e4f-bd15-74db621abefa", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("944cb7a1-a537-4e4f-bd15-74db621abefa", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
  
  if(condition11 ) {
    _.forEach(["04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","90d580bd-f76c-4633-bb5b-4b92bc057c86","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    visibility = condition12 ;
    if(condition13 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1","ceefacdd-14b0-408f-b1cb-d6c3651299ff","687c20b4-617a-4ae6-ac46-e686aa1283f1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","90d580bd-f76c-4633-bb5b-4b92bc057c86","ceefacdd-14b0-408f-b1cb-d6c3651299ff","687c20b4-617a-4ae6-ac46-e686aa1283f1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "67982b07-0c29-4907-b3dc-da3e2ad3ed4a"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Other Kit Details",
            "uuid": "3461ef7c-f5f3-4cb2-ab10-7a4d57a85fed"
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
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "df625e4f-b11f-40bd-b846-422af836f273"
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
          "mandatory": false,
          "name": "Other Kit Details",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("944cb7a1-a537-4e4f-bd15-74db621abefa", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("df625e4f-b11f-40bd-b846-422af836f273").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "6ae79b71-b077-4cc7-bb20-da79ce73ea5a"
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "registration",
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
          "displayOrder": 11,
          "keyValues": [],
          "mandatory": true,
          "name": "Contributed item",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "4d2cca85-e545-41b1-ae12-9432edabd56d"
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
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "encounter",
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
          "displayOrder": 12,
          "keyValues": [],
          "mandatory": false,
          "name": "Item Category",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "aeb5251b-efe8-403f-b8fb-97ee9009adbe"
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
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
          "keyValues": [],
          "mandatory": false,
          "name": "Purchased /High value",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "d3c5fbee-e998-4f60-b9da-761e367171d5",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Purchase Item Category",
            "uuid": "2b84bcd2-4915-4158-993b-530ef0b3774d"
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "registration",
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
          "keyValues": [],
          "mandatory": false,
          "name": "Purchase Item Category",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","6f6eb1de-88c4-4df2-a8ae-997a339a78c5","11c11e55-7604-4f38-9f4f-3560e116e76e","73e4cab9-b0d5-49a8-9cf2-c42f41523143").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "83d074a0-4b16-470f-954c-6242a344ef0d"
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "registration",
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
          "displayOrder": 15,
          "keyValues": [],
          "mandatory": false,
          "name": "Material Name",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","11c11e55-7604-4f38-9f4f-3560e116e76e","6f6eb1de-88c4-4df2-a8ae-997a339a78c5","73e4cab9-b0d5-49a8-9cf2-c42f41523143").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "e70b3174-c4de-4276-a883-8c6e380bae3b"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "keyValues": [],
            "name": "Material Id",
            "uuid": "53b13383-40de-4b5e-ab9f-94d0ec216c89"
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "registration",
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
          "displayOrder": 16,
          "keyValues": [],
          "mandatory": false,
          "name": "Material Id",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "c03e4904-b1ce-445f-a06e-1c1b4ccf2887"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Quantity as per dispatch",
            "uuid": "4d9a9cb8-1c7c-4d86-b7d7-f6a03a1d520b"
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Contributed item",
                            "Kit",
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
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
          "displayOrder": 17,
          "keyValues": [],
          "mandatory": true,
          "name": "Quantity",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "84093bab-66e2-4d05-84bb-b2859c439d4d",
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "defined",
                        "rhs": {}
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).defined.matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "7dbf6b9c-e2da-4794-a0a2-b9a8d27ffccc"
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
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
                          "scope": "registration",
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
          "displayOrder": 19,
          "keyValues": [],
          "mandatory": true,
          "name": "Unit",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "c94a5a49-9d61-44fe-8406-1b136745614c"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "KIT",
            "uuid": "de4d4349-3d5a-44d7-af38-9de9344f417c"
          },
          "displayOrder": 20,
          "keyValues": [],
          "mandatory": true,
          "name": "Kit",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "type": "SingleSelect",
          "uuid": "199cc1c3-1861-4b85-b19b-aea8a187a40d",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Kit Type (voided~207611)",
            "uuid": "a90f4c76-b1dc-4c15-af35-abf80482bf29",
            "voided": true
          },
          "displayOrder": 21,
          "keyValues": [],
          "mandatory": true,
          "name": "Kit type",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "type": "SingleSelect",
          "uuid": "5d36de65-58c0-4be2-a90e-9c2db1b47617",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Sub Type (voided~207612)",
            "uuid": "6c26c6cf-54ac-40ea-ac5e-77cdbc3f85cd",
            "voided": true
          },
          "displayOrder": 22,
          "keyValues": [],
          "mandatory": true,
          "name": "Sub type",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "type": "SingleSelect",
          "uuid": "9ca9ef0c-7d27-4f0a-bb99-79eb34e472c8",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Non-Kit",
            "uuid": "6e47adc2-7143-475e-bae5-29c58f593c32"
          },
          "displayOrder": 23,
          "keyValues": [],
          "mandatory": true,
          "name": "Non-kit",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "type": "SingleSelect",
          "uuid": "11634476-3454-4a0d-b450-25e781404b0c",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Contributed Item (voided~207614)",
            "uuid": "42bed423-7a81-4002-b1dc-a16767aad84d",
            "voided": true
          },
          "displayOrder": 24,
          "keyValues": [],
          "mandatory": true,
          "name": "Contributed Item",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "type": "SingleSelect",
          "uuid": "c563be79-ab31-4b3d-b93f-85278532937f",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Purchased /High Value (voided~207615)",
            "uuid": "23ce5d6b-9efa-41ab-b75b-ef1d0fa2a0d1",
            "voided": true
          },
          "displayOrder": 25,
          "keyValues": [],
          "mandatory": true,
          "name": "Purchased /High value",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "type": "SingleSelect",
          "uuid": "c3a1052a-a533-49a2-b74a-4b604c1ea9b9",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Unit (voided~207616)",
            "uuid": "b9cee2ac-99cc-469f-812a-4ac377a043b6",
            "voided": true
          },
          "displayOrder": 26,
          "keyValues": [],
          "mandatory": true,
          "name": "Unit",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "type": "SingleSelect",
          "uuid": "3bb02f06-a349-4c2c-a80e-a3173b2145b0",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Quantity (voided~207617)",
            "uuid": "d8df4258-a213-42ac-944d-6bf1fd5c4b35",
            "voided": true
          },
          "displayOrder": 27,
          "keyValues": [],
          "mandatory": true,
          "name": "Quantity",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "type": "SingleSelect",
          "uuid": "23acf972-9aa8-4391-8e02-7d8dfc305d60",
          "voided": true
        }
      ],
      "name": "Materials Dispatched",
      "timed": false,
      "uuid": "c4dafc4c-0314-498e-98b4-166fdb90c058"
    },
    {
      "display": "Material Dispatched",
      "displayOrder": 4,
      "formElements": [
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
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of Material",
          "type": "SingleSelect",
          "uuid": "2fdb19bc-ae4a-4998-840e-00e123e81bec",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Kit Type (voided~207318)",
            "uuid": "2fa06dac-b9e4-4d93-9952-8db39eb2578d",
            "voided": true
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Kit Type",
          "type": "SingleSelect",
          "uuid": "0695b2ef-fbfe-4e86-9727-9379796965e5",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Sub Type (voided~207319)",
            "uuid": "4f7c7daf-8e49-474f-a058-93bf26ef350b",
            "voided": true
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Sub Type",
          "type": "SingleSelect",
          "uuid": "3df82746-7e97-417b-895e-5959a159464a",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Non-Kit (voided~207320)",
            "uuid": "5700dbc2-4811-4332-85c6-d3db84e2fbac",
            "voided": true
          },
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "Non-Kit",
          "type": "SingleSelect",
          "uuid": "9562a091-5178-44a4-88b7-4db9a802b2b0",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Contributed (voided~207321)",
            "uuid": "602fb66d-c4fc-4990-b5ed-a01583c0d423",
            "voided": true
          },
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": true,
          "name": "Contributed",
          "type": "SingleSelect",
          "uuid": "31a073e2-0dbd-45be-a85b-5e4fa094789e",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Puchase/High Value",
            "uuid": "815ac13f-396b-4e2a-8e64-8c66b8c59441"
          },
          "displayOrder": 6,
          "keyValues": [],
          "mandatory": true,
          "name": "Puchase/High Value",
          "type": "SingleSelect",
          "uuid": "baa14304-a4ef-4c8f-81bf-b91080531ab5",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Unit (voided~207323)",
            "uuid": "0bf32677-4a81-4496-bbe8-35ff68901c72",
            "voided": true
          },
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": true,
          "name": "Unit",
          "type": "SingleSelect",
          "uuid": "b043e58f-1d66-45d3-a596-fe85f38e24ab",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Quantity (voided~207324)",
            "uuid": "c1d599b1-3f4f-41d6-8399-020718c6735b",
            "voided": true
          },
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": true,
          "name": "Quantity",
          "type": "SingleSelect",
          "uuid": "913df35f-fed2-4e15-9ca8-40f96bcce2f8",
          "voided": true
        }
      ],
      "name": "Material Dispatched",
      "timed": false,
      "uuid": "9fa3d3f4-8d0b-4aa7-8b31-9bdf5e1eeced",
      "voided": true
    }
  ],
  "formType": "IndividualProfile",
  "name": "Dispatch Registration",
  "uuid": "70bfa0ec-dc10-4e2c-8cd7-edef1b85c090",
  "validationRule": "",
  "visitScheduleRule": ""
}