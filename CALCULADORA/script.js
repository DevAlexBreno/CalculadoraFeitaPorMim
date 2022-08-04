var numero1 = 0;
var numero2 = 0;
var operacao = '';

// CADA BOTÃO CRIEI UMA FUNÇÃO PARA QUANDO APERTA-LO FAZER ALGUMA AÇÃO, NO CASO ADICIONAR O NUMERO NO RESULTADO QUE É UMA <DIV>
function zero(){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML += "0" ;  // ELÁ RECEBE ELA MAIS O NUMERO, CASO CONTRARIO SÓ ADICIONARIA UM NUMERO DE CADA VEZ SOBRESCREVENDO O NUMERO ANTERIOR... FIZ O MESMO PARA CADA FUNÇÃO.   
}
function um(){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML += "1" ;    
}
function dois(){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML += "2" ;    
}
function tres(){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML += "3" ;    
}
function quatro(){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML += "4" ;    
}
function cinco(){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML += "5" ;    
}
function seis(){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML += "6" ;    
}
function sete(){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML += "7" ;    
}
function oito(){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML += "8" ;    
}
function nove(){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML += "9" ;    
}

// FUNÇÃO DOS BOTÕES DE OPERAÇÃO

function somar(){
    operacao = '+'  // ESSA VARIAVEL É DE ESCOPO GLOBAL, ENTÃO DEPOIS DE CLICAR EM UM BOTÃO ESPECIFICO DE OPERAÇÃO, ELA É PREENCHIDA COM UM CARACTER (STRING) RELACIONADO A OPERAÇÃO...
    numero1 = parseInt(resultado.innerHTML); // A VARIAVEL QUE TAMBEM É DE ESCOPO GLOBAL, RECEBE O RESULTADO DOS NUMEROS CLICADOS, TRANSFORMANDO ELES EM NUMEROS INTEIROS, PARA DEPOIS PODER FAZER O CALCULO SEM CONCATENAR. 
    resultado.innerHTML = ''// POR FIM DEPOIS DE CLICAR NO BOTÃO DE OPERAÇÃO, E ARMAZENAR NAS VARIAVEIS CERTAS, ELE LIMPA O RESULTADO PARA PODER RECEBER OUTROS NUMEROS.
}
function subtrair(){
    operacao = '-'
    numero1 = parseInt(resultado.innerHTML);
    resultado.innerHTML = ''
}
function multiplicar(){
    operacao = '*'
    numero1 = parseInt(resultado.innerHTML);
    resultado.innerHTML = ''
}
function dividir(){
    operacao = '/'
    numero1 = parseInt(resultado.innerHTML);
    resultado.innerHTML = ''
}

// FUNÇÃO CALCULAR  BOTÃO PARA SABER O RESULTADO DA OPERAÇÃO ESCOLHIDA.
function calcular() {
    numero2 = parseInt(resultado.innerHTML); // AQUI É ARMAZENADO O SEGUNDO NUMERO DEPOIS DA OPERAÇÃO ESCOLHIDA.
    resultado.innerHTML = '' // LOGO DEPOIS É FEITA A LIMPEZA DO RESULTADO DIGITADO EM TELA, PARA DEPOIS RECEBER O CALCULO DOS NUMEROS. 
    
    switch(operacao){ // USEI O SWITCH CASE PARA SABER QUAL OPERAÇÃO A PESSOA CLICOU USANDO O CARACTER ESPECIFICO PARA CADA OPERAÇÃO.
        case '+':
            var soma = numero1 + numero2; // COMO JÁ ESTA TRANSFORMADO EM NUMERO INTEIRO CONSIGO FAZER A OPERAÇÃO SEM ACONTECER A CONCATENAÇÃO DOS NUMEROS.
            resultado.innerHTML += soma;
            break;
        case '-':
            var subtrair = numero1 - numero2;
            resultado.innerHTML += subtrair;
            break;
        case '/':
            var dividir = numero1 / numero2;
            resultado.innerHTML += dividir;
            break;
        case '*':
            var multiplicar = numero1 * numero2;
            resultado.innerHTML += multiplicar;
            break;
        default:                
    }
  // POR FIM AINDA TEM ALGUMAS COISAS A SEREM VALIDADAS, MAS POR FIM É ISSO ESTOU FELIZ POR CONSEGUIR FAZER ISSO APENAS COM A LOGICA QUE APRENDI E ENTENDI.


}
function limpar() {
    resultado.innerHTML = ''  // APAGA O RESULTADO DEIXANDO A TAG <DIV> VAZIA
}


// PENSANDO ..