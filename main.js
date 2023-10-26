//criado a função para tocar o som e feito a busca da id do som
function tocaSomRisada(){
    document.querySelector("#som_tecla_risada").play();
}
//chamada da função criada para tocar ao clique do mouse
document.querySelector(".tecla_risada").onclick = tocaSomRisada;

//Constante das teclas com busca de todos os botões da classe
const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[2].onclick = tocaSomRisada;

let contador = 0;
while(contador < 9){
    listaDeTeclas[contador].onclick = tocaSomRisada;
    contador = contador + 1;
    console.log(contador);
}