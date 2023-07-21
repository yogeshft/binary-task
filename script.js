var hamburger = document.getElementsByClassName("hidden")[0];
var navUl = document.getElementsByClassName("navUl")[0];
var leftBar = document.getElementsByClassName("left-bar")[0];

hamburger.addEventListener("click", buttonClick);

function buttonClick() {
  if (navUl.style.left === "0px" && leftBar.style.left === "0px") {
    // If the elements are already visible, hide them
    navUl.style.left = "-1000px";
    leftBar.style.left = "-1000px";
  } else {
    // If the elements are hidden, show them
    navUl.style.left = "0px";
    leftBar.style.left = "0px";
  }
}

// slider less go
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName("panel");

for (var i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    var setClasses = !this.classList.contains("active");
    setClass(acc, "active", "remove");
    setClass(panel, "show", "remove");

    if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
  };
}

function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}
