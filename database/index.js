const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig, { multipleStatements: true });

// insert some fake datas into datebase
const insertTousers = function (params, callback) {
  const query = 'INSERT INTO users(name, activity, numbers, email, startTime, endTime) VALUES(?, ?, ?, ?, ?, ?)';
  connection.query(query, params, (err) => {
    if (err) {
      console.log('there is something wrong with insert', err);
    }
  });
};

const addNewUser = function (email, name, callback) {
  const query = `INSERT INTO users(name, email,) VALUES('${name}', '${email}')`;
  connection.query(query, (err) => {
    if (err) {
      console.log('there is something wrong with insert', err);
    }
    console.log('add new user successfully');
  });
};

const checkUser = function (email, name, callback) {
  const query = `select email from users where email = '${email}'`;
  connection.query(query, (err, results) => {
    if (err) {
      console.log('err', err);
    }
    callback(err, results);
  });
};

module.exports = {
  insertTousers, checkUser, addNewUser,
};
