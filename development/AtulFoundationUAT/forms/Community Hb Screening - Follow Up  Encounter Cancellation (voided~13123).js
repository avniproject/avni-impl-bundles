{
  "name": "Community Hb Screening - Follow Up  Encounter Cancellation (voided~13123)",
  "uuid": "52752841-ccae-48d0-b0eb-a4fdf2a9a9da",
  "formType": "IndividualEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "36d438bc-5fd5-4012-b3c8-7923e9d14b6b",
      "name": "Reason for cancellation",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Is the person present?",
          "uuid": "e080b629-6a7d-4b47-90f9-dae3cb9686b7",
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
          "mandatory": true
        },
        {
          "name": "Why is the person not available?",
          "uuid": "e1554098-7b5d-4897-8d4b-cb473d7a1b06",
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
          "mandatory": true
        },
        {
          "name": "When will you visit again?",
          "uuid": "b11a4098-5538-465b-8d2c-bed782070002",
          "keyValues": [],
          "concept": {
            "name": "When will you visit again?",
            "uuid": "9a524e0e-1ec3-41ca-9c7f-bc42d9745114",
            "dataType": "Coded",
            "answers": [
              {
                "name": "After 15 days",
                "uuid": "d1aa3722-0736-4ae7-967b-d7eb0dd7449b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "After 30 days",
                "uuid": "8429e030-cc24-4f87-9237-529728d97690",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "After seven days",
                "uuid": "882e4b89-4ee1-4dfa-b500-3755a0f0f5ac",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInCancelEncounter("926399e6-8f33-4f71-961c-650c3f76e567").containsAnyAnswerConceptName("7aa91832-43d7-4ed6-8fe4-feabf1455cf7","c28401fc-3b61-4c8d-a2a6-6c97df6ff61b").matches();
  
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
          "mandatory": true
        }
      ],
      "display": "Reason for cancellation",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": [],
  "voided": true
}