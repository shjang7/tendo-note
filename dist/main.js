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

  var getFormData = function getFormData(form, projectId) {
    var data = {};
    if (projectId) data.projectId = projectId;
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
    var projectId = _logic_controller__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();
    var data = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getFormData(form, projectId);
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


var deleteLogic = function () {
  var deleteUnit = function deleteUnit(id) {
    var sort = id.split('-')[0];
    var data = _logic_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getJsonInfoFromStorage(sort);
    var updated = data ? data.filter(function (e) {
      return e.id !== id;
    }) : [];
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


var updateLogic = function () {
  var done = function done(id) {
    var sort = id.split('-')[0];
    var data = _logic_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getJsonInfoFromStorage(sort);
    var obj = data.find(function (e) {
      return e.id === id;
    });
    if (obj) obj.done = !obj.done;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvY3JlYXRlX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvY3JlYXRlX3RvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvZGVsZXRlX2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvZm9ybV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXlfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljcy9jcmVhdGVfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWNzL2NyZWF0ZV90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpY3MvZGVsZXRlX2xvZ2ljLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpY3MvbG9naWNfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljcy9vYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpY3MvcHJvdmlkZV9sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWNzL3NhbXBsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljcy91cGRhdGVfbG9naWMuanMiXSwibmFtZXMiOlsiY3JlYXRlUHJvamVjdCIsImFkZEVhY2giLCJwcm9qZWN0TmFtZSIsImlkIiwicHJvamVjdCIsInV0aWxzIiwiY3JlYXRlVGFnIiwidGFnIiwiY2xhc3NlcyIsInRleHRDb250ZW50IiwicHJvamVjdEdyb3VwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJhZGRHcm91cCIsInByb2plY3RBcnJheSIsImZvckVhY2giLCJlIiwiY3JlYXRlVG9kbyIsImRvbmVTdGF0dXNEaXNwbGF5IiwiZG9uZSIsInRhcmdldCIsInBhcmVudCIsInR5cGUiLCJjaGVja2VkIiwiY2xhc3NMaXN0IiwiYWRkIiwidGl0bGUiLCJkYXRlIiwicHJpb3JpdHkiLCJkZXNjcmlwdGlvbiIsInRvZG8iLCJkb25lVGFyZ2V0IiwidGV4dCIsIm5ld0dyb3VwIiwidG9kb0dyb3VwIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZGVsZXRlRGlzcGxheSIsImdldERlbGV0ZUJ1dHRvbkFsbCIsImNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsImRlbGV0ZVVuaXQiLCJidXR0b24iLCJvYmplY3QiLCJwYXJlbnROb2RlIiwiZ2V0UmVzZXRCdXR0b24iLCJmb3JtQ29udHJvbGxlciIsImJ1aWxkRmllbGQiLCJwbGFjZWhvbGRlciIsImRlZmF1bHRWYWx1ZSIsInRleHRhcmVhIiwiaW5wdXRUeXBlIiwibmFtZSIsImluY2x1ZGVTcGFjZSIsImV4Y2hhbmdlU3BhY2VUb0Rhc2giLCJmaWVsZCIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwicHJpb3JpdHlVbml0Iiwid29yZCIsImxhYmVsIiwicHJpb3JpdHlGaWVsZCIsImNyZWF0ZUZvcm0iLCJvcHRpb24iLCJmb3JtIiwiZmllbGRzZXQiLCJnZXREYXRlRnJvbVRvZGF5IiwiZ2V0UmFkaW9JbmZvIiwiZGF0YSIsInJhZGlvcyIsImdldEVsZW1lbnRzQnlOYW1lIiwicmFkaW8iLCJtYWtlQmxhbmtGb3JtIiwic2VsZWN0b3IiLCJ2YWx1ZSIsImdldEZvcm1MYXlvdXQiLCJvcGVuIiwiZ2V0Rm9ybURhdGEiLCJwcm9qZWN0SWQiLCJrZXkiLCJleGNoYW5nZURhc2hUb0NhcGl0YWwiLCJsYXlvdXQiLCJoZWFkZXJTZXQiLCJoZWFkZXIiLCJzZXRQcm9qZWN0IiwicHJvamVjdENvbnRhaW5lciIsInNldFRvZG8iLCJ0b2RvQ29udGFpbmVyIiwic2V0IiwibWFpbkNvbnRhaW5lciIsInVwZGF0ZSIsImdldERvbmVCdXR0b25BbGwiLCJ0b2dnbGUiLCJnZXRQcm9qZWN0TGlzdCIsImNoaWxkTm9kZXMiLCJ1cGRhdGVDdXJyZW50UHJvamVjdCIsIm5ld1RhZyIsInByZXZpb3VzIiwicmVtb3ZlIiwibGFzdEN1cnJlbnRQcm9qZWN0IiwibGVuZ3RoIiwibGFzdENoaWxkIiwidW5kZWZpbmVkIiwib2JqIiwiY3JlYXRlRWxlbWVudCIsInNwbGl0IiwiZWxlbSIsImFkZERhdGUiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJkZCIsIlN0cmluZyIsInBhZFN0YXJ0IiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInJlc2l6ZVRleHRhcmVhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZm9jdXNTZXQiLCJmb3JtR3JvdXAiLCJpIiwiZGlzcGxheSIsImZvY3VzIiwiZXZlbnRTZXQiLCJlbGltaW5hdGVGaXJzdE9mRGFzaCIsIndvcmRzIiwiY2FwaXRhbGl6ZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwiZGlzcGxheUNvbnRyb2xsZXIiLCJhZGRQcm9qZWN0R3JvdXAiLCJhZGRUb2RvR3JvdXAiLCJ0b2RvQXJyYXkiLCJkb25lVW5pdCIsInNldE1haW5EaXNwbGF5IiwiaW50ZXJmYWNlTWFpbiIsInByb2plY3RTZXR0aW5nIiwibG9naWNDb250cm9sbGVyIiwidG9kb1NldHRpbmciLCJnZXRUb2RvTGlzdEZvclByb2plY3QiLCJidG4iLCJ1cGRhdGVUb2RvTGlzdEZvclByb2plY3QiLCJzdWJtaXRGb3JtUHJvamVjdCIsImFkZFByb2plY3RMaXN0Iiwic3VibWl0Rm9ybVRvZG8iLCJnZXRDdXJyZW50UHJvamVjdCIsImFkZFRvZG9MaXN0Iiwic2V0SW5pdGlhbEN1cnJlbnRQcm9qZWN0IiwibGFzdFByb2plY3QiLCJhZnRlclN1Ym1pc3Npb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImluaXQiLCJmb3JtU3VibWlzc2lvbkV2ZW50Iiwic29ydCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInByb2plY3RTd2l0Y2hFdmVudCIsImJ1dHRvbnMiLCJkZWxldGVFdmVudCIsImRlbGV0ZUFsbEJ1dHRvbiIsImRlbGV0ZUJ0biIsImRvbmVFdmVudCIsImRvbmVBbGxCdG4iLCJkb25lQnRuIiwicHJvZ3JhbVJlc2V0RXZlbnQiLCJyZXNldEJ0biIsInJlc2V0QWxsIiwiY3JlYXRlRXZlbnRzIiwic3RhcnQiLCJzZXRUb2RvTGlzdEZvclByb2plY3QiLCJwcm92aWRlTG9naWMiLCJkZWxldGVMb2dpYyIsInVwZGF0ZUxvZ2ljIiwic2V0RGVmYXVsdFByb2plY3QiLCJzZXREZWZhdWx0VG9kbyIsInNldEluZm9Gcm9tU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJkZWZhdWx0UHJvamVjdCIsImxvZ2ljVXRpbHMiLCJ1cGRhdGVKc29uSW5mb1RvU3RvcmFnZSIsImFkZEpzb25JbmZvVG9TdG9yYWdlIiwicHJvamVjdExhc3RJZCIsInByb2plY3RDdXJyZW50SWQiLCJjb3B5UHJvamVjdElkIiwiZ2V0TmV3SWQiLCJzYXZpbmdzIiwicHJvamVjdExpc3QiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInZhbCIsImdldEpzb25JbmZvRnJvbVN0b3JhZ2UiLCJkZWZhdWx0VG9kbyIsImlkc0RhdGEiLCJ0b2RvTGFzdElkIiwidG9kb0N1cnJlbnRJZCIsInRvZG9MaXN0IiwidG9kb0xpc3RGb3JQcm9qZWN0IiwiZmlsdGVyIiwidXBkYXRlZCIsImNsZWFyIiwib3JpZ2luYWxEYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImsiLCJ2IiwibmV3TnVtYmVyIiwiTnVtYmVyIiwi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QUpBO0FBQUYsR0FBUDtBQUNELENBVm1CLEVBQXBCOztBQVllbUssMEVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRFYWNoID0gKHsgcHJvamVjdE5hbWUsIGlkIH0pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gdXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2g0JywgaWQsIGNsYXNzZXM6ICdwcm9qZWN0LWNvbnRlbnQgbS0wJyxcbiAgICB9KTtcblxuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBjb25zdCBwcm9qZWN0R3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50LWdyb3VwJyk7XG4gICAgcHJvamVjdEdyb3VwLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEdyb3VwID0gKHByb2plY3RBcnJheSkgPT4ge1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGUgPT4gYWRkRWFjaChlKSk7XG4gIH07XG4gIHJldHVybiB7IGFkZEdyb3VwIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0O1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBjcmVhdGVUb2RvID0gKCgpID0+IHtcbiAgY29uc3QgZG9uZVN0YXR1c0Rpc3BsYXkgPSAoeyBkb25lLCB0YXJnZXQsIHBhcmVudCB9KSA9PiB7XG4gICAgdGFyZ2V0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGlmIChkb25lKSB7XG4gICAgICB0YXJnZXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRFYWNoID0gKHtcbiAgICB0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBpZCwgZG9uZSxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHRvZG8gPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZGl2JywgaWQsIGNsYXNzZXM6IGB0b2RvLWNvbnRlbnQgbm8tZ3V0dGVyICR7cHJpb3JpdHl9YCxcbiAgICB9KTtcbiAgICBjb25zdCBkb25lVGFyZ2V0ID0gdXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2lucHV0JywgY2xhc3NlczogJ2RvbmUtYnRuIHZlcnRpY2FsLWFsaWduLWJvdHRvbScsXG4gICAgfSk7XG4gICAgZG9uZVN0YXR1c0Rpc3BsYXkoeyBkb25lLCB0YXJnZXQ6IGRvbmVUYXJnZXQsIHBhcmVudDogdG9kbyB9KTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKGRvbmVUYXJnZXQpO1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2g0JyxcbiAgICAgIGNsYXNzZXM6ICd0aXRsZSBjb2wtbWQtMyB0ZXh0LW5vd3JhcCBtLTAgdmVydGljYWwtYWxpZ24tYm90dG9tJyxcbiAgICAgIHRleHQ6IHRpdGxlLFxuICAgIH0pKTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogJ2RhdGUgY29sLW1kLTMgdmVydGljYWwtYWxpZ24tYm90dG9tJyxcbiAgICAgIHRleHQ6IGRhdGUsXG4gICAgfSkpO1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiAnZGVzY3JpcHRpb24gY29sLW1kLTMgdGV4dC1ub3dyYXAgdmVydGljYWwtYWxpZ24tYm90dG9tJyxcbiAgICAgIHRleHQ6IGRlc2NyaXB0aW9uLFxuICAgIH0pKTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogJ2VkaXQgY29sLW1kLTEgdmVydGljYWwtYWxpZ24tYm90dG9tJyxcbiAgICAgIHRleHQ6ICdlZGl0JyxcbiAgICB9KSk7XG4gICAgdG9kby5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6ICdkZWxldGUgY29sLW1kLTEgdmVydGljYWwtYWxpZ24tYm90dG9tJyxcbiAgICAgIHRleHQ6ICdkZWxldGUnLFxuICAgIH0pKTtcbiAgICByZXR1cm4gdG9kbztcbiAgfTtcblxuICBjb25zdCBhZGRHcm91cCA9IChuZXdHcm91cCkgPT4ge1xuICAgIGNvbnN0IHRvZG9Hcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRlbnQtZ3JvdXAnKTtcbiAgICB3aGlsZSAodG9kb0dyb3VwLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRvZG9Hcm91cC5yZW1vdmVDaGlsZCh0b2RvR3JvdXAuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIG5ld0dyb3VwLmZvckVhY2goZSA9PiB0b2RvR3JvdXAuYXBwZW5kQ2hpbGQoYWRkRWFjaChlKSkpO1xuICB9O1xuXG4gIHJldHVybiB7IGFkZEdyb3VwIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvO1xuIiwiY29uc3QgZGVsZXRlRGlzcGxheSA9ICgoKSA9PiB7XG4gIGNvbnN0IGdldERlbGV0ZUJ1dHRvbkFsbCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICByZXR1cm4gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVVbml0ID0gKGJ1dHRvbikgPT4ge1xuICAgIGNvbnN0IG9iamVjdCA9IGJ1dHRvbi5wYXJlbnROb2RlO1xuICAgIG9iamVjdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9iamVjdCk7XG4gICAgcmV0dXJuIG9iamVjdC5pZDtcbiAgfTtcblxuICBjb25zdCBnZXRSZXNldEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpO1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvcignLmgtdGl0bGUnKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXREZWxldGVCdXR0b25BbGwsIGRlbGV0ZVVuaXQsIGdldFJlc2V0QnV0dG9uIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVEaXNwbGF5O1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBmb3JtQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ1aWxkRmllbGQgPSAoe1xuICAgIHBsYWNlaG9sZGVyLCB0eXBlLCBkZWZhdWx0VmFsdWUsIHRleHRhcmVhLFxuICB9KSA9PiB7XG4gICAgY29uc3QgaW5wdXRUeXBlID0gdGV4dGFyZWEgfHwgJ2lucHV0JztcbiAgICBjb25zdCBuYW1lID0gdXRpbHMuaW5jbHVkZVNwYWNlKHBsYWNlaG9sZGVyKSA/IHV0aWxzLmV4Y2hhbmdlU3BhY2VUb0Rhc2gocGxhY2Vob2xkZXIpXG4gICAgICA6IHBsYWNlaG9sZGVyO1xuICAgIGNvbnN0IGZpZWxkID0gdXRpbHMuY3JlYXRlVGFnKHsgdGFnOiAnZGl2JywgY2xhc3NlczogYGZpZWxkICR7bmFtZX1gIH0pO1xuICAgIGNvbnN0IGlucHV0ID0gdXRpbHMuY3JlYXRlVGFnKHsgdGFnOiBpbnB1dFR5cGUsIGlkOiBuYW1lLCBjbGFzc2VzOiBuYW1lIH0pO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XG4gICAgaW5wdXQubmFtZSA9IG5hbWU7XG4gICAgaWYgKHR5cGUpIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgIGlmIChkZWZhdWx0VmFsdWUpIGlucHV0LmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgcmV0dXJuIGZpZWxkO1xuICB9O1xuXG4gIGNvbnN0IHByaW9yaXR5VW5pdCA9ICh3b3JkLCBmaWVsZCwgY2hlY2tlZCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gdXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2lucHV0JywgaWQ6IGBwcmlvcml0eS0ke3dvcmR9YCwgY2xhc3NlczogJ3ByaW9yaXR5JyxcbiAgICB9KTtcbiAgICBpbnB1dC5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICBpbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBpZiAoY2hlY2tlZCkgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgY29uc3QgbGFiZWwgPSB1dGlscy5jcmVhdGVUYWcoeyB0YWc6ICdsYWJlbCcsIHRleHQ6IHdvcmQgfSk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgcHJpb3JpdHktJHt3b3JkfWApO1xuICAgIGZpZWxkLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIH07XG5cbiAgY29uc3QgcHJpb3JpdHlGaWVsZCA9ICgpID0+IHtcbiAgICBjb25zdCBmaWVsZCA9IHV0aWxzLmNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdmaWVsZCBwcmlvcml0eScgfSk7XG4gICAgcHJpb3JpdHlVbml0KCdub3JtYWwnLCBmaWVsZCwgJ2NoZWNrZWQnKTtcbiAgICBwcmlvcml0eVVuaXQoJ3VyZ2VudCcsIGZpZWxkKTtcbiAgICByZXR1cm4gZmllbGQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRm9ybSA9ICh7IG9wdGlvbiB9KSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdmb3JtJywgY2xhc3NlczogdXRpbHMuZXhjaGFuZ2VTcGFjZVRvRGFzaChgJHtvcHRpb259IGZvcm1gKSxcbiAgICB9KTtcbiAgICBjb25zdCBmaWVsZHNldCA9IHV0aWxzLmNyZWF0ZVRhZyh7IHRhZzogJ2ZpZWxkc2V0JyB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcbiAgICBpZiAob3B0aW9uID09PSAncHJvamVjdCcpIHtcbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJ1aWxkRmllbGQoeyBwbGFjZWhvbGRlcjogJ3Byb2plY3QgbmFtZScgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgcGxhY2Vob2xkZXI6ICd0aXRsZScgfSkpO1xuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYnVpbGRGaWVsZCh7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAnZGF0ZScsIHR5cGU6ICdkYXRlJywgZGVmYXVsdFZhbHVlOiB1dGlscy5nZXREYXRlRnJvbVRvZGF5KDApLFxuICAgICAgfSkpO1xuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlGaWVsZCgpKTtcbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJ1aWxkRmllbGQoeyBwbGFjZWhvbGRlcjogJ2Rlc2NyaXB0aW9uJywgdGV4dGFyZWE6ICd0ZXh0YXJlYScgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybTtcbiAgfTtcblxuICBjb25zdCBnZXRSYWRpb0luZm8gPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHJhZGlvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdwcmlvcml0eScpO1xuICAgIHJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgaWYgKHJhZGlvLmNoZWNrZWQpIHtcbiAgICAgICAgZGF0YVtyYWRpby5uYW1lXSA9IHJhZGlvLmlkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VCbGFua0Zvcm0gPSAoZm9ybSkgPT4ge1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZpZWxkJykuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZmllbGQucXVlcnlTZWxlY3RvcignaW5wdXQnKSB8fCBmaWVsZC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgICAgc2VsZWN0b3IudmFsdWUgPSAnJztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRGb3JtTGF5b3V0ID0gKGlkKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgY29uc3Qgb3BlbiA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtZm9ybScpO1xuICAgIGNvbnN0IGZvcm0gPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgcmV0dXJuIHsgZm9ybSwgb3BlbiB9O1xuICB9O1xuXG4gIGNvbnN0IGdldEZvcm1EYXRhID0gKGZvcm0sIHByb2plY3RJZCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBpZiAocHJvamVjdElkKSBkYXRhLnByb2plY3RJZCA9IHByb2plY3RJZDtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWVsZCcpLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykgfHwgZmllbGQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICAgIGlmIChzZWxlY3Rvci50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIGdldFJhZGlvSW5mbyhkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmV4Y2hhbmdlRGFzaFRvQ2FwaXRhbChzZWxlY3Rvci5uYW1lKTtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gc2VsZWN0b3I7XG4gICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlRm9ybSwgZ2V0Rm9ybURhdGEsIG1ha2VCbGFua0Zvcm0sIGdldEZvcm1MYXlvdXQsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtQ29udHJvbGxlcjtcbiIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBmb3JtQ29udHJvbGxlciBmcm9tICcuL2Zvcm1fY29udHJvbGxlcic7XG5cbmNvbnN0IGxheW91dCA9ICgoKSA9PiB7XG4gIGNvbnN0IGhlYWRlclNldCA9IChoZWFkZXIsIHdvcmQpID0+IHtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2gxJywgY2xhc3NlczogJ2gtdGl0bGUnLCB0ZXh0OiB3b3JkLFxuICAgIH0pKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2gxJywgY2xhc3NlczogJ2NyZWF0ZS1mb3JtJywgdGV4dDogJysnLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBzZXRQcm9qZWN0ID0gKHByb2plY3RDb250YWluZXIpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0R3JvdXAgPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZGl2JywgY2xhc3NlczogJ3Byb2plY3QtY29udGVudC1ncm91cCcsXG4gICAgfSk7XG4gICAgaGVhZGVyU2V0KHByb2plY3RDb250YWluZXIsICdQcm9qZWN0Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0R3JvdXApO1xuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IHNldFRvZG8gPSAodG9kb0NvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IHRvZG9Hcm91cCA9IHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdkaXYnLCBjbGFzc2VzOiAndG9kby1jb250ZW50LWdyb3VwJyxcbiAgICB9KTtcbiAgICBoZWFkZXJTZXQodG9kb0NvbnRhaW5lciwgJ1RvZG8nKTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Hcm91cCk7XG4gICAgcmV0dXJuIHRvZG9Db250YWluZXI7XG4gIH07XG5cbiAgY29uc3Qgc2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnc2VjdGlvbicsIGlkOiAncHJvamVjdCcsIGNsYXNzZXM6ICdjb2wtbWQtNCBwcmltYXJ5LWJnJyxcbiAgICB9KTtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gdXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ3NlY3Rpb24nLCBpZDogJ3RvZG8nLCBjbGFzc2VzOiAnY29sLW1kLTggc2Vjb25kYXJ5LWJnJyxcbiAgICB9KTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeS1iZycpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2V0UHJvamVjdChwcm9qZWN0Q29udGFpbmVyKSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXRUb2RvKHRvZG9Db250YWluZXIpKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250cm9sbGVyLmNyZWF0ZUZvcm0oeyBvcHRpb246ICdwcm9qZWN0JyB9KSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udHJvbGxlci5jcmVhdGVGb3JtKHsgb3B0aW9uOiAndG9kbycgfSkpO1xuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xuICB9O1xuXG4gIHJldHVybiB7IHNldCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0O1xuIiwiY29uc3QgdXBkYXRlID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0RG9uZUJ1dHRvbkFsbCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICByZXR1cm4gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb25lLWJ0bicpO1xuICB9O1xuXG4gIGNvbnN0IGRvbmUgPSAoYnV0dG9uKSA9PiB7XG4gICAgY29uc3Qgb2JqZWN0ID0gYnV0dG9uLnBhcmVudE5vZGU7XG4gICAgb2JqZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2RvbmUnKTtcbiAgICByZXR1cm4gb2JqZWN0LmlkO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGVudC1ncm91cCcpLmNoaWxkTm9kZXM7XG5cbiAgY29uc3QgdXBkYXRlQ3VycmVudFByb2plY3QgPSAobmV3VGFnKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGVudC1ncm91cCcpO1xuICAgIGNvbnN0IHByZXZpb3VzID0gcHJvamVjdEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXByb2plY3QnKTtcbiAgICBpZiAocHJldmlvdXMpIHByZXZpb3VzLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtcHJvamVjdCcpO1xuICAgIG5ld1RhZy5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXByb2plY3QnKTtcbiAgICByZXR1cm4gbmV3VGFnLmlkO1xuICB9O1xuXG4gIGNvbnN0IGxhc3RDdXJyZW50UHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICBpZiAocHJvamVjdElkKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJvamVjdElkfWApO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGVudC1ncm91cCcpLmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRlbnQtZ3JvdXAnKS5sYXN0Q2hpbGQ7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXREb25lQnV0dG9uQWxsLFxuICAgIGRvbmUsXG4gICAgdXBkYXRlQ3VycmVudFByb2plY3QsXG4gICAgZ2V0UHJvamVjdExpc3QsXG4gICAgbGFzdEN1cnJlbnRQcm9qZWN0LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlO1xuIiwiY29uc3QgdXRpbHMgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVUYWcgPSAoe1xuICAgIHRhZywgaWQsIGNsYXNzZXMsIHRleHQsXG4gIH0pID0+IHtcbiAgICBjb25zdCBvYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKGlkKSBvYmouc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBpZiAoY2xhc3NlcykgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZWxlbSA9PiBvYmouY2xhc3NMaXN0LmFkZChlbGVtKSk7XG4gICAgaWYgKHRleHQpIG9iai50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBjb25zdCBnZXREYXRlRnJvbVRvZGF5ID0gKGFkZERhdGUpID0+IHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYWRkRGF0ZSk7XG4gICAgY29uc3QgZGQgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgbW0gPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gSmFudWFyeSBpcyAwIVxuICAgIGNvbnN0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgZGF0ZSA9IGAke3l5eXl9LSR7bW19LSR7ZGR9YDtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfTtcblxuICBjb25zdCByZXNpemVUZXh0YXJlYSA9ICgpID0+IHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBgJHsyMCArIHRleHRhcmVhLnNjcm9sbEhlaWdodH1weGA7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZm9jdXNTZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUdyb3VwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZm9ybUdyb3VwW2ldLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICBmb3JtR3JvdXBbaV0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZXZlbnRTZXQgPSAoKSA9PiB7XG4gICAgcmVzaXplVGV4dGFyZWEoKTtcbiAgICBmb2N1c1NldCgpO1xuICB9O1xuXG4gIGNvbnN0IGVsaW1pbmF0ZUZpcnN0T2ZEYXNoID0gd29yZHMgPT4gd29yZHMuc3BsaXQoJy0nKVsxXTtcblxuICBjb25zdCBjYXBpdGFsaXplID0gd29yZCA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcblxuICBjb25zdCBleGNoYW5nZURhc2hUb0NhcGl0YWwgPSAod29yZCkgPT4ge1xuICAgIGNvbnN0IHdvcmRzID0gd29yZC5zcGxpdCgnLScpO1xuICAgIGlmICh3b3Jkcy5sZW5ndGggPiAxKSB7XG4gICAgICB3b3Jkc1sxXSA9IGNhcGl0YWxpemUod29yZHNbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gd29yZHMuam9pbignJyk7XG4gIH07XG5cbiAgY29uc3QgZXhjaGFuZ2VTcGFjZVRvRGFzaCA9IHdvcmQgPT4gd29yZC5zcGxpdCgnICcpLmpvaW4oJy0nKTtcblxuICBjb25zdCBpbmNsdWRlU3BhY2UgPSB3b3JkID0+IHdvcmQuc3BsaXQoJyAnKS5sZW5ndGggPiAxO1xuXG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUYWcsXG4gICAgZ2V0RGF0ZUZyb21Ub2RheSxcbiAgICBldmVudFNldCxcbiAgICBlbGltaW5hdGVGaXJzdE9mRGFzaCxcbiAgICBleGNoYW5nZURhc2hUb0NhcGl0YWwsXG4gICAgZXhjaGFuZ2VTcGFjZVRvRGFzaCxcbiAgICBpbmNsdWRlU3BhY2UsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcbiIsImltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gJy4vZGlzcGxheS9jcmVhdGVfcHJvamVjdCc7XG5pbXBvcnQgY3JlYXRlVG9kbyBmcm9tICcuL2Rpc3BsYXkvY3JlYXRlX3RvZG8nO1xuaW1wb3J0IGZvcm1Db250cm9sbGVyIGZyb20gJy4vZGlzcGxheS9mb3JtX2NvbnRyb2xsZXInO1xuaW1wb3J0IGxheW91dCBmcm9tICcuL2Rpc3BsYXkvbGF5b3V0JztcbmltcG9ydCB1dGlscyBmcm9tICcuL2Rpc3BsYXkvdXRpbHMnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuL2Rpc3BsYXkvdXBkYXRlJztcbmltcG9ydCBkZWxldGVEaXNwbGF5IGZyb20gJy4vZGlzcGxheS9kZWxldGVfZGlzcGxheSc7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEdyb3VwID0gcHJvamVjdEFycmF5ID0+IGNyZWF0ZVByb2plY3QuYWRkR3JvdXAocHJvamVjdEFycmF5KTtcbiAgY29uc3QgYWRkVG9kb0dyb3VwID0gdG9kb0FycmF5ID0+IGNyZWF0ZVRvZG8uYWRkR3JvdXAodG9kb0FycmF5KTtcblxuICBjb25zdCBnZXRGb3JtTGF5b3V0ID0gaWQgPT4gZm9ybUNvbnRyb2xsZXIuZ2V0Rm9ybUxheW91dChpZCk7XG4gIGNvbnN0IGdldEZvcm1EYXRhID0gKGZvcm0sIHByb2plY3RJZCkgPT4gZm9ybUNvbnRyb2xsZXIuZ2V0Rm9ybURhdGEoZm9ybSwgcHJvamVjdElkKTtcbiAgY29uc3QgbWFrZUJsYW5rRm9ybSA9IGZvcm0gPT4gZm9ybUNvbnRyb2xsZXIubWFrZUJsYW5rRm9ybShmb3JtKTtcblxuICBjb25zdCBnZXREZWxldGVCdXR0b25BbGwgPSBpZCA9PiBkZWxldGVEaXNwbGF5LmdldERlbGV0ZUJ1dHRvbkFsbChpZCk7XG4gIGNvbnN0IGRlbGV0ZVVuaXQgPSBidXR0b24gPT4gZGVsZXRlRGlzcGxheS5kZWxldGVVbml0KGJ1dHRvbik7XG4gIGNvbnN0IGdldFJlc2V0QnV0dG9uID0gKCkgPT4gZGVsZXRlRGlzcGxheS5nZXRSZXNldEJ1dHRvbigpO1xuXG4gIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4gdXBkYXRlLmdldFByb2plY3RMaXN0KCk7XG4gIGNvbnN0IHVwZGF0ZUN1cnJlbnRQcm9qZWN0ID0gbmV3VGFnID0+IHVwZGF0ZS51cGRhdGVDdXJyZW50UHJvamVjdChuZXdUYWcpO1xuICBjb25zdCBsYXN0Q3VycmVudFByb2plY3QgPSBwcm9qZWN0SWQgPT4gdXBkYXRlLmxhc3RDdXJyZW50UHJvamVjdChwcm9qZWN0SWQpO1xuXG4gIGNvbnN0IGdldERvbmVCdXR0b25BbGwgPSBpZCA9PiB1cGRhdGUuZ2V0RG9uZUJ1dHRvbkFsbChpZCk7XG4gIGNvbnN0IGRvbmVVbml0ID0gYnV0dG9uID0+IHVwZGF0ZS5kb25lKGJ1dHRvbik7XG5cblxuICBjb25zdCBzZXRNYWluRGlzcGxheSA9ICgpID0+IHtcbiAgICBsYXlvdXQuc2V0KCk7XG4gICAgdXRpbHMuZXZlbnRTZXQoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldE1haW5EaXNwbGF5LFxuICAgIGFkZFRvZG9Hcm91cCxcbiAgICBhZGRQcm9qZWN0R3JvdXAsXG4gICAgZ2V0Rm9ybUxheW91dCxcbiAgICBnZXRGb3JtRGF0YSxcbiAgICBtYWtlQmxhbmtGb3JtLFxuICAgIGdldERlbGV0ZUJ1dHRvbkFsbCxcbiAgICBkZWxldGVVbml0LFxuICAgIGdldFJlc2V0QnV0dG9uLFxuICAgIGdldFByb2plY3RMaXN0LFxuICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0LFxuICAgIGxhc3RDdXJyZW50UHJvamVjdCxcbiAgICBnZXREb25lQnV0dG9uQWxsLFxuICAgIGRvbmVVbml0LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSAnLi9kaXNwbGF5X2NvbnRyb2xsZXInO1xuaW1wb3J0IGxvZ2ljQ29udHJvbGxlciBmcm9tICcuL2xvZ2ljX2NvbnRyb2xsZXInO1xuXG5jb25zdCBpbnRlcmZhY2VNYWluID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdFNldHRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gbG9naWNDb250cm9sbGVyLmdldFByb2plY3RMaXN0KCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuYWRkUHJvamVjdEdyb3VwKHByb2plY3RBcnJheSk7XG4gIH07XG5cbiAgY29uc3QgdG9kb1NldHRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb0FycmF5ID0gbG9naWNDb250cm9sbGVyLmdldFRvZG9MaXN0Rm9yUHJvamVjdCgpO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFkZFRvZG9Hcm91cCh0b2RvQXJyYXkpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUN1cnJlbnRQcm9qZWN0ID0gKGJ0bikgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGRpc3BsYXlDb250cm9sbGVyLnVwZGF0ZUN1cnJlbnRQcm9qZWN0KGJ0bik7XG4gICAgbG9naWNDb250cm9sbGVyLnVwZGF0ZVRvZG9MaXN0Rm9yUHJvamVjdChwcm9qZWN0SWQpO1xuICAgIHRvZG9TZXR0aW5nKCk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0Rm9ybVByb2plY3QgPSAoZm9ybSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBkaXNwbGF5Q29udHJvbGxlci5nZXRGb3JtRGF0YShmb3JtKTtcbiAgICBsb2dpY0NvbnRyb2xsZXIuYWRkUHJvamVjdExpc3QoZGF0YSk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0Rm9ybVRvZG8gPSAoZm9ybSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGxvZ2ljQ29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBkaXNwbGF5Q29udHJvbGxlci5nZXRGb3JtRGF0YShmb3JtLCBwcm9qZWN0SWQpO1xuICAgIGxvZ2ljQ29udHJvbGxlci5hZGRUb2RvTGlzdChkYXRhKTtcbiAgfTtcblxuICBjb25zdCBzZXRJbml0aWFsQ3VycmVudFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gbG9naWNDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgaWYgKHByb2plY3RJZCkge1xuICAgICAgY29uc3QgbGFzdFByb2plY3QgPSBkaXNwbGF5Q29udHJvbGxlci5sYXN0Q3VycmVudFByb2plY3QocHJvamVjdElkKTtcbiAgICAgIGlmIChsYXN0UHJvamVjdCkgdXBkYXRlQ3VycmVudFByb2plY3QobGFzdFByb2plY3QpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZnRlclN1Ym1pc3Npb24gPSAoZm9ybSkgPT4ge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLm1ha2VCbGFua0Zvcm0oZm9ybSk7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9O1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgbG9naWNDb250cm9sbGVyLnNldCgpO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLnNldE1haW5EaXNwbGF5KCk7XG4gICAgcHJvamVjdFNldHRpbmcoKTtcbiAgICBzZXRJbml0aWFsQ3VycmVudFByb2plY3QoKTtcbiAgfTtcblxuICBjb25zdCBmb3JtU3VibWlzc2lvbkV2ZW50ID0gKGZvcm0sIHNvcnQpID0+IHtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHNvcnQgPT09ICdwcm9qZWN0Jykgc3VibWl0Rm9ybVByb2plY3QoZm9ybSk7XG4gICAgICAgIGlmIChzb3J0ID09PSAndG9kbycpIHN1Ym1pdEZvcm1Ub2RvKGZvcm0pO1xuICAgICAgICBhZnRlclN1Ym1pc3Npb24oZm9ybSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdFN3aXRjaEV2ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkaXNwbGF5Q29udHJvbGxlci5nZXRQcm9qZWN0TGlzdCgpO1xuICAgIGlmIChidXR0b25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB1cGRhdGVDdXJyZW50UHJvamVjdChidXR0b24pO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVW5pdCA9IChidXR0b24pID0+IHtcblx0XHRjb25zdCBpZCA9IGRpc3BsYXlDb250cm9sbGVyLmRlbGV0ZVVuaXQoYnV0dG9uKTtcblx0XHRsb2dpY0NvbnRyb2xsZXIuZGVsZXRlVW5pdChpZCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlRXZlbnQgPSAod29yZCkgPT4ge1xuXHRcdGNvbnN0IGRlbGV0ZUFsbEJ1dHRvbiA9IGRpc3BsYXlDb250cm9sbGVyLmdldERlbGV0ZUJ1dHRvbkFsbCh3b3JkKTtcblx0XHRkZWxldGVBbGxCdXR0b24uZm9yRWFjaCgoZGVsZXRlQnRuKSA9PiB7XG5cdFx0XHRkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9Pntcblx0XHRcdFx0ZGVsZXRlVW5pdChkZWxldGVCdG4pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG4gIH07XG5cbiAgY29uc3QgZG9uZVVuaXQgPSAoYnV0dG9uKSA9PiB7XG5cdFx0Y29uc3QgaWQgPSBkaXNwbGF5Q29udHJvbGxlci5kb25lVW5pdChidXR0b24pO1xuXHRcdGxvZ2ljQ29udHJvbGxlci5kb25lVW5pdChpZCk7XG4gIH07XG5cbiAgY29uc3QgZG9uZUV2ZW50ID0gKHdvcmQpID0+IHtcblx0XHRjb25zdCBkb25lQWxsQnRuID0gZGlzcGxheUNvbnRyb2xsZXIuZ2V0RG9uZUJ1dHRvbkFsbCh3b3JkKTtcblx0XHRkb25lQWxsQnRuLmZvckVhY2goKGRvbmVCdG4pID0+IHtcblx0XHRcdGRvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGRvbmVVbml0KGRvbmVCdG4pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG4gIH07XG5cbiAgY29uc3QgcHJvZ3JhbVJlc2V0RXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzZXRCdG4gPSBkaXNwbGF5Q29udHJvbGxlci5nZXRSZXNldEJ1dHRvbigpO1xuICAgIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbG9naWNDb250cm9sbGVyLnJlc2V0QWxsKCk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRXZlbnRzID0gKHdvcmQpID0+IHtcbiAgICBjb25zdCB7IGZvcm0gfSA9IGRpc3BsYXlDb250cm9sbGVyLmdldEZvcm1MYXlvdXQod29yZCk7XG4gICAgLy8gY29uc3QgeyBmb3JtLCBvcGVuIH0gPSBkaXNwbGF5Q29udHJvbGxlci5nZXRGb3JtTGF5b3V0KHdvcmQpO1xuICAgIGZvcm1TdWJtaXNzaW9uRXZlbnQoZm9ybSwgd29yZCk7XG4gICAgaWYgKHdvcmQgPT09ICd0b2RvJykge1xuICAgICAgZGVsZXRlRXZlbnQod29yZCk7XG4gICAgICBkb25lRXZlbnQod29yZCk7XG4gICAgfVxuICAgIGlmICh3b3JkID09PSAncHJvamVjdCcpIHtcbiAgICAgIHByb2plY3RTd2l0Y2hFdmVudCgpO1xuICAgICAgcHJvZ3JhbVJlc2V0RXZlbnQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgaW5pdCgpO1xuICAgIFsncHJvamVjdCcsICd0b2RvJ10uZm9yRWFjaCh3b3JkID0+IGNyZWF0ZUV2ZW50cyh3b3JkKSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgc3RhcnQgfTtcbn0pKCk7XG5cbmludGVyZmFjZU1haW4uc3RhcnQoKTtcbiIsImltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gJy4vbG9naWNzL2NyZWF0ZV9wcm9qZWN0JztcbmltcG9ydCBjcmVhdGVUb2RvIGZyb20gJy4vbG9naWNzL2NyZWF0ZV90b2RvJztcbmltcG9ydCBwcm92aWRlTG9naWMgZnJvbSAnLi9sb2dpY3MvcHJvdmlkZV9sb2dpYyc7XG5pbXBvcnQgZGVsZXRlTG9naWMgZnJvbSAnLi9sb2dpY3MvZGVsZXRlX2xvZ2ljJztcbmltcG9ydCB1cGRhdGVMb2dpYyBmcm9tICcuL2xvZ2ljcy91cGRhdGVfbG9naWMnO1xuXG5jb25zdCBsb2dpY0NvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0TGlzdCA9IGRhdGEgPT4gY3JlYXRlUHJvamVjdC5hZGRQcm9qZWN0TGlzdChkYXRhKTtcbiAgY29uc3QgYWRkVG9kb0xpc3QgPSBkYXRhID0+IGNyZWF0ZVRvZG8uYWRkVG9kb0xpc3QoZGF0YSk7XG4gIGNvbnN0IHVwZGF0ZVRvZG9MaXN0Rm9yUHJvamVjdCA9IGlkID0+IGNyZWF0ZVRvZG8uc2V0VG9kb0xpc3RGb3JQcm9qZWN0KGlkKTtcblxuICBjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IHByb3ZpZGVMb2dpYy5nZXRDdXJyZW50UHJvamVjdCgpO1xuICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHByb3ZpZGVMb2dpYy5nZXRQcm9qZWN0TGlzdCgpO1xuICBjb25zdCBnZXRUb2RvTGlzdEZvclByb2plY3QgPSAoKSA9PiBwcm92aWRlTG9naWMuZ2V0VG9kb0xpc3RGb3JQcm9qZWN0KCk7XG5cbiAgY29uc3QgZGVsZXRlVW5pdCA9IGlkID0+IGRlbGV0ZUxvZ2ljLmRlbGV0ZVVuaXQoaWQpO1xuICBjb25zdCByZXNldEFsbCA9ICgpID0+IGRlbGV0ZUxvZ2ljLnJlc2V0QWxsKCk7XG5cbiAgY29uc3QgZG9uZVVuaXQgPSBpZCA9PiB1cGRhdGVMb2dpYy5kb25lKGlkKTtcblxuICBjb25zdCBzZXQgPSAoKSA9PiB7XG4gICAgY3JlYXRlUHJvamVjdC5zZXREZWZhdWx0UHJvamVjdCgpO1xuICAgIGNyZWF0ZVRvZG8uc2V0RGVmYXVsdFRvZG8oKTtcbiAgICBjcmVhdGVQcm9qZWN0LnNldEluZm9Gcm9tU3RvcmFnZSgpO1xuICAgIGNyZWF0ZVRvZG8uc2V0SW5mb0Zyb21TdG9yYWdlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXQsXG4gICAgYWRkUHJvamVjdExpc3QsXG4gICAgYWRkVG9kb0xpc3QsXG4gICAgZ2V0UHJvamVjdExpc3QsXG4gICAgZ2V0VG9kb0xpc3RGb3JQcm9qZWN0LFxuICAgIHVwZGF0ZVRvZG9MaXN0Rm9yUHJvamVjdCxcbiAgICBkZWxldGVVbml0LFxuICAgIGRvbmVVbml0LFxuICAgIGdldEN1cnJlbnRQcm9qZWN0LFxuICAgIHJlc2V0QWxsLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naWNDb250cm9sbGVyO1xuIiwiaW1wb3J0IHsgcHJvamVjdCwgc2F2aW5ncyB9IGZyb20gJy4vb2JqZWN0cyc7XG5pbXBvcnQgbG9naWNVdGlscyBmcm9tICcuL2xvZ2ljX3V0aWxzJztcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldERlZmF1bHRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGlmICghd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0JylcbiAgICAgfHwgSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IFtcbiAgICAgICAgeyBwcm9qZWN0TmFtZTogJ2RlZmF1bHQgcHJvamVjdCB3aXRoIGxvbmcgbmFtZScsIGlkOiAncHJvamVjdC0xJyB9LFxuICAgICAgXTtcbiAgICAgIGxvZ2ljVXRpbHMudXBkYXRlSnNvbkluZm9Ub1N0b3JhZ2UoeyBzb3J0OiAncHJvamVjdCcsIGRhdGE6IGRlZmF1bHRQcm9qZWN0IH0pO1xuICAgICAgbG9naWNVdGlscy5hZGRKc29uSW5mb1RvU3RvcmFnZSh7XG4gICAgICAgIHNvcnQ6ICdpZHMnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcHJvamVjdExhc3RJZDogZGVmYXVsdFByb2plY3RbMF0uaWQsXG4gICAgICAgICAgcHJvamVjdEN1cnJlbnRJZDogZGVmYXVsdFByb2plY3RbMF0uaWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdExpc3QgPSAoeyBwcm9qZWN0TmFtZSwgaWQgfSkgPT4ge1xuICAgIGNvbnN0IGNvcHlQcm9qZWN0SWQgPSBpZCB8fCBsb2dpY1V0aWxzLmdldE5ld0lkKCdwcm9qZWN0Jyk7XG4gICAgc2F2aW5ncy5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QoeyBwcm9qZWN0TmFtZSwgaWQ6IGNvcHlQcm9qZWN0SWQgfSkpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHNhdmluZ3MucHJvamVjdExpc3QpKTtcbiAgfTtcblxuICBjb25zdCBzZXRJbmZvRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFsID0gbG9naWNVdGlscy5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKCdwcm9qZWN0Jyk7XG4gICAgaWYgKHZhbCkgc2F2aW5ncy5wcm9qZWN0TGlzdCA9IHZhbDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFByb2plY3RMaXN0LCBzZXRJbmZvRnJvbVN0b3JhZ2UsIHNldERlZmF1bHRQcm9qZWN0LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDtcbiIsImltcG9ydCB7IHRvZG8sIHNhdmluZ3MgfSBmcm9tICcuL29iamVjdHMnO1xuaW1wb3J0IGxvZ2ljVXRpbHMgZnJvbSAnLi9sb2dpY191dGlscyc7XG5pbXBvcnQgZGVmYXVsdFRvZG8gZnJvbSAnLi9zYW1wbGVzJztcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldERlZmF1bHRUb2RvID0gKCkgPT4ge1xuICAgIGlmICghd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvJylcbiAgICAgfHwgSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBsb2dpY1V0aWxzLnVwZGF0ZUpzb25JbmZvVG9TdG9yYWdlKHsgc29ydDogJ3RvZG8nLCBkYXRhOiBkZWZhdWx0VG9kbyB9KTtcbiAgICAgIGNvbnN0IGlkc0RhdGEgPSB7XG4gICAgICAgIHRvZG9MYXN0SWQ6IGRlZmF1bHRUb2RvW2RlZmF1bHRUb2RvLmxlbmd0aCAtIDFdLmlkLFxuICAgICAgICB0b2RvQ3VycmVudElkOiBkZWZhdWx0VG9kb1tkZWZhdWx0VG9kby5sZW5ndGggLSAxXS5pZCxcbiAgICAgIH07XG4gICAgICBsb2dpY1V0aWxzLmFkZEpzb25JbmZvVG9TdG9yYWdlKHsgc29ydDogJ2lkcycsIGRhdGE6IGlkc0RhdGEgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZFRvZG9MaXN0ID0gKGRhdGEpID0+IHtcbiAgICBpZiAoIWRhdGEuaWQpIGRhdGEuaWQgPSBsb2dpY1V0aWxzLmdldE5ld0lkKCd0b2RvJyk7XG4gICAgc2F2aW5ncy50b2RvTGlzdC5wdXNoKHRvZG8oZGF0YSkpO1xuICAgIGxvZ2ljVXRpbHMudXBkYXRlSnNvbkluZm9Ub1N0b3JhZ2UoeyBzb3J0OiAndG9kbycsIGRhdGE6IHNhdmluZ3MudG9kb0xpc3QgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0SW5mb0Zyb21TdG9yYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHZhbCA9IGxvZ2ljVXRpbHMuZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZSgndG9kbycpO1xuICAgIGlmICh2YWwpIHNhdmluZ3MudG9kb0xpc3QgPSB2YWw7XG4gIH07XG5cbiAgY29uc3Qgc2V0VG9kb0xpc3RGb3JQcm9qZWN0ID0gKHByb2plY3RJZCkgPT4ge1xuICAgIHNhdmluZ3MudG9kb0xpc3RGb3JQcm9qZWN0ID0gc2F2aW5ncy50b2RvTGlzdC5maWx0ZXIoZSA9PiBlLnByb2plY3RJZCA9PT0gcHJvamVjdElkKTtcbiAgICBsb2dpY1V0aWxzLmFkZEpzb25JbmZvVG9TdG9yYWdlKHsgc29ydDogJ2lkcycsIGRhdGE6IHsgcHJvamVjdEN1cnJlbnRJZDogcHJvamVjdElkIH0gfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRUb2RvTGlzdCwgc2V0VG9kb0xpc3RGb3JQcm9qZWN0LCBzZXRJbmZvRnJvbVN0b3JhZ2UsIHNldERlZmF1bHRUb2RvLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kbztcbiIsImltcG9ydCBsb2dpY1V0aWxzIGZyb20gJy4vbG9naWNfdXRpbHMnO1xuXG5jb25zdCBkZWxldGVMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZVVuaXQgPSAoaWQpID0+IHtcblx0XHRjb25zdCBzb3J0ID0gaWQuc3BsaXQoJy0nKVswXTtcblx0XHRjb25zdCBkYXRhID0gbG9naWNVdGlscy5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKHNvcnQpO1xuXHRcdGNvbnN0IHVwZGF0ZWQgPSAoZGF0YSA/IGRhdGEuZmlsdGVyKGUgPT4gZS5pZCAhPT0gaWQpIDogW10pO1xuXHRcdGxvZ2ljVXRpbHMudXBkYXRlSnNvbkluZm9Ub1N0b3JhZ2UoeyBzb3J0LCBkYXRhOnVwZGF0ZWQgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRBbGwgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9O1xuXG4gIHJldHVybiB7IGRlbGV0ZVVuaXQsIHJlc2V0QWxsIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVMb2dpYztcblxuIiwiY29uc3QgbG9naWNVdGlscyA9ICgoKSA9PiB7XG4gIGNvbnN0IGdldEpzb25JbmZvRnJvbVN0b3JhZ2UgPSAoc29ydCkgPT4ge1xuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oc29ydCkpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShzb3J0KSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlSnNvbkluZm9Ub1N0b3JhZ2UgPSAoeyBzb3J0LCBkYXRhIH0pID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oc29ydCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEpzb25JbmZvVG9TdG9yYWdlID0gKHsgc29ydCwgZGF0YSB9KSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luYWxEYXRhID0gZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZShzb3J0KTtcbiAgICBjb25zdCB1cGRhdGUgPSBvcmlnaW5hbERhdGEgfHwge307XG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgIHVwZGF0ZVtrXSA9IHY7XG4gICAgfVxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb3J0LCBKU09OLnN0cmluZ2lmeSh1cGRhdGUpKTtcbiAgfTtcblxuICBjb25zdCBnZXROZXdJZCA9IChzb3J0KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGxldCBpZDtcbiAgICBpZiAoZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZSgnaWRzJykgJiYgZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZSgnaWRzJylbYCR7c29ydH1MYXN0SWRgXSkge1xuICAgICAgaWQgPSBnZXRKc29uSW5mb0Zyb21TdG9yYWdlKCdpZHMnKVtgJHtzb3J0fUxhc3RJZGBdO1xuICAgICAgY29uc3QgbmV3TnVtYmVyID0gTnVtYmVyKGlkLnNwbGl0KCctJylbMV0pICsgMTtcbiAgICAgIGlkID0gYCR7c29ydH0tJHtuZXdOdW1iZXJ9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSBgJHtzb3J0fS0xYDtcbiAgICB9XG4gICAgZGF0YVtgJHtzb3J0fUxhc3RJZGBdID0gaWQ7XG4gICAgZGF0YVtgJHtzb3J0fUN1cnJlbnRJZGBdID0gaWQ7XG4gICAgYWRkSnNvbkluZm9Ub1N0b3JhZ2UoeyBzb3J0OiAnaWRzJywgZGF0YSB9KTtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRKc29uSW5mb0Zyb21TdG9yYWdlLFxuICAgIHVwZGF0ZUpzb25JbmZvVG9TdG9yYWdlLFxuICAgIGdldE5ld0lkLFxuICAgIGFkZEpzb25JbmZvVG9TdG9yYWdlLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naWNVdGlscztcbiIsImNvbnN0IHByb2plY3QgPSAoeyBwcm9qZWN0TmFtZSwgaWQgfSkgPT4gKHsgcHJvamVjdE5hbWUsIGlkIH0pO1xuY29uc3QgdG9kbyA9ICh7XG4gIHRpdGxlLCBwcm9qZWN0SWQsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaWQsIGRvbmUgPSBmYWxzZSxcbn0pID0+ICh7XG4gIHRpdGxlLCBwcm9qZWN0SWQsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaWQsIGRvbmUsXG59KTtcblxuY29uc3Qgc2F2aW5ncyA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gW107XG4gIGNvbnN0IHRvZG9MaXN0ID0gW107XG4gIGNvbnN0IHRvZG9MaXN0Rm9yUHJvamVjdCA9IFtdO1xuICByZXR1cm4geyBwcm9qZWN0TGlzdCwgdG9kb0xpc3QsIHRvZG9MaXN0Rm9yUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IHtcbiAgcHJvamVjdCwgdG9kbywgc2F2aW5ncyxcbn07XG4iLCJpbXBvcnQgeyBzYXZpbmdzIH0gZnJvbSAnLi9vYmplY3RzJztcbmltcG9ydCBsb2dpY1V0aWxzIGZyb20gJy4vbG9naWNfdXRpbHMnO1xuXG5jb25zdCBwcm92aWRlTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBpZHMgPSBsb2dpY1V0aWxzLmdldEpzb25JbmZvRnJvbVN0b3JhZ2UoJ2lkcycpO1xuICAgIGlmICghaWRzKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBpZHMucHJvamVjdEN1cnJlbnRJZDtcbiAgfTtcbiAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiBzYXZpbmdzLnByb2plY3RMaXN0O1xuICBjb25zdCBnZXRUb2RvTGlzdEZvclByb2plY3QgPSAoKSA9PiBzYXZpbmdzLnRvZG9MaXN0Rm9yUHJvamVjdDtcblxuICByZXR1cm4geyBnZXRDdXJyZW50UHJvamVjdCwgZ2V0UHJvamVjdExpc3QsIGdldFRvZG9MaXN0Rm9yUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvdmlkZUxvZ2ljO1xuIiwiY29uc3QgZGVmYXVsdFRvZG8gPSBbXG4gIHtcbiAgICB0aXRsZTogJ2ZpcnN0IGxvbmcgbG9uZyBsb25nIHRpdGxlJyxcbiAgICBwcm9qZWN0SWQ6ICdwcm9qZWN0LTEnLFxuICAgIGRhdGU6ICcyMDE5LTEwLTE0JyxcbiAgICBwcmlvcml0eTogJ3ByaW9yaXR5LW5vcm1hbCcsXG4gICAgZGVzY3JpcHRpb246ICdleGFtcGxlIGxvbmcgbG9uZyBkZXNjcmlwdGlvbiBhbmQgbW9yZScsXG4gICAgaWQ6ICd0b2RvLTEnLFxuICAgIGRvbmU6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdzZWNvbmQgdGl0bGUnLFxuICAgIHByb2plY3RJZDogJ3Byb2plY3QtMScsXG4gICAgZGF0ZTogJzIwMTktMTAtMTUnLFxuICAgIHByaW9yaXR5OiAncHJpb3JpdHktdXJnZW50JyxcbiAgICBkZXNjcmlwdGlvbjogJ2V4YW1wbGUgZGVzY3JpcHRpb24nLFxuICAgIGlkOiAndG9kby0yJyxcbiAgICBkb25lOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAndGhpcmQgdGl0bGUnLFxuICAgIHByb2plY3RJZDogJ3Byb2plY3QtMScsXG4gICAgZGF0ZTogJzIwMTktMTAtMTUnLFxuICAgIHByaW9yaXR5OiAncHJpb3JpdHktbm9ybWFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ2V4YW1wbGUgZGVzY3JpcHRpb24nLFxuICAgIGlkOiAndG9kby0zJyxcbiAgICBkb25lOiBmYWxzZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRUb2RvO1xuIiwiaW1wb3J0IGxvZ2ljVXRpbHMgZnJvbSAnLi9sb2dpY191dGlscyc7XG5cbmNvbnN0IHVwZGF0ZUxvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgZG9uZSA9IChpZCkgPT4ge1xuXHRcdGNvbnN0IHNvcnQgPSBpZC5zcGxpdCgnLScpWzBdO1xuXHRcdGNvbnN0IGRhdGEgPSBsb2dpY1V0aWxzLmdldEpzb25JbmZvRnJvbVN0b3JhZ2Uoc29ydCk7XG5cdFx0Y29uc3Qgb2JqID0gZGF0YS5maW5kKGUgPT4gZS5pZCA9PT0gaWQpO1xuXHRcdGlmIChvYmopIG9iai5kb25lID0gIW9iai5kb25lO1xuXHRcdGxvZ2ljVXRpbHMudXBkYXRlSnNvbkluZm9Ub1N0b3JhZ2UoeyBzb3J0LCBkYXRhIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGRvbmUgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUxvZ2ljO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==