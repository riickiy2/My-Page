const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
const total = carousel.children.length;
const cardWidth = carousel.children[0].offsetWidth + 20; // largura + gap

function updateCarousel() {
  carousel.style.transform = `translateX(${-index * cardWidth}px)`;
}

// Botões manuais
next.addEventListener('click', () => {
  index = (index + 1) % total;
  updateCarousel();
});

prev.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  updateCarousel();
});

