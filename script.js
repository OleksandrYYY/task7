"use strict";

// завдання 1
detonatorTimer(3);

function detonatorTimer(delay) {
  let count = delay;
  let interval = setInterval(() => {
    if (count > 0) {
      console.log(count);
      count--;
    } else {
      console.log("BOOM!");
      clearInterval(interval);
    }
  }, 1000);
}

// завдання 2

detonatorTimer(3);

function detonatorTimer(delay) {
  let counter = delay;
  let res = () => {
    if (counter > 0) {
      setTimeout(() => {
        console.log(counter);
        counter--;
        res();
      }, 1000);
    } else {
      console.log("BOOM!");
    }
  };
  res();
}

// завдання 3

let myInformation = {
  name: "Oleksandr",
  lastname: "Horbenko",
  age: 28,
  city: "Odessa",
  gender: "male",
  hobby: "football",
  status: "married",
  introduce() {
    console.log(
      `My name is ${this.name} ${this.lastname} and I live in ${this.city}`
    );
  },
  description() {
    console.log(`I am ${this.age} years old and my hobby is ${this.hobby}`);
  },
  sayMyStatus() {
    console.log(`My status is ${this.status}`);
  },
};

myInformation.introduce();
myInformation.description();
myInformation.sayMyStatus();

// завдання 4

let securedSelfIntroduce = myInformation.introduce.bind(myInformation);
let securedSelfDescription = myInformation.description.bind(myInformation);
let securedSelfsayMyStatus = myInformation.sayMyStatus.bind(myInformation);

setTimeout(securedSelfIntroduce, 1000);
setTimeout(securedSelfDescription, 2000);
setTimeout(securedSelfsayMyStatus, 3000);