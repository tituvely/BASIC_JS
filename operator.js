// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals:

''''
1 + 2 = ${1 + 2}`);

console.log("titu's \n\tbook");

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(1 % 1);
console.log(1 ** 1);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators
const value1 = false;
const value2 = 4 < 2;
const value3 = true;

// || (or) finds the firsty truthy value;
console.log(`or: ${value1 || value2 || check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    console.log("WASTING TIME");
  }
  return true;
}

console.log(`or: ${value3 || value2 || check()}`);

// && (and) finds the firsty falsy value
console.log(`or: ${value3 && value2 && check()}`);
// => 제일 헤비한 operation일 수록 뒤에서 check하는게 좋음

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const titu1 = { name: "titu" };
const titu2 = { name: "titu" };
const titu3 = titu1;
console.log(titu1 == titu2); // false
console.log(titu1 === titu2); // false
console.log(titu1 === titu3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = "coder";

if (name === "coder") {
  console.log("name coder");
} else if (name === "df") {
  console.log("name df");
} else {
  console.log("no name");
}

// 9. Ternary operator: ?
// condition?  value1 : value2;
console.log(name === "ellie" ? "yes" : "no");

// 10. Switch statement
const browser = "Opera";
switch (browser) {
  case "IE":
    console.log("Download Edge");
    break;
  case "Chrome":
    console.log("Chrome");
    break;
  case "Opera":
  case "Firefox":
    console.log("Opera or Firefox");
    break;
  default:
    console.log("Default");
    break;
}

// 11. Loops
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline variable for: ${i}`);
}

// break, continue
// 홀수만 출력
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) continue;
  console.log(`${i}`);
}

for (let i = 0; i < 11; i++) {
  if (i > 8) break;
  console.log(`${i}`);
}
