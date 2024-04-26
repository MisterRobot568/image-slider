import ImageManager from './image-manager';

const imageManager = new ImageManager('images');
// imageManager.method1();
imageManager.goToImage();
imageManager.createNavCircles();

// event listeners
const scrollBackBtn = document.querySelector('#scroll-back-btn');
const scrollForwardBtn = document.querySelector('#scroll-forward-btn');

scrollBackBtn.addEventListener('click', () => {
    imageManager.scrollBackImage();
});
scrollForwardBtn.addEventListener('click', () => {
    imageManager.scrollForwardImage();
});
