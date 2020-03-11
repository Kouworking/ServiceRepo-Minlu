const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig, {multipleStatements: true});

//could sort by frequent of category

module.exports = {

};
