const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const images = [
  {
    src: 'https://picsum.photos/id/1018/600/400',
    alt: 'Path Through The Cliffside'
  },
  {
    src: 'https://picsum.photos/id/1015/600/400',
    alt: 'Towering Moutains With Lake In Centre'
  },
  {
    src: 'https://picsum.photos/id/1020/600/400',
    alt: 'Bear on the Mountain'
  },
  {
    src: 'https://picsum.photos/id/1022/600/400',
    alt: 'Mist Over Forest'
  },
  {
    src: 'https://picsum.photos/id/1024/600/400',
    alt: 'A Flying Eagle'
  },
  {
    src: 'https://picsum.photos/id/1033/600/400',
    alt: 'Empty Station'
  },
  {
    src: 'https://picsum.photos/id/1040/600/400',
    alt: 'Castle Between Green Fields'
  },
  {
    src: 'https://picsum.photos/id/1050/600/400',
    alt: 'Ocean thorugh the cliff'
  }
];

let currentIndex = 0;
function createGallery() {
  images.forEach((image, index) => {
    const imgDiv = document.createElement('div');
    imgDiv.className = 'gallery-item';
    imgDiv.innerHTML = `<img src="${image.src}" alt="${image.alt}" class="gallery-img">`;
    imgDiv.addEventListener('click', () => openLightbox(index));
    galleryGrid.appendChild(imgDiv);
  });
}

function openLightbox(index) {
  currentIndex = index;
  updateLightboxImage();
  lightbox.style.display = 'flex';
}

function updateLightboxImage() {
  lightboxImg.src = images[currentIndex].src;
  lightboxImg.alt = images[currentIndex].alt;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightboxImage();
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightboxImage();
}

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);
document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') showNextImage();
    else if (e.key === 'ArrowLeft') showPrevImage();
    else if (e.key === 'Escape') closeLightbox();
  }
});
window.addEventListener('DOMContentLoaded', createGallery);
