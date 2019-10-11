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

  var getNewProjectId = function getNewProjectId() {
    var projectId;

    if (window.localStorage.getItem('projectId')) {
      projectId = window.localStorage.getItem('projectId');
      var newNumber = projectId.split('-')[1];
      projectId = "project-".concat(newNumber); // debugger;
    } else {
      projectId = 'project-1';
    }

    window.localStorage.setItem('projectId', projectId);
    return projectId;
  };

  var addProject = function addProject(_ref2) {
    var projectName = _ref2.projectName,
        _ref2$projectId = _ref2.projectId,
        projectId = _ref2$projectId === void 0 ? 0 : _ref2$projectId;
    if (projectId === 0) projectId = getNewProjectId();
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
    while (todoGroup.firstChild) {
      todoGroup.removeChild(todoGroup.firstChild);
    }

    ;
    todoArray.forEach(function (element) {
      addTodo(element);
    });
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

  var exchangeCapitalLetter = function exchangeCapitalLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  var exchangeDashToCapital = function exchangeDashToCapital(word) {
    var words = word.split('-');

    if (words.length > 1) {
      words[1] = exchangeCapitalLetter(words[1]);
    }

    return words.join('');
  };

  var exchangeSpaceToDash = function exchangeSpaceToDash(word) {
    return word.split(' ').join('-');
  };

  var projectForm = function projectForm() {
    var varName = 'project';
    var form = createTag({
      tag: 'form',
      classes: exchangeSpaceToDash("".concat(varName, " form"))
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
      classes: exchangeSpaceToDash('project name')
    });
    input.setAttribute('placeholder', 'project name');
    input.name = exchangeSpaceToDash('project name');
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
    input.name = 'title';
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
    input.name = 'date';
    field.appendChild(input);
    fieldset.appendChild(field);
    return form;
  };

  var getProjectList = function getProjectList() {
    return projectGroup.childNodes;
  };

  var submitForm = function submitForm(fieldset, projectId) {
    var data = {};
    if (projectId) data.projectId = projectId;
    fieldset.childNodes.forEach(function (field) {
      var selector = field.querySelector('input');
      var key = exchangeDashToCapital(selector.name);
      var value = selector.value;
      data[key] = value;
    });
    return data;
  };

  var makeBlankForm = function makeBlankForm(fieldset) {
    fieldset.childNodes.forEach(function (field) {
      field.querySelector('input').value = '';
    });
  };

  var updateCurrentProject = function updateCurrentProject(newTag) {
    var previous = projectGroup.querySelector('.current-project');

    if (previous) {
      previous.classList.remove('current-project');
    }

    newTag.classList.add('current-project');
    return newTag.id;
  };

  var getFormData = function getFormData(id) {
    var getIdInfo = document.getElementById(id);
    var open = getIdInfo.querySelector('.create-form');
    var fieldset = getIdInfo.querySelector('fieldset');
    return {
      fieldset: fieldset,
      open: open
    };
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
    addProjectGroup: addProjectGroup,
    getFormData: getFormData,
    submitForm: submitForm,
    makeBlankForm: makeBlankForm
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
// window.localStorage.setItem('currentProject', 'project-1');

_utilities__WEBPACK_IMPORTED_MODULE_1__["projectController"].setInfoFromStorage();
_utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].setInfoFromStorage();
_display__WEBPACK_IMPORTED_MODULE_0__["default"].setMainDisplay(); /////

var projectArray = _utilities__WEBPACK_IMPORTED_MODULE_1__["projectController"].getProjectList();
_display__WEBPACK_IMPORTED_MODULE_0__["default"].addProjectGroup(projectArray);
var todoArray = _utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].getTodoListForProject();
_display__WEBPACK_IMPORTED_MODULE_0__["default"].addTodoGroup(todoArray);

var updateCurrentProject = function updateCurrentProject(tag) {
  var projectId = _display__WEBPACK_IMPORTED_MODULE_0__["default"].updateCurrentProject(tag);
  window.localStorage.setItem('currentProjectId', projectId);
  _utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].updateTodoListForProject(projectId);
  var todoArray = _utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].getTodoListForProject();
  _display__WEBPACK_IMPORTED_MODULE_0__["default"].addTodoGroup(todoArray);
};

var submitFormProject = function submitFormProject(fieldset) {
  var data = _display__WEBPACK_IMPORTED_MODULE_0__["default"].submitForm(fieldset);
  _utilities__WEBPACK_IMPORTED_MODULE_1__["projectController"].addProjectList(data);
};

var submitFormTodo = function submitFormTodo(fieldset) {
  var projectId = window.localStorage.getItem('currentProjectId');
  var data = _display__WEBPACK_IMPORTED_MODULE_0__["default"].submitForm(fieldset, projectId);
  _utilities__WEBPACK_IMPORTED_MODULE_1__["todoController"].addTodoList(data);
};

var createEvents = function createEvents(word) {
  var _display$getFormData = _display__WEBPACK_IMPORTED_MODULE_0__["default"].getFormData(word),
      fieldset = _display$getFormData.fieldset,
      open = _display$getFormData.open;

  fieldset.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      if (word === 'project') submitFormProject(fieldset);
      if (word === 'todo') submitFormTodo(fieldset);
      _display__WEBPACK_IMPORTED_MODULE_0__["default"].makeBlankForm(fieldset);
      window.location.reload();
    }

    ;
  });

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
    window.localStorage.setItem('project', JSON.stringify(projectList));
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
    window.localStorage.setItem('todo', JSON.stringify(todoList));
  };

  var updateTodoListForProject = function updateTodoListForProject(id) {
    todoListForProject = [];
    todoList.forEach(function (element) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMuanMiXSwibmFtZXMiOlsiZGlzcGxheSIsImNyZWF0ZVRhZyIsInRhZyIsImlkIiwiY2xhc3NlcyIsInRleHQiLCJvYmoiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdCIsImZvckVhY2giLCJlbGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJwcm9qZWN0R3JvdXAiLCJ0b2RvR3JvdXAiLCJnZXROZXdQcm9qZWN0SWQiLCJwcm9qZWN0SWQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibmV3TnVtYmVyIiwic2V0SXRlbSIsImFkZFByb2plY3QiLCJwcm9qZWN0TmFtZSIsInByb2plY3QiLCJhcHBlbmRDaGlsZCIsImFkZFRvZG8iLCJ0aXRsZSIsImRhdGUiLCJ0b2RvIiwidGl0bGVUYWciLCJkYXRlVGFnIiwiYWRkUHJvamVjdEdyb3VwIiwicHJvamVjdEFycmF5IiwiZWxlbWVudCIsImFkZFRvZG9Hcm91cCIsInRvZG9BcnJheSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImhlYWRlclNldCIsImhlYWRlciIsIndvcmQiLCJleGNoYW5nZUNhcGl0YWxMZXR0ZXIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZXhjaGFuZ2VEYXNoVG9DYXBpdGFsIiwid29yZHMiLCJsZW5ndGgiLCJqb2luIiwiZXhjaGFuZ2VTcGFjZVRvRGFzaCIsInByb2plY3RGb3JtIiwidmFyTmFtZSIsImZvcm0iLCJmaWVsZHNldCIsImZpZWxkIiwiaW5wdXQiLCJuYW1lIiwidG9kb0Zvcm0iLCJnZXRQcm9qZWN0TGlzdCIsImNoaWxkTm9kZXMiLCJzdWJtaXRGb3JtIiwiZGF0YSIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvciIsImtleSIsInZhbHVlIiwibWFrZUJsYW5rRm9ybSIsInVwZGF0ZUN1cnJlbnRQcm9qZWN0IiwibmV3VGFnIiwicHJldmlvdXMiLCJyZW1vdmUiLCJnZXRGb3JtRGF0YSIsImdldElkSW5mbyIsImdldEVsZW1lbnRCeUlkIiwib3BlbiIsInNldE1haW5EaXNwbGF5IiwicHJvamVjdENvbnRhaW5lciIsInRvZG9Db250YWluZXIiLCJtYWluQ29udGFpbmVyIiwiZmFjdG9yeVByb2plY3QiLCJmYWN0b3J5VG9kbyIsInByb2plY3RDb250cm9sbGVyIiwic2V0SW5mb0Zyb21TdG9yYWdlIiwidG9kb0NvbnRyb2xsZXIiLCJnZXRUb2RvTGlzdEZvclByb2plY3QiLCJ1cGRhdGVUb2RvTGlzdEZvclByb2plY3QiLCJzdWJtaXRGb3JtUHJvamVjdCIsImFkZFByb2plY3RMaXN0Iiwic3VibWl0Rm9ybVRvZG8iLCJhZGRUb2RvTGlzdCIsImNyZWF0ZUV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsImxvY2F0aW9uIiwicmVsb2FkIiwidGFncyIsInByb2plY3RMaXN0IiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsInRvZG9MaXN0IiwidG9kb0xpc3RGb3JQcm9qZWN0IiwiZ2V0VG9kb0xpc3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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TXVFLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTUYsUUFBTjtBQUFBLEdBQXBCOztBQUNDLE1BQU1sQixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCO0FBQUEsV0FBTW1CLGtCQUFOO0FBQUEsR0FBOUI7O0FBQ0QsTUFBTXJCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUM5QixRQUFHbEUsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixNQUE1QixDQUFILEVBQXdDO0FBQ3hDb0YsY0FBUSxHQUFHSCxJQUFJLENBQUNFLEtBQUwsQ0FBV3JGLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBWCxDQUFYO0FBQ0M7QUFDSCxHQUpEOztBQUtBLFNBQU87QUFDSnVFLGVBQVcsRUFBWEEsV0FESTtBQUNTZSxlQUFXLEVBQVhBLFdBRFQ7QUFDdUJ0QixzQkFBa0IsRUFBbEJBLGtCQUR2QjtBQUMyQ0csNEJBQXdCLEVBQXhCQSx3QkFEM0M7QUFFSkQseUJBQXFCLEVBQXJCQTtBQUZJLEdBQVA7QUFLQSxDQTVDc0IsRUFBdkIsQyxDQStDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlVGFnID0gKHtcbiAgICB0YWcsIGlkLCBjbGFzc2VzLCB0ZXh0LFxuICB9KSA9PiB7XG4gICAgY29uc3Qgb2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gICAgaWYgKGlkKSBvYmouc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBpZiAoY2xhc3Nlcykge1xuICAgICAgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgb2JqLmNsYXNzTGlzdC5hZGQoZWxlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRleHQpIG9iai50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcbiAgY29uc3QgcHJvamVjdEdyb3VwID0gY3JlYXRlVGFnKHsgdGFnOiAnZGl2JywgY2xhc3NlczogJ3Byb2plY3QtY29udGVudC1ncm91cCcgfSk7XG4gIGNvbnN0IHRvZG9Hcm91cCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICd0b2RvLWNvbnRlbnQtZ3JvdXAnIH0pO1xuXG4gIGNvbnN0IGdldE5ld1Byb2plY3RJZCA9ICgpID0+IHtcbiAgICBsZXQgcHJvamVjdElkO1xuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RJZCcpKSB7XG4gICAgICBwcm9qZWN0SWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RJZCcpO1xuICAgICAgY29uc3QgbmV3TnVtYmVyID0gcHJvamVjdElkLnNwbGl0KCctJylbMV07XG4gICAgICBwcm9qZWN0SWQgPSBgcHJvamVjdC0ke25ld051bWJlcn1gO1xuICAgICAgLy8gZGVidWdnZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RJZCA9ICdwcm9qZWN0LTEnO1xuICAgIH1cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RJZCcsIHByb2plY3RJZCk7XG4gICAgcmV0dXJuIHByb2plY3RJZDtcbiAgfVxuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAoeyBwcm9qZWN0TmFtZSwgcHJvamVjdElkID0gMCB9KSA9PiB7XG5cdFx0aWYgKHByb2plY3RJZCA9PT0gMCkgcHJvamVjdElkID0gZ2V0TmV3UHJvamVjdElkKCk7XG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGlkOiBgJHtwcm9qZWN0SWR9YCwgY2xhc3NlczogJ3Byb2plY3QtY29udGVudCcgfSk7XG5cbiAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgcHJvamVjdEdyb3VwLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAoeyB0aXRsZSwgZGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICd0b2RvLWNvbnRlbnQnIH0pO1xuXHRcdGNvbnN0IHRpdGxlVGFnID0gY3JlYXRlVGFnKHsgdGFnOiAnaDQnLCBjbGFzc2VzOiAndGl0bGUnLCB0ZXh0OiB0aXRsZSB9KTtcblx0XHRjb25zdCBkYXRlVGFnID0gY3JlYXRlVGFnKHt0YWc6ICdkaXYnLCBjbGFzc2VzOiAnZGF0ZScsIHRleHQ6IGRhdGV9KTtcblxuXHRcdHRvZG8uYXBwZW5kQ2hpbGQodGl0bGVUYWcpO1xuXHRcdHRvZG8uYXBwZW5kQ2hpbGQoZGF0ZVRhZyk7XG5cdFx0dG9kb0dyb3VwLmFwcGVuZENoaWxkKHRvZG8pO1xuXHR9O1xuICBjb25zdCBhZGRQcm9qZWN0R3JvdXAgPSAocHJvamVjdEFycmF5KSA9PiB7XG5cdFx0cHJvamVjdEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHQgIGFkZFByb2plY3QoZWxlbWVudCk7XG5cdCAgfSk7XG5cdH1cblxuXHRjb25zdCBhZGRUb2RvR3JvdXAgPSAodG9kb0FycmF5KSA9PiB7XG5cdFx0d2hpbGUgKHRvZG9Hcm91cC5maXJzdENoaWxkKSB7XG5cdFx0XHR0b2RvR3JvdXAucmVtb3ZlQ2hpbGQodG9kb0dyb3VwLmZpcnN0Q2hpbGQpO1xuXHRcdH07XG5cdCAgdG9kb0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0ICBcdGFkZFRvZG8oZWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblxuICBjb25zdCBoZWFkZXJTZXQgPSAoaGVhZGVyLCB3b3JkKSA9PiB7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhZyh7IHRhZzogJ2gxJywgY2xhc3NlczogJ2gtdGl0bGUnLCB0ZXh0OiB3b3JkIH0pKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFnKHsgdGFnOiAnaDEnLCBjbGFzc2VzOiAnY3JlYXRlLWZvcm0nLCB0ZXh0OiAnKycgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGV4Y2hhbmdlQ2FwaXRhbExldHRlciA9ICh3b3JkKSA9PiB7XG4gICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xuICB9XG5cbiAgY29uc3QgZXhjaGFuZ2VEYXNoVG9DYXBpdGFsID0gKHdvcmQpID0+IHtcbiAgICBjb25zdCB3b3JkcyA9IHdvcmQuc3BsaXQoJy0nKTtcbiAgICBpZiAod29yZHMubGVuZ3RoID4gMSkge1xuICAgICAgd29yZHNbMV0gPSBleGNoYW5nZUNhcGl0YWxMZXR0ZXIod29yZHNbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gd29yZHMuam9pbignJyk7XG4gIH1cblxuICBjb25zdCBleGNoYW5nZVNwYWNlVG9EYXNoID0gKHdvcmQpID0+IHtcbiAgICByZXR1cm4gd29yZC5zcGxpdCgnICcpLmpvaW4oJy0nKTtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHZhck5hbWUgPSAncHJvamVjdCc7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVRhZyh7IHRhZzogJ2Zvcm0nLCBjbGFzc2VzOiBleGNoYW5nZVNwYWNlVG9EYXNoKGAke3Zhck5hbWV9IGZvcm1gKSB9KTtcbiAgICBjb25zdCBmaWVsZHNldCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2ZpZWxkc2V0JyB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcbiAgICBsZXQgZmllbGQgPSBjcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAnZmllbGQnIH0pO1xuICAgIGxldCBpbnB1dCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2lucHV0JywgY2xhc3NlczogZXhjaGFuZ2VTcGFjZVRvRGFzaCgncHJvamVjdCBuYW1lJykgfSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdwcm9qZWN0IG5hbWUnKTtcbiAgICBpbnB1dC5uYW1lID0gZXhjaGFuZ2VTcGFjZVRvRGFzaCgncHJvamVjdCBuYW1lJyk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGZpZWxkKTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfTtcblxuICBjb25zdCB0b2RvRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlVGFnKHsgdGFnOiAnZm9ybScsIGNsYXNzZXM6ICd0b2RvLWZvcm0nIH0pO1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gY3JlYXRlVGFnKHsgdGFnOiAnZmllbGRzZXQnIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuICAgIGxldCBmaWVsZCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdmaWVsZCcgfSk7XG4gICAgbGV0IGlucHV0ID0gY3JlYXRlVGFnKHsgdGFnOiAnaW5wdXQnLCBjbGFzc2VzOiAndGl0bGUnIH0pO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAndGl0bGUnKTtcbiAgICBpbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZmllbGQpO1xuXG4gICAgZmllbGQgPSBjcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAnZmllbGQnIH0pO1xuICAgIGlucHV0ID0gY3JlYXRlVGFnKHsgdGFnOiAnaW5wdXQnLCBjbGFzc2VzOiAnZGF0ZScgfSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdkYXRlJyk7XG4gICAgaW5wdXQubmFtZSA9ICdkYXRlJztcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZmllbGQpO1xuXG4gICAgcmV0dXJuIGZvcm07XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RHcm91cC5jaGlsZE5vZGVzO1xuXHR9XG5cblx0Y29uc3Qgc3VibWl0Rm9ybSA9IChmaWVsZHNldCwgcHJvamVjdElkKSA9PiB7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBpZihwcm9qZWN0SWQpIGRhdGEucHJvamVjdElkID0gcHJvamVjdElkO1xuXHRcdGZpZWxkc2V0LmNoaWxkTm9kZXMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICBjb25zdCBrZXkgPSBleGNoYW5nZURhc2hUb0NhcGl0YWwoc2VsZWN0b3IubmFtZSk7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHNlbGVjdG9yLnZhbHVlO1xuICAgICAgZGF0YVtrZXldID0gdmFsdWU7XG5cdFx0fSk7XG4gICAgcmV0dXJuIGRhdGE7XG5cdH07XG5cblx0Y29uc3QgbWFrZUJsYW5rRm9ybSA9IChmaWVsZHNldCkgPT4ge1xuXHRcdGZpZWxkc2V0LmNoaWxkTm9kZXMuZm9yRWFjaChmaWVsZCA9PiB7XG5cdFx0XHRmaWVsZC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID0gJyc7XG5cdFx0fSk7XG5cdH07XG5cbiAgY29uc3QgdXBkYXRlQ3VycmVudFByb2plY3QgPSAobmV3VGFnKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXMgPSBwcm9qZWN0R3JvdXAucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcHJvamVjdCcpO1xuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgcHJldmlvdXMuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1wcm9qZWN0Jyk7XG4gICAgfVxuICAgIG5ld1RhZy5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXByb2plY3QnKTtcbiAgICByZXR1cm4gbmV3VGFnLmlkO1xuXHR9XG5cblx0Y29uc3QgZ2V0Rm9ybURhdGEgPSAoaWQpID0+IHtcblx0XHRjb25zdCBnZXRJZEluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdFx0Y29uc3Qgb3BlbiA9IGdldElkSW5mby5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWZvcm0nKTtcblx0XHRjb25zdCBmaWVsZHNldCA9IGdldElkSW5mby5xdWVyeVNlbGVjdG9yKCdmaWVsZHNldCcpO1xuXHRcdHJldHVybiB7IGZpZWxkc2V0LCBvcGVufTtcblx0fVxuXG4gIGNvbnN0IHNldE1haW5EaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVUYWcoeyB0YWc6ICdzZWN0aW9uJywgaWQ6ICdwcm9qZWN0JywgY2xhc3NlczogJ2NvbC1tZC00IHByaW1hcnktYmcnIH0pO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBjcmVhdGVUYWcoeyB0YWc6ICdzZWN0aW9uJywgaWQ6ICd0b2RvJywgY2xhc3NlczogJ2NvbC1tZC04IHNlY29uZGFyeS1iZycgfSk7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gICAgaGVhZGVyU2V0KHByb2plY3RDb250YWluZXIsICdQcm9qZWN0Jyk7XG4gICAgaGVhZGVyU2V0KHRvZG9Db250YWluZXIsICdUb2RvJyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0R3JvdXApO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0dyb3VwKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKCkpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Zvcm0oKSk7XG5cbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbiAgfTtcblxuICByZXR1cm4ge1xuXHRcdHNldE1haW5EaXNwbGF5LCBhZGRQcm9qZWN0LCBnZXRQcm9qZWN0TGlzdCwgdXBkYXRlQ3VycmVudFByb2plY3QsIGFkZFRvZG9Hcm91cCwgYWRkUHJvamVjdEdyb3VwLCBnZXRGb3JtRGF0YSxcblx0XHRzdWJtaXRGb3JtLCBtYWtlQmxhbmtGb3JtLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTtcbiIsImltcG9ydCBkaXNwbGF5IGZyb20gJy4vZGlzcGxheSc7XG5pbXBvcnQgeyBwcm9qZWN0Q29udHJvbGxlciwgdG9kb0NvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmNvbnN0IGZhY3RvcnlQcm9qZWN0ID0gW1xuICB7IHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcgfSxcbiAgeyBwcm9qZWN0TmFtZTogJ3NlY29uZCBwcm9qZWN0JyB9LFxuXTtcblxuY29uc3QgZmFjdG9yeVRvZG8gPSBbXG4gIHtcbiAgICB0aXRsZTogJ2ZpcnN0IHByb2plY3Qgb25lJyxcbiAgICBwcm9qZWN0TmFtZTogJ2ZpcnN0IHByb2plY3QnLFxuICAgIGRhdGU6ICcwMy9ub3YvMjAxOScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ2ZpcnN0IHByb2plY3QgdHdvJyxcbiAgICBwcm9qZWN0TmFtZTogJ2ZpcnN0IHByb2plY3QnLFxuICAgIGRhdGU6ICcwMy9ub3YvMjAxOScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ2ZpcnN0IHByb2plY3QgdGhyZWUnLFxuICAgIHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcsXG4gICAgZGF0ZTogJzAzL25vdi8yMDE5JyxcbiAgfSxcbl07XG5cbi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KGZhY3RvcnlQcm9qZWN0KSk7XG4vL1xuLy8gLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSkpO1xuLy9cbi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kbycsIEpTT04uc3RyaW5naWZ5KGZhY3RvcnlUb2RvKSk7XG4vLyAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKSk7XG4vL1xuLy8gd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50UHJvamVjdCcsICdwcm9qZWN0LTEnKTtcblxucHJvamVjdENvbnRyb2xsZXIuc2V0SW5mb0Zyb21TdG9yYWdlKCk7XG50b2RvQ29udHJvbGxlci5zZXRJbmZvRnJvbVN0b3JhZ2UoKTtcblxuZGlzcGxheS5zZXRNYWluRGlzcGxheSgpO1xuLy8vLy9cblxuY29uc3QgcHJvamVjdEFycmF5ID0gcHJvamVjdENvbnRyb2xsZXIuZ2V0UHJvamVjdExpc3QoKTtcbmRpc3BsYXkuYWRkUHJvamVjdEdyb3VwKHByb2plY3RBcnJheSk7XG5cbmNvbnN0IHRvZG9BcnJheSA9IHRvZG9Db250cm9sbGVyLmdldFRvZG9MaXN0Rm9yUHJvamVjdCgpO1xuZGlzcGxheS5hZGRUb2RvR3JvdXAodG9kb0FycmF5KTtcblxuY29uc3QgdXBkYXRlQ3VycmVudFByb2plY3QgPSAodGFnKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJZCA9IGRpc3BsYXkudXBkYXRlQ3VycmVudFByb2plY3QodGFnKTtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50UHJvamVjdElkJywgcHJvamVjdElkKTtcbiAgdG9kb0NvbnRyb2xsZXIudXBkYXRlVG9kb0xpc3RGb3JQcm9qZWN0KHByb2plY3RJZCk7XG4gIGNvbnN0IHRvZG9BcnJheSA9IHRvZG9Db250cm9sbGVyLmdldFRvZG9MaXN0Rm9yUHJvamVjdCgpO1xuICBkaXNwbGF5LmFkZFRvZG9Hcm91cCh0b2RvQXJyYXkpO1xufVxuXG5jb25zdCBzdWJtaXRGb3JtUHJvamVjdCA9IChmaWVsZHNldCkgPT4ge1xuICBjb25zdCBkYXRhID0gZGlzcGxheS5zdWJtaXRGb3JtKGZpZWxkc2V0KTtcbiAgcHJvamVjdENvbnRyb2xsZXIuYWRkUHJvamVjdExpc3QoZGF0YSk7XG59XG5cbmNvbnN0IHN1Ym1pdEZvcm1Ub2RvID0gKGZpZWxkc2V0KSA9PiB7XG4gIGNvbnN0IHByb2plY3RJZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFByb2plY3RJZCcpO1xuICBjb25zdCBkYXRhID0gZGlzcGxheS5zdWJtaXRGb3JtKGZpZWxkc2V0LCBwcm9qZWN0SWQpO1xuICB0b2RvQ29udHJvbGxlci5hZGRUb2RvTGlzdChkYXRhKTtcbn1cblxuY29uc3QgY3JlYXRlRXZlbnRzID0gKHdvcmQpID0+IHtcblx0Y29uc3Qge2ZpZWxkc2V0LCBvcGVuIH0gPSBkaXNwbGF5LmdldEZvcm1EYXRhKHdvcmQpO1xuXHRmaWVsZHNldC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGUgPT4ge1xuXHRcdGlmKGUua2V5Q29kZSA9PT0gMTMpIHtcblx0XHRcdGlmKHdvcmQgPT09ICdwcm9qZWN0Jykgc3VibWl0Rm9ybVByb2plY3QoZmllbGRzZXQpO1xuXHRcdFx0aWYgKHdvcmQgPT09ICd0b2RvJykgc3VibWl0Rm9ybVRvZG8oZmllbGRzZXQpO1xuXHRcdFx0ZGlzcGxheS5tYWtlQmxhbmtGb3JtKGZpZWxkc2V0KTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHR9O1xuXHR9KTtcbiAgaWYgKHdvcmQgPT09ICdwcm9qZWN0Jykge1xuICAgIGNvbnN0IHRhZ3MgPSBkaXNwbGF5LmdldFByb2plY3RMaXN0KCk7XG4gICAgaWYgKHRhZ3MubGVuZ3RoID4gMCkge1xuICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgIHRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVwZGF0ZUN1cnJlbnRQcm9qZWN0KHRhZykpO1xuICAgICAgfSlcbiAgICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KHRhZ3NbdGFncy5sZW5ndGggLSAxXSk7XG4gICAgfVxuICB9XG5cbn1cblxuWydwcm9qZWN0JywgJ3RvZG8nXS5mb3JFYWNoKHdvcmQgPT4gY3JlYXRlRXZlbnRzKHdvcmQpKTtcblxuLy8gc2V0Q3VycmVudFByb2plY3QoKTtcbiIsIi8vIGNyZWF0ZSBwcm9qZWN0XG5jb25zdCBwcm9qZWN0ID0gKHsgcHJvamVjdE5hbWUsIHByb2plY3RJZCB9KSA9PiAoeyBwcm9qZWN0TmFtZSwgcHJvamVjdElkIH0pO1xuXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBwcm9qZWN0TGlzdCA9IFtcbiAgICB7IHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcsIHByb2plY3RJZDogJ3Byb2plY3QtMScgfSxcbiAgICB7IHByb2plY3ROYW1lOiAnc2Vjb25kIHByb2plY3QnLCBwcm9qZWN0SWQ6ICdwcm9qZWN0LTInIH0sXG4gIF07XG4gIGNvbnN0IGFkZFByb2plY3RMaXN0ID0gKGRhdGEpID0+IHtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QoZGF0YSkpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gIH07XG5cblx0Y29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiBwcm9qZWN0TGlzdDtcblx0Y29uc3Qgc2V0SW5mb0Zyb21TdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSkge1xuICAgICAgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpKTtcbiAgICB9XG5cdH07XG5cdHJldHVybiB7IGFkZFByb2plY3RMaXN0LCBnZXRQcm9qZWN0TGlzdCwgc2V0SW5mb0Zyb21TdG9yYWdlIH07XG59KSgpO1xuXG5jb25zdCB0b2RvID0gKHsgdGl0bGUsIHByb2plY3RJZCwgZGF0ZSB9KSA9PiAoeyB0aXRsZSwgcHJvamVjdElkLCBkYXRlIH0pO1xuXG5jb25zdCB0b2RvQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCB0b2RvTGlzdCA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ2ZpcnN0IHByb2plY3Qgb25lJyxcbiAgICAgIHByb2plY3RJZDogJ3Byb2plY3QtMScsXG4gICAgICBkYXRlOiAnMDMvbm92LzIwMTknLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdmaXJzdCBwcm9qZWN0IHR3bycsXG4gICAgICBwcm9qZWN0SWQ6ICdwcm9qZWN0LTEnLFxuICAgICAgZGF0ZTogJzAzL25vdi8yMDE5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnc2Vjb25kIHByb2plY3Qgb25lJyxcbiAgICAgIHByb2plY3RJZDogJ3Byb2plY3QtMicsXG4gICAgICBkYXRlOiAnMDMvbm92LzIwMTknLFxuICAgIH0sXG4gIF07XG4gIGxldCB0b2RvTGlzdEZvclByb2plY3QgPSBbXTtcblxuICBjb25zdCBhZGRUb2RvTGlzdCA9IChkYXRhKSA9PiB7XG4gICAgdG9kb0xpc3QucHVzaCh0b2RvKGRhdGEpKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8nLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xuICB9O1xuICBjb25zdCB1cGRhdGVUb2RvTGlzdEZvclByb2plY3QgPSAoaWQpID0+IHtcblx0XHR0b2RvTGlzdEZvclByb2plY3QgPSBbXTtcbiAgICB0b2RvTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGlkID09PSBlbGVtZW50LnByb2plY3RJZCkge1xuICAgICAgICB0b2RvTGlzdEZvclByb2plY3QucHVzaChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KVxuICB9O1xuXHRjb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IHRvZG9MaXN0O1xuICBjb25zdCBnZXRUb2RvTGlzdEZvclByb2plY3QgPSAoKSA9PiB0b2RvTGlzdEZvclByb2plY3Q7XG5cdGNvbnN0IHNldEluZm9Gcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSkge1xuICBcdFx0dG9kb0xpc3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKTtcbiAgICB9XG5cdH07XG5cdHJldHVybiB7XG4gICAgYWRkVG9kb0xpc3QsIGdldFRvZG9MaXN0ICwgc2V0SW5mb0Zyb21TdG9yYWdlLCB1cGRhdGVUb2RvTGlzdEZvclByb2plY3QsXG4gICAgZ2V0VG9kb0xpc3RGb3JQcm9qZWN0LFxuICB9O1xuXG59KSgpO1xuXG5cbi8vIGFkZFByb2plY3QoeyB0aXRsZTogJ2EnIH0pO1xuLy8gYWRkUHJvamVjdCh7IHRpdGxlOiAnYicgfSk7XG4vLyBzZW5kaW5nIHRvIGRpc3BsYXk6IGNhbGxcblxuLy8gY3JlYXRlIHRvZG8gbGlzdFxuZXhwb3J0IHsgcHJvamVjdENvbnRyb2xsZXIsIHRvZG9Db250cm9sbGVyIH07XG4iXSwic291cmNlUm9vdCI6IiJ9