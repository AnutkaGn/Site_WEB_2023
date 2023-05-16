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
let type = document.querySelectorAll('[name="type"]')
let checkedCheckboxes = [];
type.forEach((checkbox) => {checkbox.checked ? checkedCheckboxes.push(checkbox.value) : null})
if (!checkedCheckboxes.length){
  type[0].checked = true;
  checkedCheckboxes.push(type[0].value)
}

// Функція для обробки зміни стану checkbox
function changeCheckbox(checkboxValue) {
  let type = document.querySelectorAll('[name="type"]')
  const checkbox = document.querySelector(`[value="${checkboxValue}"]`)

  if (checkboxValue === 'all' && checkbox.checked) {
    // Якщо обраний перший checkbox, зняти прапорець з інших
    type.forEach((checkbox) => {checkbox.value !== checkboxValue ? checkbox.checked = false : checkbox.checked = true})
  } else if (checkbox !== 'all' && checkbox.checked) {
    // Якщо обраний інший checkbox, зняти прапорець з першого
    const firstCheckbox = document.querySelector('[value="all"]');
    firstCheckbox.checked = false;
  }

  type = document.querySelectorAll('[name="type"]')
  checkedCheckboxes = []
  type.forEach((checkbox) => {checkbox.checked ? checkedCheckboxes.push(checkbox.value): null})
  console.log(checkedCheckboxes)
}

function submitForm(event){
  event.preventDefault()

  const url = `/types?types=${JSON.stringify(checkedCheckboxes)}`

  fetch(url).then(html => window.location.href = url).catch(error => {console.error(error)})
}

//------------------------
const username = document.getElementById('login')
const password = document.getElementById('password')
const email = document.getElementById('email')
const btn = document.getElementById('')