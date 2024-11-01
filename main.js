/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createContactsPage = () => {\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.createElement(\"div\");\n    pageContent.classList.add('page-content');\n    \n    const headline = document.createElement('h1');\n    headline.textContent = \"Contact Us!\";\n    pageContent.appendChild(headline);\n\n    const copy = document.createElement('p');\n    copy.textContent = \"Phone Number: (604) 778-1234\"\n    pageContent.appendChild(copy);\n\n    content.appendChild(pageContent);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactsPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0cy5qcz8yMzk5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUNvbnRhY3RzUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdwYWdlLWNvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXMhXCI7XG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gICAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb3B5LnRleHRDb250ZW50ID0gXCJQaG9uZSBOdW1iZXI6ICg2MDQpIDc3OC0xMjM0XCJcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChjb3B5KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdHNQYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contacts.js\n");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHomePage = () => {\n    //Select container div and creating div for the contents of the homepage.\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.createElement(\"div\");\n    pageContent.classList.add('page-content');\n\n    //Create and append the content for out homepage.\n    const image = document.createElement('img');\n    image.src = \"https://seeklogo.com/images/N/noodle-noodle-logo-CC600C58D7-seeklogo.com.png\";\n    image.height = '300';\n    pageContent.appendChild(image);\n\n    const headline = document.createElement('h1');\n    headline.textContent = \"Welcome to Noodle House!\";\n    pageContent.appendChild(headline);\n\n    const copy = document.createElement('p');\n    copy.textContent = \"Noodle House specializes in making delicious Korean-style Chinese food. We are proud to offer amazing dishes that combine healthy ingredients with passion for fine fusion food. Come try our dishes or order online now!\"\n    pageContent.appendChild(copy);\n\n    content.appendChild(pageContent);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZXBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZXBhZ2UuanM/MTdiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVIb21lUGFnZSA9ICgpID0+IHtcbiAgICAvL1NlbGVjdCBjb250YWluZXIgZGl2IGFuZCBjcmVhdGluZyBkaXYgZm9yIHRoZSBjb250ZW50cyBvZiB0aGUgaG9tZXBhZ2UuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250ZW50Jyk7XG5cbiAgICAvL0NyZWF0ZSBhbmQgYXBwZW5kIHRoZSBjb250ZW50IGZvciBvdXQgaG9tZXBhZ2UuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSBcImh0dHBzOi8vc2Vla2xvZ28uY29tL2ltYWdlcy9OL25vb2RsZS1ub29kbGUtbG9nby1DQzYwMEM1OEQ3LXNlZWtsb2dvLmNvbS5wbmdcIjtcbiAgICBpbWFnZS5oZWlnaHQgPSAnMzAwJztcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gTm9vZGxlIEhvdXNlIVwiO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICAgIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29weS50ZXh0Q29udGVudCA9IFwiTm9vZGxlIEhvdXNlIHNwZWNpYWxpemVzIGluIG1ha2luZyBkZWxpY2lvdXMgS29yZWFuLXN0eWxlIENoaW5lc2UgZm9vZC4gV2UgYXJlIHByb3VkIHRvIG9mZmVyIGFtYXppbmcgZGlzaGVzIHRoYXQgY29tYmluZSBoZWFsdGh5IGluZ3JlZGllbnRzIHdpdGggcGFzc2lvbiBmb3IgZmluZSBmdXNpb24gZm9vZC4gQ29tZSB0cnkgb3VyIGRpc2hlcyBvciBvcmRlciBvbmxpbmUgbm93IVwiXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoY29weSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVQYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/homepage.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadpage */ \"./src/loadpage.js\");\n\n\n(0,_loadpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7O0FBRWxDLHFEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWRwYWdlJztcblxubG9hZFBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/loadpage.js":
/*!*************************!*\
  !*** ./src/loadpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\n\n\nfunction initialLoad() {\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9hZHBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDO0FBQ1A7O0FBRWhDO0FBQ0EsSUFBSSxpREFBVTtBQUNkLElBQUkscURBQWM7QUFDbEI7O0FBRUEsaUVBQWUsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbG9hZHBhZ2UuanM/NGY4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlSG9tZVBhZ2UgZnJvbSAnLi9ob21lcGFnZSdcbmltcG9ydCBjcmVhdGVUYWJzIGZyb20gJy4vdGFicyc7XG5cbmZ1bmN0aW9uIGluaXRpYWxMb2FkKCkge1xuICAgIGNyZWF0ZVRhYnMoKTtcbiAgICBjcmVhdGVIb21lUGFnZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTG9hZDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/loadpage.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenuPage = () => {\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.createElement(\"div\");\n    pageContent.classList.add('page-content');\n\n    const jjm = document.createElement('img');\n    jjm.src = \"https://cdn.pixabay.com/photo/2020/04/26/22/32/black-bean-noodles-5097423_1280.jpg\";\n    jjm.height = '300';\n    pageContent.appendChild(jjm);\n\n    const jjmheadline = document.createElement('h1');\n    jjmheadline.textContent = \"JA JANG MYUN\";\n    pageContent.appendChild(jjmheadline);\n\n    const jb = document.createElement('img');\n    jb.src = \"https://cdn.pixabay.com/photo/2016/09/07/10/19/food-1651290_1280.jpg\";\n    jb.height = '300';\n    pageContent.appendChild(jb);\n\n    const jbheadline = document.createElement('h1');\n    jbheadline.textContent = \"JJAM BONG\";\n    pageContent.appendChild(jbheadline);\n\n    const tsy = document.createElement('img');\n    tsy.src = \"https://www.koreanbapsang.com/wp-content/uploads/2011/09/DSC_0113-e1541395731822.jpg\";\n    tsy.height = '300';\n    pageContent.appendChild(tsy);\n\n    const tsyheadline = document.createElement('h1');\n    tsyheadline.textContent = \"TANG SU YUK\";\n    pageContent.appendChild(tsyheadline);\n\n    content.appendChild(pageContent);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlTWVudVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBqam0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBqam0uc3JjID0gXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIwLzA0LzI2LzIyLzMyL2JsYWNrLWJlYW4tbm9vZGxlcy01MDk3NDIzXzEyODAuanBnXCI7XG4gICAgamptLmhlaWdodCA9ICczMDAnO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGpqbSk7XG5cbiAgICBjb25zdCBqam1oZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgamptaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkpBIEpBTkcgTVlVTlwiO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGpqbWhlYWRsaW5lKTtcblxuICAgIGNvbnN0IGpiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgamIuc3JjID0gXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzA5LzA3LzEwLzE5L2Zvb2QtMTY1MTI5MF8xMjgwLmpwZ1wiO1xuICAgIGpiLmhlaWdodCA9ICczMDAnO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGpiKTtcblxuICAgIGNvbnN0IGpiaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGpiaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkpKQU0gQk9OR1wiO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGpiaGVhZGxpbmUpO1xuXG4gICAgY29uc3QgdHN5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdHN5LnNyYyA9IFwiaHR0cHM6Ly93d3cua29yZWFuYmFwc2FuZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTEvMDkvRFNDXzAxMTMtZTE1NDEzOTU3MzE4MjIuanBnXCI7XG4gICAgdHN5LmhlaWdodCA9ICczMDAnO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHRzeSk7XG5cbiAgICBjb25zdCB0c3loZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdHN5aGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIlRBTkcgU1UgWVVLXCI7XG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQodHN5aGVhZGxpbmUpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlQ29udGVudCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51UGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts */ \"./src/contacts.js\");\n\n\n\n\nconst createTabs = () => {\n    const nav = document.querySelector('#nav')\n\n    const homeBtn = document.createElement('button');\n    const menuBtn = document.createElement('button');\n    const contactsBtn = document.createElement('button');\n\n    homeBtn.setAttribute('id', 'home-btn');\n    menuBtn.setAttribute('id', 'menu-btn');\n    contactsBtn.setAttribute('id', 'contacts-btn');\n\n    homeBtn.classList.add('tab');\n    menuBtn.classList.add('tab');\n    contactsBtn.classList.add('tab');\n\n    homeBtn.textContent = 'Home';\n    menuBtn.textContent = 'Menu';\n    contactsBtn.textContent = 'Contacts';\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactsBtn);\n\n    homeBtn.addEventListener('click', () => {\n        clearContent()\n        ;(0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n    menuBtn.addEventListener('click', () => {\n        clearContent()\n        ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n    contactsBtn.addEventListener('click', () => {\n        clearContent()\n        ;(0,_contacts__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n};\n\nfunction clearContent() {\n    const content = document.querySelector('#content');\n    const pageContent = document.querySelector('.page-content');\n    if (pageContent) {\n        content.removeChild(pageContent);\n    };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFicy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBQ0o7QUFDUTs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHNEQUFjO0FBQ3RCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSxrREFBYztBQUN0QixLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVEsc0RBQWtCO0FBQzFCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy90YWJzLmpzPzY3MmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUhvbWVQYWdlIGZyb20gXCIuL2hvbWVwYWdlXCI7XG5pbXBvcnQgY3JlYXRlTWVudVBhZ2UgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3RzUGFnZSBmcm9tIFwiLi9jb250YWN0c1wiO1xuXG5jb25zdCBjcmVhdGVUYWJzID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYnKVxuXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjb250YWN0c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaG9tZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtYnRuJyk7XG4gICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtYnRuJyk7XG4gICAgY29udGFjdHNCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0cy1idG4nKTtcblxuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBjb250YWN0c0J0bi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBjb250YWN0c0J0bi50ZXh0Q29udGVudCA9ICdDb250YWN0cyc7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0c0J0bik7XG5cbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhckNvbnRlbnQoKVxuICAgICAgICBjcmVhdGVIb21lUGFnZSgpO1xuICAgIH0pO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpXG4gICAgICAgIGNyZWF0ZU1lbnVQYWdlKCk7XG4gICAgfSk7XG4gICAgY29udGFjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpXG4gICAgICAgIGNyZWF0ZUNvbnRhY3RzUGFnZSgpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtY29udGVudCcpO1xuICAgIGlmIChwYWdlQ29udGVudCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHBhZ2VDb250ZW50KTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFiczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/tabs.js\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;