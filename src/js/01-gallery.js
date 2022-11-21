import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
const imageContainer = document.querySelector(".gallery");

const imageMarkup = createGalleryCardsMarkup(galleryItems);  

imageContainer.insertAdjacentHTML("beforeend", imageMarkup) 

function createGalleryCardsMarkup (galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />      
      </a>
    </div>
    `;  
  })
  .join(``);
}