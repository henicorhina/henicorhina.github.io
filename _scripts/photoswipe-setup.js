---
permalink: /assets/js/photoswipe-setup.js
---
import PhotoSwipeLightbox from "{{ site.third_party_libraries.photoswipe-lightbox.url.js }}";
import PhotoSwipe from "{{ site.third_party_libraries.photoswipe.url.js }}";

const lightbox = new PhotoSwipeLightbox({
  gallery: ".pswp-gallery",
  children: "a",
  pswpModule: PhotoSwipe,
});

lightbox.on('uiRegister', function() {
  lightbox.pswp.ui.registerElement({
    name: 'caption',
    order: 9,
    isButton: false,
    appendTo: 'wrapper',
    html: '',
    onInit: (el, pswp) => {
      lightbox.pswp.on('change', () => {
        const currSlideElement = lightbox.pswp.currSlide.data.element;
        let captionHTML = '';
        if (currSlideElement) {
          captionHTML = currSlideElement.querySelector('img').getAttribute('alt') || '';
          const dataCap = currSlideElement.getAttribute('data-pswp-caption');
          if (dataCap) captionHTML = dataCap;
        }
        el.innerHTML = captionHTML;
      });
    }
  });
});

lightbox.init();

