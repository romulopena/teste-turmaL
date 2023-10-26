//criado a função para tocar o som e feito a busca da id do som
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//Constante das teclas com busca de todos os botões da classe
const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSom;
    contador = contador + 1;
    console.log(contador);
}