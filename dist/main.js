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

  var submitFormProject = function submitFormProject() {// return submitformProject
  };

  var submitFormTodo = function submitFormTodo(fieldset) {
    // return
    fieldset.childNodes.forEach(function (field) {
      var value = field.querySelector('input').value;
      window.localStorage.setItem('test-todo', value);
    });
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
    submitFormProject: submitFormProject,
    submitFormTodo: submitFormTodo,
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
  var _display$getFormData = _display__WEBPACK_IMPORTED_MODULE_0__["default"].getFormData(word),
      fieldset = _display$getFormData.fieldset,
      open = _display$getFormData.open;

  fieldset.addEventListener('keyPress', function (e) {
    if (e.keyCode === 13) {
      if (word === 'project') {
        _display__WEBPACK_IMPORTED_MODULE_0__["default"].submitFormProject(fieldset);
      }

      if (word === 'todo') {
        _display__WEBPACK_IMPORTED_MODULE_0__["default"].submitFormTodo(fieldset);
      }

      ;
      _display__WEBPACK_IMPORTED_MODULE_0__["default"].makeBlankForm(fieldset);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMuanMiXSwibmFtZXMiOlsiZGlzcGxheSIsImNyZWF0ZVRhZyIsInRhZyIsImlkIiwiY2xhc3NlcyIsInRleHQiLCJvYmoiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdCIsImZvckVhY2giLCJlbGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJwcm9qZWN0R3JvdXAiLCJ0b2RvR3JvdXAiLCJnZXRQcm9qZWN0SWQiLCJwcm9qZWN0SWQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTnVtYmVyIiwic2V0SXRlbSIsImFkZFByb2plY3QiLCJwcm9qZWN0TmFtZSIsInByb2plY3QiLCJhcHBlbmRDaGlsZCIsImFkZFRvZG8iLCJ0aXRsZSIsImRhdGUiLCJ0b2RvIiwidGl0bGVUYWciLCJkYXRlVGFnIiwiYWRkUHJvamVjdEdyb3VwIiwicHJvamVjdEFycmF5IiwiZWxlbWVudCIsImFkZFRvZG9Hcm91cCIsInRvZG9BcnJheSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImhlYWRlclNldCIsImhlYWRlciIsIndvcmQiLCJwcm9qZWN0Rm9ybSIsImZvcm0iLCJmaWVsZHNldCIsImZpZWxkIiwiaW5wdXQiLCJ0b2RvRm9ybSIsImdldFByb2plY3RMaXN0IiwiY2hpbGROb2RlcyIsInN1Ym1pdEZvcm1Qcm9qZWN0Iiwic3VibWl0Rm9ybVRvZG8iLCJ2YWx1ZSIsInF1ZXJ5U2VsZWN0b3IiLCJtYWtlQmxhbmtGb3JtIiwidXBkYXRlQ3VycmVudFByb2plY3QiLCJuZXdUYWciLCJwcmV2aW91cyIsInJlbW92ZSIsImdldEZvcm1EYXRhIiwiZ2V0SWRJbmZvIiwiZ2V0RWxlbWVudEJ5SWQiLCJvcGVuIiwic2V0TWFpbkRpc3BsYXkiLCJwcm9qZWN0Q29udGFpbmVyIiwidG9kb0NvbnRhaW5lciIsIm1haW5Db250YWluZXIiLCJmYWN0b3J5UHJvamVjdCIsImZhY3RvcnlUb2RvIiwicHJvamVjdENvbnRyb2xsZXIiLCJzZXRJbmZvRnJvbVN0b3JhZ2UiLCJ0b2RvQ29udHJvbGxlciIsImdldFRvZG9MaXN0Rm9yUHJvamVjdCIsInVwZGF0ZVRvZG9MaXN0Rm9yUHJvamVjdCIsImNyZWF0ZUV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsInRhZ3MiLCJsZW5ndGgiLCJwcm9qZWN0TGlzdCIsImFkZFByb2plY3RMaXN0IiwiZGF0YSIsInB1c2giLCJKU09OIiwicGFyc2UiLCJ0b2RvTGlzdCIsInRvZG9MaXN0Rm9yUHJvamVjdCIsImFkZFRvZG9MaXN0IiwiY29uc29sZSIsImxvZyIsImdldFRvZG9MaXN0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNB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LGFBQU8sQ0FBQ0MsR0FBUixDQUFZMUYsRUFBWixFQUFnQmtDLE9BQU8sQ0FBQ2xCLFNBQXhCOztBQUNHLFVBQUloQixFQUFFLEtBQUtrQyxPQUFPLENBQUNsQixTQUFuQixFQUE4QjtBQUM1QnVFLDBCQUFrQixDQUFDSixJQUFuQixDQUF3QmpELE9BQXhCO0FBQ0Q7QUFDRixLQUxEO0FBTUQsR0FSRDs7QUFTRCxNQUFNeUQsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNTCxRQUFOO0FBQUEsR0FBcEI7O0FBQ0MsTUFBTWQscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QjtBQUFBLFdBQU1lLGtCQUFOO0FBQUEsR0FBOUI7O0FBQ0QsTUFBTWpCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUM5QixRQUFHckQsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixNQUE1QixDQUFILEVBQXdDO0FBQ3hDbUUsY0FBUSxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBV3BFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBWCxDQUFYO0FBQ0M7QUFDSCxHQUpEOztBQUtBLFNBQU87QUFDSnFFLGVBQVcsRUFBWEEsV0FESTtBQUNTRyxlQUFXLEVBQVhBLFdBRFQ7QUFDdUJyQixzQkFBa0IsRUFBbEJBLGtCQUR2QjtBQUMyQ0csNEJBQXdCLEVBQXhCQSx3QkFEM0M7QUFFSkQseUJBQXFCLEVBQXJCQTtBQUZJLEdBQVA7QUFLQSxDQTVDc0IsRUFBdkIsQyxDQStDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlVGFnID0gKHtcbiAgICB0YWcsIGlkLCBjbGFzc2VzLCB0ZXh0LFxuICB9KSA9PiB7XG4gICAgY29uc3Qgb2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gICAgaWYgKGlkKSBvYmouc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBpZiAoY2xhc3Nlcykge1xuICAgICAgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgb2JqLmNsYXNzTGlzdC5hZGQoZWxlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRleHQpIG9iai50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcbiAgY29uc3QgcHJvamVjdEdyb3VwID0gY3JlYXRlVGFnKHsgdGFnOiAnZGl2JywgY2xhc3NlczogJ3Byb2plY3QtY29udGVudC1ncm91cCcgfSk7XG4gIGNvbnN0IHRvZG9Hcm91cCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICd0b2RvLWNvbnRlbnQtZ3JvdXAnIH0pO1xuXG4gIGNvbnN0IGdldFByb2plY3RJZCA9ICgpID0+IHtcbiAgICBsZXQgcHJvamVjdElkID0gMTtcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0SWQnKSkge1xuICAgICAgcHJvamVjdElkID0gTnVtYmVyKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdElkJykpO1xuICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdElkKTtcbiAgICB9XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0SWQnLCBwcm9qZWN0SWQgKyAxKTtcbiAgICByZXR1cm4gcHJvamVjdElkO1xuICB9XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9ICh7IHByb2plY3ROYW1lLCBwcm9qZWN0SWQgPSAwIH0pID0+IHtcblx0XHRpZiAocHJvamVjdElkID09PSAwKXByb2plY3RJZCA9IGdldFByb2plY3RJZCgpO1xuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBpZDogYCR7cHJvamVjdElkfWAsIGNsYXNzZXM6ICdwcm9qZWN0LWNvbnRlbnQnIH0pO1xuXG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIHByb2plY3RHcm91cC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBhZGRUb2RvID0gKHsgdGl0bGUgLCBkYXRlIH0pID0+IHtcbiAgICBjb25zdCB0b2RvID0gY3JlYXRlVGFnKHsgdGFnOiAnZGl2JywgY2xhc3NlczogJ3RvZG8tY29udGVudCcgfSk7XG5cdFx0Y29uc3QgdGl0bGVUYWcgPSBjcmVhdGVUYWcoeyB0YWc6ICdoNCcsIGNsYXNzZXM6ICd0aXRsZScsIHRleHQ6IHRpdGxlIH0pO1xuXHRcdGNvbnN0IGRhdGVUYWcgPSBjcmVhdGVUYWcoe3RhZzogJ2RpdicsIGNsYXNzZXM6ICdkYXRlJywgdGV4dDogZGF0ZX0pO1xuXG5cdFx0dG9kby5hcHBlbmRDaGlsZCh0aXRsZVRhZyk7XG5cdFx0dG9kby5hcHBlbmRDaGlsZChkYXRlVGFnKTtcblx0XHR0b2RvR3JvdXAuYXBwZW5kQ2hpbGQodG9kbyk7XG5cdH07XG4gIGNvbnN0IGFkZFByb2plY3RHcm91cCA9IChwcm9qZWN0QXJyYXkpID0+IHtcblx0XHRwcm9qZWN0QXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdCAgYWRkUHJvamVjdChlbGVtZW50KTtcblx0ICB9KTtcblx0fVxuXG5cdGNvbnN0IGFkZFRvZG9Hcm91cCA9ICh0b2RvQXJyYXkpID0+IHtcblx0XHQvLyByZW1vdmUoKVxuXHRcdHdoaWxlICh0b2RvR3JvdXAuZmlyc3RDaGlsZCkge1xuXHRcdFx0dG9kb0dyb3VwLnJlbW92ZUNoaWxkKHRvZG9Hcm91cC5maXJzdENoaWxkKTtcblx0XHR9O1xuXHQgIHRvZG9BcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0Ly8gY29uc29sZS5sb2coZWxlbWVudCk7XG5cdCAgXHRhZGRUb2RvKGVsZW1lbnQpO1xuXHRcdH0pO1xuXHQvLy8vXG5cdH1cblxuICBjb25zdCBoZWFkZXJTZXQgPSAoaGVhZGVyLCB3b3JkKSA9PiB7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhZyh7IHRhZzogJ2gxJywgY2xhc3NlczogJ2gtdGl0bGUnLCB0ZXh0OiB3b3JkIH0pKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFnKHsgdGFnOiAnaDEnLCBjbGFzc2VzOiAnY3JlYXRlLWZvcm0nLCB0ZXh0OiAnKycgfSkpO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVUYWcoeyB0YWc6ICdmb3JtJywgY2xhc3NlczogJ3Byb2plY3QtZm9ybScgfSk7XG4gICAgY29uc3QgZmllbGRzZXQgPSBjcmVhdGVUYWcoeyB0YWc6ICdmaWVsZHNldCcgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG4gICAgbGV0IGZpZWxkID0gY3JlYXRlVGFnKHsgdGFnOiAnZGl2JywgY2xhc3NlczogJ2ZpZWxkJyB9KTtcbiAgICBsZXQgaW5wdXQgPSBjcmVhdGVUYWcoeyB0YWc6ICdpbnB1dCcsIGNsYXNzZXM6ICdwcm9qZWN0LW5hbWUnIH0pO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAncHJvamVjdCBuYW1lJyk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGZpZWxkKTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfTtcblxuICBjb25zdCB0b2RvRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlVGFnKHsgdGFnOiAnZm9ybScsIGNsYXNzZXM6ICd0b2RvLWZvcm0nIH0pO1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gY3JlYXRlVGFnKHsgdGFnOiAnZmllbGRzZXQnIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuICAgIGxldCBmaWVsZCA9IGNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdmaWVsZCcgfSk7XG4gICAgbGV0IGlucHV0ID0gY3JlYXRlVGFnKHsgdGFnOiAnaW5wdXQnLCBjbGFzc2VzOiAndGl0bGUnIH0pO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAndGl0bGUnKTtcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZmllbGQpO1xuXG4gICAgZmllbGQgPSBjcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAnZmllbGQnIH0pO1xuICAgIGlucHV0ID0gY3JlYXRlVGFnKHsgdGFnOiAnaW5wdXQnLCBjbGFzc2VzOiAnZGF0ZScgfSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdkYXRlJyk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGZpZWxkKTtcblxuICAgIHJldHVybiBmb3JtO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0R3JvdXAuY2hpbGROb2Rlcztcblx0fVxuXG5cdGNvbnN0IHN1Ym1pdEZvcm1Qcm9qZWN0ID0gKCkgPT4ge1xuXHRcdC8vIHJldHVybiBzdWJtaXRmb3JtUHJvamVjdFxuXHR9O1xuXG5cdGNvbnN0IHN1Ym1pdEZvcm1Ub2RvID0gKGZpZWxkc2V0KSA9PiB7XG5cdFx0Ly8gcmV0dXJuXG5cdFx0ZmllbGRzZXQuY2hpbGROb2Rlcy5mb3JFYWNoKGZpZWxkID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gZmllbGQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcblx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdC10b2RvJywgdmFsdWUpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IG1ha2VCbGFua0Zvcm0gPSAoZmllbGRzZXQpID0+IHtcblx0XHRmaWVsZHNldC5jaGlsZE5vZGVzLmZvckVhY2goZmllbGQgPT4ge1xuXHRcdFx0ZmllbGQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9ICcnO1xuXHRcdH0pO1xuXHR9O1xuXG4gIGNvbnN0IHVwZGF0ZUN1cnJlbnRQcm9qZWN0ID0gKG5ld1RhZykgPT4ge1xuICAgIGNvbnN0IHByZXZpb3VzID0gcHJvamVjdEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXByb2plY3QnKTtcbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgIHByZXZpb3VzLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtcHJvamVjdCcpO1xuICAgIH1cbiAgICBuZXdUYWcuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wcm9qZWN0Jyk7XG4gICAgcmV0dXJuIG5ld1RhZy5pZDtcblx0fVxuXG5cdGNvbnN0IGdldEZvcm1EYXRhID0gKGlkKSA9PiB7XG5cdFx0Y29uc3QgZ2V0SWRJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRcdGNvbnN0IG9wZW4gPSBnZXRJZEluZm8ucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1mb3JtJyk7XG5cdFx0Y29uc3QgZmllbGRzZXQgPSBnZXRJZEluZm8ucXVlcnlTZWxlY3RvcignZmllbGRzZXQnKTtcblx0XHRyZXR1cm4geyBmaWVsZHNldCwgb3Blbn07XG5cdH1cblxuICBjb25zdCBzZXRNYWluRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlVGFnKHsgdGFnOiAnc2VjdGlvbicsIGlkOiAncHJvamVjdCcsIGNsYXNzZXM6ICdjb2wtbWQtNCBwcmltYXJ5LWJnJyB9KTtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gY3JlYXRlVGFnKHsgdGFnOiAnc2VjdGlvbicsIGlkOiAndG9kbycsIGNsYXNzZXM6ICdjb2wtbWQtOCBzZWNvbmRhcnktYmcnIH0pO1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuICAgIGhlYWRlclNldChwcm9qZWN0Q29udGFpbmVyLCAnUHJvamVjdCcpO1xuICAgIGhlYWRlclNldCh0b2RvQ29udGFpbmVyLCAnVG9kbycpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEdyb3VwKTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Hcm91cCk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSgpKTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtKCkpO1xuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gIH07XG5cbiAgcmV0dXJuIHtcblx0XHRzZXRNYWluRGlzcGxheSwgYWRkUHJvamVjdCwgZ2V0UHJvamVjdExpc3QsIHVwZGF0ZUN1cnJlbnRQcm9qZWN0LCBhZGRUb2RvR3JvdXAsIGFkZFByb2plY3RHcm91cCwgZ2V0Rm9ybURhdGEsXG5cdFx0c3VibWl0Rm9ybVByb2plY3QsIHN1Ym1pdEZvcm1Ub2RvLCBtYWtlQmxhbmtGb3JtLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTtcbiIsImltcG9ydCBkaXNwbGF5IGZyb20gJy4vZGlzcGxheSc7XG5pbXBvcnQgeyBwcm9qZWN0Q29udHJvbGxlciwgdG9kb0NvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmNvbnN0IGZhY3RvcnlQcm9qZWN0ID0gW1xuICB7IHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcgfSxcbiAgeyBwcm9qZWN0TmFtZTogJ3NlY29uZCBwcm9qZWN0JyB9LFxuXTtcblxuY29uc3QgZmFjdG9yeVRvZG8gPSBbXG4gIHtcbiAgICB0aXRsZTogJ2ZpcnN0IHByb2plY3Qgb25lJyxcbiAgICBwcm9qZWN0TmFtZTogJ2ZpcnN0IHByb2plY3QnLFxuICAgIGRhdGU6ICcwMy9ub3YvMjAxOScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ2ZpcnN0IHByb2plY3QgdHdvJyxcbiAgICBwcm9qZWN0TmFtZTogJ2ZpcnN0IHByb2plY3QnLFxuICAgIGRhdGU6ICcwMy9ub3YvMjAxOScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ2ZpcnN0IHByb2plY3QgdGhyZWUnLFxuICAgIHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcsXG4gICAgZGF0ZTogJzAzL25vdi8yMDE5JyxcbiAgfSxcbl07XG5cbi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KGZhY3RvcnlQcm9qZWN0KSk7XG4vL1xuLy8gLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSkpO1xuLy9cbi8vIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kbycsIEpTT04uc3RyaW5naWZ5KGZhY3RvcnlUb2RvKSk7XG4vLyAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKSk7XG4vL1xud2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50UHJvamVjdCcsICdwcm9qZWN0LTEnKTtcblxucHJvamVjdENvbnRyb2xsZXIuc2V0SW5mb0Zyb21TdG9yYWdlKCk7XG50b2RvQ29udHJvbGxlci5zZXRJbmZvRnJvbVN0b3JhZ2UoKTtcblxuZGlzcGxheS5zZXRNYWluRGlzcGxheSgpO1xuLy8vLy9cblxuY29uc3QgcHJvamVjdEFycmF5ID0gcHJvamVjdENvbnRyb2xsZXIuZ2V0UHJvamVjdExpc3QoKTtcbmRpc3BsYXkuYWRkUHJvamVjdEdyb3VwKHByb2plY3RBcnJheSk7XG5cbmNvbnN0IHRvZG9BcnJheSA9IHRvZG9Db250cm9sbGVyLmdldFRvZG9MaXN0Rm9yUHJvamVjdCgpO1xuZGlzcGxheS5hZGRUb2RvR3JvdXAodG9kb0FycmF5KTtcblxuY29uc3QgdXBkYXRlQ3VycmVudFByb2plY3QgPSAodGFnKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJZCA9IGRpc3BsYXkudXBkYXRlQ3VycmVudFByb2plY3QodGFnKTtcbiAgdG9kb0NvbnRyb2xsZXIudXBkYXRlVG9kb0xpc3RGb3JQcm9qZWN0KHByb2plY3RJZCk7XG4gIGNvbnN0IHRvZG9BcnJheSA9IHRvZG9Db250cm9sbGVyLmdldFRvZG9MaXN0Rm9yUHJvamVjdCgpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgZGlzcGxheS5hZGRUb2RvR3JvdXAodG9kb0FycmF5KTtcbn1cblxuY29uc3QgY3JlYXRlRXZlbnRzID0gKHdvcmQpID0+IHtcblx0Y29uc3Qge2ZpZWxkc2V0LCBvcGVuIH0gPSBkaXNwbGF5LmdldEZvcm1EYXRhKHdvcmQpO1xuXHRmaWVsZHNldC5hZGRFdmVudExpc3RlbmVyKCdrZXlQcmVzcycsIGUgPT4ge1xuXHRcdGlmKGUua2V5Q29kZSA9PT0gMTMpIHtcblx0XHRcdGlmKHdvcmQgPT09ICdwcm9qZWN0Jykge1xuXHRcdFx0XHRkaXNwbGF5LnN1Ym1pdEZvcm1Qcm9qZWN0KGZpZWxkc2V0KTtcblx0XHRcdH1cblx0XHRcdGlmICh3b3JkID09PSAndG9kbycpIHtcblx0XHRcdFx0ZGlzcGxheS5zdWJtaXRGb3JtVG9kbyhmaWVsZHNldCk7XG5cdFx0XHR9O1xuXHRcdFx0ZGlzcGxheS5tYWtlQmxhbmtGb3JtKGZpZWxkc2V0KTtcblx0XHR9O1xuXHR9KTtcbiAgaWYgKHdvcmQgPT09ICdwcm9qZWN0Jykge1xuICAgIGNvbnN0IHRhZ3MgPSBkaXNwbGF5LmdldFByb2plY3RMaXN0KCk7XG4gICAgaWYgKHRhZ3MubGVuZ3RoID4gMCkge1xuICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgIHRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVwZGF0ZUN1cnJlbnRQcm9qZWN0KHRhZykpO1xuICAgICAgfSlcbiAgICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KHRhZ3NbdGFncy5sZW5ndGggLSAxXSk7XG4gICAgfVxuICB9XG5cbn1cblxuWydwcm9qZWN0JywgJ3RvZG8nXS5mb3JFYWNoKHdvcmQgPT4gY3JlYXRlRXZlbnRzKHdvcmQpKTtcblxuLy8gc2V0Q3VycmVudFByb2plY3QoKTtcbiIsIi8vIGNyZWF0ZSBwcm9qZWN0XG5jb25zdCBwcm9qZWN0ID0gKHsgcHJvamVjdE5hbWUsIHByb2plY3RJZCB9KSA9PiAoeyBwcm9qZWN0TmFtZSwgcHJvamVjdElkIH0pO1xuXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBwcm9qZWN0TGlzdCA9IFtcbiAgICB7IHByb2plY3ROYW1lOiAnZmlyc3QgcHJvamVjdCcsIHByb2plY3RJZDogJ3Byb2plY3QtMScgfSxcbiAgICB7IHByb2plY3ROYW1lOiAnc2Vjb25kIHByb2plY3QnLCBwcm9qZWN0SWQ6ICdwcm9qZWN0LTInIH0sXG4gIF07XG4gIGNvbnN0IGFkZFByb2plY3RMaXN0ID0gKGRhdGEpID0+IHtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QoZGF0YSkpO1xuICB9O1xuXG5cdGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4gcHJvamVjdExpc3Q7XG5cdGNvbnN0IHNldEluZm9Gcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0JykpIHtcbiAgICAgIHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSk7XG4gICAgfVxuXHR9O1xuXHRyZXR1cm4geyBhZGRQcm9qZWN0TGlzdCwgZ2V0UHJvamVjdExpc3QsIHNldEluZm9Gcm9tU3RvcmFnZSB9O1xufSkoKTtcblxuY29uc3QgdG9kbyA9ICh7IHRpdGxlLCBwcm9qZWN0SWQsIGRhdGUgfSkgPT4gKHsgdGl0bGUsIHByb2plY3RJZCwgZGF0ZSB9KTtcblxuY29uc3QgdG9kb0NvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBsZXQgdG9kb0xpc3QgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdmaXJzdCBwcm9qZWN0IG9uZScsXG4gICAgICBwcm9qZWN0SWQ6ICdwcm9qZWN0LTEnLFxuICAgICAgZGF0ZTogJzAzL25vdi8yMDE5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnZmlyc3QgcHJvamVjdCB0d28nLFxuICAgICAgcHJvamVjdElkOiAncHJvamVjdC0xJyxcbiAgICAgIGRhdGU6ICcwMy9ub3YvMjAxOScsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ3NlY29uZCBwcm9qZWN0IG9uZScsXG4gICAgICBwcm9qZWN0SWQ6ICdwcm9qZWN0LTInLFxuICAgICAgZGF0ZTogJzAzL25vdi8yMDE5JyxcbiAgICB9LFxuICBdO1xuICBsZXQgdG9kb0xpc3RGb3JQcm9qZWN0ID0gW107XG5cbiAgY29uc3QgYWRkVG9kb0xpc3QgPSAoZGF0YSkgPT4ge1xuICAgIHRvZG9MaXN0LnB1c2godG9kbyhkYXRhKSk7XG4gIH07XG4gIGNvbnN0IHVwZGF0ZVRvZG9MaXN0Rm9yUHJvamVjdCA9IChpZCkgPT4ge1xuXHRcdHRvZG9MaXN0Rm9yUHJvamVjdCA9IFtdO1xuICAgIHRvZG9MaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhpZCwgZWxlbWVudC5wcm9qZWN0SWQpO1xuICAgICAgaWYgKGlkID09PSBlbGVtZW50LnByb2plY3RJZCkge1xuICAgICAgICB0b2RvTGlzdEZvclByb2plY3QucHVzaChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KVxuICB9O1xuXHRjb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IHRvZG9MaXN0O1xuICBjb25zdCBnZXRUb2RvTGlzdEZvclByb2plY3QgPSAoKSA9PiB0b2RvTGlzdEZvclByb2plY3Q7XG5cdGNvbnN0IHNldEluZm9Gcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSkge1xuICBcdFx0dG9kb0xpc3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKTtcbiAgICB9XG5cdH07XG5cdHJldHVybiB7XG4gICAgYWRkVG9kb0xpc3QsIGdldFRvZG9MaXN0ICwgc2V0SW5mb0Zyb21TdG9yYWdlLCB1cGRhdGVUb2RvTGlzdEZvclByb2plY3QsXG4gICAgZ2V0VG9kb0xpc3RGb3JQcm9qZWN0LFxuICB9O1xuXG59KSgpO1xuXG5cbi8vIGFkZFByb2plY3QoeyB0aXRsZTogJ2EnIH0pO1xuLy8gYWRkUHJvamVjdCh7IHRpdGxlOiAnYicgfSk7XG4vLyBzZW5kaW5nIHRvIGRpc3BsYXk6IGNhbGxcblxuLy8gY3JlYXRlIHRvZG8gbGlzdFxuZXhwb3J0IHsgcHJvamVjdENvbnRyb2xsZXIsIHRvZG9Db250cm9sbGVyIH07XG4iXSwic291cmNlUm9vdCI6IiJ9