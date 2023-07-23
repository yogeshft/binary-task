/************************************************************************************* *
                                      navbar
***************************************************************************************/

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

/************************************************************************************* *
                                      slider
***************************************************************************************/

let slideIndex = 1;
showSlide(slideIndex);

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const bullets = document.getElementsByClassName("bullet");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  slides[slideIndex - 1].style.opacity = 1;

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].classList.remove("active");
  }

  bullets[slideIndex - 1].classList.add("active");
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function plusSlides(n) {
  showSlide(slideIndex += n);
}

setInterval(() => {
  plusSlides(1);
}, 6000); // Change slide every 5 seconds


/************************************************************************************* *
                                      expand and collapse
***************************************************************************************/

document.addEventListener("DOMContentLoaded", function(event) { 


  var acc = document.getElementsByClassName("accordion");
  var panel = document.getElementsByClassName('panel');
  
  for (var i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
          var setClasses = !this.classList.contains('active');
          setClass(acc, 'active', 'remove');
          setClass(panel, 'show', 'remove');
  
          if (setClasses) {
              this.classList.toggle("active");
              this.nextElementSibling.classList.toggle("show");
          }
      }
  }
  
  function setClass(els, className, fnName) {
      for (var i = 0; i < els.length; i++) {
          els[i].classList[fnName](className);
      }
  }
  
  });


/* **********************************************************************************
                                    footer
***********************************************************************************/

function toggleFooterLinks(headerElement) {
  const linksList = headerElement.nextElementSibling.querySelector('.categoryList');
  const windowWidth = window.innerWidth;

  if (windowWidth <= 768) {
    linksList.classList.toggle('show-links');
  }
}

// Attach click event listeners to each header element
const footerHeadings = document.querySelectorAll('.footerHeading');
footerHeadings.forEach((heading) => {
  heading.addEventListener('click', () => {
    toggleFooterLinks(heading);
  });
});

// Event listener to close the footer links when the window size is changed
window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;
  const linksLists = document.querySelectorAll('.categoryList');

  if (windowWidth > 768) {
    linksLists.forEach((linksList) => {
      linksList.classList.remove('show-links');
    });
  }
});
