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

  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-60673008-2', 'auto');
  ga('send', 'pageview');


