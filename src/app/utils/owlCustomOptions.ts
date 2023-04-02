import { OwlOptions } from 'ngx-owl-carousel-o';

export const owlCustomOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    740: {
      items: 3,
    },
    940: {
      items: 4,
    },
  },
  nav: true,
};
