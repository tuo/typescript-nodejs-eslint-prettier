- setup

tsconfig.json
tslint.json

- how to debug with vscode https://juejin.im/post/6844903955173277703
- how to nodemon (https://medium.com/@wekesabill/setting-up-a-nodejs-project-with-typescript-postgres-and-sequelize-cb5cbc2cdc70)
- how to express

npm i -S body-parser sequelize sequelize-cli pg pg-hstore  
npm install --save-dev @types/bluebird @types/validator @types/sequelize

node_modules/.bin/sequelize init

- how to integrate with sequlize 6

what's new in sequelize6: https://sequelize.org/master/manual/typescript.html

if you use sequelize-typescript1 , make sure using sequelize5 not 6

or using sequlize6 with foloowing config: https://github.com/nestjs/nest/issues/4976

npm i sequelize-typescript@next
"sequelize-typescript": "^2.0.0-beta.0"
"sequelize": "^6.1.1"

\*

VSCOde: https://code.visualstudio.com/docs/typescript/typescript-compiling
https://code.visualstudio.com/docs/languages/javascript

setup with vscode:

https://stackoverflow.com/questions/39668731/what-typescript-version-is-visual-studio-code-using-how-to-update-it/39676463

/usr/local/lib/node_modules/typescript/lib

install tslint, typescript:

npm install -g tslint
npm install -g typescript

go to vscode, extension: install tslint

https://github.com/thrymgjol/typescript-sequelize-example/blob/master/app/controllers/teachers.ts

####

curl http://localhost:3000/teachers
curl --header "Content-Type: application/json" -X POST --data '{"first":"juan","last":"fluxa"}' http://localhost:3000/teachers

### PROBLEMS

- tsc node project start slow

https://github.com/TypeStrong/ts-node/issues/754

    "dev": "ts-node-dev --respawn --transpile-only ./src/app.ts",
    "start-nodemon": "nodemon -e ts -w ./src -x npm run dev"

added `--transpile-only`

**ts-node-dev**

> > It restarts target node process when any of required files changes (as standard node-dev) but shares Typescript compilation process between restarts. This significantly increases speed of restarting comparing to node-dev -r ts-node/register ..., nodemon -x ts-node ... variations because there is no need to instantiate ts-node compilation each time.

ts-node-dev --respawn --transpile-only ./src/app.ts"

no need for nodemon

############## ESLINT

"editor.formatOnSave": true,  
"[javascript]": {  
 "editor.formatOnSave": false  
},  
"prettier.disableLanguages": ["js"],  
"eslint.autoFixOnSave": true,  
"eslint.alwaysShowStatus": true,  
"files.autoSave": "onFocusChange",

https://dev.to/caelinsutch/setting-up-a-typescript-nodejs-application-with-prettier-and-eslint-53jc
