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

addProprietyToLesson(lesson2, 'turno', 'noite');
console.log(lesson2);

console.log(listLessonsProperties(lesson1));
console.log(listLessonsPropertiesValues(lesson1));
console.log(getObjectSize(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);
