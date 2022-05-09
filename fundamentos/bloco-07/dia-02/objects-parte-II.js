const student1 = {
	Html: 'Muito Bom',
	Css: 'Bom',
	JavaScript: 'Ótimo',
	SoftSkills: 'Ótimo',
};

const student2 = {
	Html: 'Bom',
	Css: 'Ótimo',
	JavaScript: 'Ruim',
	SoftSkills: 'Ótimo',
	Git: 'Bom', // chave adicionada
};

function listStudentsSkills (student) {
	const studentSkills = Object.keys(student);
	for (let skill of studentSkills) {
		console.log(`${skill}, Nível: ${student[skill]}`);
	} 
}

listStudentsSkills(student1);
listStudentsSkills(student2);
