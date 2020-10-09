const box1 = document.querySelector('#article1');

const box2 = document.querySelector('#article2');

const box3 = document.querySelector('#article3');

const box4 = document.querySelector('#article4');

const goRight = document.querySelector('.buttonRight');

const goLeft = document.querySelector('.buttonLeft');

box1.classList.add("backBox");

box2.classList.add("backBox");

box3.classList.add("backBox");

box4.classList.add("backBox");

box1.classList.toggle("backBox")

let activeBox = 1

goLeft.addEventListener('click', () => {
    if (activeBox === 1){
      activeBox = 4;
  }
  else {
      activeBox = activeBox - 1
       }
  switch (activeBox) {
  case 1:
      box2.classList.toggle("backBox");
      box1.classList.toggle("backBox");
      break;
  case 2:
      box3.classList.toggle("backBox");
      box2.classList.toggle("backBox");
      break;
  case 3:
      box4.classList.toggle("backBox");
      box3.classList.toggle("backBox");
      break;
  case 4:
        box1.classList.toggle("backBox");
        box4.classList.toggle("backBox");
      break;
  default:
      alert("Error");        
}
});

goRight.addEventListener('click', () => {
      if (activeBox === 4){
        activeBox = 1;
    }
    else {
        activeBox = activeBox + 1
         }
    switch (activeBox) {
    case 1:
        box4.classList.toggle("backBox");
        box1.classList.toggle("backBox");
        break;
    case 2:
        box1.classList.toggle("backBox");
        box2.classList.toggle("backBox");
        break;
    case 3:
        box2.classList.toggle("backBox");
        box3.classList.toggle("backBox");
        break;
    case 4:
        box3.classList.toggle("backBox");
        box4.classList.toggle("backBox");
        break;
    default:
        alert("Error");        
    }
    

})




