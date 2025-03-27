{
  "checklistsRule": "",
  "decisionConcepts": [],
  "decisionRule": "",
  "formElementGroups": [
    {
      "display": "Inventory details",
      "displayOrder": 1,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Implementation Inventory Id",
            "uuid": "972beb4f-a8b9-4b0a-9ebf-5d56e7b409b9"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Implementation Inventory Id",
          "type": "SingleSelect",
          "uuid": "4c25f923-9a82-472f-9bfc-6611a9533706"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Account  name",
            "uuid": "2978117c-a297-4171-99c6-23c3522ca0f8"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Account  name",
          "type": "SingleSelect",
          "uuid": "149c333f-33c5-4609-af7a-4208a9c1f1e5"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Center / Field office",
            "uuid": "41de93e4-daaf-4207-bf70-b32939d09ea5"
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Center / Field office",
          "type": "SingleSelect",
          "uuid": "e035d7e5-8bf3-41c9-a9a9-fd897c89cce4"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Date",
            "name": "Dispatch Received Date",
            "uuid": "78f9d6cb-356e-45dc-90d5-216185784fe6"
          },
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": false,
          "name": "Dispatch Received Date",
          "type": "SingleSelect",
          "uuid": "c1876213-8b38-49ee-adf7-6014f012dbe0"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Vehicle type",
            "uuid": "91e7cc67-b670-4146-a3b6-f44818fb2e34"
          },
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": false,
          "name": "Vehicle type",
          "type": "SingleSelect",
          "uuid": "d192e44f-36dc-4ee7-bf17-1c6f5987b85b"
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
          "keyValues": [],
          "mandatory": true,
          "name": "Source of Material",
          "type": "SingleSelect",
          "uuid": "80c822c2-01fd-48c1-b808-2d52cf552782"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Material type",
            "uuid": "7ce8c7f2-a002-4f75-91dc-44cb37ef0eb7"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
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
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": true,
          "name": "Material type",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "ceb477e8-459d-4d69-b4e0-a4814a66686e"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
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
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": true,
          "name": "Material Name",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "78e6aea0-a49e-42a7-ad36-095813511369"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Dispatch Status Id",
            "uuid": "132868ab-811a-401e-9fd3-7c87f5512436"
          },
          "displayOrder": 9,
          "keyValues": [],
          "mandatory": false,
          "name": "Dispatch Status Id",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c03c7864-8fbb-4557-907a-1047092bdc37").defined.matches();
  
  visibility = !(condition11 );
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "320282b5-4549-4649-a484-897747021c3c"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Dispatch Received Status Line Item Id",
            "uuid": "54429e2d-1d2e-4fda-9bfd-4cdaf3399336"
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
                        "lhs": {
                          "conceptDataType": "Location",
                          "conceptName": "Address",
                          "conceptUuid": "c03c7864-8fbb-4557-907a-1047092bdc37",
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
          "displayOrder": 12,
          "keyValues": [],
          "mandatory": false,
          "name": "Dispatch Received Status Line Item Id",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c03c7864-8fbb-4557-907a-1047092bdc37").defined.matches();
  
  visibility = !(condition11 );
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "4c24a4be-19d5-4942-b8e4-980241110591"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Type of Material",
            "uuid": "f3aa4c67-9867-465c-88f3-042adcfeee17"
          },
          "displayOrder": 13,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of Material",
          "type": "SingleSelect",
          "uuid": "d32ce806-4e7b-40e4-a0de-544b0a224b1a",
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
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
          "displayOrder": 14,
          "keyValues": [],
          "mandatory": false,
          "name": "Kit Type",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "9fa7da14-ba01-4315-8bc8-3202378031ff"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
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
          "displayOrder": 15,
          "keyValues": [],
          "mandatory": false,
          "name": "Sub type",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "47361469-9d49-4926-b315-ae9d99d17333"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Material sub category",
            "uuid": "9652281a-3105-4e42-8068-e3fe17e06ce0"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
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
          "displayOrder": 16,
          "keyValues": [],
          "mandatory": false,
          "name": "Material sub category",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "c1681742-e207-4268-a5ff-3e5a9bad83bc"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Other material name",
            "uuid": "a3314a2d-3455-4666-bd56-ca5dc72a08f9"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
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
          "displayOrder": 17,
          "keyValues": [],
          "mandatory": false,
          "name": "Other material name",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "03a15a4d-488b-4060-82b8-9f96a16d8cc8"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
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
          "displayOrder": 18,
          "keyValues": [],
          "mandatory": true,
          "name": "Unit",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "345ae8cf-0105-4afe-b6f6-e05f8e469c16"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Initial Quantity",
            "uuid": "09878916-0c78-43b4-9002-40beb894e089"
          },
          "displayOrder": 19,
          "keyValues": [],
          "mandatory": true,
          "name": "Initial Quantity",
          "type": "SingleSelect",
          "uuid": "9b9f40e3-6eee-4cf5-813c-f572e3aef65a"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Current Quantity",
            "uuid": "080aca7e-c590-4036-bee7-cf3f77b488aa"
          },
          "displayOrder": 20,
          "keyValues": [],
          "mandatory": true,
          "name": "Current Quantity",
          "type": "SingleSelect",
          "uuid": "e68906c9-a126-4703-b00a-080749d0a2ad"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Bill name",
            "uuid": "1fddc83e-1e1b-4479-8d0c-845ff4f46de2"
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
                        "lhs": {
                          "conceptDataType": "Location",
                          "conceptName": "Address",
                          "conceptUuid": "c03c7864-8fbb-4557-907a-1047092bdc37",
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
          "displayOrder": 21,
          "keyValues": [],
          "mandatory": false,
          "name": "Bill name",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c03c7864-8fbb-4557-907a-1047092bdc37").defined.matches();
  
  visibility = !(condition11 );
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "207bee82-c824-4e1f-8b9b-d24d5cd05cd4"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Purchased/ Created/ Received",
            "uuid": "dfc56fc1-108b-421a-9fff-0801c4fde74e"
          },
          "displayOrder": 22,
          "keyValues": [],
          "mandatory": false,
          "name": "Purchased/ Created/ Received",
          "type": "SingleSelect",
          "uuid": "270581a1-fa3d-4162-9533-c343f371a0a7"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Created or received - Kit",
            "uuid": "5fc64281-1b66-433f-b350-b3be9a9de09f"
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
                          "conceptDataType": "Text",
                          "conceptName": "Purchased/ Created/ Received",
                          "conceptUuid": "dfc56fc1-108b-421a-9fff-0801c4fde74e",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "equals",
                        "rhs": {
                          "type": "value",
                          "value": "Received"
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
                          "conceptDataType": "Text",
                          "conceptName": "Purchased/ Created/ Received",
                          "conceptUuid": "dfc56fc1-108b-421a-9fff-0801c4fde74e",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "equals",
                        "rhs": {
                          "type": "value",
                          "value": "Purchased"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 23,
          "keyValues": [],
          "mandatory": false,
          "name": "Created or received - Kit",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("dfc56fc1-108b-421a-9fff-0801c4fde74e").equals("Received").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("dfc56fc1-108b-421a-9fff-0801c4fde74e").equals("Purchased").matches();
  
  visibility = condition11 || condition21 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "660683c7-a5f4-4679-9b14-dad0fac02017"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Purchase Kit name",
            "uuid": "e1c5515c-b4f8-40fe-a6cf-68f445ea6e35"
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
                          "conceptDataType": "Text",
                          "conceptName": "Purchased/ Created/ Received",
                          "conceptUuid": "dfc56fc1-108b-421a-9fff-0801c4fde74e",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "equals",
                        "rhs": {
                          "type": "value",
                          "value": "Purchased"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 24,
          "keyValues": [],
          "mandatory": false,
          "name": "Purchase Kit name",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("dfc56fc1-108b-421a-9fff-0801c4fde74e").equals("Purchased").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "3bbcc5d4-4c9a-4161-93a0-13a3da001621"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Remarks",
            "uuid": "e132e4fe-7c7a-4612-b086-426b9f74147b"
          },
          "displayOrder": 25,
          "keyValues": [],
          "mandatory": false,
          "name": "Remarks",
          "type": "SingleSelect",
          "uuid": "2c71d10c-6bd7-4595-8801-9bc7f6be85ae"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "QuestionGroup",
            "name": "Kit details",
            "uuid": "727a44d1-a953-4ad4-9f0c-bebb721eec02"
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
                          "conceptDataType": "Text",
                          "conceptName": "Type of Material",
                          "conceptUuid": "f3aa4c67-9867-465c-88f3-042adcfeee17",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "equals",
                        "rhs": {
                          "type": "value",
                          "value": "Kit"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 26,
          "keyValues": [],
          "mandatory": false,
          "name": "Kit details",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f3aa4c67-9867-465c-88f3-042adcfeee17").equals("Kit").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "d0136679-7559-4aaa-b807-5cf46d865828",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "QuestionGroup",
            "name": "Non-kit (Contributed item)",
            "uuid": "e6c88a90-59d7-4a0f-98a2-faadd722bd81"
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
                          "conceptDataType": "Text",
                          "conceptName": "Type of Material",
                          "conceptUuid": "f3aa4c67-9867-465c-88f3-042adcfeee17",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "equals",
                        "rhs": {
                          "type": "value",
                          "value": "Contributed item"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 27,
          "keyValues": [],
          "mandatory": false,
          "name": "Non-Kit",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f3aa4c67-9867-465c-88f3-042adcfeee17").equals("Contributed item").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "6b7f4d12-1cc0-45c2-8ee2-126f3b5446d6",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "QuestionGroup",
            "name": "Non-kit (Purchased item)",
            "uuid": "2d225ecf-cc30-4bc0-b90a-2c9f134072bd"
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
                          "conceptDataType": "Text",
                          "conceptName": "Type of Material",
                          "conceptUuid": "f3aa4c67-9867-465c-88f3-042adcfeee17",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "equals",
                        "rhs": {
                          "type": "value",
                          "value": "Purchased item"
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
          "mandatory": false,
          "name": "Non-Kit",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f3aa4c67-9867-465c-88f3-042adcfeee17").equals("Purchased item").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "309ee062-5996-49d4-9980-37dddd1483db",
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
          "displayOrder": 29,
          "keyValues": [],
          "mandatory": true,
          "name": "Puchase/High Value",
          "parentFormElementUuid": "309ee062-5996-49d4-9980-37dddd1483db",
          "type": "SingleSelect",
          "uuid": "a56bda38-d909-43d5-8685-da34df974b45",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Unit",
            "uuid": "384789ec-1f69-4407-932c-9451d4e05a51"
          },
          "displayOrder": 30,
          "keyValues": [],
          "mandatory": true,
          "name": "Unit",
          "parentFormElementUuid": "309ee062-5996-49d4-9980-37dddd1483db",
          "type": "SingleSelect",
          "uuid": "c6a4fa95-e078-4295-ae12-1ac7a211cc70",
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
          "displayOrder": 31,
          "keyValues": [],
          "mandatory": true,
          "name": "Purchase Item Category",
          "parentFormElementUuid": "309ee062-5996-49d4-9980-37dddd1483db",
          "type": "SingleSelect",
          "uuid": "6510685d-9a57-4ae4-8412-aa7eaec85cf5",
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
          "displayOrder": 32,
          "keyValues": [],
          "mandatory": true,
          "name": "Material Name",
          "parentFormElementUuid": "309ee062-5996-49d4-9980-37dddd1483db",
          "type": "SingleSelect",
          "uuid": "c86e318f-7336-4cbf-9bbf-fb9ebc591fef",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Initial Quantity",
            "uuid": "09878916-0c78-43b4-9002-40beb894e089"
          },
          "displayOrder": 33,
          "keyValues": [],
          "mandatory": true,
          "name": "Initial Quantity",
          "parentFormElementUuid": "309ee062-5996-49d4-9980-37dddd1483db",
          "type": "SingleSelect",
          "uuid": "d900d1fe-5877-45ec-8851-0787e37e6a1b",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Current Quantity",
            "uuid": "080aca7e-c590-4036-bee7-cf3f77b488aa"
          },
          "displayOrder": 34,
          "keyValues": [],
          "mandatory": true,
          "name": "Current Quantity",
          "parentFormElementUuid": "309ee062-5996-49d4-9980-37dddd1483db",
          "type": "SingleSelect",
          "uuid": "3235040d-fc71-4dd2-bbc0-e60e5a59e9e5",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Contributed Item",
            "uuid": "ef2f247e-209f-4a8a-9fc5-4b27264d0cec"
          },
          "displayOrder": 35,
          "keyValues": [],
          "mandatory": true,
          "name": "Contributed Item",
          "parentFormElementUuid": "6b7f4d12-1cc0-45c2-8ee2-126f3b5446d6",
          "type": "SingleSelect",
          "uuid": "bb9fab41-cd14-4cf8-b934-b1f09c88a9f5",
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
          "displayOrder": 36,
          "keyValues": [],
          "mandatory": true,
          "name": "Item Category",
          "parentFormElementUuid": "6b7f4d12-1cc0-45c2-8ee2-126f3b5446d6",
          "type": "SingleSelect",
          "uuid": "0415ad3d-7797-4b86-a71b-94db8a7f334d",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Kit Name",
            "uuid": "318902e6-f7a5-4e70-8f5f-72b83f3ccb22"
          },
          "displayOrder": 37,
          "keyValues": [],
          "mandatory": true,
          "name": "Kit Name",
          "parentFormElementUuid": "d0136679-7559-4aaa-b807-5cf46d865828",
          "type": "SingleSelect",
          "uuid": "28b7fae5-c608-4b0d-9849-a7f76f657d0e",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Initial Quantity",
            "uuid": "09878916-0c78-43b4-9002-40beb894e089"
          },
          "displayOrder": 38,
          "keyValues": [],
          "mandatory": true,
          "name": "Initial Quantity",
          "parentFormElementUuid": "d0136679-7559-4aaa-b807-5cf46d865828",
          "type": "SingleSelect",
          "uuid": "eea6989b-d145-4a9e-b93a-a68c1b447fde",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Current Quantity",
            "uuid": "080aca7e-c590-4036-bee7-cf3f77b488aa"
          },
          "displayOrder": 39,
          "keyValues": [],
          "mandatory": true,
          "name": "Current Quantity",
          "parentFormElementUuid": "d0136679-7559-4aaa-b807-5cf46d865828",
          "type": "SingleSelect",
          "uuid": "8826541f-9f3c-4a5e-b193-6e315014eeb9",
          "voided": true
        }
      ],
      "name": "Inventory details",
      "timed": false,
      "uuid": "b000c7e0-abb7-4c19-863b-5d35ec0e1ce1"
    }
  ],
  "formType": "IndividualProfile",
  "name": "Inventory Item Registration",
  "uuid": "52c11e75-6e11-4d12-8f42-50f83d130d93",
  "validationRule": "",
  "visitScheduleRule": ""
}