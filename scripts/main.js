//const meuCabecalho = document.querySelector('h1');
//meuCabecalho.textContent = 'Ola mundo!';


// https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/firefox-icon.png') {
      minhaImagem.setAttribute ('src','imagens/firefox2.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/firefox-icon.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

/*
function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  localStorage.setItem('nome', meuNome);
  meuCabecalho.textContent = 'Mozilla é legal, ' + meuNome;
}
*/
function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.innerHTML = 'Mozilla é legal, ' + meuNome;
  }
}

if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario();
}


