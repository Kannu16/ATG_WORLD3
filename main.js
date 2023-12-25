import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const circleElements = Array.from({ length: 7 }, (_, index) => document.getElementById(`circle${index + 1}`));
const opaqueRing = document.getElementById("Opaque_Ring");
const rightDiv = document.querySelector(".section-right");
const numContent = document.getElementById("num-content");
const worldCOm = document.getElementById("world-comm")

const updateDashArray = () => {
  const scrollPosition = rightDiv.scrollTop;
  const windowHeight = rightDiv.clientHeight;
  const scrollPercentage = (scrollPosition / windowHeight) * 37;
  const dashArrayValue = (scrollPercentage / 100) * 360;

  opaqueRing.style.strokeDasharray = `${dashArrayValue}, 1000`;

  for (let i = 0; i < circleElements.length; i++) {
    const circle = circleElements[i];
    const startRange = i * 132;
    const endRange = (i + 1) * 132;

    circle.style.display = dashArrayValue >= startRange && dashArrayValue < endRange ? "block" : "none";
  }
  if(dashArrayValue > 132 * 1){
    numContent.innerText = "345";
    if(dashArrayValue > 132 * 2){
      numContent.innerText = "234";
      if(dashArrayValue > 132 * 3){
        numContent.innerText = "123";
        worldCOm.style.display = "block";
        if(dashArrayValue > 132 * 4){
          numContent.innerText = "567";
          worldCOm.style.display = "none"
          if(dashArrayValue > 132 * 5){
            numContent.innerText = "678";
            if(dashArrayValue > 132 * 6){
              numContent.innerText = "23478";
              worldCOm.style.display = "block"
            }
            else{
              worldCOm.style.display = "none"
            }
          }
        }
      }
      else{
        worldCOm.style.display = "none"
      }
    }
  }
  else{
    numContent.innerText = "456";
  }
}
rightDiv.addEventListener("scroll", updateDashArray);


// javascript for owl caraousal
jQuery("#carousel").owlCarousel({
  autoplay: false,
  rewind: true, /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    750: {
      items: 1
    }
  }
});