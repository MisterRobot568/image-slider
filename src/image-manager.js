import getElementIDs from './functions';

class ImageManager {
    constructor(elementClass) {
        this.imageIDArr = getElementIDs(elementClass);

        const [firstElement] = this.imageIDArr;
        this.currentImageID = firstElement;
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
        this.goToImage();
    }

    scrollForwardImage() {
        const currentIndex = this.imageIDArr.indexOf(this.currentImageID);
        let newIndex;
        if (currentIndex + 1 > this.imageIDArr.length - 1) {
            newIndex = 0;
        } else {
            newIndex = currentIndex + 1;
        }
        this.currentImageID = this.imageIDArr[newIndex];
        this.goToImage();
    }

    createNavCircles() {
        const circleDiv = document.querySelector('.dot-box');
        this.imageIDArr.forEach((element) => {
            const circleButton = document.createElement('button');
            circleButton.setAttribute('class', 'circle-buttons');
            circleButton.setAttribute('id', `${element}circlebtn`);
            circleButton.setAttribute('type', 'button');

            // circleButton.textContent = 'testing';

            circleDiv.appendChild(circleButton);
        });
    }

    // jumps to specified image based on ID (clicking specific circle)
    jumpToImage() {}
}

export default ImageManager;
