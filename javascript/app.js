$(document).ready(function () {
//HERO SLIDER
  $('#hero-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 1000,
    navText: ['PREV', 'NEXT'],
    responsive: {
      0: {
        nav: false
      },
      768: {
        nav: true
      },
    }
  });

//PROJECT SLIDER
  $('#project-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    navText: ['PREV', 'NEXT'],
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0
      },
      768: {
        items: 2
      },
      1140: {
        items: 3,
        center: true,
        margin: 20
      }
    }
  });

  //REVIEW 
   $('#review-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    items: 1
  });
});

/*const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
}); */