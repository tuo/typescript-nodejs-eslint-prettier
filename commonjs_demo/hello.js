// example.js
var x = 5;
var addX = function (value) {
  return value + x;
};

var hello = function (something) {
  return new Date() + ` - Hello ${something}`;
};

//global.hello = hello;

module.exports = hello;
