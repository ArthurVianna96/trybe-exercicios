// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const checkForInput = (input) => {
  if (!input) {
    throw new Error('Todos os argumentos devem ser informados');
  }
};

const validateInputType = (input, type, inputName) => {
  if (typeof input !== type) {
    throw new Error(`${inputName} deve ser do tipo ${type}`);
  }
}

const validateDetailName = (detail) => {
  if (detail !== 'firstName' && detail !== 'lastName' && detail !== 'specialities') {
    throw new Error('Informação indisponível');
  }
}

const validateInputs = (id, detail) => {
  checkForInput(id);
  checkForInput(detail);
  validateInputType(id, 'string', 'id');
  validateInputType(detail, 'string', 'detail');
  validateDetailName(detail);
}

const searchEmployee = (id, detail) => {
  validateInputs(id, detail);
  let foundProfessionalDetail = null;
  professionalBoard.forEach(professional => {
    if (professional['id'] === id) {
      foundProfessionalDetail = professional[detail];
    }
  });
  if (foundProfessionalDetail) {
    return foundProfessionalDetail;
  } else {
    throw new Error('ID não identificado');
  }
};

module.exports = searchEmployee