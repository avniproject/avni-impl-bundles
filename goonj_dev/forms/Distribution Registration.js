{
  "checklistsRule": "",
  "decisionConcepts": [],
  "decisionRule": "",
  "formElementGroups": [
    {
      "display": "Dispatch details",
      "displayOrder": 1,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Dispatch status id (Dispatch)",
            "uuid": "fc7c0e1c-463f-4a94-a999-b1a6eedb9145"
          },
          "displayOrder": 1,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Dispatch status id",
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
  
   const dispatchEncounter = encounter.individual.getEncounters(true).filter((enc) => enc.encounterType.name === 'Dispatch' );
   value = dispatchEncounter[0].getObservationReadableValue('Dispatch Status Id');
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "209fe2a9-2a6c-4c3c-864e-171af4fa115e",
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
          "name": "Village",
          "type": "SingleSelect",
          "uuid": "50fbe709-3ecf-4d16-9f56-ca9b673f7cc5",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Dispatch Status Id",
            "uuid": "132868ab-811a-401e-9fd3-7c87f5512436"
          },
          "displayOrder": 3,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Dispatch status id",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  const _ = imports.lodash;
  const firstDispatchEncounter = _.find(encounter.individual.encounters, enc => enc.encounterType.name === 'Dispatch');

  if(firstDispatchEncounter) {
    const dispatchStatusIdValue = firstDispatchEncounter.getObservationReadableValue('132868ab-811a-401e-9fd3-7c87f5512436');
    
    statusBuilder.value(dispatchStatusIdValue);
  }
  return statusBuilder.build();
},
          "type": "SingleSelect",
          "uuid": "251527b5-3d66-4f41-bf91-aceef2b27a43",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Dispatch Status Name",
            "uuid": "c5bf896e-a2a5-434f-8d7c-dedf7bab7f0d"
          },
          "displayOrder": 4,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Dispatch Status Name",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  const _ = imports.lodash;
  const firstDispatchEncounter = _.find(encounter.individual.encounters, enc => enc.encounterType.name === 'Dispatch');

  if(firstDispatchEncounter) {
    const dispatchStatusIdValue = firstDispatchEncounter.getObservationReadableValue('c5bf896e-a2a5-434f-8d7c-dedf7bab7f0d');
    
    statusBuilder.value(dispatchStatusIdValue);
  }
  return statusBuilder.build();
},
          "type": "SingleSelect",
          "uuid": "add705a7-816e-4c4d-aa41-892ce7ffd6ba",
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
          "uuid": "942cc5d6-53e5-42b1-8023-d2c3bb694d7f",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Account name (voided~220045)",
            "uuid": "c5a1871d-d549-4db1-9408-98505fba6cb0",
            "voided": true
          },
          "displayOrder": 6,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Account name",
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
  
   const dispatchEncounter = encounter.individual.getEncounters(true).filter((enc) => enc.encounterType.name === 'Dispatch' );
   value = dispatchEncounter[0].getObservationReadableValue('Account  name');
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "9908719b-1b03-4fad-85d1-5462130f99de",
          "voided": true
        }
      ],
      "name": "Dispatch details",
      "timed": false,
      "uuid": "cefbece6-99d2-4495-bffb-9c29a0ec9a04",
      "voided": true
    },
    {
      "display": "Address",
      "displayOrder": 2,
      "formElements": [
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
            "name": "District (voided~207373)",
            "uuid": "d4ff2fa9-2b0f-47c4-a470-d385075c6cae",
            "voided": true
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "District",
          "type": "SingleSelect",
          "uuid": "efc0a456-43ff-4392-bc4b-8359a5023e50",
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
            "name": "Block (voided~220544)",
            "uuid": "9c54278a-c0d7-4c2a-881e-a2aef170164a",
            "voided": true
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Block",
          "type": "SingleSelect",
          "uuid": "1aa2db08-cb68-4570-834a-b94eef5e6dc3",
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
                "name": "Solapur",
                "order": 31,
                "uuid": "126a8580-ac82-4bae-8fa0-867debafcb70"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Nanded",
                "order": 19,
                "uuid": "9e23a1b5-8b98-4681-8ad7-6e488d7ce4b1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Amravati",
                "order": 2,
                "uuid": "cab0ab57-4b58-46f3-af63-cca6937afcad"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Nashik",
                "order": 21,
                "uuid": "203dbdd0-7484-44e0-8aea-6a70e4482e6b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Jalna",
                "order": 13,
                "uuid": "2c68cc11-e2ed-4092-b40b-32186237f456"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Nagpur",
                "order": 18,
                "uuid": "77ee790e-1f54-4e85-9afb-cdaaad609163"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Bhandara",
                "order": 5,
                "uuid": "e15c4581-5b88-42f1-81a7-fb022e237c16"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Beed",
                "order": 4,
                "uuid": "b1927eaf-250b-4dce-b00c-d4529c28b7ec"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Palghar",
                "order": 23,
                "uuid": "1095009d-66d7-4e10-8757-9cf2e420f182"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Hingoli",
                "order": 11,
                "uuid": "d051d482-5615-4020-abca-61b5aa0bc18b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Parbhani",
                "order": 24,
                "uuid": "0f1dd513-fafb-46ed-a1dc-5d64039af00a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kolhapur",
                "order": 14,
                "uuid": "13fb0691-9d20-4e56-beb2-131d57d3e26f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ratnagiri",
                "order": 27,
                "uuid": "c63d31e0-19b4-4bfb-9259-aeac7daa1c9f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Jalgaon",
                "order": 12,
                "uuid": "12defede-b654-451c-af9b-e56f9d47b3b0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Gadchiroli",
                "order": 9,
                "uuid": "c77eaf9a-cffd-4f25-9679-ca18cc096284"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Mumbai",
                "order": 16,
                "uuid": "f118b9aa-cc6d-4228-bf0a-a5f438eb0cf2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Yavatmal",
                "order": 35,
                "uuid": "5c930fcf-871d-4c2e-bdf8-ab485c7c47f1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Chandrapur",
                "order": 7,
                "uuid": "8db22631-bc11-49af-b300-9b7caace0253"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Akola",
                "order": 1,
                "uuid": "d5b57e3f-196b-459c-b4f1-eb12f0f86546"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Aurangabad",
                "order": 3,
                "uuid": "a3be2255-6ed1-45eb-a20e-ed0ca98c8b1a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Pune",
                "order": 25,
                "uuid": "6a16f52a-ca5d-42cd-9e15-197dd563490c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Nandurbar",
                "order": 20,
                "uuid": "dca8d7dc-5719-4bc3-9cf1-818a0bed7101"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ahmednagar",
                "order": 0,
                "uuid": "7f728f06-f0b5-4d24-b4b1-2adb14ac809b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Satara",
                "order": 29,
                "uuid": "13025832-19f6-42cb-a5e5-41e023591f4f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Sindhudurg",
                "order": 30,
                "uuid": "6b45db64-9e84-4bbd-b7f7-861505262667"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Gondia",
                "order": 10,
                "uuid": "3484a0f4-1171-4c7a-99ae-294990cbea08"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dhule",
                "order": 8,
                "uuid": "375c6f56-2a0d-467f-924a-97dd188c4717"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Raigad",
                "order": 26,
                "uuid": "a54afa32-c8c4-4b4d-9087-17908bc08ab9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Mumbai Suburban",
                "order": 17,
                "uuid": "d64dcae8-9aab-4481-8eba-02e6d7e55ac6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Latur",
                "order": 15,
                "uuid": "086b6b23-e4a6-416c-a3b9-d5074c589cd2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Thane",
                "order": 32,
                "uuid": "4f746cbf-fa51-4b34-aa2a-29369bf81d7d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Buldhana",
                "order": 6,
                "uuid": "22fbfd7b-7e2d-4e37-8259-431d75d2cd90"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Sangli",
                "order": 28,
                "uuid": "700882bb-c9bc-409e-ad3c-fb1fcd719abf"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Washim",
                "order": 34,
                "uuid": "fb40f2d8-4db7-41e3-92ef-c0e6148fe3bd"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Wardha",
                "order": 33,
                "uuid": "8a6f702f-09cd-4394-8bed-70c136836234"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Osmanabad",
                "order": 22,
                "uuid": "913c34ac-f70f-4ea7-b771-1a70c55ad9ee"
              }
            ],
            "dataType": "Coded",
            "name": "State List",
            "uuid": "1fe23613-1dab-41b3-9ef1-e5eaa7556e7c"
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "State",
          "type": "SingleSelect",
          "uuid": "4f549937-468b-4a3f-b977-d91541c55b7c",
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
                "name": "Mandangad",
                "order": 8,
                "uuid": "0c94aec6-9452-43dc-8f05-6b705aab6d79"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Chipalun",
                "order": 3,
                "uuid": "f7bf1ead-7c86-47b6-94ed-b0bd649ff30e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Lanja",
                "order": 7,
                "uuid": "15429ed8-df6c-4b40-a10e-59f0e53f98fa"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Sangmeshwar",
                "order": 2,
                "uuid": "28cdef4e-50d4-49b5-b205-2e939d39b30a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Khed",
                "order": 6,
                "uuid": "63803c4f-ebc2-4953-8438-63fa60975ff4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Rajapur",
                "order": 0,
                "uuid": "5021b731-8510-4614-a5e5-751bad5e9b3c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ratnagiri",
                "order": 1,
                "uuid": "c63d31e0-19b4-4bfb-9259-aeac7daa1c9f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Guhagar",
                "order": 5,
                "uuid": "37db2866-58dd-4e02-9084-96283706aee0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dapoli",
                "order": 4,
                "uuid": "6797c0d8-1056-4745-9326-073efd09e5aa"
              }
            ],
            "dataType": "Coded",
            "name": "District List",
            "uuid": "5fb8cc74-8a4c-4430-90d3-5bb73c7a7081"
          },
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "District",
          "type": "SingleSelect",
          "uuid": "3ad9a216-5ce7-456f-ac28-814a01f1884d",
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
                "name": "Kond Dasur",
                "order": 5,
                "uuid": "e09c9d74-27c0-45fc-b132-ea0c68e1e7bd"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kondhe Tarf Rajapur",
                "order": 6,
                "uuid": "cfe38412-9c95-4ba3-b3b7-c7bdf550b610"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Madban",
                "order": 18,
                "uuid": "1704a6d5-0646-4125-b439-625bbe57ec07"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Chavhanwadi",
                "order": 0,
                "uuid": "4b282857-8c38-4b7f-b758-caea35481872"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Mandrul",
                "order": 25,
                "uuid": "88557ddc-3511-41ff-814d-d775bd3c52a8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kombhe",
                "order": 4,
                "uuid": "b4d6c893-a16e-4c05-a585-c733524e9020"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kodavali",
                "order": 1,
                "uuid": "ec1ea3e0-67e7-4278-ba7a-24cd4822728c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kumbhavade",
                "order": 15,
                "uuid": "f4a1efc2-5c3b-47c5-8931-f120285cadae"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Math Kh.",
                "order": 27,
                "uuid": "0afbcb29-78d5-4c1e-9640-114fea946bfa"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Manjarewadi",
                "order": 26,
                "uuid": "694ac906-a21d-4e7f-a2c9-ce91663b2615"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kondivale",
                "order": 7,
                "uuid": "8dc4496a-15c0-4de2-8e17-80dc4cdfbf97"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Madhaliwadi (N.V.)",
                "order": 19,
                "uuid": "988e76e9-6c56-4629-9782-ad7397192998"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kondsar Kh.",
                "order": 9,
                "uuid": "29df26ba-5950-4d18-b00a-6e79da3a7000"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kolwankhadi",
                "order": 3,
                "uuid": "440f1b87-d84d-44fa-be9e-e95d13d50f92"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kondwadi",
                "order": 12,
                "uuid": "ba43e65b-6db9-495f-8d74-9a637cfd57dd"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Mahalunge",
                "order": 21,
                "uuid": "59cb9a1a-e368-44f0-9210-ef5b32f94627"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kotapur",
                "order": 14,
                "uuid": "ab195e7c-f14d-4bf0-97bd-fe67d76c44b4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kondvashiwadi",
                "order": 11,
                "uuid": "bb59e2dc-3281-4823-8c4d-b1c49759d079"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kondsar Bk.",
                "order": 8,
                "uuid": "4cacd35b-10c9-46b5-82e4-7c4b1175e684"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Madheliwadi",
                "order": 20,
                "uuid": "82ae0ba9-a88c-4509-87f3-c35c7ffe1d22"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Mandavkarwadi",
                "order": 24,
                "uuid": "55106f1b-848c-48a3-aa05-7bdfb93ee651"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kond Tiware",
                "order": 10,
                "uuid": "a06dae46-a92d-4b57-b3a2-6b49483e0256"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kolamb",
                "order": 2,
                "uuid": "a95421f5-9f3f-4197-942d-2c2ebbe86438"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kuveshi",
                "order": 17,
                "uuid": "75cc3c5e-f736-45c6-86b1-1abb3d0347d1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kunbiwadi",
                "order": 16,
                "uuid": "6f9feff2-7248-4437-8d8a-6cf63178a5f4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kondye Tarf Saundal",
                "order": 13,
                "uuid": "ac1e7c61-e5c2-4058-a33e-40ef850b8fb5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Majre Juve",
                "order": 22,
                "uuid": "0cbc5087-0493-4cb8-9e4a-cb892c486363"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Malewadi",
                "order": 23,
                "uuid": "301b306d-c09a-4c03-b672-cc4f694a0da2"
              }
            ],
            "dataType": "Coded",
            "name": "Block List (voided~220546)",
            "uuid": "cef9bdf9-8fe3-4496-82bd-1db359c238f1",
            "voided": true
          },
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": true,
          "name": "Block",
          "type": "SingleSelect",
          "uuid": "2866f7b4-4701-48e8-8e6f-6c34b6762bb5",
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
          "displayOrder": 6,
          "keyValues": [],
          "mandatory": true,
          "name": "State",
          "type": "SingleSelect",
          "uuid": "b92a1bf3-b0a4-42b4-83b8-b0dc0d3cbe14",
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
              }
            ],
            "name": "District",
            "uuid": "667a4546-f08e-434b-9f4c-60e285061313"
          },
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": true,
          "name": "District",
          "type": "SingleSelect",
          "uuid": "839571ce-aed3-491f-8b6b-8f125f554059",
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
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": true,
          "name": "Village",
          "type": "SingleSelect",
          "uuid": "4b859296-cd60-425c-8026-b22c4e9fd31b",
          "voided": true
        }
      ],
      "name": "Address",
      "timed": false,
      "uuid": "2b803b08-316f-49be-a651-e08ac6b98a77",
      "voided": true
    },
    {
      "display": "​",
      "displayOrder": 3,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Coded",
            "name": "dummy",
            "uuid": "92f359cd-a199-4820-8638-f37fa9a0472b"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": false,
          "name": "​",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "b8822694-1748-44bd-9e2c-8aa08abf63c9",
          "voided": true
        }
      ],
      "name": "​",
      "timed": false,
      "uuid": "3dd1cb74-d3ba-47ef-8a35-0d671b54d5e8",
      "voided": true
    },
    {
      "display": "​",
      "displayOrder": 4,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Coded",
            "name": "dummy1",
            "uuid": "d8b49878-875f-41e4-b9e8-8924271158ef"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": false,
          "name": "​",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "7f73f555-7908-4fbe-bf70-64dca0d5a974",
          "voided": true
        }
      ],
      "name": "​",
      "timed": false,
      "uuid": "f0faaf0c-047d-482a-b9fb-8e614cd19520",
      "voided": true
    },
    {
      "display": "​",
      "displayOrder": 5,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Coded",
            "name": "dummy2",
            "uuid": "0ed27e08-e5dc-4341-b626-ec0f675801c8"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": false,
          "name": "​",
          "type": "SingleSelect",
          "uuid": "1ea6d3f8-d010-402b-bad3-0b7733218f11",
          "voided": true
        }
      ],
      "name": "​",
      "timed": false,
      "uuid": "fac9e0ed-7468-4d38-b463-46c88078002d",
      "voided": true
    },
    {
      "display": "Distribution Related Details",
      "displayOrder": 6,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Tola / Mohalla",
            "uuid": "5e259bfe-07a8-4c88-a712-d22b9a612429"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": false,
          "name": "Tola / Mohalla",
          "type": "SingleSelect",
          "uuid": "81eb71ef-2519-4593-90c1-3f85139eff9f"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Other Block",
            "uuid": "e2d35dee-c34f-4f54-a68b-f32ee81835b6"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Other Block",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;

  const isDefined = individual && 
                    individual.lowestAddressLevel && 
                    (Array.isArray(individual.lowestAddressLevel.locationMappings) && 
                     !_.isEmpty(individual.lowestAddressLevel.locationMappings) || 
                     !_.isEmpty(individual.lowestAddressLevel.titleLineage));

  if (isDefined) {
        let block = undefined;

        if (
            Array.isArray(individual.lowestAddressLevel.locationMappings) &&
            !_.isEmpty(individual.lowestAddressLevel.locationMappings) &&
            individual.lowestAddressLevel.locationMappings[0] &&
            individual.lowestAddressLevel.locationMappings[0].parent &&
            individual.lowestAddressLevel.locationMappings[0].parent.name
        ) {
            block = individual.lowestAddressLevel.locationMappings[0].parent.name;
        } else if (
            individual.lowestAddressLevel &&
            individual.lowestAddressLevel.titleLineage
        ) {
            const titleParts = _.split(individual.lowestAddressLevel.titleLineage, ', ');
            block = titleParts.length > 2 ? titleParts[2] : undefined;
        }

        visibility = block === 'Other';
    }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "type": "SingleSelect",
          "uuid": "3ff5be80-eba6-4722-94c2-c993f6db61a3"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Other Village",
            "uuid": "16b4db7c-e0a8-41f1-ac67-07470a762d9f"
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Other Village",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;
  
  const isDefined = individual && 
                    individual.lowestAddressLevel && 
                    (Array.isArray(individual.lowestAddressLevel.locationMappings) && 
                     !_.isEmpty(individual.lowestAddressLevel.locationMappings) || 
                     !_.isEmpty(individual.lowestAddressLevel.titleLineage));

  if (isDefined) {
    const village = Array.isArray(individual.lowestAddressLevel.locationMappings) && 
                    !_.isEmpty(individual.lowestAddressLevel.locationMappings) && 
                    individual.lowestAddressLevel.locationMappings[0] && 
                    individual.lowestAddressLevel.locationMappings[0].child && 
                    individual.lowestAddressLevel.locationMappings[0].child.name 
                    || _.split(individual.lowestAddressLevel.titleLineage, ', ')[3];
    
    if (village === 'Other') {
      visibility = true;
    } else {
      visibility = false;
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "type": "SingleSelect",
          "uuid": "1cdfba38-8a02-4a00-839d-6fec4335c602"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Source Id",
            "uuid": "98913e69-ab32-48aa-9f50-cf539779ccf8"
          },
          "displayOrder": 4,
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
          "uuid": "d20e3487-fd87-4f93-9bae-9bf3d6d1a302"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Date",
            "name": "Distribution Date",
            "uuid": "cef5b862-672e-4e94-8ebc-3299a55f416f"
          },
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": true,
          "name": "Distribution date",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("cef5b862-672e-4e94-8ebc-3299a55f416f").greaterThan(moment().startOf('day').toDate()).matches();
  
  if(condition11 ){
    validationErrors.push("Date cannot be in the future");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "64553a0f-3010-4516-96fc-0cb60c42bee1"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Account name (voided~220045)",
            "uuid": "c5a1871d-d549-4db1-9408-98505fba6cb0",
            "voided": true
          },
          "displayOrder": 6,
          "keyValues": [],
          "mandatory": true,
          "name": "Account name",
          "type": "SingleSelect",
          "uuid": "9c9c7dcf-d03d-4623-894e-991144f13928",
          "voided": true
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
          "uuid": "dd6cc450-7630-416f-84f2-106aa12017a1"
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
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of Initiative",
          "type": "SingleSelect",
          "uuid": "1793038d-8ae7-4b31-ab19-3ca5e52362ee"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Widows",
                "order": 31,
                "uuid": "e0c9a937-415b-4bcc-be63-e7a41fa3c0d6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Senior Citizens",
                "order": 21,
                "uuid": "b4f90cb7-1cd7-4f72-aba0-49f961fc27ea"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Fisher community",
                "order": 9,
                "uuid": "10d355b7-d81e-4937-8a5c-39e30c4e130b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Construction workers",
                "order": 4,
                "uuid": "bc660964-f0c1-422a-a275-c308bbc86a9e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tailor Cutting",
                "order": 24,
                "uuid": "a3e19465-bebb-427a-8df2-7d58e28c5091"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Rickshaw Pullers",
                "order": 19,
                "uuid": "43803088-d89d-425e-991f-1343ddbd66c4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Mentally Challenged",
                "order": 14,
                "uuid": "c40880c6-cac6-4fd8-b30c-395f532d0a9c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Differently Abled",
                "order": 7,
                "uuid": "81f059e7-7a88-4e9e-883e-a9bfb8ef468a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Children",
                "order": 3,
                "uuid": "d46b9822-d3c3-492d-a2a3-9ab623cfd802"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Health workers and sweepers",
                "order": 10,
                "uuid": "a87c0a89-9a65-43ab-8f94-daee22093c3b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Puppeteers",
                "order": 16,
                "uuid": "7720a9df-4c19-437d-8c47-0b55183af349"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Migrant workers",
                "order": 15,
                "uuid": "0ee9a1f6-c598-47ae-9c84-64aae903cc9b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Agricultural Related",
                "order": 1,
                "uuid": "84adcd3a-c177-418e-88ea-ca3a1cdb56f5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Third Gender",
                "order": 26,
                "uuid": "e179e806-3487-433e-ba5f-9b341db3ed20"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tribal Community",
                "order": 28,
                "uuid": "3fdad012-1109-4684-907c-0a268e6d1e9b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Embroidery workers",
                "order": 8,
                "uuid": "0016afc5-47a2-46e0-867d-75ac3b0edfa0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Transgenders",
                "order": 27,
                "uuid": "bb9b146f-d1df-49d9-82eb-dab38c2bc8c8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "lohar",
                "order": 13,
                "uuid": "8585d735-9b9e-4801-adc8-c9c8c0b89518"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Daily Wagers",
                "order": 5,
                "uuid": "a45cf0ac-7200-49a2-be31-a7317aaa46b6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Unorganized sector",
                "order": 29,
                "uuid": "cf177b27-87c3-4dc1-8255-68ffe549b9f4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Street Vendors",
                "order": 23,
                "uuid": "c792d850-6ff6-46d6-b62b-1f7a91c3952f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Leprosy affected",
                "order": 12,
                "uuid": "4af95ec9-9da1-4367-a2fa-2a8392822cc8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Sex Workers",
                "order": 22,
                "uuid": "c913f919-19bb-4789-948f-1ce239452da2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Rohingya community",
                "order": 20,
                "uuid": "508b8292-894a-4ed2-b090-96283dccaff0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Devdasi community",
                "order": 6,
                "uuid": "1b6229ca-3360-4ba8-b858-1048f64f8d6b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Adolescents",
                "order": 0,
                "uuid": "7cf699d9-0a47-4111-95ce-b0c5df581762"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Artisans",
                "order": 2,
                "uuid": "73d1cedb-66f4-425b-9da4-7b22e87df967"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "HIV affected",
                "order": 11,
                "uuid": "8df338a9-de53-4c13-8dd5-b869c3d45f2d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "None",
                "order": 32,
                "uuid": "ba835221-04c0-4e55-a08f-e6e25bb6719c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "PWD",
                "order": 17,
                "uuid": "dc6278fa-b9f5-457d-b5a4-807189ac26e6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ragpickers",
                "order": 18,
                "uuid": "27818169-2925-4895-b4ea-6cc30cedc5b0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tea garden workers",
                "order": 25,
                "uuid": "0640170e-b58f-4aac-a30c-01f5ad908a0a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Weavers",
                "order": 30,
                "uuid": "95867a1b-bb19-469e-b21c-313016f3725d"
              }
            ],
            "dataType": "Coded",
            "keyValues": [],
            "name": "Type Of Community",
            "uuid": "ed347f8d-3f94-47e5-a0c4-55a7dab6c63a"
          },
          "displayOrder": 9,
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Differently Abled",
                "Third Gender"
              ]
            }
          ],
          "mandatory": true,
          "name": "Type Of Community",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("00e97494-a65b-482b-b919-aab58d52e5b8").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "b4a5c331-04c6-436d-93ea-a839d68661bc",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "lowAbsolute": 0,
            "name": "Number of students (Male)",
            "uuid": "f0e7c823-6586-45eb-a687-9ad4f7e0375d"
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
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Education And Health"
                          ],
                          "answerConceptUuids": [
                            "00e97494-a65b-482b-b919-aab58d52e5b8"
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
          "displayOrder": 14,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of students (Male)",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("00e97494-a65b-482b-b919-aab58d52e5b8").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "d022b1a3-6552-4b29-8e99-64b2c54f24bf",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "lowAbsolute": 0,
            "name": "Number of students (Female)",
            "uuid": "9bb209c9-c2fe-4c72-8d60-030522e53bb2"
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
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Education And Health"
                          ],
                          "answerConceptUuids": [
                            "00e97494-a65b-482b-b919-aab58d52e5b8"
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
          "displayOrder": 15,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of students (Female)",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("00e97494-a65b-482b-b919-aab58d52e5b8").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "964c5eab-f333-47d1-8ca8-1a823c7c6e05",
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
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "CFW-S2S",
                            "Education and Health",
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "00e97494-a65b-482b-b919-aab58d52e5b8",
                            "4db0c307-9053-4bd4-b917-580d00e43f1d",
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
          "displayOrder": 16,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of Educational Institute",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnyAnswerConceptName("4db0c307-9053-4bd4-b917-580d00e43f1d","9fd9d626-faf7-4833-a3ab-47ec3b4388f6","00e97494-a65b-482b-b919-aab58d52e5b8").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "2ddf1300-dbca-4cdb-b5dc-5974156a86d5"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "School / Anganwadi / Learning Center Name",
            "uuid": "2e39d19d-fc03-400e-9f5e-1f815483ea47"
          },
          "displayOrder": 17,
          "keyValues": [],
          "mandatory": true,
          "name": "School / Anganwadi / Learning Center Name",
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
  
  const typeOfInitiativeisCfws2sOrS2sOrEducationHealth = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnyAnswerConceptName("4db0c307-9053-4bd4-b917-580d00e43f1d","9fd9d626-faf7-4833-a3ab-47ec3b4388f6","00e97494-a65b-482b-b919-aab58d52e5b8").matches();
  
  visibility = typeOfInitiativeisCfws2sOrS2sOrEducationHealth ;
  
  const typeOfInitiativeIsCfws2s = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("4db0c307-9053-4bd4-b917-580d00e43f1d").matches();
  
  const currentValue = individual.getObservationValue('2e39d19d-fc03-400e-9f5e-1f815483ea47');
    
    if (typeOfInitiativeIsCfws2s && !currentValue ) {
    
    value = 'None';
    
    };


  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "abcf9a7f-4f9c-442e-a3bd-3ba3323c78a5"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Cloudburst",
                "order": 0,
                "unique": true,
                "uuid": "079f7101-6b67-46bf-b09e-c0aff429b943"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Not Applicable",
                "order": 13,
                "uuid": "ca098686-79b0-4219-8f33-479363f8a69a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Landslides",
                "order": 8,
                "unique": true,
                "uuid": "e037aeb5-e82c-41cb-96a8-45cb1e031126"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Riots",
                "order": 9,
                "unique": true,
                "uuid": "b3dd4f42-f85f-47f3-93ba-0d818c3f7462"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tsunami",
                "order": 11,
                "unique": true,
                "uuid": "9d7d7bc1-0c39-4d2d-afaf-4f4f53f6fc8f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Cyclone",
                "order": 2,
                "unique": true,
                "uuid": "318bd723-ecb6-444b-aae3-5490db65a376"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Winter",
                "order": 12,
                "unique": true,
                "uuid": "a359a1d4-5a81-491d-84bd-aac0f819555f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Earthquake",
                "order": 4,
                "unique": true,
                "uuid": "b121c9c4-ca7e-4dbd-814e-f4a10be4fd79"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Fire",
                "order": 5,
                "unique": true,
                "uuid": "0ec26543-d62f-4dd9-a8f9-e2a033c1f1c4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Flash Flood",
                "order": 6,
                "unique": true,
                "uuid": "5ffe578b-9cf5-464b-aeb9-a4454e3b297d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Drought",
                "order": 3,
                "unique": true,
                "uuid": "1b0285e1-0bc8-4461-b8cd-22e4b62d960f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Covid",
                "order": 1,
                "unique": true,
                "uuid": "e3e281eb-d4eb-4c95-92a2-f72ff229884d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Floods",
                "order": 7,
                "unique": true,
                "uuid": "5512bd22-4810-461b-8bc2-79e1ccfb4011"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Storm",
                "order": 10,
                "unique": true,
                "uuid": "a4b90e21-95cc-4772-a1ec-c3f474279326"
              }
            ],
            "dataType": "Coded",
            "name": "Type of Disaster",
            "uuid": "b35f7845-dd49-42fc-9131-0f529b1d3ee3"
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
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "CFW-Rahat",
                            "Rahat"
                          ],
                          "answerConceptUuids": [
                            "231a6748-7677-4eb1-8a37-15a0ab207d67",
                            "cbf0805f-aac1-40b9-b78c-1c568b86ef24"
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
          "displayOrder": 18,
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Not Applicable"
              ]
            }
          ],
          "mandatory": true,
          "name": "Type of disaster",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnyAnswerConceptName("231a6748-7677-4eb1-8a37-15a0ab207d67","cbf0805f-aac1-40b9-b78c-1c568b86ef24").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "4fa51133-7b60-48f5-a3fb-abbc4fdd5f0f"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Image",
            "name": "Undertaking Form Photographs",
            "uuid": "a4f35739-40bf-4c8a-98b5-cd8a2ac37913"
          },
          "displayOrder": 19,
          "keyValues": [],
          "mandatory": false,
          "name": "Undertaking Form Photographs",
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

  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnyAnswerConceptName("cbf0805f-aac1-40b9-b78c-1c568b86ef24","9fd9d626-faf7-4833-a3ab-47ec3b4388f6","6404fcaf-31de-4322-9620-c1b958f9c548","971c7a76-d296-4d47-9a90-47a612ceb4ca","54d27687-374e-4988-ad81-e4d26bf02bf3","00e97494-a65b-482b-b919-aab58d52e5b8").matches();
  
  visibility = !(condition11 );
  
  if(visibility){
 
      const currentImage = individual.getObservationReadableValue("a4f35739-40bf-4c8a-98b5-cd8a2ac37913");

  
      if(currentImage && currentImage.length > 0){

          const imagerestriction = {
            "CFW-Rahat":1,
            "CFW-NJPC":1,
            "CFW-S2S":1,
            "Specific Initiative":1,
            "Vaapsi":null,
            "CFW":1,
            "NJPC":null,
            "S2S":null,
            "Rahat":null  
          };    

          const initiative = individual.getObservationReadableValue("Type of Initiative");
          
          const restrictionLength = imagerestriction[initiative];

          if(restrictionLength && currentImage.length > restrictionLength){
            validationErrors.push(`you can select max ${restrictionLength} photographs`);
          }    
          
      }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);

},
          "type": "MultiSelect",
          "uuid": "830811be-5f73-4ff3-b717-864f1e2f1da4"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Families",
                "order": 0,
                "uuid": "15707d6a-47f0-430e-a43f-0ced5205e05a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Individuals",
                "order": 1,
                "uuid": "495f1001-01c9-4057-ac84-8b003d35f48a"
              }
            ],
            "dataType": "Coded",
            "name": "Distributed to",
            "uuid": "ef952d55-f879-4c34-99e2-722c680ed2e2"
          },
          "displayOrder": 20,
          "keyValues": [],
          "mandatory": true,
          "name": "Distributed to",
          "type": "SingleSelect",
          "uuid": "bd8f76e5-9f58-4b16-809f-721f0041bd6a",
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
          "displayOrder": 21,
          "keyValues": [],
          "mandatory": false,
          "name": "Photograph",
          "type": "SingleSelect",
          "uuid": "5df3d936-3836-4017-88e7-501f79997e89",
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
                "value": "639605f9-a202-48dd-b42f-082dc2d172ff"
              },
              {
                "key": "encounterScope",
                "value": "Within Subject"
              },
              {
                "key": "encounterIdentifier",
                "value": "{Type of Initiative} {Activity sub type} {Location}-{Mohalla / Area}[{Activity Start Date} to {Activity End Date}]"
              }
            ],
            "name": "Activities Done (voided~220049)",
            "uuid": "c8dcffcf-a58a-4b0d-85cb-0d8c8d0dcfb2",
            "voided": true
          },
          "displayOrder": 22,
          "keyValues": [],
          "mandatory": false,
          "name": "Activities Done",
          "rule" : 
({ params, imports }) => {
    const encounter = params.entity;
    const formElement = params.formElement;
    const _ = imports.lodash;
    const activities = _.chain(encounter.individual.getEncounters(true))
        .map(_.identity)
        .filter(enc => enc.encounterType.name === 'Activity')
        .value();
    const visibility = activities.length > 0;

    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null, [], []);
},
          "type": "MultiSelect",
          "uuid": "12ae8c0e-4290-4516-9cd7-0c9f2bafb476",
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
          "displayOrder": 23,
          "keyValues": [],
          "mandatory": true,
          "name": "Village",
          "type": "SingleSelect",
          "uuid": "fae4b2c8-0c6b-4cce-8b2c-d4dbfc88456e",
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
          "displayOrder": 24,
          "keyValues": [],
          "mandatory": true,
          "name": "Village",
          "type": "SingleSelect",
          "uuid": "761d739c-69da-4859-a143-c05255c495ec",
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
                "name": "Devdasi Community",
                "order": 3,
                "uuid": "218a5dfb-0a0d-40b6-9a75-ee7a79623454"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ragpickers",
                "order": 10,
                "uuid": "27818169-2925-4895-b4ea-6cc30cedc5b0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Widows",
                "order": 17,
                "uuid": "e0c9a937-415b-4bcc-be63-e7a41fa3c0d6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Fishery Community",
                "order": 6,
                "uuid": "3b2e8baf-a7aa-4969-b6fe-0027e4343e25"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Third gender",
                "order": 14,
                "uuid": "81e83f81-0372-425a-b96f-c012ebe0b5b0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Mentally Challenged",
                "order": 5,
                "uuid": "c40880c6-cac6-4fd8-b30c-395f532d0a9c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tea garden workers",
                "order": 13,
                "uuid": "0640170e-b58f-4aac-a30c-01f5ad908a0a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Sex Workers",
                "order": 12,
                "uuid": "c913f919-19bb-4789-948f-1ce239452da2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tribal community",
                "order": 15,
                "uuid": "83d940c4-43c4-4f06-82d8-d4315b884617"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "PWD",
                "order": 4,
                "uuid": "dc6278fa-b9f5-457d-b5a4-807189ac26e6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Agricultural Related",
                "order": 0,
                "uuid": "84adcd3a-c177-418e-88ea-ca3a1cdb56f5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Weavers",
                "order": 16,
                "uuid": "95867a1b-bb19-469e-b21c-313016f3725d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Senior Citizens",
                "order": 11,
                "uuid": "b4f90cb7-1cd7-4f72-aba0-49f961fc27ea"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "HIV affected",
                "order": 8,
                "uuid": "8df338a9-de53-4c13-8dd5-b869c3d45f2d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Artisans",
                "order": 1,
                "uuid": "73d1cedb-66f4-425b-9da4-7b22e87df967"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Daily Wagers",
                "order": 2,
                "uuid": "a45cf0ac-7200-49a2-be31-a7317aaa46b6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Leprosy affected",
                "order": 9,
                "uuid": "4af95ec9-9da1-4367-a2fa-2a8392822cc8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Health Workers and Sweepers",
                "order": 7,
                "uuid": "024b3031-b7f3-4441-9ae0-95bfc4c2f853"
              }
            ],
            "dataType": "Coded",
            "name": "Target community (voided~207382)",
            "uuid": "ac3b21a6-cf77-4e9a-81c7-7f7f65e795c6",
            "voided": true
          },
          "displayOrder": 25,
          "keyValues": [],
          "mandatory": true,
          "name": "Target community",
          "type": "SingleSelect",
          "uuid": "07da2db6-43b6-4be1-b7b2-28ad9427088c",
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
                "value": "639605f9-a202-48dd-b42f-082dc2d172ff"
              },
              {
                "key": "encounterScope",
                "value": "Within Subject"
              },
              {
                "key": "encounterIdentifier",
                "value": "{Type of Initiative} {Activity sub type} {Location}-{Mohalla / Area}[{Activity Start Date} to {Activity End Date}]"
              }
            ],
            "name": "Activities Done (voided~220049)",
            "uuid": "c8dcffcf-a58a-4b0d-85cb-0d8c8d0dcfb2",
            "voided": true
          },
          "displayOrder": 26,
          "keyValues": [],
          "mandatory": true,
          "name": "Activities done",
          "type": "MultiSelect",
          "uuid": "2780aa51-f645-42fa-919a-d376a7bc7247",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "POC ID",
            "uuid": "72fb3bcf-c852-4fa6-a95d-6446bc7018d1"
          },
          "displayOrder": 27,
          "keyValues": [],
          "mandatory": false,
          "name": "POC ID",
          "type": "SingleSelect",
          "uuid": "858f1d70-c8d3-4ad7-87b1-de066b8cda4c",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Image",
            "name": "Distribution Images",
            "uuid": "1c4eb3f2-4d1e-4618-aaae-74475c5d8e08"
          },
          "displayOrder": 28,
          "keyValues": [
            {
              "key": "imageQuality",
              "value": 1
            }
          ],
          "mandatory": false,
          "name": "Distribution Images",
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
  
 
  const currentImage = individual.getObservationReadableValue("1c4eb3f2-4d1e-4618-aaae-74475c5d8e08");
  
  if(currentImage && currentImage.length > 0){

      const imagerestriction = {
        "CFW-Rahat":2,
        "CFW-NJPC":2,
        "CFW-S2S":2,
        "Specific Initiative":2,
        "Vaapsi":2,
        "CFW":2,
        "NJPC":2,
        "S2S":2,
        "Rahat":3  
      };    

      const initiative = individual.getObservationReadableValue("Type of Initiative");
      
      const restrictionLength = imagerestriction[initiative];

      if(restrictionLength && currentImage.length > restrictionLength){
        validationErrors.push(`you can select max ${restrictionLength} photographs`);
      }

      
      
   }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);

},
          "type": "MultiSelect",
          "uuid": "bd9198f9-d029-4dc7-9f8b-3cf279471fbb"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Image",
            "name": "Receiver List Photographs",
            "uuid": "4c1bc9d0-5a23-4cd5-8849-e3e99ed496ee"
          },
          "displayOrder": 29,
          "keyValues": [],
          "mandatory": false,
          "name": "Receiver List Photographs",
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
  
 
  const currentImage = individual.getObservationReadableValue("Receiver List Photographs");
  
  if(currentImage && currentImage.length > 0){

      const imagerestriction = {
        "CFW-Rahat":null,
        "CFW-NJPC":null,
        "CFW-S2S":null,
        "Specific Initiative":null,
        "Vaapsi":null,
        "CFW":null,
        "NJPC":null,
        "S2S":1,
        "Rahat":null
      };    

      const initiative = individual.getObservationReadableValue("Type of Initiative");
      
      const restrictionLength = imagerestriction[initiative];

      if(restrictionLength && currentImage.length > restrictionLength){
        validationErrors.push(`you can select max ${restrictionLength} photographs`);
      }

      
      
   }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);

},
          "type": "MultiSelect",
          "uuid": "ac153aa4-f939-4934-a17c-7204a4d189af"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Remarks",
            "uuid": "e132e4fe-7c7a-4612-b086-426b9f74147b"
          },
          "displayOrder": 30,
          "keyValues": [],
          "mandatory": false,
          "name": "Remarks",
          "type": "SingleSelect",
          "uuid": "1c39a557-4302-4e2d-a768-1b503cbb6233",
          "voided": true
        }
      ],
      "name": "Distribution Related Details",
      "timed": false,
      "uuid": "5e7ffcbc-7f78-4411-aa05-474046f03967"
    },
    {
      "display": "Distribution details",
      "displayOrder": 7,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Families",
                "order": 0,
                "uuid": "15707d6a-47f0-430e-a43f-0ced5205e05a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Individuals",
                "order": 1,
                "uuid": "495f1001-01c9-4057-ac84-8b003d35f48a"
              }
            ],
            "dataType": "Coded",
            "name": "Distributed to",
            "uuid": "ef952d55-f879-4c34-99e2-722c680ed2e2"
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
                            "Specific Initiative"
                          ],
                          "answerConceptUuids": [
                            "54d27687-374e-4988-ad81-e4d26bf02bf3"
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
          "name": "Distributed to",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptNameOtherThan("54d27687-374e-4988-ad81-e4d26bf02bf3").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "7d68db9b-9091-4d57-bc71-69238720648a",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Subject",
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "07df088a-7924-461d-9a9b-24a29d43813b"
              }
            ],
            "name": "Inventory Id",
            "uuid": "ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Implementation Inventory Id",
          "type": "SingleSelect",
          "uuid": "8fc3474b-ea50-46c3-92c8-e5cf27d7f56c",
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
                "name": "Contributed item",
                "order": 0,
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Contributed track",
                "order": 1,
                "uuid": "6f6eb1de-88c4-4df2-a8ae-997a339a78c5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Goonj product",
                "order": 2,
                "uuid": "73e4cab9-b0d5-49a8-9cf2-c42f41523143"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Purchased item",
                "order": 5,
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Bulk Material",
                "order": 3,
                "uuid": "11c11e55-7604-4f38-9f4f-3560e116e76e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kit",
                "order": 4,
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624"
              }
            ],
            "dataType": "Coded",
            "name": "Type Of Material",
            "uuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e"
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Type Of Material",
          "type": "SingleSelect",
          "uuid": "277aa444-fe37-4f29-a6db-6c755fd67af1",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of distributions",
            "uuid": "663f2d2e-4a9a-4b3c-a421-d4939a0b700e"
          },
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of distributions",
          "type": "SingleSelect",
          "uuid": "0b9d3e6e-08a3-4a51-8f3e-9fac28a955b1",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Quantity",
            "uuid": "bf591bee-f3a5-4481-9b01-ab40ca01c8b4"
          },
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": true,
          "name": "Quantity",
          "type": "SingleSelect",
          "uuid": "10da4c22-9288-4a31-9f6f-96be44aa6079",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Unit",
            "uuid": "384789ec-1f69-4407-932c-9451d4e05a51"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "mandatory": false,
          "name": "Unit",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 || condition21 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "931368b9-51bb-49c7-a393-cc8e88fa73a6",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Subject",
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "07d0e5b8-0dad-4469-9623-10278261f829"
              }
            ],
            "name": "Activities Done",
            "uuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4"
          },
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": false,
          "name": "Activities Done",
          "type": "SingleSelect",
          "uuid": "4361d1bc-0acf-4b51-a403-e527b485e45d",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of persons",
            "uuid": "083a8bdd-bc58-46a2-a056-06a10e48088a"
          },
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of persons",
          "type": "SingleSelect",
          "uuid": "534fd454-a325-4a8d-a184-262812c809ae",
          "voided": true
        }
      ],
      "name": "Distribution details",
      "timed": false,
      "uuid": "bb1806c9-1fe6-4077-bc38-6573ae9442be",
      "voided": true
    },
    {
      "display": "Inventory details",
      "displayOrder": 8,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "QuestionGroup",
            "name": "Inventory details",
            "uuid": "bafb80ac-6088-4649-8ed3-0501e1296c6e"
          },
          "displayOrder": 1,
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "mandatory": false,
          "name": "Inventory details",
          "type": "SingleSelect",
          "uuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "QuestionGroup",
            "name": "Activity details",
            "uuid": "3fb0d2c5-0210-49be-a31c-a6a134131af3"
          },
          "displayOrder": 2,
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "mandatory": false,
          "name": "Activity details",
          "type": "SingleSelect",
          "uuid": "b642c503-b98f-45e0-8155-83391171f623",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Subject",
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "07d0e5b8-0dad-4469-9623-10278261f829"
              }
            ],
            "name": "Activities Done",
            "uuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4"
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": false,
          "name": "Activities Done",
          "parentFormElementUuid": "b642c503-b98f-45e0-8155-83391171f623",
          "type": "SingleSelect",
          "uuid": "3cf200c1-b284-4521-acf1-15d07a863326",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of persons",
            "uuid": "083a8bdd-bc58-46a2-a056-06a10e48088a"
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
                          "conceptDataType": "Subject",
                          "conceptName": "Activities Done",
                          "conceptUuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
                          "parentConceptUuid": "3fb0d2c5-0210-49be-a31c-a6a134131af3",
                          "scope": "registration",
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
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of persons",
          "parentFormElementUuid": "b642c503-b98f-45e0-8155-83391171f623",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4", "3fb0d2c5-0210-49be-a31c-a6a134131af3", params.questionGroupIndex).defined.matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "311dd907-49cb-4379-ab95-2224e8186aa9",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Subject",
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "07df088a-7924-461d-9a9b-24a29d43813b"
              }
            ],
            "name": "Inventory Id",
            "uuid": "ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad"
          },
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": true,
          "name": "Implementation Inventory Id",
          "parentFormElementUuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
          "type": "SingleSelect",
          "uuid": "7db346ab-4404-47c4-bfb2-9bd33ee119e8",
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
                "name": "Contributed item",
                "order": 0,
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Contributed track",
                "order": 1,
                "uuid": "6f6eb1de-88c4-4df2-a8ae-997a339a78c5"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Goonj product",
                "order": 2,
                "uuid": "73e4cab9-b0d5-49a8-9cf2-c42f41523143"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Purchased item",
                "order": 5,
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Bulk Material",
                "order": 3,
                "uuid": "11c11e55-7604-4f38-9f4f-3560e116e76e"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kit",
                "order": 4,
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624"
              }
            ],
            "dataType": "Coded",
            "name": "Type Of Material",
            "uuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e"
          },
          "displayOrder": 6,
          "keyValues": [],
          "mandatory": true,
          "name": "Type Of Material",
          "parentFormElementUuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
          "type": "SingleSelect",
          "uuid": "f0e8a3aa-1f8e-441a-a854-1eb15425bab7",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of distributions",
            "uuid": "663f2d2e-4a9a-4b3c-a421-d4939a0b700e"
          },
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of distributions",
          "parentFormElementUuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
          "type": "SingleSelect",
          "uuid": "4f7cd9c8-dd0a-4dc5-b10b-fb9eb1c59bd5",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Quantity",
            "uuid": "bf591bee-f3a5-4481-9b01-ab40ca01c8b4"
          },
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": true,
          "name": "Quantity",
          "parentFormElementUuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
          "type": "SingleSelect",
          "uuid": "b8cd03a7-ee35-423c-8d68-73149c2fb0af",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Unit",
            "uuid": "384789ec-1f69-4407-932c-9451d4e05a51"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "bafb80ac-6088-4649-8ed3-0501e1296c6e",
                          "scope": "questionGroupRegistration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "bafb80ac-6088-4649-8ed3-0501e1296c6e",
                          "scope": "questionGroupRegistration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "name": "Unit",
          "parentFormElementUuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 || condition21 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "32df610e-7ddf-4fe3-8664-e8df8328e155",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Subject",
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "07d0e5b8-0dad-4469-9623-10278261f829"
              }
            ],
            "name": "Activities Done",
            "uuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4"
          },
          "displayOrder": 10,
          "keyValues": [],
          "mandatory": false,
          "name": "Activities Done",
          "parentFormElementUuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
          "type": "SingleSelect",
          "uuid": "d8d55a16-d659-448d-94ca-39ebc68445a4",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of persons",
            "uuid": "083a8bdd-bc58-46a2-a056-06a10e48088a"
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
                          "conceptDataType": "Subject",
                          "conceptName": "Activities Done",
                          "conceptUuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
                          "parentConceptUuid": "bafb80ac-6088-4649-8ed3-0501e1296c6e",
                          "scope": "questionGroupRegistration",
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
          "displayOrder": 11,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of persons",
          "parentFormElementUuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).defined.matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "d12bdd4b-47cc-45f9-8a6a-c5d1c51ab899",
          "voided": true
        }
      ],
      "name": "Inventory details",
      "timed": false,
      "uuid": "75cb0ad4-a6c0-4a95-b4f4-4bbfa78dabcc",
      "voided": true
    },
    {
      "display": "Activity details",
      "displayOrder": 9,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "QuestionGroup",
            "name": "Activity details",
            "uuid": "3fb0d2c5-0210-49be-a31c-a6a134131af3"
          },
          "displayOrder": 1,
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "mandatory": false,
          "name": "Activity details",
          "type": "SingleSelect",
          "uuid": "4b2a46ca-ded8-493b-b1c3-8918ab2b4be8",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Subject",
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "07d0e5b8-0dad-4469-9623-10278261f829"
              }
            ],
            "name": "Activities Done",
            "uuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": false,
          "name": "Activities Done",
          "parentFormElementUuid": "4b2a46ca-ded8-493b-b1c3-8918ab2b4be8",
          "type": "SingleSelect",
          "uuid": "9f86a069-95d4-4c38-8fe4-ad14aae6b82e",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of persons",
            "uuid": "083a8bdd-bc58-46a2-a056-06a10e48088a"
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
                          "conceptDataType": "Subject",
                          "conceptName": "Activities Done",
                          "conceptUuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
                          "parentConceptUuid": "3fb0d2c5-0210-49be-a31c-a6a134131af3",
                          "scope": "registration",
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
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of persons",
          "parentFormElementUuid": "4b2a46ca-ded8-493b-b1c3-8918ab2b4be8",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4", "3fb0d2c5-0210-49be-a31c-a6a134131af3", params.questionGroupIndex).defined.matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "353b2f3d-c684-4bfd-bbd9-ef07a3f981b2",
          "voided": true
        }
      ],
      "name": "Activity details",
      "timed": false,
      "uuid": "414af216-55a4-40c7-a2a5-5b2e96b46122",
      "voided": true
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
                      "conceptName": "Type of Initiative",
                      "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                      "scope": "registration",
                      "type": "concept"
                    },
                    "operator": "containsAnswerConceptName",
                    "rhs": {
                      "answerConceptNames": [
                        "Vaapsi"
                      ],
                      "answerConceptUuids": [
                        "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
      "display": "Survey detail",
      "displayOrder": 10,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Surveyed by",
            "uuid": "aa0bff6a-3a89-498f-bdcf-5487ebe9c89c"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Surveyed by",
          "type": "SingleSelect",
          "uuid": "118c4ad2-abe5-4139-ba26-816ca0bb4826"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Monitored by / Distributor",
            "uuid": "7b372e17-185c-4782-b5da-b3fb58dc7bf2"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Monitored by / Distributor",
          "type": "SingleSelect",
          "uuid": "5a98b58a-0882-4800-9769-addd052b0118"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Approved / Verified by",
            "uuid": "0c6ddfaf-e7e9-4f7a-ba73-ca60a77045b6"
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Approved / Verified by",
          "type": "SingleSelect",
          "uuid": "812bfe80-22fa-4fab-a1cf-66f4c6010974"
        }
      ],
      "name": "Survey detail",
      "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
        visibility = condition11 ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "timed": false,
      "uuid": "b4453903-af4b-4974-a1c3-c2fa72436329"
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
                      "conceptName": "Type of Initiative",
                      "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                      "scope": "registration",
                      "type": "concept"
                    },
                    "operator": "containsAnswerConceptName",
                    "rhs": {
                      "answerConceptNames": [
                        "Vaapsi"
                      ],
                      "answerConceptUuids": [
                        "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
      "display": "Recommended by",
      "displayOrder": 11,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "External",
                "order": 1,
                "uuid": "b11b31da-323d-47a4-97a7-d0790dc9e782"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Team",
                "order": 0,
                "uuid": "4a9e46f1-47f0-47a2-b3e7-47d8957129ce"
              }
            ],
            "dataType": "Coded",
            "name": "Team or external",
            "uuid": "0b3b7c82-ad9e-4521-8900-a611a29dd242"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Team or external",
          "type": "SingleSelect",
          "uuid": "b9e6bc1a-71ed-4602-a2e3-274a31e8cfb5"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Name of POC",
            "uuid": "1dc4c483-3497-47d2-8088-507fe7f08ec5"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Name of POC",
          "type": "SingleSelect",
          "uuid": "d4f7bf7b-681f-47d5-9a2a-21947e19ccb1"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "PhoneNumber",
            "keyValues": [
              {
                "key": "verifyPhoneNumber",
                "value": false
              }
            ],
            "name": "POC Contact No",
            "uuid": "e19303df-8e54-4d4c-8db9-6f062f894b1e"
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "POC Contact No",
          "type": "SingleSelect",
          "uuid": "81bdb115-42a0-4475-8081-fd6e3db6c5ee"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Individual",
                "order": 0,
                "uuid": "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Group",
                "order": 1,
                "uuid": "f8ae2650-5c53-43da-b20e-41f3a08b4ffc"
              }
            ],
            "dataType": "Coded",
            "name": "Reached to",
            "uuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a"
          },
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "Reached to",
          "type": "SingleSelect",
          "uuid": "6f67bb01-b854-41d0-b059-c06a5cbff4b8"
        }
      ],
      "name": "Recommended by",
      "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
        visibility = condition11 ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "timed": false,
      "uuid": "76d8dbe2-5085-43be-94a7-a04cc589358e"
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
                      "conceptName": "Type of Initiative",
                      "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                      "scope": "registration",
                      "type": "concept"
                    },
                    "operator": "containsAnswerConceptName",
                    "rhs": {
                      "answerConceptNames": [
                        "Vaapsi"
                      ],
                      "answerConceptUuids": [
                        "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
      "display": "Reached to details",
      "displayOrder": 12,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Name",
            "uuid": "48d5d2f9-9f02-43d7-9869-781a06346b12"
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "name": "Name",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "9793c349-d9d4-4ba8-9cd6-c2d3cf257a73"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Male",
                "order": 0,
                "uuid": "8674b5ec-b08a-4c6d-acb0-989bc7344dfd"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Other",
                "order": 2,
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Female",
                "order": 1,
                "uuid": "e26afb12-23b7-4762-a884-3f9690e28ab6"
              }
            ],
            "dataType": "Coded",
            "name": "Gender",
            "uuid": "4b8c5d72-1ed5-45a2-8b51-2becf9e1bff9"
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "name": "Gender",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "ded08124-d8fd-4a48-9e65-fb3d10c22963"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Father/ Mother Name",
            "uuid": "3b7f6a6b-c009-4eb2-9ebc-bcb23d0675a7"
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "name": "Father/ Mother Name",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "1303a56c-ec28-425b-a73f-4bdaa8d3c536"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Age",
            "uuid": "f1664abe-737b-4bba-b82f-f76d714e656f"
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "Age",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "1b5f703f-3ccd-416c-95c0-4ed46bd94c2d"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "PhoneNumber",
            "keyValues": [
              {
                "key": "verifyPhoneNumber",
                "value": false
              }
            ],
            "name": "Phone Number",
            "uuid": "cb34f1a5-12e8-49cc-8153-dd6be27fafe5"
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "name": "Phone Number",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "9d36ec0a-61b2-42e7-b55c-818e317039ab"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Present Occupation",
            "uuid": "1b557e4e-60df-45cc-8cf8-007c9f03d461"
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "name": "Present Occupation",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "3dbe2158-cca1-4487-9982-ce96856cefde"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of family members",
            "uuid": "765e1084-be2a-4d45-afde-bb9c22f414ad"
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "name": "Number of family members",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "d36c6cd5-8590-4a3e-aac9-80ce2821e220"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Monthly Income",
            "uuid": "f06ee72a-9143-4002-a01c-8d92df43c208"
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": true,
          "name": "Monthly Income",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "e1d904d2-a393-43fe-947c-0cdc53c2282f"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Group’s Name",
            "uuid": "286890be-239b-49a1-ad87-4047bf89116c"
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Group"
                          ],
                          "answerConceptUuids": [
                            "f8ae2650-5c53-43da-b20e-41f3a08b4ffc"
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
          "name": "Group’s Name",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("f8ae2650-5c53-43da-b20e-41f3a08b4ffc").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "8d096b47-e903-444e-9c21-a4552a80520d"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Total Number of Receivers",
            "uuid": "1c0e2adc-1188-4d20-8842-073b82a46953"
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Group"
                          ],
                          "answerConceptUuids": [
                            "f8ae2650-5c53-43da-b20e-41f3a08b4ffc"
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
          "displayOrder": 10,
          "keyValues": [],
          "mandatory": true,
          "name": "Total Number of Receivers",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("f8ae2650-5c53-43da-b20e-41f3a08b4ffc").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "a18a035c-a785-441b-9834-332e4156818a",
          "voided": true
        }
      ],
      "name": "Reached to details",
      "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
        visibility = condition11 ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "timed": false,
      "uuid": "671cbaf3-c15a-4da1-9b7d-948cfa0e95ad"
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
                      "conceptName": "Type of Initiative",
                      "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                      "scope": "registration",
                      "type": "concept"
                    },
                    "operator": "containsAnswerConceptName",
                    "rhs": {
                      "answerConceptNames": [
                        "Vaapsi"
                      ],
                      "answerConceptUuids": [
                        "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
      "display": "Feedback details",
      "displayOrder": 13,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Any Other Document Submitted",
            "uuid": "3829a421-81ca-4488-a8cc-33e78cfee972"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Any Other Document Submitted",
          "type": "SingleSelect",
          "uuid": "c8f83138-d8b3-47fe-b15e-e8cef8049f17"
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
            "name": "Reports Cross Checked",
            "uuid": "02226c59-2e8f-4f00-b977-4f68e95856c1"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Reports Cross Checked",
          "type": "SingleSelect",
          "uuid": "3cb49290-f115-4ffb-ae43-761ece05624e",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Remarks",
            "uuid": "e132e4fe-7c7a-4612-b086-426b9f74147b"
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Remarks",
          "type": "SingleSelect",
          "uuid": "3b87d7a5-5c2f-4f4d-bcbf-2f1df722463c",
          "voided": true
        }
      ],
      "name": "Feedback details",
      "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
        visibility = condition11 ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "timed": false,
      "uuid": "191dfed7-2d49-4753-b106-b6ea4b325713"
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
                      "conceptName": "Type of Initiative",
                      "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                      "scope": "registration",
                      "type": "concept"
                    },
                    "operator": "containsAnswerConceptName",
                    "rhs": {
                      "answerConceptNames": [
                        "Specific Initiative"
                      ],
                      "answerConceptUuids": [
                        "54d27687-374e-4988-ad81-e4d26bf02bf3"
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
      "display": "Specific Initiative details",
      "displayOrder": 14,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Centre’s Name",
            "uuid": "fb06de30-dd88-4c08-99e4-56a927fb55ef"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Centre’s Name",
          "type": "SingleSelect",
          "uuid": "ed12829e-970b-4d6b-baee-b6527a65ad7b"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Share a Brief Provided Material",
            "uuid": "9c01290a-6c88-43c9-b558-a7731df67212"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Share a Brief Provided Material",
          "type": "SingleSelect",
          "uuid": "0ebfad40-237f-402f-ba24-6955d5d00ee7"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "How the Material Makes a Difference",
            "uuid": "dbb0e4fe-78a5-46de-b2bf-b2f1525268e1"
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "How the Material Makes a Difference",
          "type": "SingleSelect",
          "uuid": "bceda7e2-1946-4280-96f2-2d4eb076a6bc"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Isolation center",
                "order": 17,
                "uuid": "056f8b4f-c97c-4e25-aaf6-d9fc6299fc9b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Center for Differently Abled",
                "order": 2,
                "uuid": "ad251285-abf5-49f7-a405-9eb95349a3db"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "None",
                "order": 18,
                "uuid": "ba835221-04c0-4e55-a08f-e6e25bb6719c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Children's Home",
                "order": 3,
                "uuid": "cef3f7af-f0ed-4df5-a6f0-faebd2d6d6aa"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Night Shelter",
                "order": 10,
                "uuid": "540e04e5-d02b-4037-b2b5-8be83279cbaa"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any Other",
                "order": 20,
                "uuid": "6445b3f0-04c5-4619-aa13-51bd5e8634ca"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Old Age Home",
                "order": 12,
                "uuid": "8f842dae-8596-4286-80c4-b054e6c21a79"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Community Kitchen",
                "order": 4,
                "uuid": "67bba085-1712-4a2a-9154-ee6c55c62d31"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Office support",
                "order": 11,
                "uuid": "1d32a2c1-bf51-4498-9b4a-adc954e27182"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Study / Computer Center / Vocational Institute",
                "order": 16,
                "uuid": "9c5f66af-a093-4de4-a9e9-47e5194e6ae1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Animal Welfare Centers",
                "order": 1,
                "uuid": "dcc2bb17-ea3b-4a36-9325-0304fce3d6ea"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Library",
                "order": 8,
                "uuid": "443a0184-64e8-4d07-af2a-6c2af26551c2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Health Center / Camps",
                "order": 6,
                "uuid": "74b16b6d-fb76-4734-9555-5b6df5784575"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "School",
                "order": 13,
                "uuid": "353a5c77-6b72-4aac-8c49-c2fdd0abad10"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Any other",
                "order": 19,
                "uuid": "f903963d-1c98-4f85-827c-c15a0930b845"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Maternity Homes",
                "order": 9,
                "uuid": "abc61217-d875-46f7-85f4-bb49eb324279"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "General - Village or urban locality residents",
                "order": 5,
                "uuid": "bbfff794-f82f-4e24-9dc3-aaa214b41169"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Individual Support",
                "order": 7,
                "uuid": "04348592-77a1-4ddb-92af-7c1d9e85809a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Anganwadi Center",
                "order": 0,
                "uuid": "82e8ad09-8323-4eb5-8c36-6c5665581fab"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Stitching Center",
                "order": 15,
                "uuid": "30825219-fc97-4338-8ab5-15542d6c3ace"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Sport center",
                "order": 14,
                "uuid": "f574a8dd-8d73-4e93-bd10-d11aafc8cf1f"
              }
            ],
            "dataType": "Coded",
            "name": "Material Given for",
            "uuid": "e471c483-2cec-484f-900b-73aef686e2f3"
          },
          "displayOrder": 4,
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "None"
              ]
            }
          ],
          "mandatory": true,
          "name": "Material Given for",
          "type": "SingleSelect",
          "uuid": "83e805ce-a206-4171-a952-2cda6fae0db6"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Details for Any other (SI)",
            "uuid": "fc4a9ce4-fe0e-4067-b848-e0dd9d6be2c7"
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
                          "conceptName": "Material Given for",
                          "conceptUuid": "e471c483-2cec-484f-900b-73aef686e2f3",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Any Other"
                          ],
                          "answerConceptUuids": [
                            "6445b3f0-04c5-4619-aa13-51bd5e8634ca"
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
          "name": "Details for Any other (SI)",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("e471c483-2cec-484f-900b-73aef686e2f3").containsAnswerConceptName("6445b3f0-04c5-4619-aa13-51bd5e8634ca").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "537ed8d0-1cf9-4fc5-a5c2-64f1077e2446"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Total Number of Families Reached",
            "uuid": "d435582d-033a-4253-a4da-fda29662df6e"
          },
          "displayOrder": 6,
          "keyValues": [],
          "mandatory": true,
          "name": "Total Number of Families Reached",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d435582d-033a-4253-a4da-fda29662df6e").lessThanOrEqualTo(0).matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c20a7fad-7129-4bc9-bf2a-d89803063561").lessThanOrEqualTo(0).matches();
  
  const isIntegerCheck = (value) => {
    return /^-?\\d+$/.test(value);
  };
  
  let noOfFamilyReached = individual.getObservationValue("d435582d-033a-4253-a4da-fda29662df6e");

  if(condition11 && condition21 ){
    validationErrors.push("Neither the number of individual reached nor the number of families reached should be 0");  
  }
  
  if (!isIntegerCheck(noOfFamilyReached)) {
    validationErrors.push("Please enter an integer value");
  }
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d435582d-033a-4253-a4da-fda29662df6e").lessThan(0).matches();
  
  if(condition31 ){
    validationErrors.push("Number cannot be negative");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "6abe61aa-f3e2-46ca-b006-5e7e4fa3bdfa"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Total Number of Individuals Reached",
            "uuid": "c20a7fad-7129-4bc9-bf2a-d89803063561"
          },
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": true,
          "name": "Total Number of Individuals Reached",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d435582d-033a-4253-a4da-fda29662df6e").lessThanOrEqualTo(0).matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c20a7fad-7129-4bc9-bf2a-d89803063561").lessThanOrEqualTo(0).matches();
  
  let noOfIndividualsReached = individual.getObservationValue("c20a7fad-7129-4bc9-bf2a-d89803063561");

  const isIntegerCheck = (value) => {
    return /^-?\\d+$/.test(value);
  };
  
  if(condition11 && condition21 ){
    validationErrors.push("Neither the number of individual reached nor the number of families reached should be 0");  
  }
  
  if (!isIntegerCheck(noOfIndividualsReached)) {
    validationErrors.push("Please enter an integer value");
  }
  
    const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c20a7fad-7129-4bc9-bf2a-d89803063561").lessThan(0).matches();
  
  if(condition31 ){
    validationErrors.push("Number cannot be negative");  
}

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "031d19a6-92d7-4cd1-be68-23f5614f2f58"
        }
      ],
      "name": "Specific Initiative details",
      "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("54d27687-374e-4988-ad81-e4d26bf02bf3").matches();
  
        visibility = condition11 ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "timed": false,
      "uuid": "087864e3-d7c1-40ee-af35-c5b0dd438ea1"
    },
    {
      "display": "Inventory details",
      "displayOrder": 15,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "QuestionGroup",
            "name": "Inventory details",
            "uuid": "bafb80ac-6088-4649-8ed3-0501e1296c6e"
          },
          "displayOrder": 1,
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "mandatory": false,
          "name": "Inventory details",
          "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const individualService = params.services.individualService;
    const moment = imports.moment;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    const condition11 = new imports.rulesConfig.RuleCondition({
        individual,
        formElement
    }).when.questionGroupValueInRegistration("ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).defined.matches();
    if (condition11) {
        let groupedObservation = individual.findGroupedObservation('bafb80ac-6088-4649-8ed3-0501e1296c6e');
        let inventoryIds = [];
        groupedObservation.forEach(subArray => {
            let obs = subArray.groupObservations.filter(obj => obj.concept.uuid === "ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad");
            if (obs) {
                obs = obs[0];
                if (obs) {
                    let uuid = obs.valueJSON.answer;                    
                    inventoryIds.push(uuid);
                    let hasDuplicates = inventoryIds.length !== new Set(inventoryIds).size;
                    if (hasDuplicates) {
                        validationErrors.push("The same inventory item cannot be selected again.");
                    }
                                        const dispatchDate = individualService.getSubjectByUUID(uuid).getObservationReadableValue("78f9d6cb-356e-45dc-90d5-216185784fe6");
                                        const distributionDate = moment(individual.getObservationReadableValue("cef5b862-672e-4e94-8ebc-3299a55f416f"));

                    if(dispatchDate && moment(dispatchDate.toISOString()).isAfter(distributionDate)){
                        console.log(`this is error`);
                        validationErrors.push("Inventory received date is after distribution date");
                    }
                }
            }
            // let uuid = subArray.groupObservations.filter(obj => obj.concept.uuid === "ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad")[0]?.valueJSON?.answer;
        });
    }
    console.log('validationErrors',validationErrors);
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "372f3287-e589-4e25-aeb7-2ba4427769ca"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Families",
                "order": 0,
                "uuid": "15707d6a-47f0-430e-a43f-0ced5205e05a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Individuals",
                "order": 1,
                "uuid": "495f1001-01c9-4057-ac84-8b003d35f48a"
              }
            ],
            "dataType": "Coded",
            "name": "Distributed to",
            "uuid": "ef952d55-f879-4c34-99e2-722c680ed2e2"
          },
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": true,
          "name": "Distributed to",
          "parentFormElementUuid": "c18d20b8-e254-425f-b12b-00f3567f6b36",
          "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const individualService = params.services.individualService;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];

    const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).defined.matches();
    visibility = condition11;

     
    if (condition11) {

        let inventoryUUID = individual.findGroupedObservation('bafb80ac-6088-4649-8ed3-0501e1296c6e')[params.questionGroupIndex].findObservationByConceptUUID('ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad').getReadableValue();

        // console.log(`dt params.questionGroupIndex ${params.questionGroupIndex} inventoryUUID`,inventoryUUID);

        if(inventoryUUID) {
            const kitType= individualService.getSubjectByUUID(inventoryUUID).getObservationReadableValue("944cb7a1-a537-4e4f-bd15-74db621abefa"); 
            const subType= individualService.getSubjectByUUID(inventoryUUID).getObservationReadableValue("1b637749-2537-42d5-a5a4-b7e522967855");                    

            // console.log(`dt params.questionGroupIndex ${params.questionGroupIndex} kitType ${kitType} subType ${subType}`);

            if(kitType){
                if(subType && kitType === "CFW" && _.includes(["A","B","C","X"],subType)){
                    _.forEach(["495f1001-01c9-4057-ac84-8b003d35f48a"], (answer) => {
                        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
                        if (answerToSkip) answersToSkip.push(answerToSkip);
                    });                
                }
                else if(kitType === "Other" || kitType === "Vaapsi"){

                }    
                else{
                    _.forEach(["15707d6a-47f0-430e-a43f-0ced5205e05a"], (answer) => {
                        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
                        if (answerToSkip) answersToSkip.push(answerToSkip);
                    });                
                }
            }
                                    
        }
    }

    // let que = individual.findGroupedObservation('bafb80ac-6088-4649-8ed3-0501e1296c6e')[params.questionGroupIndex];
    // if(que){
    //   let obs = que.findObservationByConceptUUID('ef952d55-f879-4c34-99e2-722c680ed2e2');
    //   if(obs && obs.getValue() === value) {
    //      return null;
    //    }   
    // }

    
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "d349cb93-92c8-47a0-a9a0-c54e4c5b210c"
        },
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Families",
                "order": 0,
                "uuid": "15707d6a-47f0-430e-a43f-0ced5205e05a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Individuals",
                "order": 1,
                "uuid": "495f1001-01c9-4057-ac84-8b003d35f48a"
              }
            ],
            "dataType": "Coded",
            "name": "Distributed to",
            "uuid": "ef952d55-f879-4c34-99e2-722c680ed2e2"
          },
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": true,
          "name": "Distributed to",
          "parentFormElementUuid": "c18d20b8-e254-425f-b12b-00f3567f6b36",
          "type": "SingleSelect",
          "uuid": "3eee41a8-e339-4c08-9b42-5b559830a307",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of distributions",
            "uuid": "663f2d2e-4a9a-4b3c-a421-d4939a0b700e"
          },
          "displayOrder": 9,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of distributions",
          "parentFormElementUuid": "c18d20b8-e254-425f-b12b-00f3567f6b36",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const individualService = params.services.individualService;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).defined.matches();
  
  if (condition11) {
    let inventoryUUID = individual.findGroupedObservation('bafb80ac-6088-4649-8ed3-0501e1296c6e')[params.questionGroupIndex].findObservationByConceptUUID('ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad').getReadableValue();
      console.log(`beetween`); 
    let unitUUID = '384789ec-1f69-4407-932c-9451d4e05a51';
    let unit;
    if (inventoryUUID != undefined) {
      unit = individualService.getSubjectByUUID(inventoryUUID).getObservationReadableValue(unitUUID);
    }
    if (unit != undefined) {
      value = unit;
      visibility = true;
    }
  }  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "77f0979a-7259-420a-a790-1b85d1105d22"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Initial Quantity",
            "uuid": "09878916-0c78-43b4-9002-40beb894e089"
          },
          "displayOrder": 11,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Initial Quantity",
          "parentFormElementUuid": "c18d20b8-e254-425f-b12b-00f3567f6b36",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const individualService = params.services.individualService;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).defined.matches();
  
  if (condition11) {
    let inventoryUUID = individual.findGroupedObservation('bafb80ac-6088-4649-8ed3-0501e1296c6e')[params.questionGroupIndex].findObservationByConceptUUID('ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad').getReadableValue();
    let initialQuantityUUID = '09878916-0c78-43b4-9002-40beb894e089';
    if (inventoryUUID != undefined) {
      value = individualService.getSubjectByUUID(inventoryUUID).getObservationReadableValue(initialQuantityUUID);
      visibility = true;
    }
  }  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "cc98b595-8df0-4863-936c-14e8fcfae0a9"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Current Quantity",
            "uuid": "080aca7e-c590-4036-bee7-cf3f77b488aa"
          },
          "displayOrder": 12,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Current Quantity",
          "parentFormElementUuid": "c18d20b8-e254-425f-b12b-00f3567f6b36",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const individualService = params.services.individualService;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).defined.matches();
  
  if (condition11) {
    let inventoryUUID = individual.findGroupedObservation('bafb80ac-6088-4649-8ed3-0501e1296c6e')[params.questionGroupIndex].findObservationByConceptUUID('ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad').getReadableValue();
    let currentQuantityUUID = '080aca7e-c590-4036-bee7-cf3f77b488aa';
    if (inventoryUUID != undefined) {
      value = individualService.getSubjectByUUID(inventoryUUID).getObservationReadableValue(currentQuantityUUID);
      visibility = true;
    }
  }  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "aa222fb8-06ff-478d-80fc-8e64db8ccf77"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Quantity",
            "uuid": "bf591bee-f3a5-4481-9b01-ab40ca01c8b4"
          },
          "displayOrder": 13,
          "keyValues": [],
          "mandatory": true,
          "name": "Quantity",
          "parentFormElementUuid": "c18d20b8-e254-425f-b12b-00f3567f6b36",
          "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const individualService = params.services.individualService;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];

    console.log('params', params);
    const condition11 = new imports.rulesConfig.RuleCondition({
        individual,
        formElement
    }).when.questionGroupValueInRegistration("ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).defined.matches();
    console.log('condition11---->',condition11);
    
    if (condition11) {
    
        let currentRepeatableGroupObservation = individual.findGroupedObservation('bafb80ac-6088-4649-8ed3-0501e1296c6e')[params.questionGroupIndex];
        console.log('currentRepeatableGroupObservation------->',currentRepeatableGroupObservation);
        let inventoryUUID;
        let currentInventoryQuantity = 0;
        let newDistributionQuantity = 0;
        let oldDistributionQuantity = 0;
        let currentInventoryQuantityUUID = '080aca7e-c590-4036-bee7-cf3f77b488aa';

        console.log('currentRepeatableGroupObservation---------',currentRepeatableGroupObservation != undefined);

        if (currentRepeatableGroupObservation != undefined) {
        

            inventoryUUID = currentRepeatableGroupObservation.findObservationByConceptUUID('ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad').getReadableValue();
            let quantityobs = currentRepeatableGroupObservation.findObservationByConceptUUID('bf591bee-f3a5-4481-9b01-ab40ca01c8b4');
            console.log('quantityobs-----',quantityobs);
            if (quantityobs != undefined) {

              newDistributionQuantity = quantityobs.getReadableValue();
            }
        }
        
        console.log('inventoryUUID--------',inventoryUUID);
        if (inventoryUUID != undefined) {
            currentInventoryQuantity = individualService.getSubjectByUUID(inventoryUUID).getObservationReadableValue(currentInventoryQuantityUUID);         
        }
        
        let currentdistributionUUID = individual.uuid;
        let oldDistribution = individualService.getSubjectByUUID(currentdistributionUUID);
        console.log('individualService--------',individualService);
        if (oldDistribution !== undefined) {
        console.log('oldDistribution------',oldDistribution);
        let rpg = oldDistribution.findGroupedObservation('bafb80ac-6088-4649-8ed3-0501e1296c6e')[params.questionGroupIndex];

        console.log('rpg',rpg);
        if(rpg != undefined){
        
          let qutobs = rpg.findObservationByConceptUUID('bf591bee-f3a5-4481-9b01-ab40ca01c8b4');
          
          if(qutobs != undefined){
            oldDistributionQuantity = qutobs.getReadableValue();
          }
          
        }
       
        }
        if(newDistributionQuantity<=0){
          validationErrors.push("Quantity should be greater than zero");
        }   

        if (!Number.isInteger(parseFloat(newDistributionQuantity))) {
            validationErrors.push("Quantity must be an integer. Decimals are not allowed.");
        }

        if (currentInventoryQuantity != undefined && newDistributionQuantity != undefined && oldDistributionQuantity != undefined && (newDistributionQuantity - oldDistributionQuantity)>currentInventoryQuantity) {
            validationErrors.push("Quantity shouldn't be greater than the current quantity plus old quantity");
        }
    }
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "d2a3d328-0775-4cdd-a0b1-f0f6c395341f"
        }
      ],
      "name": "Inventory details",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("7b23c3ff-dafc-4c9e-9395-e5e718d759b1").containsAnswerConceptName("303d5ad1-ffa2-4096-ba7c-a86876ca9d12").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "3649402e-6549-421c-a804-969d036ff36b"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Subject",
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "07d0e5b8-0dad-4469-9623-10278261f829"
              }
            ],
            "name": "Activities Done",
            "uuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4"
          },
          "displayOrder": 4,
          "keyValues": [
            {
              "key": "searchOptions",
              "value": true
            }
          ],
          "mandatory": true,
          "name": "Activities Done",
          "parentFormElementUuid": "3649402e-6549-421c-a804-969d036ff36b",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const individualService = params.services.individualService;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4", "3fb0d2c5-0210-49be-a31c-a6a134131af3", params.questionGroupIndex).defined.matches();
  
  if (condition11) {
        let groupedObservation = individual.findGroupedObservation('3fb0d2c5-0210-49be-a31c-a6a134131af3');
        let inventoryIds = [];
        const addressUUID = individual.lowestAddressLevel.uuid;

        groupedObservation.forEach(subArray => {
            let obs = subArray.groupObservations.filter(obj => obj.concept.uuid === "fba0fa43-307a-4c48-8cbb-552362e7efd4");
            if (obs) {
                obs = obs[0];
                if (obs) {
                    let uuid = obs.valueJSON.answer;
                    inventoryIds.push(uuid);
                    let hasDuplicates = inventoryIds.length !== new Set(inventoryIds).size;
                    if (hasDuplicates) {
                        validationErrors.push("The same activity cannot be selected again.");
                    }else{
                        if(individualService.getSubjectByUUID(uuid).lowestAddressLevel.uuid != addressUUID){
                            validationErrors.push("Geography not matching");
                        }
                        
                    }
                }
            }
        });
    }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "938ea5da-f14e-47e0-ab7f-4cd9b5581715"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Total participants in the activity.",
            "uuid": "9d2953c6-1f95-49c4-8b63-91be6628b9f7"
          },
          "displayOrder": 5,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Total participants in the activity.",
          "parentFormElementUuid": "3649402e-6549-421c-a804-969d036ff36b",
          "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const individualService = params.services.individualService;
    const _ = imports.lodash;
    let visibility = false;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4", "3fb0d2c5-0210-49be-a31c-a6a134131af3", params.questionGroupIndex).defined.matches();
    if (condition11) {
        let currentRepeatableGroupObservation = individual.findGroupedObservation('3fb0d2c5-0210-49be-a31c-a6a134131af3')[params.questionGroupIndex];
        
        let activityUUID = currentRepeatableGroupObservation.findObservationByConceptUUID('fba0fa43-307a-4c48-8cbb-552362e7efd4').getReadableValue();

        let typeOfInitiative = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb');
                        
        if (typeOfInitiative === 'S2S') {
          value = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('f5cc0324-9b14-42d8-b704-8cb2c5592a48');
          visibility = true;
        }
        else {
          let numberOfMaleParticipants = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
          let numberOfFemaleParticipants = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
          let numberOfOtherParticipants = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
          // let numberOfParticipantsObs = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('1157c7c8-9f27-410d-9115-ef36191fba06');
          // value = numberOfParticipantsObs.flatMap(obj => Object.values(obj))
          //  .reduce((sum, num)=> sum + num, 0);
          value = numberOfMaleParticipants + numberOfFemaleParticipants + numberOfOtherParticipants;
          visibility = true;
        }
    }
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "47d82886-785b-4815-b50c-c230f8dc051e"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of persons",
            "uuid": "083a8bdd-bc58-46a2-a056-06a10e48088a"
          },
          "displayOrder": 6,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of persons",
          "parentFormElementUuid": "3649402e-6549-421c-a804-969d036ff36b",
          "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const individualService = params.services.individualService;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4", "3fb0d2c5-0210-49be-a31c-a6a134131af3", params.questionGroupIndex).defined.matches();
    if (condition11) {
        let currentRepeatableGroupObservation = individual.findGroupedObservation('3fb0d2c5-0210-49be-a31c-a6a134131af3')[params.questionGroupIndex];
        
        let activityUUID = currentRepeatableGroupObservation.findObservationByConceptUUID('fba0fa43-307a-4c48-8cbb-552362e7efd4').getReadableValue();

        let typeOfInitiative = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb');
                
        let numberOfParticipants;
        
        if (typeOfInitiative === 'S2S') {
          numberOfParticipants = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('f5cc0324-9b14-42d8-b704-8cb2c5592a48');
        }
        else {
          // let numberOfParticipantsObs = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('1157c7c8-9f27-410d-9115-ef36191fba06');
          // numberOfParticipants = numberOfParticipantsObs.flatMap(obj => Object.values(obj))
          //  .reduce((sum, num)=> sum + num, 0);
          let numberOfMaleParticipants = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
          let numberOfFemaleParticipants = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
          let numberOfOtherParticipants = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
          numberOfParticipants = numberOfMaleParticipants + numberOfFemaleParticipants + numberOfOtherParticipants;
        }
        let numberOfPersonsSelectedObs = currentRepeatableGroupObservation.findObservationByConceptUUID('083a8bdd-bc58-46a2-a056-06a10e48088a');
        let numberOfPersonsSelected;
        if (numberOfPersonsSelectedObs != undefined) {
          numberOfPersonsSelected = numberOfPersonsSelectedObs.getReadableValue();
        }        
        if (typeOfInitiative && numberOfPersonsSelected > numberOfParticipants) {
            validationErrors.push("The number of persons linking to distribution cannot be more than the number of persons who took part in that activity");
        }
    }
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "2a955613-08e5-4b33-9065-8e82d20f9034",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of persons",
            "uuid": "083a8bdd-bc58-46a2-a056-06a10e48088a"
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
                          "conceptDataType": "Subject",
                          "conceptName": "Activities Done",
                          "conceptUuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
                          "scope": "registration",
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
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": true,
          "name": "Number of persons",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4").defined.matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "536f7cef-8666-4637-bacb-940003aa9a79",
          "voided": true
        }
      ],
      "name": "Activities Done",
      "timed": false,
      "uuid": "b4a75336-baeb-4181-9098-fbafbe134fae"
    },
    {
      "display": "Other details",
      "displayOrder": 17,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Remarks",
            "uuid": "e132e4fe-7c7a-4612-b086-426b9f74147b"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "validationError",
                  "details": {
                    "validationError": "Please provide remarks"
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
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Education and Health",
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "00e97494-a65b-482b-b919-aab58d52e5b8",
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
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
                          "conceptDataType": "Text",
                          "conceptName": "Remarks",
                          "conceptUuid": "e132e4fe-7c7a-4612-b086-426b9f74147b",
                          "scope": "registration",
                          "type": "concept"
                        },
                        "operator": "notDefined",
                        "rhs": {}
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": false,
          "name": "Remarks",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnyAnswerConceptName("00e97494-a65b-482b-b919-aab58d52e5b8","9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("e132e4fe-7c7a-4612-b086-426b9f74147b").notDefined.matches();
  
  if(condition11 && condition21 ){
    validationErrors.push("Please provide remarks");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "b11f3045-27cc-4fc9-a57e-5f1809959bbd"
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
            "name": "Reports Cross Checked",
            "uuid": "02226c59-2e8f-4f00-b977-4f68e95856c1"
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": false,
          "name": "Reports Cross Checked",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("02226c59-2e8f-4f00-b977-4f68e95856c1").notDefined.matches();
  
  if(condition11 ){
    value = "No";  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "171e6d65-3b13-429c-a6ea-08030a1819e8"
        }
      ],
      "name": "Other details",
      "timed": false,
      "uuid": "8452abc1-3384-4bd6-8efa-3610433f7459"
    },
    {
      "display": "don't use",
      "displayOrder": 18,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "location",
            "uuid": "1b4b80b0-33d9-4d95-8a66-b110346798d0"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "value",
                  "details": {
                    "value": "123456"
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
                          "conceptDataType": "Subject",
                          "conceptName": "Activities Done",
                          "conceptUuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
                          "scope": "questionGroupRegistration",
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
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": false,
          "name": "NOTHING",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4").defined.matches();
  
  if(condition11 ){
    value = "123456";  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "aa9e8dee-436a-410b-931d-b571835e5e51",
          "voided": true
        }
      ],
      "name": "don't use",
      "timed": false,
      "uuid": "18a1d8ab-8b00-492a-9ab8-99bee14e9361",
      "voided": true
    },
    {
      "display": "Dispatched Materials distributed",
      "displayOrder": 19,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Contributed item",
                "order": 2,
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kit",
                "order": 1,
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Purchased item",
                "order": 0,
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
              }
            ],
            "dataType": "Coded",
            "name": "Type of material from received (voided~207589)",
            "uuid": "4745383c-21f3-4650-9358-10ab387f7728",
            "voided": true
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": false,
          "name": "Type of material from received",
          "type": "SingleSelect",
          "uuid": "6cc9e408-ed8f-4013-a0f2-9ecabdc8e03f",
          "voided": true
        }
      ],
      "name": "Dispatched Materials distributed",
      "timed": false,
      "uuid": "d661556a-0af1-4739-baa6-ef84e4d40a34",
      "voided": true
    },
    {
      "display": "Materials distributed",
      "displayOrder": 20,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "QuestionGroup",
            "name": "Materials",
            "uuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
          },
          "displayOrder": 1,
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            },
            {
              "key": "disableManualActions",
              "value": true
            }
          ],
          "mandatory": false,
          "name": "Materials",
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
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "51ae27f9-11d5-4d2d-9f0c-e508f1f3650d",
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
                "name": "Office",
                "order": 6,
                "uuid": "ce5bb7ef-b14c-4aaf-b9b6-c353c4e0e62b"
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
                "name": "S2S (Non-GBG)",
                "order": 4,
                "uuid": "bdd49cd0-5f26-4f80-98e0-a046b095a9e3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Parlur",
                "order": 2,
                "uuid": "dcc2441b-11ee-494d-9606-7db2edbd9a55"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Volunteer",
                "order": 7,
                "uuid": "b5d24787-22ce-4887-b211-f0d65718976c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tent House",
                "order": 8,
                "uuid": "c1ba7eed-7cac-47b2-974b-0c0ff9a954bb"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Vaapsi",
                "order": 9,
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "My Pad Woman",
                "order": 12,
                "uuid": "92f513a6-a892-4c06-8a30-a5252f4fccf4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "New Born Baby",
                "order": 11,
                "uuid": "eecf1fe0-c01d-4a37-97f5-80894be39bd1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S (GBG)",
                "order": 3,
                "uuid": "63555829-f7d1-41fa-b1ec-2079e960fa9d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dance Drama",
                "order": 10,
                "uuid": "a865aa62-8fe4-4303-9394-2d06926fff43"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Other",
                "order": 14,
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Marriage Kits",
                "order": 1,
                "uuid": "7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Toiletry",
                "order": 13,
                "uuid": "9d61ae52-6359-41bd-a8ed-b3e9cdb807f1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S – AW",
                "order": 5,
                "uuid": "74144b99-b527-44b7-81d6-8f7c335b202b"
              }
            ],
            "dataType": "Coded",
            "name": "Type (Kit)",
            "uuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02"
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
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "name": "Type",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "403300d6-b0d5-44bf-be18-db8607b91c7b",
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
                "name": "Vaapsi",
                "order": 10,
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Toiletry",
                "order": 14,
                "uuid": "9d61ae52-6359-41bd-a8ed-b3e9cdb807f1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dance drama",
                "order": 11,
                "uuid": "9d4f0cc8-0be2-4c2c-9485-696650f0e0c3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "CBE",
                "order": 16,
                "uuid": "8c48b5ae-0b0a-45b8-bc61-93f370c56fff"
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
                "name": "Office",
                "order": 7,
                "uuid": "ce5bb7ef-b14c-4aaf-b9b6-c353c4e0e62b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Other",
                "order": 15,
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Volunteer",
                "order": 8,
                "uuid": "b5d24787-22ce-4887-b211-f0d65718976c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tent house",
                "order": 9,
                "uuid": "603883db-ea5b-4c46-b1a7-78618e052268"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S (Non-GBG)",
                "order": 4,
                "uuid": "bdd49cd0-5f26-4f80-98e0-a046b095a9e3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S (GBG)",
                "order": 3,
                "uuid": "63555829-f7d1-41fa-b1ec-2079e960fa9d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Parlor",
                "order": 2,
                "uuid": "b716454c-9604-439e-9100-a28aa15aa3de"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S",
                "order": 5,
                "uuid": "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "New born baby",
                "order": 12,
                "uuid": "9bb7c536-ab34-420c-b60c-8a844892e65b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "My pad woman",
                "order": 13,
                "uuid": "aeb9a11d-c672-451d-ac13-5c97bc6523d9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S – AW",
                "order": 6,
                "uuid": "74144b99-b527-44b7-81d6-8f7c335b202b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Marriage kits",
                "order": 1,
                "uuid": "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
              }
            ],
            "dataType": "Coded",
            "name": "Kit Type",
            "uuid": "944cb7a1-a537-4e4f-bd15-74db621abefa"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Kit type",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "2726648d-e65f-4252-8403-eb62d3e096e3",
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
                "name": "Mason Kit",
                "order": 8,
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tea Shop Kit",
                "order": 14,
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Marriage Kits (F)",
                "order": 18,
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Plumbing Kit",
                "order": 10,
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Painter Kit",
                "order": 11,
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Puncture Repair Kit",
                "order": 5,
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "B",
                "order": 1,
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Carpenter Kit",
                "order": 7,
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "C",
                "order": 2,
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Farmer Kit",
                "order": 12,
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Marriage Kits (M)",
                "order": 17,
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ironing Kit",
                "order": 9,
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Barber Kit",
                "order": 3,
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Labour Kit",
                "order": 16,
                "uuid": "4a29b8af-dc91-44b8-b820-586568a02870"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "A",
                "order": 0,
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Cobbler Kit",
                "order": 4,
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Egg Shop Kit",
                "order": 13,
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kirana Shop Kit",
                "order": 15,
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Electrician Kit",
                "order": 6,
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6"
              }
            ],
            "dataType": "Coded",
            "name": "Sub-type",
            "uuid": "3d8277db-2656-4413-b4e6-0aefb2cb692c"
          },
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "4a29b8af-dc91-44b8-b820-586568a02870",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35"
                    ],
                    "answersToSkip": [
                      "Barber Kit",
                      "Carpenter Kit",
                      "Cobbler Kit",
                      "Egg Shop Kit",
                      "Electrician Kit",
                      "Farmer Kit",
                      "Ironing Kit",
                      "Kirana Shop Kit",
                      "Labour Kit",
                      "Marriage Kits (F)",
                      "Marriage Kits (M)",
                      "Mason Kit",
                      "Painter Kit",
                      "Plumbing Kit",
                      "Puncture Repair Kit",
                      "Tea Shop Kit"
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
                          "conceptName": "Type (Kit)",
                          "conceptUuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "DFW"
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
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35"
                    ],
                    "answersToSkip": [
                      "A",
                      "B",
                      "C",
                      "Marriage Kits (F)",
                      "Marriage Kits (M)"
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
                          "conceptName": "Type (Kit)",
                          "conceptUuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "4a29b8af-dc91-44b8-b820-586568a02870",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae"
                    ],
                    "answersToSkip": [
                      "A",
                      "B",
                      "Barber Kit",
                      "C",
                      "Carpenter Kit",
                      "Cobbler Kit",
                      "Egg Shop Kit",
                      "Electrician Kit",
                      "Farmer Kit",
                      "Ironing Kit",
                      "Kirana Shop Kit",
                      "Labour Kit",
                      "Mason Kit",
                      "Painter Kit",
                      "Plumbing Kit",
                      "Puncture Repair Kit",
                      "Tea Shop Kit"
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
                          "conceptName": "Type (Kit)",
                          "conceptUuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Marriage Kits"
                          ],
                          "answerConceptUuids": [
                            "7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd"
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
                          "conceptName": "Type (Kit)",
                          "conceptUuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "DFW",
                            "Marriage Kits",
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd",
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": false,
          "name": "Sub type",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd","971c7a76-d296-4d47-9a90-47a612ceb4ca","7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd").matches();
  
  if(condition11 ) {
    _.forEach(["04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1","4a29b8af-dc91-44b8-b820-586568a02870"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition12 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    visibility = condition14 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "934bbc94-ecca-4f3b-94df-9f3c9c894b10",
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
                "name": "Marriage Kits (M)",
                "order": 17,
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Mason Kit",
                "order": 8,
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Barber Kit",
                "order": 3,
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "B",
                "order": 1,
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "L",
                "order": 20,
                "uuid": "ceefacdd-14b0-408f-b1cb-d6c3651299ff"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Egg Shop Kit",
                "order": 13,
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Painter Kit",
                "order": 11,
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "C",
                "order": 2,
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Puncture Repair Kit",
                "order": 5,
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Cobbler Kit",
                "order": 4,
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "NA",
                "order": 21,
                "uuid": "a98a4e9d-e110-433d-94a6-d471c0157a75"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Labor Kit",
                "order": 16,
                "uuid": "90d580bd-f76c-4633-bb5b-4b92bc057c86"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "X",
                "order": 19,
                "uuid": "687c20b4-617a-4ae6-ac46-e686aa1283f1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "A",
                "order": 0,
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Marriage Kits (F)",
                "order": 18,
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Electrician Kit",
                "order": 6,
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Farmer Kit",
                "order": 12,
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kirana Shop Kit",
                "order": 15,
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ironing Kit",
                "order": 9,
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Carpenter Kit",
                "order": 7,
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Plumbing Kit",
                "order": 10,
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tea Shop Kit",
                "order": 14,
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe"
              }
            ],
            "dataType": "Coded",
            "name": "Sub type",
            "uuid": "1b637749-2537-42d5-a5a4-b7e522967855"
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
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "DFW",
                            "Marriage kits",
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
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
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "4a29b8af-dc91-44b8-b820-586568a02870",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35"
                    ],
                    "answersToSkip": [
                      "Barber Kit",
                      "Carpenter Kit",
                      "Cobbler Kit",
                      "Egg Shop Kit",
                      "Electrician Kit",
                      "Farmer Kit",
                      "Ironing Kit",
                      "Kirana Shop Kit",
                      "Labour Kit",
                      "Marriage Kits (F)",
                      "Marriage Kits (M)",
                      "Mason Kit",
                      "Painter Kit",
                      "Plumbing Kit",
                      "Puncture Repair Kit",
                      "Tea Shop Kit"
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
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "DFW"
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
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "4a29b8af-dc91-44b8-b820-586568a02870",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae"
                    ],
                    "answersToSkip": [
                      "A",
                      "B",
                      "Barber Kit",
                      "C",
                      "Carpenter Kit",
                      "Cobbler Kit",
                      "Egg Shop Kit",
                      "Electrician Kit",
                      "Farmer Kit",
                      "Ironing Kit",
                      "Kirana Shop Kit",
                      "Labour Kit",
                      "Mason Kit",
                      "Painter Kit",
                      "Plumbing Kit",
                      "Puncture Repair Kit",
                      "Tea Shop Kit"
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
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Marriage kits"
                          ],
                          "answerConceptUuids": [
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
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
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35"
                    ],
                    "answersToSkip": [
                      "A",
                      "B",
                      "C",
                      "Marriage Kits (F)",
                      "Marriage Kits (M)"
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
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Sub type",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd","971c7a76-d296-4d47-9a90-47a612ceb4ca","e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
  visibility = condition11 ;
    if(condition12 ) {
    _.forEach(["04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "9acf4a1f-058b-444c-95a0-4dec9ac5b55e",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Contributed Item",
            "uuid": "ef2f247e-209f-4a8a-9fc5-4b27264d0cec"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "displayOrder": 10,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Contributed item",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "84082ff3-760e-4e50-8631-4ffaeb86a77c",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Kit Name",
            "uuid": "318902e6-f7a5-4e70-8f5f-72b83f3ccb22"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "displayOrder": 11,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Kit Name",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "52612969-4017-4df5-80e2-ff1bc2b02834",
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
                "name": "Vaapsi",
                "order": 10,
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Toiletry",
                "order": 14,
                "uuid": "9d61ae52-6359-41bd-a8ed-b3e9cdb807f1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dance drama",
                "order": 11,
                "uuid": "9d4f0cc8-0be2-4c2c-9485-696650f0e0c3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "CBE",
                "order": 16,
                "uuid": "8c48b5ae-0b0a-45b8-bc61-93f370c56fff"
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
                "name": "Office",
                "order": 7,
                "uuid": "ce5bb7ef-b14c-4aaf-b9b6-c353c4e0e62b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Other",
                "order": 15,
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Volunteer",
                "order": 8,
                "uuid": "b5d24787-22ce-4887-b211-f0d65718976c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tent house",
                "order": 9,
                "uuid": "603883db-ea5b-4c46-b1a7-78618e052268"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S (Non-GBG)",
                "order": 4,
                "uuid": "bdd49cd0-5f26-4f80-98e0-a046b095a9e3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S (GBG)",
                "order": 3,
                "uuid": "63555829-f7d1-41fa-b1ec-2079e960fa9d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Parlor",
                "order": 2,
                "uuid": "b716454c-9604-439e-9100-a28aa15aa3de"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S",
                "order": 5,
                "uuid": "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "New born baby",
                "order": 12,
                "uuid": "9bb7c536-ab34-420c-b60c-8a844892e65b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "My pad woman",
                "order": 13,
                "uuid": "aeb9a11d-c672-451d-ac13-5c97bc6523d9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S – AW",
                "order": 6,
                "uuid": "74144b99-b527-44b7-81d6-8f7c335b202b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Marriage kits",
                "order": 1,
                "uuid": "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
              }
            ],
            "dataType": "Coded",
            "name": "Kit Type",
            "uuid": "944cb7a1-a537-4e4f-bd15-74db621abefa"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "displayOrder": 12,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Kit Type",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "a44ae842-0057-4d24-8d0b-3c03b75bb2bb",
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
                "name": "Marriage Kits (M)",
                "order": 17,
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Mason Kit",
                "order": 8,
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Barber Kit",
                "order": 3,
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "B",
                "order": 1,
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "L",
                "order": 20,
                "uuid": "ceefacdd-14b0-408f-b1cb-d6c3651299ff"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Egg Shop Kit",
                "order": 13,
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Painter Kit",
                "order": 11,
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "C",
                "order": 2,
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Puncture Repair Kit",
                "order": 5,
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Cobbler Kit",
                "order": 4,
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "NA",
                "order": 21,
                "uuid": "a98a4e9d-e110-433d-94a6-d471c0157a75"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Labor Kit",
                "order": 16,
                "uuid": "90d580bd-f76c-4633-bb5b-4b92bc057c86"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "X",
                "order": 19,
                "uuid": "687c20b4-617a-4ae6-ac46-e686aa1283f1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "A",
                "order": 0,
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Marriage Kits (F)",
                "order": 18,
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Electrician Kit",
                "order": 6,
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Farmer Kit",
                "order": 12,
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kirana Shop Kit",
                "order": 15,
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ironing Kit",
                "order": 9,
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Carpenter Kit",
                "order": 7,
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Plumbing Kit",
                "order": 10,
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tea Shop Kit",
                "order": 14,
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe"
              }
            ],
            "dataType": "Coded",
            "name": "Sub type",
            "uuid": "1b637749-2537-42d5-a5a4-b7e522967855"
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
                          "conceptName": "Kit Type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "DFW",
                            "Marriage kits",
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
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
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "4a29b8af-dc91-44b8-b820-586568a02870",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35"
                    ],
                    "answersToSkip": [
                      "Barber Kit",
                      "Carpenter Kit",
                      "Cobbler Kit",
                      "Egg Shop Kit",
                      "Electrician Kit",
                      "Farmer Kit",
                      "Ironing Kit",
                      "Kirana Shop Kit",
                      "Labour Kit",
                      "Marriage Kits (F)",
                      "Marriage Kits (M)",
                      "Mason Kit",
                      "Painter Kit",
                      "Plumbing Kit",
                      "Puncture Repair Kit",
                      "Tea Shop Kit"
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
                          "conceptName": "Kit Type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "DFW"
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
            },
            {
              "actions": [
                {
                  "actionType": "skipAnswers",
                  "details": {
                    "answerUuidsToSkip": [
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "4a29b8af-dc91-44b8-b820-586568a02870",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae"
                    ],
                    "answersToSkip": [
                      "A",
                      "B",
                      "Barber Kit",
                      "C",
                      "Carpenter Kit",
                      "Cobbler Kit",
                      "Egg Shop Kit",
                      "Electrician Kit",
                      "Farmer Kit",
                      "Ironing Kit",
                      "Kirana Shop Kit",
                      "Labour Kit",
                      "Mason Kit",
                      "Painter Kit",
                      "Plumbing Kit",
                      "Puncture Repair Kit",
                      "Tea Shop Kit"
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
                          "conceptName": "Kit Type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Marriage kits"
                          ],
                          "answerConceptUuids": [
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
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
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35"
                    ],
                    "answersToSkip": [
                      "A",
                      "B",
                      "C",
                      "Marriage Kits (F)",
                      "Marriage Kits (M)"
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
                          "conceptName": "Kit Type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
          "displayOrder": 13,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Sub type",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd","971c7a76-d296-4d47-9a90-47a612ceb4ca","e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
  visibility = condition11 ;
    if(condition12 ) {
    _.forEach(["04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "b7464021-3715-4d6d-a71f-816a4b3c77d3",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Material Name",
            "uuid": "aaede45f-53ca-40dc-a349-feca810810f5"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Bulk Material",
                            "Contributed track",
                            "Goonj product",
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "11c11e55-7604-4f38-9f4f-3560e116e76e",
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "6f6eb1de-88c4-4df2-a8ae-997a339a78c5",
                            "73e4cab9-b0d5-49a8-9cf2-c42f41523143"
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
          "displayOrder": 14,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Material name",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","73e4cab9-b0d5-49a8-9cf2-c42f41523143","6f6eb1de-88c4-4df2-a8ae-997a339a78c5","11c11e55-7604-4f38-9f4f-3560e116e76e").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "fb1b11dd-e27d-4932-84e3-64bdf0e1fc2f",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "keyValues": [],
            "name": "Kit Id",
            "uuid": "e7963e9a-f0ac-4666-af69-173e4e8bbcf6"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "displayOrder": 15,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Kit Id",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "8ca258cd-93e2-40cf-9972-c50fd81bef30",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "keyValues": [],
            "name": "Material Id",
            "uuid": "53b13383-40de-4b5e-ab9f-94d0ec216c89"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Bulk Material",
                            "Contributed track",
                            "Goonj product",
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "11c11e55-7604-4f38-9f4f-3560e116e76e",
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "6f6eb1de-88c4-4df2-a8ae-997a339a78c5",
                            "73e4cab9-b0d5-49a8-9cf2-c42f41523143"
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
          "displayOrder": 16,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Material Id",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","73e4cab9-b0d5-49a8-9cf2-c42f41523143","11c11e55-7604-4f38-9f4f-3560e116e76e","6f6eb1de-88c4-4df2-a8ae-997a339a78c5").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "6fea682c-0ee2-4055-8cba-d515d714e787",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Purchased /High Value",
            "uuid": "8f2ce1e6-f2f9-4ce3-94c8-8b1f761a3b95"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
          "displayOrder": 17,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Purchased /High value",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "2c252233-d004-460e-bd57-85a2a3bcb5b4",
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
                "name": "Family",
                "order": 0,
                "uuid": "c3481a91-ff17-46ce-ac78-7e7f2a1a483b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Individual",
                "order": 1,
                "uuid": "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
              }
            ],
            "dataType": "Coded",
            "name": "Distribution to (voided~207597)",
            "uuid": "db851d57-7457-4a12-9192-f75caf9fd54e",
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
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "displayOrder": 18,
          "keyValues": [],
          "mandatory": false,
          "name": "Distribution to",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "7cf4e5f8-6158-42fe-80e8-b6118882988e",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Quantities",
            "uuid": "723422d4-ffe1-4a1d-a40e-30bea9ab1487"
          },
          "displayOrder": 19,
          "keyValues": [],
          "mandatory": true,
          "name": "Quantity",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  let quantityFromDispatch = encounter.getObservationValue('Net Quantity');
  let quantityFromNonKit = encounter.getObservationValue('Quantities');
  
  if (_.toNumber(quantityFromDispatch) < _.toNumber(quantityFromNonKit)) {
      return validationErrors;
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "732a9667-cb96-42d0-8531-578679dad52d",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Net quantity (voided~207599)",
            "uuid": "b8f74c0a-7fd4-4f60-b997-03a7e0da2e26",
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
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "displayOrder": 20,
          "keyValues": [],
          "mandatory": false,
          "name": "Net quantity",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "1838e213-f8e9-42a9-8d00-cdbf56ae2fba",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Contributed",
            "uuid": "d01e4097-3854-44f2-8706-ec36fceeadf9"
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
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "displayOrder": 21,
          "keyValues": [],
          "mandatory": true,
          "name": "Contributed",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "36dbb158-671a-4a89-8022-03e7ab00f8f4",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Purchase/High Value",
            "uuid": "dc5135d7-cd94-4c14-92fe-9b258c64f679"
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
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
          "displayOrder": 22,
          "keyValues": [],
          "mandatory": true,
          "name": "Purchase/High Value",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "b8c7463c-7c7a-4893-8c0b-bbbc0885ee46",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Units (voided~207602)",
            "uuid": "1adb71c7-cb19-45b5-acd4-7736c29e007c",
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
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Contributed item",
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "displayOrder": 23,
          "keyValues": [],
          "mandatory": false,
          "name": "Units",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "63704213-fd4d-4c2b-8dbd-de34eb36fc91",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Quantity number",
            "uuid": "b5585768-2b22-49a4-819c-50cab9395e30"
          },
          "displayOrder": 24,
          "keyValues": [],
          "mandatory": true,
          "name": "Quantity",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let validationErrors = [];
    const visibility = new imports.rulesConfig.RuleCondition({encounter, formElement})
        .when
        .questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex)
        .containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624", "604f6297-724c-48ec-9078-0d4356d45910", "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354")
        .matches();

    const getItemQuantityFrom = (encName, obsUUID, materialTypeConceptName, qantityConceptName) => {
        return _.filter(encounter.individual.getEncounters(), enc => enc.encounterType.name === encName)
            .flatMap(enc => enc.getObservationValue(obsUUID))
            .flatMap((obs) => {
                const values = obs.getReadableValue();
                const quantity = _.get(_.find(values, kv => kv[qantityConceptName]), qantityConceptName, 0);
                const typeOfMaterial = _.get(_.find(values, kv => kv[materialTypeConceptName]), materialTypeConceptName, '');
                return {[typeOfMaterial]: quantity}
            })
            .reduce((a, b) => {
                a['Contributed item'] = a['Contributed item'] + _.get(b, 'Contributed item', 0);
                a['Kit'] = a['Kit'] + _.get(b, 'Kit', 0);
                a['Purchased item'] = a['Purchased item'] + _.get(b, 'Purchased item', 0);
                return a;
            }, {'Contributed item': 0, 'Kit': 0, 'Purchased item': 0})
    };
    
    const totalQuantityDispatched = getItemQuantityFrom('Dispatch', '267fbb23-4168-4fb1-9bce-6b0d5f378c46', 'Type Of Material', 'Quantity (Dispatched)');
    const toatlQuantityDistributedEarlier = getItemQuantityFrom('Distribution', '3093c0f1-5e3f-47eb-92ed-0067b41b6f9c', 'Type Of Material', 'Quantity number');
    const currentQuestionGroupObservation = encounter.getObservationValue('3093c0f1-5e3f-47eb-92ed-0067b41b6f9c');
    if (currentQuestionGroupObservation) {
        const currentGroupObservations = currentQuestionGroupObservation[params.questionGroupIndex];
        const readableValues = currentGroupObservations.getReadableValue();
        const currentTypeOfMaterial = _.find(readableValues, kv => kv['Type Of Material'])['Type Of Material'];
        const currentQuantity = _.get(_.find(readableValues, kv => kv['Quantity number']), 'Quantity number', 0);
        const remainingQuantity = totalQuantityDispatched[currentTypeOfMaterial] - toatlQuantityDistributedEarlier[currentTypeOfMaterial];
        if (currentQuantity > remainingQuantity) {
            validationErrors.push(`Quantity cannot be greater than ${remainingQuantity}`);
        }
    }
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null, [], validationErrors);
}
,
          "type": "SingleSelect",
          "uuid": "5231dd00-2f74-4122-ae60-e8228ff09c86",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Quantity",
            "uuid": "bf591bee-f3a5-4481-9b01-ab40ca01c8b4"
          },
          "displayOrder": 25,
          "keyValues": [],
          "mandatory": true,
          "name": "Total quantity distributed",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let validationErrors = [];
    const visibility = new imports.rulesConfig.RuleCondition({encounter, formElement})
        .when
        .questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex)
        .containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624", "604f6297-724c-48ec-9078-0d4356d45910", "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
            "11c11e55-7604-4f38-9f4f-3560e116e76e", "6f6eb1de-88c4-4df2-a8ae-997a339a78c5", "73e4cab9-b0d5-49a8-9cf2-c42f41523143")
        .matches();

    const getItemQuantityFrom = (encName, obsUUID, dispatchLineItemIdKeyName, qantityConceptName) => {
        let result = _.filter(encounter.individual.getEncounters(), enc => enc.encounterType.name === encName && encounter.uuid !== enc.uuid)
            .flatMap(enc => enc.getObservationValue(obsUUID))
            .flatMap((obs) => {
               //  console.log('obs----->',obs);
                const values = obs.getReadableValue();
               //  console.log('values----->',values);
                const quantity = _.get(_.find(values, kv =>  kv[qantityConceptName]), qantityConceptName, 0);
               //  console.log('quantity----->',quantity);
                const dispatchLineItemId = _.get(_.find(values, kv => kv[dispatchLineItemIdKeyName]), dispatchLineItemIdKeyName, '');
               //  console.log('dispatchLineItemId----->',dispatchLineItemId);
                return {Id: dispatchLineItemId, qty: quantity};
            }).reduce(function(res, value) {
                if (!res[value.Id]) {
                    res[value.Id] = 0;
                }
                res[value.Id] += value.qty;
                return res;
        }, {});  
      //  console.log('result: ', result);
        return result;
    };

    const totalQuantityDispatched = getItemQuantityFrom('Dispatch receipt', '5dfb2f28-b866-4442-be01-0ed451c6aad9', 'Dispatch Line Item Id', 'Quantity');
    
    const toatlQuantityDistributedEarlier = getItemQuantityFrom('Distribution', '3093c0f1-5e3f-47eb-92ed-0067b41b6f9c', 'Dispatch Line Item Id', 'Quantity');
    
    const currentQuestionGroupObservation = encounter.getObservationValue('3093c0f1-5e3f-47eb-92ed-0067b41b6f9c');
  //  console.log('currentQuestionGroupObservation---->',currentQuestionGroupObservation);
    if (currentQuestionGroupObservation) {
        const currentGroupObservations = currentQuestionGroupObservation[params.questionGroupIndex];
        const readableValues = currentGroupObservations.getReadableValue();
        const currentTypeOfMaterial = _.find(readableValues, kv => kv['Dispatch Line Item Id'])['Dispatch Line Item Id'];
        const currentQuantity = _.get(_.find(readableValues, kv => kv['Quantity']), 'Quantity', 0);
       // console.log('currentTypeOfMaterial--->',currentTypeOfMaterial);
        
        let remainingQuantity = totalQuantityDispatched[currentTypeOfMaterial] - toatlQuantityDistributedEarlier[currentTypeOfMaterial];
        
        if( _.isNaN(remainingQuantity ) ){
            remainingQuantity = totalQuantityDispatched[currentTypeOfMaterial]
        } 
        
      //  console.log('totalQuantityDispatched---->',totalQuantityDispatched); -- NaN
      //  console.log('toatlQuantityDistributedEarlier---->',toatlQuantityDistributedEarlier);
      //  console.log('currentTypeOfMaterial---->',currentTypeOfMaterial);
      //  console.log('currentQuantity---->',currentQuantity);
      //  console.log('remainingQuantity---->',remainingQuantity);
        
        if (currentQuantity > remainingQuantity) {
            validationErrors.push(`Quantity cannot be greater than ${remainingQuantity}`);
        }
        const filledEntries = _.map(currentQuestionGroupObservation, groupObservations => _.mapValues(_.pick(groupObservations.toResource, ['bf591bee-f3a5-4481-9b01-ab40ca01c8b4']), (v) => _.toNumber(v)));
        const isAllQuantityZero = _.every(filledEntries, ['bf591bee-f3a5-4481-9b01-ab40ca01c8b4', 0]);
        if(isAllQuantityZero) {
            validationErrors.push("All quantities cannot be equal to zero.");
        }
    }


    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null, [], validationErrors);
},
          "type": "SingleSelect",
          "uuid": "4815eb0d-1b12-4c9a-9be0-9acd7298e305",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Unit",
            "uuid": "384789ec-1f69-4407-932c-9451d4e05a51"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptNameOtherThan",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Unit",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "bc59499f-45bb-4ea6-9a63-85ac8f3519e3",
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
                "name": "Family",
                "order": 1,
                "uuid": "c3481a91-ff17-46ce-ac78-7e7f2a1a483b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Individuals",
                "order": 2,
                "uuid": "495f1001-01c9-4057-ac84-8b003d35f48a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Individual",
                "order": 0,
                "uuid": "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Families",
                "order": 3,
                "uuid": "15707d6a-47f0-430e-a43f-0ced5205e05a"
              }
            ],
            "dataType": "Coded",
            "name": "Distribution done to",
            "uuid": "0aaf0e79-d027-4412-87be-62507fb69bbf"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptNameOtherThan",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "name": "Distribution done to",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "f2498451-5b71-4b29-8af5-fac1ab1dd0a1",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Number of distributions",
            "uuid": "663f2d2e-4a9a-4b3c-a421-d4939a0b700e"
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
                    "conjunction": "or",
                    "rules": [
                      {
                        "lhs": {
                          "conceptDataType": "Coded",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnswerConceptNameOtherThan",
                        "rhs": {
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "keyValues": [],
          "mandatory": true,
          "name": "Number of Families/Individuals",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "0ce67821-c8e4-44c1-aff7-b912b36d13dd",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Units (voided~207619)",
            "uuid": "d974928a-742d-465c-924d-aab56ca4e101",
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
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Contributed item",
                            "Kit",
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "mandatory": false,
          "name": "Unit",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624","604f6297-724c-48ec-9078-0d4356d45910","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "e847a92e-d713-47f0-a107-a71a4c227e6f",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Total",
            "uuid": "d5f535ba-8fa8-4504-b45f-6bd2f19dc02e"
          },
          "displayOrder": 30,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Total",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let answersToSkip = [];
  let validationErrors = [];
  let value = 0;
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
//  let valueOfContributed = encounter.getObservationValue('Contributed');
//  let valueOfPurchase = encounter.getObservationValue('Purchase/High Value');
//  let valueOfUnits = encounter.getObservationValue('Units');
  
 // const totalUnitsDistributed = _.toNumber( valueOfContributed || 0 ) + _.toNumber( valueOfPurchase || 0 ) + _.toNumber( valueOfUnits ||0 );

  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "3ff8679a-1649-44d4-aa1d-f98031771c01",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Remarks",
            "uuid": "e132e4fe-7c7a-4612-b086-426b9f74147b"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Contributed item",
                            "Kit",
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "displayOrder": 31,
          "keyValues": [],
          "mandatory": false,
          "name": "Remarks",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "5835d690-e7b8-4d3f-9f1d-dbf996887a85",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Image",
            "name": "Distribution Images",
            "uuid": "1c4eb3f2-4d1e-4618-aaae-74475c5d8e08"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
                          "scope": "questionGroupEncounter",
                          "type": "concept"
                        },
                        "operator": "containsAnyAnswerConceptName",
                        "rhs": {
                          "answerConceptNames": [
                            "Contributed item",
                            "Kit",
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "mandatory": false,
          "name": "Images",
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "5ac137c2-bc76-4c65-8be0-4ccbbe56c84c",
          "voided": true
        }
      ],
      "name": "Materials distributed",
      "timed": false,
      "uuid": "1190edaf-3da5-44ba-ae96-39ce2e4c225d",
      "voided": true
    },
    {
      "display": "Kits",
      "displayOrder": 21,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Parlur",
                "order": 2,
                "uuid": "dcc2441b-11ee-494d-9606-7db2edbd9a55"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "New Born Baby",
                "order": 11,
                "uuid": "eecf1fe0-c01d-4a37-97f5-80894be39bd1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tent House",
                "order": 8,
                "uuid": "c1ba7eed-7cac-47b2-974b-0c0ff9a954bb"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "My Pad Woman",
                "order": 12,
                "uuid": "92f513a6-a892-4c06-8a30-a5252f4fccf4"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S – AW",
                "order": 5,
                "uuid": "74144b99-b527-44b7-81d6-8f7c335b202b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Vaapsi",
                "order": 9,
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Other",
                "order": 14,
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Dance Drama",
                "order": 10,
                "uuid": "a865aa62-8fe4-4303-9394-2d06926fff43"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S (GBG)",
                "order": 3,
                "uuid": "63555829-f7d1-41fa-b1ec-2079e960fa9d"
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
                "name": "Office",
                "order": 6,
                "uuid": "ce5bb7ef-b14c-4aaf-b9b6-c353c4e0e62b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Marriage Kits",
                "order": 1,
                "uuid": "7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "S2S (Non-GBG)",
                "order": 4,
                "uuid": "bdd49cd0-5f26-4f80-98e0-a046b095a9e3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Volunteer",
                "order": 7,
                "uuid": "b5d24787-22ce-4887-b211-f0d65718976c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Toiletry",
                "order": 13,
                "uuid": "9d61ae52-6359-41bd-a8ed-b3e9cdb807f1"
              }
            ],
            "dataType": "Coded",
            "name": "Type",
            "uuid": "29a0c486-b23e-445c-9b89-0b2f5eb39682"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Type",
          "type": "SingleSelect",
          "uuid": "79096bc1-b595-4946-a3f3-162726decdc8",
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
                "name": "Labor Kit",
                "order": 16,
                "uuid": "90d580bd-f76c-4633-bb5b-4b92bc057c86"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ironing Kit",
                "order": 9,
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Painter Kit",
                "order": 11,
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Egg Shop Kit",
                "order": 13,
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Plumbing Kit",
                "order": 10,
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Puncture Repair Kit",
                "order": 5,
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "A",
                "order": 0,
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tea Shop Kit",
                "order": 14,
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Marriage Kits (M)",
                "order": 17,
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Carpenter Kit",
                "order": 7,
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "C",
                "order": 2,
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kirana Shop Kit",
                "order": 15,
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Mason Kit",
                "order": 8,
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Cobbler Kit",
                "order": 4,
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "B",
                "order": 1,
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Farmer Kit",
                "order": 12,
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Electrician Kit",
                "order": 6,
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Marriage Kits (F)",
                "order": 18,
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Barber Kit",
                "order": 3,
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6"
              }
            ],
            "dataType": "Coded",
            "name": "Sub type (voided~207387)",
            "uuid": "72470239-07f4-4eab-969c-408d4e1e94f4",
            "voided": true
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Sub type",
          "type": "SingleSelect",
          "uuid": "4477dc5c-ccc5-4cb2-a9fa-1c96055d0f45",
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
                "name": "Family",
                "order": 0,
                "uuid": "c3481a91-ff17-46ce-ac78-7e7f2a1a483b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Individual",
                "order": 1,
                "uuid": "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
              }
            ],
            "dataType": "Coded",
            "name": "Distribution to (voided~207390)",
            "uuid": "60aac647-9923-478d-b4a1-7197e2946065",
            "voided": true
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Distribution to",
          "type": "SingleSelect",
          "uuid": "4e9b1949-0f13-4af3-ae8f-2bdae02e4308",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Net quantity (voided~207565)",
            "uuid": "240d945b-dec8-4f52-9cf3-09d021e90d80",
            "voided": true
          },
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "Net quantity",
          "type": "SingleSelect",
          "uuid": "2f1293be-f8b4-44b6-8f95-df2d89f75081",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Net Quantity (voided~207391)",
            "uuid": "64839599-56e5-47d5-8254-70805ca4bad5",
            "voided": true
          },
          "displayOrder": 5,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": true,
          "name": "Net Quantity",
          "type": "SingleSelect",
          "uuid": "34ed0e34-0651-4319-b66e-93df73fec6de",
          "voided": true
        }
      ],
      "name": "Kits",
      "timed": false,
      "uuid": "2b4274a7-6cf7-4ec1-ae4d-7e01695ff138",
      "voided": true
    },
    {
      "declarativeRule": [
        {
          "actions": [
            {
              "actionType": "showFormElementGroup"
            }
          ],
          "conditions": [
            {
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "conceptDataType": "Coded",
                      "conceptName": "Type of material from received",
                      "conceptUuid": "4745383c-21f3-4650-9358-10ab387f7728",
                      "scope": "encounter",
                      "type": "concept"
                    },
                    "operator": "containsAnyAnswerConceptName",
                    "rhs": {
                      "answerConceptNames": [
                        "Contributed item",
                        "Purchased item"
                      ],
                      "answerConceptUuids": [
                        "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                        "604f6297-724c-48ec-9078-0d4356d45910"
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
      "display": "Non-Kit",
      "displayOrder": 22,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Contributed (Non-Kit)",
            "uuid": "b10e2de0-32a0-48e4-9eaf-ec333132f57e"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Contributed (Non-Kit)",
          "type": "SingleSelect",
          "uuid": "f2d33c6a-abcd-4df7-9827-bafccecd05bc",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Purchase/High Value (voided~207392)",
            "uuid": "dc64755c-772e-4489-89c9-41e522798472",
            "voided": true
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Purchase/High Value",
          "type": "SingleSelect",
          "uuid": "59805b08-21bd-46a4-a74f-a64767bab6f5",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Units (voided~207393)",
            "uuid": "27b0631f-5cc7-4b03-80e3-498eeaa09bf7",
            "voided": true
          },
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Units",
          "type": "SingleSelect",
          "uuid": "af0a05fe-684e-4cee-9d62-425ea3e27857",
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
                "name": "Family",
                "order": 0,
                "uuid": "c3481a91-ff17-46ce-ac78-7e7f2a1a483b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Individual",
                "order": 1,
                "uuid": "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
              }
            ],
            "dataType": "Coded",
            "name": "Distribution done to (voided~207394)",
            "uuid": "915e0fbd-5281-4f9e-beb5-d463b7b4c6fc",
            "voided": true
          },
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "Distribution done to",
          "type": "SingleSelect",
          "uuid": "b7c6b56a-ff0f-49b5-87d0-5abd956ca100",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Quantity number (voided~207395)",
            "uuid": "013202c0-2a18-40fe-93be-2de9a635dacb",
            "voided": true
          },
          "displayOrder": 5,
          "keyValues": [],
          "mandatory": true,
          "name": "Quantity number",
          "type": "SingleSelect",
          "uuid": "01e4161d-7360-4f37-b242-e6ead93f2415",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Numeric",
            "name": "Total (voided~207568)",
            "uuid": "c5619838-d26c-49d0-95e6-1da026b2d127",
            "voided": true
          },
          "displayOrder": 6,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": true,
          "name": "Total",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
   
  let valueOfContributed = encounter.getObservationValue('Contributed (Non-Kit)');
  let valueOfPurchase = encounter.getObservationValue('Purchase/High Value');
  let valueOfUnits = encounter.getObservationValue('Units');
  let valueOfQuantityNumber = encounter.getObservationValue('Quantity number');
  
  let total = _.toNumber(valueOfContributed || 0) + _.toNumber(valueOfPurchase || 0) + _.toNumber(valueOfUnits || 0) + _.toNumber(valueOfQuantityNumber || 0);
  
   return new imports.rulesConfig.FormElementStatus(formElement.uuid, true,total );
},
          "type": "SingleSelect",
          "uuid": "66ec1c25-e6df-4d65-a11f-2f246a57215f",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Remarks (voided~207569)",
            "uuid": "a9cf0d5d-602f-4a55-a3a4-27f2f80dee8d",
            "voided": true
          },
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": true,
          "name": "Remarks",
          "type": "SingleSelect",
          "uuid": "71d14c25-d942-4128-937f-7a8644c833dd",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Image",
            "name": "Images (voided~207571)",
            "uuid": "cee6abca-9feb-48ae-8922-c083239f3f1e",
            "voided": true
          },
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": true,
          "name": "Images",
          "type": "MultiSelect",
          "uuid": "9761417b-87cc-4ea1-8727-9be9c49d36ac",
          "voided": true
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "File",
            "name": "Images (voided~207570)",
            "uuid": "f81be2c1-8355-458e-9c3d-3e9c6bdc552f",
            "voided": true
          },
          "displayOrder": 9,
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "mandatory": true,
          "name": "Images",
          "type": "SingleSelect",
          "uuid": "35d4636f-436d-49ee-9394-709e67ed7327",
          "voided": true
        }
      ],
      "name": "Non-Kit",
      "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("4745383c-21f3-4650-9358-10ab387f7728").containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
        visibility = condition11 ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "timed": false,
      "uuid": "0479cef2-c03e-40db-aa36-8e4164e3d15f",
      "voided": true
    }
  ],
  "formType": "IndividualProfile",
  "name": "Distribution Registration",
  "uuid": "f19d7b5b-7b8b-4b5a-aa3b-5dcd6b1b496e",
  "validationRule": "",
  "visitScheduleRule": ""
}