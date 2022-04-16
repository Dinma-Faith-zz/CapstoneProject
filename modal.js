const hamburger = document.querySelector('.bars');
const navLinks = document.querySelector('.nav-links');
const close = document.querySelector('.fa-solid.fa-xmark');
const link = document.querySelectorAll('.link');

function open() {
  navLinks.classList.toggle('show');
  close.style.display = 'block';
  hamburger.style.display = 'none';
}
hamburger.addEventListener('click', open);

function remove() {
  navLinks.classList.toggle('show');
  close.style.display = 'none';
  hamburger.style.display = 'block';
}
close.addEventListener('click', remove);

link.forEach((link) => {
  link.addEventListener('click', remove);
});