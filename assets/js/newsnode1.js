$('.news-slider').slick({
  centerMode: true,
  slidesToShow: 1,
  arrows: false,
  dots: false,
  infinite: true,
  centerPadding: '25vw',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        centerPadding: '40px'
      }
    }
  ]
});

$('.news-prev').on('click', () => $('.news-slider').slick('slickPrev'));
$('.news-next').on('click', () => $('.news-slider').slick('slickNext'));

