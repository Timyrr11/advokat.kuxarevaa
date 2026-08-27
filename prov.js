
$('.carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  prevArrow: '<img src="Arrow_left.svg">',
  nextArrow: '<img src="Arrow_right.svg">',              
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

let burger = document.querySelector('.burger_menu')
let nav = document.querySelector('.menu')
burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active') 
})




