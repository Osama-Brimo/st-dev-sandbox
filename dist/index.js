import * as __WEBPACK_EXTERNAL_MODULE__extensions_f2c2dd90__ from "../../../../extensions";
import * as __WEBPACK_EXTERNAL_MODULE__slash_commands_SlashCommandEnumValue_0d68db55__ from "../../../../slash-commands/SlashCommandEnumValue";
/******/ var __webpack_modules__ = ({

/***/ "./src/utils/test-thing.ts":
/*!*********************************!*\
  !*** ./src/utils/test-thing.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   anothertCtx: () => (/* binding */ anothertCtx)
/* harmony export */ });
/* harmony import */ var _sillytavern_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sillytavern/extensions */ "@sillytavern/extensions");

const anothertCtx = (0,_sillytavern_extensions__WEBPACK_IMPORTED_MODULE_0__.getContext)();
console.log('[SANDBOX]: works here too!!!', (0,_sillytavern_extensions__WEBPACK_IMPORTED_MODULE_0__.getContext)());



/***/ }),

/***/ "@sillytavern/extensions":
/*!*****************************************!*\
  !*** external "../../../../extensions" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__extensions_f2c2dd90__;

/***/ }),

/***/ "@sillytavern/slash-commands/SlashCommandEnumValue":
/*!*******************************************************************!*\
  !*** external "../../../../slash-commands/SlashCommandEnumValue" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__slash_commands_SlashCommandEnumValue_0d68db55__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sillytavern_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sillytavern/extensions */ "@sillytavern/extensions");
/* harmony import */ var _utils_test_thing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/test-thing */ "./src/utils/test-thing.ts");
/* harmony import */ var _sillytavern_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sillytavern/slash-commands/SlashCommandEnumValue */ "@sillytavern/slash-commands/SlashCommandEnumValue");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



jQuery(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('FUUUUUUUCK!!!');
        console.log('[SANDBOX]: Extensions loaded!');
        console.log('[SANDBOX]: Context...', (0,_sillytavern_extensions__WEBPACK_IMPORTED_MODULE_0__.getContext)());
        console.log(_utils_test_thing__WEBPACK_IMPORTED_MODULE_1__.anothertCtx, 'another ctx from index.ts');
        console.log(_sillytavern_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_2__.SlashCommandEnumValue, 'slash command enum value...');
    }
    catch (error) {
        console.error('[SANDBOX] ERROR:', error);
    }
}));

})();


//# sourceMappingURL=index.js.map