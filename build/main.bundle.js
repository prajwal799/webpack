/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getdata\": () => (/* binding */ getdata),\n/* harmony export */   \"fetchdata\": () => (/* binding */ fetchdata),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function getdata(url){\r\n    const data = await fetch(url);\r\n    const list = await data.json();\r\n    return list.results; \r\n}\r\n\r\nvar array =[];\r\n\r\nfunction fetchdata( d,container){\r\n    container.innerHTML = \"\";\r\n    let div = document.createElement(\"div\");\r\n   d.forEach( ({urls,alt_description}) => {  \r\n       const img = document.createElement(\"img\");\r\n       img.src = urls.raw;\r\n       img.style.width= \"350px\";\r\n       img.style.height = \"350px\";\r\n       img.className = \"imageList\";\r\n       img.addEventListener('click',pop,alt_description);\r\n       array.push(alt_description);\r\n       console.log(alt_description);\r\n       \r\n\r\n       div.append(img);\r\n       \r\n   })\r\n   container.append(div);\r\n}\r\n\r\nfunction pop(){\r\n    alert(alt_description);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({getdata,fetchdata});\n\n//# sourceURL=webpack://webpackassignemnt/./src/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigationbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigationbar.js */ \"./src/navigationbar.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n\r\n\r\n\r\nconst navbar = (0,_navigationbar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nconst container = document.getElementById('nav');\r\ncontainer.innerHTML = navbar;\r\n\r\n\r\nfunction searchData(){\r\n    const container = document.getElementById(\"container\");\r\n    const input_value = document.getElementById(\"input\").value;\r\n    let listData = (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.getdata)(`https://api.unsplash.com/search/photos?query=${input_value}&client_id=vx7cOCWaGDkTrIFX5G8SGBORyfLbunFBOZshxFMyvBA&per_page=20`)\r\n     \r\n    listData.then ((res) => {\r\n        ;(0,_api_js__WEBPACK_IMPORTED_MODULE_1__.fetchdata)(res,container)\r\n    })\r\n}\r\nconst search = document.getElementById('search');\r\nsearch.addEventListener('click',searchData);\n\n//# sourceURL=webpack://webpackassignemnt/./src/index.js?");

/***/ }),

/***/ "./src/navigationbar.js":
/*!******************************!*\
  !*** ./src/navigationbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": () => (/* binding */ Navbar),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Navbar(){\r\n    return `<div id=\"nav\">\r\n         <div>\r\n         <input id=\"input\" placeholder=\"search image\"/>\r\n         <button id=\"search\">Search</button>\r\n         <h3>Brand</h3>\r\n         <h3>unsplash Awards</h3>\r\n         <h3>Submit Photo</h3>\r\n         <img src=\"https://www.freeiconspng.com/uploads/bell-icon-16.png\" alt=\"Trulli\" class=\"img_bell\"/>\r\n         <img src=\"https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-male-circle2-512.png\" class=\"img_profile\"/>\r\n         </div>\r\n         <div>\r\n           <h2><a href=\"index.html\">Home</a></h2>\r\n           <h2><a href=\"editorial.html\">Editorial</a></h2>\r\n           <h2><a href=\"current.html\">Current Event</a></h2>\r\n           <h2><a href=\"dprint.html\">3D-print</a></h2>\r\n           <h2><a href=\"film.html\">Film</a></h2>\r\n           <h2><a href=\"street.html\">Street Photography</a></h2>\r\n           <h2><a href=\"people.html\">People</a></h2>\r\n           <h2><a href=\"nature.html\">Nature</a></h2>\r\n           <h2><a href=\"healthy.html\">Healthy & Wellness</a></h2>\r\n           <h2><a href=\"fashion.html\">Fashion</a></h2>   \r\n         </div>\r\n    </div>`\r\n}\r\n\r\n\r\n\r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n//# sourceURL=webpack://webpackassignemnt/./src/navigationbar.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;