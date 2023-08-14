console.log("EXERCISE 7");

  const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
  ];

  // Write your code here
  const [student1, [student2, student3], [student4, student5]] = moreStudents;

  console.log(student1, student2, student3, student4, student5);
  console.log();