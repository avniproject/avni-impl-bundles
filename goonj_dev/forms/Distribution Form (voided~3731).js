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
          "uuid": "10388702-9533-42e3-9dc7-a06b9b3ba273",
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
          "uuid": "a2b4585c-6049-4e66-aaf9-c587ca204f6e"
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
          "uuid": "326bde05-459b-49ef-b188-02ffa8358354"
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
          "uuid": "80302ad6-6d0b-4e23-b9a2-78f0e4a117f3"
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
          "uuid": "eae70968-d4ce-41ae-9fbf-37c240af5c60",
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
          "uuid": "a3d6b75d-d879-4f9b-b45b-fcaa42aa829d",
          "voided": true
        }
      ],
      "name": "Dispatch details",
      "timed": false,
      "uuid": "2c976fc9-54e9-4085-91c7-7d70ad0961f4"
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
          "uuid": "b574e1ef-0254-4b23-9cbd-8b6ddec71154",
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
          "uuid": "03b8f5d7-4fe5-4555-8870-47de7782f1c7",
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
          "uuid": "45305f2a-98de-4e56-9013-b5eed9bf4463",
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
          "uuid": "f9f93164-e8ca-4373-88da-6585302e495e",
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
          "uuid": "7e502acf-4918-4943-b834-dd3e7b3f37fc",
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
          "uuid": "9f045f60-4e83-434a-9f2e-9f02baceb502",
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
          "uuid": "b94197a7-2626-469d-945a-b724dba5d95c",
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
          "uuid": "6809623c-3742-4539-b43b-595a1dfa78ee",
          "voided": true
        }
      ],
      "name": "Address",
      "timed": false,
      "uuid": "4a2210d9-84d4-466c-b9a8-27ad20fe922f",
      "voided": true
    },
    {
      "display": "Distribution Related Details",
      "displayOrder": 3,
      "formElements": [
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Date",
            "name": "Distribution Date",
            "uuid": "cef5b862-672e-4e94-8ebc-3299a55f416f"
          },
          "displayOrder": 1,
          "keyValues": [],
          "mandatory": true,
          "name": "Distribution date",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  let visitDate = encounter.encounterDateTime;
  const distriutionDate = encounter.getObservationReadableValue('Distribution Date');
  
    // Changes start

  let dispatchReceivedDateObservation = encounter.individual.findLatestObservationFromEncounters('78f9d6cb-356e-45dc-90d5-216185784fe6', encounter);
  let dispatchReceivedDateValue = _.isEmpty(dispatchReceivedDateObservation) ? dispatchReceivedDateObservation : dispatchReceivedDateObservation.getReadableValue();
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("cef5b862-672e-4e94-8ebc-3299a55f416f").lessThan(dispatchReceivedDateValue, 'ms').matches();
  
  if(condition11 ){
      statusBuilder.validationError("Date cannot be before Dispatch received date.");
}
  
  // Changes end  

if(imports.moment(distriutionDate).isAfter(visitDate, 'date'))
  statusBuilder.validationError("Distribution date cannot be in future");
 
  return statusBuilder.build();
},
          "type": "SingleSelect",
          "uuid": "b7f4fb4d-d655-4cfd-bd06-fe38162ea517"
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
          "displayOrder": 2,
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
          "uuid": "ba9fd58f-7cc8-415b-a424-aefc063ed60f"
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
          "displayOrder": 3,
          "keyValues": [],
          "mandatory": true,
          "name": "Village",
          "type": "SingleSelect",
          "uuid": "4211ff30-27b5-4e5b-9141-1e6fb2b7fb5c",
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
          "displayOrder": 4,
          "keyValues": [],
          "mandatory": true,
          "name": "Village",
          "type": "SingleSelect",
          "uuid": "4df598a0-114c-4913-b5b1-f054c42b8752",
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
                "name": "Leprosy affected",
                "order": 12,
                "uuid": "4af95ec9-9da1-4367-a2fa-2a8392822cc8"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Sex Workers",
                "order": 23,
                "uuid": "c913f919-19bb-4789-948f-1ce239452da2"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Street Vendors",
                "order": 24,
                "uuid": "c792d850-6ff6-46d6-b62b-1f7a91c3952f"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Transgenders",
                "order": 28,
                "uuid": "bb9b146f-d1df-49d9-82eb-dab38c2bc8c8"
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
                "name": "Tribal Community",
                "order": 29,
                "uuid": "3fdad012-1109-4684-907c-0a268e6d1e9b"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "PWD",
                "order": 18,
                "uuid": "dc6278fa-b9f5-457d-b5a4-807189ac26e6"
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
                "name": "Agricultural Related",
                "order": 1,
                "uuid": "84adcd3a-c177-418e-88ea-ca3a1cdb56f5"
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
                "name": "Third Gender",
                "order": 27,
                "uuid": "e179e806-3487-433e-ba5f-9b341db3ed20"
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
                "name": "Unorganized sector",
                "order": 30,
                "uuid": "cf177b27-87c3-4dc1-8255-68ffe549b9f4"
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
                "name": "Weavers",
                "order": 31,
                "uuid": "95867a1b-bb19-469e-b21c-313016f3725d"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tailor Cutting",
                "order": 25,
                "uuid": "a3e19465-bebb-427a-8df2-7d58e28c5091"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "None",
                "order": 33,
                "unique": true,
                "uuid": "ba835221-04c0-4e55-a08f-e6e25bb6719c"
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
                "name": "Rickshaw Pullers",
                "order": 20,
                "uuid": "43803088-d89d-425e-991f-1343ddbd66c4"
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
                "name": "Widows",
                "order": 32,
                "uuid": "e0c9a937-415b-4bcc-be63-e7a41fa3c0d6"
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
                "name": "lohar",
                "order": 13,
                "uuid": "8585d735-9b9e-4801-adc8-c9c8c0b89518"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Ragpickers",
                "order": 19,
                "uuid": "27818169-2925-4895-b4ea-6cc30cedc5b0"
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
                "name": "Embroidery workers",
                "order": 8,
                "uuid": "0016afc5-47a2-46e0-867d-75ac3b0edfa0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Senior Citizens",
                "order": 22,
                "uuid": "b4f90cb7-1cd7-4f72-aba0-49f961fc27ea"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Tea garden workers",
                "order": 26,
                "uuid": "0640170e-b58f-4aac-a30c-01f5ad908a0a"
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
                "name": "Adolescents",
                "order": 0,
                "uuid": "7cf699d9-0a47-4111-95ce-b0c5df581762"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Rohingya community",
                "order": 21,
                "uuid": "508b8292-894a-4ed2-b090-96283dccaff0"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Daily Wagers",
                "order": 5,
                "uuid": "a45cf0ac-7200-49a2-be31-a7317aaa46b6"
              }
            ],
            "dataType": "Coded",
            "name": "Target Community",
            "uuid": "8c87be17-2564-41d2-a6a4-1239e06ef9d2"
          },
          "displayOrder": 5,
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Third Gender"
              ]
            }
          ],
          "mandatory": true,
          "name": "Target Community",
          "type": "SingleSelect",
          "uuid": "dc0111f3-e6a4-4b0a-b371-22a08b46753d"
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
          "displayOrder": 6,
          "keyValues": [],
          "mandatory": true,
          "name": "Target community",
          "type": "SingleSelect",
          "uuid": "8422bb5c-5f52-4f4c-8634-b46946f23856",
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
          "displayOrder": 7,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of Initiative",
          "type": "SingleSelect",
          "uuid": "d1f02602-c810-487f-94bf-f007f7ef1749"
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
                          "scope": "encounter",
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
          "displayOrder": 8,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of disaster",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnyAnswerConceptName("231a6748-7677-4eb1-8a37-15a0ab207d67","cbf0805f-aac1-40b9-b78c-1c568b86ef24").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "4876ae04-561f-472e-b3bb-5f0b414faa45"
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
          "displayOrder": 9,
          "keyValues": [],
          "mandatory": true,
          "name": "Activities done",
          "type": "MultiSelect",
          "uuid": "11710c4b-0ba8-4d22-9a75-dbce6e490b1a",
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
          "displayOrder": 10,
          "keyValues": [],
          "mandatory": false,
          "name": "POC ID",
          "type": "SingleSelect",
          "uuid": "d69e7abc-28cb-4b42-bb9f-a2f3032bc120",
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
          "displayOrder": 11,
          "keyValues": [],
          "mandatory": false,
          "name": "Remarks",
          "type": "SingleSelect",
          "uuid": "aa228975-be40-4b94-8560-c4fa5a1a5f95"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Image",
            "name": "Distribution Images",
            "uuid": "1c4eb3f2-4d1e-4618-aaae-74475c5d8e08"
          },
          "displayOrder": 12,
          "keyValues": [
            {
              "key": "imageQuality",
              "value": 1
            }
          ],
          "mandatory": false,
          "name": "Images",
          "type": "SingleSelect",
          "uuid": "4d514129-c4b6-41eb-8acb-65f80b43357e"
        }
      ],
      "name": "Distribution Related Details",
      "timed": false,
      "uuid": "1a48160f-02ae-485e-8abc-65bedd8d4b32"
    },
    {
      "display": "Dispatched Materials distributed",
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
          "uuid": "cc7507dd-243d-4760-9c9a-f3235e637331",
          "voided": true
        }
      ],
      "name": "Dispatched Materials distributed",
      "timed": false,
      "uuid": "8969dd8e-442c-405b-a49c-557cd0a1f88d",
      "voided": true
    },
    {
      "display": "Materials distributed",
      "displayOrder": 5,
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
    const formElement = params.formElement;
    const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
    const _ = imports.lodash;
    const firstDispatchEncounter = _.find(encounter.individual.encounters, enc => enc.encounterType.name === 'Dispatch');
    const conceptsToCopy = ['f25402e3-8d6c-4436-ba81-ad7b4f97131e','ef2f247e-209f-4a8a-9fc5-4b27264d0cec',
                            '384789ec-1f69-4407-932c-9451d4e05a51','44cd43e1-d2a7-46e4-92f3-1fcf3508f8aa',
                            'e7963e9a-f0ac-4666-af69-173e4e8bbcf6','53b13383-40de-4b5e-ab9f-94d0ec216c89',
                            '944cb7a1-a537-4e4f-bd15-74db621abefa','1b637749-2537-42d5-a5a4-b7e522967855',
                            'aaede45f-53ca-40dc-a349-feca810810f5','318902e6-f7a5-4e70-8f5f-72b83f3ccb22'];
    
    if(firstDispatchEncounter) {
      const materialsDispatchedValue = firstDispatchEncounter.getObservationValue('267fbb23-4168-4fb1-9bce-6b0d5f378c46');
      const valueArray = _.map(materialsDispatchedValue, groupObservations => _.pick(groupObservations.toResource, conceptsToCopy));
      statusBuilder.value(valueArray);
    }
    return statusBuilder.build();
  },
          "type": "SingleSelect",
          "uuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982"
        },
        {
          "concept": {
            "active": true,
            "answers": [
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
                "name": "Contributed item",
                "order": 2,
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910"
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
            "name": "Type of material received (voided~207594)",
            "uuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
            "voided": true
          },
          "displayOrder": 2,
          "keyValues": [],
          "mandatory": true,
          "name": "Type of material",
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "type": "SingleSelect",
          "uuid": "6dff44be-188d-4daf-8fc5-2c1994e195bb",
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
                "order": 2,
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Purchased item",
                "order": 0,
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
              },
              {
                "active": true,
                "answers": [],
                "dataType": "NA",
                "name": "Kit",
                "order": 1,
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624"
              }
            ],
            "dataType": "Coded",
            "name": "Type of Material (voided~207317)",
            "uuid": "274a5e34-2cc8-46f9-9e1f-a0044e7397fc",
            "voided": true
          },
          "displayOrder": 3,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Type of material",
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "type": "SingleSelect",
          "uuid": "0564203c-55a8-41aa-b829-348059270e78",
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
          "displayOrder": 4,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Type of material",
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "type": "SingleSelect",
          "uuid": "40565b64-ac03-45d2-aa58-132825b479fb"
        },
        {
          "concept": {
            "active": true,
            "answers": [],
            "dataType": "Text",
            "name": "Dispatch Line Item Id",
            "uuid": "44cd43e1-d2a7-46e4-92f3-1fcf3508f8aa"
          },
          "displayOrder": 5,
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "mandatory": false,
          "name": "Dispatch Line Item Id",
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
          "uuid": "11a77c03-03e5-4ea9-9af5-239305f1a9e8"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "0f56eada-e5e0-486d-9c6d-699a4a6de592",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "1aa26d5a-cc93-427a-80af-b039f5a3933a",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd","971c7a76-d296-4d47-9a90-47a612ceb4ca","7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd").matches();
  
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
          "uuid": "dbb34527-7ee2-4c1a-9043-31cd48451d10",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd","971c7a76-d296-4d47-9a90-47a612ceb4ca","e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
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
          "uuid": "c6a2727b-e20f-4b3a-b5f4-620cbf33ae20",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "51f0572f-59a9-4c3d-bbff-3f9d81f54c51"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "079fe079-3337-41fd-b3fb-6391ddbf94ea"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "e302ecd8-aef5-45bf-8493-0f2d5da61dde"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd","971c7a76-d296-4d47-9a90-47a612ceb4ca","e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
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
          "uuid": "0a7c1138-5720-4d87-8775-65d437017bbd"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","73e4cab9-b0d5-49a8-9cf2-c42f41523143","6f6eb1de-88c4-4df2-a8ae-997a339a78c5","11c11e55-7604-4f38-9f4f-3560e116e76e").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "56e763dc-7f64-41ac-8f81-5510453da7be"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "457a449f-e5c1-47a0-af05-0cf8f4ce30f0"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","73e4cab9-b0d5-49a8-9cf2-c42f41523143","11c11e55-7604-4f38-9f4f-3560e116e76e","6f6eb1de-88c4-4df2-a8ae-997a339a78c5").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "db54e3f7-e335-408e-b817-8ea24f009566"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "4309df3f-8901-4f13-b24a-023707441a78",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "488a8bee-63c1-43e5-82a4-baac2e0f106c",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
          "uuid": "bbe0c504-b175-496f-a95f-51e607598ad9",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "34d7055b-2887-448d-9b7b-5deed0818eec",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "453ddc46-b3f2-4482-81e1-38cb6295eead",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "8fcf8590-6850-456d-9811-59e447a1e0ae",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "40ba4c47-40c8-4f56-aff5-0e045019cb61",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
          "uuid": "4c1a8c53-43d5-49f7-9114-d2c621414832",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
          "uuid": "400e75c2-cdf3-4de9-a7ca-f3bebafc20e9"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "d6c74f14-5f60-47ee-a808-c907ef79054c"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "184948a6-d727-4c57-9df4-0a8031126403"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "2b1d4441-9d38-4738-9c7a-f819e6ae4b39"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624","604f6297-724c-48ec-9078-0d4356d45910","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "9ed9216f-ef18-428f-ae86-d5f3c72a855a",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
          "uuid": "1d11b594-809d-4585-a147-944628abe2dc",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "614ff5e5-012e-46f9-b01b-cefc8e6350fa",
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "type": "SingleSelect",
          "uuid": "52fd3b76-5a19-49e9-a490-51948769eda9",
          "voided": true
        }
      ],
      "name": "Materials distributed",
      "timed": false,
      "uuid": "f43e6596-19d0-4084-8e44-6dc9e15111a6"
    },
    {
      "display": "Kits",
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
          "uuid": "e230134b-a679-4769-96d8-d408333705b1",
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
          "uuid": "159a98ee-3ce9-47ee-922b-ae0777adc649",
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
          "uuid": "0447f442-93f2-458d-9408-f4513a61b2cf",
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
          "uuid": "a58ea178-fa80-49a3-9f99-a478b1c8bab4",
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
          "uuid": "099e922d-09b7-453d-8f90-009308d404dc",
          "voided": true
        }
      ],
      "name": "Kits",
      "timed": false,
      "uuid": "da537f37-e7aa-4862-84ba-75ce6f472b22",
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
      "displayOrder": 7,
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
          "uuid": "2ade2ac1-e3ac-4a5e-9498-f828c945f63d",
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
          "uuid": "a1b5c705-6ad3-4d35-bfee-d4fb5d2dcda4",
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
          "uuid": "c24112cf-d3fa-4e8c-9075-ff89b0d13aab",
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
          "uuid": "e67bb87e-6c8a-461d-8b77-a608c629b6b5",
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
          "uuid": "c6f71e98-905c-4a98-b011-4bd9696a9fee",
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
          "uuid": "1a6cb3a8-5f9e-4cc9-952f-5ad28048ad55",
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
          "uuid": "2c66fec8-57d2-4323-b6a8-8c75089ce3d8",
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
          "uuid": "5584f058-684b-47bc-b578-aebcce1f1ed8",
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
          "uuid": "7b2ddc5a-6c0c-41d5-a7fc-10a4dcebb42c",
          "voided": true
        }
      ],
      "name": "Non-Kit",
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("4745383c-21f3-4650-9358-10ab387f7728").containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
        visibility = condition11 ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "timed": false,
      "uuid": "8ed9d5e9-c6e6-4e57-94e0-a87f26847759",
      "voided": true
    }
  ],
  "formType": "Encounter",
  "name": "Distribution Form (voided~3731)",
  "uuid": "045bf98f-b2d5-4947-98b1-6522d337d17b",
  "validationRule": "",
  "visitScheduleRule": "",
  "voided": true
}