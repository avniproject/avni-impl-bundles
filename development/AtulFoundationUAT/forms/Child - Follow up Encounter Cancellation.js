{
  "name": "Child - Follow up Encounter Cancellation",
  "uuid": "3c79062c-3787-473d-8827-fbc771794057",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "b980d123-a375-4feb-9af6-c7e2c8bc551f",
      "name": "Reason for cancellation",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Is the child present?",
          "uuid": "b193a621-bd76-4956-bd10-f3efea2e3bd7",
          "keyValues": [],
          "concept": {
            "name": "Is the child present?",
            "uuid": "51e92d6f-2ef5-4de0-9be1-74b768cb8142",
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
          "mandatory": true
        },
        {
          "name": "Reason for cancellation",
          "uuid": "30e79de9-0bdf-4d98-9caa-ae4599655eb3",
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Reason for cancellation",
          "uuid": "486d064c-f732-44a1-afbf-705d61fc3a5a",
          "keyValues": [],
          "concept": {
            "name": "Reason for cancellation",
            "uuid": "ba3c5ad5-b7cf-444d-bc0c-a66379ea8600",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Temporarily Migrated",
                "uuid": "345d9312-166d-4162-8ed2-17a016323181",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
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
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "When will you visit the child again?",
          "uuid": "1babcb0a-bf77-4df6-9d97-c6aa2f7ce7fe",
          "keyValues": [],
          "concept": {
            "name": "When will you visit the child again?",
            "uuid": "40bf91d6-7b64-4bc4-b4ba-80785159cedc",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInCancelEncounter("ba3c5ad5-b7cf-444d-bc0c-a66379ea8600").containsAnyAnswerConceptName("7aa91832-43d7-4ed6-8fe4-feabf1455cf7","c28401fc-3b61-4c8d-a2a6-6c97df6ff61b").matches();
  
  visibility = condition11 ;

  const observationDate = programEncounter.findCancelEncounterObservationReadableValue('40bf91d6-7b64-4bc4-b4ba-80785159cedc');
  const today = moment().startOf('day');

  if (observationDate && moment(observationDate).isSameOrBefore(today, 'day')) {
    validationErrors.push('The selected date must be in the future.');
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
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

    let nextVisitDate = programEncounter.findCancelEncounterObservationReadableValue("40bf91d6-7b64-4bc4-b4ba-80785159cedc");
    const isActiveInProgram = !programEncounter.programEnrolment.programExitDateTime;

    const childFollowupFrequency = {
        'Child Followup 1': {nextFollowupName: 'Child Followup 2', delimeter: 'day', value: 14},
        'Child Followup 2': {nextFollowupName: 'Child Followup 3', delimeter: 'day', value: 28},
        'Child Followup 3': {nextFollowupName: 'Child Followup 4', delimeter: 'month', value: 3},
        'Child Followup 4': {nextFollowupName: 'Child Followup 5', delimeter: 'month', value: 6},
        'Child Followup 5': {nextFollowupName: 'Child Followup 6', delimeter: 'month', value: 9},
        'Child Followup 6': {nextFollowupName: 'Child Followup 7', delimeter: 'month', value: 12},
        'Child Followup 7': {nextFollowupName: 'Child Followup 8', delimeter: 'month', value: 15},
        'Child Followup 8': {nextFollowupName: 'Child Followup 9', delimeter: 'month', value: 18},
        'Child Followup 9': {nextFollowupName: 'Child Followup 10', delimeter: 'month', value: 21},
        'Child Followup 10': {nextFollowupName: 'Child Followup 11', delimeter: 'month', value: 24},
    };
    
    const currentProgramEncounterName = programEncounter.name;
    const nextVisitObj = childFollowupFrequency[currentProgramEncounterName];

    function isAlreadyScheduled(nextVisitName, earliestDate) {    
        const nextVisitDate = moment(earliestDate);
        const existingEncounters = programEncounter.programEnrolment.getEncountersOfType(encounterType);
        return existingEncounters.some((enc) =>
            enc.voided == false &&
            (enc.name == nextVisitName ||
            moment(enc.earliestVisitDateTime).isSame(nextVisitDate, 'day'))
        );
    }

    if(nextVisitDate && nextVisitObj && isActiveInProgram) {
        const earliestDate = moment(nextVisitDate).startOf('day').toDate();
        const maxDate = moment(earliestDate).add(10, 'days').endOf('day').toDate();
        
        if (!isAlreadyScheduled(nextVisitObj.nextFollowupName, earliestDate)) {
            scheduleBuilder.add({name: nextVisitObj.nextFollowupName, encounterType: encounterType, earliestDate, maxDate});  
        }
    }
    
    return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}