/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/input-range.js":
/*!******************************************!*\
  !*** ./src/js/components/input-range.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var rangeList = document.querySelectorAll('.input-range');
  if (rangeList.length) {
    rangeList.forEach(function (range) {
      var input = range.querySelector('.input-range__field');
      var value = range.querySelector('.input-range__value');
      input.addEventListener('input', function () {
        value.innerHTML = input.value;
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/input-select.js":
/*!*******************************************!*\
  !*** ./src/js/components/input-select.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var dropdownList = document.querySelectorAll('.input-select');
  if (dropdownList.length) {
    dropdownList.forEach(function (dropdown) {
      var input = dropdown.querySelector('.input-select__value');
      dropdown.addEventListener('click', function (evt) {
        evt.stopPropagation();
        dropdown.classList.toggle('input-select--active');
        input.classList.toggle('input--active');
      });
      var optionsList = dropdown.querySelectorAll('.input-select__option');
      optionsList.forEach(function (option) {
        option.addEventListener('click', function (e) {
          e.preventDefault();
          input.value = option.dataset.value;
        });
      });
    });
  }
  document.addEventListener('click', closeAllSelect);
  function closeAllSelect() {
    dropdownList.forEach(function (dropdown) {
      dropdown.classList.remove('input-select--active');
      dropdown.querySelector('input').classList.remove('input--active');
    });
  }
});

/***/ }),

/***/ "./src/js/components/mobile-menu.js":
/*!******************************************!*\
  !*** ./src/js/components/mobile-menu.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.header');
  var menuToggleBtn = header.querySelector('.header__menu-toggle');
  menuToggleBtn.addEventListener('click', function () {
    if (header.classList.contains('header--menu-shown')) {
      header.classList.remove('header--menu-shown');
      setTimeout(function () {
        header.classList.remove('header--menu-show');
      }, 220);
    } else {
      header.classList.add('header--menu-show');
      setTimeout(function () {
        header.classList.add('header--menu-shown');
      }, 20);
    }
  });
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_input_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/input-select */ "./src/js/components/input-select.js");
/* harmony import */ var _components_input_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_input_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_input_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/input-range */ "./src/js/components/input-range.js");
/* harmony import */ var _components_input_range__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_input_range__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mobile-menu */ "./src/js/components/mobile-menu.js");
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_mobile_menu__WEBPACK_IMPORTED_MODULE_2__);




/***/ })

/******/ });
//# sourceMappingURL=main.js.map