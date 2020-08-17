* setup

tsconfig.json
tslint.json

* how to debug with vscode https://juejin.im/post/6844903955173277703
* how to nodemon (https://medium.com/@wekesabill/setting-up-a-nodejs-project-with-typescript-postgres-and-sequelize-cb5cbc2cdc70)
* how to express

npm i -S body-parser sequelize sequelize-cli pg pg-hstore  
npm install --save-dev @types/bluebird @types/validator @types/sequelize


 node_modules/.bin/sequelize init     

 

* how to integrate with sequlize


*


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
curl --header "Content-Type: application/json" -X POST --data '{"first":"juan","last":"fluxa"}'  http://localhost:3000/teachers
