// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done!");
//   }, 1500);
// });

// promise.then(
//   value => {
//     log(value);
//   },
//   error => {
//     log(error);
//   }
// );

//////////////////////////////////////

function waitASecond(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds > 2) {
      reject("Rejected");
    } else {
      setTimeout(() => {
        seconds++;
        resolve(seconds);
      }, 1000);
    }
  });
}

function waitASecond2(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds > 2) {
      reject("Rejected");
    } else {
      setTimeout(() => {
        seconds++;
        resolve(seconds);
      }, 1000);
    }
  });
}
//simply promise
waitASecond(0)
  .then(seconds => {
    log(seconds);
  })
  .catch(error => {
    log(error);
  });

/////////////////////////all/////////////////
//both conditions must be met.
// Promise.all([waitASecond(2), waitASecond2(0)])
//   .then(success => {
//     log(success);
//   })
//   .catch(error => {
//     log(error);
//   });
