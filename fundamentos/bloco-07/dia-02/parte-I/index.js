const resultContent = document.getElementById('result')

function validateNumberOfInputs(value1, value2) {
  if (!value1 || !value2) {
    throw new Error('Ambos os valores devem ser preenchidos');
  }
}

function parseInteger(value, inputName) {
  const parsedValue = parseInt(value);
  if (Number.isNaN(parsedValue)) {
    throw new Error(`O input ${inputName} deve ser um número`);
  }
  return parsedValue;
}
function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    validateNumberOfInputs(value1, value2);
    const parsedValue1 = parseInteger(value1, 'valor 1');
    const parsedValue2 = parseInteger(value2, 'valor 2');

    const result = parsedValue1 + parsedValue2;
    resultContent.innerHTML = `Resultado: ${result}`;
  } catch (error) {
    resultContent.innerText = error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}