// бугрер меню
const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-nav]");
const navigation = nav?.querySelectorAll("a");
// откртие закрытие на бургер
burger?.addEventListener("click" , () => {
   burger?.classList.toggle("burger--active");
   nav?.classList.toggle("navbutton--visibl") ;
});

navigation.forEach(el => {
    el.addEventListener("click", () => {
        burger?.classList.remove("burger--active");
        nav?.classList.remove("navbutton--visibl");   
    })
});

//Закрытие на ecp и вне блока 
window.addEventListener ("keydown", function(event){
    if (event.keyCode === 27){
        burger?.classList.remove("burger--active");
        nav?.classList.remove("navbutton--visibl");   
    }
  })

window.addEventListener("click", function(event){
    if (!event.target.classList.contains("burger--active") && !event.target.closest(".navbutton")) {
      burger?.classList.remove("burger--active");
      nav?.classList.remove("navbutton--visibl");    
    } 
  });


//ЭТАП 1!


// кнопка не активная до регистрации  

const checkCardForm = document.querySelector('.library-card-form');
const checkCardBtn = document.querySelector('.button-check-card');

//если пользыватель  НЕ зарегистрирован
if (localStorage.getItem('userRegistered') !== 'true') {
checkCardBtn.addEventListener('click', (event) => {
//отключить кнопку 
event.stopPropagation();
event.preventDefault();
})}else {checkCardForm.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();
});};
//отключить дефолтное поведение 


// слайдер 
const swiper = new Swiper('.swiper', {
  // Optional parameters
  breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 25,
        
    },
    895: {
        slidesPerView: 2,
        spaceBetween: 25,    
    },
    1345: {
        slidesPerView: 3,
        spaceBetween: 25,
    }
},
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

});



// Секция фоворит
  // кнопки
const labelWinter = document.querySelector('.label-season-winter')
const labelSpring = document.querySelector('.label-season-Spring')
const labelSummer = document.querySelector('.label-season-summer')
const labelAutumn = document.querySelector('.label-season-autumn')
  //книги сезонов
const bookWinter = document.querySelector('.winter-book-list')
const bookSpring = document.querySelector('.spring-book-list')
const bookSummer = document.querySelector('.summer-book-list')
const bookAutumn = document.querySelector('.autumn-book-list')

// Функции 
labelWinter?.addEventListener("click" , () => {
  bookWinter?.classList.add("book-active");
  setTimeout(() => {
    bookWinter?.classList.add("active");
  }, 0);
  bookSpring?.classList.remove("book-active");
  bookSpring?.classList.remove("active");
  bookSummer?.classList.remove("book-active");
  bookSummer?.classList.remove("active");
  bookAutumn?.classList.remove("book-active");
  bookAutumn?.classList.remove("active");
});

labelSpring?.addEventListener("click" , () => {
  bookSpring?.classList.add("book-active");
  setTimeout(() => {
    bookSpring?.classList.add("active");
  }, 0);
  bookWinter?.classList.remove("book-active");
  bookWinter?.classList.remove("active");
  bookSummer?.classList.remove("book-active");
  bookSummer?.classList.remove("active");
  bookAutumn?.classList.remove("book-active");
  bookAutumn?.classList.remove("active");
});

labelSummer?.addEventListener("click" , () => {
  bookSummer?.classList.add("book-active");
  setTimeout(() => {
    bookSummer?.classList.add("active");
  }, 0);
  bookSpring?.classList.remove("book-active");
  bookSpring?.classList.remove("active");
  bookWinter?.classList.remove("book-active");
  bookWinter?.classList.remove("active");
  bookAutumn?.classList.remove("book-active");
  bookAutumn?.classList.remove("active");
});

labelAutumn?.addEventListener("click" , () => {
  bookAutumn?.classList.add("book-active");
  setTimeout(() => {
    bookAutumn?.classList.add("active");
  }, 0);
  bookSpring?.classList.remove("book-active");
  bookSpring?.classList.remove("active");
  bookSummer?.classList.remove("book-active");
  bookSummer?.classList.remove("active");
  bookWinter?.classList.remove("book-active");
  bookWinter?.classList.remove("active");
});



// ЭТАП 2 


// Меню авторизации при нажатии на иконку пользователя

   //открытие меню и закритие на иконку
const buttonProfile = document.querySelector('.profil')
const dporMenuProfile = document.querySelector('.drop-menu-profile')

buttonProfile?.addEventListener("click" , () => {
  dporMenuProfile?.classList.toggle("menu-active");
});
  //закрытие на другие части сайта
  window.addEventListener ("keydown", function(event){
    if (event.keyCode === 27){
      dporMenuProfile?.classList.remove("menu-active");
    }
  })

  document.addEventListener("click", function(event) {
    const targetElement = event.target;
  if (!targetElement.closest('.profil') && !targetElement.closest('.drop-menu-profile')) {
      dporMenuProfile?.classList.remove("menu-active");
    }
  });

//модалка регистрации 
const btnRegisterProfile = document.querySelector('.button-rigister-profile')
const menuRegistr = document.querySelector('.modal-register')
const closeRegistr = document.querySelector('.close-register')
const btnSingUp = document.querySelector ('.button-sing-up')

btnRegisterProfile?.addEventListener("click" , () => {
  menuRegistr?.classList.toggle("menu-active");
  dporMenuProfile?.classList.remove("menu-active");
  closeRegistr?.classList.remove("menu-active");
});

btnSingUp?.addEventListener("click", () =>{
  menuRegistr?.classList.toggle("menu-active");
})

window.addEventListener ("keydown", function(event){
  if (event.keyCode === 27){
    menuRegistr?.classList.remove("menu-active");
  }
})

closeRegistr.addEventListener('click' , () =>{
  menuRegistr?.classList.remove("menu-active");
})

window.addEventListener('click', (event) => {
  if (event.target === menuRegistr) {
    menuRegistr?.classList.remove('menu-active');
  }
});


                // Проверка регистрации 

 // проверка на пустоту
  
// Получить все элементы input
const inputs = document.getElementsByClassName("input-register-modal");
const errorSpans = document.getElementsByClassName("fill-error");
const signUpButton = document.querySelector(".btn-rigister-profile");

// Отслеживать событие нажатия на кнопку Sign Up
signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      errorSpans[i].classList.add("show-error");
    } else {
      errorSpans[i].classList.remove("show-error");
    }
  }
});

// Отслеживать событие ввода в поля ввода и удалять класс show-error
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function() {
    errorSpans[i].classList.remove("show-error");
  });
}


  // Проверка name 
    //проверка на длину 
const nameInputs = document.querySelectorAll('.input-register-modal');

nameInputs.forEach(input => {
  input.addEventListener('input', () => {
    const nameError = input.parentNode.querySelector('.name-error');
    if (input.value.length < 3 && input.value.length > 0) {
      nameError.classList.add('show-error');
    } else {
      nameError.classList.remove('show-error');
    }
  });
});


      //проверка емайла на правильность ввода 
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.getElementById('email');
const errorInput = document.querySelector(".email-error")

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function toggleError(isValid) {
  if (input.value.trim() === '') {
    errorInput.classList.remove('show-error');
  } else {
    if (isValid) {
      errorInput.classList.remove('show-error');
    } else {
      errorInput.classList.add('show-error');
    }
  }
}

function onInput() {
  const value = input.value.trim();
  toggleError(isEmailValid(value));
}

input.addEventListener('input', onInput);


// проверка пасс на длину 

const passwordInput = document.querySelectorAll('.input-register-modal');
const passErrorElement = document.querySelector('.pass-error');

// Функция для проверки пароля 

nameInputs.forEach(input => {
  input.addEventListener('input', () => {
    const passError = input.parentNode.querySelector('.pass-error');
    if (input.value.length < 8 && input.value.length > 0) {
      passError.classList.add('show-error');
    } else {
      passError.classList.remove('show-error');
    }
  });
});

//сохранения данных  localStorage

 
document.querySelector('.btn-rigister-profile').addEventListener('click', function(e) {
  e.preventDefault(); // отменяем отправку формы

// Получаем значения полей ввода
  const firstName = document.querySelector('.input-register-modal:nth-of-type(1)').value;
  const lastName = document.querySelector('.input-register-modal-2').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('.input-register-modal[type="password"]').value;

// Проверяем, есть ли пустые поля
  if (firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
    // Проверяем, нет ли ошибок введенных данных
    if (!document.querySelector('.name-error.show-error') && !document.querySelector('.email-error.show-error') && !document.querySelector('.pass-error.show-error')) {
      // Сохраняем значения в localStorage
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      // Генерируем случайный номер карты
      const cardNumberHex = generateCardNumber();
      // Сохраняем сгенерированный номер карты в localStorage
      localStorage.setItem('cardNumber', cardNumberHex);    
      // сохраняем книги 
      localStorage.setItem('userBooks', 0);
      //сохраняем заходов 
      localStorage.setItem('userVisits', 1);
      localStorage.setItem('userRegistered' ,true);
      localStorage.setItem('userAuthorized', true);
      localStorage.setItem('userLibraryCard', false);
      //  Перенаправляем на другую страницу или делаем другую логику
      location.reload();
    }
  }
});

function generateCardNumber() {
  // Сгенерировать случайное девятизначное число
  let randomNumber = Math.floor(Math.random() * 90000000) + 10000000;
  // Сконвертировать число в 16-ричную систему
  let cardNumberHex = randomNumber.toString(16).toUpperCase();
  // Добавить нули в начало, чтобы получить 9-значное число
  while (cardNumberHex.length < 9) {
    cardNumberHex = "0" + cardNumberHex;
  }
  return cardNumberHex;
} 

// Этап 3 

   //модалка Логина
   const btnloginProfile = document.querySelector('.button-log-in-profile')
   const menulogin = document.querySelector('.modal-login')
   const closeLogin = document.querySelector('.close-login')
   const btnLogin = document.querySelector ('.button-log-in')
   
   btnloginProfile?.addEventListener("click" , () => {
     menulogin?.classList.toggle("menu-active");
     dporMenuProfile?.classList.remove("menu-active");
     closeLogin?.classList.remove("menu-active");
   });
   
   btnLogin?.addEventListener("click", () =>{
     menulogin?.classList.toggle("menu-active");
   })
   
   window.addEventListener ("keydown", function(event){
     if (event.keyCode === 27){
       menulogin?.classList.remove("menu-active");
     }
   })
   
   closeLogin.addEventListener('click' , () =>{
     menulogin?.classList.remove("menu-active");
   })
   
   window.addEventListener('click', (event) => {
     if (event.target === menulogin) {
       menulogin?.classList.remove('menu-active');
     }
   });
   

//проверка инпутов логин 

//проверка на пустоту
// Получить все элементы input
const inputsLogin = document.getElementsByClassName("input-login-modal");
const errorSpansLogin = document.getElementsByClassName("fill-error-log");
const logInButton = document.querySelector(".btn-login-profile");

// Отслеживать событие нажатия на кнопку login
logInButton.addEventListener("click", function(event) {
  event.preventDefault();

  for (let i = 0; i < inputsLogin.length; i++) {
    if (inputsLogin[i].value.trim() === "") {
      errorSpansLogin[i].classList.add("show-error");
    } else {
      errorSpansLogin[i].classList.remove("show-error");
    }
  }
});

// Отслеживать событие ввода в поля ввода и удалять класс show-error
for (let i = 0; i < inputsLogin.length; i++) {
  inputsLogin[i].addEventListener("input", function() {
    errorSpansLogin[i].classList.remove("show-error");
  });
}

// проверка на верность логина


const emailUser = localStorage.getItem('email')
const passUser = localStorage.getItem('password')
const emailLogin = document.querySelector('.input-login-modal[type="text"]');
const passwordLogin = document.querySelector('.input-login-modal[type="password"]');
const cardNumberUser = localStorage.getItem ('cardNumber')
 

// проверка логина и карточки на верность
logInButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (emailLogin.value !== '') {
    if (emailUser !== emailLogin.value && cardNumberUser !== emailLogin.value) {
      document.querySelector('.error-login').classList.add('show-error');
    } else {
      document.querySelector('.error-login').classList.remove('show-error');
      
    }
   
  }
});

emailLogin.addEventListener("input", function() {
  document.querySelector('.error-login').classList.remove('show-error');
});


// проверка перед входом данных 
logInButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (emailLogin.value !== '') {
    if (emailUser !== emailLogin.value && cardNumberUser !== emailLogin.value || passUser !== passwordLogin.value ) {
    } else {
      
      logInButton?.addEventListener("click" , () => {
        localStorage.setItem('userAuthorized', true);
                      //увелечение значения счетчика заходов 
                 // Получаем текущее значение из localStorage
                 let userVisits = localStorage.getItem('userVisits');
                 // Проверяем, есть ли уже значение в localStorage
                 if (userVisits === null) {
                   // Если значения нет, устанавливаем его равным 1
                   userVisits = 1;
                 } else {
                   // Если значение есть, увеличиваем его на 1
                   userVisits = parseInt(userVisits) + 1;
                 }
                 // Обновляем значение в localStorage
                 localStorage.setItem('userVisits', userVisits.toString());
                 // Функция, которая будет выполняться при клике на кнопку
                 function increaseUserVisits() {
                   // Увеличиваем значение в localStorage
                   userVisits = parseInt(localStorage.getItem('userVisits')) + 1;
                   // Обновляем значение в localStorage
                   localStorage.setItem('userVisits', userVisits.toString());
                 }
                 // Назначаем функцию увеличения значения на событие "click" кнопки
                 logInButton.addEventListener('click', increaseUserVisits);          
        location.reload()
       });
    }
   
  }
});


// проверка пароля на правильность 
logInButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (passwordLogin.value.length > 8) {
    if (passUser !== passwordLogin.value) {
      document.querySelector('.error-pass-login').classList.add('show-error');
    } else {
      document.querySelector('.error-pass-login').classList.remove('show-error');
    }
  }
});


passwordLogin.addEventListener("input", function() {
  document.querySelector('.error-pass-login').classList.remove('show-error');
});

// проверка пасс на длину 
// Функция для проверки пароля 
const passwordLoginLeng = document.querySelectorAll('.input-login-modal');

passwordLoginLeng.forEach(input => {
  input.addEventListener('input', () => {
    const passLogin = input.parentNode.querySelector('.pass-error-login');
    if (input.value.length < 8 && input.value.length > 0) {
      passLogin.classList.add('show-error');
    } else {
      passLogin.classList.remove('show-error');
    }
  });
});

// модалка Lib card

const closeModalLibCard = document.querySelector(".close-modal-librarycard")

   // открытие логина на покупке книг при не авторизации 
   const loginByuBook = document.querySelectorAll(".buy-book")
  //  loginByuBook?.forEach(button => {
  //    button.addEventListener("click", () =>{
  //      menulogin?.classList.toggle("menu-active");
  //    })
  //  })
   // открытие покупки карточки если пользыватель авторизирован 
   const modalLibCard = document.querySelector(".modal-librarycard")

 //модалки на покупке книг 
const ofBuyBook = document.querySelectorAll(".btn-byu-book")
//покупка карты
if (localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') === 'true' && localStorage.getItem('userLibraryCard') === 'false' ){
  loginByuBook?.forEach(button => {
    button.addEventListener("click", () =>{
      modalLibCard?.classList.toggle("menu-active");
    })
  }) 
  //покупка книг
 } else if(localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') === 'true'&& localStorage.getItem('userLibraryCard') === 'true'){
    const selectedButtons = [];
    ofBuyBook.forEach(function(event) {
      event.addEventListener("click", function(e) {
        // Проверяем, есть ли уже такой идентификатор в массиве
        if (!selectedButtons.includes(event.id)) {
          // Добавляем идентификатор кнопки в массив
          selectedButtons.push(event.id);
    
          // Продолжаем остальные действия
          event.innerHTML = '<div class="btn-byu-book"> <button class="buy-book-off" disabled>Own</button></div>';
    
          let userBooksOwn = localStorage.getItem('userBooks');
          userBooksOwn++
          localStorage.setItem('userBooks', userBooksOwn);
          localStorage.setItem("selected_buttons", JSON.stringify(selectedButtons));
        }
      });
    });

 }
//модалка логина
  else{
  
     loginByuBook?.forEach(button => {
     button.addEventListener("click", () =>{
       menulogin?.classList.toggle("menu-active");
     })
   })
  }
 

   //// модалка Lib card

   

   window.addEventListener ("keydown", function(event){
    if (event.keyCode === 27){
      modalLibCard?.classList.remove("menu-active");
    }
  })
  
  closeModalLibCard.addEventListener('click' , () =>{
    modalLibCard?.classList.remove("menu-active");
  })
  
  window.addEventListener('click', (event) => {
    if (event.target === modalLibCard) {
      modalLibCard?.classList.remove('menu-active');
    }
  });
   
   // переглючения модалок рег и лог 
   const btnReg = document.querySelector(".btn-register")
   const btnLog = document.querySelector(".btn-login")
   
   btnReg?.addEventListener("click" , () => {
     menuRegistr?.classList.toggle("menu-active");
     menulogin?.classList.remove("menu-active");
   });
   
   btnLog?.addEventListener("click" , () => {
     menulogin?.classList.toggle("menu-active");
     menuRegistr?.classList.remove("menu-active");
   });

  // конец 3 этапа

const menuProf = document.querySelector(".menu-profile")
//Иконка пользователя меняется на заглавные буквы имени
//Достаем элементы 
const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');



//Берем первый буквы
const firstNameInitial = firstName.charAt(0);
const lastNameInitial = lastName.charAt(0);

if (localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') === 'true'){
  menuProf.innerHTML=`<div class="menu-profile">
  <svg class="profil" style="display: none; width="28" height="28" viewBox="0 0 28 28"   xmlns="http://www.w3.org/2000/svg">
      <g id="icon_profile">
      <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM18.6667 7.77778C18.6667 10.3551 16.5774 12.4444 14.0001 12.4444C11.4227 12.4444 9.33339 10.3551 9.33339 7.77778C9.33339 5.20045 11.4227 3.11111 14.0001 3.11111C16.5774 3.11111 18.6667 5.20045 18.6667 7.77778ZM19.4998 16.2781C20.9584 17.7367 21.7778 19.715 21.7778 21.7778H14L6.22225 21.7778C6.22225 19.715 7.0417 17.7367 8.50031 16.2781C9.95893 14.8194 11.9372 14 14 14C16.0628 14 18.0411 14.8194 19.4998 16.2781Z" fill="white"/>
      </g>
  </svg>
  <div class="profil profil-autro">
     <span class="autor-Profil" title="${firstName} ${lastName}">${firstNameInitial.toUpperCase()}${lastNameInitial.toUpperCase()}<span>                    
  </div>
  <div class="drop-menu-profile-autoriz">
      <ul class="list-account-link">
          <strong class="profile-account profile-account-autoriz ">${localStorage.getItem('cardNumber')}</strong>
          <hr class="menu-line-account">
          <li class="account-li"><button class="account-li account-li-autoriz account-profil" >My profile</button></li>
          <li class="account-li"><button class="account-li account-li-autoriz account-log-out">Log Out</button></li>
      </ul>
  </div>
</div>`
  
}




// при вводе в Digital Library Cards
const readersName = document.querySelector('.readers-name')
const cardNum = document.querySelector('.card-number')

//функция переключения блоков до авторизации 
checkCardBtn.addEventListener("click", (e) =>{
  
  if (firstName.trim().toLowerCase() + " " + lastName.trim().toLowerCase() !== readersName.value.trim().toLowerCase() || cardNumberUser.toLowerCase() !== cardNum.value.toLowerCase()){
  e.preventDefault()}
   else {
    checkCardForm.innerHTML = `
<form class="library-card-form">
<div class="library-card-input">
    <span class="card-input-name">Brooklyn Public Library</span>
    <span class="readers-name chek-card-profil">${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}</span>
    <span class="card-number chek-card-profil">${localStorage.getItem('cardNumber')}</span>
</div>
<div class="library-card-button">
    <button class="button-check-card" style="display: none;" >Check the card</button>
    <ul class="info-digital-card">
        <li class="info-digital-card-profil">
            <span class="info-digital-card-in">Visits</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 10C13.2614 10 15.5 7.76142 15.5 5C15.5 2.23858 13.2614 0 10.5 0C7.73858 0 5.5 2.23858 5.5 5C5.5 7.76142 7.73858 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5L0.5 21C0.5 18.3478 1.55357 15.8043 3.42893 13.9289C5.3043 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z" fill="#BB945F"/>
            </svg>
            <span class="info-digital-card-numer">${localStorage.getItem('userVisits')}</span>
        </li>
        <li class="info-digital-card-profil">
            <span class="info-digital-card-in">Bonuses</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z" fill="#BB945F"/>
            </svg>
            <span class="info-digital-card-numer">1240</span>
        </li>
        <li class="info-digital-card-profil">
            <span class="info-digital-card-in">Books</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <rect width="20" height="21" fill="#BB945F"/>
                <rect x="2" width="1" height="19" fill="#826844"/>
                <rect x="1" width="1" height="21" fill="white"/>
            </svg>
            <span class="info-digital-card-numer">${localStorage.getItem('userBooks')}</span>
        </li>
    </ul>
</div>
</form>
  `;

  setTimeout(()=>{

    checkCardForm.innerHTML = `<form class="library-card-form">
                 <div class="library-card-input">
                     <span class="card-input-name">Brooklyn Public Library</span>
                     <input type="text" class="readers-name chek-card-profil" placeholder="Reader's name" >
                     <input type="text" class="card-number chek-card-profil" placeholder="Card number" >
                 </div>
                 <div class="library-card-button">
                     <button class="button-check-card" >Check the card</button>
                     <ul class="info-digital-card" style="display: none;">
                         <li class="info-digital-card-profil">
                             <span class="info-digital-card-in">Visits</span>
                             <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 10C13.2614 10 15.5 7.76142 15.5 5C15.5 2.23858 13.2614 0 10.5 0C7.73858 0 5.5 2.23858 5.5 5C5.5 7.76142 7.73858 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5L0.5 21C0.5 18.3478 1.55357 15.8043 3.42893 13.9289C5.3043 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z" fill="#BB945F"/>
                             </svg>
                             <span class="info-digital-card-numer"></span>
                         </li>
                         <li class="info-digital-card-profil">
                             <span class="info-digital-card-in">Bonuses</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                 <path d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z" fill="#BB945F"/>
                             </svg>
                             <span class="info-digital-card-numer">1240</span>
                         </li>
                         <li class="info-digital-card-profil">
                             <span class="info-digital-card-in">Books</span>
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                 <rect width="20" height="21" fill="#BB945F"/>
                                 <rect x="2" width="1" height="19" fill="#826844"/>
                                 <rect x="1" width="1" height="21" fill="white"/>
                             </svg>
                             <span class="info-digital-card-numer"></span>
                         </li>
                     </ul>
                              </div>
                </form>
                                   `;location.reload();}, 10000 )
  
}})

checkCardBtn.addEventListener("click", (e) =>{
  
  if (lastName.trim().toLowerCase()+ " " + firstName.trim().toLowerCase() !== readersName.value.trim().toLowerCase() || cardNumberUser.toLowerCase() !== cardNum.value.toLowerCase() ){
  e.preventDefault()}
   else {
    checkCardForm.innerHTML = `
<form class="library-card-form">
<div class="library-card-input">
    <span class="card-input-name">Brooklyn Public Library</span>
    <span class="readers-name chek-card-profil">${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}</span>
    <span class="card-number chek-card-profil">${localStorage.getItem('cardNumber')}</span>
</div>
<div class="library-card-button">
    <button class="button-check-card" style="display: none;" >Check the card</button>
    <ul class="info-digital-card">
        <li class="info-digital-card-profil">
            <span class="info-digital-card-in">Visits</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 10C13.2614 10 15.5 7.76142 15.5 5C15.5 2.23858 13.2614 0 10.5 0C7.73858 0 5.5 2.23858 5.5 5C5.5 7.76142 7.73858 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5L0.5 21C0.5 18.3478 1.55357 15.8043 3.42893 13.9289C5.3043 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z" fill="#BB945F"/>
            </svg>
            <span class="info-digital-card-numer">${localStorage.getItem('userVisits')}</span>
        </li>
        <li class="info-digital-card-profil">
            <span class="info-digital-card-in">Bonuses</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z" fill="#BB945F"/>
            </svg>
            <span class="info-digital-card-numer">1240</span>
        </li>
        <li class="info-digital-card-profil">
            <span class="info-digital-card-in">Books</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <rect width="20" height="21" fill="#BB945F"/>
                <rect x="2" width="1" height="19" fill="#826844"/>
                <rect x="1" width="1" height="21" fill="white"/>
            </svg>
            <span class="info-digital-card-numer">${localStorage.getItem('userBooks')}</span>
        </li>
    </ul>
</div>
</form>
  `;

  setTimeout(()=>{

    checkCardForm.innerHTML = `<form class="library-card-form">
                 <div class="library-card-input">
                     <span class="card-input-name">Brooklyn Public Library</span>
                     <input type="text" class="readers-name chek-card-profil" placeholder="Reader's name" >
                     <input type="text" class="card-number chek-card-profil" placeholder="Card number" >
                 </div>
                 <div class="library-card-button">
                     <button class="button-check-card" >Check the card</button>
                     <ul class="info-digital-card" style="display: none;">
                         <li class="info-digital-card-profil">
                             <span class="info-digital-card-in">Visits</span>
                             <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 10C13.2614 10 15.5 7.76142 15.5 5C15.5 2.23858 13.2614 0 10.5 0C7.73858 0 5.5 2.23858 5.5 5C5.5 7.76142 7.73858 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5L0.5 21C0.5 18.3478 1.55357 15.8043 3.42893 13.9289C5.3043 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z" fill="#BB945F"/>
                             </svg>
                             <span class="info-digital-card-numer"></span>
                         </li>
                         <li class="info-digital-card-profil">
                             <span class="info-digital-card-in">Bonuses</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                 <path d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z" fill="#BB945F"/>
                             </svg>
                             <span class="info-digital-card-numer">1240</span>
                         </li>
                         <li class="info-digital-card-profil">
                             <span class="info-digital-card-in">Books</span>
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                 <rect width="20" height="21" fill="#BB945F"/>
                                 <rect x="2" width="1" height="19" fill="#826844"/>
                                 <rect x="1" width="1" height="21" fill="white"/>
                             </svg>
                             <span class="info-digital-card-numer"></span>
                         </li>
                     </ul>
                              </div>
                </form>
                                   `;location.reload();}, 10000 )
  
}})




   




// //проверка инпутов логин 

// //проверка на пустоту
// // Получить все элементы input
// const inputsLogin = document.getElementsByClassName("input-login-modal");
// const errorSpansLogin = document.getElementsByClassName("fill-error-log");
// const logInButton = document.querySelector(".btn-login-profile");

// // Отслеживать событие нажатия на кнопку login
// logInButton.addEventListener("click", function(event) {
//   event.preventDefault();

//   for (let i = 0; i < inputsLogin.length; i++) {
//     if (inputsLogin[i].value.trim() === "") {
//       errorSpansLogin[i].classList.add("show-error");
//     } else {
//       errorSpansLogin[i].classList.remove("show-error");
//     }
//   }
// });

// // Отслеживать событие ввода в поля ввода и удалять класс show-error
// for (let i = 0; i < inputsLogin.length; i++) {
//   inputsLogin[i].addEventListener("input", function() {
//     errorSpansLogin[i].classList.remove("show-error");
//   });
// }

// // проверка на верность логина


// const emailUser = localStorage.getItem('email')
// const passUser = localStorage.getItem('password')
// const emailLogin = document.querySelector('.input-login-modal[type="text"]');
// const passwordLogin = document.querySelector('.input-login-modal[type="password"]');
// const cardNumberUser = localStorage.getItem ('cardNumber')
 

// // проверка логина и карточки на верность
// logInButton.addEventListener("click", function(event) {
//   event.preventDefault();
//   if (emailLogin.value !== '') {
//     if (emailUser !== emailLogin.value && cardNumberUser !== emailLogin.value) {
//       document.querySelector('.error-login').classList.add('show-error');
//     } else {
//       document.querySelector('.error-login').classList.remove('show-error');
      
//     }
   
//   }
// });

// emailLogin.addEventListener("input", function() {
//   document.querySelector('.error-login').classList.remove('show-error');
// });


// // проверка перед входом данных 
// logInButton.addEventListener("click", function(event) {
//   event.preventDefault();
//   if (emailLogin.value !== '') {
//     if (emailUser !== emailLogin.value && cardNumberUser !== emailLogin.value || passUser !== passwordLogin.value ) {
//     } else {
      
//       logInButton?.addEventListener("click" , () => {
//         localStorage.setItem('userAuthorized', true);
//                       //увелечение значения счетчика заходов 
//                  // Получаем текущее значение из localStorage
//                  let userVisits = localStorage.getItem('userVisits');
//                  // Проверяем, есть ли уже значение в localStorage
//                  if (userVisits === null) {
//                    // Если значения нет, устанавливаем его равным 1
//                    userVisits = 1;
//                  } else {
//                    // Если значение есть, увеличиваем его на 1
//                    userVisits = parseInt(userVisits) + 1;
//                  }
//                  // Обновляем значение в localStorage
//                  localStorage.setItem('userVisits', userVisits.toString());
//                  // Функция, которая будет выполняться при клике на кнопку
//                  function increaseUserVisits() {
//                    // Увеличиваем значение в localStorage
//                    userVisits = parseInt(localStorage.getItem('userVisits')) + 1;
//                    // Обновляем значение в localStorage
//                    localStorage.setItem('userVisits', userVisits.toString());
//                  }
//                  // Назначаем функцию увеличения значения на событие "click" кнопки
//                  logInButton.addEventListener('click', increaseUserVisits);          
//         location.reload()
//        });
//     }
   
//   }
// });


// // проверка пароля на правильность 
// logInButton.addEventListener("click", function(event) {
//   event.preventDefault();
//   if (passwordLogin.value.length > 8) {
//     if (passUser !== passwordLogin.value) {
//       document.querySelector('.error-pass-login').classList.add('show-error');
//     } else {
//       document.querySelector('.error-pass-login').classList.remove('show-error');
//     }
//   }
// });


// passwordLogin.addEventListener("input", function() {
//   document.querySelector('.error-pass-login').classList.remove('show-error');
// });

// // проверка пасс на длину 
// // Функция для проверки пароля 
// const passwordLoginLeng = document.querySelectorAll('.input-login-modal');

// passwordLoginLeng.forEach(input => {
//   input.addEventListener('input', () => {
//     const passLogin = input.parentNode.querySelector('.pass-error-login');
//     if (input.value.length < 8 && input.value.length > 0) {
//       passLogin.classList.add('show-error');
//     } else {
//       passLogin.classList.remove('show-error');
//     }
//   });
// });

// if (emailUser !== emailLogin.value && cardNumberUser !== emailLogin.value || passUser !== passwordLogin.value ){
//   logInButton?.addEventListener("click" , () => {
//     localStorage.setItem('userAuthorized', true);
//                   //увелечение значения счетчика заходов 
//              // Получаем текущее значение из localStorage
//              let userVisits = localStorage.getItem('userVisits');
//              // Проверяем, есть ли уже значение в localStorage
//              if (userVisits === null) {
//                // Если значения нет, устанавливаем его равным 1
//                userVisits = 1;
//              } else {
//                // Если значение есть, увеличиваем его на 1
//                userVisits = parseInt(userVisits) + 1;
//              }
//              // Обновляем значение в localStorage
//              localStorage.setItem('userVisits', userVisits.toString());
//              // Функция, которая будет выполняться при клике на кнопку
//              function increaseUserVisits() {
//                // Увеличиваем значение в localStorage
//                userVisits = parseInt(localStorage.getItem('userVisits')) + 1;
//                // Обновляем значение в localStorage
//                localStorage.setItem('userVisits', userVisits.toString());
//              }
//              // Назначаем функцию увеличения значения на событие "click" кнопки
//              logInButton.addEventListener('click', increaseUserVisits);          
//     location.reload()
//    });
// }




// ЭТАП 4

// Меню авторизации при нажатии на иконку пользователя

   //открытие меню и закритие на иконку 
   const buttonProfileAutoriz = document.querySelector('.profil-autro')
   const dporMenuProfileAutoriz = document.querySelector('.drop-menu-profile-autoriz')
   
   buttonProfileAutoriz?.addEventListener("click" , () => {
    dporMenuProfileAutoriz?.classList.toggle("menu-active");
   });
     //закрытие на другие части сайта
     window.addEventListener ("keydown", function(event){
       if (event.keyCode === 27){
        dporMenuProfileAutoriz?.classList.remove("menu-active");
       }
     })
   
     document.addEventListener("click", function(event) {
       const targetElement = event.target;
     if (!targetElement.closest('.profil-autro') && !targetElement.closest('.drop-menu-profile-autoriz')) {
      dporMenuProfileAutoriz?.classList.remove("menu-active");
       }
     });


// октрытие модалки профиль

const modalProfil = document.querySelector('.modal-profil');
const btnAccountProfil = document.querySelector('.account-profil');
const closeProfil = document.querySelector('.close-container-profil')


btnAccountProfil.addEventListener("click" , () => {
  modalProfil.classList.toggle("menu-active");
  dporMenuProfileAutoriz.classList.remove("menu-active");
  closeProfil?.classList.remove("menu-active");
});

modalProfil.addEventListener('click', (event) => {
  if (event.target.classList.contains('close-container-profil')) {
     modalProfil?.classList.remove('menu-active');
  }
});
     
    window.addEventListener ("keydown", function(event){
      if (event.keyCode === 27){
        modalProfil?.classList.remove("menu-active");
      }
    })
  
    
    window.addEventListener('click', (event) => {
      if (event.target === modalProfil) {
        modalProfil?.classList.remove('menu-active');
      }
    });
  

     // выход с сайта 
  const logOutbtn = document.querySelector('.account-log-out')
  logOutbtn?.addEventListener("click" , () => {
    localStorage.removeItem('userAuthorized');
   
    location.reload()
   });

 
// Находим элемент дива
var div = document.querySelector('.click-copi-text');

// Добавляем обработчик события на клик
div.addEventListener('click', function() {
    // Находим элемент с текстом
    var textElement = this.querySelector('input');

    // Создаем временный элемент textarea для копирования текста
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = textElement.value;

    // Добавляем временный элемент на страницу
    document.body.appendChild(tempTextarea);

    // Выделяем текст во временном элементе и копируем его в буфер обмена
    tempTextarea.select();
    document.execCommand('copy');

    // Удаляем временный элемент
    document.body.removeChild(tempTextarea);

    // Отобразить подтверждение копирования
    alert('Текст успешно скопирован');
});

// копирование текста в модалки 
   // Находим элемент дива
   var div = document.querySelector('.click-copi-text');

   // Добавляем обработчик события на клик
   div.addEventListener('click', function() {
       // Находим элемент с текстом
       var textElement = this.querySelector('input');
   
       // Создаем временный элемент textarea для копирования текста
       var tempTextarea = document.createElement('textarea');
       tempTextarea.value = textElement.value;
   
       // Добавляем временный элемент на страницу
       document.body.appendChild(tempTextarea);
   
       // Выделяем текст во временном элементе и копируем его в буфер обмена
       tempTextarea.select();
       document.execCommand('copy');
   
       // Удаляем временный элемент
       document.body.removeChild(tempTextarea);
   });
      


   // модалка профиль
   if (localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') === 'true'){
    modalProfil.innerHTML= `<div class="modal-profil-window">
    <div class="left-container">
        <span class="initials-cont">
        ${firstNameInitial.toUpperCase()}${lastNameInitial.toUpperCase()}
        </span>
        <span class="name-cont">
        ${firstName} ${lastName}
        </span>
    </div>
    <div class="rights-container">
                <span class="my-profil">
                My profile
            </span>
            <ul class="cards-profil">
                <li class="info-digital-card-profil info-profil-gap">
                    <span class="info-digital-card-in profil-info-visits">Visits</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 10C13.2614 10 15.5 7.76142 15.5 5C15.5 2.23858 13.2614 0 10.5 0C7.73858 0 5.5 2.23858 5.5 5C5.5 7.76142 7.73858 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5L0.5 21C0.5 18.3478 1.55357 15.8043 3.42893 13.9289C5.3043 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z" fill="#BB945F"/>
                    </svg>
                    <span class="info-digital-card-numer">${localStorage.getItem('userVisits')}</span>
                </li>
                <li class="info-digital-card-profil info-profil-gap">
                    <span class="info-digital-card-in profil-info-visits">Bonuses</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z" fill="#BB945F"/>
                    </svg>
                    <span class="info-digital-card-numer">1240</span>
                </li>
                <li class="info-digital-card-profil info-profil-gap">
                    <span class="info-digital-card-in profil-info-visits">Books</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <rect width="20" height="21" fill="#BB945F"/>
                        <rect x="2" width="1" height="19" fill="#826844"/>
                        <rect x="1" width="1" height="21" fill="white"/>
                    </svg>
                    <span class="info-digital-card-numer">${localStorage.getItem('userBooks')}</span>
                </li>
            </ul>
            <span class="rented-books">
                Rented books
            </span>
            <ul class="rented-books-byu">
                <li>The Last Queen, Clive Irving</li>
                <li>Dominicana, Angie Cruz</li> 
            </ul>
            <span class="card-num-cop">
                Card number
                <div class="click-copi-text">
                <input class="click-copi" type="text" value="${localStorage.getItem('cardNumber')}" readonly> &nbsp
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                <rect x="2.46826" y="0.25" width="10.5917" height="9.5" rx="0.75" stroke="black" stroke-width="0.5"/>
                                <rect x="0.25" y="2.25" width="10.5917" height="9.5" rx="0.75" fill="white" stroke="black" stroke-width="0.5"/>
                              </svg></input>
                </div>
            </span>  

    </div>
    <svg class="close-container-profil" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M2 16.8507L17 2.00001" stroke="#0C0C0E" stroke-width="3"/>
        <path d="M2 2.14928L17 17" stroke="#0C0C0E" stroke-width="3"/>
    </svg>`
   };

// копирование текста в модалки 
   // Находим элемент дива
   var div = document.querySelector('.click-copi-text');

   // Добавляем обработчик события на клик
   div.addEventListener('click', function() {
       // Находим элемент с текстом
       var textElement = this.querySelector('input');
   
       // Создаем временный элемент textarea для копирования текста
       var tempTextarea = document.createElement('textarea');
       tempTextarea.value = textElement.value;
   
       // Добавляем временный элемент на страницу
       document.body.appendChild(tempTextarea);
   
       // Выделяем текст во временном элементе и копируем его в буфер обмена
       tempTextarea.select();
       document.execCommand('copy');
   
       // Удаляем временный элемент
       document.body.removeChild(tempTextarea);
   });
      


   // блок Digital Library Cards
   const blokLibraryCard = document.querySelector(".blok-library-card")

   if (localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') === 'true'){
    blokLibraryCard.innerHTML= `<div class="blok-library-card">
    <div class="blok-card">
       <h3 class="find-library-card">Find your Library card</h3>  
       <div class="library-card-bg">
       <form class="library-card-form">
       <div class="library-card-input">
           <span class="card-input-name">Brooklyn Public Library</span>
           <span class="readers-name chek-card-profil">${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}</span>
           <span class="card-number chek-card-profil">${localStorage.getItem('cardNumber')}</span>
       </div>
       <div class="library-card-button">
           <button class="button-check-card" style="display: none;" >Check the card</button>
           <ul class="info-digital-card">
               <li class="info-digital-card-profil">
                   <span class="info-digital-card-in">Visits</span>
                   <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 10C13.2614 10 15.5 7.76142 15.5 5C15.5 2.23858 13.2614 0 10.5 0C7.73858 0 5.5 2.23858 5.5 5C5.5 7.76142 7.73858 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5L0.5 21C0.5 18.3478 1.55357 15.8043 3.42893 13.9289C5.3043 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z" fill="#BB945F"/>
                   </svg>
                   <span class="info-digital-card-numer">${localStorage.getItem('userVisits')}</span>
               </li>
               <li class="info-digital-card-profil">
                   <span class="info-digital-card-in">Bonuses</span>
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                       <path d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z" fill="#BB945F"/>
                   </svg>
                   <span class="info-digital-card-numer">1240</span>
               </li>
               <li class="info-digital-card-profil">
                   <span class="info-digital-card-in">Books</span>
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                       <rect width="20" height="21" fill="#BB945F"/>
                       <rect x="2" width="1" height="19" fill="#826844"/>
                       <rect x="1" width="1" height="21" fill="white"/>
                   </svg>
                   <span class="info-digital-card-numer">${localStorage.getItem('userBooks')}</span>
               </li>
           </ul>
       </div>
       </form>
       </div>
   </div>
   <div class="get-card">
       <h3 class="get-reader-card">Visit your profile</h3>
       <p class="get-text-card">With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.</p>
   <div class="button-sing-log">
       <button class="button-log-in account-profil-open">Profile</button>
   </div>
   </div>
</div>
   `};
 

  const btnClikdigLi = document.querySelector(".account-profil-open")

  btnClikdigLi.addEventListener("click" , () => {
    modalProfil.classList.toggle("menu-active");
    
  });


  // покупка карточки библеотеки 
   

                             //заполниность карточки ......
  //Длина номера карты
  var cc = myform.cardcode;
  for (var i in ['input', 'change', 'blur', 'keyup']) {
      cc.addEventListener('input', formatCardCode, false);
  }
  function formatCardCode() {
      var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
      cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
      this.value = cardCode;
  }

  //длина даты 

  var datacar = myform.datacardmo;
  for (var i in ['input', 'change', 'blur', 'keyup']) {
    datacar.addEventListener('input', formatDataCardmo, false);
  }
  function formatDataCardmo() {
      var datacardmo = this.value.replace(/[^\d]/g, '').substring(0,2);
      this.value = datacardmo;
  }

  var datacardyears = myform.datacardyear;
  for (var i in ['input', 'change', 'blur', 'keyup']) {
    datacardyears.addEventListener('input', formatDataCardYear, false);
  }
  function formatDataCardYear() {
      var datacardyear = this.value.replace(/[^\d]/g, '').substring(0,2);
      this.value = datacardyear;
  }

  //длина cv
  var cvc = myform.cvc;
  for (var i in ['input', 'change', 'blur', 'keyup']) {
    cvc.addEventListener('input', formatDataCard, false);
  }
  function formatDataCard() {
      var cvc = this.value.replace(/[^\d]/g, '').substring(0,3);
      this.value = cvc;
  }

  //длина Postal Code
  var postCode = myform.postalcode;
  for (var i in ['input', 'change', 'blur', 'keyup']) {
    postCode.addEventListener('input', formatPostalCode, false);
  }
  function formatPostalCode() {
      var postalcode = this.value.replace(/[^\d]/g, '').substring(0,6);
      this.value = postalcode;
  }




  // Проверка карточки 
  // на пустоту

  // Получить все элементы input
const inputsBuyCard = document.getElementsByClassName("input-librarycard");
const errorSpansBuyCard  = document.getElementsByClassName("fill-error-buy");
const buyCardButton = document.querySelector(".btn-buy-librarycard");

// Отслеживать событие нажатия на кнопку buy
buyCardButton.addEventListener("click", function(event) {
  // event.preventDefault();

  for (let i = 0; i < inputsBuyCard.length; i++) {
    if (inputsBuyCard[i].value.trim() === "") {
      errorSpansBuyCard[i].classList.add("show-error");
    } else {
      errorSpansBuyCard[i].classList.remove("show-error");
    }
  }
});

// Отслеживать событие ввода в поля ввода и удалять класс show-error
for (let i = 0; i < inputsBuyCard.length; i++) {
  inputsBuyCard[i].addEventListener("input", function() {
    errorSpansBuyCard[i].classList.remove("show-error");
  });
}



  // на правильную заполненость 
 // на длину карты 
  const inputCardCode = document.querySelectorAll(".input-cardcode")

inputCardCode.forEach(input => {
  input.addEventListener('input', () => {
    const cardError = input.parentNode.querySelector('.digits-card-error');
    if (input.value.length < 19) {
      cardError.classList.add('show-error');
    } else {
      cardError.classList.remove('show-error');
    }
  });
});

// на длину даты 
// месяц
const inputDataMount = document.querySelectorAll(".input-date-mount")

inputDataMount.forEach(input => {
  input.addEventListener('input', () => {
    const dateErrorMount = input.parentNode.querySelector('.date-error-mount');
    if (input.value.length < 2 && input.value.length > 0 ) {
      dateErrorMount.classList.add('show-error');
    } else {
      dateErrorMount.classList.remove('show-error');
    }
  });
});
//год
const inputDataYear = document.querySelectorAll(".input-date-year")

inputDataYear.forEach(input => {
  input.addEventListener('input', () => {
    const dateErrorYear = input.parentNode.querySelector('.date-error-year');
    if (input.value.length < 2 && input.value.length > 0 ) {
      dateErrorYear.classList.add('show-error');
    } else {
      dateErrorYear.classList.remove('show-error');
    }
  });
});
 
//длину cvc 

const inputCvc = document.querySelectorAll(".input-cvc")

inputCvc.forEach(input => {
  input.addEventListener('input', () => {
    const cvcError = input.parentNode.querySelector('.cvc-error');
    if (input.value.length < 3 && input.value.length > 0 ) {
      cvcError.classList.add('show-error');
    } else {
      cvcError.classList.remove('show-error');
    }
  });
});

//длину Postal code

const inputPostalCode = document.querySelectorAll(".input-postal-code")

inputPostalCode.forEach(input => {
  input.addEventListener('input', () => {
    const postalCodeError = input.parentNode.querySelector('.postal-code-error');
    if (input.value.length < 6 && input.value.length > 0 ) {
      postalCodeError.classList.add('show-error');
    } else {
      postalCodeError.classList.remove('show-error');
    }
  });
});


   //запрет на ввод цифр в имя
   function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1)
      event.preventDefault();
  }


// //сохранения данных  localStorage карточки 

document.querySelector('.btn-buy-librarycard').addEventListener('click', function(e) {
  e.preventDefault(); // отменяем отправку формы

  //   // Получаем значения полей ввода
  const cardholderName = document.querySelector('.input-cardholder-name').value;
  const cityTown = document.querySelector('.input-city-town').value;
  const inputsBuyCard = document.querySelector('.input-cardcode').value;
  const inputDataMount = document.querySelector('.input-date-mount').value;
  const inputDataYear = document.querySelector('.input-date-year').value;
  const inputCvc = document.querySelector('.input-cvc').value;
  const inputPostalCode = document.querySelector('.input-postal-code').value;

// Проверяем, есть ли пустые поля
  if (inputsBuyCard.trim() !== '' && inputDataMount.trim() !== '' && inputDataYear.trim() !== '' && inputCvc.trim() !== '' && cardholderName.trim() !== '' && inputPostalCode.trim() !== '' && cityTown.trim() !== '') {
    // Проверяем, нет ли ошибок введенных данных
    if (!document.querySelector('.digits-card-error.show-error') && !document.querySelector('.date-error-mount.show-error') && !document.querySelector('.date-error-year.show-error') && !document.querySelector('.cvc-error.show-error') && !document.querySelector('.postal-code-error.show-error')) {
      localStorage.setItem('userLibraryCard', true);
      //  Перенаправляем на другую страницу или делаем другую логику
      location.reload();
    }
  }
});




// //модалки на покупке книг 
// const ofBuyBook = document.querySelectorAll(".btn-byu-book")
// //покупка карты
// if (localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') === 'true' && localStorage.getItem('userLibraryCard') === 'false' ){
//   loginByuBook?.forEach(button => {
//     button.addEventListener("click", () =>{
//       modalLibCard?.classList.toggle("menu-active");
//     })
//   }) 
//   //покупка книг
//  } else if(localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') === 'true'&& localStorage.getItem('userLibraryCard') === 'true'){
//   ofBuyBook.forEach(function(event) {
//   event.addEventListener("click", function(e) {
//     event.innerHTML = `<div class="btn-byu-book"> <button class="buy-book-off">Own</button></div>` 
//     let userBooksOwn = localStorage.getItem('userBooks');
//     userBooksOwn++
//     localStorage.setItem('userBooks', userBooksOwn);   
//   });
// });
// //модалка логина
//  } else{
  
//      loginByuBook?.forEach(button => {
//      button.addEventListener("click", () =>{
//        menulogin?.classList.toggle("menu-active");
//      })
//    })
//   }
 











// // модалки на покупке книг 
// const ofBuyBook = document.querySelectorAll(".btn-byu-book")
// //покупка карты
// if (localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') === 'true' && localStorage.getItem('userLibraryCard') === 'false' ){
//   loginByuBook?.forEach(button => {
//     button.addEventListener("click", () =>{
//       modalLibCard?.classList.toggle("menu-active");
//     })
//   }) 
//   //покупка книг
//  } else if(localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') === 'true'&& localStorage.getItem('userLibraryCard') === 'true'){
//   const selectedButtons = [];

//   ofBuyBook.forEach(function(event) {
//     event.addEventListener("click", function(e) {
//       // Проверяем, есть ли уже такой идентификатор в массиве
//       if (!selectedButtons.includes(event.id)) {
//         // Добавляем идентификатор кнопки в массив
//         selectedButtons.push(event.id);
  
//         // Продолжаем остальные действия
//         event.innerHTML = '<div class="btn-byu-book"> <button class="buy-book-off">Own</button></div>';
  
//         let userBooksOwn = localStorage.getItem('userBooks');
//         userBooksOwn++
//         localStorage.setItem('userBooks', userBooksOwn);
//         localStorage.setItem("selected_buttons", JSON.stringify(selectedButtons));
//       }
//     });
//   });
  
// //модалка логина
//  } else{
  
//      loginByuBook?.forEach(button => {
//      button.addEventListener("click", () =>{
//        menulogin?.classList.toggle("menu-active");
//      })
//    })
//   }
 



 //сохранения состояния кнопки
// Получаем сохраненные кнопки из localStorage
let selectedButtons = JSON.parse(localStorage.getItem("selected_buttons")) || [];
ofBuyBook.forEach(function(event) {

  // Проверяем, выбрана ли кнопка
  const isButtonSelected = selectedButtons.includes(event.id);

if (isButtonSelected) { // Если кнопка была выбрана
    event.innerHTML = '<div class="btn-byu-book"> <button class="buy-book-off" disabled>Own</button></div>';
  }
event.addEventListener("click", function(e) {
    if (isButtonSelected) { // Если кнопка уже была выбрана, то удаляем ее из массива
     
    } else if (localStorage.getItem('userRegistered') === 'true' && localStorage.getItem('userAuthorized') === 'true'&& localStorage.getItem('userLibraryCard') === 'true') {
      // Добавляем идентификатор кнопки в массив
      selectedButtons.push(event.id);
      // Изменяем внешний вид кнопки при выборе
      event.innerHTML = '<div class="btn-byu-book"> <button class="buy-book-off" disabled>Own</button></div>';
    }
    // Сохраняем массив выбранных кнопок в localStorage
    localStorage.setItem("selected_buttons", JSON.stringify(selectedButtons));
  });
});



//  ofBuyBook.forEach(function(event) {
//   event.addEventListener("click", function(e) {
//     event.innerHTML = `<div class="btn-byu-book"> <button class="buy-book-off">Own</button></div>` 
    // let userBooksOwn = localStorage.getItem('userBooks');
    // userBooksOwn++
    // localStorage.setItem('userBooks', userBooksOwn);   
//   });
// });

