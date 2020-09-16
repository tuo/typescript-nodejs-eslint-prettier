// import Student from './student'
import { Sequelize } from 'sequelize-typescript';
import Class from './class';
import Teacher from './teacher';
// import models

import config from '../config/config.json';
import { Dialect } from 'sequelize/types/lib/sequelize';

type ENV_TYPE = 'development' | 'test' | 'production';
interface ENV_TYPE_INFO {
  [key: string]: any;
}

const env: ENV_TYPE = (process.env.NODE_ENV || 'development') as ENV_TYPE;
//type ENV_TYPE_INFO
const configRaw: Record<ENV_TYPE, ENV_TYPE_INFO> = config;
const configJson: ENV_TYPE_INFO = configRaw[env];
const sequelize = new Sequelize(configJson.database, configJson.username, configJson.password, configJson);

// sequelize.addModels([__dirname + '/**/*.ts']);
// const models = {
//   Class,
//   Teacher
// };
sequelize.addModels([Teacher, Class]); // add models
// sequelize.sync({force: true})

export { sequelize, Teacher, Class }; // export models

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
