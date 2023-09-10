document.addEventListener("DOMContentLoaded", function() {
    initBurgerMenu();

});

function initBurgerMenu() {
    const burgerBtn = document.getElementById("burger-btn");
    const burgerCon = document.getElementById("burger-con");

    burgerBtn.addEventListener("click", function() {
        if (burgerCon.style.display === "block") {
            burgerCon.style.display = "none";
        } else {
            burgerCon.style.display = "block";
            burgerCon.classList.add("slide-toggle");
        }
        burgerBtn.classList.toggle("open");
    });
}

const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
let carouselChildrens = [...carousel.children];

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

carousel.addEventListener("wheel", (e) => {
    if(e.deltaY > 0) {
        carousel.scrollLeft += firstCardWidth;
    } else {
        carousel.scrollLeft -= firstCardWidth;
    }
    infiniteScroll();
});

function infiniteScroll() {
    if(carousel.scrollLeft === 0) {
        carousel.scrollLeft = carousel.offsetWidth;
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
    }
}


function scrollCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const cardWidth = carousel.querySelector('.card').offsetWidth;
  const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
  carousel.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

//scroll script
document.addEventListener("DOMContentLoaded", function() {
    const portfolioLink = document.querySelector("#main-nav ul li:nth-child(2) a"); 
    const portfolioSection = document.querySelector("#portfolio-section"); 

    portfolioLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        portfolioSection.scrollIntoView({behavior: "smooth"}); 
    });
});

