// 1. Shorthand property names
{
  const titu1 = {
    name: "titu",
    age: 20,
  };

  const name = "titu";
  const age = 20;

  const titu2 = {
    name: name,
    age: age,
  };

  // new!
  const titu3 = {
    name,
    age,
  };

  console.log(titu1, titu2, titu3);
}

// 2. Destructuring assignment
{
  const student = {
    name: "Daisy",
    level: 1,
  };

  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // new!
  {
    const { name, level } = student;
    console.log(name, level);

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array
  const animals = ["🦄", "🐨"];

  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // new!
  {
    const [first, second] = animals;
    console.log(first, second);
  }
}

// 3. Spread Syntax
{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: "key3" }];
  obj1.key = "newKey";
  console.log(array, arrayCopy, arrayCopy2);

  // object copy
  const obj3 = { ...obj1 };
  console.log(obj1);

  const fruits1 = ["peach", "strawberry"];
  const fruits2 = ["banana", "kiwi"];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  const dog1 = { dog: "pome" };
  const dog2 = { dog: "corgi" };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
}

// 4. Default Parameters
{
  {
    function printMessage(message = "default message") {
      console.log(message);
    }

    printMessage("hello");
    printMessage();
  }
}

// 5. Ternary Operator
{
  const isCat = true;

  {
    const component = isCat ? "cat" : "dog";
    console.log(component);
  }
}

// 6. Template Literals
{
  const weather = "sunny";
  const temperature = "16C";

  console.log(`Today weather is ${weather}, and temperature is ${temperature}`);
}
