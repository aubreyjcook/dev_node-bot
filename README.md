# dev_node-bot

Node.js based botting with Express.

## Purpose

Master/Drone Bot project within Node.js. Utilization of Express.js. Terminal based commands from the master to the drone. Drone systems directed at Linux systems that run the bot. Potential for undetected botting within Linux and other systems. Basis of Botnet.

## Todos

- [ ] Todo 1
- [ ] Todo 2

## Building

```
npx tsc
npm run build

npm run start (to)

```

## Pseudo-Directory-Structure (Optional)

```
bot-system/
├── src/
│   ├── master/
│   │   ├── index.ts          # Entry point for the master bot system
│   │   ├── masterService.ts  # Logic for handling communication with drones
│   │   ├── commands.ts       # List of available commands and logic for them
│   │   └── apiClient.ts      # HTTP client to send commands to drones
│   ├── drone/
│   │   ├── index.ts          # Entry point for the drone system
│   │   ├── droneService.ts   # Logic for receiving commands and executing them
│   │   ├── commandHandler.ts # Command handling logic for drones
│   │   └── apiServer.ts      # Express server to receive commands from master
│   └── common/
│       └── types.ts          # Shared types/interfaces for communication
├── dist/                     # Compiled JavaScript files
├── package.json
├── tsconfig.json
└── .gitignore
```

## Config-Init Log (Semi-Optional)

This mainly serves as a log of the initial configuration steps taken for the project, especially cli commands like npm package installations and configurations. While this section is optional, it saves headache medicine.

```
// Config-Init Log

in: npm init -y

out: 
Wrote to /Code\repos\ac\dev_node-bot\package.json:

{
  "name": "dev_node-bot",
  "version": "1.0.0",
  "description": "Node.js based botting with Express.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

in: npm install express

out: 
added 69 packages, and audited 70 packages in 2s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

```