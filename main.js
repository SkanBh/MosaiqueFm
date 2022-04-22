const items = document.getElementsByClassName('img')
console.log(items);
const nbSlide = items.length;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");
let count = 0;

function slideSuivant() {
  items[count].classList.remove("active");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
}

function slidePrecedent() {
  items[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  items[count].classList.add("active");
  console.log(count);
}

function openNav(){
    document.getElementById("myNav").style.width="20%";
}

function closeNav(){
    document.getElementById("myNav").style.width="0%";
}

suivant.addEventListener("click", slideSuivant);
precedent.addEventListener("click", slidePrecedent);

jQuery(document).ready(function($) {
    var promoticker = function() {
      var window_width = window.innerWidth;
      var speed = 20 * window_width;
      $('#promo-notifications li:first').animate( {left: '-980px'}, speed, 'linear', function() {
        $(this).detach().appendTo('#promo-notifications ul').css('left', "100%");
        promoticker();
      });
    };
    if ($("#promo-notifications li").length > 1) {
      promoticker();
    }
  });
  