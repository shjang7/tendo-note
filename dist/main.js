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

  var getProjectId = function getProjectId() {
    var projectId = 1;

    if (window.localStorage.getItem('projectId')) {
      projectId = Number(window.localStorage.getItem('projectId')); // console.log(projectId);
    }

    window.localStorage.setItem('projectId', projectId + 1);
    return projectId;
  };

  var addProject = function addProject(_ref2) {
    var projectName = _ref2.projectName;
    var id = getProjectId();
    var project = createTag({
      tag: 'div',
      id: "project-".concat(id),
      classes: 'project-content'
    });
    project.textContent = projectName;
    projectGroup.appendChild(project);
  };

  var addTodo = function addTodo(_ref3) {
    var title = _ref3.title,
        date = _ref3.date;
    var todo = createTag({
      tag: 'div',
      classes: 'todo-content'
    });
    var titleTag = createTag({
      tag: 'h4',
      classes: 'title',
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
      classes: 'h-title',
      text: word
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
    var field = createTag({
      tag: 'div',
      classes: 'field'
    });
    var input = createTag({
      tag: 'input',
      classes: 'project-name'
    });
    input.setAttribute('placeholder', 'project name');
    field.appendChild(input);
    fieldset.appendChild(field);
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
    var field = createTag({
      tag: 'div',
      classes: 'field'
    });
    var input = createTag({
      tag: 'input',
      classes: 'title'
    });
    input.setAttribute('placeholder', 'title');
    field.appendChild(input);
    fieldset.appendChild(field);
    field = createTag({
      tag: 'div',
      classes: 'field'
    });
    input = createTag({
      tag: 'input',
      classes: 'date'
    });
    input.setAttribute('placeholder', 'date');
    field.appendChild(input);
    fieldset.appendChild(field);
    return form;
  };

  var getProjectList = function getProjectList() {
    return projectGroup.childNodes;
  };

  var updateCurrentProject = function updateCurrentProject(newTag) {
    var previous = projectGroup.querySelector('.current-project');

    if (previous) {
      previous.classList.remove('current-project');
    }

    newTag.classList.add('current-project');
    return newTag.id;
  };

  var setMainDisplay = function setMainDisplay() {
    var projectContainer = createTag({
      tag: 'section',
      id: 'project',
      classes: 'col-md-4 primary-bg'
    });
    var todoContainer = createTag({
      tag: 'section',
      id: 'todo',
      classes: 'col-md-8 secondary-bg'
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
    addTodo: addTodo,
    getProjectList: getProjectList,
    updateCurrentProject: updateCurrentProject
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
}]; // window.localStorage.setItem('project', JSON.stringify(factoryProject));
//
// // console.log(JSON.parse(window.localStorage.getItem('project')));
//
// window.localStorage.setItem('todo', JSON.stringify(factoryTodo));
// // console.log(JSON.parse(window.localStorage.getItem('todo')));
//

window.localStorage.setItem('currentProject', 'project-1');
_utilities__WEBPACK_IMPORTED_MODULE_1__["projectController"].setInfoFromStorage();
_utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].setInfoFromStorage();
_display__WEBPACK_IMPORTED_MODULE_0__["default"].setMainDisplay(); /////

var testArray = _utilities__WEBPACK_IMPORTED_MODULE_1__["projectController"].getProjectList();
testArray.forEach(function (element) {
  _display__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(element);
});
var todoArray = _utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].getTodoListForProject();
todoArray.forEach(function (element) {
  // console.log(element);
  _display__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo(element);
}); ////

var updateCurrentProject = function updateCurrentProject(tag) {
  var projectId = _display__WEBPACK_IMPORTED_MODULE_0__["default"].updateCurrentProject(tag);
  _utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].updateTodoListForProject(projectId);
  var todoArray = _utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].getTodoListForProject();
  todoArray.forEach(function (element) {
    // console.log(element);
    _display__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo(element);
  });
};

var createEvents = function createEvents(word) {
  if (word === 'project') {
    var tags = _display__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectList();
    console.log(tags);

    if (tags.length > 0) {
      tags.forEach(function (tag) {
        tag.addEventListener('click', function () {
          return updateCurrentProject(tag);
        });
      });
      updateCurrentProject(tags[tags.length - 1]);
    }
  }
};

['project', 'todo'].forEach(function (word) {
  return createEvents(word);
}); // setCurrentProject();

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
var project = function project(_ref) {
  var projectName = _ref.projectName,
      projectId = _ref.projectId;
  return {
    projectName: projectName,
    projectId: projectId
  };
};

var projectController = function () {
  var projectList = [{
    projectName: 'first project',
    projectId: 'project-1'
  }, {
    projectName: 'second project',
    projectId: 'project-2'
  }];

  var addProjectList = function addProjectList(data) {
    projectList.push(project(data));
  };

  var getProjectList = function getProjectList() {
    return projectList;
  };

  var setInfoFromStorage = function setInfoFromStorage() {
    if (window.localStorage.getItem('project')) {
      projectList = JSON.parse(window.localStorage.getItem('project'));
    }
  };

  return {
    addProjectList: addProjectList,
    getProjectList: getProjectList,
    setInfoFromStorage: setInfoFromStorage
  };
}();

var todo = function todo(_ref2) {
  var title = _ref2.title,
      projectId = _ref2.projectId,
      date = _ref2.date;
  return {
    title: title,
    projectId: projectId,
    date: date
  };
};

var todoController = function () {
  var todoList = [{
    title: 'first project one',
    projectId: 'project-1',
    date: '03/nov/2019'
  }, {
    title: 'first project two',
    projectId: 'project-2',
    date: '03/nov/2019'
  }, {
    title: 'second project one',
    projectId: 'project-3',
    date: '03/nov/2019'
  }];
  var todoListForProject = [];

  var addTodoList = function addTodoList(data) {
    todoList.push(todo(data));
  };

  var updateTodoListForProject = function updateTodoListForProject(id) {
    todoListForProject = [];
    todoList.forEach(function (element) {
      console.log('for', id, element.projectId);

      if (id === element.projectId) {
        todoListForProject.push(element);
      }
    });
  };

  var getTodoList = function getTodoList() {
    return todoList;
  };

  var getTodoListForProject = function getTodoListForProject() {
    return todoListForProject;
  };

  var setInfoFromStorage = function setInfoFromStorage() {
    if (window.localStorage.getItem('todo')) {
      todoList = JSON.parse(window.localStorage.getItem('todo'));
    }
  };

  return {
    addTodoList: addTodoList,
    getTodoList: getTodoList,
    setInfoFromStorage: setInfoFromStorage,
    updateTodoListForProject: updateTodoListForProject,
    getTodoListForProject: getTodoListForProject
  };
}(); // addProject({ title: 'a' });
// addProject({ title: 'b' });
// sending to display: call
// create todo list




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMuanMiXSwibmFtZXMiOlsiZGlzcGxheSIsImNyZWF0ZVRhZyIsInRhZyIsImlkIiwiY2xhc3NlcyIsInRleHQiLCJvYmoiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdCIsImZvckVhY2giLCJlbGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJwcm9qZWN0R3JvdXAiLCJ0b2RvR3JvdXAiLCJnZXRQcm9qZWN0SWQiLCJwcm9qZWN0SWQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTnVtYmVyIiwic2V0SXRlbSIsImFkZFByb2plY3QiLCJwcm9qZWN0TmFtZSIsInByb2plY3QiLCJhcHBlbmRDaGlsZCIsImFkZFRvZG8iLCJ0aXRsZSIsImRhdGUiLCJ0b2RvIiwidGl0bGVUYWciLCJkYXRlVGFnIiwiaGVhZGVyU2V0IiwiaGVhZGVyIiwid29yZCIsInByb2plY3RGb3JtIiwiZm9ybSIsImZpZWxkc2V0IiwiZmllbGQiLCJpbnB1dCIsInRvZG9Gb3JtIiwiZ2V0UHJvamVjdExpc3QiLCJjaGlsZE5vZGVzIiwidXBkYXRlQ3VycmVudFByb2plY3QiLCJuZXdUYWciLCJwcmV2aW91cyIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJzZXRNYWluRGlzcGxheSIsInByb2plY3RDb250YWluZXIiLCJ0b2RvQ29udGFpbmVyIiwibWFpbkNvbnRhaW5lciIsImZhY3RvcnlQcm9qZWN0IiwiZmFjdG9yeVRvZG8iLCJwcm9qZWN0Q29udHJvbGxlciIsInNldEluZm9Gcm9tU3RvcmFnZSIsInRvZG9Db250cm9sbGVyIiwidGVzdEFycmF5IiwiZWxlbWVudCIsInRvZG9BcnJheSIsImdldFRvZG9MaXN0Rm9yUHJvamVjdCIsInVwZGF0ZVRvZG9MaXN0Rm9yUHJvamVjdCIsImNyZWF0ZUV2ZW50cyIsInRhZ3MiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2plY3RMaXN0IiwiYWRkUHJvamVjdExpc3QiLCJkYXRhIiwicHVzaCIsIkpTT04iLCJwYXJzZSIsInRvZG9MaXN0IiwidG9kb0xpc3RGb3JQcm9qZWN0IiwiYWRkVG9kb0xpc3QiLCJnZXRUb2RvTGlzdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBLElBQU1BLE9BQU8sR0FBSSxZQUFNO0FBQ3JCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BRVo7QUFBQSxRQURKQyxHQUNJLFFBREpBLEdBQ0k7QUFBQSxRQURDQyxFQUNELFFBRENBLEVBQ0Q7QUFBQSxRQURLQyxPQUNMLFFBREtBLE9BQ0w7QUFBQSxRQURjQyxJ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L0I7O0FBQ0EsVUFBSWhCLEVBQUUsS0FBSzBELE9BQU8sQ0FBQzFDLFNBQW5CLEVBQThCO0FBQzVCMkQsMEJBQWtCLENBQUNKLElBQW5CLENBQXdCYixPQUF4QjtBQUNEO0FBQ0YsS0FMRDtBQU1ELEdBUkQ7O0FBU0QsTUFBTW1CLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTUgsUUFBTjtBQUFBLEdBQXBCOztBQUNDLE1BQU1kLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0I7QUFBQSxXQUFNZSxrQkFBTjtBQUFBLEdBQTlCOztBQUNELE1BQU1wQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDOUIsUUFBR3RDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBSCxFQUF3QztBQUN4Q3VELGNBQVEsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVd4RCxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCLENBQVgsQ0FBWDtBQUNDO0FBQ0gsR0FKRDs7QUFLQSxTQUFPO0FBQ0p5RCxlQUFXLEVBQVhBLFdBREk7QUFDU0MsZUFBVyxFQUFYQSxXQURUO0FBQ3VCdEIsc0JBQWtCLEVBQWxCQSxrQkFEdkI7QUFDMkNNLDRCQUF3QixFQUF4QkEsd0JBRDNDO0FBRUpELHlCQUFxQixFQUFyQkE7QUFGSSxHQUFQO0FBS0EsQ0E1Q3NCLEVBQXZCLEMsQ0ErQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgZGlzcGxheSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVRhZyA9ICh7XG4gICAgdGFnLCBpZCwgY2xhc3NlcywgdGV4dCxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgIGlmIChpZCkgb2JqLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgaWYgKGNsYXNzZXMpIHtcbiAgICAgIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIG9iai5jbGFzc0xpc3QuYWRkKGVsZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0ZXh0KSBvYmoudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBvYmo7XG4gIH07XG4gIGNvbnN0IHByb2plY3RHcm91cCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdwcm9qZWN0LWNvbnRlbnQtZ3JvdXAnIH0pO1xuICBjb25zdCB0b2RvR3JvdXAgPSBjcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAndG9kby1jb250ZW50LWdyb3VwJyB9KTtcblxuICBjb25zdCBnZXRQcm9qZWN0SWQgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RJZCA9IDE7XG4gICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdElkJykpIHtcbiAgICAgIHByb2plY3RJZCA9IE51bWJlcih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RJZCcpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RJZCk7XG4gICAgfVxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdElkJywgcHJvamVjdElkICsgMSk7XG4gICAgcmV0dXJuIHByb2plY3RJZDtcbiAgfVxuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAoeyBwcm9qZWN0TmFtZSB9KSA9PiB7XG4gICAgY29uc3QgaWQgPSBnZXRQcm9qZWN0SWQoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlVGFnKHsgdGFnOiAnZGl2JywgaWQ6IGBwcm9qZWN0LSR7aWR9YCwgY2xhc3NlczogJ3Byb2plY3QtY29udGVudCcgfSk7XG5cbiAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgcHJvamVjdEdyb3VwLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAoeyB0aXRsZSAsIGRhdGUgfSkgPT4ge1xuICAgIGNvbnN0IHRvZG8gPSBjcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAndG9kby1jb250ZW50JyB9KTtcblx0XHRjb25zdCB0aXRsZVRhZyA9IGNyZWF0ZVRhZyh7IHRhZzogJ2g0JywgY2xhc3NlczogJ3RpdGxlJywgdGV4dDogdGl0bGUgfSk7XG5cdFx0Y29uc3QgZGF0ZVRhZyA9IGNyZWF0ZVRhZyh7dGFnOiAnZGl2JywgY2xhc3NlczogJ2RhdGUnLCB0ZXh0OiBkYXRlfSk7XG5cblx0XHR0b2RvLmFwcGVuZENoaWxkKHRpdGxlVGFnKTtcblx0XHR0b2RvLmFwcGVuZENoaWxkKGRhdGVUYWcpO1xuXHRcdHRvZG9Hcm91cC5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgfTtcblxuICBjb25zdCBoZWFkZXJTZXQgPSAoaGVhZGVyLCB3b3JkKSA9PiB7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhZyh7IHRhZzogJ2gxJywgY2xhc3NlczogJ2gtdGl0bGUnLCB0ZXh0OiB3b3JkIH0pKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFnKHsgdGFnOiAnaDEnLCBjbGFzc2VzOiAnY3JlYXRlLWZvcm0nLCB0ZXh0OiAnKycgfSkpO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVUYWcoeyB0YWc6ICdmb3JtJywgY2xhc3NlczogJ3Byb2plY3QtZm9ybScgfSk7XG4gICAgY29uc3QgZmllbGRzZXQgPSBjcmVhdGVUYWcoeyB0YWc6ICdmaWVsZHNldCcgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG4gICAgbGV0IGZpZWxkID0gY3JlYXRlVGFnKHsgdGFnOiAnZGl2JywgY2xhc3NlczogJ2ZpZWxkJyB9KTtcbiAgICBsZXQgaW5wdXQgPSBjcmVhdGVUYWcoeyB0YWc6ICdpbnB1dCcsIGNsYXNzZXM6ICdwcm9qZWN0LW5hbWUnIH0pO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAncHJvamVjdCBuYW1lJyk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGZpZWxkKTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfTtcblxuICBjb25zdCB0b2RvRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlVGFnKHsgdGFnOiAnZm9ybScsIGNsYXNzZXM6ICd0b2RvLWZvcm0nIH0pO1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gY3JlYXRlVGFnKHsgdGFnOiAnZmllbGRzZXQnIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuICAgIGxldCBmaWVsZCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdmaWVsZCcgfSk7XG4gICAgbGV0IGlucHV0ID0gY3JlYXRlVGFnKHsgdGFnOiAnaW5wdXQnLCBjbGFzc2VzOiAndGl0bGUnIH0pO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAndGl0bGUnKTtcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZmllbGQpO1xuXG4gICAgZmllbGQgPSBjcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAnZmllbGQnIH0pO1xuICAgIGlucHV0ID0gY3JlYXRlVGFnKHsgdGFnOiAnaW5wdXQnLCBjbGFzc2VzOiAnZGF0ZScgfSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdkYXRlJyk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGZpZWxkKTtcblxuICAgIHJldHVybiBmb3JtO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0R3JvdXAuY2hpbGROb2RlcztcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZUN1cnJlbnRQcm9qZWN0ID0gKG5ld1RhZykgPT4ge1xuICAgIGNvbnN0IHByZXZpb3VzID0gcHJvamVjdEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXByb2plY3QnKTtcbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgIHByZXZpb3VzLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtcHJvamVjdCcpO1xuICAgIH1cbiAgICBuZXdUYWcuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wcm9qZWN0Jyk7XG4gICAgcmV0dXJuIG5ld1RhZy5pZDtcbiAgfVxuXG4gIGNvbnN0IHNldE1haW5EaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVUYWcoeyB0YWc6ICdzZWN0aW9uJywgaWQ6ICdwcm9qZWN0JywgY2xhc3NlczogJ2NvbC1tZC00IHByaW1hcnktYmcnIH0pO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBjcmVhdGVUYWcoeyB0YWc6ICdzZWN0aW9uJywgaWQ6ICd0b2RvJywgY2xhc3NlczogJ2NvbC1tZC04IHNlY29uZGFyeS1iZycgfSk7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gICAgaGVhZGVyU2V0KHByb2plY3RDb250YWluZXIsICdQcm9qZWN0Jyk7XG4gICAgaGVhZGVyU2V0KHRvZG9Db250YWluZXIsICdUb2RvJyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0R3JvdXApO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0dyb3VwKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKCkpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Zvcm0oKSk7XG5cbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldE1haW5EaXNwbGF5LCBhZGRQcm9qZWN0LCBhZGRUb2RvLCBnZXRQcm9qZWN0TGlzdCwgdXBkYXRlQ3VycmVudFByb2plY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xuIiwiaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5JztcbmltcG9ydCB7IHByb2plY3RDb250cm9sbGVyLCB0b2RvQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbGl0aWVzJztcblxuY29uc3QgZmFjdG9yeVByb2plY3QgPSBbXG4gIHsgcHJvamVjdE5hbWU6ICdmaXJzdCBwcm9qZWN0JyB9LFxuICB7IHByb2plY3ROYW1lOiAnc2Vjb25kIHByb2plY3QnIH0sXG5dO1xuXG5jb25zdCBmYWN0b3J5VG9kbyA9IFtcbiAge1xuICAgIHRpdGxlOiAnZmlyc3QgcHJvamVjdCBvbmUnLFxuICAgIHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcsXG4gICAgZGF0ZTogJzAzL25vdi8yMDE5JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnZmlyc3QgcHJvamVjdCB0d28nLFxuICAgIHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcsXG4gICAgZGF0ZTogJzAzL25vdi8yMDE5JyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnZmlyc3QgcHJvamVjdCB0aHJlZScsXG4gICAgcHJvamVjdE5hbWU6ICdmaXJzdCBwcm9qZWN0JyxcbiAgICBkYXRlOiAnMDMvbm92LzIwMTknLFxuICB9LFxuXTtcblxuLy8gd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoZmFjdG9yeVByb2plY3QpKTtcbi8vXG4vLyAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpKSk7XG4vL1xuLy8gd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgSlNPTi5zdHJpbmdpZnkoZmFjdG9yeVRvZG8pKTtcbi8vIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvJykpKTtcbi8vXG53aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0JywgJ3Byb2plY3QtMScpO1xuXG5wcm9qZWN0Q29udHJvbGxlci5zZXRJbmZvRnJvbVN0b3JhZ2UoKTtcbnRvZG9Db250cm9sbGVyLnNldEluZm9Gcm9tU3RvcmFnZSgpO1xuXG5kaXNwbGF5LnNldE1haW5EaXNwbGF5KCk7XG4vLy8vL1xuXG5jb25zdCB0ZXN0QXJyYXkgPSBwcm9qZWN0Q29udHJvbGxlci5nZXRQcm9qZWN0TGlzdCgpO1xuXG50ZXN0QXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBkaXNwbGF5LmFkZFByb2plY3QoZWxlbWVudCk7XG59KTtcblxuY29uc3QgdG9kb0FycmF5ID0gdG9kb0NvbnRyb2xsZXIuZ2V0VG9kb0xpc3RGb3JQcm9qZWN0KCk7XG50b2RvQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgZGlzcGxheS5hZGRUb2RvKGVsZW1lbnQpO1xufSk7XG4vLy8vXG5cbmNvbnN0IHVwZGF0ZUN1cnJlbnRQcm9qZWN0ID0gKHRhZykgPT4ge1xuICBjb25zdCBwcm9qZWN0SWQgPSBkaXNwbGF5LnVwZGF0ZUN1cnJlbnRQcm9qZWN0KHRhZyk7XG4gIHRvZG9Db250cm9sbGVyLnVwZGF0ZVRvZG9MaXN0Rm9yUHJvamVjdChwcm9qZWN0SWQpO1xuICBjb25zdCB0b2RvQXJyYXkgPSB0b2RvQ29udHJvbGxlci5nZXRUb2RvTGlzdEZvclByb2plY3QoKTtcbiAgdG9kb0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICBkaXNwbGF5LmFkZFRvZG8oZWxlbWVudCk7XG4gIH0pO1xuXG59XG5cbmNvbnN0IGNyZWF0ZUV2ZW50cyA9ICh3b3JkKSA9PiB7XG4gIGlmICh3b3JkID09PSAncHJvamVjdCcpIHtcbiAgICBjb25zdCB0YWdzID0gZGlzcGxheS5nZXRQcm9qZWN0TGlzdCgpO1xuICAgIGNvbnNvbGUubG9nKHRhZ3MpO1xuICAgIGlmICh0YWdzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgICB0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB1cGRhdGVDdXJyZW50UHJvamVjdCh0YWcpKTtcbiAgICAgIH0pXG4gICAgICB1cGRhdGVDdXJyZW50UHJvamVjdCh0YWdzW3RhZ3MubGVuZ3RoIC0gMV0pO1xuICAgIH1cbiAgfVxuXG59XG5cblsncHJvamVjdCcsICd0b2RvJ10uZm9yRWFjaCh3b3JkID0+IGNyZWF0ZUV2ZW50cyh3b3JkKSk7XG5cbi8vIHNldEN1cnJlbnRQcm9qZWN0KCk7XG4iLCIvLyBjcmVhdGUgcHJvamVjdFxuY29uc3QgcHJvamVjdCA9ICh7IHByb2plY3ROYW1lLCBwcm9qZWN0SWQgfSkgPT4gKHsgcHJvamVjdE5hbWUsIHByb2plY3RJZCB9KTtcblxuY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBsZXQgcHJvamVjdExpc3QgPSBbXG4gICAgeyBwcm9qZWN0TmFtZTogJ2ZpcnN0IHByb2plY3QnLCBwcm9qZWN0SWQ6ICdwcm9qZWN0LTEnIH0sXG4gICAgeyBwcm9qZWN0TmFtZTogJ3NlY29uZCBwcm9qZWN0JywgcHJvamVjdElkOiAncHJvamVjdC0yJyB9LFxuICBdO1xuICBjb25zdCBhZGRQcm9qZWN0TGlzdCA9IChkYXRhKSA9PiB7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KGRhdGEpKTtcbiAgfTtcblxuXHRjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHByb2plY3RMaXN0O1xuXHRjb25zdCBzZXRJbmZvRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpKSB7XG4gICAgICBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0JykpO1xuICAgIH1cblx0fTtcblx0cmV0dXJuIHsgYWRkUHJvamVjdExpc3QsIGdldFByb2plY3RMaXN0LCBzZXRJbmZvRnJvbVN0b3JhZ2UgfTtcbn0pKCk7XG5cbmNvbnN0IHRvZG8gPSAoeyB0aXRsZSwgcHJvamVjdElkLCBkYXRlIH0pID0+ICh7IHRpdGxlLCBwcm9qZWN0SWQsIGRhdGUgfSk7XG5cbmNvbnN0IHRvZG9Db250cm9sbGVyID0gKCgpID0+IHtcbiAgbGV0IHRvZG9MaXN0ID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnZmlyc3QgcHJvamVjdCBvbmUnLFxuICAgICAgcHJvamVjdElkOiAncHJvamVjdC0xJyxcbiAgICAgIGRhdGU6ICcwMy9ub3YvMjAxOScsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ2ZpcnN0IHByb2plY3QgdHdvJyxcbiAgICAgIHByb2plY3RJZDogJ3Byb2plY3QtMicsXG4gICAgICBkYXRlOiAnMDMvbm92LzIwMTknLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdzZWNvbmQgcHJvamVjdCBvbmUnLFxuICAgICAgcHJvamVjdElkOiAncHJvamVjdC0zJyxcbiAgICAgIGRhdGU6ICcwMy9ub3YvMjAxOScsXG4gICAgfSxcbiAgXTtcbiAgbGV0IHRvZG9MaXN0Rm9yUHJvamVjdCA9IFtdO1xuXG4gIGNvbnN0IGFkZFRvZG9MaXN0ID0gKGRhdGEpID0+IHtcbiAgICB0b2RvTGlzdC5wdXNoKHRvZG8oZGF0YSkpO1xuICB9O1xuICBjb25zdCB1cGRhdGVUb2RvTGlzdEZvclByb2plY3QgPSAoaWQpID0+IHtcbiAgICB0b2RvTGlzdEZvclByb2plY3QgPSBbXTtcbiAgICB0b2RvTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2ZvcicsIGlkLCBlbGVtZW50LnByb2plY3RJZCk7XG4gICAgICBpZiAoaWQgPT09IGVsZW1lbnQucHJvamVjdElkKSB7XG4gICAgICAgIHRvZG9MaXN0Rm9yUHJvamVjdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pXG4gIH07XG5cdGNvbnN0IGdldFRvZG9MaXN0ID0gKCkgPT4gdG9kb0xpc3Q7XG4gIGNvbnN0IGdldFRvZG9MaXN0Rm9yUHJvamVjdCA9ICgpID0+IHRvZG9MaXN0Rm9yUHJvamVjdDtcblx0Y29uc3Qgc2V0SW5mb0Zyb21TdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKSB7XG4gIFx0XHR0b2RvTGlzdCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvJykpO1xuICAgIH1cblx0fTtcblx0cmV0dXJuIHtcbiAgICBhZGRUb2RvTGlzdCwgZ2V0VG9kb0xpc3QgLCBzZXRJbmZvRnJvbVN0b3JhZ2UsIHVwZGF0ZVRvZG9MaXN0Rm9yUHJvamVjdCxcbiAgICBnZXRUb2RvTGlzdEZvclByb2plY3QsXG4gIH07XG5cbn0pKCk7XG5cblxuLy8gYWRkUHJvamVjdCh7IHRpdGxlOiAnYScgfSk7XG4vLyBhZGRQcm9qZWN0KHsgdGl0bGU6ICdiJyB9KTtcbi8vIHNlbmRpbmcgdG8gZGlzcGxheTogY2FsbFxuXG4vLyBjcmVhdGUgdG9kbyBsaXN0XG5leHBvcnQgeyBwcm9qZWN0Q29udHJvbGxlciwgdG9kb0NvbnRyb2xsZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=