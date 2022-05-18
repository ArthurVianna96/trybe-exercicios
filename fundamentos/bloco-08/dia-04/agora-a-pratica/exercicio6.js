const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(studentsList, gradesList) {
  return studentsList.map((student, index) => {
    const sum = gradesList[index].reduce((accumulator, currentGrade) => accumulator + currentGrade);
    const gradesLength = gradesList[index].length;
    return {
      name: student,
      average: sum / gradesLength
    }
  })
}

console.log(studentAverage(students, grades));
