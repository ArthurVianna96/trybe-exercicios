const generateEmployeeEmail = (employeeName) => {
  const emailPrefix = employeeName.toLowerCase().split(' ').join('_');
  return {
    nomeCompleto: employeeName,
    email: `${emailPrefix}@trybe.com`,
  }
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
}

console.log(newEmployees(generateEmployeeEmail));

const validateNumber = (choosenNumber, correctNumber) => choosenNumber === correctNumber ? 'Parabéns você ganhou!' : 'Tente novamente';

const lottery = (choosenNumber, callback) => {
  const correctNumber = Math.floor(Math.random() * 5) + 1;
  console.log(correctNumber);
  return callback(choosenNumber, correctNumber);
}

console.log(lottery(2, validateNumber));

const calculateScore = (answers, correctAnswers) => {
  let score = 0;
  for (let answer in answers) {
    if (answers[answer] === 'N.A') {
      continue
    } else if (answers[answer] === correctAnswers[answer]) {
      score += 1;
    } else {
      score -= 0.5;
    };
  }
  return score < 0 ? 0 : score;
};

const getStudentsTestScore = (correctAnswers, studentsAnswers, callback) => callback(studentsAnswers, correctAnswers);

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(getStudentsTestScore(RIGHT_ANSWERS, STUDENT_ANSWERS, calculateScore));