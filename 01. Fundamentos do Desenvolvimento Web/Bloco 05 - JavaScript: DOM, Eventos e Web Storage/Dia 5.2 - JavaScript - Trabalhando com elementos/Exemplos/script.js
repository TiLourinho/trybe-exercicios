document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'red';

document.getElementById('primeiroFilhoDoFilho').innerText = 'Esse é filho mesmo!';

document.querySelector('#primeiroFilhoDoFilho').parentNode.parentNode;

document.getElementById('elementoOndeVoceEsta').previousElementSibling;

document.getElementById('elementoOndeVoceEsta').nextSibling;

document.getElementById('elementoOndeVoceEsta').nextElementSibling;

document.getElementById('pai').lastElementChild.previousElementSibling;

let pai = document.getElementById('pai');
let irmaoElemento = document.createElement('section');
irmaoElemento.id = 'irmaoElemento';
pai.appendChild(irmaoElemento);

let way = document.getElementById('elementoOndeVoceEsta');
let filhoElemento = document.createElement('section');
filhoElemento.id = 'filhoElemento';
way.appendChild(filhoElemento);

let way2 = document.getElementById('primeiroFilhoDoFilho');
let bisFilho = document.createElement('section');
bisFilho.id = 'bisFilho';
way2.appendChild(bisFilho);

let third = document.getElementById('bisFilho');
third.parentElement.parentElement.nextElementSibling;
