'use strict';
const env = process.env.NODE_ENV || 'development';

// import Student from './student'
import Class from './class'
import Teacher from './teacher'

import { Sequelize } from 'sequelize-typescript';
import config from '../config/config.json';
const configJson = config[env];
const sequelize = new Sequelize(
  configJson.database,
  configJson.username,
  configJson.password,
  configJson,
);

//sequelize.addModels([__dirname + '/**/*.ts']);
const models = [
  Class,
  Teacher
];
sequelize.addModels(models);


// let models = [Teacher, Class]

// models.forEach(model => model.initialize(sequelize));

// Class.belongsTo(Teacher)
// Teacher.hasMany(Class)

//sequelize.sync({force: true})
export {
  sequelize, Class, Teacher
}

//Class.belongsToMany(Student, { throught })

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
