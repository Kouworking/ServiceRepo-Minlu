/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database');


const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist`));

app.post('/api/signUp', (req, res) => {
  // test sign up router
  console.log('in server sign up');
  console.log(req.body);
  // db.checkUser(req.body.email, req.body.password, (err, results) => {
  //   if (err) {
  //     console.log('err', err);
  //   }
  //   if (results == null) {
  //     db.addNewUser(req.body.email, req.body.password);
  //   } else {
  //     alert("You've already have an account, please sign in.");
  //   }
  // });
});

app.get('/repos', (req, res) => {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
