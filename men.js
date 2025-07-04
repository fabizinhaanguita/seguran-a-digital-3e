const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusclas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('parametro-senha_botao');
const campoSenha =document.querySelectorAll('.checkbox');
const forcaSenhas = document.querySelector(foca);


botoes[0].onclik = diminuiTamanho;
botoes[1].onclik = diminuiTamanho;

function diminuiTamanho(){
    if(tamanhoSenha >1){
        tamanhoSenha--;
    }
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}
    
    function aumentaTamanho(){
        if(tamanhoSenha < 20){
            tamanhoSenha++;
        }
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }