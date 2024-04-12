//Ativar links do menu

const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){

    const url = window.location.href;
    const href = link.href;
    
    if(url.includes(href)){
       link.classList.add('ativo');
    }
    
}

links.forEach(ativarLink)

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametros){
    const elemento = document.getElementById(parametros);
    if(elemento){
        elemento.checked = true;
    }
    console.log(elemento);
}

parametros.forEach(ativarProduto);

//Ativar itens perguntas

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(e){
    const pergunta = e.currentTarget;
    const controle = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controle);

    resposta.classList.toggle('ativa'); 
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa);

}

function mostrar(pergunta){
    pergunta.addEventListener('click', ativarPergunta);

}

perguntas.forEach(mostrar);

// Galeria de bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagem img');
const galeriaContainer = document.querySelector('.bicicleta-imagem');

console.log(galeria, galeriaContainer)

function trocarImagem(e){
    const img = e.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;

    if(media){
        galeriaContainer.prepend(img);    

    }
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animação
if(window.SimpleAnime){
    new SimpleAnime();
}
