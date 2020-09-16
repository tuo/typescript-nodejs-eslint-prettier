import { performance } from 'perf_hooks';
const startTime = performance.now();

const test = __dirname + '/public/test';

console.log(`┌────────────────────────────────────────────────────────────┐`);
console.log(`│    Starting: ${new Date().toISOString()}                      │`);
console.log(`└────────────────────────────────────────────────────────────┘`);

import express from 'express';
import bodyparser from 'body-parser';
import { sequelize } from './models';

import { Sequelize, Model } from 'sequelize-typescript';
import fs from 'fs';
import path from 'path';

const db = {};
const models: Model[] = [];
const basename = path.basename(__filename);
console.log('basename: ', basename);
const files = fs.readdirSync(__dirname + '/models/').filter((file) => {
  console.log(file);
  return file.indexOf('.') !== 0 && file !== 'index.ts' && file.slice(-3) === '.ts';
});
//const models: Model[] = files.map((file) => import(path.join(__dirname, file)).then((model) => model));
console.log('files: ', files);
import router from './routes';
(async () => {
  console.log('files: ', files);
  for await (const file of files) {
    const model = await import(path.join(__dirname + '/models/', file));
    models.push(model.default);
  }
  console.log('models', models);
  sequelize.addModels(models);

  const app = express();
  const port = 3000;

  app.use(bodyparser.json());
  app.use(router);

  app.get('/', (req, res) => {
    res.send('The sedulous 2233heyn!' + new Date());
  });

  app.listen(port, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`server is1 listening on ${port}`);
    console.log(` * imports done in ${(performance.now() - startTime).toFixed(3)}ms`);
    return;
  });
})();
