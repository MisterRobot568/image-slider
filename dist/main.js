/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/circle-manager.js":
/*!*******************************!*\
  !*** ./src/circle-manager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CircleManager {
    constructor(ID) {
        this.circleID = `${ID}circlebtn`;
    }

    createNavCircle() {
        const circleButton = document.createElement('button');
        circleButton.setAttribute('class', 'circle-buttons');
        circleButton.setAttribute('id', `${this.circleID}circlebtn`);
        circleButton.setAttribute('type', 'button');
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircleManager);


/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// this function is used to get all IDs of images based on a shared class name
function getElementIDs(className) {
    const elements = document.querySelectorAll(`.${className}`);

    const elementIDs = [];
    elements.forEach((element) => {
        elementIDs.push(element.id);
    });

    return elementIDs;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getElementIDs);


/***/ }),

/***/ "./src/image-manager.js":
/*!******************************!*\
  !*** ./src/image-manager.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _circle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle-manager */ "./src/circle-manager.js");



class ImageManager {
    constructor(elementClass) {
        this.imageIDArr = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])(elementClass);

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
        // this.currentNavID = `${this.currentImageID}circlebtn`;
        // this.clearNavCircles();
        // this.highlightNavCircle();

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
                // this.clearAndHighlightNavBtn();
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
        // this.clearNavCircles();
        // this.highlightNavCircle();
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageManager);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-manager */ "./src/image-manager.js");


const imageManager = new _image_manager__WEBPACK_IMPORTED_MODULE_0__["default"]('images');
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSwyQkFBMkIsR0FBRztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsY0FBYztBQUN6RDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNiN0I7QUFDQTtBQUNBLG1EQUFtRCxVQUFVOztBQUU3RDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pXO0FBQ0s7O0FBRTdDO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQWE7O0FBRXZDO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDLCtCQUErQixhQUFhOztBQUU1QztBQUNBOztBQUVBO0FBQ0EsaURBQWlELG9CQUFvQjtBQUNyRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQsVUFBVTtBQUMvRDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msb0JBQW9CO0FBQ3REO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxRQUFRLFlBQVk7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLHNDQUFzQyxRQUFROztBQUU5QztBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDLGlEQUFpRCxRQUFRO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0Qsa0JBQWtCO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRCxHQUFHO0FBQ3pEO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsK0JBQStCLG9CQUFvQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7OztVQ3ZJNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQzs7QUFFM0MseUJBQXlCLHNEQUFZO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY2lyY2xlLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbWFnZS1tYW5hZ2VyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENpcmNsZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKElEKSB7XG4gICAgICAgIHRoaXMuY2lyY2xlSUQgPSBgJHtJRH1jaXJjbGVidG5gO1xuICAgIH1cblxuICAgIGNyZWF0ZU5hdkNpcmNsZSgpIHtcbiAgICAgICAgY29uc3QgY2lyY2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNpcmNsZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NpcmNsZS1idXR0b25zJyk7XG4gICAgICAgIGNpcmNsZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5jaXJjbGVJRH1jaXJjbGVidG5gKTtcbiAgICAgICAgY2lyY2xlQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZU1hbmFnZXI7XG4iLCIvLyB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZ2V0IGFsbCBJRHMgb2YgaW1hZ2VzIGJhc2VkIG9uIGEgc2hhcmVkIGNsYXNzIG5hbWVcbmZ1bmN0aW9uIGdldEVsZW1lbnRJRHMoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YCk7XG5cbiAgICBjb25zdCBlbGVtZW50SURzID0gW107XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50SURzLnB1c2goZWxlbWVudC5pZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudElEcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RWxlbWVudElEcztcbiIsImltcG9ydCBnZXRFbGVtZW50SURzIGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCBDaXJjbGVNYW5hZ2VyIGZyb20gJy4vY2lyY2xlLW1hbmFnZXInO1xuXG5jbGFzcyBJbWFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRDbGFzcykge1xuICAgICAgICB0aGlzLmltYWdlSURBcnIgPSBnZXRFbGVtZW50SURzKGVsZW1lbnRDbGFzcyk7XG5cbiAgICAgICAgY29uc3QgW2ZpcnN0RWxlbWVudF0gPSB0aGlzLmltYWdlSURBcnI7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlSUQgPSBmaXJzdEVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5uYXZDaXJjbGVJRHMgPSBbXTsgLy8gbWF5YmUgd2UnbGwgdXNlIHRoaXNcbiAgICAgICAgdGhpcy5jdXJyZW50TmF2SUQgPSBgJHtmaXJzdEVsZW1lbnR9Y2lyY2xlYnRuYDtcblxuICAgICAgICB0aGlzLmF1dG9TY3JvbGwoKTtcbiAgICB9XG5cbiAgICBzaG93SW1hZ2UoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5jdXJyZW50SW1hZ2VJRH1gKTtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgaGlkZUltYWdlcygpIHtcbiAgICAgICAgdGhpcy5pbWFnZUlEQXJyLmZvckVhY2goKGVsZW1lbnRJRCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlbGVtZW50SUR9YCk7XG4gICAgICAgICAgICBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb1RvSW1hZ2UoKSB7XG4gICAgICAgIHRoaXMuaGlkZUltYWdlcygpO1xuICAgICAgICB0aGlzLnNob3dJbWFnZSgpO1xuICAgIH1cblxuICAgIC8vIHNjcm9sbHMgdG8gcHJldiBvciBuZXh0IGltYWdlSUQgaW4gdGhlIGFycmF5KGZvcndhcmQvYmFjayBidXR0b25zKVxuICAgIHNjcm9sbEJhY2tJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5pbWFnZUlEQXJyLmluZGV4T2YodGhpcy5jdXJyZW50SW1hZ2VJRCk7XG4gICAgICAgIGxldCBuZXdJbmRleDtcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCAtIDEgPCAwKSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IHRoaXMuaW1hZ2VJREFyci5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlSUQgPSB0aGlzLmltYWdlSURBcnJbbmV3SW5kZXhdO1xuICAgICAgICB0aGlzLmNsZWFyQW5kSGlnaGxpZ2h0TmF2QnRuKCk7XG4gICAgICAgIHRoaXMuZ29Ub0ltYWdlKCk7XG4gICAgfVxuXG4gICAgLy8gbWV0aG9kIHRvIHNjcm9sbCBmb3J3YXJkIHRvIHRoZSBuZXh0IGltYWdlIChiYWNrL2ZvcndhcmQgYnV0dG9ucylcbiAgICBzY3JvbGxGb3J3YXJkSW1hZ2UoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuaW1hZ2VJREFyci5pbmRleE9mKHRoaXMuY3VycmVudEltYWdlSUQpO1xuICAgICAgICBsZXQgbmV3SW5kZXg7XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggKyAxID4gdGhpcy5pbWFnZUlEQXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIG5ld0luZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0luZGV4ID0gY3VycmVudEluZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZUlEID0gdGhpcy5pbWFnZUlEQXJyW25ld0luZGV4XTtcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TmF2SUQgPSBgJHt0aGlzLmN1cnJlbnRJbWFnZUlEfWNpcmNsZWJ0bmA7XG4gICAgICAgIC8vIHRoaXMuY2xlYXJOYXZDaXJjbGVzKCk7XG4gICAgICAgIC8vIHRoaXMuaGlnaGxpZ2h0TmF2Q2lyY2xlKCk7XG5cbiAgICAgICAgdGhpcy5jbGVhckFuZEhpZ2hsaWdodE5hdkJ0bigpO1xuXG4gICAgICAgIHRoaXMuZ29Ub0ltYWdlKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmF2Q2lyY2xlcygpIHtcbiAgICAgICAgY29uc3QgY2lyY2xlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdC1ib3gnKTtcbiAgICAgICAgdGhpcy5pbWFnZUlEQXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNpcmNsZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2lyY2xlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2lyY2xlLWJ1dHRvbnMnKTtcbiAgICAgICAgICAgIGNpcmNsZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7ZWxlbWVudH1jaXJjbGVidG5gKTtcbiAgICAgICAgICAgIGNpcmNsZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGNpcmNsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBUb0ltYWdlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaXJjbGUgY2xpY2tlZCcpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TmF2SUQgPSBgJHtlbGVtZW50fWNpcmNsZWJ0bmA7IC8vIHRoZSBpc3N1ZSBtaWdodCBiZSBpbiB0aGlzIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhck5hdkNpcmNsZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodE5hdkNpcmNsZSgpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2xlYXJBbmRIaWdobGlnaHROYXZCdG4oKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjaXJjbGVEaXYuYXBwZW5kQ2hpbGQoY2lyY2xlQnV0dG9uKTtcbiAgICAgICAgICAgIHRoaXMubmF2Q2lyY2xlSURzLnB1c2goYCR7ZWxlbWVudH1jaXJjbGVidG5gKTtcblxuICAgICAgICAgICAgdGhpcy5jbGVhckFuZEhpZ2hsaWdodE5hdkJ0bigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBqdW1wcyB0byBzcGVjaWZpZWQgaW1hZ2UgYmFzZWQgb24gSUQgKGNsaWNraW5nIHNwZWNpZmljIGNpcmNsZSlcbiAgICBqdW1wVG9JbWFnZShpbWFnZUlEKSB7XG4gICAgICAgIHRoaXMuaGlkZUltYWdlcygpO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZUlEID0gaW1hZ2VJRDtcbiAgICAgICAgdGhpcy5jdXJyZW50TmF2SUQgPSBgJHtpbWFnZUlEfWNpcmNsZWJ0bmA7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW1hZ2VJRH1gKTtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIC8vIHRoaXMuY2xlYXJOYXZDaXJjbGVzKCk7XG4gICAgICAgIC8vIHRoaXMuaGlnaGxpZ2h0TmF2Q2lyY2xlKCk7XG4gICAgfVxuXG4gICAgLy8gYnVpbGQgYSBmdW5jdGlvbiB0aGF0IGhpZ2hsaWdodHMgc3BlY2lmaWMgbmF2IGNpcmNsZSBiYXNlZCBvbiBJRFxuICAgIGhpZ2hsaWdodE5hdkNpcmNsZSgpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5jdXJyZW50TmF2SUR9YCk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBjbGVhck5hdkNpcmNsZXMoKSB7XG4gICAgICAgIHRoaXMubmF2Q2lyY2xlSURzLmZvckVhY2goKElEKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtJRH1gKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJBbmRIaWdobGlnaHROYXZCdG4oKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE5hdklEID0gYCR7dGhpcy5jdXJyZW50SW1hZ2VJRH1jaXJjbGVidG5gO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnROYXZJRCk7XG4gICAgICAgIHRoaXMuY2xlYXJOYXZDaXJjbGVzKCk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0TmF2Q2lyY2xlKCk7XG4gICAgfVxuXG4gICAgYXV0b1Njcm9sbCgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50SW1hZ2VJRDtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNsaWRlKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xpZGUgPT09IHRoaXMuY3VycmVudEltYWdlSUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEZvcndhcmRJbWFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hdXRvU2Nyb2xsKCk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VNYW5hZ2VyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgSW1hZ2VNYW5hZ2VyIGZyb20gJy4vaW1hZ2UtbWFuYWdlcic7XG5cbmNvbnN0IGltYWdlTWFuYWdlciA9IG5ldyBJbWFnZU1hbmFnZXIoJ2ltYWdlcycpO1xuLy8gaW1hZ2VNYW5hZ2VyLm1ldGhvZDEoKTtcbmltYWdlTWFuYWdlci5nb1RvSW1hZ2UoKTtcbmltYWdlTWFuYWdlci5jcmVhdGVOYXZDaXJjbGVzKCk7XG5cbi8vIGV2ZW50IGxpc3RlbmVyc1xuY29uc3Qgc2Nyb2xsQmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JvbGwtYmFjay1idG4nKTtcbmNvbnN0IHNjcm9sbEZvcndhcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Nyb2xsLWZvcndhcmQtYnRuJyk7XG5cbnNjcm9sbEJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaW1hZ2VNYW5hZ2VyLnNjcm9sbEJhY2tJbWFnZSgpO1xufSk7XG5zY3JvbGxGb3J3YXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGltYWdlTWFuYWdlci5zY3JvbGxGb3J3YXJkSW1hZ2UoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9