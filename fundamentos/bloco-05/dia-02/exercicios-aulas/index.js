// --------- Buscando elementos ----------
// 1. Acesse o elemento elementoOndeVoceEsta .
const inicio = document.getElementById('elementoOndeVoceEsta');
console.log(inicio);

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
inicio.parentNode.style.color = 'red';

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
inicio.firstElementChild.innerHTML = '<p>Agora temos um conteúdo dentro do primeiroFilhoDoFilho</p>';

// 4. Acesse o primeiroFilho a partir de pai .
const pai = document.getElementById('pai');
console.log(pai.firstElementChild);

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(inicio.previousElementSibling);

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(inicio.nextSibling);

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(inicio.nextElementSibling);

// 8. Agora acesse o terceiroFilho a partir de pai .
console.log(pai.lastElementChild.previousElementSibling);

// --------- Criando elementos ----------

function createNewElement(tagName, elementContent) {
    let newElement = document.createElement(tagName);
    newElement.innerHTML = elementContent;
    return newElement;
}
// 1. Crie um irmão para elementoOndeVoceEsta .
let irmaoInicio = createNewElement('section', 'novo irmão do início');
pai.appendChild(irmaoInicio); 

// 2. Crie um filho para elementoOndeVoceEsta .
let filhoInicio = createNewElement('section', 'novo filho do início');
inicio.appendChild(filhoInicio);

// 3. Crie um filho para primeiroFilhoDoFilho .
let filhoDoFilhoInicio = createNewElement('section', 'novo filho do filho do início');
inicio.firstElementChild.appendChild(filhoDoFilhoInicio);

// 4. A partir desse filho criado, acesse terceiroFilho .
filhoDoFilhoInicio = document.getElementById('primeiroFilhoDoFilho').lastElementChild;
console.log(filhoDoFilhoInicio.parentNode.parentNode.nextElementSibling);

// --------- Removendo elementos ----------

// 1. Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

const nodes = pai.childNodes;
for (let index = nodes.length - 1; index >= 0; index -= 1) {
    const node = nodes[index];
    if (node.id !== 'elementoOndeVoceEsta') {
        node.remove();
    }
}
