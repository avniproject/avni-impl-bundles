[
  {
    "name": "School Profile (Pre-Post)",
    "uuid": "6d1c3e7c-53a8-4896-9f02-4d661e980c9f",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "ANC - Follow Up",
    "uuid": "a66e7312-3bed-4769-998f-171de8287be4",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false,
    "voided": true
  },
  {
    "name": "Delivery",
    "uuid": "fc892c3d-8285-4769-9abc-343be41aa368",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;

  let pregnancyEnrolments = individual.enrolments
    .filter((enrl) =>
        enrl.program.name == 'Pregnancy' &&
        enrl.enrolmentDateTime != null &&
        enrl.programExitDateTime == null &&
        enrl.voided == false
    )
    .sort((a, b) => moment(b.enrolmentDateTime).diff(moment(a.enrolmentDateTime)));

  if(pregnancyEnrolments.length == 0) {
    return false;
  }

  const latestPregnancyEnrolment = pregnancyEnrolments[0];

  if(latestPregnancyEnrolment.hasEncounterOfType('Delivery')) {
    return false;
  }
  
  return true;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Community Hb Screening - Follow Up",
    "uuid": "f2750595-1b37-4711-8037-e250c3687142",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Community Hb Screening",
    "uuid": "9bb3bd2d-972a-4d37-a09c-0e9a32ac6ef3",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return true;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "School Health - Screening Follow up",
    "uuid": "5d04dc3c-b10b-4678-8558-3dc9fe35e112",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
    const individual = params.entity;
    const encounters = individual.getEncounters(true);
    
    // Get screening encounters that are not voided
    const screeningEncounters = encounters.filter(enc => 
        enc.encounterType.name === 'School Health - Screening' && 
        !enc.voided && 
        enc.encounterDateTime != null
    );

    // Check if there is exactly one screening encounter
    if (screeningEncounters.length !== 1) {
        return false;
    }

    // Get the latest screening encounter
    const latestScreening = screeningEncounters[0];

    // Standard UUIDs for classes 5th to 12th
    const validClassUUIDs = [
        'c188c654-9954-4d7f-b405-0593ac751b0b', // 5th
        'db0954dc-c97d-4d8d-aad2-495b04b3c756', // 6th
        'c2df3edc-d6d1-4d86-ab37-562376b91bcd', // 7th
        'c24ae217-68f9-4543-a331-55f0606613c8', // 8th
        '953850f9-3c4d-410e-880b-923c41921065', // 9th
        '9499b6fd-d6a7-48b8-ac3a-410a87790f71', // 10th
        'a798e63d-94cd-41a4-9444-11a6ec265181', // 11th
        '8b6bf669-b1cd-44fa-b1cb-657bc281b657'  // 12th
    ];

    // First check: Student must be in class 5th to 12th
    const studentClass = latestScreening.getObservationReadableValue('Standard');
    if (!studentClass || !validClassUUIDs.some(cls => cls === studentClass)) {
        return false;
    }

    
    // Hb UUIDs for anemic values
    const anemicValues = [
        'f015ffb9-babc-434f-87d1-d46c1a52fa2d', // 8 gm/dl or less (Severe)
        '5b943e5b-56c7-40b4-977d-9c9291fec8b0', // Between 8-10 gm/dl (Moderate)
        '9847a475-3347-49d0-9f67-60a985003f96', // Between 10-12 gm/dl (Mild)
        'f2ce9989-d20c-4fe9-895b-c00ab9b5690e', // Between 8-10.9 gm/dl (Moderate)
        '2cc1be43-1a35-4cb6-9120-5c114c9e58c2', // Between 11-11.9 gm/dl (Mild)
        '18a31a40-5e6d-496c-93e7-d8a47fa45876'  // Between 11-12.9 gm/dl (Mild)
    ];
    const isAnemic = anemicValues.some(value => value === hbValue);
    if (!isAnemic) {
        return false;
    }

    // Check if followup is already done
    const hasFollowup = encounters.some(enc => 
        enc.encounterType.name === 'School Health - Screening Follow up' && 
        !enc.voided && 
        enc.encounterDateTime != null
    );

    return !hasFollowup;
}
,
    "active": true,
    "immutable": false
  },
  {
    "name": "School Health - Screening",
    "uuid": "18b15a1c-bc82-4e98-ba6c-8fb8d651c698",
    "entityEligibilityCheckRule" : 

({params, imports}) => {
  const individual = params.entity;
  const ageInMonths = individual.getAgeInMonths();
  const isAgeEligible = ageInMonths >= 120 && ageInMonths <= 228;

  const isPartOfSchool = individual.groups &&
    Array.isArray(individual.groups) &&
    individual.groups.some(group =>
      group &&
      group.groupRole &&
      group.groupRole.groupSubjectType &&
      group.groupRole.groupSubjectType.name === 'School' &&
      !group.voided
    );

  if (!isAgeEligible || !isPartOfSchool) {
    return false;
  }

  const allEncounters = (individual.encounters && Array.isArray(individual.encounters)) ? individual.encounters : [];

  const hasAnyFollowUp = allEncounters.some(enc => {
    return enc && enc.encounterType && enc.encounterType.name === 'School Health - Screening Follow up';
  });

  return !hasAnyFollowUp;
},
    "active": true,
    "immutable": false
  }
]