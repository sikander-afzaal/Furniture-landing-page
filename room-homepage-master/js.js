const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const desc = document.querySelector("#desc");
const header = document.querySelector("#header");
const headHero = document.querySelector("#head-hero");
var counter = 0;
var object = [
  {
    description: `We provide unmatched quality, comfort, and style for property owners across the country.
      Our experts combine form and function in bringing your vision to life. Create a room in your
      own style with our collection and make your property a reflection of you and what you love.`,
    heading: `Discover innovative ways to decorate`,
    img: `./images/mobile-image-hero-1.jpg`,
  },
  {
    description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us `,
    heading: `We are available all across the globe`,
    img: `./images/mobile-image-hero-2.jpg`,
  },
  {
    description: ` Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
    heading: `Manufactured with the best materials`,
    img: `./images/mobile-image-hero-3.jpg`,
  },
];
var reverse = 0;
//automatic-----------------
setInterval(function () {
  counter += 1;
  if (counter >= 3) {
    counter = 0;
  }
  if (counter <= 3) {
    desc.innerHTML = object[counter].description;
    headHero.innerHTML = object[counter].heading;
    header.style.backgroundImage = "url(' " + object[counter].img + "')";
  }
  console.log("forward", counter);
}, 7000);
//Right arrow-------------------
arrowRight.addEventListener("click", function () {
  counter += 1;
  if (counter >= 3) {
    counter = 0;
  }
  if (counter <= 3) {
    desc.innerHTML = object[counter].description;
    headHero.innerHTML = object[counter].heading;
    header.style.backgroundImage = "url(' " + object[counter].img + "')";
  }
  console.log("forward", counter);
});
//left arrow ----------------------
arrowLeft.addEventListener("click", function () {
  counter -= 1;
  if (counter < 0) {
    counter = 2;
  }
  if (counter <= 3) {
    desc.innerHTML = object[counter].description;
    headHero.innerHTML = object[counter].heading;
    header.style.backgroundImage = "url(' " + object[counter].img + "')";
  }
  console.log("reverse", counter);
});

//menu----------------------------------------------
const menu = document.querySelector(".menu-options");
const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", function () {
  menu.classList.add("open");
  hamburger.classList.add("hamburger-close");
  cross.classList.add("cross-open");
  overlay.classList.add("overlay-open");
});
cross.addEventListener("click", function () {
  menu.classList.remove("open");
  hamburger.classList.remove("hamburger-close");
  cross.classList.remove("cross-open");
  overlay.classList.remove("overlay-open");
});
