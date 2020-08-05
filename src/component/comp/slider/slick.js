$(document).ready(function () {
    $('.right').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.left'
    });

    $('.left').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.right',
        dots: false,
        focusOnSelect: true,
        arrows: true,
    });
  });