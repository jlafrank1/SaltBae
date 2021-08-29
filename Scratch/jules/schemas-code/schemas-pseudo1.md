scratch-1.md



# UserSheet ------------------------------------
- _ID_
	- unique db ID

- userID
	- Unique
	- String

- env-info
	- ...

- userTags (instead of unique projects, allow tags)
	- Array of Strings
	- unique per userID
		Tag Examples (possibly pre-coded)
			coding
			planning
			project56

- History(name)
	- ... --> rel to timers


# Timers ------------------------------------
- _ID_
	- unique db ID

- timerType
	- pomo 		25m
	- longbr 	15m
	- shortbr 	5m

- timerFinished (was it stopped, or did it finish)
	- bool 		y/n

- interview
		- helpful: 		y/n
		- interrupted:	y/n
		- comment:		String

- userTags
	- rel to tags created by the user... optional

- dateinfo (full date and time)
	- date started
	- date finished