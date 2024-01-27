const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//je cherche à savoir combien il y a d'images dans 'slide'
const nombreDeSlides = slides.length;
console.log(nombreDeSlides); // 4
// je place mes variables
let currentSlidesPosition = 0;
let baliseImage = document.querySelector(".banner-img");
let baliseText = document.querySelector(".banner-text");
let dotsArray = document.querySelector(".dots").children;
console.log("dotsArray", dotsArray);

////////////////////////
// LEFT ARROW ON CLICK
////////////////////////
let myLeftArrow = document.querySelector(".arrow_left");
myLeftArrow.addEventListener("click", () => {
  // je clique sur ma fleche gauche, j'ai l'image 4
  // je veux la décrémanter de -1
  // j'appelle ma variable qui est = 0 et lui met "-1"
  currentSlidesPosition = currentSlidesPosition - 1;

  // "Si" la position de mon slide est inférieur à 0,
  // alors la postion de mon slide est égale au nombres de slide (4), -1 donc 3 (0,1,2,3)
  if (currentSlidesPosition < 0) {
    currentSlidesPosition = nombreDeSlides - 1; // 3
  }
  //Je vais chercher l'images dans mon tableau "Slide"
  // je crée une variable qui vaut l'objet de mon image
  const currentImageObject = slides[currentSlidesPosition];

  // je veux assigner une nouvelle image
  baliseImage.setAttribute(
    "src",
    `./assets/images/slideshow/${currentImageObject.image}`
  );

  baliseText.innerHTML = currentImageObject.tagLine;
  console.log(currentImageObject);

  // DOTS //
  // Je récupère le dot concerné dans une variable currentDot
  // currentDot = <div class="dot"></div>
  const currentDot = dotsArray[currentSlidesPosition];

  // Je reset la class de chaque dots
  for (let i = 0; i < dotsArray.length; i++) {
    // dotsArray[i] = <div class="dot"></div>
    dotsArray[i].className = "dot";
  }

  // J'ajoute l'état "selected" à mon currentDot
  currentDot.className = "dot dot_selected";
});

////////////////////////
// RIGHT ARROW ON CLICK
////////////////////////
let myRightArrow = document.querySelector(".arrow_right");
myRightArrow.addEventListener("click", () => {
  //je clique sur ma fleche de droite, j'ai l'image 0
  //JE veux l'incrémanter de 1
  currentSlidesPosition = currentSlidesPosition + 1;

  // "Si" j'arrive à la photo 3 je reviens à la photo 0
  if (currentSlidesPosition >= nombreDeSlides) {
    currentSlidesPosition = 0;
  }

  console.log("currentSlidesPosition", currentSlidesPosition);

  // Chercher l'image dans mon tableau slides
  // Représente l'objet d'une image présente dans le tableau slides
  const currentImageObject = slides[currentSlidesPosition];
  console.log("currentImageObject", currentImageObject);

  // Je remplace l'image par la nouvelle image contenu dans currentImageObject
  baliseImage.setAttribute(
    "src",
    `./assets/images/slideshow/${currentImageObject.image}`
  );

  baliseText.innerHTML = currentImageObject.tagLine;

  // DOTS //
  // Je récupère le dot concerné dans une variable currentDot
  // currentDot = <div class="dot"></div>
  const currentDot = dotsArray[currentSlidesPosition];

  // Je reset la class de chaque dots
  for (let i = 0; i < dotsArray.length; i++) {
    // dotsArray[i] = <div class="dot"></div>
    dotsArray[i].className = "dot";
  }

  // J'ajoute l'état "selected" à mon currentDot
  currentDot.className = "dot dot_selected";
});
