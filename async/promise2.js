// // Case 1
// console.log("Synchronous 1");

// setTimeout(() => {
//   console.log("Time out 2");
// }, 0);

// Promise.resolve().then((_) => console.log("Promise"));

// console.log("Synchronous 4");

// Result
// Synchronous 1
// Synchronous 4
// Promise
// Time out 2

// // Case 2
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}`);

// const codeBlocker = () => {
//   let i = 0;
//   while (i < 1000000000) {
//     i++;
//   }

//   return "Billions loop done";
// };

// log("Synchronous 1");

// log(codeBlocker());

// log("Synchronous 2");

// // Result:
// // Synchronous 1
// //  Elapsed: 0
// // Billions loop done
// //  Elapsed: 684
// // Synchronous 2
// //  Elapsed: 684

// // Case 3
// const codeBlocker = () => {
//   return new Promise((resolve, reject) => {
//     let i = 0;
//     while (i < 1000000000) {
//       i++;
//     }
//     resolve("Billions loop done");
//   });
// };

// log("Synchronous 1");

// codeBlocker().then(log);

// log("Synchronous 2");

// Result
// Synchronous 1
//  Elapsed: 0
// Synchronous 2
//  Elapsed: 692
// Billions loop done
//  Elapsed: 692

// // Case 4
const codeBlocker = () => {
  return Promise.resolve().then((v) => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return "Billions loop done";
  });
};

log("Synchronous 1");

codeBlocker().then(log);

log("Synchronous 2");

// Result
// Synchronous 1
//  Elapsed: 0
// Synchronous 2
//  Elapsed: 0
// Billions loop done
//  Elapsed: 695
