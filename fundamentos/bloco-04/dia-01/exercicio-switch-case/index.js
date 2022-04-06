// 1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;

// 2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .

let candidateResult = "reprovada";
let message = "";

switch (candidateResult) {
    case 'reprovada':
        message = "Você foi reprovado(a)";
        break;
    case 'lista':
        message = "Você está na nossa lista de espera";
        break;
    case 'aprovada':
        message = "Parabéns, você foi aprovado(a)!";
        break;
    default:
        message = "estado do candidato inválido, por favor informe o estado entre um dos seguintes 'aprovada' , 'lista' ou 'reprovada' ";
}

console.log(message);