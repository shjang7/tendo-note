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
    var projectName = _ref2.projectName,
        _ref2$projectId = _ref2.projectId,
        projectId = _ref2$projectId === void 0 ? 0 : _ref2$projectId;
    if (projectId === 0) projectId = getProjectId();
    var project = createTag({
      tag: 'div',
      id: "".concat(projectId),
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

  var addProjectGroup = function addProjectGroup(projectArray) {
    projectArray.forEach(function (element) {
      addProject(element);
    });
  };

  var addTodoGroup = function addTodoGroup(todoArray) {
    // remove()
    while (todoGroup.firstChild) {
      todoGroup.removeChild(todoGroup.firstChild);
    }

    ;
    todoArray.forEach(function (element) {
      // console.log(element);
      addTodo(element);
    }); ////
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
    getProjectList: getProjectList,
    updateCurrentProject: updateCurrentProject,
    addTodoGroup: addTodoGroup,
    addProjectGroup: addProjectGroup
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

var projectArray = _utilities__WEBPACK_IMPORTED_MODULE_1__["projectController"].getProjectList();
_display__WEBPACK_IMPORTED_MODULE_0__["default"].addProjectGroup(projectArray);
var todoArray = _utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].getTodoListForProject();
_display__WEBPACK_IMPORTED_MODULE_0__["default"].addTodoGroup(todoArray);

var updateCurrentProject = function updateCurrentProject(tag) {
  var projectId = _display__WEBPACK_IMPORTED_MODULE_0__["default"].updateCurrentProject(tag);
  _utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].updateTodoListForProject(projectId);
  var todoArray = _utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].getTodoListForProject(); // console.log(element);

  _display__WEBPACK_IMPORTED_MODULE_0__["default"].addTodoGroup(todoArray);
};

var createEvents = function createEvents(word) {
  if (word === 'project') {
    var tags = _display__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectList();

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
    projectId: 'project-1',
    date: '03/nov/2019'
  }, {
    title: 'second project one',
    projectId: 'project-2',
    date: '03/nov/2019'
  }];
  var todoListForProject = [];

  var addTodoList = function addTodoList(data) {
    todoList.push(todo(data));
  };

  var updateTodoListForProject = function updateTodoListForProject(id) {
    todoListForProject = [];
    todoList.forEach(function (element) {
      console.log(id, element.projectId);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMuanMiXSwibmFtZXMiOlsiZGlzcGxheSIsImNyZWF0ZVRhZyIsInRhZyIsImlkIiwiY2xhc3NlcyIsInRleHQiLCJvYmoiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdCIsImZvckVhY2giLCJlbGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJwcm9qZWN0R3JvdXAiLCJ0b2RvR3JvdXAiLCJnZXRQcm9qZWN0SWQiLCJwcm9qZWN0SWQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTnVtYmVyIiwic2V0SXRlbSIsImFkZFByb2plY3QiLCJwcm9qZWN0TmFtZSIsInByb2plY3QiLCJhcHBlbmRDaGlsZCIsImFkZFRvZG8iLCJ0aXRsZSIsImRhdGUiLCJ0b2RvIiwidGl0bGVUYWciLCJkYXRlVGFnIiwiYWRkUHJvamVjdEdyb3VwIiwicHJvamVjdEFycmF5IiwiZWxlbWVudCIsImFkZFRvZG9Hcm91cCIsInRvZG9BcnJheSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImhlYWRlclNldCIsImhlYWRlciIsIndvcmQiLCJwcm9qZWN0Rm9ybSIsImZvcm0iLCJmaWVsZHNldCIsImZpZWxkIiwiaW5wdXQiLCJ0b2RvRm9ybSIsImdldFByb2plY3RMaXN0IiwiY2hpbGROb2RlcyIsInVwZGF0ZUN1cnJlbnRQcm9qZWN0IiwibmV3VGFnIiwicHJldmlvdXMiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwic2V0TWFpbkRpc3BsYXkiLCJwcm9qZWN0Q29udGFpbmVyIiwidG9kb0NvbnRhaW5lciIsIm1haW5Db250YWluZXIiLCJmYWN0b3J5UHJvamVjdCIsImZhY3RvcnlUb2RvIiwicHJvamVjdENvbnRyb2xsZXIiLCJzZXRJbmZvRnJvbVN0b3JhZ2UiLCJ0b2RvQ29udHJvbGxlciIsImdldFRvZG9MaXN0Rm9yUHJvamVjdCIsInVwZGF0ZVRvZG9MaXN0Rm9yUHJvamVjdCIsImNyZWF0ZUV2ZW50cyIsInRhZ3MiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvamVjdExpc3QiLCJhZGRQcm9qZWN0TGlzdCIsImRhdGEiLCJwdXNoIiwiSlNPTiIsInBhcnNlIiwidG9kb0xpc3QiLCJ0b2RvTGlzdEZvclByb2plY3QiLCJhZGRUb2RvTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJnZXRUb2RvTGlzdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBLElBQU1BLE9BQU8sR0FBSSxZQUFNO0FBQ3JCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BRVo7QUFBQSxRQURKQyxHQUNJLFFBREpBLEdBQ0k7QUFB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c0JBQWtCLEVBQWxCQSxrQkFEdkI7QUFDMkNHLDRCQUF3QixFQUF4QkEsd0JBRDNDO0FBRUpELHlCQUFxQixFQUFyQkE7QUFGSSxHQUFQO0FBS0EsQ0E1Q3NCLEVBQXZCLEMsQ0ErQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgZGlzcGxheSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVRhZyA9ICh7XG4gICAgdGFnLCBpZCwgY2xhc3NlcywgdGV4dCxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgIGlmIChpZCkgb2JqLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgaWYgKGNsYXNzZXMpIHtcbiAgICAgIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIG9iai5jbGFzc0xpc3QuYWRkKGVsZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0ZXh0KSBvYmoudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBvYmo7XG4gIH07XG4gIGNvbnN0IHByb2plY3RHcm91cCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdwcm9qZWN0LWNvbnRlbnQtZ3JvdXAnIH0pO1xuICBjb25zdCB0b2RvR3JvdXAgPSBjcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAndG9kby1jb250ZW50LWdyb3VwJyB9KTtcblxuICBjb25zdCBnZXRQcm9qZWN0SWQgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RJZCA9IDE7XG4gICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdElkJykpIHtcbiAgICAgIHByb2plY3RJZCA9IE51bWJlcih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RJZCcpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RJZCk7XG4gICAgfVxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdElkJywgcHJvamVjdElkICsgMSk7XG4gICAgcmV0dXJuIHByb2plY3RJZDtcbiAgfVxuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAoeyBwcm9qZWN0TmFtZSwgcHJvamVjdElkID0gMCB9KSA9PiB7XG5cdFx0aWYgKHByb2plY3RJZCA9PT0gMClwcm9qZWN0SWQgPSBnZXRQcm9qZWN0SWQoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlVGFnKHsgdGFnOiAnZGl2JywgaWQ6IGAke3Byb2plY3RJZH1gLCBjbGFzc2VzOiAncHJvamVjdC1jb250ZW50JyB9KTtcblxuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBwcm9qZWN0R3JvdXAuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kbyA9ICh7IHRpdGxlICwgZGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICd0b2RvLWNvbnRlbnQnIH0pO1xuXHRcdGNvbnN0IHRpdGxlVGFnID0gY3JlYXRlVGFnKHsgdGFnOiAnaDQnLCBjbGFzc2VzOiAndGl0bGUnLCB0ZXh0OiB0aXRsZSB9KTtcblx0XHRjb25zdCBkYXRlVGFnID0gY3JlYXRlVGFnKHt0YWc6ICdkaXYnLCBjbGFzc2VzOiAnZGF0ZScsIHRleHQ6IGRhdGV9KTtcblxuXHRcdHRvZG8uYXBwZW5kQ2hpbGQodGl0bGVUYWcpO1xuXHRcdHRvZG8uYXBwZW5kQ2hpbGQoZGF0ZVRhZyk7XG5cdFx0dG9kb0dyb3VwLmFwcGVuZENoaWxkKHRvZG8pO1xuXHR9O1xuICBjb25zdCBhZGRQcm9qZWN0R3JvdXAgPSAocHJvamVjdEFycmF5KSA9PiB7XG5cdFx0cHJvamVjdEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHQgIGFkZFByb2plY3QoZWxlbWVudCk7XG5cdCAgfSk7XG5cdH1cblxuXHRjb25zdCBhZGRUb2RvR3JvdXAgPSAodG9kb0FycmF5KSA9PiB7XG5cdFx0Ly8gcmVtb3ZlKClcblx0XHR3aGlsZSAodG9kb0dyb3VwLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHRvZG9Hcm91cC5yZW1vdmVDaGlsZCh0b2RvR3JvdXAuZmlyc3RDaGlsZCk7XG5cdFx0fTtcblx0ICB0b2RvQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuXHQgIFx0YWRkVG9kbyhlbGVtZW50KTtcblx0XHR9KTtcblx0Ly8vL1xuXHR9XG5cbiAgY29uc3QgaGVhZGVyU2V0ID0gKGhlYWRlciwgd29yZCkgPT4ge1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUYWcoeyB0YWc6ICdoMScsIGNsYXNzZXM6ICdoLXRpdGxlJywgdGV4dDogd29yZCB9KSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhZyh7IHRhZzogJ2gxJywgY2xhc3NlczogJ2NyZWF0ZS1mb3JtJywgdGV4dDogJysnIH0pKTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlVGFnKHsgdGFnOiAnZm9ybScsIGNsYXNzZXM6ICdwcm9qZWN0LWZvcm0nIH0pO1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gY3JlYXRlVGFnKHsgdGFnOiAnZmllbGRzZXQnIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuICAgIGxldCBmaWVsZCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdmaWVsZCcgfSk7XG4gICAgbGV0IGlucHV0ID0gY3JlYXRlVGFnKHsgdGFnOiAnaW5wdXQnLCBjbGFzc2VzOiAncHJvamVjdC1uYW1lJyB9KTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3Byb2plY3QgbmFtZScpO1xuICAgIGZpZWxkLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChmaWVsZCk7XG4gICAgcmV0dXJuIGZvcm07XG4gIH07XG5cbiAgY29uc3QgdG9kb0Zvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVRhZyh7IHRhZzogJ2Zvcm0nLCBjbGFzc2VzOiAndG9kby1mb3JtJyB9KTtcbiAgICBjb25zdCBmaWVsZHNldCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2ZpZWxkc2V0JyB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcbiAgICBsZXQgZmllbGQgPSBjcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAnZmllbGQnIH0pO1xuICAgIGxldCBpbnB1dCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2lucHV0JywgY2xhc3NlczogJ3RpdGxlJyB9KTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3RpdGxlJyk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGZpZWxkKTtcblxuICAgIGZpZWxkID0gY3JlYXRlVGFnKHsgdGFnOiAnZGl2JywgY2xhc3NlczogJ2ZpZWxkJyB9KTtcbiAgICBpbnB1dCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2lucHV0JywgY2xhc3NlczogJ2RhdGUnIH0pO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZGF0ZScpO1xuICAgIGZpZWxkLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChmaWVsZCk7XG5cbiAgICByZXR1cm4gZm9ybTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdEdyb3VwLmNoaWxkTm9kZXM7XG4gIH1cblxuICBjb25zdCB1cGRhdGVDdXJyZW50UHJvamVjdCA9IChuZXdUYWcpID0+IHtcbiAgICBjb25zdCBwcmV2aW91cyA9IHByb2plY3RHcm91cC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wcm9qZWN0Jyk7XG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICBwcmV2aW91cy5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LXByb2plY3QnKTtcbiAgICB9XG4gICAgbmV3VGFnLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcHJvamVjdCcpO1xuICAgIHJldHVybiBuZXdUYWcuaWQ7XG4gIH1cblxuICBjb25zdCBzZXRNYWluRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlVGFnKHsgdGFnOiAnc2VjdGlvbicsIGlkOiAncHJvamVjdCcsIGNsYXNzZXM6ICdjb2wtbWQtNCBwcmltYXJ5LWJnJyB9KTtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gY3JlYXRlVGFnKHsgdGFnOiAnc2VjdGlvbicsIGlkOiAndG9kbycsIGNsYXNzZXM6ICdjb2wtbWQtOCBzZWNvbmRhcnktYmcnIH0pO1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuICAgIGhlYWRlclNldChwcm9qZWN0Q29udGFpbmVyLCAnUHJvamVjdCcpO1xuICAgIGhlYWRlclNldCh0b2RvQ29udGFpbmVyLCAnVG9kbycpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEdyb3VwKTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Hcm91cCk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSgpKTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtKCkpO1xuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRNYWluRGlzcGxheSwgYWRkUHJvamVjdCwgZ2V0UHJvamVjdExpc3QsIHVwZGF0ZUN1cnJlbnRQcm9qZWN0LCBhZGRUb2RvR3JvdXAsIGFkZFByb2plY3RHcm91cFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTtcbiIsImltcG9ydCBkaXNwbGF5IGZyb20gJy4vZGlzcGxheSc7XG5pbXBvcnQgeyBwcm9qZWN0Q29udHJvbGxlciwgdG9kb0NvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmNvbnN0IGZhY3RvcnlQcm9qZWN0ID0gW1xuICB7IHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcgfSxcbiAgeyBwcm9qZWN0TmFtZTogJ3NlY29uZCBwcm9qZWN0JyB9LFxuXTtcblxuY29uc3QgZmFjdG9yeVRvZG8gPSBbXG4gIHtcbiAgICB0aXRsZTogJ2ZpcnN0IHByb2plY3Qgb25lJyxcbiAgICBwcm9qZWN0TmFtZTogJ2ZpcnN0IHByb2plY3QnLFxuICAgIGRhdGU6ICcwMy9ub3YvMjAxOScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ2ZpcnN0IHByb2plY3QgdHdvJyxcbiAgICBwcm9qZWN0TmFtZTogJ2ZpcnN0IHByb2plY3QnLFxuICAgIGRhdGU6ICcwMy9ub3YvMjAxOScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ2ZpcnN0IHByb2plY3QgdGhyZWUnLFxuICAgIHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcsXG4gICAgZGF0ZTogJzAzL25vdi8yMDE5JyxcbiAgfSxcbl07XG5cbi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KGZhY3RvcnlQcm9qZWN0KSk7XG4vL1xuLy8gLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSkpO1xuLy9cbi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kbycsIEpTT04uc3RyaW5naWZ5KGZhY3RvcnlUb2RvKSk7XG4vLyAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKSk7XG4vL1xud2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50UHJvamVjdCcsICdwcm9qZWN0LTEnKTtcblxucHJvamVjdENvbnRyb2xsZXIuc2V0SW5mb0Zyb21TdG9yYWdlKCk7XG50b2RvQ29udHJvbGxlci5zZXRJbmZvRnJvbVN0b3JhZ2UoKTtcblxuZGlzcGxheS5zZXRNYWluRGlzcGxheSgpO1xuLy8vLy9cblxuY29uc3QgcHJvamVjdEFycmF5ID0gcHJvamVjdENvbnRyb2xsZXIuZ2V0UHJvamVjdExpc3QoKTtcbmRpc3BsYXkuYWRkUHJvamVjdEdyb3VwKHByb2plY3RBcnJheSk7XG5cbmNvbnN0IHRvZG9BcnJheSA9IHRvZG9Db250cm9sbGVyLmdldFRvZG9MaXN0Rm9yUHJvamVjdCgpO1xuZGlzcGxheS5hZGRUb2RvR3JvdXAodG9kb0FycmF5KTtcblxuY29uc3QgdXBkYXRlQ3VycmVudFByb2plY3QgPSAodGFnKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJZCA9IGRpc3BsYXkudXBkYXRlQ3VycmVudFByb2plY3QodGFnKTtcbiAgdG9kb0NvbnRyb2xsZXIudXBkYXRlVG9kb0xpc3RGb3JQcm9qZWN0KHByb2plY3RJZCk7XG4gIGNvbnN0IHRvZG9BcnJheSA9IHRvZG9Db250cm9sbGVyLmdldFRvZG9MaXN0Rm9yUHJvamVjdCgpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgZGlzcGxheS5hZGRUb2RvR3JvdXAodG9kb0FycmF5KTtcbn1cblxuY29uc3QgY3JlYXRlRXZlbnRzID0gKHdvcmQpID0+IHtcbiAgaWYgKHdvcmQgPT09ICdwcm9qZWN0Jykge1xuICAgIGNvbnN0IHRhZ3MgPSBkaXNwbGF5LmdldFByb2plY3RMaXN0KCk7XG4gICAgaWYgKHRhZ3MubGVuZ3RoID4gMCkge1xuICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgIHRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVwZGF0ZUN1cnJlbnRQcm9qZWN0KHRhZykpO1xuICAgICAgfSlcbiAgICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KHRhZ3NbdGFncy5sZW5ndGggLSAxXSk7XG4gICAgfVxuICB9XG5cbn1cblxuWydwcm9qZWN0JywgJ3RvZG8nXS5mb3JFYWNoKHdvcmQgPT4gY3JlYXRlRXZlbnRzKHdvcmQpKTtcblxuLy8gc2V0Q3VycmVudFByb2plY3QoKTtcbiIsIi8vIGNyZWF0ZSBwcm9qZWN0XG5jb25zdCBwcm9qZWN0ID0gKHsgcHJvamVjdE5hbWUsIHByb2plY3RJZCB9KSA9PiAoeyBwcm9qZWN0TmFtZSwgcHJvamVjdElkIH0pO1xuXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBwcm9qZWN0TGlzdCA9IFtcbiAgICB7IHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcsIHByb2plY3RJZDogJ3Byb2plY3QtMScgfSxcbiAgICB7IHByb2plY3ROYW1lOiAnc2Vjb25kIHByb2plY3QnLCBwcm9qZWN0SWQ6ICdwcm9qZWN0LTInIH0sXG4gIF07XG4gIGNvbnN0IGFkZFByb2plY3RMaXN0ID0gKGRhdGEpID0+IHtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QoZGF0YSkpO1xuICB9O1xuXG5cdGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4gcHJvamVjdExpc3Q7XG5cdGNvbnN0IHNldEluZm9Gcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0JykpIHtcbiAgICAgIHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSk7XG4gICAgfVxuXHR9O1xuXHRyZXR1cm4geyBhZGRQcm9qZWN0TGlzdCwgZ2V0UHJvamVjdExpc3QsIHNldEluZm9Gcm9tU3RvcmFnZSB9O1xufSkoKTtcblxuY29uc3QgdG9kbyA9ICh7IHRpdGxlLCBwcm9qZWN0SWQsIGRhdGUgfSkgPT4gKHsgdGl0bGUsIHByb2plY3RJZCwgZGF0ZSB9KTtcblxuY29uc3QgdG9kb0NvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBsZXQgdG9kb0xpc3QgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdmaXJzdCBwcm9qZWN0IG9uZScsXG4gICAgICBwcm9qZWN0SWQ6ICdwcm9qZWN0LTEnLFxuICAgICAgZGF0ZTogJzAzL25vdi8yMDE5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnZmlyc3QgcHJvamVjdCB0d28nLFxuICAgICAgcHJvamVjdElkOiAncHJvamVjdC0xJyxcbiAgICAgIGRhdGU6ICcwMy9ub3YvMjAxOScsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ3NlY29uZCBwcm9qZWN0IG9uZScsXG4gICAgICBwcm9qZWN0SWQ6ICdwcm9qZWN0LTInLFxuICAgICAgZGF0ZTogJzAzL25vdi8yMDE5JyxcbiAgICB9LFxuICBdO1xuICBsZXQgdG9kb0xpc3RGb3JQcm9qZWN0ID0gW107XG5cbiAgY29uc3QgYWRkVG9kb0xpc3QgPSAoZGF0YSkgPT4ge1xuICAgIHRvZG9MaXN0LnB1c2godG9kbyhkYXRhKSk7XG4gIH07XG4gIGNvbnN0IHVwZGF0ZVRvZG9MaXN0Rm9yUHJvamVjdCA9IChpZCkgPT4ge1xuXHRcdHRvZG9MaXN0Rm9yUHJvamVjdCA9IFtdO1xuICAgIHRvZG9MaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhpZCwgZWxlbWVudC5wcm9qZWN0SWQpO1xuICAgICAgaWYgKGlkID09PSBlbGVtZW50LnByb2plY3RJZCkge1xuICAgICAgICB0b2RvTGlzdEZvclByb2plY3QucHVzaChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KVxuICB9O1xuXHRjb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IHRvZG9MaXN0O1xuICBjb25zdCBnZXRUb2RvTGlzdEZvclByb2plY3QgPSAoKSA9PiB0b2RvTGlzdEZvclByb2plY3Q7XG5cdGNvbnN0IHNldEluZm9Gcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSkge1xuICBcdFx0dG9kb0xpc3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKTtcbiAgICB9XG5cdH07XG5cdHJldHVybiB7XG4gICAgYWRkVG9kb0xpc3QsIGdldFRvZG9MaXN0ICwgc2V0SW5mb0Zyb21TdG9yYWdlLCB1cGRhdGVUb2RvTGlzdEZvclByb2plY3QsXG4gICAgZ2V0VG9kb0xpc3RGb3JQcm9qZWN0LFxuICB9O1xuXG59KSgpO1xuXG5cbi8vIGFkZFByb2plY3QoeyB0aXRsZTogJ2EnIH0pO1xuLy8gYWRkUHJvamVjdCh7IHRpdGxlOiAnYicgfSk7XG4vLyBzZW5kaW5nIHRvIGRpc3BsYXk6IGNhbGxcblxuLy8gY3JlYXRlIHRvZG8gbGlzdFxuZXhwb3J0IHsgcHJvamVjdENvbnRyb2xsZXIsIHRvZG9Db250cm9sbGVyIH07XG4iXSwic291cmNlUm9vdCI6IiJ9