{
  "name": "PNC Encounter Cancellation",
  "uuid": "41fdaae9-fcee-444b-a280-a357d8f28fd5",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "a1ea86ff-2049-4fbc-ac88-d604968705e5",
      "name": "Reason for cancellaton",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Is the patient present?",
          "uuid": "cd7344bb-6539-4db0-a781-8db8675ac436",
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
          "mandatory": true
        },
        {
          "name": "Reason for cancellation",
          "uuid": "7297888c-eab8-431d-bf10-0c80117c7e9f",
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
          "rule": "",
          "mandatory": true
        },
        {
          "name": "When will visit again for the patient?",
          "uuid": "607f96d5-f1d2-416a-8b9e-229e35aae1a9",
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
          "rule": "",
          "voided": true,
          "mandatory": true
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
    const encounterType = programEncounter.encounterType.name;

    const isActiveInProgram = !programEncounter.programEnrolment.programExitDateTime;

    const pncVistFrequency = {
        'PNC Followup 1': {nextFollowupName: 'PNC Followup 2', delimeter: 'day', value: 7},
        'PNC Followup 2': {nextFollowupName: 'PNC Followup 3', delimeter: 'day', value: 14},
        'PNC Followup 3': {nextFollowupName: 'PNC Followup 4', delimeter: 'day', value: 21},
        'PNC Followup 4': {nextFollowupName: 'PNC Followup 5', delimeter: 'day', value: 28},
        'PNC Followup 5': {nextFollowupName: 'PNC Followup 6', delimeter: 'day', value: 42},
        'PNC Followup 6': {nextFollowupName: 'PNC Followup 7', delimeter: 'month', value: 3},
        'PNC Followup 7': {nextFollowupName: 'PNC Followup 8', delimeter: 'month', value: 4},
        'PNC Followup 8': {nextFollowupName: 'PNC Followup 9', delimeter: 'month', value: 5},
        'PNC Followup 9': {nextFollowupName: 'PNC Followup 10', delimeter: 'month', value: 6}
    }

    const currentProgramEncounterName = programEncounter.name;
    const nextVisitObj = pncVistFrequency[currentProgramEncounterName];

    const existingEncounters = programEncounter.programEnrolment.getEncountersOfType("Delivery");

    let dateOfDelivery = null;

    if(existingEncounters && existingEncounters.length > 0) {
        dateOfDelivery = existingEncounters[0].getObservationReadableValue('5f9a5098-d052-4843-8e13-0c1f455490fc');
    }
    function isAlreadyScheduled(nextVisitName, earliestDate) {    
        const nextVisitDate = moment(earliestDate);
        const existingEncounters = programEncounter.programEnrolment.getEncountersOfType(encounterType);
        return existingEncounters.some((enc) =>
            enc.voided == false &&
            (enc.name == nextVisitName ||
            moment(enc.earliestVisitDateTime).isSame(nextVisitDate, 'day'))
        );
    }

    if(isActiveInProgram && nextVisitObj && dateOfDelivery){
        const earliestDate = moment(dateOfDelivery).add(nextVisitObj.value, nextVisitObj.delimeter).startOf('day').toDate();
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