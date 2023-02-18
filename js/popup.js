let loginButton = document.querySelector('.login-button'); 
let loginPopUp = document.querySelector('.login-popup');

loginButton.addEventListener('click', showPopUP)

function showPopUP(evt) {
    console.log(evt);    
    evt.preventDefault(); 

    loginPopUp.classList.toggle('show-popup')
};




    