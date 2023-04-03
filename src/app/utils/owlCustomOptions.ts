import { OwlOptions } from 'ngx-owl-carousel-o';

export const owlCustomOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  navSpeed: 700,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  lazyLoad: true,
  lazyLoadEager: 1,
  fluidSpeed: true,
  autoWidth: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    740: {
      items: 3,
    },
    940: {
      items: 4,
    },
  },
};
