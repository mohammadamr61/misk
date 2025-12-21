document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".js-navbar");
  const toggler = navbar.querySelector(".navbar-toggler");
  const collapse = navbar.querySelector(".navbar-collapse");
  const iconWrapper = navbar.querySelector(".js-icon");

  // Burger SVG (your original)
  const burgerSVG = `
    <svg width="164" height="59" viewBox="0 0 332 118" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0C23.833 68.6866 89.1535 118 166 118C242.846 118 308.167 68.6866 332 0H0Z" fill="#C2D500"/>
      <rect x="136" y="44.75" width="60" height="4.5" fill="#00372A"/>
      <rect x="136" y="56.75" width="60" height="4.5" fill="#00372A"/>
      <rect x="136" y="68.75" width="60" height="4.5" fill="#00372A"/>
    </svg>
  `;

  // X SVG
  const closeSVG = `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.88916 0.88916L30.8892 30.8891M0.88916 31.0665L30.8892 1.06654" stroke="#C2D500" stroke-width="2.51477"/>
</svg>

  `;

  const openMenu = () => {
    navbar.classList.add("bg-primary", "px-3", "pt-3", "pb-4");
    iconWrapper.innerHTML = closeSVG;
  };

  const closeMenu = () => {
    navbar.classList.remove("bg-primary", "px-3", "pt-3", "pb-4");
    iconWrapper.innerHTML = burgerSVG;
  };


  toggler.addEventListener("click", () => {
    const isOpen = collapse.classList.contains("show");
    isOpen ? closeMenu() : openMenu();
  });

  collapse.addEventListener("hidden.bs.collapse", closeMenu);
});

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

