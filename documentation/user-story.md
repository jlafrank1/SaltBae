# User Story

SaltBae is at its heart a simple Pomodoro timer. What we thought would be a useful twist to that is the ability for a user to track how someone has used the Pomodoro timers over a longer period of time.

## Account Creation
> this may not be necessary for MVP but will at least be emulated with a default user account

Interfacing with the app will start with creating or logging in with a user account. This allows usage tracking to remain private to the particular user.

## Timers
> For the sake of testing, these timers may be presented in seconds but converted later to minutes.

Following general Pomodoro-style standards, the user will have three timers to choose from. We are setting these to preset times, with the option to allow the user to add one ore more custom time values.
1. **Pomodoro timer**: 25 minutes
2. **Long Break timer**: 15 minutes
3. **Short Break timer**: 5 minutes

After selecting a timer, the user will be presented with three sets of options:
1. Play/Pause toggle
   - This simply allows the user to pause a timer in progress.
   - Note: After considering the Pomodoro technique further, we have decided to remove this function as any interruption that would require the user to pause a timer should instead have them stop the Pomodoro to take a 5 minute break instead.
2. Stop button
   - This lets the user stop a timer in progress, pushing forward to the interview.
3. Tag Selection
   - This is a simple list of checkboxes to tag a timer with basic descriptions of what they are doing.
     - Included should be:
       - Work, Research, Meeting
       - ProjectA, ProjectB, ProjectC
       - Note: This was not implemented, but may be for future versions.

## Interview
> The intent of the detailed timer selections and now the post-timer interview is to collect information for the user to refer to later to gauge how they are spending their time.

Some very brief interview options will be provided after a timer is either stopped or ends on its own.
- Was this useful? y/n
- Were you interrupted? y/n
- A small comment box for a text note.

These should be optional but nice to know.

## Post-Interview
After the interview is completed, the information collected form both the timer page and subsequent interview will be stored in a "projects" db for later reference.

## Index/Show
The user should be able to display a list of their timer history.

> outside of MVP: some data display and graphing options would be great here!

---
[**HOME**](../README.md)
