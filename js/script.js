$(document).ready(
  function() {

    $('.withDropdown').on('mouseenter',
      function() {
        $('.dropdown').removeClass('hidden');
      }
    );

    $('.withDropdown').on('mouseleave',
      function() {
        $('.dropdown').addClass('hidden');
      }
    );

    $('.burgerWrapperIcons i').on('click',
      function() {
        if (!$(this).hasClass('hidden')) {
          $('.burgerWrapperMenu').removeClass('hidden');
          $('.openBurgerMenu').hide();
          $('.closeBurgerMenu').show();
        } else {
            $('.burgerWrapperMenu').addClass('hidden');
            $('.openBurgerMenu').show();
            $('.closeBurgerMenu').hide();
        }
      }
    );

  }
);
