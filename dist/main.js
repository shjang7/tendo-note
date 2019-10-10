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

    if (classes) {
      classes.split(' ').forEach(function (elem) {
        obj.classList.add(elem);
      });
    }

    if (text) obj.textContent = text;
    return obj;
  };

  var projectGroup = createTag({
    tag: 'div',
    classes: 'project-content-group'
  });
  var todoGroup = createTag({
    tag: 'div',
    classes: 'todo-content-group'
  });

  var addProject = function addProject(_ref2) {
    var projectName = _ref2.projectName;
    // receive project
    var project = createTag({
      tag: 'div',
      classes: 'project test-project'
    });
    project.textContent = projectName;
    projectGroup.appendChild(project);
  };

  var addTodo = function addTodo(_ref3) {
    var title = _ref3.title;
    var todo = createTag({
      tag: 'div',
      classes: 'to-do'
    });
    var titleTag = createTag({
      tag: 'h4',
      text: title
    });
    todo.appendChild(titleTag);
    todoGroup.appendChild(todo);
  };

  var headerSet = function headerSet(header, word) {
    header.appendChild(createTag({
      tag: 'h1',
      classes: 'h-title'
    }));
    header.appendChild(createTag({
      tag: 'h1',
      classes: 'create-form',
      text: '+'
    }));
  };

  var projectForm = function projectForm() {
    var form = createTag({
      tag: 'form',
      classes: 'project-form'
    });
    var fieldset = createTag({
      tag: 'fieldset'
    });
    form.appendChild(fieldset);
    var input = document.createElement('input');
    input.classList.add('project-name');
    input.setAttribute('placeholder', 'project name');
    fieldset.appendChild(input);
    return form;
  };

  var todoForm = function todoForm() {
    var form = createTag({
      tag: 'form',
      classes: 'todo-form'
    });
    var fieldset = createTag({
      tag: 'fieldset'
    });
    form.appendChild(fieldset);
    var input = document.createElement('input');
    input.classList.add('title');
    input.setAttribute('placeholder', 'title');
    fieldset.appendChild(input);
    input = document.createElement('input');
    input.classList.add('date');
    input.setAttribute('placeholder', 'date');
    fieldset.appendChild(input);
    return form;
  };

  var setMainDisplay = function setMainDisplay() {
    var projectContainer = createTag({
      tag: 'section',
      id: 'project',
      classes: 'col-md-4 h-100 test-red-bg'
    });
    var todoContainer = createTag({
      tag: 'section',
      id: 'todo',
      classes: 'col-md-8 h-100 test-blue-bg'
    });
    var mainContainer = document.querySelector('#content');
    mainContainer.classList.add('row');
    mainContainer.appendChild(projectContainer);
    mainContainer.appendChild(todoContainer);
    headerSet(projectContainer, 'Project');
    headerSet(todoContainer, 'Todo');
    projectContainer.appendChild(projectGroup);
    todoContainer.appendChild(todoGroup);
    projectContainer.appendChild(projectForm());
    todoContainer.appendChild(todoForm());
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


var factoryProject = [{
  projectName: 'first project'
}, {
  projectName: 'second project'
}];
var todoProject = [{
  title: 'first project one',
  projectName: 'first project',
  date: '03/nov/2019'
}, {
  title: 'first project two',
  projectName: 'first project',
  date: '03/nov/2019'
}, {
  title: 'first project three',
  projectName: 'first project',
  date: '03/nov/2019'
}]; // local
// first project == current project.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMuanMiXSwibmFtZXMiOlsiZGlzcGxheSIsImNyZWF0ZVRhZyIsInRhZyIsImlkIiwiY2xhc3NlcyIsInRleHQiLCJvYmoiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdCIsImZvckVhY2giLCJlbGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJwcm9qZWN0R3JvdXAiLCJ0b2RvR3JvdXAiLCJhZGRQcm9qZWN0IiwicHJvamVjdE5hbWUiLCJwcm9qZWN0IiwiYXBwZW5kQ2hpbGQiLCJhZGRUb2RvIiwidGl0bGUiLCJ0b2RvIiwidGl0bGVUYWciLCJoZWFkZXJTZXQiLCJoZWFkZXIiLCJ3b3JkIiwicHJvamVjdEZvcm0iLCJmb3JtIiwiZmllbGRzZXQiLCJpbnB1dCIsInRvZG9Gb3JtIiwic2V0TWFpbkRpc3BsYXkiLCJwcm9qZWN0Q29udGFpbmVyIiwidG9kb0NvbnRhaW5lciIsIm1haW5Db250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiZmFjdG9yeVByb2plY3QiLCJ0b2RvUHJvamVjdCIsImRhdGUiLCJwcm9qZWN0Q29udHJvbGxlciIsImNyZWF0ZVByb2plY3QiLCJ0ZXN0QXJyYXkiLCJnZXRQcm9qZWN0TGlzdCIsImVsZW1lbnQiLCJ0b2RvQ29udHJvbGxlciIsImNyZWF0ZVRvZG8iLCJ0b2RvQXJyYXkiLCJnZXRUb2RvTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJwcm9qZWN0TGlzdCIsImRhdGEiLCJwdXNoIiwidG9kb0xpc3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FB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LEVBQVU7QUFDNUJFLFlBQVEsQ0FBQ0QsSUFBVCxDQUFlL0IsSUFBSSxDQUFDOEIsSUFBRCxDQUFuQjtBQUNBLEdBRkQ7O0FBR0EsTUFBTUosV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QixXQUFPTSxRQUFQO0FBQ0EsR0FGRDs7QUFHQSxTQUFPO0FBQUVSLGNBQVUsRUFBVkEsVUFBRjtBQUFjRSxlQUFXLEVBQVhBO0FBQWQsR0FBUDtBQUNBLENBVHNCLEVBQXZCLEMsQ0FhQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlVGFnID0gKHsgdGFnLCBpZCwgY2xhc3NlcywgdGV4dCB9KSA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gICAgaWYoaWQpIG9iai5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGlmKGNsYXNzZXMpIHtcbiAgICAgIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBvYmouY2xhc3NMaXN0LmFkZChlbGVtKTtcbiAgXHRcdH0pXG4gICAgfVxuXHRcdGlmKHRleHQpIG9iai50ZXh0Q29udGVudCA9IHRleHQ7XG5cdFx0cmV0dXJuIG9iajtcbiAgfVxuICBjb25zdCBwcm9qZWN0R3JvdXAgPSBjcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAncHJvamVjdC1jb250ZW50LWdyb3VwJyB9KTtcbiAgY29uc3QgdG9kb0dyb3VwID0gY3JlYXRlVGFnKHsgdGFnOiAnZGl2JywgY2xhc3NlczogJ3RvZG8tY29udGVudC1ncm91cCcgfSk7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9ICh7IHByb2plY3ROYW1lIH0pID0+IHtcbiAgICAvLyByZWNlaXZlIHByb2plY3RcbiAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlVGFnKHsgdGFnOiAnZGl2JywgY2xhc3NlczogJ3Byb2plY3QgdGVzdC1wcm9qZWN0J30pO1xuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBwcm9qZWN0R3JvdXAuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cdH1cblxuXHRjb25zdCBhZGRUb2RvID0gKHsgdGl0bGUgfSkgPT4ge1xuXHRcdGNvbnN0IHRvZG8gPSBjcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAndG8tZG8nfSk7XG5cdFx0Y29uc3QgdGl0bGVUYWcgPSBjcmVhdGVUYWcoeyB0YWc6ICdoNCcsIHRleHQ6IHRpdGxlfSk7XG5cblx0XHR0b2RvLmFwcGVuZENoaWxkKHRpdGxlVGFnKTtcblx0XHR0b2RvR3JvdXAuYXBwZW5kQ2hpbGQodG9kbyk7XG5cdH1cblxuICBjb25zdCBoZWFkZXJTZXQgPSAoaGVhZGVyLCB3b3JkKSA9PiB7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhZyh7IHRhZzogJ2gxJywgY2xhc3NlczogJ2gtdGl0bGUnIH0pKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFnKHsgdGFnOiAnaDEnLCBjbGFzc2VzOiAnY3JlYXRlLWZvcm0nLCB0ZXh0OiAnKycgfSkpO1xuICB9XG5cbiAgY29uc3QgcHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVRhZyh7IHRhZzogJ2Zvcm0nLCBjbGFzc2VzOiAncHJvamVjdC1mb3JtJyB9KTtcbiAgICBjb25zdCBmaWVsZHNldCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2ZpZWxkc2V0JyB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdwcm9qZWN0IG5hbWUnKTtcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cblxuICBjb25zdCB0b2RvRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlVGFnKHsgdGFnOiAnZm9ybScsIGNsYXNzZXM6ICd0b2RvLWZvcm0nIH0pO1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gY3JlYXRlVGFnKHsgdGFnOiAnZmllbGRzZXQnIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3RpdGxlJyk7XG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2RhdGUnKTtcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIGNvbnN0IHNldE1haW5EaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVUYWcoeyB0YWc6ICdzZWN0aW9uJywgaWQ6ICdwcm9qZWN0JywgY2xhc3NlczogJ2NvbC1tZC00IGgtMTAwIHRlc3QtcmVkLWJnJ30pO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBjcmVhdGVUYWcoeyB0YWc6ICdzZWN0aW9uJywgaWQ6ICd0b2RvJywgY2xhc3NlczogJ2NvbC1tZC04IGgtMTAwIHRlc3QtYmx1ZS1iZyd9KTtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgICBoZWFkZXJTZXQocHJvamVjdENvbnRhaW5lciwgJ1Byb2plY3QnKTtcbiAgICBoZWFkZXJTZXQodG9kb0NvbnRhaW5lciwgJ1RvZG8nKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RHcm91cCk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvR3JvdXApO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0oKSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRm9ybSgpKTtcblxuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xuICB9XG5cbiAgcmV0dXJuIHsgc2V0TWFpbkRpc3BsYXksIGFkZFByb2plY3QsIGFkZFRvZG8gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXk7XG4iLCJpbXBvcnQgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXknXG5pbXBvcnQgeyBwcm9qZWN0Q29udHJvbGxlciwgdG9kb0NvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxpdGllcydcblxuY29uc3QgZmFjdG9yeVByb2plY3QgPSBbXG5cdHsgcHJvamVjdE5hbWU6ICdmaXJzdCBwcm9qZWN0JyB9LFxuXHR7IHByb2plY3ROYW1lOiAnc2Vjb25kIHByb2plY3QnIH0sXG5dO1xuXG5jb25zdCB0b2RvUHJvamVjdCA9IFtcblx0e1xuXHRcdHRpdGxlOiAnZmlyc3QgcHJvamVjdCBvbmUnLFxuXHRcdHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcsXG5cdFx0ZGF0ZTogJzAzL25vdi8yMDE5Jyxcblx0fSxcblx0e1xuXHRcdHRpdGxlOiAnZmlyc3QgcHJvamVjdCB0d28nLFxuXHRcdHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcsXG5cdFx0ZGF0ZTogJzAzL25vdi8yMDE5Jyxcblx0fSxcblx0e1xuXHRcdHRpdGxlOiAnZmlyc3QgcHJvamVjdCB0aHJlZScsXG5cdFx0cHJvamVjdE5hbWU6ICdmaXJzdCBwcm9qZWN0Jyxcblx0XHRkYXRlOiAnMDMvbm92LzIwMTknLFxuXHR9LFxuXVxuXG4vLyBsb2NhbFxuLy8gZmlyc3QgcHJvamVjdCA9PSBjdXJyZW50IHByb2plY3QuXG5cbmRpc3BsYXkuc2V0TWFpbkRpc3BsYXkoKTtcbnByb2plY3RDb250cm9sbGVyLmNyZWF0ZVByb2plY3QoJ0ZpcnN0IFByb2plY3QnKTtcbmxldCB0ZXN0QXJyYXkgPSBwcm9qZWN0Q29udHJvbGxlci5nZXRQcm9qZWN0TGlzdCgpO1xuXG50ZXN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0ZGlzcGxheS5hZGRQcm9qZWN0KGVsZW1lbnQpO1xufSk7XG5cbnRvZG9Db250cm9sbGVyLmNyZWF0ZVRvZG8oeyB0aXRsZTogJ1RlbmRhIEFwcCd9KTtcbmxldCB0b2RvQXJyYXkgPSB0b2RvQ29udHJvbGxlci5nZXRUb2RvTGlzdCgpO1xudG9kb0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG5cdGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuXHRkaXNwbGF5LmFkZFRvZG8oZWxlbWVudCk7XG59KTtcbiIsIi8vIGNyZWF0ZSBwcm9qZWN0XG5jb25zdCBwcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG5cdHJldHVybiB7IHByb2plY3ROYW1lIH07XG59O1xuXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgoKSA9PiB7XG5cdGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXHRjb25zdCBjcmVhdGVQcm9qZWN0ID0gKGRhdGEpID0+IHtcblx0XHRwcm9qZWN0TGlzdC5wdXNoIChwcm9qZWN0KGRhdGEpKTtcblx0fTtcblxuXHRjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHtcblx0XHRyZXR1cm4gcHJvamVjdExpc3Q7XG5cdH07XG5cdHJldHVybiB7IGNyZWF0ZVByb2plY3QsIGdldFByb2plY3RMaXN0IH07XG5cbn0pKCk7XG5cbmNvbnN0IHRvZG8gPSAoeyB0aXRsZSB9KSA9PiB7XG5cdHJldHVybiB7IHRpdGxlIH07XG59O1xuXG5jb25zdCB0b2RvQ29udHJvbGxlciA9ICgoKSA9PiB7XG5cdGxldCB0b2RvTGlzdCA9IFtdO1xuXHRjb25zdCBjcmVhdGVUb2RvID0gKGRhdGEpID0+IHtcblx0XHR0b2RvTGlzdC5wdXNoICh0b2RvKGRhdGEpKTtcblx0fTtcblx0Y29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIHRvZG9MaXN0O1xuXHR9O1xuXHRyZXR1cm4geyBjcmVhdGVUb2RvLCBnZXRUb2RvTGlzdCB9O1xufSkoKTtcblxuXG5cbi8vIGFkZFByb2plY3QoeyB0aXRsZTogJ2EnIH0pO1xuLy8gYWRkUHJvamVjdCh7IHRpdGxlOiAnYicgfSk7XG4vLyBzZW5kaW5nIHRvIGRpc3BsYXk6IGNhbGxcblxuLy8gY3JlYXRlIHRvZG8gbGlzdFxuZXhwb3J0ICB7IHByb2plY3RDb250cm9sbGVyLCB0b2RvQ29udHJvbGxlciB9O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9