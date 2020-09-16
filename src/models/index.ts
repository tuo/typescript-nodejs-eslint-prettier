// import Student from './student'
import { Sequelize, Model } from 'sequelize-typescript';
import fs from 'fs';
import path from 'path';
// import Class from './class';
// import Teacher from './teacher';
// import models

import config from '../config/config.json';

const env = process.env.NODE_ENV || 'development';

const configJson = config[env];
const sequelize = new Sequelize(configJson.database, configJson.username, configJson.password, configJson);

// sequelize.addModels([__dirname + '/**/*.ts']);
// const models = {
//   Class,
//   Teacher
// };
//sequelize.addModels([Teacher, Class]); // add models
// sequelize.sync({force: true})

// export { sequelize, Teacher, Class }; // export models

// const db = {};
// const models: Model[] = [];
// const basename = path.basename(__filename);
// console.log('basename: ', basename);
// const files = fs.readdirSync(__dirname).filter((file) => {
//   return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts';
// });
// //const models: Model[] = files.map((file) => import(path.join(__dirname, file)).then((model) => model));
// console.log('files: ', files);
// (async () => {
//   console.log('files: ', files);
//   for await (const file of files) {
//     const model = await import(path.join(__dirname, file));
//     models.push(model.default);
//   }
//   console.log('models', models);
//   sequelize.addModels(models);
// })();

export { sequelize };

// const promisesAll = files.map((file) => import(path.join(__dirname, file)));
// Promise.all(promisesAll).then((values) => {
//   models.push(values.map((t) => t.default));
// });

// Promise.all();
// for (const file of files) {
//   //sequelize.import();
//   //models.push(model.default);
// }
// console.log('models', models);
// sequelize.addModels(models);

// console.log('finally', models);

// Class.belongsToMany(Student, { throught })

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
