const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addProprietyToLesson(lesson, keyToAdd, valueToAdd) {
  lesson[keyToAdd] = valueToAdd;
}

function listLessonsProperties(lesson) {
  return Object.keys(lesson);
}

function listLessonsPropertiesValues(lesson) {
  return Object.values(lesson);
}

function getObjectSize(object) {
  return Object.keys(object).length;
}

function getTotalStudents(allLessons) {
  let total = 0;
  Object.keys(allLessons).forEach(lesson => {
    total += allLessons[lesson]['numeroEstudantes'];
  }) 
  return total;
}

function getValueByNumber(lesson, index) {
  return Object.values(lesson)[index];
}

function verifyPair(object, key, value) {
  let verifiedPair = false;
  const keyValuesPairs = Object.entries(object);
  keyValuesPairs.forEach(pair => {
    const doesKeyExist = pair.includes(key);
    const doesValueExist = pair.includes(value);
    if (doesKeyExist && doesValueExist) {
      verifiedPair = true;
    }
  })
  return verifiedPair;
}

addProprietyToLesson(lesson2, 'professor', 'Carlos');
console.log(lesson2);

console.log(listLessonsProperties(lesson1));
console.log(listLessonsPropertiesValues(lesson1));
console.log(getObjectSize(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);
console.log(getTotalStudents(allLessons));
console.log(getValueByNumber(lesson1, 0));
console.log(verifyPair(lesson3, 'turno', 'noite'));

// Bônus
function countNumberOfStudentsInClass(lessonsObject, subject) {
  let totalStudents = 0;
  Object.keys(lessonsObject).forEach(lesson => {
    lessonsObject[lesson]['materia'] === subject ? totalStudents += lessonsObject[lesson]['numeroEstudantes'] : totalStudents;
  }) 
  return totalStudents;
}

function getListOfTeacherClasses(lessonsObject, teacher) {
  let listOfClasses = [];
  Object.keys(lessonsObject).forEach(lesson => {
    lessonsObject[lesson]['professor'] === teacher ? listOfClasses.push(lessonsObject[lesson]['materia']) : listOfClasses;
  }) 
  return listOfClasses;
}

function getNumberOfTeacherStudents(lessonsObject, teacher) {
  let totalStudents = 0;
  Object.keys(lessonsObject).forEach(lesson => {
    lessonsObject[lesson]['professor'] === teacher ? totalStudents += lessonsObject[lesson]['numeroEstudantes'] : totalStudents;
  }) 
  return totalStudents;
}

function createReport(lessonsObject, teacher) {
  return {
    professor: teacher,
    aulas: getListOfTeacherClasses(lessonsObject, teacher),
    estudantes: getNumberOfTeacherStudents(lessonsObject, teacher)
  }
}

console.log(countNumberOfStudentsInClass(allLessons, 'Matemática'));
console.log(createReport(allLessons, 'Maria Clara'));