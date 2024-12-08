//DROP DOWN MENU >>> !this is not my code
var menu = document.querySelector("#menu");
var nav = document.querySelector(".links");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("active");
}


//TO TOP BUTTON >>> !this is not my code, I got it from W3Schools
// Get the button:
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
