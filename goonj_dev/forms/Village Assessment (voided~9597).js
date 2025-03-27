{
  "checklistsRule": "",
  "decisionConcepts": [],
  "decisionRule": "",
  "formElementGroups": [
    {
      "display": "Address",
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
                "name": "Value 3",
                "order": 2,
                "uuid": "022f498b-d68d-43b5-95a2-07a388b8b746"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 1",
                "order": 0,
                "unique": true,
                "uuid": "1449c205-e3df-4e57-8068-24a533688ffc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 2",
                "order": 1,
                "uuid": "fea4b9ca-e3bd-423e-98ed-ae41cecdf8d1"
              }
            ],
            "dataType": "Coded",
            "name": "Districts (voided~207396)",
            "uuid": "45008c2c-e3cf-45b7-96fc-0350b2927d42",
            "voided": true
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Districts",
          "type": "SingleSelect",
          "uuid": "7291cb22-76bf-4050-bf3e-1684b5c66fdf",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 2",
                "order": 1,
                "uuid": "fea4b9ca-e3bd-423e-98ed-ae41cecdf8d1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 3",
                "order": 2,
                "uuid": "022f498b-d68d-43b5-95a2-07a388b8b746"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 1",
                "order": 0,
                "uuid": "1449c205-e3df-4e57-8068-24a533688ffc"
              }
            ],
            "dataType": "Coded",
            "name": "Blocks (voided~220547)",
            "uuid": "706ec20c-611e-4acd-a046-d6a45e161b19",
            "voided": true
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Blocks",
          "type": "SingleSelect",
          "uuid": "bd83fbb0-5958-48c4-a6e3-ce7155ea0c64",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 1",
                "order": 0,
                "uuid": "1449c205-e3df-4e57-8068-24a533688ffc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 2",
                "order": 1,
                "uuid": "fea4b9ca-e3bd-423e-98ed-ae41cecdf8d1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Value 3",
                "order": 2,
                "uuid": "022f498b-d68d-43b5-95a2-07a388b8b746"
              }
            ],
            "dataType": "Coded",
            "name": "Villages (voided~220507)",
            "uuid": "17d911ad-18a5-4903-b43e-32d4674e86f0",
            "voided": true
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Village",
          "type": "SingleSelect",
          "uuid": "1797ad9a-3c10-4509-87f7-c0c17d5f6e73",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Location",
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "3410e7a2-cefe-4fc7-94b4-6631656c548c"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ],
            "name": "State",
            "uuid": "fdcb1ae2-505d-4784-993f-1de9d5e2ba60"
          },
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "State",
          "type": "SingleSelect",
          "uuid": "48704b31-c685-4e1e-921c-dfd2fd4e851e",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Village (voided~207375)",
            "uuid": "1f22b2fd-7279-4b6d-a92d-9a7415a8b14b",
            "voided": true
          },
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": true,
          "name": "Village",
          "type": "SingleSelect",
          "uuid": "0f04b762-8e37-44e9-a3a6-c6c180992a08",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Location",
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "47a9e070-090d-46f8-8f06-834c193b8bec"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ],
            "name": "Location",
            "uuid": "164971fe-2166-4b06-b215-926fba6362ef"
          },
          "displayOrder": 6,
          "keyValues": [],
          "mandatory": true,
          "name": "Village",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("164971fe-2166-4b06-b215-926fba6362ef").defined.matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "ebd9a8f0-ae1f-4e59-973c-4cb463a56267",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Location",
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "47a9e070-090d-46f8-8f06-834c193b8bec"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ],
            "name": "Location",
            "uuid": "164971fe-2166-4b06-b215-926fba6362ef"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": false,
          "name": "Location",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("17d911ad-18a5-4903-b43e-32d4674e86f0").defined.matches();
  
  if(condition11 ){
    value = individual.getObservationValue("17d911ad-18a5-4903-b43e-32d4674e86f0");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "6d43adeb-0d33-4f85-927d-42b55e5b8cfd",
          "voided": true
        }
      ],
      "name": "Location Details",
      "timed": false,
      "uuid": "796a429e-5b7f-4ec1-be35-f2bdc0fab83d",
      "voided": true
    },
    {
      "display": "Activity Details",
      "displayOrder": 3,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Location",
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "3410e7a2-cefe-4fc7-94b4-6631656c548c"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ],
            "name": "Address (voided~220053)",
            "uuid": "c03c7864-8fbb-4557-907a-1047092bdc37",
            "voided": true
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Address",
          "type": "SingleSelect",
          "uuid": "56823634-d203-4cf5-a522-385529fc328b",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Account code",
            "uuid": "2fb51840-9356-4b24-85e8-76135a6492bb"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Account code",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.lowestAddressLevel.defined.matches();
  const isDefined = individual.lowestAddressLevel !== undefined && individual.lowestAddressLevel.locationMappings.length !== 0;
  //&& individual.lowestAddressLevel.isSelected;
  if (isDefined) {
    const block = individual.lowestAddressLevel.locationMappings[0].parent.name;
    if (block === 'Other') {
      visibility = true;
    }
    else {
      visibility = false;
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "type": "SingleSelect",
          "uuid": "6c52f6fe-604b-4965-b8cd-3fbc1bb2b2a8"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Other Village",
            "uuid": "16b4db7c-e0a8-41f1-ac67-07470a762d9f"
          },
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": true,
          "name": "Other Village",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({individual, formElement});
  let visibility = false;
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.lowestAddressLevel.defined.matches();
  if (condition11) {
    // TODO: individual.lowestAddressLevel is defined should be checked
    const village = individual.lowestAddressLevel.name;
    const otherVillage = 'Other'
    const showCondition = village === otherVillage;
    statusBuilder.show().whenItem(showCondition).is.truthy;
  }
  return statusBuilder.build();
},
          "type": "SingleSelect",
          "uuid": "7856702d-2389-4754-9099-936242c9683e"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Source Id",
            "uuid": "98913e69-ab32-48aa-9f50-cf539779ccf8"
          },
          "displayOrder": 6,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Source Id (temp field)",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const formElement = params.formElement;
  let value = individual.uuid;
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, true, value);
},
          "type": "SingleSelect",
          "uuid": "897e29a0-ce3e-41c4-953a-d3f7d30376ee"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Account  name",
            "uuid": "2978117c-a297-4171-99c6-23c3522ca0f8"
          },
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": true,
          "name": "Account  name",
          "type": "SingleSelect",
          "uuid": "81122ce0-75e8-4664-93c5-3e71e92b3596"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "NJPC",
                "order": 2,
                "uuid": "6404fcaf-31de-4322-9620-c1b958f9c548"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "CFW",
                "order": 0,
                "uuid": "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S",
                "order": 1,
                "uuid": "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
              }
            ],
            "dataType": "Coded",
            "name": "Type of initiative",
            "uuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb"
          },
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of initiative",
          "type": "SingleSelect",
          "uuid": "b34e6d98-858d-443c-a70b-c5d55a4c6b22"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Vaapsi",
                "order": 8,
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Only CFW",
                "order": 0,
                "uuid": "18aee17d-bc4e-4e84-b5bd-df28961acf77"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "CFW-Rahat",
                "order": 4,
                "uuid": "231a6748-7677-4eb1-8a37-15a0ab207d67"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "NJPC",
                "order": 10,
                "uuid": "6404fcaf-31de-4322-9620-c1b958f9c548"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Rahat",
                "order": 12,
                "uuid": "cbf0805f-aac1-40b9-b78c-1c568b86ef24"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Education and Health",
                "order": 13,
                "uuid": "00e97494-a65b-482b-b919-aab58d52e5b8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Specific Initiative",
                "order": 7,
                "uuid": "54d27687-374e-4988-ad81-e4d26bf02bf3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "CFW",
                "order": 9,
                "uuid": "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Only NJPC",
                "order": 1,
                "uuid": "6b5b0f34-c925-4ff8-bbf8-a72baf4e0f32"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "CFW-S2S",
                "order": 6,
                "uuid": "4db0c307-9053-4bd4-b917-580d00e43f1d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "CFW-NJPC",
                "order": 5,
                "uuid": "820b5991-7002-4be5-89db-f1a4e10d4cd6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S",
                "order": 11,
                "uuid": "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Only Rahat",
                "order": 2,
                "uuid": "118ad0b3-0e16-46f2-902c-15722d6047c9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Only S2S",
                "order": 3,
                "uuid": "abbd4c79-e71e-403d-b263-e49259180f5f"
              }
            ],
            "dataType": "Coded",
            "name": "Type of Initiative",
            "uuid": "d04d6382-91d2-468c-b45f-d3afce94cba2"
          },
          "displayOrder": 9,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of initiative",
          "type": "SingleSelect",
          "uuid": "c01bd9af-445f-4c22-bc44-b333aaa4102a",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Encounter",
            "keyValues": [
              {
                "key": "encounterTypeUUID",
                "value": "a29e1dbe-c894-4384-9db4-0fd2df745df8"
              },
              {
                "key": "encounterScope",
                "value": "Within Subject"
              },
              {
                "key": "encounterIdentifier",
                "value": "{Location}-{Distribution Date}"
              }
            ],
            "name": "Activity's Distribution",
            "uuid": "e1f72d4e-bf41-434d-aeac-05a286373181"
          },
          "displayOrder": 10,
          "keyValues": [],
          "mandatory": false,
          "name": "Related Distribution",
          "type": "SingleSelect",
          "uuid": "43d73c8a-0ac8-4366-ad11-505673385d12",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Date",
            "name": "Activity Start Date",
            "uuid": "8c938361-485e-4b5a-9643-51b741905fd8"
          },
          "displayOrder": 11,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity start date",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("8c938361-485e-4b5a-9643-51b741905fd8").greaterThan(moment().startOf('day').toDate()).matches();
  
  if(condition11 ){
    validationErrors.push("Date cannot be in the future");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "a9bbb00d-3e16-458c-a4f8-632c5d9c7544"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Date",
            "name": "Activity End Date",
            "uuid": "2e85dffe-c09e-4adb-a1b2-41f59aa68d49"
          },
          "displayOrder": 12,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity end date",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  let activityStartDateObservation = individual.findObservation('8c938361-485e-4b5a-9643-51b741905fd8');
  let activityStartDateValue = _.isEmpty(activityStartDateObservation) ? activityStartDateObservation : activityStartDateObservation.getReadableValue();
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2e85dffe-c09e-4adb-a1b2-41f59aa68d49").lessThan(activityStartDateValue, 'ms').matches();
  
  let activityStartDate = individual.getObservationValue('8c938361-485e-4b5a-9643-51b741905fd8');
  
  if(activityStartDate && condition11 ){
    validationErrors.push("Activity End Date cannot be before Activity Start Date");  
}

const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2e85dffe-c09e-4adb-a1b2-41f59aa68d49").greaterThan(moment().startOf('day').toDate()).matches();
  
  if(condition12 ){
    validationErrors.push("Date cannot be in the future");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "863ab194-c2f8-4d71-8eb5-2bae051436d6"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "No of working days",
            "uuid": "b250eea7-f1e7-42de-a57c-4e30b49b1c22"
          },
          "displayOrder": 13,
          "keyValues": [],
          "mandatory": true,
          "name": "No of working days",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("8c938361-485e-4b5a-9643-51b741905fd8").defined.matches();
const condition22 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2e85dffe-c09e-4adb-a1b2-41f59aa68d49").defined.matches();
visibility = condition11 ;
if(condition12 && condition22 ){
    let activityStartDateObservation = individual.findObservation('8c938361-485e-4b5a-9643-51b741905fd8');
    let activityStartDateValue = _.isEmpty(activityStartDateObservation) ? activityStartDateObservation : moment(activityStartDateObservation.getReadableValue());
    let activityEndDateObservation = individual.findObservation('2e85dffe-c09e-4adb-a1b2-41f59aa68d49');
    let activityEndDateValue = _.isEmpty(activityEndDateObservation) ? activityEndDateObservation : moment(activityEndDateObservation.getReadableValue());
    let difference = activityEndDateValue.diff((activityStartDateValue), 'days') + 1;

    const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("b250eea7-f1e7-42de-a57c-4e30b49b1c22").greaterThan(difference).matches();
    if(condition31 ){
        validationErrors.push(`No of working days should not be greater than ${difference}`);
    }
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "ba5b1378-377b-451f-98be-4c26c5faeea7"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "QuestionGroup",
            "name": "Number of participants",
            "uuid": "1157c7c8-9f27-410d-9115-ef36191fba06"
          },
          "displayOrder": 14,
          "keyValues": [],
          "mandatory": false,
          "name": "Number of participants",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("8c938361-485e-4b5a-9643-51b741905fd8").defined.matches();
  const condition22 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2e85dffe-c09e-4adb-a1b2-41f59aa68d49").defined.matches();
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("9a182a63-61df-441c-af58-953253c8d0f2").equals(0).matches();
  
  if(condition31 ){
    validationErrors.push("Number of days of participation cannot be 0");  
  }
  
  visibility = condition11 ;
  
  if(condition12 && condition22 ){
    let activityStartDateObservation = individual.findObservation('8c938361-485e-4b5a-9643-51b741905fd8');
    let activityStartDateValue = _.isEmpty(activityStartDateObservation) ? activityStartDateObservation : moment(activityStartDateObservation.getReadableValue());
    let activityEndDateObservation = individual.findObservation('2e85dffe-c09e-4adb-a1b2-41f59aa68d49');
    let activityEndDateValue = _.isEmpty(activityEndDateObservation) ? activityEndDateObservation : moment(activityEndDateObservation.getReadableValue());
    let difference = activityEndDateValue.diff((activityStartDateValue), 'days') + 1;
    const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("9a182a63-61df-441c-af58-953253c8d0f2").greaterThan(difference).matches();
    if(condition31 ){
        validationErrors.push(`No of days of participation should not be greater than ${difference}`);
    }
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "9d8e0569-23da-4976-9a53-5808cbfd83e9"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "DateTime",
            "name": "Dispatch Date",
            "uuid": "1a1097bc-c06a-493b-a7da-63f9e70f4ae0"
          },
          "displayOrder": 16,
          "keyValues": [],
          "mandatory": true,
          "name": "Dispatch Date",
          "parentFormElementUuid": "19b25a4a-6756-4baa-a7cf-f73561ba1a92",
          "type": "SingleSelect",
          "uuid": "12835be1-f09f-4a7e-88ff-ddfd79b232fa",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of Participants",
            "uuid": "f5cc0324-9b14-42d8-b704-8cb2c5592a48"
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
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "validationError",
                  "details": {
                    "validationError": "Number of participants cannot be 0"
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Numeric",
                          "conceptName": "Number of Participants",
                          "conceptUuid": "f5cc0324-9b14-42d8-b704-8cb2c5592a48",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "lessThanOrEqualTo",
                        "rhs": {
                          "type": "value",
                          "value": 0
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 17,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of participants",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f5cc0324-9b14-42d8-b704-8cb2c5592a48").lessThanOrEqualTo(0).matches();
  
  visibility = condition11 ;
    if(condition12 ){
    validationErrors.push("Number of participants cannot be 0");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "c02fb753-bc31-4873-ae5f-640bec2cc261",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of Participants",
            "uuid": "f5cc0324-9b14-42d8-b704-8cb2c5592a48"
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
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "validationError",
                  "details": {
                    "validationError": "Number of participants cannot be 0"
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Numeric",
                          "conceptName": "Number of Participants",
                          "conceptUuid": "f5cc0324-9b14-42d8-b704-8cb2c5592a48",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "lessThanOrEqualTo",
                        "rhs": {
                          "type": "value",
                          "value": 0
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 18,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of participants",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f5cc0324-9b14-42d8-b704-8cb2c5592a48").lessThanOrEqualTo(0).matches();
  
  visibility = condition11 ;
    if(condition12 ){
    validationErrors.push("Number of participants cannot be 0");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "7e975bca-51f0-4946-948b-ba1c4aee2c87"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of Participants (Male)",
            "uuid": "526b0d5d-51cc-4004-8c12-7a6c71c6c516"
          },
          "displayOrder": 19,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of Participants (Male)",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();

  visibility = condition11;

  const isCFW = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();

  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").defined.matches();

  const condition32 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").defined.matches();

  const condition33 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").defined.matches();

  const isNegative = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").lessThan(0).matches();

  if(isNegative){
    validationErrors.push("Number of Male participants should not be negative");
  }

  if(isCFW && condition31 && condition32 && condition33 ){
    let noOfparticipantsMaleCFW = individual.getObservationValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
    let noOfparticipantsFemaleCFW = individual.getObservationValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
    let NoofparticipantsCFWOther = individual.getObservationValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
    if ((noOfparticipantsFemaleCFW + noOfparticipantsMaleCFW + NoofparticipantsCFWOther) === 0) {
      validationErrors.push("Sum of all participants cannot be 0");
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "1ee2aaa6-d6e9-4804-a741-09bf622d4f7c"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of Participants (Male)",
            "uuid": "526b0d5d-51cc-4004-8c12-7a6c71c6c516"
          },
          "displayOrder": 20,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of Participants (Male)",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11;
  
  const isCFW = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").defined.matches();
  
  const condition32 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").defined.matches();
  
  const condition33 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").defined.matches();
  
  const isNegative = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").lessThan(0).matches();
  
  if(isNegative){
    validationErrors.push("Number of Male participants should not be negative");  
  }
  
  if(isCFW && condition31 && condition32 && condition33 ){
    let noOfparticipantsMaleCFW = individual.getObservationValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
    let noOfparticipantsFemaleCFW = individual.getObservationValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
    let NoofparticipantsCFWOther = individual.getObservationValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
    if ((noOfparticipantsFemaleCFW + noOfparticipantsMaleCFW + NoofparticipantsCFWOther) === 0) {
      validationErrors.push("Sum of all participants cannot be 0");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "ad5b3471-791c-4e46-af4d-861b3fbaf269",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of Participants (Female)",
            "uuid": "2966afcc-2c07-44cf-8711-3fc23f52a6b5"
          },
          "displayOrder": 21,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of Participants (Female)",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("6404fcaf-31de-4322-9620-c1b958f9c548").matches();
  
  const condition22 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").lessThanOrEqualTo(0).matches();
  
  visibility = condition11 ;
  
  if(condition12 && condition22 ){
    validationErrors.push("Number of female participants in NJPC cannot be 0");  
  }
  
  const isCFW = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").defined.matches();
  
  const condition32 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").defined.matches();
  
  const condition33 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").defined.matches();
  
  const isNegative = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").lessThan(0).matches();
  
  if(isNegative){
    validationErrors.push("Number of Female participants should not be negative");  
  }
  
  if(isCFW && condition31 && condition32 && condition33 ){
    let noOfparticipantsMaleCFW = individual.getObservationValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
    let noOfparticipantsFemaleCFW = individual.getObservationValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
    let NoofparticipantsCFWOther = individual.getObservationValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
    if ((noOfparticipantsFemaleCFW + noOfparticipantsMaleCFW + NoofparticipantsCFWOther) === 0) {
      validationErrors.push("Sum of all participants cannot be 0");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "342cfd6f-aa20-431f-a499-56570c6879bc",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of Participants (Female)",
            "uuid": "2966afcc-2c07-44cf-8711-3fc23f52a6b5"
          },
          "displayOrder": 22,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of Participants (Female)",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();

  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("6404fcaf-31de-4322-9620-c1b958f9c548").matches();

  const condition22 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").lessThanOrEqualTo(0).matches();

  visibility = condition11 ;

  if(condition12 && condition22 ){
    validationErrors.push("Number of female participants in NJPC cannot be 0");
  }

  const isCFW = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();

  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").defined.matches();

  const condition32 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").defined.matches();

  const condition33 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").defined.matches();

  const isNegative = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").lessThan(0).matches();

  if(isNegative){
    validationErrors.push("Number of Female participants should not be negative");
  }

  if(isCFW && condition31 && condition32 && condition33 ){
    let noOfparticipantsMaleCFW = individual.getObservationValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
    let noOfparticipantsFemaleCFW = individual.getObservationValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
    let NoofparticipantsCFWOther = individual.getObservationValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
    if ((noOfparticipantsFemaleCFW + noOfparticipantsMaleCFW + NoofparticipantsCFWOther) === 0) {
      validationErrors.push("Sum of all participants cannot be 0");
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "09af1f1c-3693-4513-aac7-44d35284e3fe"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of Participants (Other)",
            "uuid": "a043fea3-1658-4b5e-becd-ee55ab305a03"
          },
          "displayOrder": 23,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of Participants (Other)",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  const isCFW = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").defined.matches();
  
  const condition32 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").defined.matches();
  
  const condition33 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").defined.matches();
  
  const isNegative = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").lessThan(0).matches();
  
  if(isNegative){
    validationErrors.push("Number of Other participants should not be negative");  
  }
  
  if(isCFW && condition31 && condition32 && condition33 ){
    let noOfparticipantsMaleCFW = individual.getObservationValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
    let noOfparticipantsFemaleCFW = individual.getObservationValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
    let NoofparticipantsCFWOther = individual.getObservationValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
    if ((noOfparticipantsFemaleCFW + noOfparticipantsMaleCFW + NoofparticipantsCFWOther) === 0) {
      validationErrors.push("Sum of all participants cannot be 0");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "73901009-ffbb-4e79-bd91-b66a8f24a6d1",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of Participants (Other)",
            "uuid": "a043fea3-1658-4b5e-becd-ee55ab305a03"
          },
          "displayOrder": 24,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of Participants (Other)",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();

  visibility = condition11 ;

  const isCFW = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();

  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").defined.matches();

  const condition32 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").defined.matches();

  const condition33 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").defined.matches();

  const isNegative = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").lessThan(0).matches();

  if(isNegative){
    validationErrors.push("Number of Other participants should not be negative");
  }

  if(isCFW && condition31 && condition32 && condition33 ){
    let noOfparticipantsMaleCFW = individual.getObservationValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
    let noOfparticipantsFemaleCFW = individual.getObservationValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
    let NoofparticipantsCFWOther = individual.getObservationValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
    if ((noOfparticipantsFemaleCFW + noOfparticipantsMaleCFW + NoofparticipantsCFWOther) === 0) {
      validationErrors.push("Sum of all participants cannot be 0");
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "11b7847f-6d7c-4a7d-a617-1eda0cd7c381"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Electric Pole",
                    "order": 0,
                    "uuid": "38dc542e-277d-4790-8982-0d2f3253f0fc"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Others",
                    "order": 2,
                    "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Truck Unloading",
                    "order": 1,
                    "uuid": "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Toilet/Bathroom/private spaces",
                    "order": 3,
                    "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5"
                  }
                ],
                "dataType": "Coded",
                "name": "Miscellaneous",
                "order": 4,
                "uuid": "278d95a9-5a62-4ff2-b515-4a6332e09aca"
              },
              {
                "active": true,
                "answers": [
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Water was too dirty to drink",
                    "order": 2,
                    "uuid": "4cf67429-031f-41ae-a8e1-5e1a3dd696d5"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Water was dirty for use for livestock related needs",
                    "order": 3,
                    "uuid": "a4818198-5117-4d32-8ed0-aa7e1eaa6e80"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Shortage of water in the village",
                    "order": 0,
                    "uuid": "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "It was difficult to get clean and adequate water to fulfil household responsibilities",
                    "order": 10,
                    "uuid": "5381428f-cc8e-4a20-9e3c-994794de27f5"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Difficulty to get water for livestock related needs",
                    "order": 11,
                    "uuid": "50bd6eb9-cce1-4eff-b4c2-e7177256e83f"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Villagers especially women and children were spending too much time in collecting waters",
                    "order": 8,
                    "uuid": "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Water used to collect and the place would get flooded/swamped",
                    "order": 13,
                    "uuid": "14816271-baf3-4c13-865f-dcef92ab0c03"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Water was dirty to use for household related needs",
                    "order": 4,
                    "uuid": "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Villagers including children were getting sick",
                    "order": 9,
                    "uuid": "829f7f00-fcca-46fe-b0b5-ef39f2548141"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Any other not given above",
                    "order": 14,
                    "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Difficulty in reaching to water source",
                    "order": 1,
                    "uuid": "835cab14-f41e-43d4-a77f-db59b715317f"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Shortage of water for irrigation purposes",
                    "order": 12,
                    "uuid": "0605d833-b691-4a85-88a6-8dcba0405dbc"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Water needed to be conserved",
                    "order": 6,
                    "uuid": "c3bed0f8-f8fd-4403-ba66-837547d38623"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was a need for water tables to increase",
                    "order": 7,
                    "uuid": "b748ae00-0844-473d-b427-6031936809fa"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Water was getting wasted",
                    "order": 5,
                    "uuid": "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a"
                  }
                ],
                "dataType": "Coded",
                "name": "Water_Management",
                "order": 8,
                "uuid": "476a03c0-071a-42df-a04e-ec60752d1283"
              },
              {
                "active": true,
                "answers": [
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Water needed to be conserved, hence planted trees",
                    "order": 0,
                    "uuid": "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To ensure better nutrition to pregnant and lactating mother, hence kitchen garden",
                    "order": 5,
                    "uuid": "18121e37-b6e6-4301-a61b-4ccad01d1aad"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "The crops needed organic manure hence composting",
                    "order": 2,
                    "uuid": "75813429-7612-49f9-b159-e746c38be9da"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To construct partitions to demarcate areas",
                    "order": 11,
                    "uuid": "6e387d83-5663-458a-b69a-4eb2252e0594"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                    "order": 4,
                    "uuid": "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Any other not given above",
                    "order": 12,
                    "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To improve water retention capacity",
                    "order": 7,
                    "uuid": "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To increase incomes in the village from sales of vegetables",
                    "order": 6,
                    "uuid": "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was soil erosion due to heavy water flow hence need for plantation",
                    "order": 1,
                    "uuid": "07557c41-b1e1-47fd-8a16-d3dc5363a16e"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To improve agricultural productivity",
                    "order": 8,
                    "uuid": "14c72422-9cfc-49f4-a835-7ab131dd3190"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To decrease the impact of deforestation",
                    "order": 10,
                    "uuid": "9359f1ad-5024-4464-8cea-39579c1468ec"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                    "order": 3,
                    "uuid": "448ebcb5-6974-43b7-8d9b-67002770e1b5"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To improve grazing facilities for livestock",
                    "order": 9,
                    "uuid": "508c3b0b-9ba2-44a5-b8e4-9c82713368a4"
                  }
                ],
                "dataType": "Coded",
                "name": "Agriculture_Plantation",
                "order": 3,
                "uuid": "dc829fd5-0c19-4223-93a0-c29b8919dcc9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Access Infrastructure",
                "order": 0,
                "uuid": "452bc10f-09b4-446e-93f4-52d477885be0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Agriculture Plantation",
                "order": 2,
                "uuid": "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
              },
              {
                "active": true,
                "answers": [
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was limited/or no connectivity to nearly educational facilities/schools",
                    "order": 4,
                    "uuid": "adecc97c-6583-4439-9c8d-06b552b10e1d"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was no meeting place for villagers",
                    "order": 0,
                    "uuid": "20a4f33f-caa5-44ef-97dd-c39d50aade45"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To protect community infrastructure from getting damaged",
                    "order": 11,
                    "uuid": "027da0d9-9fab-4d60-aea7-f232c386a7b7"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was limited/or no connectivity to nearby market facilities",
                    "order": 5,
                    "uuid": "abb094e0-64f5-4058-9d56-0f270cb4add2"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To protect school facilities and ensure safety for children",
                    "order": 10,
                    "uuid": "cf36fe36-d7fe-4f2f-be9b-54f02480ed79"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "To repair/rebuilt damaged community infrastructure",
                    "order": 12,
                    "uuid": "3ce67f78-49b8-4663-bb9d-00293e4e67a3"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "In order to increase life and longevity of trees",
                    "order": 9,
                    "uuid": "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was limited/or no connectivity to water facilities/sources",
                    "order": 6,
                    "uuid": "c1b668ce-5d81-4e25-80f2-10a0fc98d313"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was no connectivity to the market",
                    "order": 1,
                    "uuid": "834993e6-5643-4229-914d-a58df97cef30"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "The walls/boundaries of the school were damaged affecting studies",
                    "order": 8,
                    "uuid": "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was limited/or no connectivity to nearly medical facilities",
                    "order": 3,
                    "uuid": "865be3b0-6b05-475b-b624-43aca7568538"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "Any other not given above",
                    "order": 13,
                    "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "There was limited/ or no connectivity to the nearby villages",
                    "order": 2,
                    "uuid": "6980e13a-5071-4b87-88b9-54f8d6bcce36"
                  },
                  {
                    "active": true,
                    "answers": [],
                    "dataType": "NA",
                    "name": "The children did not have a proper place to study",
                    "order": 7,
                    "uuid": "32d75b8f-e0c0-424b-85ae-a1d2829ee86a"
                  }
                ],
                "dataType": "Coded",
                "name": "Access_Infrastructure",
                "order": 1,
                "uuid": "72a547e0-0058-4840-8f9e-d22479e4a48f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Sanitation",
                "order": 6,
                "uuid": "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Miscellaneous Activity",
                "order": 5,
                "uuid": "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water Management",
                "order": 7,
                "uuid": "1b061e73-b94f-499d-b82c-234670e104c5"
              }
            ],
            "dataType": "Coded",
            "name": "Activity Type",
            "uuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a"
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
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "CFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
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
          "displayOrder": 25,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity type",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "4d94253c-670d-406c-a9ce-14655381d402"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Canal",
                "order": 4,
                "uuid": "a44830b7-3271-4313-baea-b6dc4e9cd5ae"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Backwater",
                "order": 0,
                "uuid": "1a4d980d-30ef-46e4-8b76-44da9002be6b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Toilet/Bathroom/private spaces",
                "order": 30,
                "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Plantation",
                "order": 22,
                "uuid": "74d20d4a-8444-476c-9b7b-b5b4341bcf8e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Soak pit",
                "order": 29,
                "uuid": "be655900-d882-4d99-ab29-faf560b8e832"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Truck Unloading",
                "order": 31,
                "uuid": "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "River",
                "order": 25,
                "uuid": "00ee1a95-2236-4c43-83d7-36c911172069"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Community spaces- Meeting point/ Religious places/ School/ Park & AWC etc",
                "order": 10,
                "uuid": "58653f74-082c-47a7-9a25-548990a4bd4c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Road",
                "order": 26,
                "uuid": "f98bacd7-701e-49ce-a268-b3e83d8f194f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Land Bunding",
                "order": 19,
                "uuid": "9ada0111-bbea-4fde-8097-32ccc0de6c78"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water body premises",
                "order": 33,
                "uuid": "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 21,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Bandstand",
                "order": 1,
                "uuid": "f599df1e-a5e6-4f3e-b985-a196d55a3c73"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Flower garden",
                "order": 39,
                "uuid": "2d229755-ee38-4f7f-a7f8-404125b3c393"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Electric Pole",
                "order": 15,
                "uuid": "38dc542e-277d-4790-8982-0d2f3253f0fc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Protection wall for roads",
                "order": 32,
                "uuid": "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                "order": 6,
                "uuid": "0dfe3de6-6bb0-4514-9c8a-3fde7752c440"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Compost pit",
                "order": 11,
                "uuid": "b462ddf4-977b-4bc5-8157-7f0132c5245d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kitchen Garden",
                "order": 18,
                "uuid": "a9375cc4-e115-4f06-aa6c-33b7b4217685"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Bridge/Pulia",
                "order": 3,
                "uuid": "61d8f60f-8496-4b6d-8d1a-9967e0ff024f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Pond",
                "order": 23,
                "uuid": "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Waterfall/Jharna/Spring Water/Dhara",
                "order": 36,
                "uuid": "a5f019c6-17a0-4536-8222-67935d482774"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Fencing & boundary wall",
                "order": 16,
                "uuid": "f431cbac-b99d-48fb-8694-0299c352eb9a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dugwell/Chua/Jalkhund",
                "order": 13,
                "uuid": "8cb3d890-db22-4c8b-885d-0cd71a0e4aad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Seed Balls",
                "order": 28,
                "uuid": "32699e9f-c289-4581-9781-24b2bdbb0841"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Nursery Making",
                "order": 40,
                "uuid": "bfee4ca1-77f7-4e19-8617-4f0e54d052a3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Land Bundling (voided~207458)",
                "order": 20,
                "uuid": "d7356902-e705-414d-99e4-f08b10fe7f73",
                "voided": true
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dustbin",
                "order": 14,
                "uuid": "ec39b654-3009-46ad-a2d4-2fda9f40d856"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Road & road-side bush cutting",
                "order": 27,
                "uuid": "ba6d69d5-bdb8-48bd-bd70-87e0b9848178"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Drainage",
                "order": 12,
                "uuid": "3f0bd027-abf0-4beb-a7e7-9967d1994852"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water-Tank/Pipeline",
                "order": 35,
                "uuid": "82246b7a-c13f-435d-9e17-d8d288ff3891"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Benches",
                "order": 2,
                "uuid": "db432dbe-7aed-44e8-9385-42973b3cf7bb"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Embankment / ghat",
                "order": 24,
                "uuid": "ec5c4214-ddd6-4146-8282-195f4d711c59"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Check dam",
                "order": 7,
                "uuid": "824d11d4-525d-4610-9afe-f87c030a54eb"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Whitewash/ painting",
                "order": 41,
                "uuid": "654e67f1-9d45-444e-aab5-20a980733ca4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ground levelling",
                "order": 17,
                "uuid": "961b337f-fee4-4bed-a77a-83db71f1b5a2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Well",
                "order": 37,
                "uuid": "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Community Hall/Center/House",
                "order": 9,
                "uuid": "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water storage pit",
                "order": 34,
                "uuid": "8748bdc4-de26-4411-a9b4-269abf7fc6f5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Percolation pit",
                "order": 38,
                "uuid": "1162b0e5-7ccf-4eac-92b4-6e71898fa268"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Community farming",
                "order": 8,
                "uuid": "4ca95b4a-0d74-4bea-aac5-9f45da876178"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "CCT",
                "order": 5,
                "uuid": "f246f297-f123-4b7a-b06f-d8c22a10bac2"
              }
            ],
            "dataType": "Coded",
            "name": "Activity sub type",
            "uuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "1162b0e5-7ccf-4eac-92b4-6e71898fa268",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "2d229755-ee38-4f7f-a7f8-404125b3c393",
                      "32699e9f-c289-4581-9781-24b2bdbb0841",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "654e67f1-9d45-444e-aab5-20a980733ca4",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "f246f297-f123-4b7a-b06f-d8c22a10bac2"
                    ],
                    "answersToSkip": [
                      "Backwater",
                      "Canal",
                      "CCT",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Community Farming",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Compost pit",
                      "Drainage",
                      "Dugwell/Chua/Jalkund",
                      "Dustbin",
                      "Electric Pole",
                      "Embankment / ghat",
                      "Flower garden",
                      "Kitchen Garden",
                      "Land bunding",
                      "Nursey Making",
                      "Percolation pit",
                      "Plantation",
                      "Pond",
                      "River",
                      "Road & road side bush cutting",
                      "Seed ball",
                      "Soak Pit",
                      "Toilet/Bathroom/private spaces",
                      "Truck Unloading",
                      "Water storage pit",
                      "Water Tank/Pipeline",
                      "Water-body premises",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Well",
                      "Whitewash/ painting"
                    ]
                  }
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "or",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "2d229755-ee38-4f7f-a7f8-404125b3c393",
                      "32699e9f-c289-4581-9781-24b2bdbb0841",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "654e67f1-9d45-444e-aab5-20a980733ca4",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                    ],
                    "answersToSkip": [
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Community Farming",
                      "Community Hall/Centre/House",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Compost pit",
                      "Drainage",
                      "Dustbin",
                      "Electric Pole",
                      "Fencing & Boundary Wall",
                      "Flower garden",
                      "Ground Levelling",
                      "Kitchen Garden",
                      "Land bunding",
                      "Nursey Making",
                      "Plantation",
                      "Protection wall for roads",
                      "Road",
                      "Road & road side bush cutting",
                      "Seed ball",
                      "Toilet/Bathroom/private spaces",
                      "Truck Unloading",
                      "Water-body premises",
                      "Whitewash/ painting"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "1162b0e5-7ccf-4eac-92b4-6e71898fa268",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "2d229755-ee38-4f7f-a7f8-404125b3c393",
                      "32699e9f-c289-4581-9781-24b2bdbb0841",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "654e67f1-9d45-444e-aab5-20a980733ca4",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "f246f297-f123-4b7a-b06f-d8c22a10bac2",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                    ],
                    "answersToSkip": [
                      "Backwater",
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Canal",
                      "CCT",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Community Farming",
                      "Community Hall/Centre/House",
                      "Compost pit",
                      "Dugwell/Chua/Jalkund",
                      "Electric Pole",
                      "Embankment / ghat",
                      "Fencing & Boundary Wall",
                      "Flower garden",
                      "Ground Levelling",
                      "Kitchen Garden",
                      "Land bunding",
                      "Nursey Making",
                      "Percolation pit",
                      "Plantation",
                      "Pond",
                      "Protection wall for roads",
                      "River",
                      "Road",
                      "Seed ball",
                      "Soak Pit",
                      "Truck Unloading",
                      "Water storage pit",
                      "Water Tank/Pipeline",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Well",
                      "Whitewash/ painting"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Sanitation"
                          ],
                          "answerConceptUuids": [
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "1162b0e5-7ccf-4eac-92b4-6e71898fa268",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "654e67f1-9d45-444e-aab5-20a980733ca4",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "f246f297-f123-4b7a-b06f-d8c22a10bac2",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                    ],
                    "answersToSkip": [
                      "Backwater",
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Canal",
                      "CCT",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Community Hall/Centre/House",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Drainage",
                      "Dugwell/Chua/Jalkund",
                      "Dustbin",
                      "Electric Pole",
                      "Embankment / ghat",
                      "Fencing & Boundary Wall",
                      "Ground Levelling",
                      "Percolation pit",
                      "Pond",
                      "Protection wall for roads",
                      "River",
                      "Road",
                      "Road & road side bush cutting",
                      "Soak Pit",
                      "Toilet/Bathroom/private spaces",
                      "Truck Unloading",
                      "Water storage pit",
                      "Water Tank/Pipeline",
                      "Water-body premises",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Well",
                      "Whitewash/ painting"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "1162b0e5-7ccf-4eac-92b4-6e71898fa268",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "2d229755-ee38-4f7f-a7f8-404125b3c393",
                      "32699e9f-c289-4581-9781-24b2bdbb0841",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "f246f297-f123-4b7a-b06f-d8c22a10bac2",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                    ],
                    "answersToSkip": [
                      "Backwater",
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Canal",
                      "CCT",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Community Farming",
                      "Community Hall/Centre/House",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Compost pit",
                      "Drainage",
                      "Dugwell/Chua/Jalkund",
                      "Dustbin",
                      "Embankment / ghat",
                      "Fencing & Boundary Wall",
                      "Flower garden",
                      "Ground Levelling",
                      "Kitchen Garden",
                      "Land bunding",
                      "Nursey Making",
                      "Percolation pit",
                      "Plantation",
                      "Pond",
                      "Protection wall for roads",
                      "River",
                      "Road",
                      "Road & road side bush cutting",
                      "Seed ball",
                      "Soak Pit",
                      "Toilet/Bathroom/private spaces",
                      "Water storage pit",
                      "Water Tank/Pipeline",
                      "Water-body premises",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Well"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Agriculture Plantation",
                            "Miscellaneous Activity",
                            "Sanitaiton",
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5",
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f",
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
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
          "displayOrder": 26,
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Electric Pole",
                "Percolation pit",
                "Truck Unloading"
              ]
            }
          ],
          "mandatory": true,
          "name": "Activity sub type",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("1b061e73-b94f-499d-b82c-234670e104c5").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").matches();
    
  const condition15 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
    
  const condition16 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","1b061e73-b94f-499d-b82c-234670e104c5","fe6cd113-e3e3-44b6-abe7-81ba7605787b","d0162f3e-d9a5-40e0-84e4-7130e8e732ee","f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
  
  if(condition11 ) {
    _.forEach(["a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","b462ddf4-977b-4bc5-8157-7f0132c5245d","9ada0111-bbea-4fde-8097-32ccc0de6c78","32699e9f-c289-4581-9781-24b2bdbb0841","8748bdc4-de26-4411-a9b4-269abf7fc6f5","1162b0e5-7ccf-4eac-92b4-6e71898fa268","f246f297-f123-4b7a-b06f-d8c22a10bac2","ec5c4214-ddd6-4146-8282-195f4d711c59","bfee4ca1-77f7-4e19-8617-4f0e54d052a3","654e67f1-9d45-444e-aab5-20a980733ca4","2d229755-ee38-4f7f-a7f8-404125b3c393"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition12 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","b462ddf4-977b-4bc5-8157-7f0132c5245d","9ada0111-bbea-4fde-8097-32ccc0de6c78","32699e9f-c289-4581-9781-24b2bdbb0841","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","bfee4ca1-77f7-4e19-8617-4f0e54d052a3","654e67f1-9d45-444e-aab5-20a980733ca4","2d229755-ee38-4f7f-a7f8-404125b3c393"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","b462ddf4-977b-4bc5-8157-7f0132c5245d","9ada0111-bbea-4fde-8097-32ccc0de6c78","32699e9f-c289-4581-9781-24b2bdbb0841","8748bdc4-de26-4411-a9b4-269abf7fc6f5","1162b0e5-7ccf-4eac-92b4-6e71898fa268","f246f297-f123-4b7a-b06f-d8c22a10bac2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","ec5c4214-ddd6-4146-8282-195f4d711c59","bfee4ca1-77f7-4e19-8617-4f0e54d052a3","654e67f1-9d45-444e-aab5-20a980733ca4","2d229755-ee38-4f7f-a7f8-404125b3c393"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","8748bdc4-de26-4411-a9b4-269abf7fc6f5","1162b0e5-7ccf-4eac-92b4-6e71898fa268","f246f297-f123-4b7a-b06f-d8c22a10bac2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","ec5c4214-ddd6-4146-8282-195f4d711c59","654e67f1-9d45-444e-aab5-20a980733ca4"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition15 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","ec39b654-3009-46ad-a2d4-2fda9f40d856","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","b462ddf4-977b-4bc5-8157-7f0132c5245d","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","9ada0111-bbea-4fde-8097-32ccc0de6c78","3f7366d8-350c-4290-aa9e-e265eea76ae5","8748bdc4-de26-4411-a9b4-269abf7fc6f5","32699e9f-c289-4581-9781-24b2bdbb0841","1162b0e5-7ccf-4eac-92b4-6e71898fa268","f246f297-f123-4b7a-b06f-d8c22a10bac2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","ec5c4214-ddd6-4146-8282-195f4d711c59","bfee4ca1-77f7-4e19-8617-4f0e54d052a3","2d229755-ee38-4f7f-a7f8-404125b3c393"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    visibility = condition16 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "7250e857-e13e-4895-b9d6-b5089ce21334"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Specify Other Sub Type",
            "uuid": "e08bdfcc-fefc-4425-9abb-22578697e5a0"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Others"
                          ],
                          "answerConceptUuids": [
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823"
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
          "displayOrder": 27,
          "keyValues": [],
          "mandatory": true,
          "name": "Specify Other Sub Type",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("016a6d0a-60f9-405f-8dac-08fcf6b39823").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "29501e53-fb8c-4e59-bd55-f40cc9105436"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Making / Repairing",
                "order": 3,
                "uuid": "3c01a59c-3428-4f10-b95a-34c0b0dd2c67"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Repairing",
                "order": 2,
                "uuid": "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Cleaning",
                "order": 0,
                "uuid": "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Making",
                "order": 1,
                "uuid": "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Repairing / Cleaning",
                "order": 4,
                "uuid": "6116fbd2-f5e4-46bb-930d-7df3d7bc2292"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 6,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Making / Repairing / Cleaning",
                "order": 5,
                "uuid": "dca93504-ecb5-40fc-bfca-8d96d54f35f2"
              }
            ],
            "dataType": "Coded",
            "name": "Activity category",
            "uuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178"
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
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Agriculture Plantation",
                            "Sanitaiton",
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5",
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                    ],
                    "answersToSkip": [
                      "Cleaning"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Bandstand",
                            "Benches",
                            "Bridge/Pulia",
                            "Community Farming",
                            "Community Hall/Centre/House",
                            "Compost pit",
                            "Dustbin",
                            "Electric Pole",
                            "Fencing & Boundary Wall",
                            "Flower garden",
                            "Ground Levelling",
                            "Kitchen Garden",
                            "Land bunding",
                            "Nursey Making",
                            "Plantation",
                            "Road",
                            "Seed ball",
                            "Toilet/Bathroom/private spaces",
                            "Wall for Roads"
                          ],
                          "answerConceptUuids": [
                            "2d229755-ee38-4f7f-a7f8-404125b3c393",
                            "32699e9f-c289-4581-9781-24b2bdbb0841",
                            "38dc542e-277d-4790-8982-0d2f3253f0fc",
                            "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                            "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                            "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                            "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                            "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                            "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                            "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                            "f431cbac-b99d-48fb-8694-0299c352eb9a",
                            "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                    ],
                    "answersToSkip": [
                      "Making"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Backwater",
                            "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                            "Ground levelling",
                            "River",
                            "Road & road side bush cutting",
                            "Truck Unloading",
                            "Water-body premises",
                            "Waterfall/Jharna/Spring Water/Dhara"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "58653f74-082c-47a7-9a25-548990a4bd4c",
                            "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                            "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                            "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                            "a5f019c6-17a0-4536-8222-67935d482774",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                    ],
                    "answersToSkip": [
                      "Repairing"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Backwater",
                            "Community farming",
                            "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                            "Compost pit",
                            "Dustbin",
                            "Flower garden",
                            "Kitchen Garden",
                            "Land Bunding",
                            "Nursey Making",
                            "Plantation",
                            "River",
                            "Road & road side bush cutting",
                            "Seed ball",
                            "Truck Unloading",
                            "Water-body premises"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "2d229755-ee38-4f7f-a7f8-404125b3c393",
                            "32699e9f-c289-4581-9781-24b2bdbb0841",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "58653f74-082c-47a7-9a25-548990a4bd4c",
                            "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                            "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                            "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                            "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                            "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                            "ec39b654-3009-46ad-a2d4-2fda9f40d856"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                    ],
                    "answersToSkip": [
                      "Cleaning"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ],
                          "type": "answerConcept"
                        }
                      },
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Others"
                          ],
                          "answerConceptUuids": [
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                    ],
                    "answersToSkip": [
                      "Repairing"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ],
                          "type": "answerConcept"
                        }
                      },
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Others"
                          ],
                          "answerConceptUuids": [
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823"
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
          "displayOrder": 28,
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Making / Repairing",
                "Making / Repairing / Cleaning",
                "Repairing / Cleaning"
              ]
            }
          ],
          "mandatory": true,
          "name": "Activity category",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","1b061e73-b94f-499d-b82c-234670e104c5","d0162f3e-d9a5-40e0-84e4-7130e8e732ee","fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","9ada0111-bbea-4fde-8097-32ccc0de6c78","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","b462ddf4-977b-4bc5-8157-7f0132c5245d","38dc542e-277d-4790-8982-0d2f3253f0fc","32699e9f-c289-4581-9781-24b2bdbb0841","2d229755-ee38-4f7f-a7f8-404125b3c393","bfee4ca1-77f7-4e19-8617-4f0e54d052a3").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("58653f74-082c-47a7-9a25-548990a4bd4c","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","961b337f-fee4-4bed-a77a-83db71f1b5a2","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","1a4d980d-30ef-46e4-8b76-44da9002be6b","a5f019c6-17a0-4536-8222-67935d482774","00ee1a95-2236-4c43-83d7-36c911172069").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("58653f74-082c-47a7-9a25-548990a4bd4c","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","9ada0111-bbea-4fde-8097-32ccc0de6c78","ec39b654-3009-46ad-a2d4-2fda9f40d856","b462ddf4-977b-4bc5-8157-7f0132c5245d","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","32699e9f-c289-4581-9781-24b2bdbb0841","1a4d980d-30ef-46e4-8b76-44da9002be6b","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","2d229755-ee38-4f7f-a7f8-404125b3c393","bfee4ca1-77f7-4e19-8617-4f0e54d052a3","00ee1a95-2236-4c43-83d7-36c911172069").matches();
    
  const condition15 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","d0162f3e-d9a5-40e0-84e4-7130e8e732ee").and.when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("016a6d0a-60f9-405f-8dac-08fcf6b39823").matches();
    
  const condition16 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").and.when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("016a6d0a-60f9-405f-8dac-08fcf6b39823").matches();
  
  visibility = condition11 ;
    if(condition12 ) {
    _.forEach(["cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["95882ddd-13f3-4ea8-b7f2-026e332bdc06"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["b66fa362-b975-4f0e-a7b2-9b0c37205c54"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition15 ) {
    _.forEach(["cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition16 ) {
    _.forEach(["b66fa362-b975-4f0e-a7b2-9b0c37205c54"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "80f78332-ce13-4ead-845f-e34c0dfedc24"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of Participants (Male)",
            "uuid": "526b0d5d-51cc-4004-8c12-7a6c71c6c516"
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
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptNameOtherThan",
                        "rhs": {
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
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
          "displayOrder": 29,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of participants (Male)",
          "parentFormElementUuid": "19b25a4a-6756-4baa-a7cf-f73561ba1a92",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "b004e528-6b73-41fc-97b8-5ae5c863a17a",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "lowAbsolute": 1,
            "lowNormal": 1,
            "name": "Number of participants (voided~220326)",
            "uuid": "31ea4861-8939-42c2-a7a1-bcd2313946c6",
            "voided": true
          },
          "displayOrder": 30,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of participants",
          "parentFormElementUuid": "19b25a4a-6756-4baa-a7cf-f73561ba1a92",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "dbcbc337-3582-49a5-a871-16d0a59dc4d6",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Cultural (Dance/Drama/Singing/Poem/Skit/Story Telling/Rhymes)",
                "order": 2,
                "uuid": "bb9ba1dd-82c9-45ac-86c4-d524ab514f49"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Academic (Counting/Writing/Essay/Alphabet)",
                "order": 0,
                "uuid": "267c7456-ba18-44b3-93b3-a371460f9a30"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Sports (Games/Kho Kho/Yoga/Any other)",
                "order": 5,
                "uuid": "6f1feaba-3286-414d-a40b-d7eb259b7183"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Knowledge Activities (Health/Hygiene/Environment/Conservation)",
                "order": 3,
                "uuid": "ad8143ae-40f1-4b6b-ba97-c95cc091e9d8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Art & Craft (Painting/Drawing/Rangoli/ Craft Activity/Poster)",
                "order": 1,
                "uuid": "e1c97f61-ec50-4594-9254-606c2f15d2b9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "School Improvement Activities (Plantation/Kitchen Garden/Cleaning of School/Garden)",
                "order": 4,
                "uuid": "5a74c9f8-e5eb-4113-9c61-720d7eb4de7e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any other",
                "order": 6,
                "uuid": "f903963d-1c98-4f85-827c-c15a0930b845"
              }
            ],
            "dataType": "Coded",
            "name": "Activity Conducted With Students",
            "uuid": "2d3389d4-07ae-42cd-8c25-e9a0203e2c9a"
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
                    "conjunction": "or",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
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
          "displayOrder": 32,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity Conducted With Students",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "MultiSelect",
          "uuid": "ee8aaf45-0e18-49f3-afa9-01f533982b90"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Specify other S2S related activity",
            "uuid": "885b713c-7c3b-469e-bcab-5b30c742c2c4"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "S2S related activity",
                          "conceptUuid": "2d3389d4-07ae-42cd-8c25-e9a0203e2c9a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Any other"
                          ],
                          "answerConceptUuids": [
                            "f903963d-1c98-4f85-827c-c15a0930b845"
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
          "displayOrder": 33,
          "keyValues": [],
          "mandatory": true,
          "name": "Specify other S2S related activity",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2d3389d4-07ae-42cd-8c25-e9a0203e2c9a").containsAnswerConceptName("f903963d-1c98-4f85-827c-c15a0930b845").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "308d3e92-03d9-42d4-812d-0a1308b86e48",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Anganwadi",
                "order": 1,
                "uuid": "db17de4f-d7f6-4ab3-afd6-6231a874890a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tuition/Learning Centre",
                "order": 2,
                "uuid": "c5c22ebd-f12a-4ee7-8718-297225204ca6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "School",
                "order": 0,
                "uuid": "353a5c77-6b72-4aac-8c49-c2fdd0abad10"
              }
            ],
            "dataType": "Coded",
            "name": "Type of Educational Institute",
            "uuid": "de182013-d8c6-4b2f-a474-7033bda1d518"
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
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
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
          "displayOrder": 34,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of school",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "8b6b4f74-85ac-4e0f-abb2-73030fad21e7",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Image",
            "name": "Photograph",
            "uuid": "ed133199-dbae-4ba7-8c5c-2f23f119edf5"
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
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptNameOtherThan",
                        "rhs": {
                          "answerConceptNames": [
                            "CFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
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
          "displayOrder": 35,
          "keyValues": [],
          "mandatory": false,
          "name": "Photograph",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "MultiSelect",
          "uuid": "5187af15-3305-4ace-a28c-1046c01a1091"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearby market facilities",
                "order": 20,
                "uuid": "abb094e0-64f5-4058-9d56-0f270cb4add2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers especially women and children were spending too much time in collecting waters",
                "order": 41,
                "uuid": "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water needed to be conserved, hence planted trees",
                "order": 45,
                "uuid": "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was dirty for use for livestock related needs",
                "order": 47,
                "uuid": "a4818198-5117-4d32-8ed0-aa7e1eaa6e80"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There is fear of being attacked by animals in heavily bushed roads",
                "order": 15,
                "uuid": "2db06055-67eb-4966-8591-c414aa00c774"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Shortage of water for irrigation purposes",
                "order": 5,
                "uuid": "0605d833-b691-4a85-88a6-8dcba0405dbc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers including children were getting sick",
                "order": 42,
                "uuid": "829f7f00-fcca-46fe-b0b5-ef39f2548141"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water needed to be conserved",
                "order": 44,
                "uuid": "c3bed0f8-f8fd-4403-ba66-837547d38623"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The crops needed organic manure hence composting",
                "order": 8,
                "uuid": "75813429-7612-49f9-b159-e746c38be9da"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The place was very dirty",
                "order": 11,
                "uuid": "f667c9e4-4300-4d4d-a726-009046566fa1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Difficulty in reaching to water source",
                "order": 1,
                "uuid": "835cab14-f41e-43d4-a77f-db59b715317f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was no meeting place for villagers",
                "order": 25,
                "uuid": "20a4f33f-caa5-44ef-97dd-c39d50aade45"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "In order to increase life and longevity of trees",
                "order": 3,
                "uuid": "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                "order": 26,
                "uuid": "448ebcb5-6974-43b7-8d9b-67002770e1b5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To protect school facilities and ensure safety for children",
                "order": 39,
                "uuid": "cf36fe36-d7fe-4f2f-be9b-54f02480ed79"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/ or no connectivity to the nearby villages",
                "order": 19,
                "uuid": "6980e13a-5071-4b87-88b9-54f8d6bcce36"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The drains were clogged",
                "order": 9,
                "uuid": "951ec09c-d99b-4830-9ea5-e5f9b4ddead9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Difficulty to get water for livestock related needs",
                "order": 2,
                "uuid": "50bd6eb9-cce1-4eff-b4c2-e7177256e83f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There were mosquitoes breeding",
                "order": 29,
                "uuid": "486aceb0-4960-485a-a8e4-9bdad2f65c58"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To ensure better nutrition to pregnant and lactating mother, hence kitchen garden",
                "order": 33,
                "uuid": "18121e37-b6e6-4301-a61b-4ccad01d1aad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The women did not have bathrooms to change or bathe in privacy",
                "order": 14,
                "uuid": "b145f169-e306-4d4c-a820-88b51a63b2a6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearly educational facilities/schools",
                "order": 21,
                "uuid": "adecc97c-6583-4439-9c8d-06b552b10e1d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was too dirty to drink",
                "order": 50,
                "uuid": "4cf67429-031f-41ae-a8e1-5e1a3dd696d5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any other not given above",
                "order": 51,
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was fear of getting bitten by snakes and worms while commuting",
                "order": 18,
                "uuid": "38ca7b94-0432-4e3a-bea8-1d33f9b2abad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To repair/rebuilt damaged community infrastructure",
                "order": 40,
                "uuid": "3ce67f78-49b8-4663-bb9d-00293e4e67a3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water used to collect and the place would get flooded/swamped",
                "order": 46,
                "uuid": "14816271-baf3-4c13-865f-dcef92ab0c03"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To decrease the impact of deforestation",
                "order": 32,
                "uuid": "9359f1ad-5024-4464-8cea-39579c1468ec"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Children were unable to play",
                "order": 0,
                "uuid": "4fed6486-9c2e-4cbc-a6bb-92ad7c669955"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve water retention capacity",
                "order": 36,
                "uuid": "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To increase incomes in the village from sales of vegetables",
                "order": 37,
                "uuid": "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was a need for water tables to increase",
                "order": 16,
                "uuid": "b748ae00-0844-473d-b427-6031936809fa"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To construct partitions to demarcate areas",
                "order": 31,
                "uuid": "6e387d83-5663-458a-b69a-4eb2252e0594"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Shortage of water in the village",
                "order": 6,
                "uuid": "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To protect community infrastructure from getting damaged",
                "order": 38,
                "uuid": "027da0d9-9fab-4d60-aea7-f232c386a7b7"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The walls/boundaries of the school were damaged affecting studies",
                "order": 13,
                "uuid": "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was no connectivity to the market",
                "order": 24,
                "uuid": "834993e6-5643-4229-914d-a58df97cef30"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was soil erosion due to heavy water flow hence need for plantation",
                "order": 27,
                "uuid": "07557c41-b1e1-47fd-8a16-d3dc5363a16e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearly medical facilities",
                "order": 23,
                "uuid": "865be3b0-6b05-475b-b624-43aca7568538"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was dirty to use for household related needs",
                "order": 48,
                "uuid": "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The garbage used to be dumped everywhere",
                "order": 10,
                "uuid": "e550818a-037c-4cad-8565-5a9d6ed4b76e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was getting wasted",
                "order": 49,
                "uuid": "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers were getting sick repeatedly",
                "order": 43,
                "uuid": "18803ff7-484e-4187-a2ae-64e4f47890aa"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The children did not have a proper place to study",
                "order": 7,
                "uuid": "32d75b8f-e0c0-424b-85ae-a1d2829ee86a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to water facilities/sources",
                "order": 22,
                "uuid": "c1b668ce-5d81-4e25-80f2-10a0fc98d313"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was fear of diseases like cholera and typhoid happening",
                "order": 17,
                "uuid": "7759083b-3bdd-4fac-b198-04ea94955631"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve grazing facilities for livestock",
                "order": 35,
                "uuid": "508c3b0b-9ba2-44a5-b8e4-9c82713368a4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 52,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                "order": 30,
                "uuid": "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The road could not be used for commuting",
                "order": 12,
                "uuid": "3035de80-1603-4ea9-947b-82d093e2bba2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was stench all over the place",
                "order": 28,
                "uuid": "67977dec-8209-4483-8b77-030797cbd53e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve agricultural productivity",
                "order": 34,
                "uuid": "14c72422-9cfc-49f4-a835-7ab131dd3190"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "It was difficult to get clean and adequate water to fulfil household responsibilities",
                "order": 4,
                "uuid": "5381428f-cc8e-4a20-9e3c-994794de27f5"
              }
            ],
            "dataType": "Coded",
            "keyValues": [],
            "name": "Work Objective",
            "uuid": "a443ce12-68c3-4167-9e74-8d673006bbc5"
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
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "CFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Agriculture Plantation",
                            "Miscellaneous Activity",
                            "Sanitaiton",
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5",
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f",
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
                    ],
                    "answersToSkip": [
                      "Children were unable to play",
                      "In order to increase life and longevity of trees",
                      "The children did not have a proper place to study",
                      "The crops needed organic manure hence composting",
                      "The drains were clogged",
                      "The garbage used to be dumped everywhere",
                      "The place was very dirty",
                      "The road could not be used for commuting",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was no connectivity to the market",
                      "There was no meeting place for villagers",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "There was stench all over the place",
                      "There were mosquitoes breeding",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To construct partitions to demarcate areas",
                      "To decrease the impact of deforestation",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To increase incomes in the village from sales of vegetables",
                      "To protect community infrastructure from getting damaged",
                      "To protect school facilities and ensure safety for children",
                      "To repair/rebuilt damaged community infrastructure",
                      "Villagers were getting sick repeatedly",
                      "Water needed to be conserved, hence planted trees"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
                    ],
                    "answersToSkip": [
                      "Children were unable to play",
                      "Difficulty in reaching to water source",
                      "Difficulty to get water for livestock related needs",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Shortage of water for irrigation purposes",
                      "Shortage of water in the village",
                      "The crops needed organic manure hence composting",
                      "The drains were clogged",
                      "The garbage used to be dumped everywhere",
                      "The place was very dirty",
                      "The road could not be used for commuting",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "There was a need for water tables to increase",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "There was stench all over the place",
                      "There were mosquitoes breeding",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To construct partitions to demarcate areas",
                      "To decrease the impact of deforestation",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To increase incomes in the village from sales of vegetables",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "Villagers were getting sick repeatedly",
                      "Water needed to be conserved",
                      "Water needed to be conserved",
                      "Water needed to be conserved, hence planted trees",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water was too dirty to drink"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
                    ],
                    "answersToSkip": [
                      "Difficulty in reaching to water source",
                      "Difficulty to get water for livestock related needs",
                      "In order to increase life and longevity of trees",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Shortage of water for irrigation purposes",
                      "Shortage of water in the village",
                      "The children did not have a proper place to study",
                      "The crops needed organic manure hence composting",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "There was a need for water tables to increase",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was no connectivity to the market",
                      "There was no meeting place for villagers",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To construct partitions to demarcate areas",
                      "To decrease the impact of deforestation",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To increase incomes in the village from sales of vegetables",
                      "To protect community infrastructure from getting damaged",
                      "To protect school facilities and ensure safety for children",
                      "To repair/rebuilt damaged community infrastructure",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "Water needed to be conserved",
                      "Water needed to be conserved",
                      "Water needed to be conserved, hence planted trees",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water was too dirty to drink"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Sanitaiton"
                          ],
                          "answerConceptUuids": [
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "f667c9e4-4300-4d4d-a726-009046566fa1"
                    ],
                    "answersToSkip": [
                      "Children were unable to play",
                      "Difficulty in reaching to water source",
                      "Difficulty to get water for livestock related needs",
                      "In order to increase life and longevity of trees",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Shortage of water for irrigation purposes",
                      "Shortage of water in the village",
                      "The children did not have a proper place to study",
                      "The drains were clogged",
                      "The garbage used to be dumped everywhere",
                      "The place was very dirty",
                      "The road could not be used for commuting",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "There was a need for water tables to increase",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was no connectivity to the market",
                      "There was no meeting place for villagers",
                      "There was stench all over the place",
                      "There were mosquitoes breeding",
                      "To protect community infrastructure from getting damaged",
                      "To protect school facilities and ensure safety for children",
                      "To repair/rebuilt damaged community infrastructure",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "Villagers were getting sick repeatedly",
                      "Water needed to be conserved",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water was too dirty to drink"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
                    ],
                    "answersToSkip": [
                      "Children were unable to play",
                      "Difficulty in reaching to water source",
                      "Difficulty to get water for livestock related needs",
                      "In order to increase life and longevity of trees",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Others",
                      "Shortage of water for irrigation purposes",
                      "Shortage of water in the village",
                      "The children did not have a proper place to study",
                      "The crops needed organic manure hence composting",
                      "The drains were clogged",
                      "The garbage used to be dumped everywhere",
                      "The place was very dirty",
                      "The road could not be used for commuting",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "There was a need for water tables to increase",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was no connectivity to the market",
                      "There was no meeting place for villagers",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "There was stench all over the place",
                      "There were mosquitoes breeding",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To construct partitions to demarcate areas",
                      "To decrease the impact of deforestation",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To increase incomes in the village from sales of vegetables",
                      "To protect community infrastructure from getting damaged",
                      "To protect school facilities and ensure safety for children",
                      "To repair/rebuilt damaged community infrastructure",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "Villagers were getting sick repeatedly",
                      "Water needed to be conserved",
                      "Water needed to be conserved, hence planted trees",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water was too dirty to drink"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
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
          "displayOrder": 36,
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Others"
              ]
            }
          ],
          "mandatory": true,
          "name": "Work Objective",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","fe6cd113-e3e3-44b6-abe7-81ba7605787b","1b061e73-b94f-499d-b82c-234670e104c5","d0162f3e-d9a5-40e0-84e4-7130e8e732ee","f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("1b061e73-b94f-499d-b82c-234670e104c5").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
    
  const condition15 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").matches();
    
  const condition16 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
  
  visibility = condition11 && condition21 ;
    if(condition12 ) {
    _.forEach(["f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","f674eee6-c577-4807-a5c2-b7bfa6d1c516","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","c1b668ce-5d81-4e25-80f2-10a0fc98d313","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","834993e6-5643-4229-914d-a58df97cef30","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","c3bed0f8-f8fd-4403-ba66-837547d38623","cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","f674eee6-c577-4807-a5c2-b7bfa6d1c516","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","c3bed0f8-f8fd-4403-ba66-837547d38623","448ebcb5-6974-43b7-8d9b-67002770e1b5","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","14c72422-9cfc-49f4-a835-7ab131dd3190","f674eee6-c577-4807-a5c2-b7bfa6d1c516","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition15 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition16 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","829f7f00-fcca-46fe-b0b5-ef39f2548141","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","07557c41-b1e1-47fd-8a16-d3dc5363a16e","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","f674eee6-c577-4807-a5c2-b7bfa6d1c516","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","016a6d0a-60f9-405f-8dac-08fcf6b39823","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "MultiSelect",
          "uuid": "5b01d801-a0b3-4608-9e8a-a7d1c436f306"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was getting wasted",
                "order": 49,
                "uuid": "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To repair/rebuilt damaged community infrastructure",
                "order": 40,
                "uuid": "3ce67f78-49b8-4663-bb9d-00293e4e67a3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Difficulty to get water for livestock related needs",
                "order": 2,
                "uuid": "50bd6eb9-cce1-4eff-b4c2-e7177256e83f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There is fear of being attacked by animals in heavily bushed roads",
                "order": 15,
                "uuid": "2db06055-67eb-4966-8591-c414aa00c774"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearly medical facilities",
                "order": 23,
                "uuid": "865be3b0-6b05-475b-b624-43aca7568538"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The road could not be used for commuting",
                "order": 12,
                "uuid": "3035de80-1603-4ea9-947b-82d093e2bba2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was stench all over the place",
                "order": 28,
                "uuid": "67977dec-8209-4483-8b77-030797cbd53e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/ or no connectivity to the nearby villages",
                "order": 19,
                "uuid": "6980e13a-5071-4b87-88b9-54f8d6bcce36"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There were mosquitoes breeding",
                "order": 29,
                "uuid": "486aceb0-4960-485a-a8e4-9bdad2f65c58"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Shortage of water for irrigation purposes",
                "order": 5,
                "uuid": "0605d833-b691-4a85-88a6-8dcba0405dbc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve grazing facilities for livestock",
                "order": 35,
                "uuid": "508c3b0b-9ba2-44a5-b8e4-9c82713368a4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve water retention capacity",
                "order": 36,
                "uuid": "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was a need for water tables to increase",
                "order": 16,
                "uuid": "b748ae00-0844-473d-b427-6031936809fa"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To increase incomes in the village from sales of vegetables",
                "order": 37,
                "uuid": "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was fear of getting bitten by snakes and worms while commuting",
                "order": 18,
                "uuid": "38ca7b94-0432-4e3a-bea8-1d33f9b2abad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers especially women and children were spending too much time in collecting waters",
                "order": 41,
                "uuid": "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Shortage of water in the village",
                "order": 6,
                "uuid": "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was fear of diseases like cholera and typhoid happening",
                "order": 17,
                "uuid": "7759083b-3bdd-4fac-b198-04ea94955631"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve agricultural productivity",
                "order": 34,
                "uuid": "14c72422-9cfc-49f4-a835-7ab131dd3190"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearly educational facilities/schools",
                "order": 21,
                "uuid": "adecc97c-6583-4439-9c8d-06b552b10e1d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To protect school facilities and ensure safety for children",
                "order": 39,
                "uuid": "cf36fe36-d7fe-4f2f-be9b-54f02480ed79"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To decrease the impact of deforestation",
                "order": 32,
                "uuid": "9359f1ad-5024-4464-8cea-39579c1468ec"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Children were unable to play",
                "order": 0,
                "uuid": "4fed6486-9c2e-4cbc-a6bb-92ad7c669955"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was too dirty to drink",
                "order": 50,
                "uuid": "4cf67429-031f-41ae-a8e1-5e1a3dd696d5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was dirty to use for household related needs",
                "order": 48,
                "uuid": "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The garbage used to be dumped everywhere",
                "order": 10,
                "uuid": "e550818a-037c-4cad-8565-5a9d6ed4b76e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The place was very dirty",
                "order": 11,
                "uuid": "f667c9e4-4300-4d4d-a726-009046566fa1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water needed to be conserved",
                "order": 44,
                "uuid": "c3bed0f8-f8fd-4403-ba66-837547d38623"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                "order": 26,
                "uuid": "448ebcb5-6974-43b7-8d9b-67002770e1b5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 52,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was no meeting place for villagers",
                "order": 25,
                "uuid": "20a4f33f-caa5-44ef-97dd-c39d50aade45"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "It was difficult to get clean and adequate water to fulfil household responsibilities",
                "order": 4,
                "uuid": "5381428f-cc8e-4a20-9e3c-994794de27f5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was soil erosion due to heavy water flow hence need for plantation",
                "order": 27,
                "uuid": "07557c41-b1e1-47fd-8a16-d3dc5363a16e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The crops needed organic manure hence composting",
                "order": 8,
                "uuid": "75813429-7612-49f9-b159-e746c38be9da"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To ensure better nutrition to pregnant and lactating mother, hence kitchen garden",
                "order": 33,
                "uuid": "18121e37-b6e6-4301-a61b-4ccad01d1aad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The children did not have a proper place to study",
                "order": 7,
                "uuid": "32d75b8f-e0c0-424b-85ae-a1d2829ee86a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers were getting sick repeatedly",
                "order": 43,
                "uuid": "18803ff7-484e-4187-a2ae-64e4f47890aa"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearby market facilities",
                "order": 20,
                "uuid": "abb094e0-64f5-4058-9d56-0f270cb4add2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was no connectivity to the market",
                "order": 24,
                "uuid": "834993e6-5643-4229-914d-a58df97cef30"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The drains were clogged",
                "order": 9,
                "uuid": "951ec09c-d99b-4830-9ea5-e5f9b4ddead9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To construct partitions to demarcate areas",
                "order": 31,
                "uuid": "6e387d83-5663-458a-b69a-4eb2252e0594"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The walls/boundaries of the school were damaged affecting studies",
                "order": 13,
                "uuid": "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Difficulty in reaching to water source",
                "order": 1,
                "uuid": "835cab14-f41e-43d4-a77f-db59b715317f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The women did not have bathrooms to change or bathe in privacy",
                "order": 14,
                "uuid": "b145f169-e306-4d4c-a820-88b51a63b2a6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water used to collect and the place would get flooded/swamped",
                "order": 46,
                "uuid": "14816271-baf3-4c13-865f-dcef92ab0c03"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To protect community infrastructure from getting damaged",
                "order": 38,
                "uuid": "027da0d9-9fab-4d60-aea7-f232c386a7b7"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water needed to be conserved, hence planted trees",
                "order": 45,
                "uuid": "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                "order": 30,
                "uuid": "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers including children were getting sick",
                "order": 42,
                "uuid": "829f7f00-fcca-46fe-b0b5-ef39f2548141"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any other not given above",
                "order": 51,
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was dirty for use for livestock related needs",
                "order": 47,
                "uuid": "a4818198-5117-4d32-8ed0-aa7e1eaa6e80"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "In order to increase life and longevity of trees",
                "order": 3,
                "uuid": "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to water facilities/sources",
                "order": 22,
                "uuid": "c1b668ce-5d81-4e25-80f2-10a0fc98d313"
              }
            ],
            "dataType": "Coded",
            "name": "Objective of Work",
            "uuid": "0ea2a76f-933e-448e-896a-46a4238a3488"
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
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "CFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Agriculture Plantation",
                            "Miscellaneous Activity",
                            "Sanitaiton",
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5",
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f",
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
                    ],
                    "answersToSkip": [
                      "Children were unable to play",
                      "In order to increase life and longevity of trees",
                      "The children did not have a proper place to study",
                      "The crops needed organic manure hence composting",
                      "The drains were clogged",
                      "The garbage used to be dumped everywhere",
                      "The place was very dirty",
                      "The road could not be used for commuting",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was no connectivity to the market",
                      "There was no meeting place for villagers",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "There was stench all over the place",
                      "There were mosquitoes breeding",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To construct partitions to demarcate areas",
                      "To decrease the impact of deforestation",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To increase incomes in the village from sales of vegetables",
                      "To protect community infrastructure from getting damaged",
                      "To protect school facilities and ensure safety for children",
                      "To repair/rebuilt damaged community infrastructure",
                      "Villagers were getting sick repeatedly",
                      "Water needed to be conserved, hence planted trees"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
                    ],
                    "answersToSkip": [
                      "Children were unable to play",
                      "Difficulty in reaching to water source",
                      "Difficulty to get water for livestock related needs",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Shortage of water for irrigation purposes",
                      "Shortage of water in the village",
                      "The crops needed organic manure hence composting",
                      "The drains were clogged",
                      "The garbage used to be dumped everywhere",
                      "The place was very dirty",
                      "The road could not be used for commuting",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "There was a need for water tables to increase",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "There was stench all over the place",
                      "There were mosquitoes breeding",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To construct partitions to demarcate areas",
                      "To decrease the impact of deforestation",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To increase incomes in the village from sales of vegetables",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "Villagers were getting sick repeatedly",
                      "Water needed to be conserved",
                      "Water needed to be conserved",
                      "Water needed to be conserved, hence planted trees",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water was too dirty to drink"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
                    ],
                    "answersToSkip": [
                      "Difficulty in reaching to water source",
                      "Difficulty to get water for livestock related needs",
                      "In order to increase life and longevity of trees",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Shortage of water for irrigation purposes",
                      "Shortage of water in the village",
                      "The children did not have a proper place to study",
                      "The crops needed organic manure hence composting",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "There was a need for water tables to increase",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was no connectivity to the market",
                      "There was no meeting place for villagers",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To construct partitions to demarcate areas",
                      "To decrease the impact of deforestation",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To increase incomes in the village from sales of vegetables",
                      "To protect community infrastructure from getting damaged",
                      "To protect school facilities and ensure safety for children",
                      "To repair/rebuilt damaged community infrastructure",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "Water needed to be conserved",
                      "Water needed to be conserved",
                      "Water needed to be conserved, hence planted trees",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water was too dirty to drink"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Sanitaiton"
                          ],
                          "answerConceptUuids": [
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "f667c9e4-4300-4d4d-a726-009046566fa1"
                    ],
                    "answersToSkip": [
                      "Children were unable to play",
                      "Difficulty in reaching to water source",
                      "Difficulty to get water for livestock related needs",
                      "In order to increase life and longevity of trees",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Shortage of water for irrigation purposes",
                      "Shortage of water in the village",
                      "The children did not have a proper place to study",
                      "The drains were clogged",
                      "The garbage used to be dumped everywhere",
                      "The place was very dirty",
                      "The road could not be used for commuting",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "There was a need for water tables to increase",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was no connectivity to the market",
                      "There was no meeting place for villagers",
                      "There was stench all over the place",
                      "There were mosquitoes breeding",
                      "To protect community infrastructure from getting damaged",
                      "To protect school facilities and ensure safety for children",
                      "To repair/rebuilt damaged community infrastructure",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "Villagers were getting sick repeatedly",
                      "Water needed to be conserved",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water was too dirty to drink"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
                    ],
                    "answersToSkip": [
                      "Children were unable to play",
                      "Difficulty in reaching to water source",
                      "Difficulty to get water for livestock related needs",
                      "In order to increase life and longevity of trees",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Others",
                      "Shortage of water for irrigation purposes",
                      "Shortage of water in the village",
                      "The children did not have a proper place to study",
                      "The crops needed organic manure hence composting",
                      "The drains were clogged",
                      "The garbage used to be dumped everywhere",
                      "The place was very dirty",
                      "The road could not be used for commuting",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "There was a need for water tables to increase",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was no connectivity to the market",
                      "There was no meeting place for villagers",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "There was stench all over the place",
                      "There were mosquitoes breeding",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To construct partitions to demarcate areas",
                      "To decrease the impact of deforestation",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To increase incomes in the village from sales of vegetables",
                      "To protect community infrastructure from getting damaged",
                      "To protect school facilities and ensure safety for children",
                      "To repair/rebuilt damaged community infrastructure",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "Villagers were getting sick repeatedly",
                      "Water needed to be conserved",
                      "Water needed to be conserved, hence planted trees",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water was too dirty to drink"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
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
          "displayOrder": 37,
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Others"
              ]
            }
          ],
          "mandatory": true,
          "name": "Objective of work",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","fe6cd113-e3e3-44b6-abe7-81ba7605787b","1b061e73-b94f-499d-b82c-234670e104c5","d0162f3e-d9a5-40e0-84e4-7130e8e732ee","f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("1b061e73-b94f-499d-b82c-234670e104c5").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
    
  const condition15 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").matches();
    
  const condition16 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
  
  visibility = condition11 && condition21 ;
    if(condition12 ) {
    _.forEach(["f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","f674eee6-c577-4807-a5c2-b7bfa6d1c516","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","c1b668ce-5d81-4e25-80f2-10a0fc98d313","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","834993e6-5643-4229-914d-a58df97cef30","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","c3bed0f8-f8fd-4403-ba66-837547d38623","cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","f674eee6-c577-4807-a5c2-b7bfa6d1c516","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","c3bed0f8-f8fd-4403-ba66-837547d38623","448ebcb5-6974-43b7-8d9b-67002770e1b5","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","14c72422-9cfc-49f4-a835-7ab131dd3190","f674eee6-c577-4807-a5c2-b7bfa6d1c516","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition15 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition16 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","829f7f00-fcca-46fe-b0b5-ef39f2548141","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","07557c41-b1e1-47fd-8a16-d3dc5363a16e","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","f674eee6-c577-4807-a5c2-b7bfa6d1c516","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","016a6d0a-60f9-405f-8dac-08fcf6b39823","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "MultiSelect",
          "uuid": "847c5d80-64f2-40ba-9f87-ca3cb111ae90",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Any other not given above, Specify other",
            "uuid": "33919c90-92b1-44f6-a5c8-3d04a3d159a1"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Objective of Work",
                          "conceptUuid": "0ea2a76f-933e-448e-896a-46a4238a3488",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Any other not given above"
                          ],
                          "answerConceptUuids": [
                            "f9a72c48-3238-441d-a1de-2d8cd938dc22"
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
          "displayOrder": 38,
          "keyValues": [],
          "mandatory": true,
          "name": "Specify other",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("0ea2a76f-933e-448e-896a-46a4238a3488").containsAnswerConceptName("f9a72c48-3238-441d-a1de-2d8cd938dc22").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "222ba03d-fefc-43eb-8866-b50d2248d772"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Anganwadi",
                "order": 1,
                "uuid": "db17de4f-d7f6-4ab3-afd6-6231a874890a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tuition/Learning Centre",
                "order": 2,
                "uuid": "c5c22ebd-f12a-4ee7-8718-297225204ca6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "School",
                "order": 0,
                "uuid": "353a5c77-6b72-4aac-8c49-c2fdd0abad10"
              }
            ],
            "dataType": "Coded",
            "name": "Type of Educational Institute",
            "uuid": "de182013-d8c6-4b2f-a474-7033bda1d518"
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
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
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
          "displayOrder": 39,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of school",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "343d89eb-3668-4d19-9bd7-fcf8a8a0cfe6"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "School / Anganwadi / Learning Center Name",
            "uuid": "2e39d19d-fc03-400e-9f5e-1f815483ea47"
          },
          "displayOrder": 40,
          "keyValues": [],
          "mandatory": true,
          "name": "School / Aanganwadi / Learning Center Name",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const typeOfInitiativeIsCfwOrS2S = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnyAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6","85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  visibility = typeOfInitiativeIsCfwOrS2S ;
  
    const typeOfInitiativeIsCfw = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
    const currentValue = individual.getObservationValue('2e39d19d-fc03-400e-9f5e-1f815483ea47');
    
    if (typeOfInitiativeIsCfw && !currentValue ) {
    
    value = 'None';
    
    };
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "7411b2a8-dcd4-4718-aca6-239b528e0d2d"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Yes",
                "order": 0,
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "No",
                "order": 1,
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a"
              }
            ],
            "dataType": "Coded",
            "name": "Was Undertaking Form Filled?",
            "uuid": "1a90cfd0-5b70-4425-ae76-84d6ea589088"
          },
          "displayOrder": 41,
          "keyValues": [],
          "mandatory": true,
          "name": "Was Disclaimer Form Filled?",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("1a90cfd0-5b70-4425-ae76-84d6ea589088").notDefined.matches();
  
  if(condition11 ){
    value = "No";  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "b65c43ba-37ed-4d86-baa4-1a938bd5a762"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Anganwadi",
                "order": 1,
                "uuid": "db17de4f-d7f6-4ab3-afd6-6231a874890a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tuition/Learning Centre",
                "order": 2,
                "uuid": "c5c22ebd-f12a-4ee7-8718-297225204ca6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "School",
                "order": 0,
                "uuid": "353a5c77-6b72-4aac-8c49-c2fdd0abad10"
              }
            ],
            "dataType": "Coded",
            "name": "Type of Educational Institute",
            "uuid": "de182013-d8c6-4b2f-a474-7033bda1d518"
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
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
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
          "displayOrder": 42,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of school",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "5e7dbc4f-459b-4b9b-8f0f-6042f4db0b51",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Protection wall for roads",
                "order": 8,
                "uuid": "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Benches",
                "order": 1,
                "uuid": "db432dbe-7aed-44e8-9385-42973b3cf7bb"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Community Hall/Center/House",
                "order": 3,
                "uuid": "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Bridge/Pulia",
                "order": 2,
                "uuid": "61d8f60f-8496-4b6d-8d1a-9967e0ff024f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Fencing & boundary wall",
                "order": 4,
                "uuid": "f431cbac-b99d-48fb-8694-0299c352eb9a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 7,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Bandstand",
                "order": 0,
                "uuid": "f599df1e-a5e6-4f3e-b985-a196d55a3c73"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ground levelling",
                "order": 6,
                "uuid": "961b337f-fee4-4bed-a77a-83db71f1b5a2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Road",
                "order": 5,
                "uuid": "f98bacd7-701e-49ce-a268-b3e83d8f194f"
              }
            ],
            "dataType": "Coded",
            "name": "Activity Sub-type (voided~207436)",
            "uuid": "6bc60f7a-fe77-435a-b9ba-93de5e131123",
            "voided": true
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Access Infrastructure"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0"
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
          "displayOrder": 43,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity Sub-type for Access infrastructure",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "711901e7-d6d8-4bc7-84dd-b53861948777",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "River",
                "order": 7,
                "uuid": "00ee1a95-2236-4c43-83d7-36c911172069"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Check dam",
                "order": 4,
                "uuid": "824d11d4-525d-4610-9afe-f87c030a54eb"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Canal",
                "order": 0,
                "uuid": "a44830b7-3271-4313-baea-b6dc4e9cd5ae"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water-Tank/Pipeline",
                "order": 9,
                "uuid": "82246b7a-c13f-435d-9e17-d8d288ff3891"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "BackwaterDugwell/Chua/Jalkund (voided~207440)",
                "order": 5,
                "uuid": "64fe012a-3230-4115-8092-f16bf6286200",
                "voided": true
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 11,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Soak pit",
                "order": 12,
                "uuid": "be655900-d882-4d99-ab29-faf560b8e832"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Well",
                "order": 10,
                "uuid": "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Waterfall/Jharna/Spring Water/Dhara",
                "order": 8,
                "uuid": "a5f019c6-17a0-4536-8222-67935d482774"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Backwater",
                "order": 2,
                "uuid": "1a4d980d-30ef-46e4-8b76-44da9002be6b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                "order": 1,
                "uuid": "0dfe3de6-6bb0-4514-9c8a-3fde7752c440"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dugwell/Chua/Jalkhund",
                "order": 3,
                "uuid": "8cb3d890-db22-4c8b-885d-0cd71a0e4aad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Pond",
                "order": 6,
                "uuid": "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e"
              }
            ],
            "dataType": "Coded",
            "name": "Activity Sub-type for Water management",
            "uuid": "b116f78d-1c06-4014-a511-72378136204f"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5"
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
          "displayOrder": 44,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity Sub-type for Water management",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("1b061e73-b94f-499d-b82c-234670e104c5").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "79d5c9c2-245d-46ad-86c8-e29ad50242fb",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Drainage",
                "order": 3,
                "uuid": "3f0bd027-abf0-4beb-a7e7-9967d1994852"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Road & road-side bush cutting",
                "order": 4,
                "uuid": "ba6d69d5-bdb8-48bd-bd70-87e0b9848178"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dustbin",
                "order": 0,
                "uuid": "ec39b654-3009-46ad-a2d4-2fda9f40d856"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water body premises",
                "order": 6,
                "uuid": "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Toilet/Bathroom/private spaces",
                "order": 1,
                "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Community spaces- Meeting point/ Religious places/ School/ Park & AWC etc",
                "order": 2,
                "uuid": "58653f74-082c-47a7-9a25-548990a4bd4c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 5,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              }
            ],
            "dataType": "Coded",
            "name": "Activity Sub-type for Sanitation (voided~207454)",
            "uuid": "3ab64b6c-8ad3-4cbe-9dc8-fa3a8246d6e6",
            "voided": true
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Sanitaiton"
                          ],
                          "answerConceptUuids": [
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
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
          "displayOrder": 45,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity Sub-type for Sanitation",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "1ef43b24-4a13-4af4-a6d3-f20ca9bf62d6",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Plantation",
                "order": 4,
                "uuid": "74d20d4a-8444-476c-9b7b-b5b4341bcf8e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Compost Pit",
                "order": 0,
                "uuid": "798e61fa-8d8d-43b4-8738-251be7bdc5b4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Community farming",
                "order": 1,
                "uuid": "4ca95b4a-0d74-4bea-aac5-9f45da876178"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Land Bundling (voided~207458)",
                "order": 3,
                "uuid": "d7356902-e705-414d-99e4-f08b10fe7f73",
                "voided": true
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kitchen Garden",
                "order": 2,
                "uuid": "a9375cc4-e115-4f06-aa6c-33b7b4217685"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 5,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              }
            ],
            "dataType": "Coded",
            "name": "Activity Sub-type for Agricultural plantation",
            "uuid": "bdb69c4d-d46a-4387-9b08-aba1cdaf66cc"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
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
          "displayOrder": 46,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity Sub-type for Agricultural plantation",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "5730442b-598c-4401-8b0a-3d1ee07984d9",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Electric Pole",
                "order": 0,
                "uuid": "38dc542e-277d-4790-8982-0d2f3253f0fc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Others",
                "order": 2,
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Truck Unloading",
                "order": 1,
                "uuid": "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Toilet/Bathroom/private spaces",
                "order": 3,
                "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5"
              }
            ],
            "dataType": "Coded",
            "name": "Miscellaneous",
            "uuid": "278d95a9-5a62-4ff2-b515-4a6332e09aca"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Miscelleneous"
                          ],
                          "answerConceptUuids": [
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
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
          "displayOrder": 47,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity Sub-type for Miscellaneous",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "e860083a-91e3-41d6-9cda-bae28b7c39fd",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Specify Other Objective",
            "uuid": "3e1070a7-6c19-4594-aeb6-542025a66f8a"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Objective of Work",
                          "conceptUuid": "0ea2a76f-933e-448e-896a-46a4238a3488",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Others"
                          ],
                          "answerConceptUuids": [
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823"
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
          "displayOrder": 48,
          "keyValues": [],
          "mandatory": false,
          "name": "Specify Other Objective",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("0ea2a76f-933e-448e-896a-46a4238a3488").containsAnswerConceptName("016a6d0a-60f9-405f-8dac-08fcf6b39823").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "4c0ec868-4c35-43ff-9e09-156571e920e4",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "QuestionGroup",
            "name": "Objective of work (voided~207476)",
            "uuid": "6e6fe7fc-0cf0-4b68-93a6-7b95e12fd08c",
            "voided": true
          },
          "displayOrder": 49,
          "keyValues": [],
          "mandatory": true,
          "name": "Objective of work",
          "type": "SingleSelect",
          "uuid": "cc75f9a1-b85c-4a7f-8a5e-920bcc253549",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Cleaning",
                "order": 0,
                "uuid": "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Making",
                "order": 1,
                "uuid": "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Repairing",
                "order": 2,
                "uuid": "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
              }
            ],
            "dataType": "Coded",
            "name": "Activity Category (voided~207467)",
            "uuid": "5c26afbe-c19e-4419-b89e-d03846c0e2e2",
            "voided": true
          },
          "displayOrder": 50,
          "keyValues": [],
          "mandatory": true,
          "name": "Activity Category",
          "parentFormElementUuid": "cc75f9a1-b85c-4a7f-8a5e-920bcc253549",
          "type": "SingleSelect",
          "uuid": "54aecb41-f6fa-4466-927e-e14867263028",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was stench all over the place",
                "order": 5,
                "uuid": "67977dec-8209-4483-8b77-030797cbd53e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The place was very dirty",
                "order": 0,
                "uuid": "f667c9e4-4300-4d4d-a726-009046566fa1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers were getting sick repeatedly",
                "order": 7,
                "uuid": "18803ff7-484e-4187-a2ae-64e4f47890aa"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The road could not be used for commuting",
                "order": 3,
                "uuid": "3035de80-1603-4ea9-947b-82d093e2bba2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was fear of diseases like cholera and typhoid happening",
                "order": 9,
                "uuid": "7759083b-3bdd-4fac-b198-04ea94955631"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The drains were clogged",
                "order": 2,
                "uuid": "951ec09c-d99b-4830-9ea5-e5f9b4ddead9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Children were unable to play",
                "order": 6,
                "uuid": "4fed6486-9c2e-4cbc-a6bb-92ad7c669955"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was fear of getting bitten by snakes and worms while commuting",
                "order": 8,
                "uuid": "38ca7b94-0432-4e3a-bea8-1d33f9b2abad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The garbage used to be dumped everywhere",
                "order": 4,
                "uuid": "e550818a-037c-4cad-8565-5a9d6ed4b76e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The women did not have bathrooms to change or bathe in privacy",
                "order": 11,
                "uuid": "b145f169-e306-4d4c-a820-88b51a63b2a6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There were mosquitoes breeding",
                "order": 1,
                "uuid": "486aceb0-4960-485a-a8e4-9bdad2f65c58"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There is fear of being attacked by animals in heavily bushed roads",
                "order": 10,
                "uuid": "2db06055-67eb-4966-8591-c414aa00c774"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any other not given above",
                "order": 12,
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
              }
            ],
            "dataType": "Coded",
            "name": "Sanitation activity",
            "uuid": "21a0ec64-d7d7-4dd9-a4b9-3ce68cc6be3c"
          },
          "displayOrder": 51,
          "keyValues": [],
          "mandatory": true,
          "name": "Sanitation",
          "parentFormElementUuid": "cc75f9a1-b85c-4a7f-8a5e-920bcc253549",
          "type": "SingleSelect",
          "uuid": "c30686a4-0cce-49cd-a64a-79c874170607",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water needed to be conserved, hence planted trees",
                "order": 0,
                "uuid": "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To ensure better nutrition to pregnant and lactating mother, hence kitchen garden",
                "order": 5,
                "uuid": "18121e37-b6e6-4301-a61b-4ccad01d1aad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The crops needed organic manure hence composting",
                "order": 2,
                "uuid": "75813429-7612-49f9-b159-e746c38be9da"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To construct partitions to demarcate areas",
                "order": 11,
                "uuid": "6e387d83-5663-458a-b69a-4eb2252e0594"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                "order": 4,
                "uuid": "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any other not given above",
                "order": 12,
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve water retention capacity",
                "order": 7,
                "uuid": "f674eee6-c577-4807-a5c2-b7bfa6d1c516"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To increase incomes in the village from sales of vegetables",
                "order": 6,
                "uuid": "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was soil erosion due to heavy water flow hence need for plantation",
                "order": 1,
                "uuid": "07557c41-b1e1-47fd-8a16-d3dc5363a16e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve agricultural productivity",
                "order": 8,
                "uuid": "14c72422-9cfc-49f4-a835-7ab131dd3190"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To decrease the impact of deforestation",
                "order": 10,
                "uuid": "9359f1ad-5024-4464-8cea-39579c1468ec"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                "order": 3,
                "uuid": "448ebcb5-6974-43b7-8d9b-67002770e1b5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To improve grazing facilities for livestock",
                "order": 9,
                "uuid": "508c3b0b-9ba2-44a5-b8e4-9c82713368a4"
              }
            ],
            "dataType": "Coded",
            "name": "Agriculture_Plantation",
            "uuid": "dc829fd5-0c19-4223-93a0-c29b8919dcc9"
          },
          "displayOrder": 52,
          "keyValues": [],
          "mandatory": true,
          "name": "Agriculture_Plantation",
          "parentFormElementUuid": "cc75f9a1-b85c-4a7f-8a5e-920bcc253549",
          "type": "SingleSelect",
          "uuid": "db79aecc-0148-4845-815f-07793546f43a",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Difficulty in reaching to water source",
                "order": 1,
                "uuid": "835cab14-f41e-43d4-a77f-db59b715317f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was too dirty to drink",
                "order": 2,
                "uuid": "4cf67429-031f-41ae-a8e1-5e1a3dd696d5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was getting wasted",
                "order": 5,
                "uuid": "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers especially women and children were spending too much time in collecting waters",
                "order": 8,
                "uuid": "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Villagers including children were getting sick",
                "order": 9,
                "uuid": "829f7f00-fcca-46fe-b0b5-ef39f2548141"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was dirty for use for livestock related needs",
                "order": 3,
                "uuid": "a4818198-5117-4d32-8ed0-aa7e1eaa6e80"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water needed to be conserved",
                "order": 6,
                "uuid": "c3bed0f8-f8fd-4403-ba66-837547d38623"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any other not given above",
                "order": 14,
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Shortage of water for irrigation purposes",
                "order": 12,
                "uuid": "0605d833-b691-4a85-88a6-8dcba0405dbc"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water used to collect and the place would get flooded/swamped",
                "order": 13,
                "uuid": "14816271-baf3-4c13-865f-dcef92ab0c03"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Shortage of water in the village",
                "order": 0,
                "uuid": "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "It was difficult to get clean and adequate water to fulfil household responsibilities",
                "order": 10,
                "uuid": "5381428f-cc8e-4a20-9e3c-994794de27f5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Difficulty to get water for livestock related needs",
                "order": 11,
                "uuid": "50bd6eb9-cce1-4eff-b4c2-e7177256e83f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was a need for water tables to increase",
                "order": 7,
                "uuid": "b748ae00-0844-473d-b427-6031936809fa"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Water was dirty to use for household related needs",
                "order": 4,
                "uuid": "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c"
              }
            ],
            "dataType": "Coded",
            "name": "Water management",
            "uuid": "0730dcd3-d272-481f-8a5d-09de5fae1005"
          },
          "displayOrder": 53,
          "keyValues": [],
          "mandatory": true,
          "name": "Water management",
          "parentFormElementUuid": "cc75f9a1-b85c-4a7f-8a5e-920bcc253549",
          "type": "SingleSelect",
          "uuid": "ba21a07f-dadd-4341-9d91-2802b7d3a0ec",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearly educational facilities/schools",
                "order": 4,
                "uuid": "adecc97c-6583-4439-9c8d-06b552b10e1d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was no meeting place for villagers",
                "order": 0,
                "uuid": "20a4f33f-caa5-44ef-97dd-c39d50aade45"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To protect community infrastructure from getting damaged",
                "order": 11,
                "uuid": "027da0d9-9fab-4d60-aea7-f232c386a7b7"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearby market facilities",
                "order": 5,
                "uuid": "abb094e0-64f5-4058-9d56-0f270cb4add2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To protect school facilities and ensure safety for children",
                "order": 10,
                "uuid": "cf36fe36-d7fe-4f2f-be9b-54f02480ed79"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "To repair/rebuilt damaged community infrastructure",
                "order": 12,
                "uuid": "3ce67f78-49b8-4663-bb9d-00293e4e67a3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "In order to increase life and longevity of trees",
                "order": 9,
                "uuid": "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to water facilities/sources",
                "order": 6,
                "uuid": "c1b668ce-5d81-4e25-80f2-10a0fc98d313"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was no connectivity to the market",
                "order": 1,
                "uuid": "834993e6-5643-4229-914d-a58df97cef30"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The walls/boundaries of the school were damaged affecting studies",
                "order": 8,
                "uuid": "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/or no connectivity to nearly medical facilities",
                "order": 3,
                "uuid": "865be3b0-6b05-475b-b624-43aca7568538"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any other not given above",
                "order": 13,
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "There was limited/ or no connectivity to the nearby villages",
                "order": 2,
                "uuid": "6980e13a-5071-4b87-88b9-54f8d6bcce36"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "The children did not have a proper place to study",
                "order": 7,
                "uuid": "32d75b8f-e0c0-424b-85ae-a1d2829ee86a"
              }
            ],
            "dataType": "Coded",
            "name": "Access_Infrastructure",
            "uuid": "72a547e0-0058-4840-8f9e-d22479e4a48f"
          },
          "displayOrder": 54,
          "keyValues": [],
          "mandatory": true,
          "name": "Access_Infrastructure",
          "parentFormElementUuid": "cc75f9a1-b85c-4a7f-8a5e-920bcc253549",
          "type": "SingleSelect",
          "uuid": "92de9694-ff05-4982-a3b3-d4f24d3870f4",
          "voided": true
        }
      ],
      "name": "Activity Details",
      "timed": false,
      "uuid": "43e225e8-05a1-43a5-afe3-c0dceb86a6bf"
    },
    {
      "declarativeRule": [
        {
          "actions": [
            {
              "actionType": "hideFormElementGroup"
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
                      "conceptName": "Activity sub type",
                      "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                      "scope": "registration",
                      "type": "concept"
                    },
                    "operator": "containsAnyAnswerConceptName",
                    "rhs": {
                      "answerConceptNames": [
                        "Community spaces- Meeting point/ Religious places/ School/ Park & AWC etc",
                        "Ground levelling",
                        "Others",
                        "River",
                        "Truck Unloading",
                        "Water-Tank/Pipeline",
                        "Waterfall/Jharna/Spring Water/Dhara",
                        "Whitewash/ painting"
                      ],
                      "answerConceptUuids": [
                        "00ee1a95-2236-4c43-83d7-36c911172069",
                        "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                        "58653f74-082c-47a7-9a25-548990a4bd4c",
                        "654e67f1-9d45-444e-aab5-20a980733ca4",
                        "82246b7a-c13f-435d-9e17-d8d288ff3891",
                        "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                        "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                        "a5f019c6-17a0-4536-8222-67935d482774"
                      ],
                      "type": "answerConcept"
                    }
                  }
                ]
              },
              "conjunction": "or"
            },
            {
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "conceptDataType": "Coded",
                      "conceptName": "Type of initiative",
                      "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                      "scope": "registration",
                      "type": "concept"
                    },
                    "operator": "containsAnswerConceptNameOtherThan",
                    "rhs": {
                      "answerConceptNames": [
                        "CFW"
                      ],
                      "answerConceptUuids": [
                        "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
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
      "display": "Measurement",
      "displayOrder": 4,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Numbers (voided~207468)",
                "order": 2,
                "uuid": "61848cd7-b583-4640-b426-331de38417ee",
                "voided": true
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Volume",
                "order": 4,
                "uuid": "700c0785-7f52-43b4-917d-e1c482c62db2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Numbers",
                "order": 1,
                "uuid": "23598869-15a8-43d3-a8f3-4f75b372cdc1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "Numeric",
                "name": "Numbers (voided~207563)",
                "order": 3,
                "uuid": "d4c428d1-512f-4881-87f0-611d7746dd6c",
                "voided": true
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Area",
                "order": 0,
                "uuid": "96452733-db5e-4e82-8e75-8ef8a308ea8a"
              }
            ],
            "dataType": "Coded",
            "name": "Measurements Type",
            "uuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "23598869-15a8-43d3-a8f3-4f75b372cdc1"
                    ],
                    "answersToSkip": [
                      "Number"
                    ]
                  }
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
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Bridge/Pulia",
                            "Canal",
                            "Check dam",
                            "Community Farming",
                            "Drainage",
                            "Land bunding",
                            "Others",
                            "River",
                            "Road",
                            "Road & road side bush cutting",
                            "Truck Unloading",
                            "Wall for Roads",
                            "Well"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "23598869-15a8-43d3-a8f3-4f75b372cdc1",
                      "700c0785-7f52-43b4-917d-e1c482c62db2"
                    ],
                    "answersToSkip": [
                      "Number",
                      "Volume"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Backwater",
                            "Bridge/Pulia",
                            "Community Farming",
                            "Drainage",
                            "Land bunding",
                            "Nursey Making",
                            "Pond",
                            "River",
                            "Road",
                            "Road & road side bush cutting",
                            "Wall for Roads"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                            "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "700c0785-7f52-43b4-917d-e1c482c62db2",
                      "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                    ],
                    "answersToSkip": [
                      "Area",
                      "Volume"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Bandstand",
                            "Benches",
                            "CCT",
                            "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                            "Community Hall/Centre/House",
                            "Compost pit",
                            "Dugwell/Chua/Jalkhund",
                            "Dustbin",
                            "Electric Pole",
                            "Embankment / ghat",
                            "Fencing & boundary wall",
                            "Flower garden",
                            "Kitchen Garden",
                            "Plantation",
                            "Seed ball",
                            "Soak pit",
                            "Soak Pit",
                            "Toilet/Bathroom/private spaces",
                            "Water storage pit",
                            "Water-body premises"
                          ],
                          "answerConceptUuids": [
                            "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                            "2d229755-ee38-4f7f-a7f8-404125b3c393",
                            "32699e9f-c289-4581-9781-24b2bdbb0841",
                            "38dc542e-277d-4790-8982-0d2f3253f0fc",
                            "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                            "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                            "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                            "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                            "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                            "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                            "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                            "be655900-d882-4d99-ab29-faf560b8e832",
                            "be655900-d882-4d99-ab29-faf560b8e832",
                            "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                            "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                            "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59",
                            "f246f297-f123-4b7a-b06f-d8c22a10bac2",
                            "f431cbac-b99d-48fb-8694-0299c352eb9a",
                            "f599df1e-a5e6-4f3e-b985-a196d55a3c73"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                    ],
                    "answersToSkip": [
                      "Area"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Canal"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Making"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "700c0785-7f52-43b4-917d-e1c482c62db2"
                    ],
                    "answersToSkip": [
                      "Volume"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Canal",
                            "Well"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                    ],
                    "answersToSkip": [
                      "Area"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Making"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                          ],
                          "type": "answerConcept"
                        }
                      },
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Well"
                          ],
                          "answerConceptUuids": [
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "hideFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "River",
                            "Whitewash/ painting"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "654e67f1-9d45-444e-aab5-20a980733ca4"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                    ],
                    "answersToSkip": [
                      "Area"
                    ]
                  }
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Check dam"
                          ],
                          "answerConceptUuids": [
                            "824d11d4-525d-4610-9afe-f87c030a54eb"
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
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Measurements type",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","3f0bd027-abf0-4beb-a7e7-9967d1994852","4ca95b4a-0d74-4bea-aac5-9f45da876178","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","a44830b7-3271-4313-baea-b6dc4e9cd5ae","00ee1a95-2236-4c43-83d7-36c911172069","9ada0111-bbea-4fde-8097-32ccc0de6c78","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","016a6d0a-60f9-405f-8dac-08fcf6b39823","a7b922a1-a389-4ba1-94ca-59baf7a961d0","824d11d4-525d-4610-9afe-f87c030a54eb").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","3f0bd027-abf0-4beb-a7e7-9967d1994852","4ca95b4a-0d74-4bea-aac5-9f45da876178","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","9ada0111-bbea-4fde-8097-32ccc0de6c78","00ee1a95-2236-4c43-83d7-36c911172069","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","bfee4ca1-77f7-4e19-8617-4f0e54d052a3").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","b462ddf4-977b-4bc5-8157-7f0132c5245d","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","be655900-d882-4d99-ab29-faf560b8e832","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","be655900-d882-4d99-ab29-faf560b8e832","38dc542e-277d-4790-8982-0d2f3253f0fc","32699e9f-c289-4581-9781-24b2bdbb0841","8748bdc4-de26-4411-a9b4-269abf7fc6f5","f431cbac-b99d-48fb-8694-0299c352eb9a","f246f297-f123-4b7a-b06f-d8c22a10bac2","ec5c4214-ddd6-4146-8282-195f4d711c59","2d229755-ee38-4f7f-a7f8-404125b3c393").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae").matches();
  
  const condition24 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
    
  const condition15 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","b66fa362-b975-4f0e-a7b2-9b0c37205c54").matches();
  
  const condition25 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","a7b922a1-a389-4ba1-94ca-59baf7a961d0").matches();
    
  const condition16 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06").and.when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a7b922a1-a389-4ba1-94ca-59baf7a961d0").matches();
    
  const condition17 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("00ee1a95-2236-4c43-83d7-36c911172069","654e67f1-9d45-444e-aab5-20a980733ca4").matches();
    
  const condition18 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("824d11d4-525d-4610-9afe-f87c030a54eb").matches();
  
  if(condition11 ) {
    _.forEach(["23598869-15a8-43d3-a8f3-4f75b372cdc1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition12 ) {
    _.forEach(["23598869-15a8-43d3-a8f3-4f75b372cdc1","700c0785-7f52-43b4-917d-e1c482c62db2"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["96452733-db5e-4e82-8e75-8ef8a308ea8a","700c0785-7f52-43b4-917d-e1c482c62db2"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 && condition24 ) {
    _.forEach(["96452733-db5e-4e82-8e75-8ef8a308ea8a"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition15 && condition25 ) {
    _.forEach(["700c0785-7f52-43b4-917d-e1c482c62db2"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition16 ) {
    _.forEach(["96452733-db5e-4e82-8e75-8ef8a308ea8a"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    visibility = !(condition17 );
    if(condition18 ) {
    _.forEach(["96452733-db5e-4e82-8e75-8ef8a308ea8a"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "a55cba0c-d80c-46ef-9658-767c5f652c07"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Nos",
            "uuid": "c8d91a28-238d-40ad-a26b-1be059c47863"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Number"
                          ],
                          "answerConceptUuids": [
                            "23598869-15a8-43d3-a8f3-4f75b372cdc1"
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
          "name": "Nos",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("23598869-15a8-43d3-a8f3-4f75b372cdc1").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "668a2333-9d65-49e9-b5b3-0e3e783eabbd"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Numbers (voided~207563)",
            "uuid": "d4c428d1-512f-4881-87f0-611d7746dd6c",
            "voided": true
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "conjunction": "and",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Number"
                          ],
                          "answerConceptUuids": [
                            "23598869-15a8-43d3-a8f3-4f75b372cdc1"
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
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Nos",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("23598869-15a8-43d3-a8f3-4f75b372cdc1").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "2bd5b03c-4964-4396-8f54-6f4289c185a1",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Length",
            "uuid": "7ea0b0c5-e593-44ac-80f0-e675a53d1d4a"
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
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Bridge/Pulia",
                            "Community Farming",
                            "Land bunding",
                            "Nursey Making",
                            "Road",
                            "Wall for Roads"
                          ],
                          "answerConceptUuids": [
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Backwater",
                            "Canal",
                            "CCT",
                            "Check Dam",
                            "Pond",
                            "Pond ghat / embankment",
                            "River"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59",
                            "f246f297-f123-4b7a-b06f-d8c22a10bac2"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Drainage"
                          ],
                          "answerConceptUuids": [
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Road & road side bush cutting"
                          ],
                          "answerConceptUuids": [
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Backwater",
                            "Canal",
                            "CCT",
                            "Check Dam",
                            "Pond",
                            "Pond ghat / embankment",
                            "River"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59",
                            "f246f297-f123-4b7a-b06f-d8c22a10bac2"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                }
              ]
            }
          ],
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "Length",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","4ca95b4a-0d74-4bea-aac5-9f45da876178","9ada0111-bbea-4fde-8097-32ccc0de6c78","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","bfee4ca1-77f7-4e19-8617-4f0e54d052a3").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition41 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","824d11d4-525d-4610-9afe-f87c030a54eb","ec5c4214-ddd6-4146-8282-195f4d711c59","f246f297-f123-4b7a-b06f-d8c22a10bac2").matches();
  
  const condition51 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition61 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition71 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("3f0bd027-abf0-4beb-a7e7-9967d1994852").matches();
  
  const condition81 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition91 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition101 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("ba6d69d5-bdb8-48bd-bd70-87e0b9848178").matches();
  
  const condition111 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnswerConceptName("cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition121 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition131 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","824d11d4-525d-4610-9afe-f87c030a54eb","ec5c4214-ddd6-4146-8282-195f4d711c59","f246f297-f123-4b7a-b06f-d8c22a10bac2").matches();
  
  const condition141 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition151 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 || condition41 && condition51 && condition61 || condition71 && condition81 && condition91 || condition101 && condition111 && condition121 || condition131 && condition141 && condition151 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "72627d0b-c4ec-4b4c-a85c-5d6ed4185949"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Breadth",
            "uuid": "1197d309-c9a1-4d65-8e45-61bfd6f01aee"
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
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Bridge/Pulia",
                            "Community Farming",
                            "Land bunding",
                            "Nursey Making",
                            "Road"
                          ],
                          "answerConceptUuids": [
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Drainage"
                          ],
                          "answerConceptUuids": [
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Backwater",
                            "Canal",
                            "CCT",
                            "Check Dam",
                            "Pond",
                            "Pond ghat / embankment",
                            "River"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59",
                            "f246f297-f123-4b7a-b06f-d8c22a10bac2"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Road & road side bush cutting"
                          ],
                          "answerConceptUuids": [
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Backwater",
                            "Canal",
                            "CCT",
                            "Check Dam",
                            "Pond",
                            "Pond ghat / embankment",
                            "River"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59",
                            "f246f297-f123-4b7a-b06f-d8c22a10bac2"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
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
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": true,
          "name": "Breadth",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","4ca95b4a-0d74-4bea-aac5-9f45da876178","9ada0111-bbea-4fde-8097-32ccc0de6c78","bfee4ca1-77f7-4e19-8617-4f0e54d052a3").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition41 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("3f0bd027-abf0-4beb-a7e7-9967d1994852").matches();
  
  const condition51 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition61 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition71 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","ec5c4214-ddd6-4146-8282-195f4d711c59","f246f297-f123-4b7a-b06f-d8c22a10bac2").matches();
  
  const condition81 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition91 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition101 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("ba6d69d5-bdb8-48bd-bd70-87e0b9848178").matches();
  
  const condition111 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnswerConceptName("cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition121 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition131 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","824d11d4-525d-4610-9afe-f87c030a54eb","ec5c4214-ddd6-4146-8282-195f4d711c59","f246f297-f123-4b7a-b06f-d8c22a10bac2").matches();
  
  const condition141 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition151 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 || condition41 && condition51 && condition61 || condition71 && condition81 && condition91 || condition101 && condition111 && condition121 || condition131 && condition141 && condition151 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "a40cdb3f-e8bd-47a7-b4ce-8d8904844708"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Breadth (voided~207550)",
            "uuid": "acf809e2-30ba-49ab-9119-a344cc5ea7cb",
            "voided": true
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "encounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
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
          "displayOrder": 6,
          "keyValues": [],
          "mandatory": true,
          "name": "Breadth",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "79837ddc-610c-40df-92d4-1b2ce1b2a910",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Height / Depth",
            "uuid": "4542ba21-0801-416b-b739-9ca6707dc4b4"
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
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Wall for Roads"
                          ],
                          "answerConceptUuids": [
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Backwater",
                            "Canal",
                            "CCT",
                            "Check Dam",
                            "Pond",
                            "Pond ghat / embankment",
                            "River"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59",
                            "f246f297-f123-4b7a-b06f-d8c22a10bac2"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "or"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Well"
                          ],
                          "answerConceptUuids": [
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
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
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": true,
          "name": "Height / Depth",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("62f4b7d6-4a4a-4064-aa0e-a0c21053eec2").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnyAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition41 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","824d11d4-525d-4610-9afe-f87c030a54eb","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","ec5c4214-ddd6-4146-8282-195f4d711c59","f246f297-f123-4b7a-b06f-d8c22a10bac2").matches();
  
  const condition51 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition61 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  const condition71 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("a7b922a1-a389-4ba1-94ca-59baf7a961d0").matches();
  
  const condition81 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition91 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 || condition41 && condition51 && condition61 || condition71 && condition81 && condition91 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "348a70d9-4181-4380-bd8e-10569eff1ff2"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Height",
            "uuid": "a32d438f-ecd6-4f7a-9753-d42f923f743a"
          },
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": false,
          "name": "Height",
          "type": "SingleSelect",
          "uuid": "7ade6317-887f-42dd-a7c5-7b39a331708f",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Diameter",
            "uuid": "614c185c-7f63-406d-9f2a-6619564947f4"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Well"
                          ],
                          "answerConceptUuids": [
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Cleaning",
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ],
                          "type": "answerConcept"
                        }
                      }
                    ]
                  },
                  "conjunction": "and"
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Area",
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2",
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
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
          "displayOrder": 9,
          "keyValues": [],
          "mandatory": true,
          "name": "Diameter",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("a7b922a1-a389-4ba1-94ca-59baf7a961d0").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnyAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a","700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "2a861001-56d3-4adb-8cdd-f8468d6390cd"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Depth",
            "uuid": "ad7e9f42-d8b9-420b-b281-f5fc9cee43ef"
          },
          "displayOrder": 10,
          "keyValues": [],
          "mandatory": false,
          "name": "Depth",
          "type": "SingleSelect",
          "uuid": "0534a7e9-da64-43f5-b223-104daeef3965",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Height (voided~207551)",
            "uuid": "09ee602c-ed75-4df9-b0c2-04f6adbcd199",
            "voided": true
          },
          "displayOrder": 11,
          "keyValues": [],
          "mandatory": false,
          "name": "Height",
          "type": "SingleSelect",
          "uuid": "7d33dd23-1477-4e32-b8d3-51e709f322e9",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Diameter (voided~207552)",
            "uuid": "7405d9a6-465b-4e74-a6bb-4e4b93b1856c",
            "voided": true
          },
          "displayOrder": 12,
          "keyValues": [],
          "mandatory": false,
          "name": "Diameter",
          "type": "SingleSelect",
          "uuid": "f4af8fa6-ffd1-4869-9114-17b9f0b22493",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Depth (voided~207553)",
            "uuid": "f82fa2e6-19a0-4ef8-886f-e485dc677925",
            "voided": true
          },
          "displayOrder": 13,
          "keyValues": [],
          "mandatory": false,
          "name": "Depth",
          "type": "SingleSelect",
          "uuid": "6536e1ee-162e-4996-85e8-3ee2e5333b56",
          "voided": true
        }
      ],
      "name": "Measurement",
      "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("961b337f-fee4-4bed-a77a-83db71f1b5a2","016a6d0a-60f9-405f-8dac-08fcf6b39823","58653f74-082c-47a7-9a25-548990a4bd4c","82246b7a-c13f-435d-9e17-d8d288ff3891","a5f019c6-17a0-4536-8222-67935d482774","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","00ee1a95-2236-4c43-83d7-36c911172069","654e67f1-9d45-444e-aab5-20a980733ca4").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
        visibility = !(condition11 || condition21 );
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "timed": false,
      "uuid": "c7dff65f-c464-488a-a252-9ab54b3e4a28"
    },
    {
      "declarativeRule": [
        {
          "actions": [
            {
              "actionType": "showFormElementGroup"
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
                      "conceptName": "Type of initiative",
                      "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                      "scope": "registration",
                      "type": "concept"
                    },
                    "operator": "containsAnswerConceptName",
                    "rhs": {
                      "answerConceptNames": [
                        "CFW"
                      ],
                      "answerConceptUuids": [
                        "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
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
      "display": "Photographs",
      "displayOrder": 5,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Image",
            "name": "Before implementation",
            "uuid": "23641a68-fa4f-4f6d-96c1-52d351fc225a"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": false,
          "name": "Before implementation",
          "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
        visibility = condition11 ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "timed": false,
      "uuid": "71398fee-05dc-4525-9d6f-4a6809c7606b"
    },
    {
      "display": "Other Details",
      "displayOrder": 6,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Yes",
                "order": 0,
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "No",
                "order": 1,
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a"
              }
            ],
            "dataType": "Coded",
            "name": "Form Cross Checked?",
            "uuid": "4e1f6ed9-0e46-4932-b5c3-5c34db863646"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Form Cross Checked?",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("4e1f6ed9-0e46-4932-b5c3-5c34db863646").notDefined.matches();
  
  if(condition11 ){
    value = "No";  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "d11df3a3-1a5b-46bf-88ec-53308eb007ba"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Remarks",
            "uuid": "e132e4fe-7c7a-4612-b086-426b9f74147b"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": false,
          "name": "Remarks",
          "type": "SingleSelect",
          "uuid": "18a34447-fad7-41e0-8361-d35b40faf3e7"
        }
      ],
      "name": "Other Details",
      "timed": false,
      "uuid": "646ff53c-f329-428d-b754-cff0d29ed738"
    }
  ],
  "formType": "IndividualProfile",
  "name": "Village Assessment (voided~9597)",
  "uuid": "94f361a6-38d3-4af0-8705-fe7ae7a1c2db",
  "validationRule": "",
  "visitScheduleRule": "",
  "voided": true
}