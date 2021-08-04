// Basic
const getFruit = async (name) => {
  const fruits = {
    pineapple: "🍍",
    peach: "🍑",
    strawberry: "🍓",
  };

  return fruits[name];
};

// getFruit("peach").then(console.log);

// Async + Await
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}`);

const makeSmoothie = async () => {
  //   const a = await getFruit("pineapple");
  //   const b = await getFruit("strawberry");

  //   return [a, b];

  const a = getFruit("pineapple");
  const b = getFruit("strawberry");
  const smoothie = await Promise.all([a, b]);
  return smoothie;
};

// makeSmoothie().then(log);

// for await
const fruits = ["peach", "pineapple", "strawberry"];

// const smoothie = fruits.map(async (v) => {
//   const emoji = await getFruit(v);
//   log(emoji);
//   return emoji;
// });
// 
// const fruitLoop = async () => {
//   for (const f of smoothie) {
//     const emoji = await getFruit(f);
//     log(emoji);
//   }
// };
// fruitLoop();

// const smoothie = fruits.map((v) => getFruit(v));

// const fruitLoop = async () => {
//   for await (const emoji of smoothie) {
//     log(emoji);
//   }
// };

// fruitLoop();

const fruitInspection = async () => {
  if ((await getFruit("peach")) === "🍑") {
    console.log("looks peachy!");
  }
};

fruitInspection();

