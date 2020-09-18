import { performance } from 'perf_hooks';
const startTime = performance.now();

const test = __dirname + '/public/test';

console.log(`┌────────────────────────────────────────────────────────────┐`);
console.log(`│    Starting: ${new Date().toISOString()}                      │`);
console.log(`└────────────────────────────────────────────────────────────┘`);

import express from 'express';
import bodyparser from 'body-parser';
import router from './routes';

let app = express();
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
