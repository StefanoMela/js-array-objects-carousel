const images = [
  {
    image: 'img/01.webp',
    title: "Marvel's Spiderman Miles Morale",
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  },
  {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  },
  {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
  },
  {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  },
  {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];


// RECUPERO ELEMENTI HTML UTILI
const imgContainer = document.getElementById("slides-container");
const previousButton = document.getElementById("go-prev");
const nextButton = document.getElementById("go-next");
let activeImg = 0;


for (let i in images) {

  let image = images[i];

  imgContainer.innerHTML +=
    `
  <img src="./${image.image}" class="hidden" alt="${image.text}">
  `
};

// NEXT BUTTON

nextButton.addEventListener('click', function () {

  const allImages = document.querySelectorAll(".images");

  const activeSlideEl = allImages[activeImg];
  activeSlideEl.classList.toggle("shown");

  activeImg++;

  if (activeImg >= allImages.length) {
    activeImg = 0;
  }

  const newActiveSlide = allImages[activeImg];
  newActiveSlide.classList.toggle("shown");
});


// # PULSANTE PREV
previousButton.addEventListener('click', function () {

  const allImages = document.querySelectorAll(".images");

  const activeSlideEl = allImages[activeImg];
  activeSlideEl.classList.toggle("shown");

  activeImg--;

  if (activeImg < 0) {
    activeImg = allImages.length - 1;
  }

  const newActiveSlide = allImages[activeImg];
  newActiveSlide.classList.toggle("shown");
});