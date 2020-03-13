DROP DATABASE IF EXISTS bookingSys;

CREATE DATABASE bookingSys;

USE bookingSys;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(200),
  activity VARCHAR(20),
  numbers int,
  email VARCHAR(200),
  startTime DATETIME,
  endTime DATETIME,
  ifAlcoho BOOLEAN,
  PRIMARY KEY (ID)
);

-- create a new table for categories
CREATE TABLE reservations(
  id int NOT NULL AUTO_INCREMENT,
  date Date,
  time time,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/


