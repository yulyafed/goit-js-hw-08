import SimpleLightbox from "./simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');

const itemMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);

function createGalleryItemMarkup(item) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
                         <img class="gallery__image" src="${preview}" alt="" title="${description}" />
                    </a>`;
        })
        .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250
});