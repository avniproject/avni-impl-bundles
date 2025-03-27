[
  {
    "active": true,
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "allowProfilePicture": false,
    "directlyAssignable": false,
    "group": false,
    "household": false,
    "lastNameOptional": false,
    "name": "Dispatch",
    "programEligibilityCheckRule": "",
    "settings": {
      "displayPlannedEncounters": true,
      "displayRegistrationDetails": true
    },
    "shouldSyncByLocation": true,
    "subjectSummaryRule" : 
({params, imports}) =>  {
  const {summaries, individual} = params;
    summaries.push({
      name: "Dispatch Status Id",
      value: individual.getObservationValue('132868ab-811a-401e-9fd3-7c87f5512436')
    });
    console.log(summaries);
    return summaries;
},
    "syncRegistrationConcept1": "2978117c-a297-4171-99c6-23c3522ca0f8",
    "syncRegistrationConcept1Usable": true,
    "type": "Individual",
    "uniqueName": false,
    "uuid": "bc0a4ae3-77b3-4620-81c4-2d02d1c62280",
    "voided": false
  },
  {
    "active": true,
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "allowProfilePicture": false,
    "directlyAssignable": false,
    "group": false,
    "household": false,
    "lastNameOptional": false,
    "name": "Demand",
    "settings": {
      "displayPlannedEncounters": true,
      "displayRegistrationDetails": true
    },
    "shouldSyncByLocation": true,
    "subjectSummaryRule" : 
({params, imports}) =>  {
  const {summaries, individual} = params;
  console.log("summary", individual);
  //if(true){
  //summaries.push({name: CONCEPT_NAME, value: someValue})
  //}
  return summaries;
},
    "syncRegistrationConcept1": "2978117c-a297-4171-99c6-23c3522ca0f8",
    "syncRegistrationConcept1Usable": true,
    "type": "Individual",
    "uniqueName": false,
    "uuid": "461abfde-8767-41f3-993e-b68599999f07",
    "voided": false
  },
  {
    "active": true,
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "allowProfilePicture": false,
    "directlyAssignable": false,
    "group": false,
    "household": false,
    "lastNameOptional": false,
    "name": "Activity",
    "programEligibilityCheckRule": "",
    "settings": {
      "displayPlannedEncounters": true,
      "displayRegistrationDetails": true
    },
    "shouldSyncByLocation": true,
    "subjectSummaryRule": "",
    "syncRegistrationConcept1": "2978117c-a297-4171-99c6-23c3522ca0f8",
    "syncRegistrationConcept1Usable": true,
    "type": "Individual",
    "uniqueName": false,
    "uuid": "07d0e5b8-0dad-4469-9623-10278261f829",
    "voided": false
  },
  {
    "active": true,
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "allowProfilePicture": false,
    "directlyAssignable": false,
    "group": false,
    "household": false,
    "lastNameOptional": false,
    "name": "Inventory Item",
    "programEligibilityCheckRule": "",
    "settings": {
      "displayPlannedEncounters": true,
      "displayRegistrationDetails": true
    },
    "shouldSyncByLocation": true,
    "subjectSummaryRule": "",
    "syncRegistrationConcept1": "41de93e4-daaf-4207-bf70-b32939d09ea5",
    "syncRegistrationConcept1Usable": true,
    "type": "Individual",
    "uniqueName": false,
    "uuid": "07df088a-7924-461d-9a9b-24a29d43813b",
    "voided": false
  },
  {
    "active": true,
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "allowProfilePicture": false,
    "directlyAssignable": false,
    "group": true,
    "household": false,
    "lastNameOptional": false,
    "name": "Village",
    "programEligibilityCheckRule": "",
    "settings": {
      "displayPlannedEncounters": true,
      "displayRegistrationDetails": true
    },
    "shouldSyncByLocation": true,
    "subjectSummaryRule": "",
    "type": "Group",
    "uniqueName": false,
    "uuid": "c781319c-e47f-49f1-9ed7-7c85cd2bd16a",
    "voided": false
  }
]