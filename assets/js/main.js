/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/* Search show */
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/* Search hidden */
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}


/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

/* Login show */
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/* Login hidden */
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints:{
        1220: {
            spaceBetween: -32,
        }
    }
  });

/*=============== FEATURED SWIPER ===============*/
let swiperFetured = new Swiper('.featured_swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints:{
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
  });

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new_swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    breakpoints:{
        1150: {
            slidesPerView: 3,

        }
    }
  });

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial_swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints:{
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
  });

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset true, // Animations repeat
})

sr.reveal(`.home_data, .featured_container, .new_container,
           .join_data, .testimonial_container, .footer`)
sr.reveal(`.home_images`, {delay: 600})
sr.reveal(`.services_card`, {interval: 100})
sr.reveal(`.discount_data`, {origin: 'left'})
sr.reveal(`.discount_images`, {origin: 'right'})

/*=============== FUNCTION FOR VALIDATION REGISTER FORM ===============*/

function validateForm(event) {
    event.preventDefault();

    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var birthdate = document.getElementById("birthdate").value;
    var age = calculateAge(birthdate);
    var streetAddress = document.getElementById("streetAddress").value;
    var mailingAddress = document.getElementById("mailingAddress").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var region = document.getElementById("region").value;
    var postalCode = document.getElementById("postalCode").value;

    if (fullName.length < 3) {
        alert("Пълното име трябва да бъде поне 3 символа.");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Невалиден имейл адрес.");
        return;
    }

    if (!validatePassword(password)) {
        alert("Паролата трябва да съдържа поне една малка буква, една главна буква и един символ, и да е поне 8 символа дълга.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Паролите не съвпадат.");
        return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
        alert("Невалиден телефонен номер.");
        return;
    }
    if (age < 18) {
        alert("Трябва да сте пълнолетен, за да се регистрирате.");
        return;
    }
    if (streetAddress.length === 0) {
        alert("Моля, въведете адрес.");
        return;
    }

    if (mailingAddress.length === 0) {
        alert("Моля, въведете пощенски адрес.");
        return;
    }

    if (city.length === 0) {
        alert("Моля, въведете град.");
        return;
    }

    if (country === "Изберете държава") {
        alert("Моля, изберете държава.");
        return;
    }

    if (region.length === 0) {
        alert("Моля, въведете регион.");
        return;
    }

    if (postalCode.length === 0 || isNaN(postalCode)) {
        alert("Моля, въведете валиден пощенски код.");
        return;
    }

    alert("Регистрацията е успешна!");

    clearFields();
}

function validatePassword(password) {
    
    if (password.length < 8) {
        return false;
    }

   
    var hasLowercase = /[a-z]/.test(password);
    var hasUppercase = /[A-Z]/.test(password);
    var hasSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    return hasLowercase && hasUppercase && hasSymbol;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

/*=============== FUNCTION FOR CALCULATING AGE ===============*/
function calculateAge(birthdate) {
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();

    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

/*=============== FUNCTION FOR CLEAR REGISTRATION FIELDS ===============*/
function clearFields() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("streetAddress").value = "";
    document.getElementById("mailingAddress").value = "";
    document.getElementById("city").value = "";
    document.getElementById("country").value = "Изберете държава";
    document.getElementById("region").value = "";
    document.getElementById("postalCode").value = "";
   
}

/*=============== FUNCTION FOR VALIDATION PAYMENT FORM ===============*/
function validatePayment(event) {
    event.preventDefault();

    var name = document.getElementById("name").value
    var cardNumber = document.getElementById("card_number").value;
    var cardType = document.getElementById("card_type").value;
    var expDate = document.getElementById("exp_date").value;
    var cvv = document.getElementById("cvv").value;

    if (name === 0){
        alert("Моля въведете име");
        return;
    }

    if (!isValidCardNumber(cardNumber)) {
        alert("Невалиден номер на карта.");
        return;
    }

    if (cardType === "Изберете тип карта") {
        alert("Моля, изберете типа карта.");
        return;
    }

    var today = new Date();
    var expirationDate = new Date(expDate);
    if (expirationDate < today) {
        alert("Картата вече е изтекла.");
        return;
    }

    if (!isValidCVV(cvv)) {
        alert("Невалиден CVV код.");
        return;
    }

    alert("Поръчката е успешно завършена!");

    clearPayment();

    updateDateTime();
}

function isValidCardNumber(cardNumber) {
    return cardNumber.length === 16;
}

function isValidCVV(cvv) {
    return cvv.length === 3;
}

/*=============== FUNCTION FOR CLEAR PAYMENT FIELDS ===============*/
function clearPayment() {
    document.getElementById("name").value = "";
    document.getElementById("card_number").value = "";
    document.getElementById("card_type").value = "Изберете тип карта";
    document.getElementById("exp_date").value = "";
    document.getElementById("cvv").value = "";
}





