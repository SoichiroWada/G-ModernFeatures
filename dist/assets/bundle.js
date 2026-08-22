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

/***/ "./src/data.js"
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ users),\n/* harmony export */   getPremUsers: () => (/* binding */ getPremUsers)\n/* harmony export */ });\nvar users = [{\n  name: 'mario',\n  premium: true\n}, {\n  name: 'luigi',\n  premium: false\n}, {\n  name: 'yoshi',\n  premium: true\n}, {\n  name: 'toad',\n  premium: true\n}, {\n  name: 'peach',\n  premium: false\n}, {\n  name: 'Bengi',\n  premium: true\n}, {\n  name: 'Cruise',\n  premium: true\n}, {\n  name: 'Brian',\n  premium: true\n}, {\n  name: 'Tom',\n  premium: true\n}];\n\n// export default users;\n\nvar getPremUsers = function getPremUsers(users) {\n  return users.filter(function (user) {\n    return user.premium;\n  });\n};\n\n\n//# sourceURL=webpack://g-modernfeatures/./src/data.js?\n}");

/***/ },

/***/ "./src/dom.js"
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTitle: () => (/* binding */ addTitle),\n/* harmony export */   contact: () => (/* binding */ contact),\n/* harmony export */   styleBody: () => (/* binding */ styleBody)\n/* harmony export */ });\nconsole.log('dom file');\nvar body = document.querySelector('body');\nvar styleBody = function styleBody() {\n  body.style.background = 'skyblue';\n};\nvar addTitle = function addTitle(text) {\n  var title = document.createElement('h2');\n  title.textContent = text;\n  body.appendChild(title);\n};\nvar contact = 'marinda@thenetninja.co.jp';\n\n\n//# sourceURL=webpack://g-modernfeatures/./src/dom.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\nconsole.log('index.js file');\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.addTitle)('hello, world from index.js');\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.styleBody)();\nconsole.log(_dom__WEBPACK_IMPORTED_MODULE_0__.contact);\nvar premUsers = (0,_data__WEBPACK_IMPORTED_MODULE_1__.getPremUsers)(_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconsole.log(_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"], premUsers);\nconsole.log('Burietta');\nconsole.log('Vinata Rattata Russo');\nconsole.log('Revel Heart');\nconsole.log('After like');\n\n//# sourceURL=webpack://g-modernfeatures/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
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
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;