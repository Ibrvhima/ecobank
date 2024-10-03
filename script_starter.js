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

//document.documentElement.style.setProperty("--color-primary", "orange")
