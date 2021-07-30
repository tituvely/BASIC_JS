"use strict";

console.log(name);
console.log(age);

// blockscope
let globalName = "global name";
{
  let name = "titu";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var, hoisting
{
  age = 4;
  var age;
}
console.log(age);

const daysInWeek = 7;

const count = 17;

const titu = "titu";
const hellotitu = `hello ${titu}`;

let nothing = null;

let x = undefined;

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. Dynamic typing: 런타임에서 타입이 정해짐
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);

// object
const tituObject = { name: "titu", age: 20 };
tituObject.age = 21;
