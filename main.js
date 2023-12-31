//criado a função para tocar o som e feito a busca da id do som
function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log("Elemento não encontrado ou seletor inválido");
    }
}
//Constante das teclas com busca de todos os botões da classe
const listaDeTeclas = document.querySelectorAll('.tecla');
// criado o contador e o laço de repetição While e mudado para FOR tocando com o clique do botão
for(let contador = 0;contador < listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]; //chama o item 1 da dos classe dos botões
    const idAudio = `#som_${efeito}`; //template string ${  } e uso do acento grave como texto da frase.
    tecla.onclick = function(){ //função anônima ao ser clicada o
        tocaSom(idAudio)  //chamando a função tocaSom com o idAudio
    }
    //usando uma função com parâmetro evento e atribuindo a classe"ativa" com a tecla. (Interação)
    tecla.onkeydown = function(evento){
        
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
        tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
        }
    }