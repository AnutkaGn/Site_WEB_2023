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
let logined = false
let loginedUser = {}
const usernameLog = document.getElementById('loginLog')
const passwordLog = document.getElementById('passwordLog')
const usernameSign = document.getElementById('loginSign')
const passwordSign = document.getElementById('passwordSign')
const email = document.getElementById('email')
const LogBtn = document.getElementById('LogBtn')
const SignBtn = document.getElementById('SignBtn')
const modal = document.getElementById("openModal")
let users = {
  users: [
    {
      "_id": {
        "$oid": "645a13b816f29c2395c5e7cc"
      },
      "username": "MaxKorop",
      "password": "@K23_M02_A05",
      "e_mail": "makskorop99@gmail.com",
      "tickets": [],
      "status": true
    },
    {
      "_id": {
        "$oid": "645a13b816f29c2395c5e7cd"
      },
      "username": "AnutkaGn",
      "password": "$_AN5&das_34",
      "e_mail": "annaartemivna@gmail.com",
      "tickets": [],
      "status": true
    }
  ]
}


LogBtn.addEventListener('click', () => {
  if (passwordLog.value.length < 8 ){
    alert('Ви ввели короткий пароль, він має бути не менше 8 символів в довжину')
  }
  else if (usernameLog.value.includes('@') 
    || usernameLog.value.includes('!') 
    || usernameLog.value.includes('~') 
    || usernameLog.value.includes('?') 
    || usernameLog.value.includes('`') 
    || usernameLog.value.includes("'")){
      alert("Ім'я користувача не може містити наступний символів: \"@\", \"!\", \"?\", \"~\", \"`\", \"'\"")
  }
  else{
    console.log('else')
    users.users.forEach((user) => {
      if (usernameLog.value == user.username && passwordLog.value == user.password){
        logined = true
        loginedUser = {
          username: user.username,
          password: user.password,
          email: user.email
        }
        LogBtn.setAttribute("href", "#close")
      }
    })
    // const user = [usernameLog.value, passwordLog.value]

    // const url = `/user?user=${JSON.stringify(user)}`

    // fetch(url)
    //   .then(response => logined = true)
    //   .then(html => window.location.href = url)
    //   .catch(error => {console.error(error)})
  }
})

SignBtn.addEventListener('click', () => {
  if (passwordSign.value.length < 8 ){
    alert('Ви ввели короткий пароль, він має бути не менше 8 символів в довжину')
  }
  else if (usernameSign && usernameSign.value.includes('@') 
    || usernameSign.value.includes('!') 
    || usernameSign.value.includes('~') 
    || usernameSign.value.includes('?') 
    || usernameSign.value.includes('`') 
    || usernameSign.value.includes("'")){
      alert("Ім'я користувача не може містити наступний символів: \"@\", \"!\", \"?\", \"~\", \"`\", \"'\"")
  }
  else{
    console.log('else')
    
    SignBtn.setAttribute("href", "#close")
    users.users.push({
      "username": usernameSign.value,
      "password": passwordSign.value,
      "email": email.value,
      "tickets": [],
      "status": false
    })
    // const user = {username : usernameLog.value, password: passwordLog.value, email: email.value} 

    // const url = `/signUp`

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(user)
    // })
    //   .then(response => logined = response)
    //   .catch(error => {console.error(error)})
  }
})