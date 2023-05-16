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
// const usernameLog = document.getElementById('loginLog')
// const passwordLog = document.getElementById('passwordLog')
// const usernameSign = document.getElementById('loginSign')
// const passwordSign = document.getElementById('passwordSign')
// const email = document.getElementById('email')
// const LogBtn = document.getElementById('LogBtn')
// const SignBtn = document.getElementById('SignBtn')


// LogBtn.addEventListener('click', () => {
//   if (passwordLog.value.length <= 8 ){
//     alert('Ви ввели короткий пароль, він має бути не менше 8 символів в довжину')
//   }
//   else if (usernameLog.value.includes('@') 
//     || username.value.includes('!') 
//     || username.value.includes('~') 
//     || username.value.includes('?') 
//     || username.value.includes('`') 
//     || username.value.includes("'")){
//       alert("Ім'я користувача не може містити наступний символів: \"@\", \"!\", \"?\", \"~\", \"`\", \"'\"")
//   }
//   else{
//     const user = {username : usernameLog.value, password: passwordLog.value} 

//     const url = `/logIn?user=${JSON.stringify(user)}`

//     fetch(url)
//       .then(response => { if (response.text().length) {response.text()}else{alert("Ім'я користувача чи пароль неправильні, переконайтеся, що все введено правильно")}})
//       .then(html => window.location.href = url)
//       .catch(error => {console.error(error)})
//   }
// })

// SignBtn.addEventListener('click', () => {
//   if (passwordSign.value.length <= 8 ){
//     alert('Ви ввели короткий пароль, він має бути не менше 8 символів в довжину')
//   }
//   else if (usernameSign.value.includes('@') 
//     || username.value.includes('!') 
//     || username.value.includes('~') 
//     || username.value.includes('?') 
//     || username.value.includes('`') 
//     || username.value.includes("'")){
//       alert("Ім'я користувача не може містити наступний символів: \"@\", \"!\", \"?\", \"~\", \"`\", \"'\"")
//   }
//   else{
//     const user = {username : usernameLog.value, password: passwordLog.value} 

//     const url = `/signUp`

//     fetch(url, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     })
//       .then(response => response.text())
//       .then(html => window.location.href = url)
//       .catch(error => {console.error(error)})
//   }
// })