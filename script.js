/************************************************************************************* *
                                      navbar
***************************************************************************************/

var menuBtn = document.querySelector(".menuBtn");
var closeBtn = document.querySelector(".fa-times");
var navUl = document.querySelector(".navUl");
var leftBar = document.querySelector(".left-bar");

menuBtn.addEventListener("click", toggleNav);

function toggleNav() {
  navUl.classList.toggle("show");
  leftBar.classList.toggle("show");
}

closeBtn.addEventListener("click", toggleNav);

// Handle dropdown click in mobile view
var dropdownItems = document.querySelectorAll(".navItem");
dropdownItems.forEach(function(item) {
  item.addEventListener("click", function(event) {
    if (window.innerWidth <= 768) {
      var dropdown = this.querySelector(".dropdown");
      if (dropdown) {
        event.stopPropagation();
        dropdown.classList.toggle("show");
      }
    }
  });
});

// Close the dropdown when clicking anywhere outside
document.addEventListener("click", function(event) {
  if (!navUl.contains(event.target) && !menuBtn.contains(event.target)) {
    navUl.classList.remove("show");
    leftBar.classList.remove("show");
  }
});




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
}, 3000); // Change slide every 3 seconds


/************************************************************************************* *
                                      services
***************************************************************************************/
// Add animation on hover
const services = document.querySelectorAll('.service');

services.forEach(service => {
  service.addEventListener('mouseover', () => {
    service.style.transition = 'transform 0.3s ease';
    service.style.transform = 'scale(1.1)';
  });

  service.addEventListener('mouseout', () => {
    service.style.transition = 'transform 0.3s ease';
    service.style.transform = 'scale(1)';
  });
});





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
