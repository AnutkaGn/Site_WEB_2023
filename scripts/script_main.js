const carousel = document.querySelector('.carousel_img');
const carouselImgs = document.querySelectorAll('.carousel_img img');

let counter = 0;
const size = carouselImgs[0].offsetWidth + 10;
const visibleImgsCount = Math.floor(carousel.offsetWidth / size);

setInterval(() => {
  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
  counter++; // збільшення лічильника після зміни положення каруселі

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
const checkedBoxes = [];
type.forEach((box) => {box.checked ? checkedBoxes.push(box): null})
