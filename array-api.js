// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string
{
  const foods = "🍕, 🍔, 🍟";
  const result = foods.split(",");
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2);
  console.log(result);
  console.log(array);

  const array2 = [1, 2, 3, 4, 5];
  const result2 = array2.slice(2);
  console.log(result2);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 47),
  new Student("C", 27, true, 90),
  new Student("D", 26, false, 68),
  new Student("E", 25, true, 25),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an araay containing only the students' scores
// result should be: [45, 47, 90, 68, 25]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result);
}

// Q9. check if every student score is lower than 50
{
  const result = students.every((student) => student.score < 50);
  console.log(result);
}

// Q9. compute students' average score
{
  console.clear();
  //   const result = students.reduce((prev, curr) => {
  //     console.log("---------");
  //     console.log(prev);
  //     console.log(curr);
  //     return curr;
  //   });
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 47, 90, 68, 25'
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '25, 45, 47, 68, 90'
{
  const result = students
    .map((student) => student.score)
    .sort()
    .join();
  console.log(result);

  const result2 = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  console.log(result2);
}
