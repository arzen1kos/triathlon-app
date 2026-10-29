<div align="center">
    <img title="Sikad | Triathlon App" width="100" height="100" alt="sikad-triathlon-app-logo-agentic" src="https://github.com/user-attachments/assets/d98a7885-379e-4ba1-881d-3ff8394d9129" />

# Sikad | Triathlon Segment Timer

_Swim. Bike. Run. One clock, every leg._

`Sikad` is a triathlon tracker in the spirit of Strava, built around the thing multisport athletes actually do: switch disciplines mid-session. Instead of recording one activity at a time, you start a session, hit Next Segment when you move from one leg to the next (for example run → bike → swim), and get a timed breakdown of the whole workout.

> The name comes from the Filipino word sikad, meaning to pedal.

</center>

## Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-EBEBEB?style=for-the-badge&logo=html5&logoColor=E44D26)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-797777?style=for-the-badge&logo=babel&logoColor=FFD51D)

~✦~

</div>

## Branch Notes: `feature/core-engine`

**Purpose**: Build the core logic for Sikad: a segmented session timer that lets an athlete move between disciplines (swim, bike, run, plus optional transitions) and get a timed breakdown at the end. This branch contains logic only, with no UI, no hardware APIs and no geolocation.

**Notes**

    - Packaged as `v.1.0.0` 


**Status**: In Progress

## Scope

**In scope**

- `Timer`: injectable clock wrapper so time is deterministic in tests
- `Segment`: a single timed leg with a type, start time, end time and duration
- `Session`: start, next segment, pause, resume, finish, elapsed time and summary
- Input validation and clear error messages for invalid operations
- Jest unit tests for all of the above
**Out of scope**
- User interface (planned for the React + Vite + TypeScript iteration)
- Geolocation, distance and pace
- Persistence, accounts and session history

## Planned commits / tasks

- [ ] Project setup: `package.json`, ES modules, Jest config
- [ ] `Timer` with injectable clock, plus tests
- [ ] `Segment` (type validation, duration calculation), plus tests
- [ ] `Session` lifecycle: start, finish and status guards
- [ ] `Session.nextSegment()` closes the current segment and opens the next with no time gap
- [ ] `Session.pause()` / `resume()` with paused time excluded from durations
- [ ] `Session.getSummary()`: per-segment durations, total and percentage of total
- [ ] Edge-case tests (see below)
- [ ] Class diagram added to `/docs/uml`
- [ ] README updated to match the final API

## Design notes

- Time is read through an injected clock function, never by calling `Date.now()` directly in business logic.
- Durations are stored in milliseconds.
- Allowed segment types: `swim`, `bike`, `run`, `transition`. Segments may be recorded in any order to also support duathlon.
- `Session` status moves through: `idle` → `running` ⇄ `paused` → `finished`.
- Invalid transitions (for example `finish()` before `start()`) throw a descriptive `Error`.

## Edge cases to cover in tests

- Calling `start()` twice
- Calling `nextSegment()` before `start()` or after `finish()`
- Unknown segment type
- Pausing across a segment cut
- Finishing while paused
- Zero-length segments
- Summary with a single segment

## Definition of done

- All planned tasks above are checked off
- All Jest tests pass (`npm test`) with sensible coverage
- Class diagram committed in `/docs/uml`
- README example matches the real API
- No code from other sources without an acknowledgement comment in the file

## Merge plan

1. Keep commits small and focused, with one feature per commit.
2. Run `npm test` before every push.
3. Open a PR into `main` when the definition of done is met.
4. Squash or merge as your course or tutor prefers, then delete the branch.

## Suggested commit message style

```bash
feat(session): add nextSegment to close and open segments
test(session): cover pause across segment cut
docs(uml): add class diagram
```

## Launching the app locally

### Requirements

- **Operating System:**

  - (a) Windows 10 or Windows 11 environment  
    &nbsp;&nbsp;&nbsp;&nbsp;- WSL1 installed to launch Linux Ubuntu environment  
    &nbsp;&nbsp;&nbsp;&nbsp;- Ubuntu LTS 22.04 distro installed
  - (b) Linux Ubuntu (**preferred**)

- **Software:**
  - Visual Studio Code installed
  - Node.js, npm, and Git installed

### Main Steps

1. Cloning the repository:

```bash
git clone https://github.com/arzen1kos/triathlon-app.git

cd triathlon-app
```

2. Installing the package for dependencies

In the parent directory, run the following commands:

```bash
rm -rf node_modules
rm -rf package-lock.json
npm install
```

3. Launching the app

In the parent directory, run the following commands:

```bash
npm run dev
```

---

Created by Arsenie — 2024
