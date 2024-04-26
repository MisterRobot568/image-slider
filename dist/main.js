/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


class ImageManager {
    constructor(elementClass) {
        this.imageIDArr = (0,_functions__WEBPACK_IMPORTED_MODULE_0__["default"])(elementClass);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxtREFBbUQsVUFBVTs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pXOztBQUV4QztBQUNBO0FBQ0EsMEJBQTBCLHNEQUFhOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsb0JBQW9CO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRCxVQUFVO0FBQy9EO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7OztVQ3RFNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQzs7QUFFM0MseUJBQXlCLHNEQUFZO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW1hZ2UtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZ2V0IGFsbCBJRHMgb2YgaW1hZ2VzIGJhc2VkIG9uIGEgc2hhcmVkIGNsYXNzIG5hbWVcbmZ1bmN0aW9uIGdldEVsZW1lbnRJRHMoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YCk7XG5cbiAgICBjb25zdCBlbGVtZW50SURzID0gW107XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50SURzLnB1c2goZWxlbWVudC5pZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudElEcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RWxlbWVudElEcztcbiIsImltcG9ydCBnZXRFbGVtZW50SURzIGZyb20gJy4vZnVuY3Rpb25zJztcblxuY2xhc3MgSW1hZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50Q2xhc3MpIHtcbiAgICAgICAgdGhpcy5pbWFnZUlEQXJyID0gZ2V0RWxlbWVudElEcyhlbGVtZW50Q2xhc3MpO1xuXG4gICAgICAgIGNvbnN0IFtmaXJzdEVsZW1lbnRdID0gdGhpcy5pbWFnZUlEQXJyO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZUlEID0gZmlyc3RFbGVtZW50O1xuICAgIH1cblxuICAgIHNob3dJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmN1cnJlbnRJbWFnZUlEfWApO1xuICAgICAgICBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICBoaWRlSW1hZ2VzKCkge1xuICAgICAgICB0aGlzLmltYWdlSURBcnIuZm9yRWFjaCgoZWxlbWVudElEKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2VsZW1lbnRJRH1gKTtcbiAgICAgICAgICAgIGltYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvVG9JbWFnZSgpIHtcbiAgICAgICAgdGhpcy5oaWRlSW1hZ2VzKCk7XG4gICAgICAgIHRoaXMuc2hvd0ltYWdlKCk7XG4gICAgfVxuXG4gICAgLy8gc2Nyb2xscyB0byBwcmV2IG9yIG5leHQgaW1hZ2VJRCBpbiB0aGUgYXJyYXkoZm9yd2FyZC9iYWNrIGJ1dHRvbnMpXG4gICAgc2Nyb2xsQmFja0ltYWdlKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmltYWdlSURBcnIuaW5kZXhPZih0aGlzLmN1cnJlbnRJbWFnZUlEKTtcbiAgICAgICAgbGV0IG5ld0luZGV4O1xuICAgICAgICBpZiAoY3VycmVudEluZGV4IC0gMSA8IDApIHtcbiAgICAgICAgICAgIG5ld0luZGV4ID0gdGhpcy5pbWFnZUlEQXJyLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJRCA9IHRoaXMuaW1hZ2VJREFycltuZXdJbmRleF07XG4gICAgICAgIHRoaXMuZ29Ub0ltYWdlKCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsRm9yd2FyZEltYWdlKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmltYWdlSURBcnIuaW5kZXhPZih0aGlzLmN1cnJlbnRJbWFnZUlEKTtcbiAgICAgICAgbGV0IG5ld0luZGV4O1xuICAgICAgICBpZiAoY3VycmVudEluZGV4ICsgMSA+IHRoaXMuaW1hZ2VJREFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJRCA9IHRoaXMuaW1hZ2VJREFycltuZXdJbmRleF07XG4gICAgICAgIHRoaXMuZ29Ub0ltYWdlKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmF2Q2lyY2xlcygpIHtcbiAgICAgICAgY29uc3QgY2lyY2xlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdC1ib3gnKTtcbiAgICAgICAgdGhpcy5pbWFnZUlEQXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNpcmNsZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2lyY2xlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2lyY2xlLWJ1dHRvbnMnKTtcbiAgICAgICAgICAgIGNpcmNsZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7ZWxlbWVudH1jaXJjbGVidG5gKTtcbiAgICAgICAgICAgIGNpcmNsZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIC8vIGNpcmNsZUJ1dHRvbi50ZXh0Q29udGVudCA9ICd0ZXN0aW5nJztcblxuICAgICAgICAgICAgY2lyY2xlRGl2LmFwcGVuZENoaWxkKGNpcmNsZUJ1dHRvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGp1bXBzIHRvIHNwZWNpZmllZCBpbWFnZSBiYXNlZCBvbiBJRCAoY2xpY2tpbmcgc3BlY2lmaWMgY2lyY2xlKVxuICAgIGp1bXBUb0ltYWdlKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VNYW5hZ2VyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgSW1hZ2VNYW5hZ2VyIGZyb20gJy4vaW1hZ2UtbWFuYWdlcic7XG5cbmNvbnN0IGltYWdlTWFuYWdlciA9IG5ldyBJbWFnZU1hbmFnZXIoJ2ltYWdlcycpO1xuLy8gaW1hZ2VNYW5hZ2VyLm1ldGhvZDEoKTtcbmltYWdlTWFuYWdlci5nb1RvSW1hZ2UoKTtcbmltYWdlTWFuYWdlci5jcmVhdGVOYXZDaXJjbGVzKCk7XG5cbi8vIGV2ZW50IGxpc3RlbmVyc1xuY29uc3Qgc2Nyb2xsQmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JvbGwtYmFjay1idG4nKTtcbmNvbnN0IHNjcm9sbEZvcndhcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Nyb2xsLWZvcndhcmQtYnRuJyk7XG5cbnNjcm9sbEJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaW1hZ2VNYW5hZ2VyLnNjcm9sbEJhY2tJbWFnZSgpO1xufSk7XG5zY3JvbGxGb3J3YXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGltYWdlTWFuYWdlci5zY3JvbGxGb3J3YXJkSW1hZ2UoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9