const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig, {multipleStatements: true});

//insert some fake datas into datebase
var insertTousers= function(params, callback){
  let query = `INSERT INTO users(name, activity, numbers, email, startTime, endTime) VALUES(?, ?, ?, ?, ?, ?)`;
  connection.query(query, params, (err) => {
    if (err) {
      console.log('there is something wrong with insert', err);
    }
  });

}

module.exports = {
  insertTousers
};
