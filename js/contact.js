// Déclaration des variables utilisateurs
const userFirstName = document.getElementById('userFirstName');
const userLastName = document.getElementById('userLastName');
const userTelephone = document.getElementById('userTelephone');
const userEmail = document.getElementById('userEmail');

//Déclaration des erreurs syntaxes

const errorFirstName = document.getElementById('errorFirstName');
const errorLastName = document.getElementById('errorLastName');
const errorPhone = document.getElementById('errorPhone');
const errorMail = document.getElementById('errorMail');

// Déclaration des patterns
const regexName = /^[a-zA-ZéèîïÉÈÎÏ][-'\s]?[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
const regexMail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

// Récupération de la valeur du bouton submit
const submitValidity = document.querySelector('.btn-form');
let formValidity = true;

// Ecoute de l'action "click" sur le bouton Envoyer

submitValidity.addEventListener('click', validity);

// Gestion des erreurs
function validity(event) {
  
  if ( userFirstName.value == "" || regexName.exec(userFirstName.value, 'gm') == null) {
    formValidity = false;
    errorFirstName.style.display = 'block';
    userFirstName.classList.add("border-error");
    userFirstName.focus();

  } else {
      errorFirstName.style.display = "none";
      userFirstName.classList.remove("border-error");
  }

  if (userLastName.value == "" || regexName.exec(userLastName.value) == null) {
    formValidity = false;
    errorLastName.style.display = 'block';
    userLastName.classList.add("border-error");
    userLastName.focus();
  } else {
    errorLastName.style.display = "none";
    userLastName.classList.remove("border-error");
}

  if (userTelephone.value.length < 10 || isNaN(userTelephone.value)) {
    formValidity = false;
    errorPhone.style.display = 'block';
    userTelephone.focus();
  } else {
    errorPhone.style.display = "none";
}
  
  if (userEmail.value == "" || regexMail.exec(userEmail.value) == null) {
    formValidity = false;
    errorMail.style.display = 'block';
    userEmail.focus();
  } else {
    errorMail.style.display = "none";
}
  
  if(!formValidity){
    event.preventDefault();
  }



  // Vérification de la validité du formulaire

  
}
