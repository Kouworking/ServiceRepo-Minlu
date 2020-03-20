const faker = require('faker');
const db = require('../database');

const activity = ['meeting', 'Photo Shoot', 'Video Shoot', 'birthday-party', 'baby-shower'];


const format = function (date) {
  const dString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${
    date.getHours()}:${date.getMinutes()}:00`;
  return dString;
};


for (let i = 0; i < 100; i++) {
  const activ = activity[Math.floor(Math.random() * 5)];
  const startTime = faker.date.between('2020-03-11', '2021-03-12');
  startTime.setMinutes(30);
  console.log(startTime);
  const startTimeFormat = format(startTime);
  const dur = Math.floor(Math.random() * 20);

  let timeStamp = Date.parse(startTime);
  timeStamp /= 1000;
  const secondes = dur * 60 * 60;

  timeStamp += secondes;
  const endTime = new Date();
  endTime.setTime(timeStamp * 1000);
  // console.log(endTime.toGMTString());
  const endTimeFormat = format(endTime);
  // console.log('endtime', endTimeFormat);


  // //console.log(recentDate.format("yyyy-mm-dd-hh:MM:ss"))

  // //console.log(startTimeFormat);

  // // let weekday = faker.date.weekday();
  const fullName = faker.name.findName();
  const fakeEmail = faker.internet.email();
  const nums = Math.floor(Math.random() * 30);
  const params = [fullName, activ, nums, fakeEmail, startTimeFormat, endTimeFormat];
  db.insertTousers(params, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

// console.log(dateString)
// console.log(recentDate)
// console.log(date);
// console.log(fullName);
// console.log(weekday);
// console.log(fakeEmail);
