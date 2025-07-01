const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');

let currentIndex = 0;
let cards = [];

fetch('http://localhost:3000/api/professores')
  .then(res => res.json())
  .then(professores => {
    professores.forEach(prof => {
      const card = document.createElement('div');
      card.classList.add('carousel-card');
      card.innerHTML = `
        <img src="images/${prof.foto}" alt="Foto do professor ${prof.nome}" />
        <h3>${prof.nome}</h3>
        <p>${prof.disciplina}</p>
      `;
      track.appendChild(card);
    });
    cards = Array.from(document.querySelectorAll('.carousel-card'));
    updateCarousel();
  })
  .catch(err => console.error('Erro ao carregar professores:', err));

function updateCarousel() {
  const width = cards[0].getBoundingClientRect().width;
  const moveAmount = -width * currentIndex;
  track.style.transform = `translateX(${moveAmount}px)`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (cards && currentIndex < cards.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});
