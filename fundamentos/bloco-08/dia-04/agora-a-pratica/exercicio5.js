const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(namesList) {
  return namesList.reduce((accumulator, currentName) => currentName.toLowerCase().includes('a') ? accumulator + 1 : accumulator, 0);
}

console.log(containsA(names));