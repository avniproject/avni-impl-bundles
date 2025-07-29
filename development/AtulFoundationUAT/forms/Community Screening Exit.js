{
  "name": "Community Screening Exit",
  "uuid": "f121046c-33ea-4eb3-b4a0-d753d257f3fb",
  "formType": "ProgramExit",
  "formElementGroups": [
    {
      "uuid": "b14a78da-7af8-4b7a-898b-2955514df3e5",
      "name": "Exit Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Reason for exit",
          "uuid": "7e038f42-5384-47a4-939f-ff5b0c628697",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Child death"
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
          "uuid": "1b0a5680-086c-40fb-aa25-1ded5b84c6ec",
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
          "mandatory": false
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