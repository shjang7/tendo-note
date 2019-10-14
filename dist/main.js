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

/***/ "./src/display/create_project.js":
/*!***************************************!*\
  !*** ./src/display/create_project.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/display/utils.js");


var createProject = function () {
  var addEach = function addEach(_ref) {
    var projectName = _ref.projectName,
        id = _ref.id;
    var project = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'h4',
      id: id,
      classes: 'project-content m-0'
    });
    project.textContent = projectName;
    var projectGroup = document.querySelector('.project-content-group');
    projectGroup.appendChild(project);
  };

  var addGroup = function addGroup(projectArray) {
    projectArray.forEach(function (e) {
      return addEach(e);
    });
  };

  return {
    addGroup: addGroup
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (createProject);

/***/ }),

/***/ "./src/display/create_todo.js":
/*!************************************!*\
  !*** ./src/display/create_todo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/display/utils.js");


var createTodo = function () {
  var doneStatusDisplay = function doneStatusDisplay(_ref) {
    var done = _ref.done,
        target = _ref.target,
        parent = _ref.parent;
    target.type = 'checkbox';

    if (done) {
      target.checked = true;
      parent.classList.add('done');
    }
  };

  var addEach = function addEach(_ref2) {
    var title = _ref2.title,
        date = _ref2.date,
        priority = _ref2.priority,
        description = _ref2.description,
        id = _ref2.id,
        done = _ref2.done;
    var todo = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'div',
      id: id,
      classes: "todo-content no-gutter ".concat(priority)
    });
    var doneTarget = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'input',
      classes: 'done-btn vertical-align-bottom'
    });
    doneStatusDisplay({
      done: done,
      target: doneTarget,
      parent: todo
    });
    todo.appendChild(doneTarget);
    todo.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'h4',
      classes: 'title col-md-3 text-nowrap m-0 vertical-align-bottom',
      text: title
    }));
    todo.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'div',
      classes: 'date col-md-3 vertical-align-bottom',
      text: date
    }));
    todo.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'div',
      classes: 'description col-md-3 text-nowrap vertical-align-bottom',
      text: description
    }));
    todo.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'div',
      classes: 'edit col-md-1 vertical-align-bottom',
      text: 'edit'
    }));
    todo.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'div',
      classes: 'delete col-md-1 vertical-align-bottom',
      text: 'delete'
    }));
    return todo;
  };

  var addGroup = function addGroup(newGroup) {
    var todoGroup = document.querySelector('.todo-content-group');

    while (todoGroup.firstChild) {
      todoGroup.removeChild(todoGroup.firstChild);
    }

    newGroup.forEach(function (e) {
      return todoGroup.appendChild(addEach(e));
    });
  };

  return {
    addGroup: addGroup
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (createTodo);

/***/ }),

/***/ "./src/display/delete_display.js":
/*!***************************************!*\
  !*** ./src/display/delete_display.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var deleteDisplay = function () {
  var getDeleteButtonAll = function getDeleteButtonAll(id) {
    var container = document.getElementById(id);
    return container.querySelectorAll('.delete');
  };

  var deleteUnit = function deleteUnit(button) {
    var object = button.parentNode;
    object.parentNode.removeChild(object);
    return object.id;
  };

  var getResetButton = function getResetButton() {
    var parent = document.getElementById('project');
    return parent.querySelector('.h-title');
  };

  return {
    getDeleteButtonAll: getDeleteButtonAll,
    deleteUnit: deleteUnit,
    getResetButton: getResetButton
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (deleteDisplay);

/***/ }),

/***/ "./src/display/form_controller.js":
/*!****************************************!*\
  !*** ./src/display/form_controller.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/display/utils.js");


var formController = function () {
  var buildField = function buildField(_ref) {
    var placeholder = _ref.placeholder,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        textarea = _ref.textarea;
    var inputType = textarea || 'input';
    var name = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].includeSpace(placeholder) ? _utils__WEBPACK_IMPORTED_MODULE_0__["default"].exchangeSpaceToDash(placeholder) : placeholder;
    var field = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'div',
      classes: "field ".concat(name)
    });
    var input = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: inputType,
      id: name,
      classes: name
    });
    input.setAttribute('placeholder', placeholder);
    input.name = name;
    if (type) input.type = type;
    if (defaultValue) input.defaultValue = defaultValue;
    field.appendChild(input);
    return field;
  };

  var priorityUnit = function priorityUnit(word, field, checked) {
    var input = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'input',
      id: "priority-".concat(word),
      classes: 'priority'
    });
    input.name = 'priority';
    input.type = 'radio';
    if (checked) input.checked = true;
    var label = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'label',
      text: word
    });
    label.setAttribute('for', "priority-".concat(word));
    field.appendChild(input);
    field.appendChild(label);
  };

  var priorityField = function priorityField() {
    var field = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'div',
      classes: 'field priority'
    });
    priorityUnit('normal', field, 'checked');
    priorityUnit('urgent', field);
    return field;
  };

  var createForm = function createForm(_ref2) {
    var option = _ref2.option;
    var form = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'form',
      classes: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].exchangeSpaceToDash("".concat(option, " form"))
    });
    var fieldset = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'fieldset'
    });
    form.appendChild(fieldset);

    if (option === 'project') {
      fieldset.appendChild(buildField({
        placeholder: 'project name'
      }));
    } else {
      fieldset.appendChild(buildField({
        placeholder: 'title'
      }));
      fieldset.appendChild(buildField({
        placeholder: 'date',
        type: 'date',
        defaultValue: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getDateFromToday(0)
      }));
      fieldset.appendChild(priorityField());
      fieldset.appendChild(buildField({
        placeholder: 'description',
        textarea: 'textarea'
      }));
    }

    return form;
  };

  var getRadioInfo = function getRadioInfo(data) {
    var radios = document.getElementsByName('priority');
    radios.forEach(function (radio) {
      if (radio.checked) {
        data[radio.name] = radio.id;
      }
    });
  };

  var makeBlankForm = function makeBlankForm(form) {
    form.querySelectorAll('.field').forEach(function (field) {
      var selector = field.querySelector('input') || field.querySelector('textarea');
      selector.value = '';
    });
  };

  var getFormLayout = function getFormLayout(id) {
    var selector = document.getElementById(id);
    var open = selector.querySelector('.create-form');
    var form = selector.querySelector('form');
    return {
      form: form,
      open: open
    };
  };

  var getFormData = function getFormData(form) {
    var data = {};
    form.querySelectorAll('.field').forEach(function (field) {
      var selector = field.querySelector('input') || field.querySelector('textarea');

      if (selector.type === 'radio') {
        getRadioInfo(data);
      } else {
        var key = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].exchangeDashToCapital(selector.name);
        var value = selector.value;
        data[key] = value;
      }
    });
    return data;
  };

  return {
    createForm: createForm,
    getFormData: getFormData,
    makeBlankForm: makeBlankForm,
    getFormLayout: getFormLayout
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (formController);

/***/ }),

/***/ "./src/display/layout.js":
/*!*******************************!*\
  !*** ./src/display/layout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/display/utils.js");
/* harmony import */ var _form_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form_controller */ "./src/display/form_controller.js");



var layout = function () {
  var headerSet = function headerSet(header, word) {
    header.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'h1',
      classes: 'h-title',
      text: word
    }));
    header.appendChild(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'h1',
      classes: 'create-form',
      text: '+'
    }));
  };

  var setProject = function setProject(projectContainer) {
    var projectGroup = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'div',
      classes: 'project-content-group'
    });
    headerSet(projectContainer, 'Project');
    projectContainer.appendChild(projectGroup);
    return projectContainer;
  };

  var setTodo = function setTodo(todoContainer) {
    var todoGroup = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'div',
      classes: 'todo-content-group'
    });
    headerSet(todoContainer, 'Todo');
    todoContainer.appendChild(todoGroup);
    return todoContainer;
  };

  var set = function set() {
    var mainContainer = document.querySelector('#content');
    var projectContainer = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'section',
      id: 'project',
      classes: 'col-md-4 primary-bg'
    });
    var todoContainer = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'section',
      id: 'todo',
      classes: 'col-md-8 secondary-bg'
    });
    mainContainer.classList.add('secondary-bg');
    mainContainer.appendChild(setProject(projectContainer));
    mainContainer.appendChild(setTodo(todoContainer));
    projectContainer.appendChild(_form_controller__WEBPACK_IMPORTED_MODULE_1__["default"].createForm({
      option: 'project'
    }));
    todoContainer.appendChild(_form_controller__WEBPACK_IMPORTED_MODULE_1__["default"].createForm({
      option: 'todo'
    }));
    return mainContainer;
  };

  return {
    set: set
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (layout);

/***/ }),

/***/ "./src/display/update.js":
/*!*******************************!*\
  !*** ./src/display/update.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var update = function () {
  var getDoneButtonAll = function getDoneButtonAll(id) {
    var container = document.getElementById(id);
    return container.querySelectorAll('.done-btn');
  };

  var done = function done(button) {
    var object = button.parentNode;
    object.classList.toggle('done');
    return object.id;
  };

  var getProjectList = function getProjectList() {
    return document.querySelector('.project-content-group').childNodes;
  };

  var updateCurrentProject = function updateCurrentProject(newTag) {
    var projectGroup = document.querySelector('.project-content-group');
    var previous = projectGroup.querySelector('.current-project');
    if (previous) previous.classList.remove('current-project');
    newTag.classList.add('current-project');
    return newTag.id;
  };

  var lastCurrentProject = function lastCurrentProject(projectId) {
    if (projectId) {
      return document.querySelector("#".concat(projectId));
    }

    if (document.querySelector('.project-content-group').childNodes.length > 0) {
      return document.querySelector('.project-content-group').lastChild;
    }

    return undefined;
  };

  return {
    getDoneButtonAll: getDoneButtonAll,
    done: done,
    updateCurrentProject: updateCurrentProject,
    getProjectList: getProjectList,
    lastCurrentProject: lastCurrentProject
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (update);

/***/ }),

/***/ "./src/display/utils.js":
/*!******************************!*\
  !*** ./src/display/utils.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var utils = function () {
  var createTag = function createTag(_ref) {
    var tag = _ref.tag,
        id = _ref.id,
        classes = _ref.classes,
        text = _ref.text;
    var obj = document.createElement(tag);
    if (id) obj.setAttribute('id', id);
    if (classes) classes.split(' ').forEach(function (elem) {
      return obj.classList.add(elem);
    });
    if (text) obj.textContent = text;
    return obj;
  };

  var getDateFromToday = function getDateFromToday(addDate) {
    var date = new Date();
    date.setDate(date.getDate() + addDate);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!

    var yyyy = date.getFullYear();
    date = "".concat(yyyy, "-").concat(mm, "-").concat(dd);
    return date;
  };

  var resizeTextarea = function resizeTextarea() {
    var textarea = document.querySelector('textarea');
    textarea.addEventListener('keyup', function () {
      textarea.style.height = 'auto';
      textarea.style.height = "".concat(20 + textarea.scrollHeight, "px");
    });
  };

  var focusSet = function focusSet() {
    var formGroup = document.querySelectorAll('form');

    for (var i = 0; i < formGroup.length; i++) {
      if (formGroup[i].style.display !== 'none') {
        formGroup[i].querySelector('input').focus();
        break;
      }
    }
  };

  var eventSet = function eventSet() {
    resizeTextarea();
    focusSet();
  };

  var eliminateFirstOfDash = function eliminateFirstOfDash(words) {
    return words.split('-')[1];
  };

  var capitalize = function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  var exchangeDashToCapital = function exchangeDashToCapital(word) {
    var words = word.split('-');

    if (words.length > 1) {
      words[1] = capitalize(words[1]);
    }

    return words.join('');
  };

  var exchangeSpaceToDash = function exchangeSpaceToDash(word) {
    return word.split(' ').join('-');
  };

  var includeSpace = function includeSpace(word) {
    return word.split(' ').length > 1;
  };

  return {
    createTag: createTag,
    getDateFromToday: getDateFromToday,
    eventSet: eventSet,
    eliminateFirstOfDash: eliminateFirstOfDash,
    exchangeDashToCapital: exchangeDashToCapital,
    exchangeSpaceToDash: exchangeSpaceToDash,
    includeSpace: includeSpace
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (utils);

/***/ }),

/***/ "./src/display_controller.js":
/*!***********************************!*\
  !*** ./src/display_controller.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display/create_project */ "./src/display/create_project.js");
/* harmony import */ var _display_create_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/create_todo */ "./src/display/create_todo.js");
/* harmony import */ var _display_form_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/form_controller */ "./src/display/form_controller.js");
/* harmony import */ var _display_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/layout */ "./src/display/layout.js");
/* harmony import */ var _display_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display/utils */ "./src/display/utils.js");
/* harmony import */ var _display_update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display/update */ "./src/display/update.js");
/* harmony import */ var _display_delete_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display/delete_display */ "./src/display/delete_display.js");








var displayController = function () {
  var addProjectGroup = function addProjectGroup(projectArray) {
    return _display_create_project__WEBPACK_IMPORTED_MODULE_0__["default"].addGroup(projectArray);
  };

  var addTodoGroup = function addTodoGroup(todoArray) {
    return _display_create_todo__WEBPACK_IMPORTED_MODULE_1__["default"].addGroup(todoArray);
  };

  var getFormLayout = function getFormLayout(id) {
    return _display_form_controller__WEBPACK_IMPORTED_MODULE_2__["default"].getFormLayout(id);
  };

  var getFormData = function getFormData(form, projectId) {
    return _display_form_controller__WEBPACK_IMPORTED_MODULE_2__["default"].getFormData(form, projectId);
  };

  var makeBlankForm = function makeBlankForm(form) {
    return _display_form_controller__WEBPACK_IMPORTED_MODULE_2__["default"].makeBlankForm(form);
  };

  var getDeleteButtonAll = function getDeleteButtonAll(id) {
    return _display_delete_display__WEBPACK_IMPORTED_MODULE_6__["default"].getDeleteButtonAll(id);
  };

  var deleteUnit = function deleteUnit(button) {
    return _display_delete_display__WEBPACK_IMPORTED_MODULE_6__["default"].deleteUnit(button);
  };

  var getResetButton = function getResetButton() {
    return _display_delete_display__WEBPACK_IMPORTED_MODULE_6__["default"].getResetButton();
  };

  var getProjectList = function getProjectList() {
    return _display_update__WEBPACK_IMPORTED_MODULE_5__["default"].getProjectList();
  };

  var updateCurrentProject = function updateCurrentProject(newTag) {
    return _display_update__WEBPACK_IMPORTED_MODULE_5__["default"].updateCurrentProject(newTag);
  };

  var lastCurrentProject = function lastCurrentProject(projectId) {
    return _display_update__WEBPACK_IMPORTED_MODULE_5__["default"].lastCurrentProject(projectId);
  };

  var getDoneButtonAll = function getDoneButtonAll(id) {
    return _display_update__WEBPACK_IMPORTED_MODULE_5__["default"].getDoneButtonAll(id);
  };

  var doneUnit = function doneUnit(button) {
    return _display_update__WEBPACK_IMPORTED_MODULE_5__["default"].done(button);
  };

  var setMainDisplay = function setMainDisplay() {
    _display_layout__WEBPACK_IMPORTED_MODULE_3__["default"].set();
    _display_utils__WEBPACK_IMPORTED_MODULE_4__["default"].eventSet();
  };

  return {
    setMainDisplay: setMainDisplay,
    addTodoGroup: addTodoGroup,
    addProjectGroup: addProjectGroup,
    getFormLayout: getFormLayout,
    getFormData: getFormData,
    makeBlankForm: makeBlankForm,
    getDeleteButtonAll: getDeleteButtonAll,
    deleteUnit: deleteUnit,
    getResetButton: getResetButton,
    getProjectList: getProjectList,
    updateCurrentProject: updateCurrentProject,
    lastCurrentProject: lastCurrentProject,
    getDoneButtonAll: getDoneButtonAll,
    doneUnit: doneUnit
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (displayController);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display_controller */ "./src/display_controller.js");
/* harmony import */ var _logic_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic_controller */ "./src/logic_controller.js");



var interfaceMain = function () {
  var projectSetting = function projectSetting() {
    var projectArray = _logic_controller__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectList();
    _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].addProjectGroup(projectArray);
  };

  var todoSetting = function todoSetting() {
    var todoArray = _logic_controller__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoListForProject();
    _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].addTodoGroup(todoArray);
  };

  var updateCurrentProject = function updateCurrentProject(btn) {
    var projectId = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].updateCurrentProject(btn);
    _logic_controller__WEBPACK_IMPORTED_MODULE_1__["default"].updateTodoListForProject(projectId);
    todoSetting();
  };

  var submitFormProject = function submitFormProject(form) {
    var data = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getFormData(form);
    _logic_controller__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectList(data);
  };

  var submitFormTodo = function submitFormTodo(form) {
    var data = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getFormData(form);
    data.projectId = _logic_controller__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();
    _logic_controller__WEBPACK_IMPORTED_MODULE_1__["default"].addTodoList(data);
  };

  var setInitialCurrentProject = function setInitialCurrentProject() {
    var projectId = _logic_controller__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();

    if (projectId) {
      var lastProject = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].lastCurrentProject(projectId);
      if (lastProject) updateCurrentProject(lastProject);
    }
  };

  var afterSubmission = function afterSubmission(form) {
    _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].makeBlankForm(form);
    window.location.reload();
  };

  var init = function init() {
    _logic_controller__WEBPACK_IMPORTED_MODULE_1__["default"].set();
    _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].setMainDisplay();
    projectSetting();
    setInitialCurrentProject();
  };

  var formSubmissionEvent = function formSubmissionEvent(form, sort) {
    form.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        if (sort === 'project') submitFormProject(form);
        if (sort === 'todo') submitFormTodo(form);
        afterSubmission(form);
      }
    });
  };

  var projectSwitchEvent = function projectSwitchEvent() {
    var buttons = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectList();

    if (buttons.length > 0) {
      buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          updateCurrentProject(button);
          window.location.reload();
        });
      });
    }
  };

  var deleteUnit = function deleteUnit(button) {
    var id = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].deleteUnit(button);
    _logic_controller__WEBPACK_IMPORTED_MODULE_1__["default"].deleteUnit(id);
  };

  var deleteEvent = function deleteEvent(word) {
    var deleteAllButton = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getDeleteButtonAll(word);
    deleteAllButton.forEach(function (deleteBtn) {
      deleteBtn.addEventListener('click', function () {
        deleteUnit(deleteBtn);
      });
    });
  };

  var doneUnit = function doneUnit(button) {
    var id = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].doneUnit(button);
    _logic_controller__WEBPACK_IMPORTED_MODULE_1__["default"].doneUnit(id);
  };

  var doneEvent = function doneEvent(word) {
    var doneAllBtn = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getDoneButtonAll(word);
    doneAllBtn.forEach(function (doneBtn) {
      doneBtn.addEventListener('click', function () {
        doneUnit(doneBtn);
      });
    });
  };

  var programResetEvent = function programResetEvent() {
    var resetBtn = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getResetButton();
    resetBtn.addEventListener('click', function () {
      _logic_controller__WEBPACK_IMPORTED_MODULE_1__["default"].resetAll();
      window.location.reload();
    });
  };

  var createEvents = function createEvents(word) {
    var _displayController$ge = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getFormLayout(word),
        form = _displayController$ge.form; // const { form, open } = displayController.getFormLayout(word);


    formSubmissionEvent(form, word);

    if (word === 'todo') {
      deleteEvent(word);
      doneEvent(word);
    }

    if (word === 'project') {
      projectSwitchEvent();
      programResetEvent();
    }
  };

  var start = function start() {
    init();
    ['project', 'todo'].forEach(function (word) {
      return createEvents(word);
    });
  };

  return {
    start: start
  };
}();

interfaceMain.start();

/***/ }),

/***/ "./src/logic_controller.js":
/*!*********************************!*\
  !*** ./src/logic_controller.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logics_create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logics/create_project */ "./src/logics/create_project.js");
/* harmony import */ var _logics_create_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logics/create_todo */ "./src/logics/create_todo.js");
/* harmony import */ var _logics_provide_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logics/provide_logic */ "./src/logics/provide_logic.js");
/* harmony import */ var _logics_delete_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logics/delete_logic */ "./src/logics/delete_logic.js");
/* harmony import */ var _logics_update_logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logics/update_logic */ "./src/logics/update_logic.js");






var logicController = function () {
  var addProjectList = function addProjectList(data) {
    return _logics_create_project__WEBPACK_IMPORTED_MODULE_0__["default"].addProjectList(data);
  };

  var addTodoList = function addTodoList(data) {
    return _logics_create_todo__WEBPACK_IMPORTED_MODULE_1__["default"].addTodoList(data);
  };

  var updateTodoListForProject = function updateTodoListForProject(id) {
    return _logics_create_todo__WEBPACK_IMPORTED_MODULE_1__["default"].setTodoListForProject(id);
  };

  var getCurrentProject = function getCurrentProject() {
    return _logics_provide_logic__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentProject();
  };

  var getProjectList = function getProjectList() {
    return _logics_provide_logic__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectList();
  };

  var getTodoListForProject = function getTodoListForProject() {
    return _logics_provide_logic__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoListForProject();
  };

  var deleteUnit = function deleteUnit(id) {
    return _logics_delete_logic__WEBPACK_IMPORTED_MODULE_3__["default"].deleteUnit(id);
  };

  var resetAll = function resetAll() {
    return _logics_delete_logic__WEBPACK_IMPORTED_MODULE_3__["default"].resetAll();
  };

  var doneUnit = function doneUnit(id) {
    return _logics_update_logic__WEBPACK_IMPORTED_MODULE_4__["default"].done(id);
  };

  var set = function set() {
    _logics_create_project__WEBPACK_IMPORTED_MODULE_0__["default"].setDefaultProject();
    _logics_create_todo__WEBPACK_IMPORTED_MODULE_1__["default"].setDefaultTodo();
    _logics_create_project__WEBPACK_IMPORTED_MODULE_0__["default"].setInfoFromStorage();
    _logics_create_todo__WEBPACK_IMPORTED_MODULE_1__["default"].setInfoFromStorage();
  };

  return {
    set: set,
    addProjectList: addProjectList,
    addTodoList: addTodoList,
    getProjectList: getProjectList,
    getTodoListForProject: getTodoListForProject,
    updateTodoListForProject: updateTodoListForProject,
    deleteUnit: deleteUnit,
    doneUnit: doneUnit,
    getCurrentProject: getCurrentProject,
    resetAll: resetAll
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (logicController);

/***/ }),

/***/ "./src/logics/create_project.js":
/*!**************************************!*\
  !*** ./src/logics/create_project.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/logics/objects.js");
/* harmony import */ var _logic_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic_utils */ "./src/logics/logic_utils.js");



var createProject = function () {
  var setDefaultProject = function setDefaultProject() {
    if (!window.localStorage.getItem('project') || JSON.parse(window.localStorage.getItem('project')).length === 0) {
      var defaultProject = [{
        projectName: 'default project with long name',
        id: 'project-1'
      }];
      _logic_utils__WEBPACK_IMPORTED_MODULE_1__["default"].updateJsonInfoToStorage({
        sort: 'project',
        data: defaultProject
      });
      _logic_utils__WEBPACK_IMPORTED_MODULE_1__["default"].addJsonInfoToStorage({
        sort: 'ids',
        data: {
          projectLastId: defaultProject[0].id,
          projectCurrentId: defaultProject[0].id
        }
      });
    }
  };

  var addProjectList = function addProjectList(_ref) {
    var projectName = _ref.projectName,
        id = _ref.id;
    var copyProjectId = id || _logic_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getNewId('project');
    _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].projectList.push(Object(_objects__WEBPACK_IMPORTED_MODULE_0__["project"])({
      projectName: projectName,
      id: copyProjectId
    }));
    window.localStorage.setItem('project', JSON.stringify(_objects__WEBPACK_IMPORTED_MODULE_0__["savings"].projectList));
  };

  var setInfoFromStorage = function setInfoFromStorage() {
    var val = _logic_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('project');
    if (val) _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].projectList = val;
  };

  return {
    addProjectList: addProjectList,
    setInfoFromStorage: setInfoFromStorage,
    setDefaultProject: setDefaultProject
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (createProject);

/***/ }),

/***/ "./src/logics/create_todo.js":
/*!***********************************!*\
  !*** ./src/logics/create_todo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/logics/objects.js");
/* harmony import */ var _logic_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic_utils */ "./src/logics/logic_utils.js");
/* harmony import */ var _samples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./samples */ "./src/logics/samples.js");




var createTodo = function () {
  var setDefaultTodo = function setDefaultTodo() {
    if (!window.localStorage.getItem('todo') || JSON.parse(window.localStorage.getItem('todo')).length === 0) {
      _logic_utils__WEBPACK_IMPORTED_MODULE_1__["default"].updateJsonInfoToStorage({
        sort: 'todo',
        data: _samples__WEBPACK_IMPORTED_MODULE_2__["default"]
      });
      var idsData = {
        todoLastId: _samples__WEBPACK_IMPORTED_MODULE_2__["default"][_samples__WEBPACK_IMPORTED_MODULE_2__["default"].length - 1].id,
        todoCurrentId: _samples__WEBPACK_IMPORTED_MODULE_2__["default"][_samples__WEBPACK_IMPORTED_MODULE_2__["default"].length - 1].id
      };
      _logic_utils__WEBPACK_IMPORTED_MODULE_1__["default"].addJsonInfoToStorage({
        sort: 'ids',
        data: idsData
      });
    }
  };

  var addTodoList = function addTodoList(data) {
    if (!data.id) data.id = _logic_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getNewId('todo');
    _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoList.push(Object(_objects__WEBPACK_IMPORTED_MODULE_0__["todo"])(data));
    _logic_utils__WEBPACK_IMPORTED_MODULE_1__["default"].updateJsonInfoToStorage({
      sort: 'todo',
      data: _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoList
    });
  };

  var setInfoFromStorage = function setInfoFromStorage() {
    var val = _logic_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('todo');
    if (val) _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoList = val;
  };

  var setTodoListForProject = function setTodoListForProject(projectId) {
    _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoListForProject = _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoList.filter(function (e) {
      return e.projectId === projectId;
    });
    _logic_utils__WEBPACK_IMPORTED_MODULE_1__["default"].addJsonInfoToStorage({
      sort: 'ids',
      data: {
        projectCurrentId: projectId
      }
    });
  };

  return {
    addTodoList: addTodoList,
    setTodoListForProject: setTodoListForProject,
    setInfoFromStorage: setInfoFromStorage,
    setDefaultTodo: setDefaultTodo
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (createTodo);

/***/ }),

/***/ "./src/logics/delete_logic.js":
/*!************************************!*\
  !*** ./src/logics/delete_logic.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic_utils */ "./src/logics/logic_utils.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ "./src/logics/objects.js");



var deleteLogic = function () {
  var deleteUnit = function deleteUnit(id) {
    var sort = id.split('-')[0];
    var data = _logic_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getJsonInfoFromStorage(sort);
    var updated = data ? data.filter(function (e) {
      return e.id !== id;
    }) : [];
    _objects__WEBPACK_IMPORTED_MODULE_1__["savings"]["".concat(sort, "List")] = updated;
    _logic_utils__WEBPACK_IMPORTED_MODULE_0__["default"].updateJsonInfoToStorage({
      sort: sort,
      data: updated
    });
  };

  var resetAll = function resetAll() {
    window.localStorage.clear();
  };

  return {
    deleteUnit: deleteUnit,
    resetAll: resetAll
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (deleteLogic);

/***/ }),

/***/ "./src/logics/logic_utils.js":
/*!***********************************!*\
  !*** ./src/logics/logic_utils.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var logicUtils = function () {
  var getJsonInfoFromStorage = function getJsonInfoFromStorage(sort) {
    if (window.localStorage.getItem(sort)) {
      return JSON.parse(window.localStorage.getItem(sort));
    }

    return undefined;
  };

  var updateJsonInfoToStorage = function updateJsonInfoToStorage(_ref) {
    var sort = _ref.sort,
        data = _ref.data;
    window.localStorage.setItem(sort, JSON.stringify(data));
  };

  var addJsonInfoToStorage = function addJsonInfoToStorage(_ref2) {
    var sort = _ref2.sort,
        data = _ref2.data;
    var originalData = getJsonInfoFromStorage(sort);
    var update = originalData || {};

    for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          k = _Object$entries$_i[0],
          v = _Object$entries$_i[1];

      update[k] = v;
    }

    window.localStorage.setItem(sort, JSON.stringify(update));
  };

  var getNewId = function getNewId(sort) {
    var data = {};
    var id;

    if (getJsonInfoFromStorage('ids') && getJsonInfoFromStorage('ids')["".concat(sort, "LastId")]) {
      id = getJsonInfoFromStorage('ids')["".concat(sort, "LastId")];
      var newNumber = Number(id.split('-')[1]) + 1;
      id = "".concat(sort, "-").concat(newNumber);
    } else {
      id = "".concat(sort, "-1");
    }

    data["".concat(sort, "LastId")] = id;
    data["".concat(sort, "CurrentId")] = id;
    addJsonInfoToStorage({
      sort: 'ids',
      data: data
    });
    return id;
  };

  return {
    getJsonInfoFromStorage: getJsonInfoFromStorage,
    updateJsonInfoToStorage: updateJsonInfoToStorage,
    getNewId: getNewId,
    addJsonInfoToStorage: addJsonInfoToStorage
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (logicUtils);

/***/ }),

/***/ "./src/logics/objects.js":
/*!*******************************!*\
  !*** ./src/logics/objects.js ***!
  \*******************************/
/*! exports provided: project, todo, savings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todo", function() { return todo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savings", function() { return savings; });
var project = function project(_ref) {
  var projectName = _ref.projectName,
      id = _ref.id;
  return {
    projectName: projectName,
    id: id
  };
};

var todo = function todo(_ref2) {
  var title = _ref2.title,
      projectId = _ref2.projectId,
      date = _ref2.date,
      priority = _ref2.priority,
      description = _ref2.description,
      id = _ref2.id,
      _ref2$done = _ref2.done,
      done = _ref2$done === void 0 ? false : _ref2$done;
  return {
    title: title,
    projectId: projectId,
    date: date,
    priority: priority,
    description: description,
    id: id,
    done: done
  };
};

var savings = function () {
  var projectList = [];
  var todoList = [];
  var todoListForProject = [];
  return {
    projectList: projectList,
    todoList: todoList,
    todoListForProject: todoListForProject
  };
}();



/***/ }),

/***/ "./src/logics/provide_logic.js":
/*!*************************************!*\
  !*** ./src/logics/provide_logic.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/logics/objects.js");
/* harmony import */ var _logic_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic_utils */ "./src/logics/logic_utils.js");



var provideLogic = function () {
  var getCurrentProject = function getCurrentProject() {
    var ids = _logic_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('ids');
    if (!ids) return undefined;
    return ids.projectCurrentId;
  };

  var getProjectList = function getProjectList() {
    return _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].projectList;
  };

  var getTodoListForProject = function getTodoListForProject() {
    return _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoListForProject;
  };

  return {
    getCurrentProject: getCurrentProject,
    getProjectList: getProjectList,
    getTodoListForProject: getTodoListForProject
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (provideLogic);

/***/ }),

/***/ "./src/logics/samples.js":
/*!*******************************!*\
  !*** ./src/logics/samples.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var defaultTodo = [{
  title: 'first long long long title',
  projectId: 'project-1',
  date: '2019-10-14',
  priority: 'priority-normal',
  description: 'example long long description and more',
  id: 'todo-1',
  done: false
}, {
  title: 'second title',
  projectId: 'project-1',
  date: '2019-10-15',
  priority: 'priority-urgent',
  description: 'example description',
  id: 'todo-2',
  done: false
}, {
  title: 'third title',
  projectId: 'project-1',
  date: '2019-10-15',
  priority: 'priority-normal',
  description: 'example description',
  id: 'todo-3',
  done: false
}];
/* harmony default export */ __webpack_exports__["default"] = (defaultTodo);

/***/ }),

/***/ "./src/logics/update_logic.js":
/*!************************************!*\
  !*** ./src/logics/update_logic.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic_utils */ "./src/logics/logic_utils.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ "./src/logics/objects.js");



var updateLogic = function () {
  var done = function done(id) {
    var sort = id.split('-')[0];
    var data = _logic_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getJsonInfoFromStorage(sort);
    var obj = data.find(function (e) {
      return e.id === id;
    });
    if (obj) obj.done = !obj.done;
    _objects__WEBPACK_IMPORTED_MODULE_1__["savings"]["".concat(sort, "List")] = data;
    _logic_utils__WEBPACK_IMPORTED_MODULE_0__["default"].updateJsonInfoToStorage({
      sort: sort,
      data: data
    });
  };

  return {
    done: done
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (updateLogic);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvY3JlYXRlX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvY3JlYXRlX3RvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvZGVsZXRlX2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvZm9ybV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXlfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljcy9jcmVhdGVfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWNzL2NyZWF0ZV90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpY3MvZGVsZXRlX2xvZ2ljLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpY3MvbG9naWNfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljcy9vYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpY3MvcHJvdmlkZV9sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWNzL3NhbXBsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljcy91cGRhdGVfbG9naWMuanMiXSwibmFtZXMiOlsiY3JlYXRlUHJvamVjdCIsImFkZEVhY2giLCJwcm9qZWN0TmFtZSIsImlkIiwicHJvamVjdCIsInV0aWxzIiwiY3JlYXRlVGFnIiwidGFnIiwiY2xhc3NlcyIsInRleHRDb250ZW50IiwicHJvamVjdEdyb3VwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJhZGRHcm91cCIsInByb2plY3RBcnJheSIsImZvckVhY2giLCJlIiwiY3JlYXRlVG9kbyIsImRvbmVTdGF0dXNEaXNwbGF5IiwiZG9uZSIsInRhcmdldCIsInBhcmVudCIsInR5cGUiLCJjaGVja2VkIiwiY2xhc3NMaXN0IiwiYWRkIiwidGl0bGUiLCJkYXRlIiwicHJpb3JpdHkiLCJkZXNjcmlwdGlvbiIsInRvZG8iLCJkb25lVGFyZ2V0IiwidGV4dCIsIm5ld0dyb3VwIiwidG9kb0dyb3VwIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZGVsZXRlRGlzcGxheSIsImdldERlbGV0ZUJ1dHRvbkFsbCIsImNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsImRlbGV0ZVVuaXQiLCJidXR0b24iLCJvYmplY3QiLCJwYXJlbnROb2RlIiwiZ2V0UmVzZXRCdXR0b24iLCJmb3JtQ29udHJvbGxlciIsImJ1aWxkRmllbGQiLCJwbGFjZWhvbGRlciIsImRlZmF1bHRWYWx1ZSIsInRleHRhcmVhIiwiaW5wdXRUeXBlIiwibmFtZSIsImluY2x1ZGVTcGFjZSIsImV4Y2hhbmdlU3BhY2VUb0Rhc2giLCJmaWVsZCIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwicHJpb3JpdHlVbml0Iiwid29yZCIsImxhYmVsIiwicHJpb3JpdHlGaWVsZCIsImNyZWF0ZUZvcm0iLCJvcHRpb24iLCJmb3JtIiwiZmllbGRzZXQiLCJnZXREYXRlRnJvbVRvZGF5IiwiZ2V0UmFkaW9JbmZvIiwiZGF0YSIsInJhZGlvcyIsImdldEVsZW1lbnRzQnlOYW1lIiwicmFkaW8iLCJtYWtlQmxhbmtGb3JtIiwic2VsZWN0b3IiLCJ2YWx1ZSIsImdldEZvcm1MYXlvdXQiLCJvcGVuIiwiZ2V0Rm9ybURhdGEiLCJrZXkiLCJleGNoYW5nZURhc2hUb0NhcGl0YWwiLCJsYXlvdXQiLCJoZWFkZXJTZXQiLCJoZWFkZXIiLCJzZXRQcm9qZWN0IiwicHJvamVjdENvbnRhaW5lciIsInNldFRvZG8iLCJ0b2RvQ29udGFpbmVyIiwic2V0IiwibWFpbkNvbnRhaW5lciIsInVwZGF0ZSIsImdldERvbmVCdXR0b25BbGwiLCJ0b2dnbGUiLCJnZXRQcm9qZWN0TGlzdCIsImNoaWxkTm9kZXMiLCJ1cGRhdGVDdXJyZW50UHJvamVjdCIsIm5ld1RhZyIsInByZXZpb3VzIiwicmVtb3ZlIiwibGFzdEN1cnJlbnRQcm9qZWN0IiwicHJvamVjdElkIiwibGVuZ3RoIiwibGFzdENoaWxkIiwidW5kZWZpbmVkIiwib2JqIiwiY3JlYXRlRWxlbWVudCIsInNwbGl0IiwiZWxlbSIsImFkZERhdGUiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJkZCIsIlN0cmluZyIsInBhZFN0YXJ0IiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInJlc2l6ZVRleHRhcmVhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZm9jdXNTZXQiLCJmb3JtR3JvdXAiLCJpIiwiZGlzcGxheSIsImZvY3VzIiwiZXZlbnRTZXQiLCJlbGltaW5hdGVGaXJzdE9mRGFzaCIsIndvcmRzIiwiY2FwaXRhbGl6ZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwiZGlzcGxheUNvbnRyb2xsZXIiLCJhZGRQcm9qZWN0R3JvdXAiLCJhZGRUb2RvR3JvdXAiLCJ0b2RvQXJyYXkiLCJkb25lVW5pdCIsInNldE1haW5EaXNwbGF5IiwiaW50ZXJmYWNlTWFpbiIsInByb2plY3RTZXR0aW5nIiwibG9naWNDb250cm9sbGVyIiwidG9kb1NldHRpbmciLCJnZXRUb2RvTGlzdEZvclByb2plY3QiLCJidG4iLCJ1cGRhdGVUb2RvTGlzdEZvclByb2plY3QiLCJzdWJtaXRGb3JtUHJvamVjdCIsImFkZFByb2plY3RMaXN0Iiwic3VibWl0Rm9ybVRvZG8iLCJnZXRDdXJyZW50UHJvamVjdCIsImFkZFRvZG9MaXN0Iiwic2V0SW5pdGlhbEN1cnJlbnRQcm9qZWN0IiwibGFzdFByb2plY3QiLCJhZnRlclN1Ym1pc3Npb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImluaXQiLCJmb3JtU3VibWlzc2lvbkV2ZW50Iiwic29ydCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInByb2plY3RTd2l0Y2hFdmVudCIsImJ1dHRvbnMiLCJkZWxldGVFdmVudCIsImRlbGV0ZUFsbEJ1dHRvbiIsImRlbGV0ZUJ0biIsImRvbmVFdmVudCIsImRvbmVBbGxCdG4iLCJkb25lQnRuIiwicHJvZ3JhbVJlc2V0RXZlbnQiLCJyZXNldEJ0biIsInJlc2V0QWxsIiwiY3JlYXRlRXZlbnRzIiwic3RhcnQiLCJzZXRUb2RvTGlzdEZvclByb2plY3QiLCJwcm92aWRlTG9naWMiLCJkZWxldGVMb2dpYyIsInVwZGF0ZUxvZ2ljIiwic2V0RGVmYXVsdFByb2plY3QiLCJzZXREZWZhdWx0VG9kbyIsInNldEluZm9Gcm9tU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJkZWZhdWx0UHJvamVjdCIsImxvZ2ljVXRpbHMiLCJ1cGRhdGVKc29uSW5mb1RvU3RvcmFnZSIsImFkZEpzb25JbmZvVG9TdG9yYWdlIiwicHJvamVjdExhc3RJZCIsInByb2plY3RDdXJyZW50SWQiLCJjb3B5UHJvamVjdElkIiwiZ2V0TmV3SWQiLCJzYXZpbmdzIiwicHJvamVjdExpc3QiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInZhbCIsImdldEpzb25JbmZvRnJvbVN0b3JhZ2UiLCJkZWZhdWx0VG9kbyIsImlkc0RhdGEiLCJ0b2RvTGFzdElkIiwidG9kb0N1cnJlbnRJZCIsInRvZG9MaXN0IiwidG9kb0xpc3RGb3JQcm9qZWN0IiwiZmlsdGVyIiwidXBkYXRlZCIsImNsZWFyIiwib3JpZ2luYWxEYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImsiLCJ2IiwibmV3TnVtYmVyIiwiTnVtYmVyIiwi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QztBQUNDLEdBUEQ7O0FBU0EsU0FBTztBQUFFbEQsUUFBSSxFQUFKQTtBQUFGLEdBQVA7QUFDRCxDQVhtQixFQUFwQjs7QUFhZW1LLDBFQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCgpID0+IHtcbiAgY29uc3QgYWRkRWFjaCA9ICh7IHByb2plY3ROYW1lLCBpZCB9KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdoNCcsIGlkLCBjbGFzc2VzOiAncHJvamVjdC1jb250ZW50IG0tMCcsXG4gICAgfSk7XG5cbiAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgY29uc3QgcHJvamVjdEdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGVudC1ncm91cCcpO1xuICAgIHByb2plY3RHcm91cC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBhZGRHcm91cCA9IChwcm9qZWN0QXJyYXkpID0+IHtcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChlID0+IGFkZEVhY2goZSkpO1xuICB9O1xuICByZXR1cm4geyBhZGRHcm91cCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDtcbiIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRvbmVTdGF0dXNEaXNwbGF5ID0gKHsgZG9uZSwgdGFyZ2V0LCBwYXJlbnQgfSkgPT4ge1xuICAgIHRhcmdldC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBpZiAoZG9uZSkge1xuICAgICAgdGFyZ2V0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkRWFjaCA9ICh7XG4gICAgdGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaWQsIGRvbmUsXG4gIH0pID0+IHtcbiAgICBjb25zdCB0b2RvID0gdXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2RpdicsIGlkLCBjbGFzc2VzOiBgdG9kby1jb250ZW50IG5vLWd1dHRlciAke3ByaW9yaXR5fWAsXG4gICAgfSk7XG4gICAgY29uc3QgZG9uZVRhcmdldCA9IHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdpbnB1dCcsIGNsYXNzZXM6ICdkb25lLWJ0biB2ZXJ0aWNhbC1hbGlnbi1ib3R0b20nLFxuICAgIH0pO1xuICAgIGRvbmVTdGF0dXNEaXNwbGF5KHsgZG9uZSwgdGFyZ2V0OiBkb25lVGFyZ2V0LCBwYXJlbnQ6IHRvZG8gfSk7XG4gICAgdG9kby5hcHBlbmRDaGlsZChkb25lVGFyZ2V0KTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdoNCcsXG4gICAgICBjbGFzc2VzOiAndGl0bGUgY29sLW1kLTMgdGV4dC1ub3dyYXAgbS0wIHZlcnRpY2FsLWFsaWduLWJvdHRvbScsXG4gICAgICB0ZXh0OiB0aXRsZSxcbiAgICB9KSk7XG4gICAgdG9kby5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6ICdkYXRlIGNvbC1tZC0zIHZlcnRpY2FsLWFsaWduLWJvdHRvbScsXG4gICAgICB0ZXh0OiBkYXRlLFxuICAgIH0pKTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogJ2Rlc2NyaXB0aW9uIGNvbC1tZC0zIHRleHQtbm93cmFwIHZlcnRpY2FsLWFsaWduLWJvdHRvbScsXG4gICAgICB0ZXh0OiBkZXNjcmlwdGlvbixcbiAgICB9KSk7XG4gICAgdG9kby5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6ICdlZGl0IGNvbC1tZC0xIHZlcnRpY2FsLWFsaWduLWJvdHRvbScsXG4gICAgICB0ZXh0OiAnZWRpdCcsXG4gICAgfSkpO1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiAnZGVsZXRlIGNvbC1tZC0xIHZlcnRpY2FsLWFsaWduLWJvdHRvbScsXG4gICAgICB0ZXh0OiAnZGVsZXRlJyxcbiAgICB9KSk7XG4gICAgcmV0dXJuIHRvZG87XG4gIH07XG5cbiAgY29uc3QgYWRkR3JvdXAgPSAobmV3R3JvdXApID0+IHtcbiAgICBjb25zdCB0b2RvR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250ZW50LWdyb3VwJyk7XG4gICAgd2hpbGUgKHRvZG9Hcm91cC5maXJzdENoaWxkKSB7XG4gICAgICB0b2RvR3JvdXAucmVtb3ZlQ2hpbGQodG9kb0dyb3VwLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBuZXdHcm91cC5mb3JFYWNoKGUgPT4gdG9kb0dyb3VwLmFwcGVuZENoaWxkKGFkZEVhY2goZSkpKTtcbiAgfTtcblxuICByZXR1cm4geyBhZGRHcm91cCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kbztcbiIsImNvbnN0IGRlbGV0ZURpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBnZXREZWxldGVCdXR0b25BbGwgPSAoaWQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVW5pdCA9IChidXR0b24pID0+IHtcbiAgICBjb25zdCBvYmplY3QgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICBvYmplY3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvYmplY3QpO1xuICAgIHJldHVybiBvYmplY3QuaWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmVzZXRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5oLXRpdGxlJyk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0RGVsZXRlQnV0dG9uQWxsLCBkZWxldGVVbml0LCBnZXRSZXNldEJ1dHRvbiB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlRGlzcGxheTtcbiIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZm9ybUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBidWlsZEZpZWxkID0gKHtcbiAgICBwbGFjZWhvbGRlciwgdHlwZSwgZGVmYXVsdFZhbHVlLCB0ZXh0YXJlYSxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IGlucHV0VHlwZSA9IHRleHRhcmVhIHx8ICdpbnB1dCc7XG4gICAgY29uc3QgbmFtZSA9IHV0aWxzLmluY2x1ZGVTcGFjZShwbGFjZWhvbGRlcikgPyB1dGlscy5leGNoYW5nZVNwYWNlVG9EYXNoKHBsYWNlaG9sZGVyKVxuICAgICAgOiBwbGFjZWhvbGRlcjtcbiAgICBjb25zdCBmaWVsZCA9IHV0aWxzLmNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6IGBmaWVsZCAke25hbWV9YCB9KTtcbiAgICBjb25zdCBpbnB1dCA9IHV0aWxzLmNyZWF0ZVRhZyh7IHRhZzogaW5wdXRUeXBlLCBpZDogbmFtZSwgY2xhc3NlczogbmFtZSB9KTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuICAgIGlmICh0eXBlKSBpbnB1dC50eXBlID0gdHlwZTtcbiAgICBpZiAoZGVmYXVsdFZhbHVlKSBpbnB1dC5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBmaWVsZDtcbiAgfTtcblxuICBjb25zdCBwcmlvcml0eVVuaXQgPSAod29yZCwgZmllbGQsIGNoZWNrZWQpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdpbnB1dCcsIGlkOiBgcHJpb3JpdHktJHt3b3JkfWAsIGNsYXNzZXM6ICdwcmlvcml0eScsXG4gICAgfSk7XG4gICAgaW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgaW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgaWYgKGNoZWNrZWQpIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgIGNvbnN0IGxhYmVsID0gdXRpbHMuY3JlYXRlVGFnKHsgdGFnOiAnbGFiZWwnLCB0ZXh0OiB3b3JkIH0pO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHByaW9yaXR5LSR7d29yZH1gKTtcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICB9O1xuXG4gIGNvbnN0IHByaW9yaXR5RmllbGQgPSAoKSA9PiB7XG4gICAgY29uc3QgZmllbGQgPSB1dGlscy5jcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAnZmllbGQgcHJpb3JpdHknIH0pO1xuICAgIHByaW9yaXR5VW5pdCgnbm9ybWFsJywgZmllbGQsICdjaGVja2VkJyk7XG4gICAgcHJpb3JpdHlVbml0KCd1cmdlbnQnLCBmaWVsZCk7XG4gICAgcmV0dXJuIGZpZWxkO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUZvcm0gPSAoeyBvcHRpb24gfSkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZm9ybScsIGNsYXNzZXM6IHV0aWxzLmV4Y2hhbmdlU3BhY2VUb0Rhc2goYCR7b3B0aW9ufSBmb3JtYCksXG4gICAgfSk7XG4gICAgY29uc3QgZmllbGRzZXQgPSB1dGlscy5jcmVhdGVUYWcoeyB0YWc6ICdmaWVsZHNldCcgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG4gICAgaWYgKG9wdGlvbiA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgcGxhY2Vob2xkZXI6ICdwcm9qZWN0IG5hbWUnIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYnVpbGRGaWVsZCh7IHBsYWNlaG9sZGVyOiAndGl0bGUnIH0pKTtcbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJ1aWxkRmllbGQoe1xuICAgICAgICBwbGFjZWhvbGRlcjogJ2RhdGUnLCB0eXBlOiAnZGF0ZScsIGRlZmF1bHRWYWx1ZTogdXRpbHMuZ2V0RGF0ZUZyb21Ub2RheSgwKSxcbiAgICAgIH0pKTtcbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHByaW9yaXR5RmllbGQoKSk7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgcGxhY2Vob2xkZXI6ICdkZXNjcmlwdGlvbicsIHRleHRhcmVhOiAndGV4dGFyZWEnIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm07XG4gIH07XG5cbiAgY29uc3QgZ2V0UmFkaW9JbmZvID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCByYWRpb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncHJpb3JpdHknKTtcbiAgICByYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XG4gICAgICAgIGRhdGFbcmFkaW8ubmFtZV0gPSByYWRpby5pZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBtYWtlQmxhbmtGb3JtID0gKGZvcm0pID0+IHtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWVsZCcpLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykgfHwgZmllbGQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICAgIHNlbGVjdG9yLnZhbHVlID0gJyc7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Rm9ybUxheW91dCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGNvbnN0IG9wZW4gPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWZvcm0nKTtcbiAgICBjb25zdCBmb3JtID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIHJldHVybiB7IGZvcm0sIG9wZW4gfTtcbiAgfTtcblxuICBjb25zdCBnZXRGb3JtRGF0YSA9IChmb3JtKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZpZWxkJykuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZmllbGQucXVlcnlTZWxlY3RvcignaW5wdXQnKSB8fCBmaWVsZC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgICAgaWYgKHNlbGVjdG9yLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgZ2V0UmFkaW9JbmZvKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZXhjaGFuZ2VEYXNoVG9DYXBpdGFsKHNlbGVjdG9yLm5hbWUpO1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBzZWxlY3RvcjtcbiAgICAgICAgZGF0YVtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVGb3JtLCBnZXRGb3JtRGF0YSwgbWFrZUJsYW5rRm9ybSwgZ2V0Rm9ybUxheW91dCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1Db250cm9sbGVyO1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IGZvcm1Db250cm9sbGVyIGZyb20gJy4vZm9ybV9jb250cm9sbGVyJztcblxuY29uc3QgbGF5b3V0ID0gKCgpID0+IHtcbiAgY29uc3QgaGVhZGVyU2V0ID0gKGhlYWRlciwgd29yZCkgPT4ge1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnaDEnLCBjbGFzc2VzOiAnaC10aXRsZScsIHRleHQ6IHdvcmQsXG4gICAgfSkpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnaDEnLCBjbGFzc2VzOiAnY3JlYXRlLWZvcm0nLCB0ZXh0OiAnKycsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IHNldFByb2plY3QgPSAocHJvamVjdENvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IHByb2plY3RHcm91cCA9IHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdkaXYnLCBjbGFzc2VzOiAncHJvamVjdC1jb250ZW50LWdyb3VwJyxcbiAgICB9KTtcbiAgICBoZWFkZXJTZXQocHJvamVjdENvbnRhaW5lciwgJ1Byb2plY3QnKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RHcm91cCk7XG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG4gIH07XG5cbiAgY29uc3Qgc2V0VG9kbyA9ICh0b2RvQ29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgdG9kb0dyb3VwID0gdXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2RpdicsIGNsYXNzZXM6ICd0b2RvLWNvbnRlbnQtZ3JvdXAnLFxuICAgIH0pO1xuICAgIGhlYWRlclNldCh0b2RvQ29udGFpbmVyLCAnVG9kbycpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0dyb3VwKTtcbiAgICByZXR1cm4gdG9kb0NvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBzZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdzZWN0aW9uJywgaWQ6ICdwcm9qZWN0JywgY2xhc3NlczogJ2NvbC1tZC00IHByaW1hcnktYmcnLFxuICAgIH0pO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnc2VjdGlvbicsIGlkOiAndG9kbycsIGNsYXNzZXM6ICdjb2wtbWQtOCBzZWNvbmRhcnktYmcnLFxuICAgIH0pO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5LWJnJyk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXRQcm9qZWN0KHByb2plY3RDb250YWluZXIpKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldFRvZG8odG9kb0NvbnRhaW5lcikpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRyb2xsZXIuY3JlYXRlRm9ybSh7IG9wdGlvbjogJ3Byb2plY3QnIH0pKTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250cm9sbGVyLmNyZWF0ZUZvcm0oeyBvcHRpb246ICd0b2RvJyB9KSk7XG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsYXlvdXQ7XG4iLCJjb25zdCB1cGRhdGUgPSAoKCkgPT4ge1xuICBjb25zdCBnZXREb25lQnV0dG9uQWxsID0gKGlkKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIHJldHVybiBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmRvbmUtYnRuJyk7XG4gIH07XG5cbiAgY29uc3QgZG9uZSA9IChidXR0b24pID0+IHtcbiAgICBjb25zdCBvYmplY3QgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICBvYmplY3QuY2xhc3NMaXN0LnRvZ2dsZSgnZG9uZScpO1xuICAgIHJldHVybiBvYmplY3QuaWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50LWdyb3VwJykuY2hpbGROb2RlcztcblxuICBjb25zdCB1cGRhdGVDdXJyZW50UHJvamVjdCA9IChuZXdUYWcpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0R3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50LWdyb3VwJyk7XG4gICAgY29uc3QgcHJldmlvdXMgPSBwcm9qZWN0R3JvdXAucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcHJvamVjdCcpO1xuICAgIGlmIChwcmV2aW91cykgcHJldmlvdXMuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1wcm9qZWN0Jyk7XG4gICAgbmV3VGFnLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcHJvamVjdCcpO1xuICAgIHJldHVybiBuZXdUYWcuaWQ7XG4gIH07XG5cbiAgY29uc3QgbGFzdEN1cnJlbnRQcm9qZWN0ID0gKHByb2plY3RJZCkgPT4ge1xuICAgIGlmIChwcm9qZWN0SWQpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcm9qZWN0SWR9YCk7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50LWdyb3VwJykuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGVudC1ncm91cCcpLmxhc3RDaGlsZDtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldERvbmVCdXR0b25BbGwsXG4gICAgZG9uZSxcbiAgICB1cGRhdGVDdXJyZW50UHJvamVjdCxcbiAgICBnZXRQcm9qZWN0TGlzdCxcbiAgICBsYXN0Q3VycmVudFByb2plY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGU7XG4iLCJjb25zdCB1dGlscyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVRhZyA9ICh7XG4gICAgdGFnLCBpZCwgY2xhc3NlcywgdGV4dCxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAoaWQpIG9iai5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGlmIChjbGFzc2VzKSBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChlbGVtID0+IG9iai5jbGFzc0xpc3QuYWRkKGVsZW0pKTtcbiAgICBpZiAodGV4dCkgb2JqLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIGNvbnN0IGdldERhdGVGcm9tVG9kYXkgPSAoYWRkRGF0ZSkgPT4ge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhZGREYXRlKTtcbiAgICBjb25zdCBkZCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBtbSA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvLyBKYW51YXJ5IGlzIDAhXG4gICAgY29uc3QgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBkYXRlID0gYCR7eXl5eX0tJHttbX0tJHtkZH1gO1xuICAgIHJldHVybiBkYXRlO1xuICB9O1xuXG4gIGNvbnN0IHJlc2l6ZVRleHRhcmVhID0gKCkgPT4ge1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IGAkezIwICsgdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmb2N1c1NldCA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtR3JvdXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmb3JtR3JvdXBbaV0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGZvcm1Hcm91cFtpXS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBldmVudFNldCA9ICgpID0+IHtcbiAgICByZXNpemVUZXh0YXJlYSgpO1xuICAgIGZvY3VzU2V0KCk7XG4gIH07XG5cbiAgY29uc3QgZWxpbWluYXRlRmlyc3RPZkRhc2ggPSB3b3JkcyA9PiB3b3Jkcy5zcGxpdCgnLScpWzFdO1xuXG4gIGNvbnN0IGNhcGl0YWxpemUgPSB3b3JkID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xuXG4gIGNvbnN0IGV4Y2hhbmdlRGFzaFRvQ2FwaXRhbCA9ICh3b3JkKSA9PiB7XG4gICAgY29uc3Qgd29yZHMgPSB3b3JkLnNwbGl0KCctJyk7XG4gICAgaWYgKHdvcmRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHdvcmRzWzFdID0gY2FwaXRhbGl6ZSh3b3Jkc1sxXSk7XG4gICAgfVxuICAgIHJldHVybiB3b3Jkcy5qb2luKCcnKTtcbiAgfTtcblxuICBjb25zdCBleGNoYW5nZVNwYWNlVG9EYXNoID0gd29yZCA9PiB3b3JkLnNwbGl0KCcgJykuam9pbignLScpO1xuXG4gIGNvbnN0IGluY2x1ZGVTcGFjZSA9IHdvcmQgPT4gd29yZC5zcGxpdCgnICcpLmxlbmd0aCA+IDE7XG5cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVRhZyxcbiAgICBnZXREYXRlRnJvbVRvZGF5LFxuICAgIGV2ZW50U2V0LFxuICAgIGVsaW1pbmF0ZUZpcnN0T2ZEYXNoLFxuICAgIGV4Y2hhbmdlRGFzaFRvQ2FwaXRhbCxcbiAgICBleGNoYW5nZVNwYWNlVG9EYXNoLFxuICAgIGluY2x1ZGVTcGFjZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuIiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9kaXNwbGF5L2NyZWF0ZV9wcm9qZWN0JztcbmltcG9ydCBjcmVhdGVUb2RvIGZyb20gJy4vZGlzcGxheS9jcmVhdGVfdG9kbyc7XG5pbXBvcnQgZm9ybUNvbnRyb2xsZXIgZnJvbSAnLi9kaXNwbGF5L2Zvcm1fY29udHJvbGxlcic7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4vZGlzcGxheS9sYXlvdXQnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vZGlzcGxheS91dGlscyc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJy4vZGlzcGxheS91cGRhdGUnO1xuaW1wb3J0IGRlbGV0ZURpc3BsYXkgZnJvbSAnLi9kaXNwbGF5L2RlbGV0ZV9kaXNwbGF5JztcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0R3JvdXAgPSBwcm9qZWN0QXJyYXkgPT4gY3JlYXRlUHJvamVjdC5hZGRHcm91cChwcm9qZWN0QXJyYXkpO1xuICBjb25zdCBhZGRUb2RvR3JvdXAgPSB0b2RvQXJyYXkgPT4gY3JlYXRlVG9kby5hZGRHcm91cCh0b2RvQXJyYXkpO1xuXG4gIGNvbnN0IGdldEZvcm1MYXlvdXQgPSBpZCA9PiBmb3JtQ29udHJvbGxlci5nZXRGb3JtTGF5b3V0KGlkKTtcbiAgY29uc3QgZ2V0Rm9ybURhdGEgPSAoZm9ybSwgcHJvamVjdElkKSA9PiBmb3JtQ29udHJvbGxlci5nZXRGb3JtRGF0YShmb3JtLCBwcm9qZWN0SWQpO1xuICBjb25zdCBtYWtlQmxhbmtGb3JtID0gZm9ybSA9PiBmb3JtQ29udHJvbGxlci5tYWtlQmxhbmtGb3JtKGZvcm0pO1xuXG4gIGNvbnN0IGdldERlbGV0ZUJ1dHRvbkFsbCA9IGlkID0+IGRlbGV0ZURpc3BsYXkuZ2V0RGVsZXRlQnV0dG9uQWxsKGlkKTtcbiAgY29uc3QgZGVsZXRlVW5pdCA9IGJ1dHRvbiA9PiBkZWxldGVEaXNwbGF5LmRlbGV0ZVVuaXQoYnV0dG9uKTtcbiAgY29uc3QgZ2V0UmVzZXRCdXR0b24gPSAoKSA9PiBkZWxldGVEaXNwbGF5LmdldFJlc2V0QnV0dG9uKCk7XG5cbiAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB1cGRhdGUuZ2V0UHJvamVjdExpc3QoKTtcbiAgY29uc3QgdXBkYXRlQ3VycmVudFByb2plY3QgPSBuZXdUYWcgPT4gdXBkYXRlLnVwZGF0ZUN1cnJlbnRQcm9qZWN0KG5ld1RhZyk7XG4gIGNvbnN0IGxhc3RDdXJyZW50UHJvamVjdCA9IHByb2plY3RJZCA9PiB1cGRhdGUubGFzdEN1cnJlbnRQcm9qZWN0KHByb2plY3RJZCk7XG5cbiAgY29uc3QgZ2V0RG9uZUJ1dHRvbkFsbCA9IGlkID0+IHVwZGF0ZS5nZXREb25lQnV0dG9uQWxsKGlkKTtcbiAgY29uc3QgZG9uZVVuaXQgPSBidXR0b24gPT4gdXBkYXRlLmRvbmUoYnV0dG9uKTtcblxuXG4gIGNvbnN0IHNldE1haW5EaXNwbGF5ID0gKCkgPT4ge1xuICAgIGxheW91dC5zZXQoKTtcbiAgICB1dGlscy5ldmVudFNldCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0TWFpbkRpc3BsYXksXG4gICAgYWRkVG9kb0dyb3VwLFxuICAgIGFkZFByb2plY3RHcm91cCxcbiAgICBnZXRGb3JtTGF5b3V0LFxuICAgIGdldEZvcm1EYXRhLFxuICAgIG1ha2VCbGFua0Zvcm0sXG4gICAgZ2V0RGVsZXRlQnV0dG9uQWxsLFxuICAgIGRlbGV0ZVVuaXQsXG4gICAgZ2V0UmVzZXRCdXR0b24sXG4gICAgZ2V0UHJvamVjdExpc3QsXG4gICAgdXBkYXRlQ3VycmVudFByb2plY3QsXG4gICAgbGFzdEN1cnJlbnRQcm9qZWN0LFxuICAgIGdldERvbmVCdXR0b25BbGwsXG4gICAgZG9uZVVuaXQsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udHJvbGxlcjtcbiIsImltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL2Rpc3BsYXlfY29udHJvbGxlcic7XG5pbXBvcnQgbG9naWNDb250cm9sbGVyIGZyb20gJy4vbG9naWNfY29udHJvbGxlcic7XG5cbmNvbnN0IGludGVyZmFjZU1haW4gPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0U2V0dGluZyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBsb2dpY0NvbnRyb2xsZXIuZ2V0UHJvamVjdExpc3QoKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5hZGRQcm9qZWN0R3JvdXAocHJvamVjdEFycmF5KTtcbiAgfTtcblxuICBjb25zdCB0b2RvU2V0dGluZyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvQXJyYXkgPSBsb2dpY0NvbnRyb2xsZXIuZ2V0VG9kb0xpc3RGb3JQcm9qZWN0KCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuYWRkVG9kb0dyb3VwKHRvZG9BcnJheSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQ3VycmVudFByb2plY3QgPSAoYnRuKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gZGlzcGxheUNvbnRyb2xsZXIudXBkYXRlQ3VycmVudFByb2plY3QoYnRuKTtcbiAgICBsb2dpY0NvbnRyb2xsZXIudXBkYXRlVG9kb0xpc3RGb3JQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgdG9kb1NldHRpbmcoKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRGb3JtUHJvamVjdCA9IChmb3JtKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGRpc3BsYXlDb250cm9sbGVyLmdldEZvcm1EYXRhKGZvcm0pO1xuICAgIGxvZ2ljQ29udHJvbGxlci5hZGRQcm9qZWN0TGlzdChkYXRhKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRGb3JtVG9kbyA9IChmb3JtKSA9PiB7XG5cdFx0Y29uc3QgZGF0YSA9IGRpc3BsYXlDb250cm9sbGVyLmdldEZvcm1EYXRhKGZvcm0pO1xuXHRcdGRhdGEucHJvamVjdElkID0gbG9naWNDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgbG9naWNDb250cm9sbGVyLmFkZFRvZG9MaXN0KGRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHNldEluaXRpYWxDdXJyZW50UHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBsb2dpY0NvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBpZiAocHJvamVjdElkKSB7XG4gICAgICBjb25zdCBsYXN0UHJvamVjdCA9IGRpc3BsYXlDb250cm9sbGVyLmxhc3RDdXJyZW50UHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgaWYgKGxhc3RQcm9qZWN0KSB1cGRhdGVDdXJyZW50UHJvamVjdChsYXN0UHJvamVjdCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFmdGVyU3VibWlzc2lvbiA9IChmb3JtKSA9PiB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIubWFrZUJsYW5rRm9ybShmb3JtKTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH07XG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBsb2dpY0NvbnRyb2xsZXIuc2V0KCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuc2V0TWFpbkRpc3BsYXkoKTtcbiAgICBwcm9qZWN0U2V0dGluZygpO1xuICAgIHNldEluaXRpYWxDdXJyZW50UHJvamVjdCgpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1TdWJtaXNzaW9uRXZlbnQgPSAoZm9ybSwgc29ydCkgPT4ge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoc29ydCA9PT0gJ3Byb2plY3QnKSBzdWJtaXRGb3JtUHJvamVjdChmb3JtKTtcbiAgICAgICAgaWYgKHNvcnQgPT09ICd0b2RvJykgc3VibWl0Rm9ybVRvZG8oZm9ybSk7XG4gICAgICAgIGFmdGVyU3VibWlzc2lvbihmb3JtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0U3dpdGNoRXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRpc3BsYXlDb250cm9sbGVyLmdldFByb2plY3RMaXN0KCk7XG4gICAgaWYgKGJ1dHRvbnMubGVuZ3RoID4gMCkge1xuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KGJ1dHRvbik7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVVbml0ID0gKGJ1dHRvbikgPT4ge1xuXHRcdGNvbnN0IGlkID0gZGlzcGxheUNvbnRyb2xsZXIuZGVsZXRlVW5pdChidXR0b24pO1xuXHRcdGxvZ2ljQ29udHJvbGxlci5kZWxldGVVbml0KGlkKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVFdmVudCA9ICh3b3JkKSA9PiB7XG5cdFx0Y29uc3QgZGVsZXRlQWxsQnV0dG9uID0gZGlzcGxheUNvbnRyb2xsZXIuZ2V0RGVsZXRlQnV0dG9uQWxsKHdvcmQpO1xuXHRcdGRlbGV0ZUFsbEJ1dHRvbi5mb3JFYWNoKChkZWxldGVCdG4pID0+IHtcblx0XHRcdGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuXHRcdFx0XHRkZWxldGVVbml0KGRlbGV0ZUJ0bik7XG5cdFx0XHR9KTtcblx0XHR9KTtcbiAgfTtcblxuICBjb25zdCBkb25lVW5pdCA9IChidXR0b24pID0+IHtcblx0XHRjb25zdCBpZCA9IGRpc3BsYXlDb250cm9sbGVyLmRvbmVVbml0KGJ1dHRvbik7XG5cdFx0bG9naWNDb250cm9sbGVyLmRvbmVVbml0KGlkKTtcbiAgfTtcblxuICBjb25zdCBkb25lRXZlbnQgPSAod29yZCkgPT4ge1xuXHRcdGNvbnN0IGRvbmVBbGxCdG4gPSBkaXNwbGF5Q29udHJvbGxlci5nZXREb25lQnV0dG9uQWxsKHdvcmQpO1xuXHRcdGRvbmVBbGxCdG4uZm9yRWFjaCgoZG9uZUJ0bikgPT4ge1xuXHRcdFx0ZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0ZG9uZVVuaXQoZG9uZUJ0bik7XG5cdFx0XHR9KTtcblx0XHR9KTtcbiAgfTtcblxuICBjb25zdCBwcm9ncmFtUmVzZXRFdmVudCA9ICgpID0+IHtcbiAgICBjb25zdCByZXNldEJ0biA9IGRpc3BsYXlDb250cm9sbGVyLmdldFJlc2V0QnV0dG9uKCk7XG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsb2dpY0NvbnRyb2xsZXIucmVzZXRBbGwoKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVFdmVudHMgPSAod29yZCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybSB9ID0gZGlzcGxheUNvbnRyb2xsZXIuZ2V0Rm9ybUxheW91dCh3b3JkKTtcbiAgICAvLyBjb25zdCB7IGZvcm0sIG9wZW4gfSA9IGRpc3BsYXlDb250cm9sbGVyLmdldEZvcm1MYXlvdXQod29yZCk7XG4gICAgZm9ybVN1Ym1pc3Npb25FdmVudChmb3JtLCB3b3JkKTtcbiAgICBpZiAod29yZCA9PT0gJ3RvZG8nKSB7XG4gICAgICBkZWxldGVFdmVudCh3b3JkKTtcbiAgICAgIGRvbmVFdmVudCh3b3JkKTtcbiAgICB9XG4gICAgaWYgKHdvcmQgPT09ICdwcm9qZWN0Jykge1xuICAgICAgcHJvamVjdFN3aXRjaEV2ZW50KCk7XG4gICAgICBwcm9ncmFtUmVzZXRFdmVudCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICBpbml0KCk7XG4gICAgWydwcm9qZWN0JywgJ3RvZG8nXS5mb3JFYWNoKHdvcmQgPT4gY3JlYXRlRXZlbnRzKHdvcmQpKTtcbiAgfTtcblxuICByZXR1cm4geyBzdGFydCB9O1xufSkoKTtcblxuaW50ZXJmYWNlTWFpbi5zdGFydCgpO1xuIiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9sb2dpY3MvY3JlYXRlX3Byb2plY3QnO1xuaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSAnLi9sb2dpY3MvY3JlYXRlX3RvZG8nO1xuaW1wb3J0IHByb3ZpZGVMb2dpYyBmcm9tICcuL2xvZ2ljcy9wcm92aWRlX2xvZ2ljJztcbmltcG9ydCBkZWxldGVMb2dpYyBmcm9tICcuL2xvZ2ljcy9kZWxldGVfbG9naWMnO1xuaW1wb3J0IHVwZGF0ZUxvZ2ljIGZyb20gJy4vbG9naWNzL3VwZGF0ZV9sb2dpYyc7XG5cbmNvbnN0IGxvZ2ljQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RMaXN0ID0gZGF0YSA9PiBjcmVhdGVQcm9qZWN0LmFkZFByb2plY3RMaXN0KGRhdGEpO1xuICBjb25zdCBhZGRUb2RvTGlzdCA9IGRhdGEgPT4gY3JlYXRlVG9kby5hZGRUb2RvTGlzdChkYXRhKTtcbiAgY29uc3QgdXBkYXRlVG9kb0xpc3RGb3JQcm9qZWN0ID0gaWQgPT4gY3JlYXRlVG9kby5zZXRUb2RvTGlzdEZvclByb2plY3QoaWQpO1xuXG4gIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4gcHJvdmlkZUxvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4gcHJvdmlkZUxvZ2ljLmdldFByb2plY3RMaXN0KCk7XG4gIGNvbnN0IGdldFRvZG9MaXN0Rm9yUHJvamVjdCA9ICgpID0+IHByb3ZpZGVMb2dpYy5nZXRUb2RvTGlzdEZvclByb2plY3QoKTtcblxuICBjb25zdCBkZWxldGVVbml0ID0gaWQgPT4gZGVsZXRlTG9naWMuZGVsZXRlVW5pdChpZCk7XG4gIGNvbnN0IHJlc2V0QWxsID0gKCkgPT4gZGVsZXRlTG9naWMucmVzZXRBbGwoKTtcblxuICBjb25zdCBkb25lVW5pdCA9IGlkID0+IHVwZGF0ZUxvZ2ljLmRvbmUoaWQpO1xuXG4gIGNvbnN0IHNldCA9ICgpID0+IHtcbiAgICBjcmVhdGVQcm9qZWN0LnNldERlZmF1bHRQcm9qZWN0KCk7XG4gICAgY3JlYXRlVG9kby5zZXREZWZhdWx0VG9kbygpO1xuICAgIGNyZWF0ZVByb2plY3Quc2V0SW5mb0Zyb21TdG9yYWdlKCk7XG4gICAgY3JlYXRlVG9kby5zZXRJbmZvRnJvbVN0b3JhZ2UoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldCxcbiAgICBhZGRQcm9qZWN0TGlzdCxcbiAgICBhZGRUb2RvTGlzdCxcbiAgICBnZXRQcm9qZWN0TGlzdCxcbiAgICBnZXRUb2RvTGlzdEZvclByb2plY3QsXG4gICAgdXBkYXRlVG9kb0xpc3RGb3JQcm9qZWN0LFxuICAgIGRlbGV0ZVVuaXQsXG4gICAgZG9uZVVuaXQsXG4gICAgZ2V0Q3VycmVudFByb2plY3QsXG4gICAgcmVzZXRBbGwsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2dpY0NvbnRyb2xsZXI7XG4iLCJpbXBvcnQgeyBwcm9qZWN0LCBzYXZpbmdzIH0gZnJvbSAnLi9vYmplY3RzJztcbmltcG9ydCBsb2dpY1V0aWxzIGZyb20gJy4vbG9naWNfdXRpbHMnO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0RGVmYXVsdFByb2plY3QgPSAoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKVxuICAgICB8fCBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gW1xuICAgICAgICB7IHByb2plY3ROYW1lOiAnZGVmYXVsdCBwcm9qZWN0IHdpdGggbG9uZyBuYW1lJywgaWQ6ICdwcm9qZWN0LTEnIH0sXG4gICAgICBdO1xuICAgICAgbG9naWNVdGlscy51cGRhdGVKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQ6ICdwcm9qZWN0JywgZGF0YTogZGVmYXVsdFByb2plY3QgfSk7XG4gICAgICBsb2dpY1V0aWxzLmFkZEpzb25JbmZvVG9TdG9yYWdlKHtcbiAgICAgICAgc29ydDogJ2lkcycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwcm9qZWN0TGFzdElkOiBkZWZhdWx0UHJvamVjdFswXS5pZCxcbiAgICAgICAgICBwcm9qZWN0Q3VycmVudElkOiBkZWZhdWx0UHJvamVjdFswXS5pZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0TGlzdCA9ICh7IHByb2plY3ROYW1lLCBpZCB9KSA9PiB7XG4gICAgY29uc3QgY29weVByb2plY3RJZCA9IGlkIHx8IGxvZ2ljVXRpbHMuZ2V0TmV3SWQoJ3Byb2plY3QnKTtcbiAgICBzYXZpbmdzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCh7IHByb2plY3ROYW1lLCBpZDogY29weVByb2plY3RJZCB9KSk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoc2F2aW5ncy5wcm9qZWN0TGlzdCkpO1xuICB9O1xuXG4gIGNvbnN0IHNldEluZm9Gcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB2YWwgPSBsb2dpY1V0aWxzLmdldEpzb25JbmZvRnJvbVN0b3JhZ2UoJ3Byb2plY3QnKTtcbiAgICBpZiAodmFsKSBzYXZpbmdzLnByb2plY3RMaXN0ID0gdmFsO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkUHJvamVjdExpc3QsIHNldEluZm9Gcm9tU3RvcmFnZSwgc2V0RGVmYXVsdFByb2plY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0O1xuIiwiaW1wb3J0IHsgdG9kbywgc2F2aW5ncyB9IGZyb20gJy4vb2JqZWN0cyc7XG5pbXBvcnQgbG9naWNVdGlscyBmcm9tICcuL2xvZ2ljX3V0aWxzJztcbmltcG9ydCBkZWZhdWx0VG9kbyBmcm9tICcuL3NhbXBsZXMnO1xuXG5jb25zdCBjcmVhdGVUb2RvID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0RGVmYXVsdFRvZG8gPSAoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKVxuICAgICB8fCBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGxvZ2ljVXRpbHMudXBkYXRlSnNvbkluZm9Ub1N0b3JhZ2UoeyBzb3J0OiAndG9kbycsIGRhdGE6IGRlZmF1bHRUb2RvIH0pO1xuICAgICAgY29uc3QgaWRzRGF0YSA9IHtcbiAgICAgICAgdG9kb0xhc3RJZDogZGVmYXVsdFRvZG9bZGVmYXVsdFRvZG8ubGVuZ3RoIC0gMV0uaWQsXG4gICAgICAgIHRvZG9DdXJyZW50SWQ6IGRlZmF1bHRUb2RvW2RlZmF1bHRUb2RvLmxlbmd0aCAtIDFdLmlkLFxuICAgICAgfTtcbiAgICAgIGxvZ2ljVXRpbHMuYWRkSnNvbkluZm9Ub1N0b3JhZ2UoeyBzb3J0OiAnaWRzJywgZGF0YTogaWRzRGF0YSB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kb0xpc3QgPSAoZGF0YSkgPT4ge1xuICAgIGlmICghZGF0YS5pZCkgZGF0YS5pZCA9IGxvZ2ljVXRpbHMuZ2V0TmV3SWQoJ3RvZG8nKTtcbiAgICBzYXZpbmdzLnRvZG9MaXN0LnB1c2godG9kbyhkYXRhKSk7XG4gICAgbG9naWNVdGlscy51cGRhdGVKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQ6ICd0b2RvJywgZGF0YTogc2F2aW5ncy50b2RvTGlzdCB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRJbmZvRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFsID0gbG9naWNVdGlscy5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKCd0b2RvJyk7XG4gICAgaWYgKHZhbCkgc2F2aW5ncy50b2RvTGlzdCA9IHZhbDtcbiAgfTtcblxuICBjb25zdCBzZXRUb2RvTGlzdEZvclByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gICAgc2F2aW5ncy50b2RvTGlzdEZvclByb2plY3QgPSBzYXZpbmdzLnRvZG9MaXN0LmZpbHRlcihlID0+IGUucHJvamVjdElkID09PSBwcm9qZWN0SWQpO1xuICAgIGxvZ2ljVXRpbHMuYWRkSnNvbkluZm9Ub1N0b3JhZ2UoeyBzb3J0OiAnaWRzJywgZGF0YTogeyBwcm9qZWN0Q3VycmVudElkOiBwcm9qZWN0SWQgfSB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFRvZG9MaXN0LCBzZXRUb2RvTGlzdEZvclByb2plY3QsIHNldEluZm9Gcm9tU3RvcmFnZSwgc2V0RGVmYXVsdFRvZG8sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvO1xuIiwiaW1wb3J0IGxvZ2ljVXRpbHMgZnJvbSAnLi9sb2dpY191dGlscyc7XG5pbXBvcnQgeyBzYXZpbmdzIH0gZnJvbSAnLi9vYmplY3RzJztcblxuY29uc3QgZGVsZXRlTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBkZWxldGVVbml0ID0gKGlkKSA9PiB7XG5cdFx0Y29uc3Qgc29ydCA9IGlkLnNwbGl0KCctJylbMF07XG5cdFx0Y29uc3QgZGF0YSA9IGxvZ2ljVXRpbHMuZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZShzb3J0KTtcblx0XHRjb25zdCB1cGRhdGVkID0gKGRhdGEgPyBkYXRhLmZpbHRlcihlID0+IGUuaWQgIT09IGlkKSA6IFtdKTtcblx0XHRzYXZpbmdzW2Ake3NvcnR9TGlzdGBdID0gdXBkYXRlZDtcblx0XHRsb2dpY1V0aWxzLnVwZGF0ZUpzb25JbmZvVG9TdG9yYWdlKHsgc29ydCwgZGF0YTp1cGRhdGVkIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0QWxsID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgfTtcblxuICByZXR1cm4geyBkZWxldGVVbml0LCByZXNldEFsbCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlTG9naWM7XG5cbiIsImNvbnN0IGxvZ2ljVXRpbHMgPSAoKCkgPT4ge1xuICBjb25zdCBnZXRKc29uSW5mb0Zyb21TdG9yYWdlID0gKHNvcnQpID0+IHtcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHNvcnQpKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oc29ydCkpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUpzb25JbmZvVG9TdG9yYWdlID0gKHsgc29ydCwgZGF0YSB9KSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHNvcnQsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfTtcblxuICBjb25zdCBhZGRKc29uSW5mb1RvU3RvcmFnZSA9ICh7IHNvcnQsIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsRGF0YSA9IGdldEpzb25JbmZvRnJvbVN0b3JhZ2Uoc29ydCk7XG4gICAgY29uc3QgdXBkYXRlID0gb3JpZ2luYWxEYXRhIHx8IHt9O1xuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICB1cGRhdGVba10gPSB2O1xuICAgIH1cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oc29ydCwgSlNPTi5zdHJpbmdpZnkodXBkYXRlKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmV3SWQgPSAoc29ydCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBsZXQgaWQ7XG4gICAgaWYgKGdldEpzb25JbmZvRnJvbVN0b3JhZ2UoJ2lkcycpICYmIGdldEpzb25JbmZvRnJvbVN0b3JhZ2UoJ2lkcycpW2Ake3NvcnR9TGFzdElkYF0pIHtcbiAgICAgIGlkID0gZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZSgnaWRzJylbYCR7c29ydH1MYXN0SWRgXTtcbiAgICAgIGNvbnN0IG5ld051bWJlciA9IE51bWJlcihpZC5zcGxpdCgnLScpWzFdKSArIDE7XG4gICAgICBpZCA9IGAke3NvcnR9LSR7bmV3TnVtYmVyfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkID0gYCR7c29ydH0tMWA7XG4gICAgfVxuICAgIGRhdGFbYCR7c29ydH1MYXN0SWRgXSA9IGlkO1xuICAgIGRhdGFbYCR7c29ydH1DdXJyZW50SWRgXSA9IGlkO1xuICAgIGFkZEpzb25JbmZvVG9TdG9yYWdlKHsgc29ydDogJ2lkcycsIGRhdGEgfSk7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZSxcbiAgICB1cGRhdGVKc29uSW5mb1RvU3RvcmFnZSxcbiAgICBnZXROZXdJZCxcbiAgICBhZGRKc29uSW5mb1RvU3RvcmFnZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2ljVXRpbHM7XG4iLCJjb25zdCBwcm9qZWN0ID0gKHsgcHJvamVjdE5hbWUsIGlkIH0pID0+ICh7IHByb2plY3ROYW1lLCBpZCB9KTtcbmNvbnN0IHRvZG8gPSAoe1xuICB0aXRsZSwgcHJvamVjdElkLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGlkLCBkb25lID0gZmFsc2UsXG59KSA9PiAoe1xuICB0aXRsZSwgcHJvamVjdElkLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGlkLCBkb25lLFxufSk7XG5cbmNvbnN0IHNhdmluZ3MgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICBjb25zdCB0b2RvTGlzdEZvclByb2plY3QgPSBbXTtcbiAgcmV0dXJuIHsgcHJvamVjdExpc3QsIHRvZG9MaXN0LCB0b2RvTGlzdEZvclByb2plY3QgfTtcbn0pKCk7XG5cbmV4cG9ydCB7XG4gIHByb2plY3QsIHRvZG8sIHNhdmluZ3MsXG59O1xuIiwiaW1wb3J0IHsgc2F2aW5ncyB9IGZyb20gJy4vb2JqZWN0cyc7XG5pbXBvcnQgbG9naWNVdGlscyBmcm9tICcuL2xvZ2ljX3V0aWxzJztcblxuY29uc3QgcHJvdmlkZUxvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgaWRzID0gbG9naWNVdGlscy5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKCdpZHMnKTtcbiAgICBpZiAoIWlkcykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gaWRzLnByb2plY3RDdXJyZW50SWQ7XG4gIH07XG4gIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4gc2F2aW5ncy5wcm9qZWN0TGlzdDtcbiAgY29uc3QgZ2V0VG9kb0xpc3RGb3JQcm9qZWN0ID0gKCkgPT4gc2F2aW5ncy50b2RvTGlzdEZvclByb2plY3Q7XG5cbiAgcmV0dXJuIHsgZ2V0Q3VycmVudFByb2plY3QsIGdldFByb2plY3RMaXN0LCBnZXRUb2RvTGlzdEZvclByb2plY3QgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3ZpZGVMb2dpYztcbiIsImNvbnN0IGRlZmF1bHRUb2RvID0gW1xuICB7XG4gICAgdGl0bGU6ICdmaXJzdCBsb25nIGxvbmcgbG9uZyB0aXRsZScsXG4gICAgcHJvamVjdElkOiAncHJvamVjdC0xJyxcbiAgICBkYXRlOiAnMjAxOS0xMC0xNCcsXG4gICAgcHJpb3JpdHk6ICdwcmlvcml0eS1ub3JtYWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnZXhhbXBsZSBsb25nIGxvbmcgZGVzY3JpcHRpb24gYW5kIG1vcmUnLFxuICAgIGlkOiAndG9kby0xJyxcbiAgICBkb25lOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnc2Vjb25kIHRpdGxlJyxcbiAgICBwcm9qZWN0SWQ6ICdwcm9qZWN0LTEnLFxuICAgIGRhdGU6ICcyMDE5LTEwLTE1JyxcbiAgICBwcmlvcml0eTogJ3ByaW9yaXR5LXVyZ2VudCcsXG4gICAgZGVzY3JpcHRpb246ICdleGFtcGxlIGRlc2NyaXB0aW9uJyxcbiAgICBpZDogJ3RvZG8tMicsXG4gICAgZG9uZTogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ3RoaXJkIHRpdGxlJyxcbiAgICBwcm9qZWN0SWQ6ICdwcm9qZWN0LTEnLFxuICAgIGRhdGU6ICcyMDE5LTEwLTE1JyxcbiAgICBwcmlvcml0eTogJ3ByaW9yaXR5LW5vcm1hbCcsXG4gICAgZGVzY3JpcHRpb246ICdleGFtcGxlIGRlc2NyaXB0aW9uJyxcbiAgICBpZDogJ3RvZG8tMycsXG4gICAgZG9uZTogZmFsc2UsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VG9kbztcbiIsImltcG9ydCBsb2dpY1V0aWxzIGZyb20gJy4vbG9naWNfdXRpbHMnO1xuaW1wb3J0IHtzYXZpbmdzfSBmcm9tICcuL29iamVjdHMnO1xuXG5jb25zdCB1cGRhdGVMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRvbmUgPSAoaWQpID0+IHtcblx0XHRjb25zdCBzb3J0ID0gaWQuc3BsaXQoJy0nKVswXTtcblx0XHRjb25zdCBkYXRhID0gbG9naWNVdGlscy5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKHNvcnQpO1xuXHRcdGNvbnN0IG9iaiA9IGRhdGEuZmluZChlID0+IGUuaWQgPT09IGlkKTtcblx0XHRpZiAob2JqKSBvYmouZG9uZSA9ICFvYmouZG9uZTtcblx0XHRzYXZpbmdzW2Ake3NvcnR9TGlzdGBdID0gZGF0YTtcblx0XHRsb2dpY1V0aWxzLnVwZGF0ZUpzb25JbmZvVG9TdG9yYWdlKHsgc29ydCwgZGF0YSB9KTtcbiAgfTtcblxuICByZXR1cm4geyBkb25lIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVMb2dpYztcbiJdLCJzb3VyY2VSb290IjoiIn0=