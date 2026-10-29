<div align="center">
    <img title="Sikad | Triathlon App" width="100" height="100" alt="sikad-triathlon-app-logo-agentic" src="https://github.com/user-attachments/assets/d98a7885-379e-4ba1-881d-3ff8394d9129" />

# Triathlon App
A modern music catalogue application for organising, browsing, and discovering music collections with an intuitive user interface.

</center>

## Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-EBEBEB?style=for-the-badge&logo=html5&logoColor=E44D26)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-797777?style=for-the-badge&logo=babel&logoColor=FFD51D)

~✦~

</div>

## Branch Notes: `dev`

**Purpose**: Primary integration branch for active development. Features, fixes, and refactors are merged here before being promoted to production.

**Workflow**: `feature/* → dev → main`

**Notes**

- Keep builds passing.
- Merge tested work only.
- Sync regularly with main.

## Launching the app locally

### Requirements

- **Operating System:**

  - (a) Windows 10 or Windows 11 environment  
    &nbsp;&nbsp;&nbsp;&nbsp;- WSL1 installed to launch Linux Ubuntu environment  
    &nbsp;&nbsp;&nbsp;&nbsp;- Ubuntu LTS 22.04 distro installed
  - (b) Linux Ubuntu (**preferred**)

- **Software:**
  - Visual Studio Code installed
  - Node.js and Git installed

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
