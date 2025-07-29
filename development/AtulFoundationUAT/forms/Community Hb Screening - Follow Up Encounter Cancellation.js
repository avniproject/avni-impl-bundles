{
  "name": "Community Hb Screening - Follow Up Encounter Cancellation",
  "uuid": "d0d5749f-7f73-4e32-b09e-67412acdf0ea",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "c0b391d2-32e4-4d01-b5fc-375525eead42",
      "name": "Reason for cancellation",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Is the person present?",
          "uuid": "96a2c178-9917-4e18-9370-8472634b5389",
          "keyValues": [],
          "concept": {
            "name": "Is the person present?",
            "uuid": "7a212bfa-365a-43a9-8ec9-a577c7922d1a",
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
          "name": "Reason for Cancellation",
          "uuid": "11117905-4604-40a1-a29e-db6b548b2089",
          "keyValues": [],
          "concept": {
            "name": "Why is the person not available?",
            "uuid": "926399e6-8f33-4f71-961c-650c3f76e567",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Went to relative or other place",
                "uuid": "7aa91832-43d7-4ed6-8fe4-feabf1455cf7",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
                "name": "12th Pass",
                "uuid": "6250a8db-2bfc-4bc2-9f26-ca9e5ac41619",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Temporarily Migrated",
                "uuid": "345d9312-166d-4162-8ed2-17a016323181",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Death",
                "uuid": "1b6ce78f-181b-4b64-9ec9-7afc07fe9729",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInCancelEncounter("926399e6-8f33-4f71-961c-650c3f76e567").containsAnyAnswerConceptName("7aa91832-43d7-4ed6-8fe4-feabf1455cf7","c28401fc-3b61-4c8d-a2a6-6c97df6ff61b").matches();
  
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
                          "conceptName": "Why is the person not available?",
                          "conceptUuid": "926399e6-8f33-4f71-961c-650c3f76e567",
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
          "mandatory": true
        }
      ],
      "display": "Reason for cancellation",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
    const programEncounter = params.entity;
    const moment = imports.moment;
    const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({programEncounter});

    const encounterType = programEncounter.encounterType.name;

    const isActiveInProgram = !programEncounter.programEnrolment.programExitDateTime;

    const baseDate = programEncounter.encounterDateTime;

    function isAlreadyScheduled(nextVisitName, earliestDate) {    
        const nextVisitDate = moment(earliestDate);
        const existingEncounters = programEncounter.programEnrolment.getEncountersOfType(encounterType);
        return existingEncounters.some((enc) =>
            enc.voided == false &&
            (enc.name == nextVisitName ||
            moment(enc.earliestVisitDateTime).isSame(nextVisitDate, 'day'))
        );
    }

    function getNextVisitName(currentVisitName) {
        const match = currentVisitName.match(/^Community Followup (\\d+)$/);
        if (match) {
            const nextNumber = parseInt(match[1], 10) + 1;
            return `Community Followup ${nextNumber}`;
        }
        return null;
    }
    
    const nextVisitName = getNextVisitName(programEncounter.name);

    if(isActiveInProgram){
        const earliestDate = moment(baseDate).add(3, 'month').startOf('day').toDate();
        const maxDate = moment(earliestDate).add(10, 'days').endOf('day').toDate();
        
        if (!isAlreadyScheduled(nextVisitName, earliestDate)) {
            scheduleBuilder.add({name: nextVisitName, encounterType: encounterType, earliestDate, maxDate});  
        }
    }
    
    return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}