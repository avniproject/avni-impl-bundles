# Avni Bundle Configuration Guide

## From SRS Scoping to Production-Ready Config

This guide documents the workflow for creating Avni bundle configurations from Scoping / SRS (Software Requirements Specification) documents using AI.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Phase 1: Analyze SRS Documents](#phase-1-analyze-srs-documents)
3. [Phase 2: Create/Update Concepts](#phase-2-createupdate-concepts)
4. [Phase 3: Create Forms](#phase-3-create-forms)
5. [Phase 4: Configure Form Mappings](#phase-4-configure-form-mappings)
6. [Phase 5: Set Up User Groups & Privileges](#phase-5-set-up-user-groups--privileges)
7. [Phase 6: Configure Report Cards & Dashboards](#phase-6-configure-report-cards--dashboards)
8. [Phase 7: Overall Colors guidelines](#phase-7-overall-colors-guidelines)
9. [Phase 8: Writing Rules](#phase-8-writing-rules)
10. [Phase 9: Validation & Troubleshooting](#phase-9-validation--troubleshooting)
11. [Best Practices](#best-practices)
12. [Workflow Summary](#workflow-summary)
13. [Quick Reference: Data Types](#quick-reference-data-types)
14. [Quick Reference: Realm Query Syntax](#quick-reference-realm-query-syntax)

---

## Prerequisites

### Required Files Structure
```
<org-name>/
├── concepts.json           # All concepts (questions, answers)
├── encounterTypes.json     # Encounter type definitions
├── formMappings.json       # Links forms to programs/encounters
├── forms/                  # Form JSON files
│   ├── Onboarding.json
│   ├── Monthly Tracking.json
│   ├── Solutioning.json
│   ├── Solutioning Encounter Cancellation.json
│   └── ...
├── groupPrivilege.json     # User permissions
├── groups.json             # User groups
├── operationalEncounterTypes.json
├── operationalPrograms.json
├── programs.json           # Program definitions
├── reportCard.json         # Standard report cards
├── reportDashboard.json    # Dashboard configurations
└── subjectTypes.json       # Subject type definitions
```

### SRS Documents to Gather
- **Subject Types CSV** - Defines entities (e.g., Vyapaari, Beneficiary)
- **Programs CSV** - Program definitions (e.g., Istri, Rural)
- **Forms CSVs** - Field-level specifications for each form
- **User Persona CSV** - User roles and permissions
- **Location Hierarchy CSV** - Address levels
- **Dashboard/Report Cards CSV** - Report card definitions per user group

---

## Phase 1: Analyze SRS Documents

### Step 1.1: Map Subject Types
From SRS Subject Types CSV, extract:
- Subject name
- Type (Person/Household/Group)
- Registration form
- Lowest address level

**Example SRS Entry:**
```
Name: Vyapaari
Type: Person
Registration Form: First Contact
Lowest Address Level: Zone
```

### Step 1.2: Map Programs
From SRS Programs CSV, extract:
- Program name
- Enrolment form
- Exit form
- Target subject type

**Example:**
```
Program: Istri
Enrolment Form: Onboarding
Exit Form: Program Exit
Subject Type: Vyapaari
```

### Step 1.3: Analyze Form Fields
For each form in SRS, document:

| Field | Data Type | Options | Mandatory | Conditional Logic | Validation |
|-------|-----------|---------|-----------|-------------------|------------|
| Age | Numeric | - | Yes | - | 18-80 |
| State | Single-select | MP, MH, Delhi, Other | Yes | - | - |
| Secondary Business Type | Single-select | Cloth, Kirana... | Yes | Show when Secondary Business = Yes | - |

### Step 1.4: Count and Categorize
- Total fields per form
- Coded (single/multi-select) fields
- Conditional fields (skip logic)
- Calculated fields
- Validation rules needed

---

## Phase 2: Create/Update Concepts

### Step 2.1: Concept Structure

**Answer Concept (NA type):**
```json
{
  "name": "Yes",
  "uuid": "ef6ead3d-5a0a-43f5-bc2a-442f028880ba",
  "dataType": "NA",
  "active": true
}
```

**Question Concept (Coded type):**
```json
{
  "name": "Secondary Business",
  "uuid": "0745a7a2-1b5b-4481-a9d3-5bb0a2ed8fe7",
  "dataType": "Coded",
  "active": true,
  "answers": [
    { "name": "Yes", "uuid": "ef6ead3d-5a0a-43f5-bc2a-442f028880ba", "order": 0 },
    { "name": "No", "uuid": "5cb16c8b-e8a0-4978-a3e3-26c2d2f2f835", "order": 1 }
  ]
}
```

**Numeric Concept:**
```json
{
  "name": "Age",
  "uuid": "e70029f1-f840-437a-ac6e-ff740963dec0",
  "dataType": "Numeric",
  "lowAbsolute": 18,
  "highAbsolute": 80,
  "unit": "Years",
  "active": true
}
```

### Step 2.2: Key Rules for Concepts

1. **Reuse Answer UUIDs**: Common answers like "Yes", "No", "Other" should have consistent UUIDs across all questions
2. **Case-Insensitive Uniqueness**: Concept names must be unique (case-insensitive)
3. **NA Type for Answers**: All answer options must be separate NA-type concepts
4. **Void Don't Delete**: Mark obsolete concepts as `voided: true` instead of deleting

### Step 2.3: Validation Script
```javascript
// Check for duplicate names and UUID mismatches
const concepts = require('./concepts.json');
const answerMap = {};
concepts.forEach(c => {
  if (c.dataType === 'NA' && !c.voided) {
    answerMap[c.name] = c.uuid;
  }
});

concepts.forEach(c => {
  if (c.dataType === 'Coded' && c.answers) {
    c.answers.forEach(a => {
      if (answerMap[a.name] && answerMap[a.name] !== a.uuid) {
        console.log('UUID mismatch:', c.name, '->', a.name);
      }
    });
  }
});
```

---

## Phase 3: Create Forms

### Step 3.1: Form Structure
```json
{
  "name": "Onboarding",
  "uuid": "3534a341-adb7-4b62-bb4a-1563ae324129",
  "formType": "ProgramEnrolment",
  "formElementGroups": [...],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}
```

### Step 3.2: Form Types
| formType | Use Case |
|----------|----------|
| `IndividualProfile` | Subject registration |
| `ProgramEnrolment` | Program enrolment |
| `ProgramExit` | Program exit |
| `ProgramEncounter` | Program-specific encounters |
| `ProgramEncounterCancellation` | Cancellation form for program encounters |
| `Encounter` | General encounters |
| `IndividualEncounterCancellation` | Cancellation form for general encounters |

### Step 3.3: Form Element Groups
```json
{
  "uuid": "760f3632-afc4-4809-a0d1-0a48b4ed5012",
  "name": "Basic Vyapaari Details",
  "displayOrder": 1.0,
  "formElements": [...],
  "timed": false
}
```

### Step 3.4: Form Elements
```json
{
  "name": "Age",
  "uuid": "a1b2c3d4-ob04-4000-8000-000000000005",
  "keyValues": [],
  "concept": {
    "name": "Age",
    "uuid": "e70029f1-f840-437a-ac6e-ff740963dec0",
    "dataType": "Numeric",
    "active": true
  },
  "displayOrder": 4,
  "type": "SingleSelect",
  "mandatory": true
}
```

### Step 3.5: Declarative Rules (Skip Logic)
```json
{
  "declarativeRule": [{
    "actions": [{ "actionType": "showFormElement" }],
    "conditions": [{
      "compoundRule": {
        "rules": [{
          "lhs": {
            "type": "concept",
            "scope": "enrolment",
            "conceptName": "Secondary Business",
            "conceptUuid": "0745a7a2-1b5b-4481-a9d3-5bb0a2ed8fe7"
          },
          "rhs": {
            "type": "answerConcept",
            "answerConceptNames": ["Yes"],
            "answerConceptUuids": ["ef6ead3d-5a0a-43f5-bc2a-442f028880ba"]
          },
          "operator": "containsAnswerConceptName"
        }]
      }
    }]
  }]
}
```

### Step 3.6: Validation Rules
```javascript
"validationRule": "'use strict';\n({params, imports}) => {\n  const entity = params.entity;\n  const validationResults = [];\n  \n  const age = entity.getObservationValue('Age');\n  if (age && (age < 18 || age > 80)) {\n    validationResults.push(imports.common.createValidationError('Age must be between 18 and 80'));\n  }\n  \n  return validationResults;\n};"
```

### Step 3.7: Decision Rules (Auto-Calculated Fields)
```javascript
"decisionRule": "'use strict';\n({params, imports}) => {\n  const entity = params.entity;\n  const decisions = { enrolmentDecisions: [], encounterDecisions: [], registrationDecisions: [] };\n  \n  const revenue = entity.getObservationValue('Monthly Revenue');\n  const expense = entity.getObservationValue('Monthly Expense');\n  if (revenue !== undefined && expense !== undefined) {\n    decisions.enrolmentDecisions.push({ name: 'Monthly Income', value: revenue - expense });\n  }\n  \n  return decisions;\n};"
```

### Step 3.8: QuestionGroup (Repeatable Fields)
For repeatable sections like "Solutioning Rounds", use QuestionGroup dataType:

**Parent QuestionGroup Element:**
```json
{
  "name": "Solutioning Round",
  "uuid": "rs03-0004-4000-8000-000000000001",
  "keyValues": [{ "key": "repeatable", "value": true }],
  "concept": {
    "name": "Solutioning Round",
    "uuid": "a1b2c3d4-1111-4000-8000-000000000050",
    "dataType": "QuestionGroup",
    "answers": [],
    "active": true
  },
  "displayOrder": 3.0,
  "type": "SingleSelect",
  "mandatory": false
}
```

**Child Elements (reference parent via parentFormElementUuid):**
```json
{
  "name": "Solutioning Round Number",
  "uuid": "rs03-0005-4000-8000-000000000001",
  "concept": {
    "name": "Solutioning Round Number",
    "uuid": "a1b2c3d4-1111-4000-8000-000000000051",
    "dataType": "Numeric"
  },
  "displayOrder": 4.0,
  "type": "SingleSelect",
  "parentFormElementUuid": "rs03-0004-4000-8000-000000000001",
  "mandatory": true
}
```

### Step 3.9: Cancellation Forms
Cancellation forms capture reasons when encounters are cancelled:

```json
{
  "name": "Solutioning Encounter Cancellation",
  "uuid": "be6e0c20-c50c-498b-bc15-f9266b7fef55",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [{
    "uuid": "rsc01-0001-4000-8000-000000000001",
    "name": "Solutioning Cancellation",
    "displayOrder": 1.0,
    "formElements": [{
      "name": "Reason for Cancellation",
      "uuid": "rsc01-0002-4000-8000-000000000001",
      "concept": {
        "name": "Solutioning cancellation reason",
        "uuid": "a1b2c3d4-1111-4000-8000-000000000080",
        "dataType": "Text"
      },
      "displayOrder": 1.0,
      "type": "SingleSelect",
      "mandatory": true
    }],
    "timed": false
  }]
}
```

**Key Points:**
- Use unique cancellation reason concepts per encounter type for better reporting
- Keep cancellation forms simple (usually just reason field)
- Link via formMappings with matching encounterTypeUUID

---

## Phase 4: Configure Form Mappings

### Step 4.1: Form Mapping Structure
```json
{
  "uuid": "7f997ded-7c13-4750-b227-7321844134c5",
  "formUUID": "3534a341-adb7-4b62-bb4a-1563ae324129",
  "programUUID": "ce21177a-d97a-4f7a-a1bf-439eba4f3f85",
  "subjectTypeUUID": "e88f5481-e414-425c-b773-ae0a999b14e5",
  "formType": "ProgramEnrolment",
  "formName": "Onboarding",
  "enableApproval": false
}
```

### Step 4.2: Mapping Types
| Scenario | Required Fields |
|----------|-----------------|
| Registration | formUUID, subjectTypeUUID |
| Program Enrolment | formUUID, programUUID, subjectTypeUUID |
| Program Encounter | formUUID, programUUID, encounterTypeUUID, subjectTypeUUID |
| General Encounter | formUUID, encounterTypeUUID, subjectTypeUUID |

---

## Phase 5: Set Up User Groups & Privileges

### Step 5.1: Groups Structure
```json
[
  { "name": "Saathi", "uuid": "..." },
  { "name": "Program Operations Lead", "uuid": "..." },
  { "name": "M&E", "uuid": "..." },
  { "name": "Admin", "uuid": "..." }
]
```

### Step 5.2: Group Privileges
```json
{
  "uuid": "a1b2c3d4-gp01-4000-8000-000000000001",
  "groupUUID": "<group-uuid>",
  "privilegeType": "ViewSubject",
  "subjectTypeUUID": "<subject-type-uuid>",
  "programUUID": null,
  "encounterTypeUUID": null,
  "allow": true
}
```

### Step 5.3: Common Privilege Types
- `ViewSubject`, `EditSubject`, `RegisterSubject`
- `EnrolSubject`, `ViewEnrolmentDetails`, `EditEnrolmentDetails`, `ExitEnrolment`
- `ViewVisit`, `ScheduleVisit`, `PerformVisit`, `EditVisit`, `CancelVisit`

---

## Phase 6: Configure Report Cards & Dashboards

### Step 6.1: Report Card Types

| Type | File | Use Case |
|------|------|----------|
| Standard | `reportCard.json` | Built-in cards (Due visits, Overdue, Total, Recent) |

### Step 6.2: Standard Report Cards
Standard report cards use predefined `standardReportCardType` UUIDs:

```json
{
  "uuid": "6085c2f4-52e7-4b08-85b6-d6b2612b4cf5",
  "name": "Scheduled visits",
  "color": "#388e3c",
  "nested": false,
  "count": 1,
  "standardReportCardType": "27020b32-c21b-43a4-81bd-7b88ad3a6ef0",
  "standardReportCardInputSubjectTypes": [],
  "standardReportCardInputPrograms": [],
  "standardReportCardInputEncounterTypes": [],
  "voided": false
}
```

**Common Standard Report Card Types:**
| Name | UUID |
|------|------|
| Scheduled visits | `27020b32-c21b-43a4-81bd-7b88ad3a6ef0` |
| Overdue visits | `9f88bee5-2ab9-4ac4-ae19-d07e9715bdb5` |
| Total | `1fbcadf3-bf1a-439e-9e13-24adddfbf6c0` |
| Recent registrations | `88a7514c-48c0-4d5d-a421-d074e43bb36c` |
| Recent enrolments | `a5efc04c-317a-4823-a203-e62603454a65` |
| Recent visits | `77b5b3fa-de35-4f24-996b-2842492ea6e0` |

### Step 6.3: Custom Report Cards
Custom report cards use Realm database queries for complex business logic:

```json
{
  "uuid": "ud01-rc01-4000-8000-000000000001",
  "name": "Pending Business solution",
  "description": "Show Solutions where Business solution is pending",
  "query": "({params, imports}) => { ... }",
  "color": "#f7a76c",
  "nested": false,
  "count": 1,
  "standardReportCardInputSubjectTypes": [],
  "standardReportCardInputPrograms": [],
  "standardReportCardInputEncounterTypes": [],
  "voided": false
}
```

### Step 6.4: Writing Custom Queries
Custom queries use Realm database syntax with JavaScript filtering:

**Basic Structure:**
```javascript
({params, imports}) => {
    const _ = imports.lodash;
    
    return params.db.objects('Individual')
        .filtered(`voided = false AND subjectType.name = 'Vyapaari'`)
        .filtered(`SUBQUERY(enrolments, $enrolment, 
            $enrolment.program.name = 'Rural' 
            AND $enrolment.programExitDateTime = null 
            AND $enrolment.voided = false
        ).@count > 0`)
        .filter((individual) => {
            // JavaScript filter for complex logic
            return someCondition;
        });
}
```

**Query Patterns:**

1. **Filter by Program Enrolment:**
```javascript
.filtered(`SUBQUERY(enrolments, $enrolment, 
    $enrolment.program.name = 'Rural' 
    AND $enrolment.programExitDateTime = null 
    AND $enrolment.voided = false
).@count > 0`)
```

2. **Filter by Encounter Type:**
```javascript
.filtered(`SUBQUERY(enrolments, $enrolment, 
    SUBQUERY($enrolment.encounters, $encounter, 
        $encounter.encounterType.name = 'Monthly Tracking' 
        AND $encounter.voided = false 
        AND $encounter.encounterDateTime != null
    ).@count > 0
).@count > 0`)
```

3. **Get Observation Value:**
```javascript
const value = individual.getObservationReadableValue('Concept Name');
const encValue = encounter.getObservationReadableValue('Concept Name');
```

4. **Sort Encounters by Date (Latest First):**
```javascript
const encounters = enrolment.encounters
    .filter(enc => enc.encounterType.name === 'Monthly Tracking' && enc.voided === false)
    .sort((a, b) => new Date(b.encounterDateTime) - new Date(a.encounterDateTime));
const latestEncounter = encounters[0];
```

### Step 6.5: Example Custom Report Cards

**1. Pending Business Solution:**
```javascript
({params, imports}) => {
    return params.db.objects('Individual')
        .filtered(`voided = false AND subjectType.name = 'Vyapaari'`)
        .filter((individual) => {
            const enrolments = individual.enrolments.filter(e => 
                e.program.name === 'Rural' && 
                e.programExitDateTime === null && 
                e.voided === false
            );
            return enrolments.some(enrolment => {
                const solutioningEncounters = enrolment.encounters.filter(enc => 
                    enc.encounterType.name === 'Rural Solutioning' && 
                    enc.voided === false && 
                    enc.encounterDateTime !== null
                );
                return solutioningEncounters.some(enc => {
                    const hasStarted = enc.getObservationReadableValue('Has Business Solutioning Started?');
                    return hasStarted === 'No';
                });
            });
        });
}
```

**2. Income Below Baseline:**
```javascript
({params, imports}) => {
    return params.db.objects('Individual')
        .filtered(`voided = false AND subjectType.name = 'Vyapaari'`)
        .filter((individual) => {
            const baselineIncome = individual.getObservationReadableValue('Approximate Baseline Income');
            if (!baselineIncome) return false;
            
            const enrolments = individual.enrolments.filter(e => 
                e.program.name === 'Rural' && e.programExitDateTime === null
            );
            return enrolments.some(enrolment => {
                const trackingEncounters = enrolment.encounters
                    .filter(enc => enc.encounterType.name === 'Rural Monthly Tracking' && enc.encounterDateTime)
                    .sort((a, b) => new Date(b.encounterDateTime) - new Date(a.encounterDateTime));
                
                if (trackingEncounters.length === 0) return false;
                const revenue = trackingEncounters[0].getObservationReadableValue('Revenue');
                return revenue && revenue < baselineIncome;
            });
        });
}
```

### Phase 7: Overall Colors guidelines

### Card Colors (10 shades with darker borders)
| # | Card | Border |
|---|------|--------|
| 1 | `#E7F3F8` | `#D4E6EE` |
| 2 | `#EBF8E7` | `#D3EED3` |
| 3 | `#F8F7E7` | `#EDEED3` |
| 4 | `#E7F8F6` | `#D4EEEE` |
| 5 | `#F8EFE7` | `#EEE0D4` |
| 6 | `#EBE7F8` | `#D9D3EE` |
| 7 | `#E7F3F8` | `#D4E6EE` |
| 8 | `#F3F3F4` | `#DBDBDF` |
| 9 | `#E5EDF9` | `#C7DAF5` |
| 10 | `#EBFCFE` | `#C5F6FB` |

### Listing Colors (grey border: `#DCDCDC`)
| # | Background |
|---|------------|
| 1-5 | `#E7F3F8` `#EBF8E7` `#F8F7E7` `#E7F8F6` `#F8EFE7` |
| 6-10 | `#EBE7F8` `#F8E7F1` `#F3F3F4` `#E6EEFA` `#EBFCFE` |

### Program Colors (10 shades)
| # | Color |
|---|-------|
| 1-5 | `#DBEFFB` `#DBFBF3` `#E5FBDB` `#FBEEDB` `#DBE4FB` |
| 6-10 | `#E7DBFB` `#FBDBF4` `#FBDBDE` `#FBFADB` `#DBF7FB` |

### Status Colors
| Status | Background | Text |
|--------|------------|------|
| Scheduled | `#F1EDE5` | `#C88A67` |
| Overdue | `#F5EAEA` | `#D18080` |
| Completed | `#E0F1E1` | `#489047` |

### Error State
| Background | Border | Text |
|------------|--------|------|
| `#FFF4F4` | `#EED3D3` | `#AE4747` |

---

## Phase 8: Writing Rules

Rules are JavaScript functions written as **strings within JSON files**. They execute on the client (mobile/web).

### Rule Structure
All rules follow this pattern:
```javascript
({params, imports}) => {
    // params contains entity data (individual, programEnrolment, programEncounter, etc.)
    // imports contains: moment, lodash, rulesConfig, common
    return result;
}
```

---

### 1. Subject Summary Rule
**Location:** `subjectTypes.json` → `subjectSummaryRule`

Displays key information on subject dashboard.

```javascript
({params, imports}) => {
    const { summaries, individual } = params;
    
    // From registration
    const obs = individual.findObservation('Concept Name');
    if (obs) {
        summaries.push({ name: 'Display Label', value: obs.getReadableValue() });
    }
    
    // From enrolment
    const enrolment = individual.enrolments.find(e => 
        e.program.name === 'Program Name' && !e.voided && !e.programExitDateTime
    );
    if (enrolment) {
        const val = enrolment.getObservationReadableValue('Concept Name');
        if (val) summaries.push({ name: 'Label', value: val });
    }
    
    return summaries;
}
```

---

### 2. Enrolment Summary Rule
**Location:** `programs.json` → `enrolmentSummaryRule`

Displays key information on program enrolment dashboard.

```javascript
({params, imports}) => {
    const summaries = [];
    const programEnrolment = params.programEnrolment;
    
    // From enrolment observations
    const obs = programEnrolment.findObservation('Concept Name');
    if (obs) summaries.push({ name: 'Label', value: obs.getValue() });
    
    // From encounters
    const latestObs = programEnrolment.findLatestObservationFromEncounters('Concept Name');
    if (latestObs) summaries.push({ name: 'Label', value: latestObs.getValue() });
    
    return summaries;
}
```

---

### 3. Eligibility Check Rule
**Location:** `programs.json` → `enrolmentEligibilityCheckRule`
**Location:** `encounterTypes.json` → `encounterEligibilityCheckRule`

Controls which subjects can enrol in a program.

```javascript
({params, imports}) => {
    const individual = params.entity;
    
    // Example: Female aged 10+
    return individual.isFemale() && individual.getAgeInYears() >= 10;
}
```

---

### 4. Visit Schedule Rule
**Location:** Form `.json` file → `visitScheduleRule`

Schedules next encounters based on current form data.

```javascript
({params, imports}) => {
    const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({programEnrolment: params.entity.programEnrolment});
    const moment = imports.moment;
    
    // Determine base date
    const baseDate = params.entity.encounterDateTime || params.entity.earliestVisitDateTime;
    
    // Check if already scheduled
    const isAlreadyScheduled = params.entity.programEnrolment.hasEncounterOfType('Follow Up');
    
    if (!isAlreadyScheduled && baseDate) {
        scheduleBuilder.add({
            name: 'Follow Up',
            encounterType: 'Follow Up',
            earliestDate: moment(baseDate).add(7, 'days').toDate(),
            maxDate: moment(baseDate).add(14, 'days').toDate()
        });
    }
    
    return scheduleBuilder.getAll();
}
```

**Key Guidelines:**
- Always check `isAlreadyScheduled()` to prevent duplicates
- Base date should come from application data, not real-world date
- Handle cancellation scenarios appropriately

---

### 5. Decision Rule
**Location:** Form `.json` file → `decisionRule`

Auto-populates observations based on form data.

```javascript
({params, imports}) => {
    const decisions = { enrolmentDecisions: [], encounterDecisions: [] };
    const programEncounter = params.entity;
    
    // Calculate derived value
    const weight = programEncounter.getObservationValue('Weight');
    const height = programEncounter.getObservationValue('Height');
    
    if (weight && height) {
        const bmi = weight / ((height/100) * (height/100));
        decisions.encounterDecisions.push({
            name: 'BMI',
            value: bmi.toFixed(2)
        });
    }
    
    return decisions;
}
```

---

### 6. Validation Rule (Form Element)
**Location:** Form `.json` file → formElement `rule`

Controls visibility, default values, and validation for form fields.

```javascript
({params, imports}) => {
    const entity = params.entity;
    const formElement = params.formElement;
    const moment = imports.moment;
    
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    
    // Conditional visibility
    const condition = entity.getObservationReadableValue('Some Field');
    visibility = condition === 'Yes';
    
    // Default value from previous data
    const prevObs = entity.programEnrolment.findLatestObservationFromEncounters('Weight');
    if (prevObs) value = prevObs.getReadableValue();
    
    // Validation
    const dateValue = entity.getObservationValue('Date Field');
    if (dateValue && moment(dateValue).isAfter(moment())) {
        validationErrors.push('Date cannot be in the future');
    }
    
    return new imports.rulesConfig.FormElementStatus(
        formElement.uuid, visibility, value, answersToSkip, validationErrors
    );
}
```

---

### 7. Form-Level Validation Rule
**Location:** Form `.json` file → `validationRule`

Validates entire form before save.

```javascript
({params, imports}) => {
    const programEncounter = params.entity;
    const moment = imports.moment;
    const validationResults = [];
    
    // Example: Prevent completing overdue visits
    if (moment(programEncounter.maxVisitDateTime).isBefore(moment(), 'day')) {
        validationResults.push(
            imports.common.createValidationError('Cannot complete an overdue visit. Please cancel.')
        );
    }
    
    return validationResults;
}
```

---

### Common Utility Methods

| Method | Description |
|--------|-------------|
| `individual.findObservation('name')` | Get observation by concept name |
| `individual.getObservationReadableValue('name')` | Get readable value directly |
| `enrolment.findLatestObservationFromEncounters('name')` | Latest value from all encounters |
| `enrolment.findLatestObservationInEntireEnrolment('name')` | Search enrolment + encounters |
| `enrolment.hasCompletedEncounterOfType('type')` | Check if encounter completed |
| `individual.getAgeInYears()` | Get age |
| `individual.isFemale()` / `isMale()` | Gender check |
| `moment(date).add(7, 'days')` | Date manipulation |

---


## Phase 9: Validation & Troubleshooting

### Common Upload Errors

| Error | Cause | Fix |
|-------|-------|-----|
| Form not found | formMapping references non-existent form UUID | Verify form file exists with matching UUID |
| encounter_type_id null | operationalEncounterType references missing encounterType | Add `name` field to encounterType reference |
| Duplicate group privilege | Same privilege defined twice | Remove duplicate entries |
| Concept UUID mismatch | Answer UUID doesn't match NA concept | Use consistent UUIDs from answerMap |
| Concept not found | Form references concept not in concepts.json | Add missing concept to concepts.json first |
| Webapp build test failure | Invalid JSON syntax in report cards | Escape backticks and special chars in query strings |

### Validation Checklist
- [ ] All concept names are unique (case-insensitive)
- [ ] All answer UUIDs match their NA concept definitions
- [ ] All form UUIDs are unique
- [ ] All formMappings reference existing forms
- [ ] All encounterTypes referenced in operationalEncounterTypes exist
- [ ] No duplicate groupPrivileges
- [ ] All concepts used in forms exist in concepts.json
- [ ] Custom report card queries have valid JSON escaping
- [ ] Cancellation forms have unique cancellation reason concepts

### Concept Verification Before Form Creation
Always verify concepts exist before creating forms:

```bash
# Check if concept exists
grep -i "concept name" concepts.json

# Check concept UUID
grep "uuid-to-check" concepts.json
```

**Workflow:**
1. Extract all concept names/UUIDs from form
2. Verify each exists in concepts.json
3. Add missing concepts with unique UUIDs
4. Then create/update the form

---

## Best Practices

### UUID Management
1. Use consistent UUID format: `a1b2c3d4-xxxx-4000-8000-xxxxxxxxxxxx`
2. Keep a UUID registry to avoid duplicates
3. Never reuse UUIDs for different entities

### Voiding vs Deleting
- **Always void** obsolete items instead of deleting
- Naming convention: `"Original Name (voided~reason)"`
- Set `"voided": true`

### Form Consolidation
- Prefer entity-type-specific clones over single unified forms
- If no difference, only then share forms across programs or encounters types via multiple formMappings
- - Use declarative rules for program-specific field visibility

### Concept Reuse
- Reuse Concepts across forms where ever it makes business sense
- Create common answer concepts once (Yes, No, Other, etc.)
- Reference same UUID across all questions
- Maintain answerMap for consistency checks

### Report Card Best Practices
1. **Naming Convention:** Use descriptive names that match SRS specifications
2. **File Organization:** 
   - `reportCard.json` for standard cards shared across user groups
3. **Query Optimization:**
   - Use Realm `.filtered()` for initial filtering (faster)
   - Use JavaScript `.filter()` only for complex logic that can't be expressed in Realm queries
4. **JSON Escaping in Queries:**
   - Backticks (`) in template literals must work within JSON strings
   - Test JSON validity before deployment
5. **Color Consistency:** Use standard color palette across all report cards

### Form-Concept Dependency Management
**Always create concepts before forms:**
1. Analyze form requirements from SRS
2. Identify all concepts needed (questions + answers)
3. Check concepts.json for existing concepts to reuse
4. Add missing concepts with unique UUIDs
5. Create/update form referencing the concepts
6. Verify all concept UUIDs in form match concepts.json

---

## Workflow Summary

```
1. ANALYZE SRS
   └── Extract subject types, programs, forms, fields, users, dashboards

2. CREATE CONCEPTS (Upload First)
   └── NA concepts (answers) → Coded concepts (questions) → Other types
   └── Include cancellation reason concepts
   └── Upload concepts.json separately first

3. BUILD FORMS
   └── Form structure → Groups → Elements → Skip logic → Validation
   └── Include cancellation forms for each encounter type

4. CONFIGURE MAPPINGS
   └── Link forms to programs/encounters/subject types
   └── Include cancellation form mappings

5. SET PERMISSIONS
   └── Groups → Privileges per group

6. CREATE REPORT CARDS
   └── Standard cards (reportCard.json)
   └── Custom cards with Realm queries

7. UPLOAD BUNDLE
   └── First upload: concepts.json only
   └── Second upload: full bundle
   └── Re-upload if ordering issues occur (dependencies may need multiple uploads)

8. VALIDATE & TEST
   └── Verify forms render correctly
   └── Test skip logic and validations
   └── Confirm report cards show expected data
```

---

## Quick Reference: Data Types

| SRS Type | Avni dataType | Form Element type |
|----------|---------------|-------------------|
| Text | Text | SingleSelect |
| Numeric | Numeric | SingleSelect |
| Date | Date | SingleSelect |
| Single-select | Coded | SingleSelect |
| Multi-select | Coded | MultiSelect |
| Image | Image | SingleSelect |
| Phone | PhoneNumber | SingleSelect |
| Repeatable Group | QuestionGroup | SingleSelect (with `repeatable: true` keyValue) |

---

## Quick Reference: Realm Query Syntax

| Operation | Syntax |
|-----------|--------|
| Basic filter | `.filtered('voided = false')` |
| String match | `.filtered("name = 'Value'")` |
| Subquery count | `SUBQUERY(collection, $var, condition).@count > 0` |
| OR condition | `(condition1 OR condition2)` |
| AND condition | `condition1 AND condition2` |
| Null check | `field = null` or `field != null` |
| Date comparison | `dateField <= $0`, date` (pass date as parameter) |

---