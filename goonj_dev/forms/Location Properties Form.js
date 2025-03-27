{
  "checklistsRule": "",
  "decisionConcepts": [],
  "decisionRule": "",
  "formElementGroups": [
    {
      "display": "Info",
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
                "name": "No",
                "order": 1,
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Yes",
                "order": 0,
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12"
              }
            ],
            "dataType": "Coded",
            "name": "Is Assessment Done?",
            "uuid": "348a795a-bbae-4353-be30-db9ae106d4f3"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Is Assessment Done?",
          "type": "SingleSelect",
          "uuid": "7fbdbb25-ea9d-4d3a-9931-b5d85f479da2"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Date",
            "name": "Assessment Date",
            "uuid": "c9871602-2104-4c92-8c99-800efffa533e"
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
                          "conceptName": "Is Assessment Done?",
                          "conceptUuid": "348a795a-bbae-4353-be30-db9ae106d4f3",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "303d5ad1-ffa2-4096-ba7c-a86876ca9d12"
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
          "name": "Assessment Date",
          "rule" : 
({params, imports}) => {
  const undefined = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({undefined, formElement}).when.valueInRegistration("348a795a-bbae-4353-be30-db9ae106d4f3").containsAnswerConceptName("303d5ad1-ffa2-4096-ba7c-a86876ca9d12").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "2c458cdb-8463-41bf-b85b-2fef82af537f"
        }
      ],
      "name": "Info",
      "timed": false,
      "uuid": "c3a489f3-7049-47c6-8036-cfb34591e58a"
    }
  ],
  "formType": "Location",
  "name": "Location Properties Form",
  "uuid": "905d37b8-e85d-48ea-adc6-a31e89abd9b6",
  "validationRule": "",
  "visitScheduleRule": ""
}