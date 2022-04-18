$('.count').each(function () {
  $(this)
    .prop('Counter', 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
          $(this).text(now);
        },
      }
    );
});

$('.dropdown').hover(
  function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(500);
  },
  function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(500);
  }
);
