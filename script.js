// jQuery

$(document).ready(function() {

    // responsive menu
    $('#menu').click(function() {
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    // remove header on scroll
    $(window).on('scroll load', function() {
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
    });

})


// footer - get current year

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
