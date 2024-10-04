'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btnOpen => btnOpen.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);

const header = document.querySelector('.header');

// recuperation d'une classe par son nom
//document.getElementsByClassName('.btn');

//creation et insertion  d'element dans le HTML

//insertAddjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = `
We use cooki for imporved functionnality and analytics
<button class="btn btn--close-cookie"> Got it! </button>
`;
header.prepend(message);
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//scroll smooth
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1Coord = section1.getBoundingClientRect();
  console.log(s1Coord);
  console.log(e.target.getBoundingClientRect);
  console.log('currentScorll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width wiewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
});
// window.scrollTo(
//   s1Coord.left + window.pageXOffset ,
//   s1Coord.top + window.pageYOffset,

// );

//////////////////////// GESTION DU SCROLL
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! you are reading the headding');
// });

// h1.onmouseenter = alertH1;
// h1.onmouseenter = function (e) {
//   alert('👍');
// };

////// CHANGEMENT DE COULEUR SUR NOS LIENS
//rgb(255,255,255)
const radomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${radomInt(0, 255)}, ${radomInt(0, 255)},${radomInt(0, 255)})`;
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target);
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.backgroundColor = randomColor();
  console.log('LINKS', e.target);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target);
});

//MANIPULATION DES ATTRIBUT CLASSE

//document.documentElement.style.setProperty("--color-primary", "orange")

// //recuperation d'attributs html
// const logo = document.querySelector('.nav__logo');
// (logo.alt)
// //(logo.src)
// //(logo.className)

// //transformation de la valeur de l'attribut

// logo.alt = "beautiful bleu  logo";
// console.log(logo.getAttribute('className'));
// console.log(logo.getAttribute('src'));
// //data attribute
//  console.log(logo.datasete.versionNumber);

//  //classe
//  logo.classList.add('a','b')
//  logo.classList.remove('a')
//  logo.classList.toggle('b')
