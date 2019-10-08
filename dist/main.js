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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var display = function () {
  var createTag = function createTag(_ref) {
    var tag = _ref.tag,
        id = _ref.id,
        classes = _ref.classes,
        text = _ref.text;
    var obj = document.createElement(tag);
    if (id) obj.setAttribute('id', id);
    classes.split(' ').forEach(function (elem) {
      obj.classList.add(elem);
    });
    if (text) obj.textContent = text;
    return obj;
  };

  var projectContainer = createTag({
    tag: 'div',
    id: 'project',
    classes: 'col-md-4 h-100 test-red-bg'
  });
  var todoContainer = createTag({
    tag: 'div',
    id: 'todo',
    classes: 'col-md-8 h-100 test-blue-bg'
  });

  var addProject = function addProject(_ref2) {
    var projectName = _ref2.projectName;
    // receive project
    var project = createTag({
      tag: 'div',
      classes: 'project test-project'
    });
    project.textContent = projectName;
    projectContainer.appendChild(project);
  };

  var addTodo = function addTodo(_ref3) {
    var title = _ref3.title;
    var todo = createTag({
      tag: 'div',
      classes: 'to-do'
    }); // console.log(title, todo);
    // const titleTag = createTag({ tag: 'h4', classes: '', text: title});
    // find out why it fails with empty string

    var titleTag = document.createElement('h4');
    titleTag.textContent = title;
    todo.appendChild(titleTag);
    todoContainer.appendChild(todo);
  };

  var setMainDisplay = function setMainDisplay() {
    var mainContainer = document.querySelector('#content');
    mainContainer.classList.add('row');
    mainContainer.appendChild(projectContainer);
    mainContainer.appendChild(todoContainer);
    return mainContainer;
  };

  return {
    setMainDisplay: setMainDisplay,
    addProject: addProject,
    addTodo: addTodo
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (display);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");


_display__WEBPACK_IMPORTED_MODULE_0__["default"].setMainDisplay();
_utilities__WEBPACK_IMPORTED_MODULE_1__["projectController"].createProject('First Project');
var testArray = _utilities__WEBPACK_IMPORTED_MODULE_1__["projectController"].getProjectList();
testArray.forEach(function (element) {
  _display__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(element);
});
_utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].createTodo({
  title: 'Tenda App'
});
var todoArray = _utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].getTodoList();
todoArray.forEach(function (element) {
  console.log(element);
  _display__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo(element);
});

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: projectController, todoController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectController", function() { return projectController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoController", function() { return todoController; });
// create project
var project = function project(projectName) {
  return {
    projectName: projectName
  };
};

var projectController = function () {
  var projectList = [];

  var createProject = function createProject(data) {
    projectList.push(project(data));
  };

  var getProjectList = function getProjectList() {
    return projectList;
  };

  return {
    createProject: createProject,
    getProjectList: getProjectList
  };
}();

var todo = function todo(_ref) {
  var title = _ref.title;
  return {
    title: title
  };
};

var todoController = function () {
  var todoList = [];

  var createTodo = function createTodo(data) {
    todoList.push(todo(data));
  };

  var getTodoList = function getTodoList() {
    return todoList;
  };

  return {
    createTodo: createTodo,
    getTodoList: getTodoList
  };
}(); // addProject({ title: 'a' });
// addProject({ title: 'b' });
// sending to display: call
// create todo list




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMuanMiXSwibmFtZXMiOlsiZGlzcGxheSIsImNyZWF0ZVRhZyIsInRhZyIsImlkIiwiY2xhc3NlcyIsInRleHQiLCJvYmoiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdCIsImZvckVhY2giLCJlbGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJwcm9qZWN0Q29udGFpbmVyIiwidG9kb0NvbnRhaW5lciIsImFkZFByb2plY3QiLCJwcm9qZWN0TmFtZSIsInByb2plY3QiLCJhcHBlbmRDaGlsZCIsImFkZFRvZG8iLCJ0aXRsZSIsInRvZG8iLCJ0aXRsZVRhZyIsInNldE1haW5EaXNwbGF5IiwibWFpbkNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9qZWN0Q29udHJvbGxlciIsImNyZWF0ZVByb2plY3QiLCJ0ZXN0QXJyYXkiLCJnZXRQcm9qZWN0TGlzdCIsImVsZW1lbnQiLCJ0b2RvQ29udHJvbGxlciIsImNyZWF0ZVRvZG8iLCJ0b2RvQXJyYXkiLCJnZXRUb2RvTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJwcm9qZWN0TGlzdCIsImRhdGEiLCJwdXNoIiwidG9kb0xpc3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFF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QixPQUFPLENBQUNxQixJQUFELENBQXpCO0FBQ0EsR0FGRDs7QUFJQSxNQUFNVCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDNUIsV0FBT1EsV0FBUDtBQUNBLEdBRkQ7O0FBR0EsU0FBTztBQUFFVixpQkFBYSxFQUFiQSxhQUFGO0FBQWlCRSxrQkFBYyxFQUFkQTtBQUFqQixHQUFQO0FBRUEsQ0FYeUIsRUFBMUI7O0FBYUEsSUFBTVIsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZTtBQUFBLE1BQVpELEtBQVksUUFBWkEsS0FBWTtBQUMzQixTQUFPO0FBQUVBLFNBQUssRUFBTEE7QUFBRixHQUFQO0FBQ0EsQ0FGRDs7QUFJQSxJQUFNVyxjQUFjLEdBQUksWUFBTTtBQUM3QixNQUFJUyxRQUFRLEdBQUcsRUFBZjs7QUFDQSxNQUFNUixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDTSxJQUFELEVBQVU7QUFDNUJFLFlBQVEsQ0FBQ0QsSUFBVCxDQUFlbEIsSUFBSSxDQUFDaUIsSUFBRCxDQUFuQjtBQUNBLEdBRkQ7O0FBR0EsTUFBTUosV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QixXQUFPTSxRQUFQO0FBQ0EsR0FGRDs7QUFHQSxTQUFPO0FBQUVSLGNBQVUsRUFBVkEsVUFBRjtBQUFjRSxlQUFXLEVBQVhBO0FBQWQsR0FBUDtBQUNBLENBVHNCLEVBQXZCLEMsQ0FhQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlVGFnID0gKHsgdGFnLCBpZCwgY2xhc3NlcywgdGV4dCB9KSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gICAgaWYoaWQpIG9iai5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgb2JqLmNsYXNzTGlzdC5hZGQoZWxlbSk7XG5cdFx0fSlcblx0XHRpZih0ZXh0KSBvYmoudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdHJldHVybiBvYmo7XG4gIH1cblxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlVGFnKHsgdGFnOiAnZGl2JywgaWQ6ICdwcm9qZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6ICdjb2wtbWQtNCBoLTEwMCB0ZXN0LXJlZC1iZyd9KTtcbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGlkOiAndG9kbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiAnY29sLW1kLTggaC0xMDAgdGVzdC1ibHVlLWJnJ30pO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAoeyBwcm9qZWN0TmFtZSB9KSA9PiB7XG4gICAgLy8gcmVjZWl2ZSBwcm9qZWN0XG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdwcm9qZWN0IHRlc3QtcHJvamVjdCd9KTtcbiAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblx0fVxuXG5cdGNvbnN0IGFkZFRvZG8gPSAoeyB0aXRsZSB9KSA9PiB7XG5cdFx0Y29uc3QgdG9kbyA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICd0by1kbyd9KTtcblx0XHQvLyBjb25zb2xlLmxvZyh0aXRsZSwgdG9kbyk7XG5cdFx0Ly8gY29uc3QgdGl0bGVUYWcgPSBjcmVhdGVUYWcoeyB0YWc6ICdoNCcsIGNsYXNzZXM6ICcnLCB0ZXh0OiB0aXRsZX0pO1xuXHRcdC8vIGZpbmQgb3V0IHdoeSBpdCBmYWlscyB3aXRoIGVtcHR5IHN0cmluZ1xuXHRcdGxldCB0aXRsZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG5cdFx0dGl0bGVUYWcudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuXHRcdHRvZG8uYXBwZW5kQ2hpbGQodGl0bGVUYWcpO1xuXHRcdHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XG5cdH1cblxuICBjb25zdCBzZXRNYWluRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbiAgfVxuXG4gIHJldHVybiB7IHNldE1haW5EaXNwbGF5LCBhZGRQcm9qZWN0LCBhZGRUb2RvIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xuIiwiaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5J1xuaW1wb3J0IHsgcHJvamVjdENvbnRyb2xsZXIsIHRvZG9Db250cm9sbGVyIH0gZnJvbSAnLi91dGlsaXRpZXMnXG5cblxuZGlzcGxheS5zZXRNYWluRGlzcGxheSgpO1xucHJvamVjdENvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCgnRmlyc3QgUHJvamVjdCcpO1xubGV0IHRlc3RBcnJheSA9IHByb2plY3RDb250cm9sbGVyLmdldFByb2plY3RMaXN0KCk7XG5cbnRlc3RBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRkaXNwbGF5LmFkZFByb2plY3QoZWxlbWVudCk7XG59KTtcblxudG9kb0NvbnRyb2xsZXIuY3JlYXRlVG9kbyh7IHRpdGxlOiAnVGVuZGEgQXBwJ30pO1xubGV0IHRvZG9BcnJheSA9IHRvZG9Db250cm9sbGVyLmdldFRvZG9MaXN0KCk7XG50b2RvQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0Y29uc29sZS5sb2coZWxlbWVudCk7XG5cdGRpc3BsYXkuYWRkVG9kbyhlbGVtZW50KTtcbn0pO1xuIiwiLy8gY3JlYXRlIHByb2plY3RcbmNvbnN0IHByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcblx0cmV0dXJuIHsgcHJvamVjdE5hbWUgfTtcbn07XG5cbmNvbnN0IHByb2plY3RDb250cm9sbGVyID0gKCgpID0+IHtcblx0bGV0IHByb2plY3RMaXN0ID0gW107XG5cdGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoZGF0YSkgPT4ge1xuXHRcdHByb2plY3RMaXN0LnB1c2ggKHByb2plY3QoZGF0YSkpO1xuXHR9O1xuXG5cdGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBwcm9qZWN0TGlzdDtcblx0fTtcblx0cmV0dXJuIHsgY3JlYXRlUHJvamVjdCwgZ2V0UHJvamVjdExpc3QgfTtcblxufSkoKTtcblxuY29uc3QgdG9kbyA9ICh7IHRpdGxlIH0pID0+IHtcblx0cmV0dXJuIHsgdGl0bGUgfTtcbn07XG5cbmNvbnN0IHRvZG9Db250cm9sbGVyID0gKCgpID0+IHtcblx0bGV0IHRvZG9MaXN0ID0gW107XG5cdGNvbnN0IGNyZWF0ZVRvZG8gPSAoZGF0YSkgPT4ge1xuXHRcdHRvZG9MaXN0LnB1c2ggKHRvZG8oZGF0YSkpO1xuXHR9O1xuXHRjb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IHtcblx0XHRyZXR1cm4gdG9kb0xpc3Q7XG5cdH07XG5cdHJldHVybiB7IGNyZWF0ZVRvZG8sIGdldFRvZG9MaXN0IH07XG59KSgpO1xuXG5cblxuLy8gYWRkUHJvamVjdCh7IHRpdGxlOiAnYScgfSk7XG4vLyBhZGRQcm9qZWN0KHsgdGl0bGU6ICdiJyB9KTtcbi8vIHNlbmRpbmcgdG8gZGlzcGxheTogY2FsbFxuXG4vLyBjcmVhdGUgdG9kbyBsaXN0XG5leHBvcnQgIHsgcHJvamVjdENvbnRyb2xsZXIsIHRvZG9Db250cm9sbGVyIH07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=