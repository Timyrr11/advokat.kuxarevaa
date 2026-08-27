let burger = document.querySelector('.burger_menu')
let nav = document.querySelector('.menu')
burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active') 
})
