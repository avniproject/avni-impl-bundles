{
  "name": "Child Exit",
  "uuid": "de5b3176-0976-44b3-90d2-72f01ff2359f",
  "formType": "ProgramExit",
  "formElementGroups": [
    {
      "uuid": "f2f003ce-5d0a-4519-99bf-9e65cd2b4092",
      "name": "Exit Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Reason for exit",
          "uuid": "183f79ed-b87e-4ae0-93b3-3d97a29c2372",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Passed class 12"
              ]
            }
          ],
          "concept": {
            "name": "Reason for exit",
            "uuid": "33940cc4-f3da-423c-ad51-20b8d6c4a1fc",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Migrated and not in contact",
                "uuid": "1cce87a8-5aab-4615-aa59-bfb96c135d26",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "cf383e34-8ed9-47bd-9e86-41f726773a1f",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Migrated and in contact through phone",
                "uuid": "2ae56308-8ab7-4210-a102-a3623b46e985",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Child death",
                "uuid": "91432b1c-6e04-41b6-81a4-3404635d300d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Passed class 12",
                "uuid": "8af90411-efa0-459a-b16d-814329969b17",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Other reason, please specify",
          "uuid": "919cf3ca-e52c-4c8e-b715-d33646799bb1",
          "keyValues": [],
          "concept": {
            "name": "Other reason, please specify",
            "uuid": "55316640-b851-4002-9d46-dba38e7a95e7",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInExit("33940cc4-f3da-423c-ad51-20b8d6c4a1fc").containsAnswerConceptName("cf383e34-8ed9-47bd-9e86-41f726773a1f").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
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
                          "type": "concept",
                          "scope": "exit",
                          "conceptName": "Reason for exit",
                          "conceptUuid": "33940cc4-f3da-423c-ad51-20b8d6c4a1fc",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "cf383e34-8ed9-47bd-9e86-41f726773a1f"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        }
      ],
      "display": "Exit Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}