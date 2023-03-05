# Nestjs Serverless

## Description:
[Nestjs](https://docs.nestjs.com/) application configured along with [serverless framework](https://www.serverless.com/) to run serverless applications.

## Features:
- Serverless applicaton support using [serverless framework](https://www.serverless.com/).
- Pre configured with example http, ws serverless handlers.
- Runnable in a statefull and serverless mode.


## Running the app:

Install the dependencies
```
npm install
```

To build the project run:
```
npm run build
```

To run in development mode with auto change detection and restart
```
npm run start:dev
```

To build and run 

```
npm run start:prod
```


To start and test the serverless application locally run:
```
npm run sls:offline
```

will start the http handler on port 9000 and websocket handler on  port 9001.