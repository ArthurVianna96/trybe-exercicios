const FORM = document.getElementsByTagName('form')[0];
const SUBMIT_BUTTON = document.getElementById('submit-btn');
const NAME_INPUT = document.getElementById('name');
const EMAIL_INPUT = document.getElementById('email');
const ANSWER_TEXTAREA = document.getElementById('answer');
const IMAGE_SHARING_INPUT = document.getElementById('image-sharing');

function checkImageSharingWasEnabled() {
    return IMAGE_SHARING_INPUT.checked;
}

function validateInputValueLength(input, maxLength, minLength, inputName) {
    if (!(input.value.length < maxLength && input.value.length > minLength)) {
        return `O campo ${inputName} deve possuir o número de caracteres entre ${minLength} e ${maxLength}\n`;
    }
    return '';
}

SUBMIT_BUTTON.addEventListener('click', (event) => {
    event.preventDefault();
    let errorMessage = 'Dados inválidos\n\n';
    errorMessage += validateInputValueLength(NAME_INPUT, 40, 10, 'Nome');
    errorMessage += validateInputValueLength(EMAIL_INPUT, 50, 10, 'Email');
    errorMessage += validateInputValueLength(ANSWER_TEXTAREA, 500, 0, 'Resposta da pergunta');
    if (errorMessage.length > 17) {
        alert(errorMessage);
        return;
    }
    alert('Dados enviados com sucesso!\n Obrigado por participar do concurso TrybeTrip.');
    FORM.submit();
})
