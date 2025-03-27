[
  {
    "active": true,
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  let eligibility = true;
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual}).when.latestValueInAllEncounters("78f9d6cb-356e-45dc-90d5-216185784fe6").defined.matches();
  
  eligibility = condition11 ;
  
  return eligibility;
},
    "immutable": false,
    "name": "Distribution (voided~1673)",
    "uuid": "a29e1dbe-c894-4384-9db4-0fd2df745df8",
    "voided": true
  },
  {
    "active": true,
    "entityEligibilityCheckDeclarativeRule": [
      {
        "actions": [
          {
            "actionType": "hideEncounterType"
          }
        ],
        "conditions": [
          {
            "compoundRule": {
              "conjunction": "and",
              "rules": [
                {
                  "lhs": {
                    "conceptDataType": "Text",
                    "conceptName": "Dispatch Status Id",
                    "conceptUuid": "132868ab-811a-401e-9fd3-7c87f5512436",
                    "scope": "latestInAllEncounters",
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
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  let eligibility = true;
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual}).when.latestValueInAllEncounters("132868ab-811a-401e-9fd3-7c87f5512436").defined.matches();
  
  eligibility = !(condition11 );
  
  return eligibility;
},
    "immutable": false,
    "name": "Dispatch (voided~1674)",
    "uuid": "018267d2-9dac-4636-8458-74e98b4cb150",
    "voided": true
  },
  {
    "active": true,
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  let eligibility = true;
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual}).when.valueInRegistration("132868ab-811a-401e-9fd3-7c87f5512436").notDefined.matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual}).when.latestValueInAllEncounters("78f9d6cb-356e-45dc-90d5-216185784fe6").defined.matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual}).when.valueInRegistration("b7e82e4d-ee4c-4a6e-bb98-7a0b4eb21392").equals("In Transit").matches();
  
  eligibility = !(condition11 || condition21 || !condition31 );

  
  return eligibility;
},
    "immutable": false,
    "name": "Dispatch receipt",
    "uuid": "543c3eb6-fc01-4e3a-b3e1-ef50ec6a8896"
  }
]