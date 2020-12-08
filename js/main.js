$('.header__toggler').on('click',function(){
    $('.header__nav').toggleClass('hide_nav');
});

$('#event').on('click',function(){
    $('.event_card').toggleClass('show_event');
});

// $('document').on('click',function(){
    
//     $('.event_card').removeClass('show_event');
// });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {direction: 'left'});
    
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.header__toggler').floatingActionButton();
  });

  $('.tabs').tabs();