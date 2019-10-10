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
    var title = _ref3.title,
        date = _ref3.date;
    var todo = createTag({
      tag: 'div',
      classes: 'to-do'
    });
    var titleTag = createTag({
      tag: 'h4',
      text: title
    });
    var dateTag = createTag({
      tag: 'div',
      classes: 'date',
      text: date
    });
    todo.appendChild(titleTag);
    todo.appendChild(dateTag);
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
var factoryTodo = [{
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
}];
window.localStorage.setItem('project', JSON.stringify(factoryProject)); // console.log(JSON.parse(window.localStorage.getItem('project')));

window.localStorage.setItem('todo', JSON.stringify(factoryTodo)); // console.log(JSON.parse(window.localStorage.getItem('todo')));

window.localStorage.setItem('currentProject', 'first project');
_utilities__WEBPACK_IMPORTED_MODULE_1__["projectController"].setInfoFromStorage();
_utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].setInfoFromStorage();
_display__WEBPACK_IMPORTED_MODULE_0__["default"].setMainDisplay();
var testArray = _utilities__WEBPACK_IMPORTED_MODULE_1__["projectController"].getProjectList();
testArray.forEach(function (element) {
  _display__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(element);
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

  var setInfoFromStorage = function setInfoFromStorage() {
    projectList = JSON.parse(window.localStorage.getItem('project'));
  };

  return {
    createProject: createProject,
    getProjectList: getProjectList,
    setInfoFromStorage: setInfoFromStorage
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

  var setInfoFromStorage = function setInfoFromStorage() {
    todoList = JSON.parse(window.localStorage.getItem('todo'));
  };

  return {
    createTodo: createTodo,
    getTodoList: getTodoList,
    setInfoFromStorage: setInfoFromStorage
  };
}(); // addProject({ title: 'a' });
// addProject({ title: 'b' });
// sending to display: call
// create todo list




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMuanMiXSwibmFtZXMiOlsiZGlzcGxheSIsImNyZWF0ZVRhZyIsInRhZyIsImlkIiwiY2xhc3NlcyIsInRleHQiLCJvYmoiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdCIsImZvckVhY2giLCJlbGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJwcm9qZWN0R3JvdXAiLCJ0b2RvR3JvdXAiLCJhZGRQcm9qZWN0IiwicHJvamVjdE5hbWUiLCJwcm9qZWN0IiwiYXBwZW5kQ2hpbGQiLCJhZGRUb2RvIiwidGl0bGUiLCJkYXRlIiwidG9kbyIsInRpdGxlVGFnIiwiZGF0ZVRhZyIsImhlYWRlclNldCIsImhlYWRlciIsIndvcmQiLCJwcm9qZWN0Rm9ybSIsImZvcm0iLCJmaWVsZHNldCIsImlucHV0IiwidG9kb0Zvcm0iLCJzZXRNYWluRGlzcGxheSIsInByb2plY3RDb250YWluZXIiLCJ0b2RvQ29udGFpbmVyIiwibWFpbkNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJmYWN0b3J5UHJvamVjdCIsImZhY3RvcnlUb2RvIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9qZWN0Q29udHJvbGxlciIsInNldEluZm9Gcm9tU3RvcmFnZSIsInRvZG9Db250cm9sbGVyIiwidGVzdEFycmF5IiwiZ2V0UHJvamVjdExpc3QiLCJlbGVtZW50IiwidG9kb0FycmF5IiwiZ2V0VG9kb0xpc3QiLCJjb25zb2xlIiwibG9nIiwicHJvamVjdExpc3QiLCJjcmVhdGVQcm9qZWN0IiwiZGF0YSIsInB1c2giLCJwYXJzZSIsImdldEl0ZW0iLCJ0b2RvTGlzdCIs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R0EsU0FBTztBQUFFRSxjQUFVLEVBQVZBLFVBQUY7QUFBY1YsZUFBVyxFQUFYQSxXQUFkO0FBQTRCTixzQkFBa0IsRUFBbEJBO0FBQTVCLEdBQVA7QUFFQSxDQVhzQixFQUF2QixDLENBY0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgZGlzcGxheSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVRhZyA9ICh7XG4gICAgdGFnLCBpZCwgY2xhc3NlcywgdGV4dCxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgIGlmIChpZCkgb2JqLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgaWYgKGNsYXNzZXMpIHtcbiAgICAgIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIG9iai5jbGFzc0xpc3QuYWRkKGVsZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0ZXh0KSBvYmoudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBvYmo7XG4gIH07XG4gIGNvbnN0IHByb2plY3RHcm91cCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdwcm9qZWN0LWNvbnRlbnQtZ3JvdXAnIH0pO1xuICBjb25zdCB0b2RvR3JvdXAgPSBjcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAndG9kby1jb250ZW50LWdyb3VwJyB9KTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHsgcHJvamVjdE5hbWUgfSkgPT4ge1xuICAgIC8vIHJlY2VpdmUgcHJvamVjdFxuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAncHJvamVjdCB0ZXN0LXByb2plY3QnIH0pO1xuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBwcm9qZWN0R3JvdXAuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kbyA9ICh7IHRpdGxlICwgZGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICd0by1kbycgfSk7XG5cdFx0Y29uc3QgdGl0bGVUYWcgPSBjcmVhdGVUYWcoeyB0YWc6ICdoNCcsIHRleHQ6IHRpdGxlIH0pO1xuXHRcdGNvbnN0IGRhdGVUYWcgPSBjcmVhdGVUYWcoe3RhZzogJ2RpdicsIGNsYXNzZXM6ICdkYXRlJywgdGV4dDogZGF0ZX0pO1xuXG5cdFx0dG9kby5hcHBlbmRDaGlsZCh0aXRsZVRhZyk7XG5cdFx0dG9kby5hcHBlbmRDaGlsZChkYXRlVGFnKTtcblx0XHR0b2RvR3JvdXAuYXBwZW5kQ2hpbGQodG9kbyk7XG4gIH07XG5cbiAgY29uc3QgaGVhZGVyU2V0ID0gKGhlYWRlciwgd29yZCkgPT4ge1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUYWcoeyB0YWc6ICdoMScsIGNsYXNzZXM6ICdoLXRpdGxlJyB9KSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhZyh7IHRhZzogJ2gxJywgY2xhc3NlczogJ2NyZWF0ZS1mb3JtJywgdGV4dDogJysnIH0pKTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlVGFnKHsgdGFnOiAnZm9ybScsIGNsYXNzZXM6ICdwcm9qZWN0LWZvcm0nIH0pO1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gY3JlYXRlVGFnKHsgdGFnOiAnZmllbGRzZXQnIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3Byb2plY3QgbmFtZScpO1xuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfTtcblxuICBjb25zdCB0b2RvRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlVGFnKHsgdGFnOiAnZm9ybScsIGNsYXNzZXM6ICd0b2RvLWZvcm0nIH0pO1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gY3JlYXRlVGFnKHsgdGFnOiAnZmllbGRzZXQnIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3RpdGxlJyk7XG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2RhdGUnKTtcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4gZm9ybTtcbiAgfTtcblxuICBjb25zdCBzZXRNYWluRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlVGFnKHsgdGFnOiAnc2VjdGlvbicsIGlkOiAncHJvamVjdCcsIGNsYXNzZXM6ICdjb2wtbWQtNCBoLTEwMCB0ZXN0LXJlZC1iZycgfSk7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGNyZWF0ZVRhZyh7IHRhZzogJ3NlY3Rpb24nLCBpZDogJ3RvZG8nLCBjbGFzc2VzOiAnY29sLW1kLTggaC0xMDAgdGVzdC1ibHVlLWJnJyB9KTtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgICBoZWFkZXJTZXQocHJvamVjdENvbnRhaW5lciwgJ1Byb2plY3QnKTtcbiAgICBoZWFkZXJTZXQodG9kb0NvbnRhaW5lciwgJ1RvZG8nKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RHcm91cCk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvR3JvdXApO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0oKSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRm9ybSgpKTtcblxuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xuICB9O1xuXG4gIHJldHVybiB7IHNldE1haW5EaXNwbGF5LCBhZGRQcm9qZWN0LCBhZGRUb2RvIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xuIiwiaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5JztcbmltcG9ydCB7IHByb2plY3RDb250cm9sbGVyLCB0b2RvQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbGl0aWVzJztcblxuY29uc3QgZmFjdG9yeVByb2plY3QgPSBbXG4gIHsgcHJvamVjdE5hbWU6ICdmaXJzdCBwcm9qZWN0JyB9LFxuICB7IHByb2plY3ROYW1lOiAnc2Vjb25kIHByb2plY3QnIH0sXG5dO1xuXG5jb25zdCBmYWN0b3J5VG9kbyA9IFtcbiAge1xuICAgIHRpdGxlOiAnZmlyc3QgcHJvamVjdCBvbmUnLFxuICAgIHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcsXG4gICAgZGF0ZTogJzAzL25vdi8yMDE5JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnZmlyc3QgcHJvamVjdCB0d28nLFxuICAgIHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcsXG4gICAgZGF0ZTogJzAzL25vdi8yMDE5JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnZmlyc3QgcHJvamVjdCB0aHJlZScsXG4gICAgcHJvamVjdE5hbWU6ICdmaXJzdCBwcm9qZWN0JyxcbiAgICBkYXRlOiAnMDMvbm92LzIwMTknLFxuICB9LFxuXTtcblxud2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoZmFjdG9yeVByb2plY3QpKTtcblxuLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSkpO1xuXG53aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8nLCBKU09OLnN0cmluZ2lmeShmYWN0b3J5VG9kbykpO1xuLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSkpO1xuXG53aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0JywgJ2ZpcnN0IHByb2plY3QnKTtcblxucHJvamVjdENvbnRyb2xsZXIuc2V0SW5mb0Zyb21TdG9yYWdlKCk7XG50b2RvQ29udHJvbGxlci5zZXRJbmZvRnJvbVN0b3JhZ2UoKTtcblxuZGlzcGxheS5zZXRNYWluRGlzcGxheSgpO1xuY29uc3QgdGVzdEFycmF5ID0gcHJvamVjdENvbnRyb2xsZXIuZ2V0UHJvamVjdExpc3QoKTtcblxudGVzdEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZGlzcGxheS5hZGRQcm9qZWN0KGVsZW1lbnQpO1xufSk7XG5cbmNvbnN0IHRvZG9BcnJheSA9IHRvZG9Db250cm9sbGVyLmdldFRvZG9MaXN0KCk7XG50b2RvQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgZGlzcGxheS5hZGRUb2RvKGVsZW1lbnQpO1xufSk7XG4iLCIvLyBjcmVhdGUgcHJvamVjdFxuY29uc3QgcHJvamVjdCA9IHByb2plY3ROYW1lID0+ICh7IHByb2plY3ROYW1lIH0pO1xuXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKGRhdGEpID0+IHtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QoZGF0YSkpO1xuICB9O1xuXG5cdGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4gcHJvamVjdExpc3Q7XG5cdGNvbnN0IHNldEluZm9Gcm9tU3RvcmFnZSA9ICgpID0+IHtcblx0XHRwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0JykpO1xuXHR9O1xuXHRyZXR1cm4geyBjcmVhdGVQcm9qZWN0LCBnZXRQcm9qZWN0TGlzdCwgc2V0SW5mb0Zyb21TdG9yYWdlIH07XG59KSgpO1xuXG5jb25zdCB0b2RvID0gKHsgdGl0bGUgfSkgPT4gKHsgdGl0bGUgfSk7XG5cbmNvbnN0IHRvZG9Db250cm9sbGVyID0gKCgpID0+IHtcbiAgbGV0IHRvZG9MaXN0ID0gW107XG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoZGF0YSkgPT4ge1xuICAgIHRvZG9MaXN0LnB1c2godG9kbyhkYXRhKSk7XG4gIH07XG5cdGNvbnN0IGdldFRvZG9MaXN0ID0gKCkgPT4gdG9kb0xpc3Q7XG5cdGNvbnN0IHNldEluZm9Gcm9tU3RvcmFnZSA9ICgpID0+IHtcblx0XHR0b2RvTGlzdCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvJykpO1xuXHR9O1xuXHRyZXR1cm4geyBjcmVhdGVUb2RvLCBnZXRUb2RvTGlzdCAsIHNldEluZm9Gcm9tU3RvcmFnZSB9O1xuXG59KSgpO1xuXG5cbi8vIGFkZFByb2plY3QoeyB0aXRsZTogJ2EnIH0pO1xuLy8gYWRkUHJvamVjdCh7IHRpdGxlOiAnYicgfSk7XG4vLyBzZW5kaW5nIHRvIGRpc3BsYXk6IGNhbGxcblxuLy8gY3JlYXRlIHRvZG8gbGlzdFxuZXhwb3J0IHsgcHJvamVjdENvbnRyb2xsZXIsIHRvZG9Db250cm9sbGVyIH07XG4iXSwic291cmNlUm9vdCI6IiJ9