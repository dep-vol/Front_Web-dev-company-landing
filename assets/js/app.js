"use strict";

var btn = document.querySelectorAll(".btn--service");
btn.forEach(function (btn) {
  btn.addEventListener('mouseover', function () {
    btn.parentNode.classList.add('active');
  });
  btn.addEventListener('mouseleave', function () {
    btn.parentNode.classList.remove('active');
  });
}); //BURGER

document.querySelector('.header__menu').addEventListener('click', function () {
  document.querySelector('.header__nav').classList.toggle('header__nav--active_menu');
}); //

$(document).ready(function () {
  $('.team__slick').slick({
    arrows: false,
    slidesToShow: 1,
    dots: true,
    infinite: true
  });
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 400, 'swing');
  });
});