# Background
### Definition
- Current form instance 
  - Form currently being created, edited, exited, or cancelled by the user.
- Base date can be only one of the following for each Current form instance:
Registration/enrolment/encounter/cancel/exit date 
  - Observation date field in Current form 
  - Observation date elsewhere in the Individual data 
  - Scheduled date 
  - Max date 
  - Enrolment Exit date

Unplanned visit may not have a base date. i.e. if we define scheduled date of current form instance's schedule date
- Current form instance = New (if uuid is null).
- Current form instance = Exiting (if uuid is not null).

### Things to remember:
1. We allow only one encounter of a type to be scheduled for a beneficiary.
2. On edit of a form if the scheduled date of the encounter is changed then the scheduled date gets changed.
3. On edit of a form on system recommendations view if the scheduled date of the encounter is same then it is not displayed.
4. We allow scheduling of multiple encounters of different type from a single "current form instance". In such cases there can be different base dates in a single form instance.

### Scenarios due to which all the following complexity is required:
1. User edits the form and changes the base date.
2. User edits the form and changes the base date and set the date to far in the future (lets say 2035).
3. User cancels the encounter and visit scheduling stops but the customer still wants to schedule the next one.
4. User can perform an unplanned visit of the same encounter type as is being scheduled

### Not supported without support/CR/contract etc. As in this is not covered by warranty.
1. Change in due and overdue logic to auto update the existing scheduled encounter dates. Our first option should be suggest that it is supported only schedules created going forward.
2. Unplanned visit of encounter type EncounterTypeB can be allowed but such unplanned visits will not schedule
3. Not scheduling visit on cancellation is not supported (yes double negative). This is because once an encounter is cancelled it cannot be uncancelled or edited. Platform should provide one of these option at which point this will be supported.

### Not Recommended
1. Using tx data upload to create visit schedules. Use data-fix.
2. The base date should almost never be based on real-world date, it should always be based on some date in the application data.

# Implementation
## Given
- Current form instance = FormA
- Encounter type to be scheduled = EncounterTypeB
- Encounter being scheduled = EncounterC (this is of encounter type EncounterTypeB)

### Validation rule
1. FAIL IF FALSE
   - The Base date should always be < max(scheduled date of saved encounters of type EncounterTypeB)
   - AND
   - base date is present
   - AND
   - Current form instance is "existing"

(Reason: Base date cannot be edited to go ahead of all saved encounter scheduled dates)

2. FAIL IF TRUE
   - Cancelled date is present
           AND
   - Base date is absent

(Reason: Absence of base date implies there is no visit scheduling applicable. this is not supported hence failure.
    note base date can be = cancelled date, which case false && true = false, hence no failure. sorry for geeking out.)

### Visit schedule rule
First step always determine clearly what is the base date.
1. Schedule visit only if base date is present, else do not schedule.
- e.g. if an unplanned visit is done then base date may not be present, implying that scheduling is not applicable
- e.g. if a visit is being cancelled then it could be either cancel date or scheduled date