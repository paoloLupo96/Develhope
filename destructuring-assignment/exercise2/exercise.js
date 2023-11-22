const student = {
    info: { name: "Bob", age: 25 },
    grades: { math: 95, science: 89 }
  };

  let {name, age} = student.info;
  let {math, science} = student.grades;

  console.log(`Name: ${name}, Age: ${age}, Math grade: ${math}, Science grade: ${science}`);