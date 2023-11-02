"use strict";
(self["webpackChunkresturant_page"] = self["webpackChunkresturant_page"] || []).push([["tab2"],{

/***/ "./src/tab2.js":
/*!*********************!*\
  !*** ./src/tab2.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function buildMenu(){
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    const menuHeader = document.createElement('div');
    menuHeader.setAttribute('id', 'menuHeader');
    menuHeader.innerHTML = "Menu";

    const entrees = document.createElement('div');
    entrees.setAttribute('id', 'entrees');
    const entreeTitle = document.createElement('div');
    entreeTitle.setAttribute('id', 'entreeTitle');
    entreeTitle.innerHTML = 'Entrees'
    const entreeContainer = document.createElement('div');
    entreeContainer.setAttribute('id', 'entreeContainer');
    entrees.appendChild(entreeTitle);
    entrees.appendChild(entreeContainer);

    const plates = document.createElement('div');
    plates.setAttribute('id', 'plates');
    const platesTitle = document.createElement('div');
    platesTitle.setAttribute('id', 'platesTitle');
    platesTitle.innerHTML = 'Plates'
    const platesContainer = document.createElement('div');
    platesContainer.setAttribute('id', 'entreeContainer');
    plates.appendChild(platesTitle);
    plates.appendChild(platesContainer);

    container.appendChild(menuHeader);
    container.appendChild(entrees);
    container.appendChild(plates);


    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildMenu());

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiMi5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLGlFQUFlLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy90YWIyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGJ1aWxkTWVudSgpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51SGVhZGVyJyk7XG4gICAgbWVudUhlYWRlci5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIGNvbnN0IGVudHJlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbnRyZWVzLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW50cmVlcycpO1xuICAgIGNvbnN0IGVudHJlZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW50cmVlVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdlbnRyZWVUaXRsZScpO1xuICAgIGVudHJlZVRpdGxlLmlubmVySFRNTCA9ICdFbnRyZWVzJ1xuICAgIGNvbnN0IGVudHJlZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVudHJlZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VudHJlZUNvbnRhaW5lcicpO1xuICAgIGVudHJlZXMuYXBwZW5kQ2hpbGQoZW50cmVlVGl0bGUpO1xuICAgIGVudHJlZXMuYXBwZW5kQ2hpbGQoZW50cmVlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHBsYXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXRlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXRlcycpO1xuICAgIGNvbnN0IHBsYXRlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxhdGVzVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF0ZXNUaXRsZScpO1xuICAgIHBsYXRlc1RpdGxlLmlubmVySFRNTCA9ICdQbGF0ZXMnXG4gICAgY29uc3QgcGxhdGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxhdGVzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW50cmVlQ29udGFpbmVyJyk7XG4gICAgcGxhdGVzLmFwcGVuZENoaWxkKHBsYXRlc1RpdGxlKTtcbiAgICBwbGF0ZXMuYXBwZW5kQ2hpbGQocGxhdGVzQ29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW50cmVlcyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXRlcyk7XG5cblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkTWVudSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==