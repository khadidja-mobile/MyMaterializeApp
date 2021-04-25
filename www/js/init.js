  $(document).ready(function(){

    $('.sidenav').sidenav();

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.button-collapse').sideNav();
 
    var today = new Date();
    today = today.getDate() + "/" + (today.getMonth() + 1 ) + "/" + today.getFullYear();
    $("#date").text(today);

  }); // end of document ready
 
  $('.head-link').click(function (e) {
    e.preventDefault();

    var goto = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(goto).offset().top
    }, 800);
  });



