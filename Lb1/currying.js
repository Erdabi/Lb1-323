const gradeToLetter = grade => {
    if (grade >= 90) return 'a';
    if (grade >= 80) return 'b';
    if (grade >= 70) return 'c';
    if (grade >= 60) return 'd';
    return 'f';
  };

  const generateFeedback = student => {
    const { name, grade } = student;
    const letterGrade = gradeToLetter(grade);
  
    return `Nice Job ${name}, you got an ${letterGrade}`;
  };

  const studentGrades = [
    { name: 'Joe', grade: 88 },
    { name: 'Jen', grade: 94 },
    { name: 'Steph', grade: 77 },
    { name: 'Allen', grade: 60 },
    { name: 'Gina', grade: 54 },
  ];
  
  const studentFeedback = studentGrades.map(generateFeedback);
  
  console.log(studentFeedback);
  
  
  
  