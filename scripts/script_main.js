const carousel = document.querySelector('.carousel_img');
const carouselImgs = document.querySelectorAll('.carousel_img img');

let counter = 0;
const size = carouselImgs[0].clientWidth + 10;
const visibleImgsCount = Math.floor(window.innerWidth / size);

setInterval(() => {
  counter++;
  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

  if (counter >= carouselImgs.length - visibleImgsCount) {
    counter = 0;
    setTimeout(() => {
      carousel.style.transition = 'none';
      carousel.style.transform = 'translateX(0px)';
    }, 500);
  }
}, 3000);


//-----------------------
const type = document.querySelectorAll('[name="type"]')
type.forEach(()=>{})