import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>`;
  })
  .join(``);

gallery.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
