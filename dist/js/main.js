$('.header__toggler').on('click',function(){
    $('.header__nav').toggleClass('hide_nav');
});

$('#event').on('click',function(){
    $('.event_card').toggleClass('show_event');
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky && window.innerWidth>500) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready(function(){
  $('.tooltipped').tooltip();
});

$('.tabs').tabs();

$(document).ready(function(){
  $('.collapsible').collapsible();
  });