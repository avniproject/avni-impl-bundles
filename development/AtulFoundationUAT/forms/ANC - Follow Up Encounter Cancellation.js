{
  "name": "ANC - Follow Up Encounter Cancellation",
  "uuid": "2b208111-cfd4-4884-aa4d-1cf77c2eafdc",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "fcbb01b1-c600-4a67-9910-4a52a4471428",
      "name": "Reason for cancellaton",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Is the patient present?",
          "uuid": "a160f3c8-d02f-4dd2-8406-2063855a0077",
          "keyValues": [],
          "concept": {
            "name": "Is the patient present?",
            "uuid": "d3cabdc4-fe41-4fdd-a92d-3c6052830dc4",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "f7a3a360-58d3-4987-99ff-e7fb97f911a0",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "30ade50e-fef5-4de1-9a6b-965cc66132ba",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Reason for cancellation",
          "uuid": "30e5ff8a-7338-4e23-8862-bda1047ad188",
          "keyValues": [],
          "concept": {
            "name": "Why patient not availble?",
            "uuid": "e19ded48-c845-4a50-91ab-0d559d570b39",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Went to relative or other place",
                "uuid": "7aa91832-43d7-4ed6-8fe4-feabf1455cf7",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Not known",
                "uuid": "c28401fc-3b61-4c8d-a2a6-6c97df6ff61b",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Temporarily Migrated",
                "uuid": "345d9312-166d-4162-8ed2-17a016323181",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Death",
                "uuid": "1b6ce78f-181b-4b64-9ec9-7afc07fe9729",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInCancelEncounter("e19ded48-c845-4a50-91ab-0d559d570b39").containsAnyAnswerConceptName("7aa91832-43d7-4ed6-8fe4-feabf1455cf7","c28401fc-3b61-4c8d-a2a6-6c97df6ff61b").matches();
  
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
                          "scope": "cancelEncounter",
                          "conceptName": "Why patient not availble?",
                          "conceptUuid": "e19ded48-c845-4a50-91ab-0d559d570b39",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Went to relative or other place",
                            "Not known"
                          ],
                          "answerConceptUuids": [
                            "7aa91832-43d7-4ed6-8fe4-feabf1455cf7",
                            "c28401fc-3b61-4c8d-a2a6-6c97df6ff61b"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Reason for cancellaton",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({programEncounter});
  
  if(true){
    const earliestDate = moment(programEncounter.cancelDateTime).add(30, 'days').toDate();
    const maxDate = moment(programEncounter.cancelDateTime).add(10, 'days').toDate();
    scheduleBuilder.add({name: "ANC - Follow Up", encounterType: "ANC - Follow Up", earliestDate, maxDate});  
}
  
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": [],
  "visitScheduleDeclarativeRule": [
    {
      "actions": [
        {
          "details": {
            "dateField": "cancelDateTime",
            "daysToOverdue": "10",
            "encounterName": "ANC - Follow Up",
            "encounterType": "ANC - Follow Up",
            "daysToSchedule": "30"
          },
          "actionType": "scheduleVisit"
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
  ]
}