const items = document.querySelectorAll("img");
const nbSlide = items.length;
const suivant = document.querySelector(".nextArrow");
const precedent = document.querySelector(".previousArrow");
let count = 0;
let time = 10000;

function slideSuivante() {
  items[count].classList.remove("active");
  if (count < 4) {
    count++;
  } else {
   count = 2
  }
  items[count].classList.add("active");
  // setTimeout(slideSuivante, time)
}
// window.onload = slideSuivante

suivant.addEventListener("click", slideSuivante);



function slidePrecedente() {
  items[count].classList.remove("active");

  if (count > 2) {
    count--
  } else {
    count = 4;
  }

  items[count].classList.add("active");
}

precedent.addEventListener("click", slidePrecedente);

// Menu Hamburger Toggle //

const btnMenu = document.querySelector('.toggleMenu')
const menuList= document.querySelector('.linkNavigation')

btnMenu.addEventListener('click',function(){

menuList.classList.toggle('linkNavigation')

})