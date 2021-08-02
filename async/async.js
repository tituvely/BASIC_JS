// async & await
// clear style of using promise

// 0. Promise
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network request in 10 secs....
//     resolve("titu");
//   });
// }

// const user = fetchUser();
// user.then(console.log);
// console.log(user);

// 1. async
async function fetchUser() {
  // do network request in 10 secs....
  return "titu";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  //   throw "error";
  return "apple";
}

async function getBanana() {
  await delay(2000);
  return "banana";
}
// function getBanana() {
//   return delay(3000).then(() => "banana");
// }

async function pickFruits() {
  try {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    // const apple = await getApple();
    // const banana = await getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
  } catch (error) {
    console.log(error);
  }
}
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
