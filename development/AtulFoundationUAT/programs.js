[
  {
    "name": "Child",
    "uuid": "16e226cd-9ea0-42f6-98a0-f39c9133bbb3",
    "colour": "#ff0000",
    "voided": false,
    "active": null,
    "enrolmentEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  let eligibility = true;

  const twoYearsAgo = moment().subtract(2, 'years').startOf('day');
  const dateOfBirth = moment(individual.dateOfBirth).startOf('day');

  eligibility = dateOfBirth.isSameOrAfter(twoYearsAgo);
  
  return eligibility;
},
    "enrolmentSummaryRule": "",
    "enrolmentEligibilityCheckDeclarativeRule": null,
    "manualEligibilityCheckRequired": false,
    "showGrowthChart": true,
    "manualEnrolmentEligibilityCheckRule": "",
    "manualEnrolmentEligibilityCheckDeclarativeRule": null,
    "allowMultipleEnrolments": false
  },
  {
    "name": "Pregnancy",
    "uuid": "e4570a64-d5d3-49b9-a1dd-a067f50fc411",
    "colour": "#ff0000",
    "voided": false,
    "active": null,
    "enrolmentEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  let eligibility = true;
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual}).when.ageInYears.greaterThanOrEqualTo(12).and.when.ageInYears.lessThanOrEqualTo(50).and.when.gender.equals("Female").matches();
  
  eligibility = condition11 ;
  
  return eligibility;
},
    "enrolmentSummaryRule": "",
    "enrolmentEligibilityCheckDeclarativeRule": [
      {
        "actions": [
          {
            "actionType": "showProgram"
          },
          {}
        ],
        "conditions": [
          {
            "compoundRule": {
              "rules": [
                {
                  "lhs": {
                    "type": "ageInYears"
                  },
                  "rhs": {
                    "type": "value",
                    "value": 12
                  },
                  "operator": "greaterThanOrEqualTo"
                },
                {
                  "lhs": {
                    "type": "ageInYears"
                  },
                  "rhs": {
                    "type": "value",
                    "value": 50
                  },
                  "operator": "lessThanOrEqualTo"
                },
                {
                  "lhs": {
                    "type": "gender"
                  },
                  "rhs": {
                    "type": "value",
                    "value": "Female"
                  },
                  "operator": "equals"
                }
              ],
              "conjunction": "and"
            }
          }
        ]
      }
    ],
    "manualEligibilityCheckRequired": false,
    "showGrowthChart": false,
    "manualEnrolmentEligibilityCheckRule": "",
    "manualEnrolmentEligibilityCheckDeclarativeRule": null,
    "allowMultipleEnrolments": false
  },
  {
    "name": "Community Screening",
    "uuid": "3bf0c0d7-5f6e-42c1-91ef-ff6ac15612e5",
    "colour": "#0053f5",
    "voided": false,
    "active": null,
    "enrolmentEligibilityCheckRule" : 
({params, imports}) => {
    const individual = params.entity;
    
    let eligibility = false;
    
    
    
    const ageInMonths = individual.getAgeInMonths();
    const isAgeEligible = ageInMonths >= 120 && ageInMonths < 240;

    console.log('isAgeEligible--->',isAgeEligible);
    if (!isAgeEligible) {
        return false;
    }

    const isPartOfSchool = individual.groups &&
        Array.isArray(individual.groups) &&
        individual.groups.some(group =>
            group &&
            group.groupRole &&
            group.groupRole.groupSubjectType &&
            group.groupRole.groupSubjectType.name === 'School' &&
            !group.voided
        );
    console.log('isPartOfSchool--->',isPartOfSchool);
    if (isPartOfSchool) {
        const encounters = Array.isArray(individual.encounters) ? individual.encounters : [];

        const foundEligibleCancellation = encounters.some(enc =>
            enc &&
            enc.encounterType &&
            enc.encounterType.name === 'School Health - Screening Follow up' &&
            enc.cancelDateTime &&
            Array.isArray(enc.cancelObservations) &&
            enc.cancelObservations.some(obs => {
                if (
                    obs &&
                    obs.concept &&
                    obs.concept.uuid === 'f52e6c46-f982-4331-95c4-26bb36c48e72' &&
                    typeof obs.valueJSON === 'string'
                ) {
                    try {
                        const parsed = JSON.parse(obs.valueJSON);
                        return parsed.answer === '6250a8db-2bfc-4bc2-9f26-ca9e5ac41619';
                    } catch (e) {
                        return false;
                    }
                }
                return false;
            })
        );

        eligibility = foundEligibleCancellation;
    } else {
        eligibility = true;
    }

    return eligibility;
},
    "enrolmentSummaryRule": "",
    "enrolmentEligibilityCheckDeclarativeRule": null,
    "manualEligibilityCheckRequired": false,
    "showGrowthChart": false,
    "manualEnrolmentEligibilityCheckRule": "",
    "manualEnrolmentEligibilityCheckDeclarativeRule": null,
    "allowMultipleEnrolments": false
  }
]