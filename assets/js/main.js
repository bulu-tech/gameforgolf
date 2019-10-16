$(() => {
  $(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 80 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
    windowTop > 160 ? $('.sidenav-trigger').addClass('show') : $('.sidenav-trigger').removeClass('show')
  });

  $('a[href*="#"]').on('click', function (e) {
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 80
    }, 500);
    e.preventDefault();
  });

  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
});
