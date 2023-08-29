const images = [
  {
    image: 'img/01.webp',
    title: "Marvel's Spiderman Miles Morales",
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
const thumbnailsContainer = document.getElementById("thumbnails-container");
let activeImg = 0;
let imagesHTML = "";

// for (let i in images) {

//   let image = images[i];

//   imgContainer.innerHTML +=
//   `
//   <img src="./${image.image}" class="new-images">
//   <h5>Title: <br> ${image.title}</h5>
//   <p class="card-text">${image.text}</p>
//   `
// };


images.forEach((image, index) => {

  const slideEL = document.createElement("div");
  slideEL.classList.add("slide");


    // aggiungo classe active alla prima img
  if(index == activeImg) {slideEL.classList.add("active")}

  slideEL.innerHTML += 
  `
  <img src="./${image.image}">
  <div class="carousel-caption d-none d-md-block">
  <h5>${image.title}</h5>
  <p class="card-text">${image.text}</p>
  </div>
  `
  image.HTMLnode = slideEL;
  imgContainer.append(slideEL);

  const thumbnailsEl = document.createElement("div");
  thumbnailsEl.classList.add("thumb");
  thumbnailsEl.innerHTML = `<img src="./${image.image}">`
  thumbnailsEl.setAttribute("data-index", index);
  thumbnailsEl.addEventListener("click", function (){
    const index = this.getAttribute("data-index");
    goToSlide(index);
  })

  thumbnailsContainer.append(thumbnailsEl);
});


nextButton.addEventListener("click", goNext);

function goNext() {

  let nextIndex = activeImg + 1;

  if (nextIndex >= images.length) nextIndex = 0;

  goToSlide(nextIndex);

};

previousButton.addEventListener("click", goPrev);

function goPrev () {

  let prevIndex = activeImg - 1;


  if (prevIndex < 0) prevIndex = images.length - 1;

  goToSlide(prevIndex)

};


function goToSlide(index) {

  const oldSlide = images[activeImg].HTMLnode;
  oldSlide.classList.remove("active");

  activeImg = index;

  let newActiveImg = images[activeImg].HTMLnode;
  newActiveImg = newActiveImg.classList.add("active");
}

// ### AUTOPLAY
const startAutoplayButton = document.getElementById('start-autoplay');
const stopAutoplayButton = document.getElementById('stop-autoplay');
const reverseAutoplayButton = document.getElementById('reverse-autoplay');

// * SETTO LE VARIABILI PER GESTIRE L'AUTOPLAY
let autoplayInterval = false;
let autoplayForward = true;

// * ATTIVO L'INTERVAL IN BASE ALLA DIRECTION DELL'AUTOPLAY

function setAutoplay() {
  if (!autoplayInterval) {
    if (autoplayForward) {
      autoplayInterval = setInterval(goNext, 1000);
    } else {
      autoplayInterval = setInterval(goPrev, 1000);
    }
  }
}

// * CLEARO L'INTERVAL
function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = false;
  }
}

// * INVERTO LA DIRECTION
function reverseAutoplay() {
  stopAutoplay();
  autoplayForward = !autoplayForward;
  setAutoplay();
}

// * GESTISCO I CLICK SUI PULSANTI AUTOPLAY
startAutoplayButton.addEventListener('click', setAutoplay);
stopAutoplayButton.addEventListener('click', stopAutoplay);
reverseAutoplayButton.addEventListener('click', reverseAutoplay);



// NEXT BUTTON

// nextButton.addEventListener('click', function () {

//   const allImages = document.querySelectorAll(".img");

//   const activeSlide = allImages[activeImg];
//   activeSlide.classList.toggle("shown");
//   activeImg++;
  
//   if (activeImg >= allImages.length) {

//     activeImg = 0
//   };

//   const newActiveImg = allImages[activeImg];
//   newActiveImg.classList.toggle('shown');
// });

// // # PULSANTE PREV
// previousButton.addEventListener('click', function () {

//   const allImages = document.querySelectorAll(".images");

//   const activeSlideEl = allImages[activeImg];
//   activeSlideEl.classList.toggle("shown");

//   activeImg--;

//   if (activeImg < 0) {
//     activeImg = allImages.length - 1;
//   }

//   const newActiveSlide = allImages[activeImg];
//   newActiveSlide.classList.toggle("shown");
// });