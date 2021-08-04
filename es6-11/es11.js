// 1. Optional Chaining
{
  const person1 = {
    name: "titu",
    job: {
      title: "SW Engineer",
      manager: {
        name: "daisy",
      },
    },
  };

  const person2 = {
    name: "daisy",
  };

  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
}

// 2. Nullish Coalescing Operator
{
  // Logical OR operator
  // false: false, '', 0, null, undefined
  {
    const name = "Titu";
    const userName = name || "Guest";
    console.log(userName);
  }

  {
    const name = null;
    const userName = name || "Guest";
    console.log(userName);
  }

  // bad!!
  {
    const name = "";
    const userName = name || "Guest";
    console.log(userName);

    const num = 0;
    const message = num || "undefined";
    console.log(message);
  }

  // good!!
  {
    // 값이 null이나 undefined일 경우에만 오른쪽 피연산자 반환
    const name = "";
    const userName = name ?? "Guest";
    console.log(userName);

    const num = 0;
    const message = num ?? "undefined";
    console.log(message);

    const nullcheck = null ?? "null check";
    console.log(nullcheck);

    const undefinedcheck = undefined ?? "undefined check";
    console.log(undefinedcheck);
  }
}
