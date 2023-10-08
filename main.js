/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const content = document.getElementById('content')

function buildBody(){
    const container = document.createElement('div');
    const hours = document.createElement('div');
    const about = document.createElement('div');
    const location = document.createElement('div');

    container.setAttribute('id', 'container');
    hours.setAttribute('id', 'hours');
    about.setAttribute('id', 'about');
    location.setAttribute('id', 'location');

    container.appendChild(hours);
    container.appendChild(about);
    container.appendChild(location);
    
    return container;
}

function buildHeader(){
    const header = document.createElement('div');
    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');

    header.appendChild(tab1);
    header.appendChild(tab2);
    header.appendChild(tab3);

    return header
}

content.appendChild(buildBody());
content.appendChild(buildHeader());
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbmZ1bmN0aW9uIGJ1aWxkQm9keSgpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFpbmVyJyk7XG4gICAgaG91cnMuc2V0QXR0cmlidXRlKCdpZCcsICdob3VycycpO1xuICAgIGFib3V0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQnKTtcbiAgICBsb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uJyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBidWlsZEhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YWIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRhYjEpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0YWIyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFiMyk7XG5cbiAgICByZXR1cm4gaGVhZGVyXG59XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRCb2R5KCkpO1xuY29udGVudC5hcHBlbmRDaGlsZChidWlsZEhlYWRlcigpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=