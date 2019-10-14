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
    var deleteBtnAll = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getDeleteButtonAll(word);
    deleteBtnAll.forEach(function (deleteBtn) {
      deleteBtn.addEventListener('click', function () {
        return deleteUnit(deleteBtn);
      });
    });
  };

  var doneUnit = function doneUnit(button) {
    var id = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].doneUnit(button);
    _logic_controller__WEBPACK_IMPORTED_MODULE_1__["default"].doneUnit(id);
  };

  var doneEvent = function doneEvent(word) {
    var doneBtnAll = _display_controller__WEBPACK_IMPORTED_MODULE_0__["default"].getDoneButtonAll(word);
    doneBtnAll.forEach(function (doneBtn) {
      doneBtn.addEventListener('click', function () {
        return doneUnit(doneBtn);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvY3JlYXRlX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvY3JlYXRlX3RvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvZGVsZXRlX2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvZm9ybV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXlfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljcy9jcmVhdGVfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWNzL2NyZWF0ZV90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpY3MvZGVsZXRlX2xvZ2ljLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpY3MvbG9naWNfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljcy9vYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpY3MvcHJvdmlkZV9sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWNzL3NhbXBsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljcy91cGRhdGVfbG9naWMuanMiXSwibmFtZXMiOlsiY3JlYXRlUHJvamVjdCIsImFkZEVhY2giLCJwcm9qZWN0TmFtZSIsImlkIiwicHJvamVjdCIsInV0aWxzIiwiY3JlYXRlVGFnIiwidGFnIiwiY2xhc3NlcyIsInRleHRDb250ZW50IiwicHJvamVjdEdyb3VwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJhZGRHcm91cCIsInByb2plY3RBcnJheSIsImZvckVhY2giLCJlIiwiY3JlYXRlVG9kbyIsImRvbmVTdGF0dXNEaXNwbGF5IiwiZG9uZSIsInRhcmdldCIsInBhcmVudCIsInR5cGUiLCJjaGVja2VkIiwiY2xhc3NMaXN0IiwiYWRkIiwidGl0bGUiLCJkYXRlIiwicHJpb3JpdHkiLCJkZXNjcmlwdGlvbiIsInRvZG8iLCJkb25lVGFyZ2V0IiwidGV4dCIsIm5ld0dyb3VwIiwidG9kb0dyb3VwIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZGVsZXRlRGlzcGxheSIsImdldERlbGV0ZUJ1dHRvbkFsbCIsImNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsImRlbGV0ZVVuaXQiLCJidXR0b24iLCJvYmplY3QiLCJwYXJlbnROb2RlIiwiZ2V0UmVzZXRCdXR0b24iLCJmb3JtQ29udHJvbGxlciIsImJ1aWxkRmllbGQiLCJwbGFjZWhvbGRlciIsImRlZmF1bHRWYWx1ZSIsInRleHRhcmVhIiwiaW5wdXRUeXBlIiwibmFtZSIsImluY2x1ZGVTcGFjZSIsImV4Y2hhbmdlU3BhY2VUb0Rhc2giLCJmaWVsZCIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwicHJpb3JpdHlVbml0Iiwid29yZCIsImxhYmVsIiwicHJpb3JpdHlGaWVsZCIsImNyZWF0ZUZvcm0iLCJvcHRpb24iLCJmb3JtIiwiZmllbGRzZXQiLCJnZXREYXRlRnJvbVRvZGF5IiwiZ2V0UmFkaW9JbmZvIiwiZGF0YSIsInJhZGlvcyIsImdldEVsZW1lbnRzQnlOYW1lIiwicmFkaW8iLCJtYWtlQmxhbmtGb3JtIiwic2VsZWN0b3IiLCJ2YWx1ZSIsImdldEZvcm1MYXlvdXQiLCJvcGVuIiwiZ2V0Rm9ybURhdGEiLCJwcm9qZWN0SWQiLCJrZXkiLCJleGNoYW5nZURhc2hUb0NhcGl0YWwiLCJsYXlvdXQiLCJoZWFkZXJTZXQiLCJoZWFkZXIiLCJzZXRQcm9qZWN0IiwicHJvamVjdENvbnRhaW5lciIsInNldFRvZG8iLCJ0b2RvQ29udGFpbmVyIiwic2V0IiwibWFpbkNvbnRhaW5lciIsInVwZGF0ZSIsImdldERvbmVCdXR0b25BbGwiLCJ0b2dnbGUiLCJnZXRQcm9qZWN0TGlzdCIsImNoaWxkTm9kZXMiLCJ1cGRhdGVDdXJyZW50UHJvamVjdCIsIm5ld1RhZyIsInByZXZpb3VzIiwicmVtb3ZlIiwibGFzdEN1cnJlbnRQcm9qZWN0IiwibGVuZ3RoIiwibGFzdENoaWxkIiwidW5kZWZpbmVkIiwib2JqIiwiY3JlYXRlRWxlbWVudCIsInNwbGl0IiwiZWxlbSIsImFkZERhdGUiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJkZCIsIlN0cmluZyIsInBhZFN0YXJ0IiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInJlc2l6ZVRleHRhcmVhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZm9jdXNTZXQiLCJmb3JtR3JvdXAiLCJpIiwiZGlzcGxheSIsImZvY3VzIiwiZXZlbnRTZXQiLCJlbGltaW5hdGVGaXJzdE9mRGFzaCIsIndvcmRzIiwiY2FwaXRhbGl6ZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwiZGlzcGxheUNvbnRyb2xsZXIiLCJhZGRQcm9qZWN0R3JvdXAiLCJhZGRUb2RvR3JvdXAiLCJ0b2RvQXJyYXkiLCJkb25lVW5pdCIsInNldE1haW5EaXNwbGF5IiwiaW50ZXJmYWNlTWFpbiIsInByb2plY3RTZXR0aW5nIiwibG9naWNDb250cm9sbGVyIiwidG9kb1NldHRpbmciLCJnZXRUb2RvTGlzdEZvclByb2plY3QiLCJidG4iLCJ1cGRhdGVUb2RvTGlzdEZvclByb2plY3QiLCJzdWJtaXRGb3JtUHJvamVjdCIsImFkZFByb2plY3RMaXN0Iiwic3VibWl0Rm9ybVRvZG8iLCJnZXRDdXJyZW50UHJvamVjdCIsImFkZFRvZG9MaXN0Iiwic2V0SW5pdGlhbEN1cnJlbnRQcm9qZWN0IiwibGFzdFByb2plY3QiLCJhZnRlclN1Ym1pc3Npb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImluaXQiLCJmb3JtU3VibWlzc2lvbkV2ZW50Iiwic29ydCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInByb2plY3RTd2l0Y2hFdmVudCIsImJ1dHRvbnMiLCJkZWxldGVFdmVudCIsImRlbGV0ZUJ0bkFsbCIsImRlbGV0ZUJ0biIsImRvbmVFdmVudCIsImRvbmVCdG5BbGwiLCJkb25lQnRuIiwicHJvZ3JhbVJlc2V0RXZlbnQiLCJyZXNldEJ0biIsInJlc2V0QWxsIiwiY3JlYXRlRXZlbnRzIiwic3RhcnQiLCJzZXRUb2RvTGlzdEZvclByb2plY3QiLCJwcm92aWRlTG9naWMiLCJkZWxldGVMb2dpYyIsInVwZGF0ZUxvZ2ljIiwic2V0RGVmYXVsdFByb2plY3QiLCJzZXREZWZhdWx0VG9kbyIsInNldEluZm9Gcm9tU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJkZWZhdWx0UHJvamVjdCIsImxvZ2ljVXRpbHMiLCJ1cGRhdGVKc29uSW5mb1RvU3RvcmFnZSIsImFkZEpzb25JbmZvVG9TdG9yYWdlIiwicHJvamVjdExhc3RJZCIsInByb2plY3RDdXJyZW50SWQiLCJjb3B5UHJvamVjdElkIiwiZ2V0TmV3SWQiLCJzYXZpbmdzIiwicHJvamVjdExpc3QiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInZhbCIsImdldEpzb25JbmZvRnJvbVN0b3JhZ2UiLCJkZWZhdWx0VG9kbyIsImlkc0RhdGEiLCJ0b2RvTGFzdElkIiwidG9kb0N1cnJlbnRJZCIsInRvZG9MaXN0IiwidG9kb0xpc3RGb3JQcm9qZWN0IiwiZmlsdGVyIiwidXBkYXRlZCIsImNsZWFyIiwib3JpZ2luYWxEYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImsiLCJ2IiwibmV3TnVtYmVyIiwiTnVtYmVyIiwiaWRz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QUFGLEdBQVA7QUFDRCxDQVZtQixFQUFwQjs7QUFZZW1LLDBFQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCgpID0+IHtcbiAgY29uc3QgYWRkRWFjaCA9ICh7IHByb2plY3ROYW1lLCBpZCB9KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdoNCcsIGlkLCBjbGFzc2VzOiAncHJvamVjdC1jb250ZW50IG0tMCcsXG4gICAgfSk7XG5cbiAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgY29uc3QgcHJvamVjdEdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGVudC1ncm91cCcpO1xuICAgIHByb2plY3RHcm91cC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBhZGRHcm91cCA9IChwcm9qZWN0QXJyYXkpID0+IHtcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChlID0+IGFkZEVhY2goZSkpO1xuICB9O1xuICByZXR1cm4geyBhZGRHcm91cCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDtcbiIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRvbmVTdGF0dXNEaXNwbGF5ID0gKHsgZG9uZSwgdGFyZ2V0LCBwYXJlbnQgfSkgPT4ge1xuICAgIHRhcmdldC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBpZiAoZG9uZSkge1xuICAgICAgdGFyZ2V0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkRWFjaCA9ICh7XG4gICAgdGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaWQsIGRvbmUsXG4gIH0pID0+IHtcbiAgICBjb25zdCB0b2RvID0gdXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2RpdicsIGlkLCBjbGFzc2VzOiBgdG9kby1jb250ZW50IG5vLWd1dHRlciAke3ByaW9yaXR5fWAsXG4gICAgfSk7XG4gICAgY29uc3QgZG9uZVRhcmdldCA9IHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdpbnB1dCcsIGNsYXNzZXM6ICdkb25lLWJ0biB2ZXJ0aWNhbC1hbGlnbi1ib3R0b20nLFxuICAgIH0pO1xuICAgIGRvbmVTdGF0dXNEaXNwbGF5KHsgZG9uZSwgdGFyZ2V0OiBkb25lVGFyZ2V0LCBwYXJlbnQ6IHRvZG8gfSk7XG4gICAgdG9kby5hcHBlbmRDaGlsZChkb25lVGFyZ2V0KTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdoNCcsXG4gICAgICBjbGFzc2VzOiAndGl0bGUgY29sLW1kLTMgdGV4dC1ub3dyYXAgbS0wIHZlcnRpY2FsLWFsaWduLWJvdHRvbScsXG4gICAgICB0ZXh0OiB0aXRsZSxcbiAgICB9KSk7XG4gICAgdG9kby5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6ICdkYXRlIGNvbC1tZC0zIHZlcnRpY2FsLWFsaWduLWJvdHRvbScsXG4gICAgICB0ZXh0OiBkYXRlLFxuICAgIH0pKTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogJ2Rlc2NyaXB0aW9uIGNvbC1tZC0zIHRleHQtbm93cmFwIHZlcnRpY2FsLWFsaWduLWJvdHRvbScsXG4gICAgICB0ZXh0OiBkZXNjcmlwdGlvbixcbiAgICB9KSk7XG4gICAgdG9kby5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6ICdlZGl0IGNvbC1tZC0xIHZlcnRpY2FsLWFsaWduLWJvdHRvbScsXG4gICAgICB0ZXh0OiAnZWRpdCcsXG4gICAgfSkpO1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiAnZGVsZXRlIGNvbC1tZC0xIHZlcnRpY2FsLWFsaWduLWJvdHRvbScsXG4gICAgICB0ZXh0OiAnZGVsZXRlJyxcbiAgICB9KSk7XG4gICAgcmV0dXJuIHRvZG87XG4gIH07XG5cbiAgY29uc3QgYWRkR3JvdXAgPSAobmV3R3JvdXApID0+IHtcbiAgICBjb25zdCB0b2RvR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250ZW50LWdyb3VwJyk7XG4gICAgd2hpbGUgKHRvZG9Hcm91cC5maXJzdENoaWxkKSB7XG4gICAgICB0b2RvR3JvdXAucmVtb3ZlQ2hpbGQodG9kb0dyb3VwLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBuZXdHcm91cC5mb3JFYWNoKGUgPT4gdG9kb0dyb3VwLmFwcGVuZENoaWxkKGFkZEVhY2goZSkpKTtcbiAgfTtcblxuICByZXR1cm4geyBhZGRHcm91cCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kbztcbiIsImNvbnN0IGRlbGV0ZURpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBnZXREZWxldGVCdXR0b25BbGwgPSAoaWQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVW5pdCA9IChidXR0b24pID0+IHtcbiAgICBjb25zdCBvYmplY3QgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICBvYmplY3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvYmplY3QpO1xuICAgIHJldHVybiBvYmplY3QuaWQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmVzZXRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5oLXRpdGxlJyk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0RGVsZXRlQnV0dG9uQWxsLCBkZWxldGVVbml0LCBnZXRSZXNldEJ1dHRvbiB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlRGlzcGxheTtcbiIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZm9ybUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBidWlsZEZpZWxkID0gKHtcbiAgICBwbGFjZWhvbGRlciwgdHlwZSwgZGVmYXVsdFZhbHVlLCB0ZXh0YXJlYSxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IGlucHV0VHlwZSA9IHRleHRhcmVhIHx8ICdpbnB1dCc7XG4gICAgY29uc3QgbmFtZSA9IHV0aWxzLmluY2x1ZGVTcGFjZShwbGFjZWhvbGRlcikgPyB1dGlscy5leGNoYW5nZVNwYWNlVG9EYXNoKHBsYWNlaG9sZGVyKVxuICAgICAgOiBwbGFjZWhvbGRlcjtcbiAgICBjb25zdCBmaWVsZCA9IHV0aWxzLmNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6IGBmaWVsZCAke25hbWV9YCB9KTtcbiAgICBjb25zdCBpbnB1dCA9IHV0aWxzLmNyZWF0ZVRhZyh7IHRhZzogaW5wdXRUeXBlLCBpZDogbmFtZSwgY2xhc3NlczogbmFtZSB9KTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuICAgIGlmICh0eXBlKSBpbnB1dC50eXBlID0gdHlwZTtcbiAgICBpZiAoZGVmYXVsdFZhbHVlKSBpbnB1dC5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBmaWVsZDtcbiAgfTtcblxuICBjb25zdCBwcmlvcml0eVVuaXQgPSAod29yZCwgZmllbGQsIGNoZWNrZWQpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdpbnB1dCcsIGlkOiBgcHJpb3JpdHktJHt3b3JkfWAsIGNsYXNzZXM6ICdwcmlvcml0eScsXG4gICAgfSk7XG4gICAgaW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgaW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgaWYgKGNoZWNrZWQpIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgIGNvbnN0IGxhYmVsID0gdXRpbHMuY3JlYXRlVGFnKHsgdGFnOiAnbGFiZWwnLCB0ZXh0OiB3b3JkIH0pO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHByaW9yaXR5LSR7d29yZH1gKTtcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICB9O1xuXG4gIGNvbnN0IHByaW9yaXR5RmllbGQgPSAoKSA9PiB7XG4gICAgY29uc3QgZmllbGQgPSB1dGlscy5jcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAnZmllbGQgcHJpb3JpdHknIH0pO1xuICAgIHByaW9yaXR5VW5pdCgnbm9ybWFsJywgZmllbGQsICdjaGVja2VkJyk7XG4gICAgcHJpb3JpdHlVbml0KCd1cmdlbnQnLCBmaWVsZCk7XG4gICAgcmV0dXJuIGZpZWxkO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUZvcm0gPSAoeyBvcHRpb24gfSkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZm9ybScsIGNsYXNzZXM6IHV0aWxzLmV4Y2hhbmdlU3BhY2VUb0Rhc2goYCR7b3B0aW9ufSBmb3JtYCksXG4gICAgfSk7XG4gICAgY29uc3QgZmllbGRzZXQgPSB1dGlscy5jcmVhdGVUYWcoeyB0YWc6ICdmaWVsZHNldCcgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG4gICAgaWYgKG9wdGlvbiA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgcGxhY2Vob2xkZXI6ICdwcm9qZWN0IG5hbWUnIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYnVpbGRGaWVsZCh7IHBsYWNlaG9sZGVyOiAndGl0bGUnIH0pKTtcbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJ1aWxkRmllbGQoe1xuICAgICAgICBwbGFjZWhvbGRlcjogJ2RhdGUnLCB0eXBlOiAnZGF0ZScsIGRlZmF1bHRWYWx1ZTogdXRpbHMuZ2V0RGF0ZUZyb21Ub2RheSgwKSxcbiAgICAgIH0pKTtcbiAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHByaW9yaXR5RmllbGQoKSk7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgcGxhY2Vob2xkZXI6ICdkZXNjcmlwdGlvbicsIHRleHRhcmVhOiAndGV4dGFyZWEnIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm07XG4gIH07XG5cbiAgY29uc3QgZ2V0UmFkaW9JbmZvID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCByYWRpb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncHJpb3JpdHknKTtcbiAgICByYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XG4gICAgICAgIGRhdGFbcmFkaW8ubmFtZV0gPSByYWRpby5pZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBtYWtlQmxhbmtGb3JtID0gKGZvcm0pID0+IHtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWVsZCcpLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykgfHwgZmllbGQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICAgIHNlbGVjdG9yLnZhbHVlID0gJyc7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Rm9ybUxheW91dCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGNvbnN0IG9wZW4gPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWZvcm0nKTtcbiAgICBjb25zdCBmb3JtID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIHJldHVybiB7IGZvcm0sIG9wZW4gfTtcbiAgfTtcblxuICBjb25zdCBnZXRGb3JtRGF0YSA9IChmb3JtLCBwcm9qZWN0SWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgaWYgKHByb2plY3RJZCkgZGF0YS5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuZmllbGQnKS5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBmaWVsZC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpIHx8IGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgICBpZiAoc2VsZWN0b3IudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICBnZXRSYWRpb0luZm8oZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBrZXkgPSB1dGlscy5leGNoYW5nZURhc2hUb0NhcGl0YWwoc2VsZWN0b3IubmFtZSk7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHNlbGVjdG9yO1xuICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUZvcm0sIGdldEZvcm1EYXRhLCBtYWtlQmxhbmtGb3JtLCBnZXRGb3JtTGF5b3V0LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgZm9ybUNvbnRyb2xsZXIgZnJvbSAnLi9mb3JtX2NvbnRyb2xsZXInO1xuXG5jb25zdCBsYXlvdXQgPSAoKCkgPT4ge1xuICBjb25zdCBoZWFkZXJTZXQgPSAoaGVhZGVyLCB3b3JkKSA9PiB7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdoMScsIGNsYXNzZXM6ICdoLXRpdGxlJywgdGV4dDogd29yZCxcbiAgICB9KSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdoMScsIGNsYXNzZXM6ICdjcmVhdGUtZm9ybScsIHRleHQ6ICcrJyxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0UHJvamVjdCA9IChwcm9qZWN0Q29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEdyb3VwID0gdXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2RpdicsIGNsYXNzZXM6ICdwcm9qZWN0LWNvbnRlbnQtZ3JvdXAnLFxuICAgIH0pO1xuICAgIGhlYWRlclNldChwcm9qZWN0Q29udGFpbmVyLCAnUHJvamVjdCcpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEdyb3VwKTtcbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBzZXRUb2RvID0gKHRvZG9Db250YWluZXIpID0+IHtcbiAgICBjb25zdCB0b2RvR3JvdXAgPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZGl2JywgY2xhc3NlczogJ3RvZG8tY29udGVudC1ncm91cCcsXG4gICAgfSk7XG4gICAgaGVhZGVyU2V0KHRvZG9Db250YWluZXIsICdUb2RvJyk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvR3JvdXApO1xuICAgIHJldHVybiB0b2RvQ29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IHNldCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gdXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ3NlY3Rpb24nLCBpZDogJ3Byb2plY3QnLCBjbGFzc2VzOiAnY29sLW1kLTQgcHJpbWFyeS1iZycsXG4gICAgfSk7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdzZWN0aW9uJywgaWQ6ICd0b2RvJywgY2xhc3NlczogJ2NvbC1tZC04IHNlY29uZGFyeS1iZycsXG4gICAgfSk7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnktYmcnKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldFByb2plY3QocHJvamVjdENvbnRhaW5lcikpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2V0VG9kbyh0b2RvQ29udGFpbmVyKSk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udHJvbGxlci5jcmVhdGVGb3JtKHsgb3B0aW9uOiAncHJvamVjdCcgfSkpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRyb2xsZXIuY3JlYXRlRm9ybSh7IG9wdGlvbjogJ3RvZG8nIH0pKTtcbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbiAgfTtcblxuICByZXR1cm4geyBzZXQgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxheW91dDtcbiIsImNvbnN0IHVwZGF0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGdldERvbmVCdXR0b25BbGwgPSAoaWQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZG9uZS1idG4nKTtcbiAgfTtcblxuICBjb25zdCBkb25lID0gKGJ1dHRvbikgPT4ge1xuICAgIGNvbnN0IG9iamVjdCA9IGJ1dHRvbi5wYXJlbnROb2RlO1xuICAgIG9iamVjdC5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJyk7XG4gICAgcmV0dXJuIG9iamVjdC5pZDtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRlbnQtZ3JvdXAnKS5jaGlsZE5vZGVzO1xuXG4gIGNvbnN0IHVwZGF0ZUN1cnJlbnRQcm9qZWN0ID0gKG5ld1RhZykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRlbnQtZ3JvdXAnKTtcbiAgICBjb25zdCBwcmV2aW91cyA9IHByb2plY3RHcm91cC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wcm9qZWN0Jyk7XG4gICAgaWYgKHByZXZpb3VzKSBwcmV2aW91cy5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LXByb2plY3QnKTtcbiAgICBuZXdUYWcuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wcm9qZWN0Jyk7XG4gICAgcmV0dXJuIG5ld1RhZy5pZDtcbiAgfTtcblxuICBjb25zdCBsYXN0Q3VycmVudFByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gICAgaWYgKHByb2plY3RJZCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RJZH1gKTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRlbnQtZ3JvdXAnKS5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50LWdyb3VwJykubGFzdENoaWxkO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0RG9uZUJ1dHRvbkFsbCxcbiAgICBkb25lLFxuICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0LFxuICAgIGdldFByb2plY3RMaXN0LFxuICAgIGxhc3RDdXJyZW50UHJvamVjdCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZTtcbiIsImNvbnN0IHV0aWxzID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlVGFnID0gKHtcbiAgICB0YWcsIGlkLCBjbGFzc2VzLCB0ZXh0LFxuICB9KSA9PiB7XG4gICAgY29uc3Qgb2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChpZCkgb2JqLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgaWYgKGNsYXNzZXMpIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGVsZW0gPT4gb2JqLmNsYXNzTGlzdC5hZGQoZWxlbSkpO1xuICAgIGlmICh0ZXh0KSBvYmoudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGF0ZUZyb21Ub2RheSA9IChhZGREYXRlKSA9PiB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFkZERhdGUpO1xuICAgIGNvbnN0IGRkID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IG1tID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vIEphbnVhcnkgaXMgMCFcbiAgICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGRhdGUgPSBgJHt5eXl5fS0ke21tfS0ke2RkfWA7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH07XG5cbiAgY29uc3QgcmVzaXplVGV4dGFyZWEgPSAoKSA9PiB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gYCR7MjAgKyB0ZXh0YXJlYS5zY3JvbGxIZWlnaHR9cHhgO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGZvY3VzU2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Hcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1Hcm91cC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGZvcm1Hcm91cFtpXS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgICAgZm9ybUdyb3VwW2ldLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGV2ZW50U2V0ID0gKCkgPT4ge1xuICAgIHJlc2l6ZVRleHRhcmVhKCk7XG4gICAgZm9jdXNTZXQoKTtcbiAgfTtcblxuICBjb25zdCBlbGltaW5hdGVGaXJzdE9mRGFzaCA9IHdvcmRzID0+IHdvcmRzLnNwbGl0KCctJylbMV07XG5cbiAgY29uc3QgY2FwaXRhbGl6ZSA9IHdvcmQgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSk7XG5cbiAgY29uc3QgZXhjaGFuZ2VEYXNoVG9DYXBpdGFsID0gKHdvcmQpID0+IHtcbiAgICBjb25zdCB3b3JkcyA9IHdvcmQuc3BsaXQoJy0nKTtcbiAgICBpZiAod29yZHMubGVuZ3RoID4gMSkge1xuICAgICAgd29yZHNbMV0gPSBjYXBpdGFsaXplKHdvcmRzWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmRzLmpvaW4oJycpO1xuICB9O1xuXG4gIGNvbnN0IGV4Y2hhbmdlU3BhY2VUb0Rhc2ggPSB3b3JkID0+IHdvcmQuc3BsaXQoJyAnKS5qb2luKCctJyk7XG5cbiAgY29uc3QgaW5jbHVkZVNwYWNlID0gd29yZCA9PiB3b3JkLnNwbGl0KCcgJykubGVuZ3RoID4gMTtcblxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlVGFnLFxuICAgIGdldERhdGVGcm9tVG9kYXksXG4gICAgZXZlbnRTZXQsXG4gICAgZWxpbWluYXRlRmlyc3RPZkRhc2gsXG4gICAgZXhjaGFuZ2VEYXNoVG9DYXBpdGFsLFxuICAgIGV4Y2hhbmdlU3BhY2VUb0Rhc2gsXG4gICAgaW5jbHVkZVNwYWNlLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG4iLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL2Rpc3BsYXkvY3JlYXRlX3Byb2plY3QnO1xuaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSAnLi9kaXNwbGF5L2NyZWF0ZV90b2RvJztcbmltcG9ydCBmb3JtQ29udHJvbGxlciBmcm9tICcuL2Rpc3BsYXkvZm9ybV9jb250cm9sbGVyJztcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi9kaXNwbGF5L2xheW91dCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi9kaXNwbGF5L3V0aWxzJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi9kaXNwbGF5L3VwZGF0ZSc7XG5pbXBvcnQgZGVsZXRlRGlzcGxheSBmcm9tICcuL2Rpc3BsYXkvZGVsZXRlX2Rpc3BsYXknO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RHcm91cCA9IHByb2plY3RBcnJheSA9PiBjcmVhdGVQcm9qZWN0LmFkZEdyb3VwKHByb2plY3RBcnJheSk7XG4gIGNvbnN0IGFkZFRvZG9Hcm91cCA9IHRvZG9BcnJheSA9PiBjcmVhdGVUb2RvLmFkZEdyb3VwKHRvZG9BcnJheSk7XG5cbiAgY29uc3QgZ2V0Rm9ybUxheW91dCA9IGlkID0+IGZvcm1Db250cm9sbGVyLmdldEZvcm1MYXlvdXQoaWQpO1xuICBjb25zdCBnZXRGb3JtRGF0YSA9IChmb3JtLCBwcm9qZWN0SWQpID0+IGZvcm1Db250cm9sbGVyLmdldEZvcm1EYXRhKGZvcm0sIHByb2plY3RJZCk7XG4gIGNvbnN0IG1ha2VCbGFua0Zvcm0gPSBmb3JtID0+IGZvcm1Db250cm9sbGVyLm1ha2VCbGFua0Zvcm0oZm9ybSk7XG5cbiAgY29uc3QgZ2V0RGVsZXRlQnV0dG9uQWxsID0gaWQgPT4gZGVsZXRlRGlzcGxheS5nZXREZWxldGVCdXR0b25BbGwoaWQpO1xuICBjb25zdCBkZWxldGVVbml0ID0gYnV0dG9uID0+IGRlbGV0ZURpc3BsYXkuZGVsZXRlVW5pdChidXR0b24pO1xuICBjb25zdCBnZXRSZXNldEJ1dHRvbiA9ICgpID0+IGRlbGV0ZURpc3BsYXkuZ2V0UmVzZXRCdXR0b24oKTtcblxuICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHVwZGF0ZS5nZXRQcm9qZWN0TGlzdCgpO1xuICBjb25zdCB1cGRhdGVDdXJyZW50UHJvamVjdCA9IG5ld1RhZyA9PiB1cGRhdGUudXBkYXRlQ3VycmVudFByb2plY3QobmV3VGFnKTtcbiAgY29uc3QgbGFzdEN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdElkID0+IHVwZGF0ZS5sYXN0Q3VycmVudFByb2plY3QocHJvamVjdElkKTtcblxuICBjb25zdCBnZXREb25lQnV0dG9uQWxsID0gaWQgPT4gdXBkYXRlLmdldERvbmVCdXR0b25BbGwoaWQpO1xuICBjb25zdCBkb25lVW5pdCA9IGJ1dHRvbiA9PiB1cGRhdGUuZG9uZShidXR0b24pO1xuXG5cbiAgY29uc3Qgc2V0TWFpbkRpc3BsYXkgPSAoKSA9PiB7XG4gICAgbGF5b3V0LnNldCgpO1xuICAgIHV0aWxzLmV2ZW50U2V0KCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRNYWluRGlzcGxheSxcbiAgICBhZGRUb2RvR3JvdXAsXG4gICAgYWRkUHJvamVjdEdyb3VwLFxuICAgIGdldEZvcm1MYXlvdXQsXG4gICAgZ2V0Rm9ybURhdGEsXG4gICAgbWFrZUJsYW5rRm9ybSxcbiAgICBnZXREZWxldGVCdXR0b25BbGwsXG4gICAgZGVsZXRlVW5pdCxcbiAgICBnZXRSZXNldEJ1dHRvbixcbiAgICBnZXRQcm9qZWN0TGlzdCxcbiAgICB1cGRhdGVDdXJyZW50UHJvamVjdCxcbiAgICBsYXN0Q3VycmVudFByb2plY3QsXG4gICAgZ2V0RG9uZUJ1dHRvbkFsbCxcbiAgICBkb25lVW5pdCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyO1xuIiwiaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gJy4vZGlzcGxheV9jb250cm9sbGVyJztcbmltcG9ydCBsb2dpY0NvbnRyb2xsZXIgZnJvbSAnLi9sb2dpY19jb250cm9sbGVyJztcblxuY29uc3QgaW50ZXJmYWNlTWFpbiA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RTZXR0aW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IGxvZ2ljQ29udHJvbGxlci5nZXRQcm9qZWN0TGlzdCgpO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmFkZFByb2plY3RHcm91cChwcm9qZWN0QXJyYXkpO1xuICB9O1xuXG4gIGNvbnN0IHRvZG9TZXR0aW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9BcnJheSA9IGxvZ2ljQ29udHJvbGxlci5nZXRUb2RvTGlzdEZvclByb2plY3QoKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5hZGRUb2RvR3JvdXAodG9kb0FycmF5KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVDdXJyZW50UHJvamVjdCA9IChidG4pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBkaXNwbGF5Q29udHJvbGxlci51cGRhdGVDdXJyZW50UHJvamVjdChidG4pO1xuICAgIGxvZ2ljQ29udHJvbGxlci51cGRhdGVUb2RvTGlzdEZvclByb2plY3QocHJvamVjdElkKTtcbiAgICB0b2RvU2V0dGluZygpO1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEZvcm1Qcm9qZWN0ID0gKGZvcm0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gZGlzcGxheUNvbnRyb2xsZXIuZ2V0Rm9ybURhdGEoZm9ybSk7XG4gICAgbG9naWNDb250cm9sbGVyLmFkZFByb2plY3RMaXN0KGRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEZvcm1Ub2RvID0gKGZvcm0pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBsb2dpY0NvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCBkYXRhID0gZGlzcGxheUNvbnRyb2xsZXIuZ2V0Rm9ybURhdGEoZm9ybSwgcHJvamVjdElkKTtcbiAgICBsb2dpY0NvbnRyb2xsZXIuYWRkVG9kb0xpc3QoZGF0YSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0SW5pdGlhbEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGxvZ2ljQ29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGlmIChwcm9qZWN0SWQpIHtcbiAgICAgIGNvbnN0IGxhc3RQcm9qZWN0ID0gZGlzcGxheUNvbnRyb2xsZXIubGFzdEN1cnJlbnRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICBpZiAobGFzdFByb2plY3QpIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KGxhc3RQcm9qZWN0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWZ0ZXJTdWJtaXNzaW9uID0gKGZvcm0pID0+IHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5tYWtlQmxhbmtGb3JtKGZvcm0pO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGxvZ2ljQ29udHJvbGxlci5zZXQoKTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5zZXRNYWluRGlzcGxheSgpO1xuICAgIHByb2plY3RTZXR0aW5nKCk7XG4gICAgc2V0SW5pdGlhbEN1cnJlbnRQcm9qZWN0KCk7XG4gIH07XG5cbiAgY29uc3QgZm9ybVN1Ym1pc3Npb25FdmVudCA9IChmb3JtLCBzb3J0KSA9PiB7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChzb3J0ID09PSAncHJvamVjdCcpIHN1Ym1pdEZvcm1Qcm9qZWN0KGZvcm0pO1xuICAgICAgICBpZiAoc29ydCA9PT0gJ3RvZG8nKSBzdWJtaXRGb3JtVG9kbyhmb3JtKTtcbiAgICAgICAgYWZ0ZXJTdWJtaXNzaW9uKGZvcm0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RTd2l0Y2hFdmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZGlzcGxheUNvbnRyb2xsZXIuZ2V0UHJvamVjdExpc3QoKTtcbiAgICBpZiAoYnV0dG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdXBkYXRlQ3VycmVudFByb2plY3QoYnV0dG9uKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVVuaXQgPSAoYnV0dG9uKSA9PiB7XG4gICAgY29uc3QgaWQgPSBkaXNwbGF5Q29udHJvbGxlci5kZWxldGVVbml0KGJ1dHRvbik7XG4gICAgbG9naWNDb250cm9sbGVyLmRlbGV0ZVVuaXQoaWQpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUV2ZW50ID0gKHdvcmQpID0+IHtcbiAgICBjb25zdCBkZWxldGVCdG5BbGwgPSBkaXNwbGF5Q29udHJvbGxlci5nZXREZWxldGVCdXR0b25BbGwod29yZCk7XG4gICAgZGVsZXRlQnRuQWxsLmZvckVhY2goKGRlbGV0ZUJ0bikgPT4ge1xuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGVsZXRlVW5pdChkZWxldGVCdG4pKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkb25lVW5pdCA9IChidXR0b24pID0+IHtcbiAgICBjb25zdCBpZCA9IGRpc3BsYXlDb250cm9sbGVyLmRvbmVVbml0KGJ1dHRvbik7XG4gICAgbG9naWNDb250cm9sbGVyLmRvbmVVbml0KGlkKTtcbiAgfTtcblxuICBjb25zdCBkb25lRXZlbnQgPSAod29yZCkgPT4ge1xuICAgIGNvbnN0IGRvbmVCdG5BbGwgPSBkaXNwbGF5Q29udHJvbGxlci5nZXREb25lQnV0dG9uQWxsKHdvcmQpO1xuICAgIGRvbmVCdG5BbGwuZm9yRWFjaCgoZG9uZUJ0bikgPT4ge1xuICAgICAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvbmVVbml0KGRvbmVCdG4pKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwcm9ncmFtUmVzZXRFdmVudCA9ICgpID0+IHtcbiAgICBjb25zdCByZXNldEJ0biA9IGRpc3BsYXlDb250cm9sbGVyLmdldFJlc2V0QnV0dG9uKCk7XG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsb2dpY0NvbnRyb2xsZXIucmVzZXRBbGwoKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVFdmVudHMgPSAod29yZCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybSB9ID0gZGlzcGxheUNvbnRyb2xsZXIuZ2V0Rm9ybUxheW91dCh3b3JkKTtcbiAgICAvLyBjb25zdCB7IGZvcm0sIG9wZW4gfSA9IGRpc3BsYXlDb250cm9sbGVyLmdldEZvcm1MYXlvdXQod29yZCk7XG4gICAgZm9ybVN1Ym1pc3Npb25FdmVudChmb3JtLCB3b3JkKTtcbiAgICBpZiAod29yZCA9PT0gJ3RvZG8nKSB7XG4gICAgICBkZWxldGVFdmVudCh3b3JkKTtcbiAgICAgIGRvbmVFdmVudCh3b3JkKTtcbiAgICB9XG4gICAgaWYgKHdvcmQgPT09ICdwcm9qZWN0Jykge1xuICAgICAgcHJvamVjdFN3aXRjaEV2ZW50KCk7XG4gICAgICBwcm9ncmFtUmVzZXRFdmVudCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICBpbml0KCk7XG4gICAgWydwcm9qZWN0JywgJ3RvZG8nXS5mb3JFYWNoKHdvcmQgPT4gY3JlYXRlRXZlbnRzKHdvcmQpKTtcbiAgfTtcblxuICByZXR1cm4geyBzdGFydCB9O1xufSkoKTtcblxuaW50ZXJmYWNlTWFpbi5zdGFydCgpO1xuIiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9sb2dpY3MvY3JlYXRlX3Byb2plY3QnO1xuaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSAnLi9sb2dpY3MvY3JlYXRlX3RvZG8nO1xuaW1wb3J0IHByb3ZpZGVMb2dpYyBmcm9tICcuL2xvZ2ljcy9wcm92aWRlX2xvZ2ljJztcbmltcG9ydCBkZWxldGVMb2dpYyBmcm9tICcuL2xvZ2ljcy9kZWxldGVfbG9naWMnO1xuaW1wb3J0IHVwZGF0ZUxvZ2ljIGZyb20gJy4vbG9naWNzL3VwZGF0ZV9sb2dpYyc7XG5cbmNvbnN0IGxvZ2ljQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RMaXN0ID0gZGF0YSA9PiBjcmVhdGVQcm9qZWN0LmFkZFByb2plY3RMaXN0KGRhdGEpO1xuICBjb25zdCBhZGRUb2RvTGlzdCA9IGRhdGEgPT4gY3JlYXRlVG9kby5hZGRUb2RvTGlzdChkYXRhKTtcbiAgY29uc3QgdXBkYXRlVG9kb0xpc3RGb3JQcm9qZWN0ID0gaWQgPT4gY3JlYXRlVG9kby5zZXRUb2RvTGlzdEZvclByb2plY3QoaWQpO1xuXG4gIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4gcHJvdmlkZUxvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4gcHJvdmlkZUxvZ2ljLmdldFByb2plY3RMaXN0KCk7XG4gIGNvbnN0IGdldFRvZG9MaXN0Rm9yUHJvamVjdCA9ICgpID0+IHByb3ZpZGVMb2dpYy5nZXRUb2RvTGlzdEZvclByb2plY3QoKTtcblxuICBjb25zdCBkZWxldGVVbml0ID0gaWQgPT4gZGVsZXRlTG9naWMuZGVsZXRlVW5pdChpZCk7XG4gIGNvbnN0IHJlc2V0QWxsID0gKCkgPT4gZGVsZXRlTG9naWMucmVzZXRBbGwoKTtcblxuICBjb25zdCBkb25lVW5pdCA9IGlkID0+IHVwZGF0ZUxvZ2ljLmRvbmUoaWQpO1xuXG4gIGNvbnN0IHNldCA9ICgpID0+IHtcbiAgICBjcmVhdGVQcm9qZWN0LnNldERlZmF1bHRQcm9qZWN0KCk7XG4gICAgY3JlYXRlVG9kby5zZXREZWZhdWx0VG9kbygpO1xuICAgIGNyZWF0ZVByb2plY3Quc2V0SW5mb0Zyb21TdG9yYWdlKCk7XG4gICAgY3JlYXRlVG9kby5zZXRJbmZvRnJvbVN0b3JhZ2UoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldCxcbiAgICBhZGRQcm9qZWN0TGlzdCxcbiAgICBhZGRUb2RvTGlzdCxcbiAgICBnZXRQcm9qZWN0TGlzdCxcbiAgICBnZXRUb2RvTGlzdEZvclByb2plY3QsXG4gICAgdXBkYXRlVG9kb0xpc3RGb3JQcm9qZWN0LFxuICAgIGRlbGV0ZVVuaXQsXG4gICAgZG9uZVVuaXQsXG4gICAgZ2V0Q3VycmVudFByb2plY3QsXG4gICAgcmVzZXRBbGwsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2dpY0NvbnRyb2xsZXI7XG4iLCJpbXBvcnQgeyBwcm9qZWN0LCBzYXZpbmdzIH0gZnJvbSAnLi9vYmplY3RzJztcbmltcG9ydCBsb2dpY1V0aWxzIGZyb20gJy4vbG9naWNfdXRpbHMnO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0RGVmYXVsdFByb2plY3QgPSAoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKVxuICAgICB8fCBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gW1xuICAgICAgICB7IHByb2plY3ROYW1lOiAnZGVmYXVsdCBwcm9qZWN0IHdpdGggbG9uZyBuYW1lJywgaWQ6ICdwcm9qZWN0LTEnIH0sXG4gICAgICBdO1xuICAgICAgbG9naWNVdGlscy51cGRhdGVKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQ6ICdwcm9qZWN0JywgZGF0YTogZGVmYXVsdFByb2plY3QgfSk7XG4gICAgICBsb2dpY1V0aWxzLmFkZEpzb25JbmZvVG9TdG9yYWdlKHtcbiAgICAgICAgc29ydDogJ2lkcycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwcm9qZWN0TGFzdElkOiBkZWZhdWx0UHJvamVjdFswXS5pZCxcbiAgICAgICAgICBwcm9qZWN0Q3VycmVudElkOiBkZWZhdWx0UHJvamVjdFswXS5pZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0TGlzdCA9ICh7IHByb2plY3ROYW1lLCBpZCB9KSA9PiB7XG4gICAgY29uc3QgY29weVByb2plY3RJZCA9IGlkIHx8IGxvZ2ljVXRpbHMuZ2V0TmV3SWQoJ3Byb2plY3QnKTtcbiAgICBzYXZpbmdzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCh7IHByb2plY3ROYW1lLCBpZDogY29weVByb2plY3RJZCB9KSk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoc2F2aW5ncy5wcm9qZWN0TGlzdCkpO1xuICB9O1xuXG4gIGNvbnN0IHNldEluZm9Gcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB2YWwgPSBsb2dpY1V0aWxzLmdldEpzb25JbmZvRnJvbVN0b3JhZ2UoJ3Byb2plY3QnKTtcbiAgICBpZiAodmFsKSBzYXZpbmdzLnByb2plY3RMaXN0ID0gdmFsO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkUHJvamVjdExpc3QsIHNldEluZm9Gcm9tU3RvcmFnZSwgc2V0RGVmYXVsdFByb2plY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0O1xuIiwiaW1wb3J0IHsgdG9kbywgc2F2aW5ncyB9IGZyb20gJy4vb2JqZWN0cyc7XG5pbXBvcnQgbG9naWNVdGlscyBmcm9tICcuL2xvZ2ljX3V0aWxzJztcbmltcG9ydCBkZWZhdWx0VG9kbyBmcm9tICcuL3NhbXBsZXMnO1xuXG5jb25zdCBjcmVhdGVUb2RvID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0RGVmYXVsdFRvZG8gPSAoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKVxuICAgICB8fCBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGxvZ2ljVXRpbHMudXBkYXRlSnNvbkluZm9Ub1N0b3JhZ2UoeyBzb3J0OiAndG9kbycsIGRhdGE6IGRlZmF1bHRUb2RvIH0pO1xuICAgICAgY29uc3QgaWRzRGF0YSA9IHtcbiAgICAgICAgdG9kb0xhc3RJZDogZGVmYXVsdFRvZG9bZGVmYXVsdFRvZG8ubGVuZ3RoIC0gMV0uaWQsXG4gICAgICAgIHRvZG9DdXJyZW50SWQ6IGRlZmF1bHRUb2RvW2RlZmF1bHRUb2RvLmxlbmd0aCAtIDFdLmlkLFxuICAgICAgfTtcbiAgICAgIGxvZ2ljVXRpbHMuYWRkSnNvbkluZm9Ub1N0b3JhZ2UoeyBzb3J0OiAnaWRzJywgZGF0YTogaWRzRGF0YSB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kb0xpc3QgPSAoZGF0YSkgPT4ge1xuICAgIGlmICghZGF0YS5pZCkgZGF0YS5pZCA9IGxvZ2ljVXRpbHMuZ2V0TmV3SWQoJ3RvZG8nKTtcbiAgICBzYXZpbmdzLnRvZG9MaXN0LnB1c2godG9kbyhkYXRhKSk7XG4gICAgbG9naWNVdGlscy51cGRhdGVKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQ6ICd0b2RvJywgZGF0YTogc2F2aW5ncy50b2RvTGlzdCB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRJbmZvRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFsID0gbG9naWNVdGlscy5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKCd0b2RvJyk7XG4gICAgaWYgKHZhbCkgc2F2aW5ncy50b2RvTGlzdCA9IHZhbDtcbiAgfTtcblxuICBjb25zdCBzZXRUb2RvTGlzdEZvclByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gICAgc2F2aW5ncy50b2RvTGlzdEZvclByb2plY3QgPSBzYXZpbmdzLnRvZG9MaXN0LmZpbHRlcihlID0+IGUucHJvamVjdElkID09PSBwcm9qZWN0SWQpO1xuICAgIGxvZ2ljVXRpbHMuYWRkSnNvbkluZm9Ub1N0b3JhZ2UoeyBzb3J0OiAnaWRzJywgZGF0YTogeyBwcm9qZWN0Q3VycmVudElkOiBwcm9qZWN0SWQgfSB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFRvZG9MaXN0LCBzZXRUb2RvTGlzdEZvclByb2plY3QsIHNldEluZm9Gcm9tU3RvcmFnZSwgc2V0RGVmYXVsdFRvZG8sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvO1xuIiwiaW1wb3J0IGxvZ2ljVXRpbHMgZnJvbSAnLi9sb2dpY191dGlscyc7XG5cbmNvbnN0IGRlbGV0ZUxvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgZGVsZXRlVW5pdCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHNvcnQgPSBpZC5zcGxpdCgnLScpWzBdO1xuICAgIGNvbnN0IGRhdGEgPSBsb2dpY1V0aWxzLmdldEpzb25JbmZvRnJvbVN0b3JhZ2Uoc29ydCk7XG4gICAgY29uc3QgdXBkYXRlZCA9IChkYXRhKSA/IGRhdGEuZmlsdGVyKGUgPT4gZS5pZCAhPT0gaWQpIDogW107XG4gICAgbG9naWNVdGlscy51cGRhdGVKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQsIGRhdGE6IHVwZGF0ZWQgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRBbGwgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9O1xuXG4gIHJldHVybiB7IGRlbGV0ZVVuaXQsIHJlc2V0QWxsIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVMb2dpYztcbiIsImNvbnN0IGxvZ2ljVXRpbHMgPSAoKCkgPT4ge1xuICBjb25zdCBnZXRKc29uSW5mb0Zyb21TdG9yYWdlID0gKHNvcnQpID0+IHtcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHNvcnQpKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oc29ydCkpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUpzb25JbmZvVG9TdG9yYWdlID0gKHsgc29ydCwgZGF0YSB9KSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHNvcnQsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfTtcblxuICBjb25zdCBhZGRKc29uSW5mb1RvU3RvcmFnZSA9ICh7IHNvcnQsIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsRGF0YSA9IGdldEpzb25JbmZvRnJvbVN0b3JhZ2Uoc29ydCk7XG4gICAgY29uc3QgdXBkYXRlID0gb3JpZ2luYWxEYXRhIHx8IHt9O1xuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICB1cGRhdGVba10gPSB2O1xuICAgIH1cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oc29ydCwgSlNPTi5zdHJpbmdpZnkodXBkYXRlKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmV3SWQgPSAoc29ydCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBsZXQgaWQ7XG4gICAgaWYgKGdldEpzb25JbmZvRnJvbVN0b3JhZ2UoJ2lkcycpICYmIGdldEpzb25JbmZvRnJvbVN0b3JhZ2UoJ2lkcycpW2Ake3NvcnR9TGFzdElkYF0pIHtcbiAgICAgIGlkID0gZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZSgnaWRzJylbYCR7c29ydH1MYXN0SWRgXTtcbiAgICAgIGNvbnN0IG5ld051bWJlciA9IE51bWJlcihpZC5zcGxpdCgnLScpWzFdKSArIDE7XG4gICAgICBpZCA9IGAke3NvcnR9LSR7bmV3TnVtYmVyfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkID0gYCR7c29ydH0tMWA7XG4gICAgfVxuICAgIGRhdGFbYCR7c29ydH1MYXN0SWRgXSA9IGlkO1xuICAgIGRhdGFbYCR7c29ydH1DdXJyZW50SWRgXSA9IGlkO1xuICAgIGFkZEpzb25JbmZvVG9TdG9yYWdlKHsgc29ydDogJ2lkcycsIGRhdGEgfSk7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZSxcbiAgICB1cGRhdGVKc29uSW5mb1RvU3RvcmFnZSxcbiAgICBnZXROZXdJZCxcbiAgICBhZGRKc29uSW5mb1RvU3RvcmFnZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2ljVXRpbHM7XG4iLCJjb25zdCBwcm9qZWN0ID0gKHsgcHJvamVjdE5hbWUsIGlkIH0pID0+ICh7IHByb2plY3ROYW1lLCBpZCB9KTtcbmNvbnN0IHRvZG8gPSAoe1xuICB0aXRsZSwgcHJvamVjdElkLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGlkLCBkb25lID0gZmFsc2UsXG59KSA9PiAoe1xuICB0aXRsZSwgcHJvamVjdElkLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGlkLCBkb25lLFxufSk7XG5cbmNvbnN0IHNhdmluZ3MgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICBjb25zdCB0b2RvTGlzdEZvclByb2plY3QgPSBbXTtcbiAgcmV0dXJuIHsgcHJvamVjdExpc3QsIHRvZG9MaXN0LCB0b2RvTGlzdEZvclByb2plY3QgfTtcbn0pKCk7XG5cbmV4cG9ydCB7XG4gIHByb2plY3QsIHRvZG8sIHNhdmluZ3MsXG59O1xuIiwiaW1wb3J0IHsgc2F2aW5ncyB9IGZyb20gJy4vb2JqZWN0cyc7XG5pbXBvcnQgbG9naWNVdGlscyBmcm9tICcuL2xvZ2ljX3V0aWxzJztcblxuY29uc3QgcHJvdmlkZUxvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgaWRzID0gbG9naWNVdGlscy5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKCdpZHMnKTtcbiAgICBpZiAoIWlkcykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gaWRzLnByb2plY3RDdXJyZW50SWQ7XG4gIH07XG4gIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4gc2F2aW5ncy5wcm9qZWN0TGlzdDtcbiAgY29uc3QgZ2V0VG9kb0xpc3RGb3JQcm9qZWN0ID0gKCkgPT4gc2F2aW5ncy50b2RvTGlzdEZvclByb2plY3Q7XG5cbiAgcmV0dXJuIHsgZ2V0Q3VycmVudFByb2plY3QsIGdldFByb2plY3RMaXN0LCBnZXRUb2RvTGlzdEZvclByb2plY3QgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3ZpZGVMb2dpYztcbiIsImNvbnN0IGRlZmF1bHRUb2RvID0gW1xuICB7XG4gICAgdGl0bGU6ICdmaXJzdCBsb25nIGxvbmcgbG9uZyB0aXRsZScsXG4gICAgcHJvamVjdElkOiAncHJvamVjdC0xJyxcbiAgICBkYXRlOiAnMjAxOS0xMC0xNCcsXG4gICAgcHJpb3JpdHk6ICdwcmlvcml0eS1ub3JtYWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnZXhhbXBsZSBsb25nIGxvbmcgZGVzY3JpcHRpb24gYW5kIG1vcmUnLFxuICAgIGlkOiAndG9kby0xJyxcbiAgICBkb25lOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnc2Vjb25kIHRpdGxlJyxcbiAgICBwcm9qZWN0SWQ6ICdwcm9qZWN0LTEnLFxuICAgIGRhdGU6ICcyMDE5LTEwLTE1JyxcbiAgICBwcmlvcml0eTogJ3ByaW9yaXR5LXVyZ2VudCcsXG4gICAgZGVzY3JpcHRpb246ICdleGFtcGxlIGRlc2NyaXB0aW9uJyxcbiAgICBpZDogJ3RvZG8tMicsXG4gICAgZG9uZTogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ3RoaXJkIHRpdGxlJyxcbiAgICBwcm9qZWN0SWQ6ICdwcm9qZWN0LTEnLFxuICAgIGRhdGU6ICcyMDE5LTEwLTE1JyxcbiAgICBwcmlvcml0eTogJ3ByaW9yaXR5LW5vcm1hbCcsXG4gICAgZGVzY3JpcHRpb246ICdleGFtcGxlIGRlc2NyaXB0aW9uJyxcbiAgICBpZDogJ3RvZG8tMycsXG4gICAgZG9uZTogZmFsc2UsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VG9kbztcbiIsImltcG9ydCBsb2dpY1V0aWxzIGZyb20gJy4vbG9naWNfdXRpbHMnO1xuXG5jb25zdCB1cGRhdGVMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRvbmUgPSAoaWQpID0+IHtcbiAgICBjb25zdCBzb3J0ID0gaWQuc3BsaXQoJy0nKVswXTtcbiAgICBjb25zdCBkYXRhID0gbG9naWNVdGlscy5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKHNvcnQpO1xuICAgIGNvbnN0IG9iaiA9IGRhdGEuZmluZChlID0+IGUuaWQgPT09IGlkKTtcbiAgICBpZiAob2JqKSBvYmouZG9uZSA9ICFvYmouZG9uZTtcbiAgICBsb2dpY1V0aWxzLnVwZGF0ZUpzb25JbmZvVG9TdG9yYWdlKHsgc29ydCwgZGF0YSB9KTtcbiAgfTtcblxuICByZXR1cm4geyBkb25lIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVMb2dpYztcbiJdLCJzb3VyY2VSb290IjoiIn0=