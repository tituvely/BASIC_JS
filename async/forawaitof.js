// const names = ["a", "b", "c", "d"];

// names.forEach(async (name) => {
//   const result = await fetch(`https://someurl.com/names/${name}`);
//   console.log(result.json());
// });

// console.log("모든 api 통신 완료"); // 이 부분이 forEach의 반복문 작업이 모두 끝나기 전에 실행된다.

// (async function () {
//   for await (let name of names) {
//     const result = await fetch(`https://someurl.com/names/${name}`);
//     console.log(result.json());
//   }
// })();

// console.log("모든 api 통신 완료"); // forEach의 반복문이 끝나기를 기다린 후 로깅을 한다.

const timer = (time) => {
  return new Promise((resolve, reject) => {
    console.log(`${time} 타이머 시작`);
    setTimeout(() => {
      console.log(`${time} 타이머 끝`);
      resolve();
    }, time);
  });
};

async function runForEach() {
  const times = [3000, 1000, 7000, 5000];

  times.forEach(async (time) => {
    await timer(time);
  });

  console.log("모든 타이머 끝");
}
// runForEach();

async function runPromiseAll() {
  const times = [3000, 1000, 7000, 5000];

  await Promise.all(times.map((time) => timer(time)));

  console.log("모든 타이머 끝");
}
// runPromiseAll();

async function runForAwait() {
  const times = [3000, 1000, 7000, 5000];

  for await (let time of times) {
    await timer(time);
  }

  console.log("모든 타이머 끝");
}
runForAwait();

//	forEach(async () => {})
// 다수의 비동기 작업이 한 번에 실행되는가?	            o
// 다수의 비동기 작업이 모두 끝나기를 기다리는가?   	x

// await Promise.all()
// 다수의 비동기 작업이 한 번에 실행되는가? 	        o
// 다수의 비동기 작업이 모두 끝나기를 기다리는가?	 	o

// for await ... of
// 다수의 비동기 작업이 한 번에 실행되는가? 	        x
// 다수의 비동기 작업이 모두 끝나기를 기다리는가?	    o
