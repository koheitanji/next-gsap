import $ from 'jquery';

export const hamburger = () => {
  $('.hamburger').toggleClass('active');
  if ($('.hamburger').hasClass('active')) {
    $('#navi').addClass('active');
  } else {
    $('#navi').removeClass('active');
  }
};