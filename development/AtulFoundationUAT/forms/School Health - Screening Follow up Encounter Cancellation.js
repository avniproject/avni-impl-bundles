{
  "name": "School Health - Screening Follow up Encounter Cancellation",
  "uuid": "3df0c519-a0ae-4ad1-9c7b-88bab2c60dd8",
  "formType": "IndividualEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "d417a44e-d8d1-4b7a-8d42-33d02b9b91f0",
      "name": "Reason for cancellation",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Is the student present?",
          "uuid": "2e0d758a-1f52-4425-b88c-9c776423cf7d",
          "keyValues": [],
          "concept": {
            "name": "Is the student present?",
            "uuid": "a54fe0da-6ec3-4a8a-8a7c-d17b8f2ea5d9",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "30ade50e-fef5-4de1-9a6b-965cc66132ba",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "f7a3a360-58d3-4987-99ff-e7fb97f911a0",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Reason for cancellation",
          "uuid": "98428947-3dd1-49b3-9c9b-0126365b4548",
          "keyValues": [],
          "concept": {
            "name": "Why not available?",
            "uuid": "f52e6c46-f982-4331-95c4-26bb36c48e72",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Death",
                "uuid": "1b6ce78f-181b-4b64-9ec9-7afc07fe9729",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Went to relative or other place",
                "uuid": "7aa91832-43d7-4ed6-8fe4-feabf1455cf7",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "12th Pass",
                "uuid": "6250a8db-2bfc-4bc2-9f26-ca9e5ac41619",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Not known",
                "uuid": "c28401fc-3b61-4c8d-a2a6-6c97df6ff61b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Temporarily Migrated",
                "uuid": "345d9312-166d-4162-8ed2-17a016323181",
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
          "mandatory": true
        },
        {
          "name": "When will visit again?",
          "uuid": "4d33d96e-693d-4dfb-ab70-0b45099280fa",
          "keyValues": [],
          "concept": {
            "name": "When will visit again for the patient?",
            "uuid": "f78f4b22-9930-4575-8c55-4a5108cf90a8",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInCancelEncounter("f52e6c46-f982-4331-95c4-26bb36c48e72").containsAnyAnswerConceptName("7aa91832-43d7-4ed6-8fe4-feabf1455cf7","c28401fc-3b61-4c8d-a2a6-6c97df6ff61b").matches();
  
  visibility = condition11 ;
  
  let selectedDate = encounter.findCancelEncounterObservationReadableValue('f78f4b22-9930-4575-8c55-4a5108cf90a8');

  if (selectedDate) {
  
      selectedDate = moment(selectedDate).startOf('day');
      console.log('selectedDate--->',selectedDate);
      const today = moment().startOf('day');
      console.log('today--->',today);

      if (selectedDate.isSameOrBefore(today, 'day')) {
          validationErrors.push("The selected date must be in the future.");
      }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        }
      ],
      "display": "Reason for cancellation",
      "timed": false
    }
  ],
  "decisionRule": ""use strict";
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const decisions = params.decisions;
    const enrolmentDecisions = [];
    const encounterDecisions = [];
    const registrationDecisions = [];
    
  const condition11 = new imports.rulesConfig.RuleCondition({encounter}).when.valueInCancelEncounter("ba3c5ad5-b7cf-444d-bc0c-a66379ea8600").containsAnswerConceptName("6250a8db-2bfc-4bc2-9f26-ca9e5ac41619").matches();
  
    if(condition11 ){
    encounterDecisions.push({name: "Is student 12th Passed", value: ["Yes"]});  
}
  
    decisions.enrolmentDecisions.push(...enrolmentDecisions);
    decisions.encounterDecisions.push(...encounterDecisions);
    decisions.registrationDecisions.push(...registrationDecisions);
    return decisions;
},
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({encounter});
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter}).when.valueInLastEncounter("3f1d701c-9c33-46dd-9143-b56e06fc495b").containsAnyAnswerConceptName("3757eb2a-8eae-48b1-9469-37bbd59dda35","0a7fd778-3eb1-425d-8064-7b3f5a1b9463","cb5b6fe3-bd8b-434e-ac8b-9ef7b324c8aa","cf2ff4bd-38cb-4b94-a743-fd4b91d2cab0").and.when.ageInYears.greaterThanOrEqualTo(5).and.when.ageInYears.lessThanOrEqualTo(19).matches();
  
  if(condition11 ){
    const earliestDate = moment(encounter.cancelDateTime).add(30, 'days').toDate();
    const maxDate = moment(encounter.cancelDateTime).add(10, 'days').toDate();
    scheduleBuilder.add({name: "School Health - Screening Follow up", encounterType: "School Health - Screening Follow up", earliestDate, maxDate});  
}
  
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": [],
  "decisionDeclarativeRule": [
    {
      "actions": [
        {
          "details": {
            "scope": "encounter",
            "value": [
              "Yes"
            ],
            "conceptName": "Is student 12th Passed",
            "conceptUuid": "fac63507-5d10-45bb-891c-42fed0cb8b7f",
            "conceptDataType": "Coded"
          },
          "actionType": "addDecision"
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
                  "conceptName": "Reason for cancellation",
                  "conceptUuid": "ba3c5ad5-b7cf-444d-bc0c-a66379ea8600",
                  "conceptDataType": "Coded"
                },
                "rhs": {
                  "type": "answerConcept",
                  "answerConceptNames": [
                    "12th Pass"
                  ],
                  "answerConceptUuids": [
                    "6250a8db-2bfc-4bc2-9f26-ca9e5ac41619"
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
  "visitScheduleDeclarativeRule": [
    {
      "actions": [
        {
          "details": {
            "dateField": "cancelDateTime",
            "daysToOverdue": "10",
            "encounterName": "School Health - Screening Follow up",
            "encounterType": "School Health - Screening Follow up",
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
                "lhs": {
                  "type": "concept",
                  "scope": "lastEncounter",
                  "conceptName": "Hb",
                  "conceptUuid": "3f1d701c-9c33-46dd-9143-b56e06fc495b",
                  "conceptDataType": "Coded"
                },
                "rhs": {
                  "type": "answerConcept",
                  "answerConceptNames": [
                    "Less than 8 gm/dl-Severe Anaemia",
                    "8- 10.9 gm/dl-Moderate Anaemia",
                    "11-11.9 gm/dl-Mild Anaemia",
                    "11-12.9 gm/dl - Mild Anaemia"
                  ],
                  "answerConceptUuids": [
                    "3757eb2a-8eae-48b1-9469-37bbd59dda35",
                    "0a7fd778-3eb1-425d-8064-7b3f5a1b9463",
                    "cb5b6fe3-bd8b-434e-ac8b-9ef7b324c8aa",
                    "cf2ff4bd-38cb-4b94-a743-fd4b91d2cab0"
                  ]
                },
                "operator": "containsAnyAnswerConceptName"
              },
              {
                "lhs": {
                  "type": "ageInYears"
                },
                "rhs": {
                  "type": "value",
                  "value": 5
                },
                "operator": "greaterThanOrEqualTo"
              },
              {
                "lhs": {
                  "type": "ageInYears"
                },
                "rhs": {
                  "type": "value",
                  "value": 19
                },
                "operator": "lessThanOrEqualTo"
              }
            ],
            "conjunction": "and"
          }
        }
      ]
    }
  ]
}