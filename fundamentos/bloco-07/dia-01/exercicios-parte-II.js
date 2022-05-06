const factorialOfNumber = (number) => {
    let factorial = 1;
    for (let index = number; index > 0; index -= 1) {
        factorial *= index;
    }
    return factorial;
}

const factorialOneLine = (number) => number > 1 ? number * factorialOneLine(number - 1) : 1;

console.log(factorialOfNumber(4));
console.log(factorialOneLine(4));

const biggestWord = (sentence) => {
    const sentenceWords = sentence.split(' ');
    let biggestWord = sentenceWords[0];
    for (let word of sentenceWords) {
        word.length > biggestWord.length ? biggestWord = word : biggestWord
    }
    return biggestWord;
}

console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// const button = document.getElementsByTagName('button')[0];
// const h1 = document.getElementsByTagName('h1')[0];

// button.addEventListener('click', () => {
//     let clickCount = parseInt(h1.innerText, 10)
//     h1.innerText = clickCount + 1;
// })

const skills = ['HTML', 'Javascript', 'CSS', 'React', 'PHP'];

const replaceX = (string, replacementOfX) => {
    const replacedArray = [];
    for (let caracter of string) {
        if (caracter === 'x' || caracter === 'X') {
            replacedArray.push(replacementOfX);
        } else {
            replacedArray.push(caracter);
        }
    }
    return generateString(replacedArray.join(''), skills);
}

const generateString = (baseString, skillsList) => {
    const sortedSkillsList = skillsList.sort();
    const skillsText = generateTextList(sortedSkillsList);
    return `${baseString}\nMinhas cinco principais habilidades são:\n${skillsText}#goTrybe`
}

const generateTextList = (list) => {
    let listText = '';
    list.forEach((skill) => {
        listText += ` - ${skill};\n`
    });
    return listText;
}

console.log(replaceX("Tryber x aqui!", "Bebeto"));