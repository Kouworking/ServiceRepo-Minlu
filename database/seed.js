const db = require('../database');
const faker = require('faker');

let activity = ['meeting', 'Photo Shoot', 'Video Shoot', 'birthday-party', 'baby-shower']
// // let times = ['7:00am', '7:30am', '8:00am', '8: 30am', '9: 00am', '9: 30am', '10:00am', '10:30am', '11:00am', '11:30am',
// //   '12:00pm', '12:30pm', '1:00pm', '1:30pm', '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm', '4:30pm', '5:30pm', '6:30pm', '7:00pm',
// //   '7:30pm', '8:00pm', '8:30pm', '9:00pm', '9:30pm', '10:00pm', '10:30pm', '11:00pm']

let format = function (recentDate) {
  let dString = recentDate.getFullYear() + '-' + (recentDate.getMonth() + 1) + '-' + recentDate.getDate() + ' ' +
    recentDate.getHours() + ":" + recentDate.getMinutes() + ":00";
  return dString;
}

// // let weekday = faker.date.weekday();

// // let nums = Math.floor(Math.random()* 40)

// // //console.log(params);
// // console.log(recentDate);



for (var i = 0; i < 5; i++) {
  let activ = activity[Math.floor(Math.random() * 5)]
  let startTime = faker.date.between('2020-03-11', '2021-03-12');
  startTime.setMinutes(30);
  console.log(startTime);
  let startTimeFormat = format(startTime);
  let dur = Math.floor(Math.random() * 20);

  let timeStamp = Date.parse(startTime);
  timeStamp = timeStamp / 1000;
  var secondes = dur * 60 * 60;

  timeStamp += secondes;
  var endTime = new Date();
  endTime.setTime(timeStamp * 1000);
  //console.log(endTime.toGMTString());
  let endTimeFormat = format(endTime);
  //console.log('endtime', endTimeFormat);



  // //console.log(recentDate.format("yyyy-mm-dd-hh:MM:ss"))

  // //console.log(startTimeFormat);

  // // let weekday = faker.date.weekday();
  let fullName = faker.name.findName();
  let fakeEmail = faker.internet.email();
  let nums = Math.floor(Math.random() * 30);
  let params = [fullName, activ, nums, fakeEmail, startTimeFormat, endTimeFormat];
  db.insertTousers(params, (err) => {
    if (err) {
      console.log(err);
    }
  })
}

// console.log(dateString)
// console.log(recentDate)
// console.log(date);
// console.log(fullName);
// console.log(weekday);
// console.log(fakeEmail);
