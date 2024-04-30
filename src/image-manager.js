import getElementIDs from './functions';

class ImageManager {
    constructor(elementClass) {
        this.imageIDArr = getElementIDs(elementClass);

        const [firstElement] = this.imageIDArr;
        this.currentImageID = firstElement;

        this.navCircleIDs = []; // maybe we'll use this
        this.currentNavID = `${firstElement}circlebtn`;

        this.autoScroll();
    }

    showImage() {
        const image = document.querySelector(`#${this.currentImageID}`);
        image.style.display = 'block';
    }

    hideImages() {
        this.imageIDArr.forEach((elementID) => {
            const image = document.querySelector(`#${elementID}`);
            image.style.display = 'none';
        });
    }

    goToImage() {
        this.hideImages();
        this.showImage();
    }

    // scrolls to prev or next imageID in the array(forward/back buttons)
    scrollBackImage() {
        const currentIndex = this.imageIDArr.indexOf(this.currentImageID);
        let newIndex;
        if (currentIndex - 1 < 0) {
            newIndex = this.imageIDArr.length - 1;
        } else {
            newIndex = currentIndex - 1;
        }
        this.currentImageID = this.imageIDArr[newIndex];
        this.clearAndHighlightNavBtn();
        this.goToImage();
    }

    // method to scroll forward to the next image (back/forward buttons)
    scrollForwardImage() {
        const currentIndex = this.imageIDArr.indexOf(this.currentImageID);
        let newIndex;
        if (currentIndex + 1 > this.imageIDArr.length - 1) {
            newIndex = 0;
        } else {
            newIndex = currentIndex + 1;
        }
        this.currentImageID = this.imageIDArr[newIndex];
        this.clearAndHighlightNavBtn();

        this.goToImage();
    }

    createNavCircles() {
        const circleDiv = document.querySelector('.dot-box');
        this.imageIDArr.forEach((element) => {
            const circleButton = document.createElement('button');
            circleButton.setAttribute('class', 'circle-buttons');
            circleButton.setAttribute('id', `${element}circlebtn`);
            circleButton.setAttribute('type', 'button');

            circleButton.addEventListener('click', () => {
                this.jumpToImage(element);
                console.log('circle clicked');

                this.currentNavID = `${element}circlebtn`; // the issue might be in this event listener
                this.clearNavCircles();
                this.highlightNavCircle();
            });

            circleDiv.appendChild(circleButton);
            this.navCircleIDs.push(`${element}circlebtn`);

            this.clearAndHighlightNavBtn();
        });
    }

    // jumps to specified image based on ID (clicking specific circle)
    jumpToImage(imageID) {
        this.hideImages();
        this.currentImageID = imageID;
        this.currentNavID = `${imageID}circlebtn`;
        const image = document.querySelector(`#${imageID}`);
        image.style.display = 'block';
    }

    // build a function that highlights specific nav circle based on ID
    highlightNavCircle() {
        const button = document.querySelector(`#${this.currentNavID}`);
        button.classList.add('active');
    }

    clearNavCircles() {
        this.navCircleIDs.forEach((ID) => {
            const button = document.querySelector(`#${ID}`);
            button.classList.remove('active');
        });
    }

    clearAndHighlightNavBtn() {
        this.currentNavID = `${this.currentImageID}circlebtn`;
        console.log(this.currentNavID);
        this.clearNavCircles();
        this.highlightNavCircle();
    }

    autoScroll() {
        const currentSlide = this.currentImageID;
        console.log(currentSlide);

        setTimeout(() => {
            if (currentSlide === this.currentImageID) {
                this.scrollForwardImage();
            }
            this.autoScroll();
        }, 5000);
    }
}

export default ImageManager;
