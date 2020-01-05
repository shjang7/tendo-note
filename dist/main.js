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

/***/ "./src/display/create_display.js":
/*!***************************************!*\
  !*** ./src/display/create_display.js ***!
  \***************************************/
/*! exports provided: createLayout, createProject, createTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLayout", function() { return createLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProject", function() { return createProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTodo", function() { return createTodo; });
/* harmony import */ var _create_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_form */ "./src/display/create_form.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/display/utils.js");



var commonUsage = function () {
  var setting = function setting(create) {
    var tag = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'div',
      classes: 'setting'
    });
    if (create) tag.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'i',
      classes: 'create-form far fa-plus-square cursor-pointer'
    }));
    tag.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'i',
      classes: 'edit fas fa-wrench cursor-pointer'
    }));
    tag.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'i',
      classes: 'delete far fa-times-circle cursor-pointer'
    }));
    return tag;
  };

  var headerSet = function headerSet(header, word) {
    header.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'h1',
      classes: 'h-title',
      text: word
    }));
    header.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'h1',
      classes: 'create-form cursor-pointer text-white',
      text: '+'
    }));
  };

  var setGroup = function setGroup(sort, container) {
    var group = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'div',
      classes: "".concat(sort, "-content-group")
    });
    headerSet(container, _utils__WEBPACK_IMPORTED_MODULE_1__["default"].capitalize(sort));
    container.appendChild(group);
    return container;
  };

  return {
    setting: setting,
    setGroup: setGroup
  };
}();

var createLayout = function () {
  var render = function render() {
    var mainContainer = document.querySelector('#content');
    var projectContainer = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'section',
      id: 'project',
      classes: 'col-md-4 primary-bg'
    });
    var todoContainer = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'section',
      id: 'todo',
      classes: 'col-md-8 secondary-bg'
    });
    mainContainer.classList.add('secondary-bg');
    mainContainer.appendChild(commonUsage.setGroup('project', projectContainer));
    mainContainer.appendChild(commonUsage.setGroup('todo', todoContainer));
    projectContainer.appendChild(_create_form__WEBPACK_IMPORTED_MODULE_0__["default"].mainForm({
      option: 'project'
    }));
    projectContainer.appendChild(commonUsage.setting(true));
    todoContainer.appendChild(_create_form__WEBPACK_IMPORTED_MODULE_0__["default"].mainForm({
      option: 'todo'
    }));
    return mainContainer;
  };

  return {
    render: render
  };
}();

var createProject = function () {
  var projectUnitDisplay = function projectUnitDisplay(_ref) {
    var projectName = _ref.projectName,
        id = _ref.id;
    var project = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'h4',
      id: id,
      classes: 'project-content m-0 cursor-pointer'
    });
    project.textContent = projectName;
    var projectGroup = document.querySelector('.project-content-group');
    projectGroup.appendChild(project);
  };

  var addGroup = function addGroup(projectArray) {
    projectArray.forEach(function (e) {
      return projectUnitDisplay(e);
    });
  };

  return {
    addGroup: addGroup
  };
}();

var createTodo = function () {
  var doneStatusDisplay = function doneStatusDisplay(_ref2) {
    var done = _ref2.done,
        parent = _ref2.parent;
    var target = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'input',
      classes: 'done-btn vertical-align-bottom cursor-pointer'
    });
    target.type = 'checkbox';

    if (done) {
      target.checked = true;
      parent.classList.add('done');
    }

    return target;
  };

  var todoUnitDisplay = function todoUnitDisplay(_ref3) {
    var title = _ref3.title,
        date = _ref3.date,
        priority = _ref3.priority,
        description = _ref3.description,
        id = _ref3.id,
        done = _ref3.done;
    var todo = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'div',
      id: id,
      classes: "todo-content no-gutter ".concat(priority)
    });
    todo.appendChild(doneStatusDisplay({
      done: done,
      parent: todo
    }));
    todo.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'h4',
      classes: 'title text-nowrap m-0',
      text: title
    }));
    todo.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'div',
      classes: 'date',
      text: date
    }));
    todo.appendChild(_utils__WEBPACK_IMPORTED_MODULE_1__["default"].createTag({
      tag: 'div',
      classes: 'description text-nowrap',
      text: description
    }));
    todo.appendChild(commonUsage.setting());
    return todo;
  };

  var addGroup = function addGroup(newGroup) {
    var todoGroup = document.querySelector('.todo-content-group');

    while (todoGroup.firstChild) {
      todoGroup.removeChild(todoGroup.firstChild);
    }

    newGroup.forEach(function (e) {
      return todoGroup.appendChild(todoUnitDisplay(e));
    });
  };

  return {
    addGroup: addGroup
  };
}();



/***/ }),

/***/ "./src/display/create_form.js":
/*!************************************!*\
  !*** ./src/display/create_form.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/display/utils.js");


var createForm = function () {
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

  var priorityField = function priorityField(priority) {
    var field = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'div',
      classes: 'field priority'
    });
    var checked = [true, false];

    if (priority && priority === 'priority-urgent') {
      checked = [false, true];
    }

    priorityUnit('normal', field, checked[0]);
    priorityUnit('urgent', field, checked[1]);
    return field;
  };

  var mainForm = function mainForm(_ref2) {
    var option = _ref2.option,
        data = _ref2.data;
    var form = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'form',
      classes: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].exchangeSpaceToDash("".concat(option, " form"))
    });
    form.classList.add('d-none');
    var fieldset = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createTag({
      tag: 'fieldset'
    });
    form.appendChild(fieldset);

    if (option === 'project') {
      if (data) fieldset.appendChild(buildField({
        placeholder: 'project name',
        defaultValue: data.projectName
      }));else fieldset.appendChild(buildField({
        placeholder: 'project name'
      }));
    } else {
      fieldset.appendChild(buildField({
        placeholder: 'title',
        defaultValue: data ? data.title : ''
      }));
      fieldset.appendChild(buildField({
        placeholder: 'date',
        type: 'date',
        defaultValue: data ? data.date : _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getDateFromToday(0)
      }));
      fieldset.appendChild(priorityField(data ? data.priority : ''));
      fieldset.appendChild(buildField({
        placeholder: 'description',
        textarea: 'textarea',
        defaultValue: data ? data.description : ''
      }));
    }

    return form;
  };

  return {
    mainForm: mainForm
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (createForm);

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
  var deleteUnit = function deleteUnit(_ref) {
    var id = _ref.id,
        button = _ref.button;
    var object = button ? button.parentNode.parentNode : document.getElementById(id);
    object.parentNode.removeChild(object);
    return object.id;
  };

  return {
    deleteUnit: deleteUnit
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (deleteDisplay);

/***/ }),

/***/ "./src/display/read_display.js":
/*!*************************************!*\
  !*** ./src/display/read_display.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/display/utils.js");


var readDisplay = function () {
  var getEditButtonAll = function getEditButtonAll(id) {
    var container = document.getElementById(id);
    return container.querySelectorAll('.edit');
  };

  var collectFormHiddenData = function collectFormHiddenData(_ref) {
    var data = _ref.data,
        form = _ref.form;
    var parent = form.parentNode;
    if (parent.id.split('-').length !== 2) return undefined;
    var classes = parent.classList.value.split(' ');
    data.done = classes.includes('done');
    data.id = parent.id;
    return data;
  };

  var getDoneButtonAll = function getDoneButtonAll(id) {
    var container = document.getElementById(id);
    return container.querySelectorAll('.done-btn');
  };

  var getProjectList = function getProjectList() {
    return document.querySelector('.project-content-group').childNodes;
  };

  var getProjectsExceptCurrent = function getProjectsExceptCurrent() {
    var collection = [];
    var allList = getProjectList();
    var len = allList.length;

    for (var i = 0; i < len; i++) {
      var classes = allList[i].classList.value.split(' ');

      if (!classes.includes('current-project')) {
        collection.push(allList[i]);
      }
    }

    return collection;
  };

  var getFormLayout = function getFormLayout(id) {
    var selector = document.getElementById(id);
    var opens = selector.querySelectorAll('.create-form');
    var form = selector.querySelector('form');
    return {
      form: form,
      opens: opens
    };
  };

  var getRadioInfo = function getRadioInfo(input, data) {
    var radios = input.parentNode.querySelectorAll('input');
    radios.forEach(function (radio) {
      if (radio.checked) {
        data[radio.name] = radio.id;
      }
    });
  };

  var getFormData = function getFormData(form) {
    var data = {};
    form.querySelectorAll('.field').forEach(function (field) {
      var selector = field.querySelector('input') || field.querySelector('textarea');

      if (selector.type === 'radio') {
        getRadioInfo(selector, data);
      } else {
        var key = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].exchangeDashToCapital(selector.name);
        var value = selector.value;
        data[key] = value;
      }
    });
    return data;
  };

  var currentOrLastProject = function currentOrLastProject(projectId) {
    if (projectId) {
      return document.querySelector("#".concat(projectId));
    }

    if (document.querySelector('.project-content-group').childNodes.length > 0) {
      return document.querySelector('.project-content-group').lastChild;
    }

    return undefined;
  };

  var getDeleteButtonAll = function getDeleteButtonAll(id) {
    var container = document.getElementById(id);
    return container.querySelectorAll('.delete');
  };

  var getResetButton = function getResetButton() {
    var parent = document.getElementById('todo');
    return parent.querySelector('.h-title');
  };

  return {
    getEditButtonAll: getEditButtonAll,
    collectFormHiddenData: collectFormHiddenData,
    getDoneButtonAll: getDoneButtonAll,
    getProjectList: getProjectList,
    getProjectsExceptCurrent: getProjectsExceptCurrent,
    getFormLayout: getFormLayout,
    getFormData: getFormData,
    currentOrLastProject: currentOrLastProject,
    getDeleteButtonAll: getDeleteButtonAll,
    getResetButton: getResetButton
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (readDisplay);

/***/ }),

/***/ "./src/display/update_display.js":
/*!***************************************!*\
  !*** ./src/display/update_display.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_form */ "./src/display/create_form.js");


var updateDisplay = function () {
  var toggleNewForm = function toggleNewForm(form) {
    form.classList.toggle('d-none');
  };

  var toggleCursorPointer = function toggleCursorPointer(button) {
    button.classList.toggle('cursor-pointer');
  };

  var otherButtonOff = function otherButtonOff(button) {
    var all = document.querySelectorAll('.cursor-pointer');
    all.forEach(function (e) {
      if (e !== button) e.classList.toggle('pointer-events-none');
    });
  };

  var shiftFormData = function shiftFormData(_ref) {
    var sort = _ref.sort,
        object = _ref.object;
    var data = {};
    var classList = object.classList.value.split(' ');

    if (sort === 'project') {
      data.projectName = object.innerText;
      object.innerText = '';
    }

    if (sort === 'todo') {
      for (var i = 0; i < object.childNodes.length - 1; i++) {
        var target = object.childNodes[i];
        var indicator = target.classList[0];
        var text = target.innerText;
        data[indicator] = text;
        target.innerText = '';
      }

      object.firstChild.style.display = 'none';
    }

    if (sort === 'todo') data.priority = classList.includes('priority-urgent') ? 'priority-urgent' : 'priority-normal';
    return {
      data: data
    };
  };

  var openFormToEdit = function openFormToEdit(_ref2) {
    var id = _ref2.id,
        button = _ref2.button;
    var object = button ? button.parentNode.parentNode : document.getElementById(id);
    var sort = object.id.split('-')[0];
    var openedForm = object.querySelector('form');

    if (openedForm) {
      return {
        status: 'opened',
        form: openedForm
      };
    }

    var _shiftFormData = shiftFormData({
      sort: sort,
      object: object
    }),
        data = _shiftFormData.data;

    var form = _create_form__WEBPACK_IMPORTED_MODULE_0__["default"].mainForm({
      option: sort,
      data: data
    });
    object.appendChild(form);
    toggleNewForm(form);
    return {
      status: 'normal',
      form: form
    };
  };

  var toggleDone = function toggleDone(button) {
    var object = button.parentNode;
    object.classList.toggle('done');
    return object.id;
  };

  var updateCurrentProject = function updateCurrentProject(newTag) {
    var projectGroup = document.querySelector('.project-content-group');
    var previous = projectGroup.querySelector('.current-project');
    if (previous) previous.classList.remove('current-project');
    newTag.classList.add('current-project');
    return newTag.id;
  };

  var makeBlankForm = function makeBlankForm(form) {
    form.querySelectorAll('.field').forEach(function (field) {
      var selector = field.querySelector('input') || field.querySelector('textarea');
      selector.value = '';
    });
  };

  return {
    toggleDone: toggleDone,
    toggleCursorPointer: toggleCursorPointer,
    toggleNewForm: toggleNewForm,
    openFormToEdit: openFormToEdit,
    updateCurrentProject: updateCurrentProject,
    makeBlankForm: makeBlankForm,
    otherButtonOff: otherButtonOff
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (updateDisplay);

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

  var focusSet = function focusSet(target) {
    if (target) target.querySelector('input').focus();
  };

  var reloadScreen = function reloadScreen() {
    return window.location.reload();
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

  var dynamicSetting = function dynamicSetting() {
    resizeTextarea();
    focusSet();
  };

  return {
    createTag: createTag,
    getDateFromToday: getDateFromToday,
    eliminateFirstOfDash: eliminateFirstOfDash,
    exchangeDashToCapital: exchangeDashToCapital,
    exchangeSpaceToDash: exchangeSpaceToDash,
    includeSpace: includeSpace,
    resizeTextarea: resizeTextarea,
    focusSet: focusSet,
    reloadScreen: reloadScreen,
    dynamicSetting: dynamicSetting,
    capitalize: capitalize
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (utils);

/***/ }),

/***/ "./src/display_interface.js":
/*!**********************************!*\
  !*** ./src/display_interface.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_create_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display/create_display */ "./src/display/create_display.js");
/* harmony import */ var _display_read_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/read_display */ "./src/display/read_display.js");
/* harmony import */ var _display_update_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/update_display */ "./src/display/update_display.js");
/* harmony import */ var _display_delete_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/delete_display */ "./src/display/delete_display.js");
/* harmony import */ var _display_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display/utils */ "./src/display/utils.js");






var displayInterface = function () {
  var addProjectGroup = function addProjectGroup(projectArray) {
    return _display_create_display__WEBPACK_IMPORTED_MODULE_0__["createProject"].addGroup(projectArray);
  };

  var addTodoGroup = function addTodoGroup(todoArray) {
    return _display_create_display__WEBPACK_IMPORTED_MODULE_0__["createTodo"].addGroup(todoArray);
  };

  var render = function render() {
    return _display_create_display__WEBPACK_IMPORTED_MODULE_0__["createLayout"].render();
  };

  var getFormLayout = function getFormLayout(id) {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].getFormLayout(id);
  };

  var getFormData = function getFormData(form, projectId) {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].getFormData(form, projectId);
  };

  var makeBlankForm = function makeBlankForm(form) {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].makeBlankForm(form);
  };

  var otherButtonOff = function otherButtonOff(button) {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].otherButtonOff(button);
  };

  var getDeleteButtonAll = function getDeleteButtonAll(id) {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].getDeleteButtonAll(id);
  };

  var deleteUnit = function deleteUnit(obj) {
    return _display_delete_display__WEBPACK_IMPORTED_MODULE_3__["default"].deleteUnit(obj);
  };

  var getResetButton = function getResetButton() {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].getResetButton();
  };

  var getProjectList = function getProjectList() {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectList();
  };

  var updateCurrentProject = function updateCurrentProject(newTag) {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].updateCurrentProject(newTag);
  };

  var currentOrLastProject = function currentOrLastProject(projectId) {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].currentOrLastProject(projectId);
  };

  var toggleNewForm = function toggleNewForm(form) {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].toggleNewForm(form);
  };

  var toggleCursorPointer = function toggleCursorPointer(button) {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].toggleCursorPointer(button);
  };

  var getDoneButtonAll = function getDoneButtonAll(id) {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].getDoneButtonAll(id);
  };

  var toggleDone = function toggleDone(button) {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].toggleDone(button);
  };

  var getEditButtonAll = function getEditButtonAll(id) {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].getEditButtonAll(id);
  };

  var openFormToEdit = function openFormToEdit(obj) {
    return _display_update_display__WEBPACK_IMPORTED_MODULE_2__["default"].openFormToEdit(obj);
  };

  var collectFormHiddenData = function collectFormHiddenData(obj) {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].collectFormHiddenData(obj);
  };

  var getProjectsExceptCurrent = function getProjectsExceptCurrent() {
    return _display_read_display__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectsExceptCurrent();
  };

  var focusSet = function focusSet(target) {
    return _display_utils__WEBPACK_IMPORTED_MODULE_4__["default"].focusSet(target);
  };

  var reloadScreen = function reloadScreen() {
    return _display_utils__WEBPACK_IMPORTED_MODULE_4__["default"].reloadScreen();
  };

  var dynamicSetting = function dynamicSetting() {
    return _display_utils__WEBPACK_IMPORTED_MODULE_4__["default"].dynamicSetting();
  };

  return {
    render: render,
    addTodoGroup: addTodoGroup,
    addProjectGroup: addProjectGroup,
    getFormLayout: getFormLayout,
    getFormData: getFormData,
    makeBlankForm: makeBlankForm,
    otherButtonOff: otherButtonOff,
    getDeleteButtonAll: getDeleteButtonAll,
    deleteUnit: deleteUnit,
    getResetButton: getResetButton,
    getProjectList: getProjectList,
    updateCurrentProject: updateCurrentProject,
    currentOrLastProject: currentOrLastProject,
    getDoneButtonAll: getDoneButtonAll,
    toggleDone: toggleDone,
    toggleNewForm: toggleNewForm,
    toggleCursorPointer: toggleCursorPointer,
    getEditButtonAll: getEditButtonAll,
    openFormToEdit: openFormToEdit,
    collectFormHiddenData: collectFormHiddenData,
    focusSet: focusSet,
    reloadScreen: reloadScreen,
    getProjectsExceptCurrent: getProjectsExceptCurrent,
    dynamicSetting: dynamicSetting
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (displayInterface);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display_interface */ "./src/display_interface.js");
/* harmony import */ var _logic_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic_interface */ "./src/logic_interface.js");



var interfaceMain = function () {
  var projectSetting = function projectSetting() {
    var projectArray = _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectList();
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].addProjectGroup(projectArray);
  };

  var todoSetting = function todoSetting() {
    var todoArray = _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoListForProject();
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].addTodoGroup(todoArray);
  };

  var updateCurrentProject = function updateCurrentProject(button) {
    var projectId = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].updateCurrentProject(button);
    _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].updateTodoListForProject(projectId);
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].toggleCursorPointer(button);
    todoSetting();
  };

  var afterSubmission = function afterSubmission(form) {
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].makeBlankForm(form);
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].reloadScreen();
  };

  var submitForm = function submitForm(sort, form) {
    var data = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].getFormData(form);

    if (_display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].collectFormHiddenData({
      data: data,
      form: form
    })) {
      _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].fillInData({
        data: data
      });
      _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].updateUnit({
        id: data.id,
        data: data
      });
    } else {
      if (sort === 'project') {
        _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectList(data);
      }

      if (sort === 'todo') {
        data.projectId = _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();
        _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].addTodoList(data);
      }
    }

    afterSubmission(form);
  };

  var setInitialCurrentProject = function setInitialCurrentProject() {
    var projectId = _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();
    var projectObj = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].currentOrLastProject(projectId);
    if (projectObj) updateCurrentProject(projectObj);
  };

  var formSubmissionEvent = function formSubmissionEvent(form, sort) {
    form.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        submitForm(sort, form);
      }
    });
  };

  var projectSwitchEvent = function projectSwitchEvent() {
    var buttons = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectsExceptCurrent();

    if (buttons.length > 0) {
      buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          updateCurrentProject(button);
          _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].reloadScreen();
        });
      });
    }
  };

  var deleteProjectUnit = function deleteProjectUnit() {
    var id = _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].deleteUnit({
      id: id
    });
    _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].deleteUnit(id);
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].reloadScreen();
  };

  var deleteTodoUnit = function deleteTodoUnit(button) {
    var id = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].deleteUnit({
      button: button
    });
    _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].deleteUnit(id);
  };

  var deleteEvent = function deleteEvent(word) {
    var deleteAllButton = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].getDeleteButtonAll(word);
    deleteAllButton.forEach(function (deleteBtn) {
      deleteBtn.addEventListener('click', function () {
        if (word === 'project') deleteProjectUnit();
        if (word === 'todo') deleteTodoUnit(deleteBtn);
      });
    });
  };

  var doneUnit = function doneUnit(button) {
    var id = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].toggleDone(button);
    _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].doneUnit(id);
  };

  var doneEvent = function doneEvent(word) {
    var doneAllBtn = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].getDoneButtonAll(word);
    doneAllBtn.forEach(function (doneBtn) {
      doneBtn.addEventListener('click', function () {
        doneUnit(doneBtn);
      });
    });
  };

  var editProject = function editProject() {
    var id = _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();
    return _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].openFormToEdit({
      id: id
    });
  };

  var editTodo = function editTodo(button) {
    return _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].openFormToEdit({
      button: button
    });
  };

  var editUnit = function editUnit(sort, button) {
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].otherButtonOff(button);

    var _ref = sort === 'project' ? editProject() : editTodo(button),
        status = _ref.status,
        form = _ref.form;

    if (status === 'opened') {
      submitForm(sort, form);
    } else {
      formSubmissionEvent(form, sort);
      _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].focusSet(form);
    }
  };

  var editEvent = function editEvent(sort) {
    var editAllBtn = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].getEditButtonAll(sort);
    editAllBtn.forEach(function (btn) {
      btn.addEventListener('click', function () {
        editUnit(sort, btn);
      });
    });
  };

  var programResetEvent = function programResetEvent() {
    var resetBtn = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].getResetButton();
    var num = 0;
    resetBtn.addEventListener('click', function () {
      num += 1;
      if (num < 7) return; // reset should be hidden from user

      _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].resetStorage();
      _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].reloadScreen();
    });
  };

  var openFormEvent = function openFormEvent(opens, form) {
    opens.forEach(function (open) {
      return open.addEventListener('click', function () {
        _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].otherButtonOff(open);
        _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].toggleNewForm(form);
        _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].focusSet(form);
      });
    });
  };

  var createEvents = function createEvents(word) {
    var _displayInterface$get = _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].getFormLayout(word),
        opens = _displayInterface$get.opens,
        form = _displayInterface$get.form;

    openFormEvent(opens, form);
    formSubmissionEvent(form, word);
    editEvent(word);
    deleteEvent(word);

    if (word === 'todo') {
      doneEvent(word);
    }

    if (word === 'project') {
      projectSwitchEvent();
      programResetEvent();
    }
  };

  var init = function init() {
    _logic_interface__WEBPACK_IMPORTED_MODULE_1__["default"].setInit();
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].render();
    _display_interface__WEBPACK_IMPORTED_MODULE_0__["default"].dynamicSetting();
    projectSetting();
    setInitialCurrentProject();
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

/***/ "./src/logic_interface.js":
/*!********************************!*\
  !*** ./src/logic_interface.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logics_create_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logics/create_logic */ "./src/logics/create_logic.js");
/* harmony import */ var _logics_read_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logics/read_logic */ "./src/logics/read_logic.js");
/* harmony import */ var _logics_delete_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logics/delete_logic */ "./src/logics/delete_logic.js");
/* harmony import */ var _logics_update_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logics/update_logic */ "./src/logics/update_logic.js");
/* harmony import */ var _logics_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logics/storage */ "./src/logics/storage.js");






var logicInterface = function () {
  var addProjectList = function addProjectList(data) {
    return _logics_create_logic__WEBPACK_IMPORTED_MODULE_0__["createProject"].addProjectList(data);
  };

  var addTodoList = function addTodoList(data) {
    return _logics_create_logic__WEBPACK_IMPORTED_MODULE_0__["createTodo"].addTodoList(data);
  };

  var updateTodoListForProject = function updateTodoListForProject(id) {
    return _logics_create_logic__WEBPACK_IMPORTED_MODULE_0__["createTodo"].setTodoListForProject(id);
  };

  var getCurrentProject = function getCurrentProject() {
    return _logics_read_logic__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();
  };

  var getProjectList = function getProjectList() {
    return _logics_read_logic__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectList();
  };

  var getTodoListForProject = function getTodoListForProject() {
    return _logics_read_logic__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoListForProject();
  };

  var deleteUnit = function deleteUnit(id) {
    return _logics_delete_logic__WEBPACK_IMPORTED_MODULE_2__["default"].deleteUnit(id);
  };

  var resetStorage = function resetStorage() {
    return _logics_storage__WEBPACK_IMPORTED_MODULE_4__["default"].resetStorage();
  };

  var fillInData = function fillInData(data) {
    return _logics_update_logic__WEBPACK_IMPORTED_MODULE_3__["default"].fillInData(data);
  };

  var doneUnit = function doneUnit(id) {
    return _logics_update_logic__WEBPACK_IMPORTED_MODULE_3__["default"].doneUnit(id);
  };

  var updateUnit = function updateUnit(obj) {
    return _logics_update_logic__WEBPACK_IMPORTED_MODULE_3__["default"].updateUnit(obj);
  };

  var setInit = function setInit() {
    return _logics_create_logic__WEBPACK_IMPORTED_MODULE_0__["mainCreate"].setInit();
  };

  return {
    setInit: setInit,
    addProjectList: addProjectList,
    addTodoList: addTodoList,
    getCurrentProject: getCurrentProject,
    resetStorage: resetStorage,
    getProjectList: getProjectList,
    getTodoListForProject: getTodoListForProject,
    updateTodoListForProject: updateTodoListForProject,
    deleteUnit: deleteUnit,
    fillInData: fillInData,
    doneUnit: doneUnit,
    updateUnit: updateUnit
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (logicInterface);

/***/ }),

/***/ "./src/logics/create_logic.js":
/*!************************************!*\
  !*** ./src/logics/create_logic.js ***!
  \************************************/
/*! exports provided: createProject, createTodo, mainCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProject", function() { return createProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTodo", function() { return createTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainCreate", function() { return mainCreate; });
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/logics/objects.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/logics/storage.js");



var getNewId = function getNewId(sort) {
  var data = {};
  var id;

  if (_storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('ids') && _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('ids')["".concat(sort, "LastId")]) {
    id = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('ids')["".concat(sort, "LastId")];
    var newNumber = Number(id.split('-')[1]) + 1;
    id = "".concat(sort, "-").concat(newNumber);
  } else {
    id = "".concat(sort, "-1");
  }

  data["".concat(sort, "LastId")] = id;
  data["".concat(sort, "CurrentId")] = id;
  _storage__WEBPACK_IMPORTED_MODULE_1__["default"].appendJsonInfoToStorage({
    sort: 'ids',
    data: data
  });
  return id;
};

var createProject = function () {
  var setDefaultProject = function setDefaultProject() {
    var storageData = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('project');

    if (!storageData || storageData.length === 0) {
      var defaultProject = [{
        projectName: 'default project',
        id: 'project-1'
      }];
      _storage__WEBPACK_IMPORTED_MODULE_1__["default"].setJsonInfoToStorage({
        sort: 'project',
        data: defaultProject
      });
      _storage__WEBPACK_IMPORTED_MODULE_1__["default"].appendJsonInfoToStorage({
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
    var copyProjectId = id || getNewId('project');
    _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].projectList.push(Object(_objects__WEBPACK_IMPORTED_MODULE_0__["project"])({
      projectName: projectName,
      id: copyProjectId
    }));
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].setJsonInfoToStorage({
      sort: 'project',
      data: _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].projectList
    });
  };

  var setInfoFromStorage = function setInfoFromStorage() {
    var val = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('project');
    if (val) _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].projectList = val;
  };

  return {
    addProjectList: addProjectList,
    setInfoFromStorage: setInfoFromStorage,
    setDefaultProject: setDefaultProject
  };
}();

var createTodo = function () {
  var addTodoList = function addTodoList(data) {
    if (!data.id) data.id = getNewId('todo');
    _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoList.push(Object(_objects__WEBPACK_IMPORTED_MODULE_0__["todo"])(data));
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].setJsonInfoToStorage({
      sort: 'todo',
      data: _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoList
    });
  };

  var setInfoFromStorage = function setInfoFromStorage() {
    var val = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('todo');
    if (val) _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoList = val;
  };

  var setTodoListForProject = function setTodoListForProject(projectId) {
    _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoListForProject = _objects__WEBPACK_IMPORTED_MODULE_0__["savings"].todoList.filter(function (e) {
      return e.projectId === projectId;
    });
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].appendJsonInfoToStorage({
      sort: 'ids',
      data: {
        projectCurrentId: projectId
      }
    });
  };

  return {
    addTodoList: addTodoList,
    setTodoListForProject: setTodoListForProject,
    setInfoFromStorage: setInfoFromStorage
  };
}();

var mainCreate = function () {
  var setInit = function setInit() {
    createProject.setDefaultProject();
    createProject.setInfoFromStorage();
    createTodo.setInfoFromStorage();
  };

  return {
    setInit: setInit,
    getNewId: getNewId
  };
}();



/***/ }),

/***/ "./src/logics/delete_logic.js":
/*!************************************!*\
  !*** ./src/logics/delete_logic.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/logics/storage.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ "./src/logics/objects.js");



var deleteLogic = function () {
  var deleteTodoUnit = function deleteTodoUnit(idSort, id) {
    var data = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].getJsonInfoFromStorage('todo');
    var updated = data ? data.filter(function (e) {
      return e[idSort] !== id;
    }) : [];
    _objects__WEBPACK_IMPORTED_MODULE_1__["savings"].todoList = updated;
    _storage__WEBPACK_IMPORTED_MODULE_0__["default"].setJsonInfoToStorage({
      sort: 'todo',
      data: updated
    });
  };

  var deleteProjectUnit = function deleteProjectUnit(idSort, id) {
    var data = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].getJsonInfoFromStorage('project');
    var updated = data ? data.filter(function (e) {
      return e.id !== id;
    }) : [];
    _objects__WEBPACK_IMPORTED_MODULE_1__["savings"].projectList = updated;
    _storage__WEBPACK_IMPORTED_MODULE_0__["default"].setJsonInfoToStorage({
      sort: 'project',
      data: updated
    });
    deleteTodoUnit('projectId', id);
    _storage__WEBPACK_IMPORTED_MODULE_0__["default"].resetJsonInfoToStorage({
      sort: 'ids',
      data: {
        projectCurrentId: null
      }
    });
  };

  var deleteUnit = function deleteUnit(id) {
    var sort = id.split('-')[0];
    if (sort === 'todo') deleteTodoUnit('id', id);
    if (sort === 'project') deleteProjectUnit('id', id);
  };

  return {
    deleteUnit: deleteUnit
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (deleteLogic);

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

/***/ "./src/logics/read_logic.js":
/*!**********************************!*\
  !*** ./src/logics/read_logic.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/logics/objects.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/logics/storage.js");



var readLogic = function () {
  var getCurrentProject = function getCurrentProject() {
    var ids = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage('ids');
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

/* harmony default export */ __webpack_exports__["default"] = (readLogic);

/***/ }),

/***/ "./src/logics/storage.js":
/*!*******************************!*\
  !*** ./src/logics/storage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var storage = function () {
  var setJsonInfoToStorage = function setJsonInfoToStorage(_ref) {
    var sort = _ref.sort,
        data = _ref.data;
    window.localStorage.setItem(sort, JSON.stringify(data));
  };

  var appendJsonInfoToStorage = function appendJsonInfoToStorage(_ref2) {
    var sort = _ref2.sort,
        data = _ref2.data;
    var originalData = storage.getJsonInfoFromStorage(sort);
    var update = originalData || {};

    for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          k = _Object$entries$_i[0],
          v = _Object$entries$_i[1];

      update[k] = v;
    }

    window.localStorage.setItem(sort, JSON.stringify(update));
  };

  var getJsonInfoFromStorage = function getJsonInfoFromStorage(sort) {
    if (window.localStorage.getItem(sort)) {
      return JSON.parse(window.localStorage.getItem(sort));
    }

    return undefined;
  };

  var resetJsonInfoToStorage = function resetJsonInfoToStorage(_ref3) {
    var sort = _ref3.sort,
        data = _ref3.data;
    var originalData = getJsonInfoFromStorage(sort);
    var update = originalData || {};

    if (update) {
      Object.keys(data).forEach(function (key) {
        return delete update[key];
      });
    }

    window.localStorage.setItem(sort, JSON.stringify(update));
  };

  var resetStorage = function resetStorage() {
    window.localStorage.clear();
  };

  return {
    setJsonInfoToStorage: setJsonInfoToStorage,
    appendJsonInfoToStorage: appendJsonInfoToStorage,
    getJsonInfoFromStorage: getJsonInfoFromStorage,
    resetJsonInfoToStorage: resetJsonInfoToStorage,
    resetStorage: resetStorage
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (storage);

/***/ }),

/***/ "./src/logics/update_logic.js":
/*!************************************!*\
  !*** ./src/logics/update_logic.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/logics/objects.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/logics/storage.js");
/* harmony import */ var _read_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read_logic */ "./src/logics/read_logic.js");




var updateLogic = function () {
  var doneUnit = function doneUnit(id) {
    var sort = id.split('-')[0];
    var data = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage(sort);
    var obj = data.find(function (e) {
      return e.id === id;
    });
    if (obj) obj.done = !obj.done;
    _objects__WEBPACK_IMPORTED_MODULE_0__["savings"]["".concat(sort, "List")] = data;
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].setJsonInfoToStorage({
      sort: sort,
      data: data
    });
  };

  var fillInData = function fillInData(_ref) {
    var data = _ref.data;
    if (!data.id) return;
    var idSet = data.id.split('-');
    var sort = idSet[0];

    if (sort === 'todo') {
      data.projectId = _read_logic__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentProject();
    }
  };

  var updateUnit = function updateUnit(_ref2) {
    var id = _ref2.id,
        data = _ref2.data;
    var sort = id.split('-')[0];
    var updatingData = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getJsonInfoFromStorage(sort);
    var obj = updatingData.find(function (e) {
      return e.id === id;
    });
    updatingData.splice(updatingData.indexOf(obj), 1, data);
    _objects__WEBPACK_IMPORTED_MODULE_0__["savings"]["".concat(sort, "List")] = updatingData;
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].setJsonInfoToStorage({
      sort: sort,
      data: updatingData
    });
  };

  return {
    doneUnit: doneUnit,
    updateUnit: updateUnit,
    fillInData: fillInData
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (updateLogic);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvY3JlYXRlX2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvY3JlYXRlX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvZGVsZXRlX2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvcmVhZF9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3VwZGF0ZV9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5X2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljX2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWNzL2NyZWF0ZV9sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWNzL2RlbGV0ZV9sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWNzL29iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljcy9yZWFkX2xvZ2ljLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpY3Mvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWNzL3VwZGF0ZV9sb2dpYy5qcyJdLCJuYW1lcyI6WyJjb21tb25Vc2FnZSIsInNldHRpbmciLCJjcmVhdGUiLCJ0YWciLCJ1dGlscyIsImNyZWF0ZVRhZyIsImNsYXNzZXMiLCJhcHBlbmRDaGlsZCIsImhlYWRlclNldCIsImhlYWRlciIsIndvcmQiLCJ0ZXh0Iiwic2V0R3JvdXAiLCJzb3J0IiwiY29udGFpbmVyIiwiZ3JvdXAiLCJjYXBpdGFsaXplIiwiY3JlYXRlTGF5b3V0IiwicmVuZGVyIiwibWFpbkNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2plY3RDb250YWluZXIiLCJpZCIsInRvZG9Db250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJjcmVhdGVGb3JtIiwibWFpbkZvcm0iLCJvcHRpb24iLCJjcmVhdGVQcm9qZWN0IiwicHJvamVjdFVuaXREaXNwbGF5IiwicHJvamVjdE5hbWUiLCJwcm9qZWN0IiwidGV4dENvbnRlbnQiLCJwcm9qZWN0R3JvdXAiLCJhZGRHcm91cCIsInByb2plY3RBcnJheSIsImZvckVhY2giLCJlIiwiY3JlYXRlVG9kbyIsImRvbmVTdGF0dXNEaXNwbGF5IiwiZG9uZSIsInBhcmVudCIsInRhcmdldCIsInR5cGUiLCJjaGVja2VkIiwidG9kb1VuaXREaXNwbGF5IiwidGl0bGUiLCJkYXRlIiwicHJpb3JpdHkiLCJkZXNjcmlwdGlvbiIsInRvZG8iLCJuZXdHcm91cCIsInRvZG9Hcm91cCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImJ1aWxkRmllbGQiLCJwbGFjZWhvbGRlciIsImRlZmF1bHRWYWx1ZSIsInRleHRhcmVhIiwiaW5wdXRUeXBlIiwibmFtZSIsImluY2x1ZGVTcGFjZSIsImV4Y2hhbmdlU3BhY2VUb0Rhc2giLCJmaWVsZCIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwicHJpb3JpdHlVbml0IiwibGFiZWwiLCJwcmlvcml0eUZpZWxkIiwiZGF0YSIsImZvcm0iLCJmaWVsZHNldCIsImdldERhdGVGcm9tVG9kYXkiLCJkZWxldGVEaXNwbGF5IiwiZGVsZXRlVW5pdCIsImJ1dHRvbiIsIm9iamVjdCIsInBhcmVudE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsInJlYWREaXNwbGF5IiwiZ2V0RWRpdEJ1dHRvbkFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb2xsZWN0Rm9ybUhpZGRlbkRhdGEiLCJzcGxpdCIsImxlbmd0aCIsInVuZGVmaW5lZCIsInZhbHVlIiwiaW5jbHVkZXMiLCJnZXREb25lQnV0dG9uQWxsIiwiZ2V0UHJvamVjdExpc3QiLCJjaGlsZE5vZGVzIiwiZ2V0UHJvamVjdHNFeGNlcHRDdXJyZW50IiwiY29sbGVjdGlvbiIsImFsbExpc3QiLCJsZW4iLCJpIiwicHVzaCIsImdldEZvcm1MYXlvdXQiLCJzZWxlY3RvciIsIm9wZW5zIiwiZ2V0UmFkaW9JbmZvIiwicmFkaW9zIiwicmFkaW8iLCJnZXRGb3JtRGF0YSIsImtleSIsImV4Y2hhbmdlRGFzaFRvQ2FwaXRhbCIsImN1cnJlbnRPckxhc3RQcm9qZWN0IiwicHJvamVjdElkIiwibGFzdENoaWxkIiwiZ2V0RGVsZXRlQnV0dG9uQWxsIiwiZ2V0UmVzZXRCdXR0b24iLCJ1cGRhdGVEaXNwbGF5IiwidG9nZ2xlTmV3Rm9ybSIsInRvZ2dsZSIsInRvZ2dsZUN1cnNvclBvaW50ZXIiLCJvdGhlckJ1dHRvbk9mZiIsImFsbCIsInNoaWZ0Rm9ybURhdGEiLCJpbm5lclRleHQiLCJpbmRpY2F0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJvcGVuRm9ybVRvRWRpdCIsIm9wZW5lZEZvcm0iLCJzdGF0dXMiLCJ0b2dnbGVEb25lIiwidXBkYXRlQ3VycmVudFByb2plY3QiLCJuZXdUYWciLCJwcmV2aW91cyIsInJlbW92ZSIsIm1ha2VCbGFua0Zvcm0iLCJvYmoiLCJjcmVhdGVFbGVtZW50IiwiZWxlbSIsImFkZERhdGUiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJkZCIsIlN0cmluZyIsInBhZFN0YXJ0IiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInJlc2l6ZVRleHRhcmVhIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImZvY3VzU2V0IiwiZm9jdXMiLCJyZWxvYWRTY3JlZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVsaW1pbmF0ZUZpcnN0T2ZEYXNoIiwid29yZHMiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsImR5bmFtaWNTZXR0aW5nIiwiZGlzcGxheUludGVyZmFjZSIsImFkZFByb2plY3RHcm91cCIsImFkZFRvZG9Hcm91cCIsInRvZG9BcnJheSIsImludGVyZmFjZU1haW4iLCJwcm9qZWN0U2V0dGluZyIsImxvZ2ljSW50ZXJmYWNlIiwidG9kb1NldHRpbmciLCJnZXRUb2RvTGlzdEZvclByb2plY3QiLCJ1cGRhdGVUb2RvTGlzdEZvclByb2plY3QiLCJhZnRlclN1Ym1pc3Npb24iLCJzdWJtaXRGb3JtIiwiZmlsbEluRGF0YSIsInVwZGF0ZVVuaXQiLCJhZGRQcm9qZWN0TGlzdCIsImdldEN1cnJlbnRQcm9qZWN0IiwiYWRkVG9kb0xpc3QiLCJzZXRJbml0aWFsQ3VycmVudFByb2plY3QiLCJwcm9qZWN0T2JqIiwiZm9ybVN1Ym1pc3Npb25FdmVudCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInByb2plY3RTd2l0Y2hFdmVudCIsImJ1dHRvbnMiLCJkZWxldGVQcm9qZWN0VW5pdCIsImRlbGV0ZVRvZG9Vbml0IiwiZGVsZXRlRXZlbnQiLCJkZWxldGVBbGxCdXR0b24iLCJkZWxldGVCdG4iLCJkb25lVW5pdCIsImRvbmVFdmVudCIsImRvbmVBbGxCdG4iLCJkb25lQnRuIiwiZWRpdFByb2plY3QiLCJlZGl0VG9kbyIsImVkaXRVbml0IiwiZWRpdEV2ZW50IiwiZWRpdEFsbEJ0biIsImJ0biIsInByb2dyYW1SZXNldEV2ZW50IiwicmVzZXRCdG4iLCJudW0iLCJyZXNldFN0b3JhZ2UiLCJvcGVuRm9ybUV2ZW50Iiwib3BlbiIsImNyZWF0ZUV2ZW50cyIsImluaXQiLCJzZXRJbml0Iiwic3RhcnQiLCJzZXRUb2RvTGlzdEZvclByb2plY3QiLCJyZWFkTG9naWMiLCJkZWxldGVMb2dpYyIsInN0b3JhZ2UiLCJ1cGRhdGVMb2dpYyIsIm1haW5DcmVhdGUiLCJnZXROZXdJZCIsImdldEpzb25JbmZvRnJvbVN0b3JhZ2UiLCJuZXdOdW1iZXIiLCJOdW1iZXIiLCJhcHBlbmRKc29uSW5mb1RvU3RvcmFnZSIsInNldERlZmF1bHRQcm9qZWN0Iiwic3RvcmFnZURhdGEiLCJkZWZhdWx0UHJvamVjdCIsInNldEpzb25JbmZvVG9TdG9yYWdlIiwicHJvamVjdExhc3RJZCIsInByb2plY3RDdXJyZW50SWQiLCJjb3B5UHJvamVjdElkIiwic2F2aW5ncyIsInByb2plY3RMaXN0Iiwic2V0SW5mb0Zyb21TdG9yYWdlIiwidmFsIiwidG9kb0xpc3QiLCJ0b2RvTGlzdEZvclByb2plY3QiLCJmaWx0ZXIiLCJpZFNvcnQiLCJ1cGRhdGVkIiwicmVzZXRKc29uSW5mb1RvU3RvcmFnZSIsImlkcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwib3JpZ2luYWxEYXRhIiwidXBkYXRlIiwiT2JqZWN0IiwiZW50cmllcyIsImsiLCJ2IiwiZ2V0SXRlbSIsInBhcnNlIiwia2V5cyIsImNsZWFyIiwiZmluZCIsImlkU2V0IiwidXBkYXRpbmdEYXRhIiwic3BsaWNlIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7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UyxHQUFULEVBQWMsQ0FBZCxDQUFiO0FBQ0EsUUFBTTZLLFlBQVksR0FBRzFDLGdEQUFPLENBQUNJLHNCQUFSLENBQStCL00sSUFBL0IsQ0FBckI7QUFDQSxRQUFNd0gsR0FBRyxHQUFHNkgsWUFBWSxDQUFDRixJQUFiLENBQWtCLFVBQUF6TixDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDaEIsRUFBRixLQUFTQSxFQUFiO0FBQUEsS0FBbkIsQ0FBWjtBQUNBMk8sZ0JBQVksQ0FBQ0MsTUFBYixDQUFvQkQsWUFBWSxDQUFDRSxPQUFiLENBQXFCL0gsR0FBckIsQ0FBcEIsRUFBK0MsQ0FBL0MsRUFBa0Q5RCxJQUFsRDtBQUNBZ0ssb0RBQU8sV0FBSTFOLElBQUosVUFBUCxHQUF5QnFQLFlBQXpCO0FBQ0ExQyxvREFBTyxDQUFDVyxvQkFBUixDQUE2QjtBQUFFdE4sVUFBSSxFQUFKQSxJQUFGO0FBQVEwRCxVQUFJLEVBQUUyTDtBQUFkLEtBQTdCO0FBQ0QsR0FQRDs7QUFTQSxTQUFPO0FBQUVqRSxZQUFRLEVBQVJBLFFBQUY7QUFBWWhCLGNBQVUsRUFBVkEsVUFBWjtBQUF3QkQsY0FBVSxFQUFWQTtBQUF4QixHQUFQO0FBQ0QsQ0E3Qm1CLEVBQXBCOztBQStCZXlDLDBFQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGNyZWF0ZUZvcm0gZnJvbSAnLi9jcmVhdGVfZm9ybSc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGNvbW1vblVzYWdlID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0dGluZyA9IChjcmVhdGUpID0+IHtcbiAgICBjb25zdCB0YWcgPSB1dGlscy5jcmVhdGVUYWcoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAnc2V0dGluZycgfSk7XG4gICAgaWYoY3JlYXRlKSB0YWcuYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlVGFnKHsgdGFnOiAnaScsIGNsYXNzZXM6ICdjcmVhdGUtZm9ybSBmYXIgZmEtcGx1cy1zcXVhcmUgY3Vyc29yLXBvaW50ZXInIH0pKTtcbiAgICB0YWcuYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlVGFnKHsgdGFnOiAnaScsIGNsYXNzZXM6ICdlZGl0IGZhcyBmYS13cmVuY2ggY3Vyc29yLXBvaW50ZXInIH0pKTtcbiAgICB0YWcuYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlVGFnKHsgdGFnOiAnaScsIGNsYXNzZXM6ICdkZWxldGUgZmFyIGZhLXRpbWVzLWNpcmNsZSBjdXJzb3ItcG9pbnRlcicgfSkpO1xuICAgIHJldHVybiB0YWc7XG4gIH07XG5cbiAgY29uc3QgaGVhZGVyU2V0ID0gKGhlYWRlciwgd29yZCkgPT4ge1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnaDEnLCBjbGFzc2VzOiAnaC10aXRsZScsIHRleHQ6IHdvcmQsXG4gICAgfSkpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnaDEnLCBjbGFzc2VzOiAnY3JlYXRlLWZvcm0gY3Vyc29yLXBvaW50ZXIgdGV4dC13aGl0ZScsIHRleHQ6ICcrJyxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0R3JvdXAgPSAoc29ydCwgY29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgZ3JvdXAgPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZGl2JywgY2xhc3NlczogYCR7c29ydH0tY29udGVudC1ncm91cGAsXG4gICAgfSk7XG4gICAgaGVhZGVyU2V0KGNvbnRhaW5lciwgdXRpbHMuY2FwaXRhbGl6ZShzb3J0KSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9O1xuXG4gIHJldHVybiB7IHNldHRpbmcsIHNldEdyb3VwIH07XG59KSgpO1xuXG5jb25zdCBjcmVhdGVMYXlvdXQgPSAoKCkgPT4ge1xuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdzZWN0aW9uJywgaWQ6ICdwcm9qZWN0JywgY2xhc3NlczogJ2NvbC1tZC00IHByaW1hcnktYmcnLFxuICAgIH0pO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnc2VjdGlvbicsIGlkOiAndG9kbycsIGNsYXNzZXM6ICdjb2wtbWQtOCBzZWNvbmRhcnktYmcnLFxuICAgIH0pO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5LWJnJyk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tb25Vc2FnZS5zZXRHcm91cCgncHJvamVjdCcsIHByb2plY3RDb250YWluZXIpKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1vblVzYWdlLnNldEdyb3VwKCd0b2RvJywgdG9kb0NvbnRhaW5lcikpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybS5tYWluRm9ybSh7IG9wdGlvbjogJ3Byb2plY3QnIH0pKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1vblVzYWdlLnNldHRpbmcodHJ1ZSkpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybS5tYWluRm9ybSh7IG9wdGlvbjogJ3RvZG8nIH0pKTtcbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbiAgfTtcbiAgcmV0dXJuIHsgcmVuZGVyIH07XG59KSgpO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdFVuaXREaXNwbGF5ID0gKHsgcHJvamVjdE5hbWUsIGlkIH0pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gdXRpbHMuY3JlYXRlVGFnKHtcbiAgICAgIHRhZzogJ2g0JywgaWQsIGNsYXNzZXM6ICdwcm9qZWN0LWNvbnRlbnQgbS0wIGN1cnNvci1wb2ludGVyJyxcbiAgICB9KTtcblxuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBjb25zdCBwcm9qZWN0R3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50LWdyb3VwJyk7XG4gICAgcHJvamVjdEdyb3VwLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEdyb3VwID0gKHByb2plY3RBcnJheSkgPT4ge1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGUgPT4gcHJvamVjdFVuaXREaXNwbGF5KGUpKTtcbiAgfTtcblxuICByZXR1cm4geyBhZGRHcm91cCB9O1xufSkoKTtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRvbmVTdGF0dXNEaXNwbGF5ID0gKHsgZG9uZSwgcGFyZW50IH0pID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnaW5wdXQnLCBjbGFzc2VzOiAnZG9uZS1idG4gdmVydGljYWwtYWxpZ24tYm90dG9tIGN1cnNvci1wb2ludGVyJyxcbiAgICB9KTtcbiAgICB0YXJnZXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgaWYgKGRvbmUpIHtcbiAgICAgIHRhcmdldC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgY29uc3QgdG9kb1VuaXREaXNwbGF5ID0gKHtcbiAgICB0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBpZCwgZG9uZSxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHRvZG8gPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZGl2JywgaWQsIGNsYXNzZXM6IGB0b2RvLWNvbnRlbnQgbm8tZ3V0dGVyICR7cHJpb3JpdHl9YCxcbiAgICB9KTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKGRvbmVTdGF0dXNEaXNwbGF5KHsgZG9uZSwgcGFyZW50OiB0b2RvIH0pKTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdoNCcsXG4gICAgICBjbGFzc2VzOiAndGl0bGUgdGV4dC1ub3dyYXAgbS0wJyxcbiAgICAgIHRleHQ6IHRpdGxlLFxuICAgIH0pKTtcbiAgICB0b2RvLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogJ2RhdGUnLFxuICAgICAgdGV4dDogZGF0ZSxcbiAgICB9KSk7XG4gICAgdG9kby5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6ICdkZXNjcmlwdGlvbiB0ZXh0LW5vd3JhcCcsXG4gICAgICB0ZXh0OiBkZXNjcmlwdGlvbixcbiAgICB9KSk7XG4gICAgdG9kby5hcHBlbmRDaGlsZChjb21tb25Vc2FnZS5zZXR0aW5nKCkpO1xuICAgIHJldHVybiB0b2RvO1xuICB9O1xuXG4gIGNvbnN0IGFkZEdyb3VwID0gKG5ld0dyb3VwKSA9PiB7XG4gICAgY29uc3QgdG9kb0dyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGVudC1ncm91cCcpO1xuICAgIHdoaWxlICh0b2RvR3JvdXAuZmlyc3RDaGlsZCkge1xuICAgICAgdG9kb0dyb3VwLnJlbW92ZUNoaWxkKHRvZG9Hcm91cC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgbmV3R3JvdXAuZm9yRWFjaChlID0+IHRvZG9Hcm91cC5hcHBlbmRDaGlsZCh0b2RvVW5pdERpc3BsYXkoZSkpKTtcbiAgfTtcblxuICByZXR1cm4geyBhZGRHcm91cCB9O1xufSkoKTtcblxuZXhwb3J0IHsgY3JlYXRlTGF5b3V0LCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVUb2RvIH07XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGNyZWF0ZUZvcm0gPSAoKCkgPT4ge1xuICBjb25zdCBidWlsZEZpZWxkID0gKHtcbiAgICBwbGFjZWhvbGRlciwgdHlwZSwgZGVmYXVsdFZhbHVlLCB0ZXh0YXJlYSxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IGlucHV0VHlwZSA9IHRleHRhcmVhIHx8ICdpbnB1dCc7XG4gICAgY29uc3QgbmFtZSA9IHV0aWxzLmluY2x1ZGVTcGFjZShwbGFjZWhvbGRlcikgPyB1dGlscy5leGNoYW5nZVNwYWNlVG9EYXNoKHBsYWNlaG9sZGVyKVxuICAgICAgOiBwbGFjZWhvbGRlcjtcbiAgICBjb25zdCBmaWVsZCA9IHV0aWxzLmNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6IGBmaWVsZCAke25hbWV9YCB9KTtcbiAgICBjb25zdCBpbnB1dCA9IHV0aWxzLmNyZWF0ZVRhZyh7IHRhZzogaW5wdXRUeXBlLCBpZDogbmFtZSwgY2xhc3NlczogbmFtZSB9KTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuICAgIGlmICh0eXBlKSBpbnB1dC50eXBlID0gdHlwZTtcbiAgICBpZiAoZGVmYXVsdFZhbHVlKSBpbnB1dC5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBmaWVsZDtcbiAgfTtcblxuICBjb25zdCBwcmlvcml0eVVuaXQgPSAod29yZCwgZmllbGQsIGNoZWNrZWQpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IHV0aWxzLmNyZWF0ZVRhZyh7XG4gICAgICB0YWc6ICdpbnB1dCcsIGlkOiBgcHJpb3JpdHktJHt3b3JkfWAsIGNsYXNzZXM6ICdwcmlvcml0eScsXG4gICAgfSk7XG4gICAgaW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgaW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgaWYgKGNoZWNrZWQpIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgIGNvbnN0IGxhYmVsID0gdXRpbHMuY3JlYXRlVGFnKHsgdGFnOiAnbGFiZWwnLCB0ZXh0OiB3b3JkIH0pO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHByaW9yaXR5LSR7d29yZH1gKTtcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICB9O1xuXG4gIGNvbnN0IHByaW9yaXR5RmllbGQgPSAocHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBmaWVsZCA9IHV0aWxzLmNyZWF0ZVRhZyh7IHRhZzogJ2RpdicsIGNsYXNzZXM6ICdmaWVsZCBwcmlvcml0eScgfSk7XG4gICAgbGV0IGNoZWNrZWQgPSBbdHJ1ZSwgZmFsc2VdO1xuICAgIGlmIChwcmlvcml0eSAmJiBwcmlvcml0eSA9PT0gJ3ByaW9yaXR5LXVyZ2VudCcpIHtcbiAgICAgIGNoZWNrZWQgPSBbZmFsc2UsIHRydWVdO1xuICAgIH1cbiAgICBwcmlvcml0eVVuaXQoJ25vcm1hbCcsIGZpZWxkLCBjaGVja2VkWzBdKTtcbiAgICBwcmlvcml0eVVuaXQoJ3VyZ2VudCcsIGZpZWxkLCBjaGVja2VkWzFdKTtcbiAgICByZXR1cm4gZmllbGQ7XG4gIH07XG5cbiAgY29uc3QgbWFpbkZvcm0gPSAoeyBvcHRpb24sIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSB1dGlscy5jcmVhdGVUYWcoe1xuICAgICAgdGFnOiAnZm9ybScsIGNsYXNzZXM6IHV0aWxzLmV4Y2hhbmdlU3BhY2VUb0Rhc2goYCR7b3B0aW9ufSBmb3JtYCksXG4gICAgfSk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICBjb25zdCBmaWVsZHNldCA9IHV0aWxzLmNyZWF0ZVRhZyh7IHRhZzogJ2ZpZWxkc2V0JyB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcbiAgICBpZiAob3B0aW9uID09PSAncHJvamVjdCcpIHtcbiAgICAgIGlmIChkYXRhKSBmaWVsZHNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgcGxhY2Vob2xkZXI6ICdwcm9qZWN0IG5hbWUnLCBkZWZhdWx0VmFsdWU6IGRhdGEucHJvamVjdE5hbWUgfSkpO1xuICAgICAgZWxzZSBmaWVsZHNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHsgcGxhY2Vob2xkZXI6ICdwcm9qZWN0IG5hbWUnIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYnVpbGRGaWVsZCh7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAndGl0bGUnLCBkZWZhdWx0VmFsdWU6IGRhdGEgPyBkYXRhLnRpdGxlIDogJycsXG4gICAgICB9KSk7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdkYXRlJyxcbiAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IGRhdGEgPyBkYXRhLmRhdGUgOiB1dGlscy5nZXREYXRlRnJvbVRvZGF5KDApLFxuICAgICAgfSkpO1xuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlGaWVsZChkYXRhID8gZGF0YS5wcmlvcml0eSA6ICcnKSk7XG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChidWlsZEZpZWxkKHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgIHRleHRhcmVhOiAndGV4dGFyZWEnLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IGRhdGEgPyBkYXRhLmRlc2NyaXB0aW9uIDogJycsXG4gICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xuICB9O1xuICByZXR1cm4geyBtYWluRm9ybSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9ybTtcbiIsImNvbnN0IGRlbGV0ZURpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBkZWxldGVVbml0ID0gKHsgaWQsIGJ1dHRvbiB9KSA9PiB7XG4gICAgY29uc3Qgb2JqZWN0ID0gYnV0dG9uID8gYnV0dG9uLnBhcmVudE5vZGUucGFyZW50Tm9kZSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBvYmplY3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvYmplY3QpO1xuICAgIHJldHVybiBvYmplY3QuaWQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGVsZXRlVW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlRGlzcGxheTtcbiIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgcmVhZERpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBnZXRFZGl0QnV0dG9uQWxsID0gKGlkKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIHJldHVybiBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKTtcbiAgfTtcblxuICBjb25zdCBjb2xsZWN0Rm9ybUhpZGRlbkRhdGEgPSAoeyBkYXRhLCBmb3JtIH0pID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBmb3JtLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudC5pZC5zcGxpdCgnLScpLmxlbmd0aCAhPT0gMikgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBjbGFzc2VzID0gcGFyZW50LmNsYXNzTGlzdC52YWx1ZS5zcGxpdCgnICcpO1xuICAgIGRhdGEuZG9uZSA9IGNsYXNzZXMuaW5jbHVkZXMoJ2RvbmUnKTtcbiAgICBkYXRhLmlkID0gcGFyZW50LmlkO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IGdldERvbmVCdXR0b25BbGwgPSAoaWQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZG9uZS1idG4nKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRlbnQtZ3JvdXAnKS5jaGlsZE5vZGVzO1xuXG4gIGNvbnN0IGdldFByb2plY3RzRXhjZXB0Q3VycmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gW107XG4gICAgY29uc3QgYWxsTGlzdCA9IGdldFByb2plY3RMaXN0KCk7XG4gICAgY29uc3QgbGVuID0gYWxsTGlzdC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IGFsbExpc3RbaV0uY2xhc3NMaXN0LnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICBpZiAoIWNsYXNzZXMuaW5jbHVkZXMoJ2N1cnJlbnQtcHJvamVjdCcpKSB7XG4gICAgICAgIGNvbGxlY3Rpb24ucHVzaChhbGxMaXN0W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH07XG5cbiAgY29uc3QgZ2V0Rm9ybUxheW91dCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGNvbnN0IG9wZW5zID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnLmNyZWF0ZS1mb3JtJyk7XG4gICAgY29uc3QgZm9ybSA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICByZXR1cm4geyBmb3JtLCBvcGVucyB9O1xuICB9O1xuXG4gIGNvbnN0IGdldFJhZGlvSW5mbyA9IChpbnB1dCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHJhZGlvcyA9IGlucHV0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICByYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XG4gICAgICAgIGRhdGFbcmFkaW8ubmFtZV0gPSByYWRpby5pZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRGb3JtRGF0YSA9IChmb3JtKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZpZWxkJykuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZmllbGQucXVlcnlTZWxlY3RvcignaW5wdXQnKSB8fCBmaWVsZC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgICAgaWYgKHNlbGVjdG9yLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgZ2V0UmFkaW9JbmZvKHNlbGVjdG9yLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmV4Y2hhbmdlRGFzaFRvQ2FwaXRhbChzZWxlY3Rvci5uYW1lKTtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gc2VsZWN0b3I7XG4gICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRPckxhc3RQcm9qZWN0ID0gKHByb2plY3RJZCkgPT4ge1xuICAgIGlmIChwcm9qZWN0SWQpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcm9qZWN0SWR9YCk7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50LWdyb3VwJykuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGVudC1ncm91cCcpLmxhc3RDaGlsZDtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfTtcblxuICBjb25zdCBnZXREZWxldGVCdXR0b25BbGwgPSAoaWQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmVzZXRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8nKTtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5oLXRpdGxlJyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRFZGl0QnV0dG9uQWxsLFxuICAgIGNvbGxlY3RGb3JtSGlkZGVuRGF0YSxcbiAgICBnZXREb25lQnV0dG9uQWxsLFxuICAgIGdldFByb2plY3RMaXN0LFxuICAgIGdldFByb2plY3RzRXhjZXB0Q3VycmVudCxcbiAgICBnZXRGb3JtTGF5b3V0LFxuICAgIGdldEZvcm1EYXRhLFxuICAgIGN1cnJlbnRPckxhc3RQcm9qZWN0LFxuICAgIGdldERlbGV0ZUJ1dHRvbkFsbCxcbiAgICBnZXRSZXNldEJ1dHRvbixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlYWREaXNwbGF5O1xuIiwiaW1wb3J0IGNyZWF0ZUZvcm0gZnJvbSAnLi9jcmVhdGVfZm9ybSc7XG5cbmNvbnN0IHVwZGF0ZURpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCB0b2dnbGVOZXdGb3JtID0gKGZvcm0pID0+IHtcbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUN1cnNvclBvaW50ZXIgPSAoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2N1cnNvci1wb2ludGVyJyk7XG4gIH07XG5cbiAgY29uc3Qgb3RoZXJCdXR0b25PZmYgPSAoYnV0dG9uKSA9PiB7XG4gICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnNvci1wb2ludGVyJyk7XG4gICAgYWxsLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGlmIChlICE9PSBidXR0b24pIGUuY2xhc3NMaXN0LnRvZ2dsZSgncG9pbnRlci1ldmVudHMtbm9uZScpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNoaWZ0Rm9ybURhdGEgPSAoeyBzb3J0LCBvYmplY3QgfSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBvYmplY3QuY2xhc3NMaXN0LnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgaWYgKHNvcnQgPT09ICdwcm9qZWN0Jykge1xuICAgICAgZGF0YS5wcm9qZWN0TmFtZSA9IG9iamVjdC5pbm5lclRleHQ7XG4gICAgICBvYmplY3QuaW5uZXJUZXh0ID0gJyc7XG4gICAgfVxuICAgIGlmIChzb3J0ID09PSAndG9kbycpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG9iamVjdC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSB0YXJnZXQuY2xhc3NMaXN0WzBdO1xuICAgICAgICBjb25zdCB0ZXh0ID0gdGFyZ2V0LmlubmVyVGV4dDtcbiAgICAgICAgZGF0YVtpbmRpY2F0b3JdID0gdGV4dDtcbiAgICAgICAgdGFyZ2V0LmlubmVyVGV4dCA9ICcnO1xuICAgICAgfVxuICAgICAgb2JqZWN0LmZpcnN0Q2hpbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgaWYgKHNvcnQgPT09ICd0b2RvJykgZGF0YS5wcmlvcml0eSA9IGNsYXNzTGlzdC5pbmNsdWRlcygncHJpb3JpdHktdXJnZW50JykgPyAncHJpb3JpdHktdXJnZW50JyA6ICdwcmlvcml0eS1ub3JtYWwnO1xuICAgIHJldHVybiB7IGRhdGEgfTtcbiAgfTtcblxuICBjb25zdCBvcGVuRm9ybVRvRWRpdCA9ICh7IGlkLCBidXR0b24gfSkgPT4ge1xuICAgIGNvbnN0IG9iamVjdCA9IGJ1dHRvbiA/IGJ1dHRvbi5wYXJlbnROb2RlLnBhcmVudE5vZGUgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgY29uc3Qgc29ydCA9IG9iamVjdC5pZC5zcGxpdCgnLScpWzBdO1xuICAgIGNvbnN0IG9wZW5lZEZvcm0gPSBvYmplY3QucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIGlmIChvcGVuZWRGb3JtKSB7XG4gICAgICByZXR1cm4geyBzdGF0dXM6ICdvcGVuZWQnLCBmb3JtOiBvcGVuZWRGb3JtIH07XG4gICAgfVxuICAgIGNvbnN0IHsgZGF0YSB9ID0gc2hpZnRGb3JtRGF0YSh7IHNvcnQsIG9iamVjdCB9KTtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlRm9ybS5tYWluRm9ybSh7IG9wdGlvbjogc29ydCwgZGF0YSB9KTtcbiAgICBvYmplY3QuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgdG9nZ2xlTmV3Rm9ybShmb3JtKTtcbiAgICByZXR1cm4geyBzdGF0dXM6ICdub3JtYWwnLCBmb3JtIH07XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRG9uZSA9IChidXR0b24pID0+IHtcbiAgICBjb25zdCBvYmplY3QgPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICBvYmplY3QuY2xhc3NMaXN0LnRvZ2dsZSgnZG9uZScpO1xuICAgIHJldHVybiBvYmplY3QuaWQ7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQ3VycmVudFByb2plY3QgPSAobmV3VGFnKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGVudC1ncm91cCcpO1xuICAgIGNvbnN0IHByZXZpb3VzID0gcHJvamVjdEdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXByb2plY3QnKTtcbiAgICBpZiAocHJldmlvdXMpIHByZXZpb3VzLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtcHJvamVjdCcpO1xuICAgIG5ld1RhZy5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXByb2plY3QnKTtcbiAgICByZXR1cm4gbmV3VGFnLmlkO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VCbGFua0Zvcm0gPSAoZm9ybSkgPT4ge1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZpZWxkJykuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZmllbGQucXVlcnlTZWxlY3RvcignaW5wdXQnKSB8fCBmaWVsZC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgICAgc2VsZWN0b3IudmFsdWUgPSAnJztcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRvZ2dsZURvbmUsXG4gICAgdG9nZ2xlQ3Vyc29yUG9pbnRlcixcbiAgICB0b2dnbGVOZXdGb3JtLFxuICAgIG9wZW5Gb3JtVG9FZGl0LFxuICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0LFxuICAgIG1ha2VCbGFua0Zvcm0sXG4gICAgb3RoZXJCdXR0b25PZmYsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVEaXNwbGF5O1xuIiwiY29uc3QgdXRpbHMgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVUYWcgPSAoe1xuICAgIHRhZywgaWQsIGNsYXNzZXMsIHRleHQsXG4gIH0pID0+IHtcbiAgICBjb25zdCBvYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKGlkKSBvYmouc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBpZiAoY2xhc3NlcykgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZWxlbSA9PiBvYmouY2xhc3NMaXN0LmFkZChlbGVtKSk7XG4gICAgaWYgKHRleHQpIG9iai50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBjb25zdCBnZXREYXRlRnJvbVRvZGF5ID0gKGFkZERhdGUpID0+IHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYWRkRGF0ZSk7XG4gICAgY29uc3QgZGQgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgbW0gPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy8gSmFudWFyeSBpcyAwIVxuICAgIGNvbnN0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgZGF0ZSA9IGAke3l5eXl9LSR7bW19LSR7ZGR9YDtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfTtcblxuICBjb25zdCByZXNpemVUZXh0YXJlYSA9ICgpID0+IHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBgJHsyMCArIHRleHRhcmVhLnNjcm9sbEhlaWdodH1weGA7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZm9jdXNTZXQgPSAodGFyZ2V0KSA9PiB7XG4gICAgaWYgKHRhcmdldCkgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKTtcbiAgfTtcblxuICBjb25zdCByZWxvYWRTY3JlZW4gPSAoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cbiAgY29uc3QgZWxpbWluYXRlRmlyc3RPZkRhc2ggPSB3b3JkcyA9PiB3b3Jkcy5zcGxpdCgnLScpWzFdO1xuXG4gIGNvbnN0IGNhcGl0YWxpemUgPSB3b3JkID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xuXG4gIGNvbnN0IGV4Y2hhbmdlRGFzaFRvQ2FwaXRhbCA9ICh3b3JkKSA9PiB7XG4gICAgY29uc3Qgd29yZHMgPSB3b3JkLnNwbGl0KCctJyk7XG4gICAgaWYgKHdvcmRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHdvcmRzWzFdID0gY2FwaXRhbGl6ZSh3b3Jkc1sxXSk7XG4gICAgfVxuICAgIHJldHVybiB3b3Jkcy5qb2luKCcnKTtcbiAgfTtcblxuICBjb25zdCBleGNoYW5nZVNwYWNlVG9EYXNoID0gd29yZCA9PiB3b3JkLnNwbGl0KCcgJykuam9pbignLScpO1xuXG4gIGNvbnN0IGluY2x1ZGVTcGFjZSA9IHdvcmQgPT4gd29yZC5zcGxpdCgnICcpLmxlbmd0aCA+IDE7XG5cbiAgY29uc3QgZHluYW1pY1NldHRpbmcgPSAoKSA9PiB7XG4gICAgcmVzaXplVGV4dGFyZWEoKTtcbiAgICBmb2N1c1NldCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlVGFnLFxuICAgIGdldERhdGVGcm9tVG9kYXksXG4gICAgZWxpbWluYXRlRmlyc3RPZkRhc2gsXG4gICAgZXhjaGFuZ2VEYXNoVG9DYXBpdGFsLFxuICAgIGV4Y2hhbmdlU3BhY2VUb0Rhc2gsXG4gICAgaW5jbHVkZVNwYWNlLFxuICAgIHJlc2l6ZVRleHRhcmVhLFxuICAgIGZvY3VzU2V0LFxuICAgIHJlbG9hZFNjcmVlbixcbiAgICBkeW5hbWljU2V0dGluZyxcbiAgICBjYXBpdGFsaXplLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG4iLCJpbXBvcnQgeyBjcmVhdGVMYXlvdXQsIGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRvZG8gfSBmcm9tICcuL2Rpc3BsYXkvY3JlYXRlX2Rpc3BsYXknO1xuaW1wb3J0IHJlYWREaXNwbGF5IGZyb20gJy4vZGlzcGxheS9yZWFkX2Rpc3BsYXknO1xuaW1wb3J0IHVwZGF0ZURpc3BsYXkgZnJvbSAnLi9kaXNwbGF5L3VwZGF0ZV9kaXNwbGF5JztcbmltcG9ydCBkZWxldGVEaXNwbGF5IGZyb20gJy4vZGlzcGxheS9kZWxldGVfZGlzcGxheSc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi9kaXNwbGF5L3V0aWxzJztcblxuY29uc3QgZGlzcGxheUludGVyZmFjZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RHcm91cCA9IHByb2plY3RBcnJheSA9PiBjcmVhdGVQcm9qZWN0LmFkZEdyb3VwKHByb2plY3RBcnJheSk7XG4gIGNvbnN0IGFkZFRvZG9Hcm91cCA9IHRvZG9BcnJheSA9PiBjcmVhdGVUb2RvLmFkZEdyb3VwKHRvZG9BcnJheSk7XG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IGNyZWF0ZUxheW91dC5yZW5kZXIoKTtcblxuICBjb25zdCBnZXRGb3JtTGF5b3V0ID0gaWQgPT4gcmVhZERpc3BsYXkuZ2V0Rm9ybUxheW91dChpZCk7XG4gIGNvbnN0IGdldEZvcm1EYXRhID0gKGZvcm0sIHByb2plY3RJZCkgPT4gcmVhZERpc3BsYXkuZ2V0Rm9ybURhdGEoZm9ybSwgcHJvamVjdElkKTtcbiAgY29uc3QgbWFrZUJsYW5rRm9ybSA9IGZvcm0gPT4gdXBkYXRlRGlzcGxheS5tYWtlQmxhbmtGb3JtKGZvcm0pO1xuXG4gIGNvbnN0IG90aGVyQnV0dG9uT2ZmID0gYnV0dG9uID0+IHVwZGF0ZURpc3BsYXkub3RoZXJCdXR0b25PZmYoYnV0dG9uKTtcbiAgY29uc3QgZ2V0RGVsZXRlQnV0dG9uQWxsID0gaWQgPT4gcmVhZERpc3BsYXkuZ2V0RGVsZXRlQnV0dG9uQWxsKGlkKTtcbiAgY29uc3QgZGVsZXRlVW5pdCA9IG9iaiA9PiBkZWxldGVEaXNwbGF5LmRlbGV0ZVVuaXQob2JqKTtcbiAgY29uc3QgZ2V0UmVzZXRCdXR0b24gPSAoKSA9PiByZWFkRGlzcGxheS5nZXRSZXNldEJ1dHRvbigpO1xuXG4gIGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4gdXBkYXRlRGlzcGxheS5nZXRQcm9qZWN0TGlzdCgpO1xuICBjb25zdCB1cGRhdGVDdXJyZW50UHJvamVjdCA9IG5ld1RhZyA9PiB1cGRhdGVEaXNwbGF5LnVwZGF0ZUN1cnJlbnRQcm9qZWN0KG5ld1RhZyk7XG4gIGNvbnN0IGN1cnJlbnRPckxhc3RQcm9qZWN0ID0gcHJvamVjdElkID0+IHJlYWREaXNwbGF5LmN1cnJlbnRPckxhc3RQcm9qZWN0KHByb2plY3RJZCk7XG4gIGNvbnN0IHRvZ2dsZU5ld0Zvcm0gPSBmb3JtID0+IHVwZGF0ZURpc3BsYXkudG9nZ2xlTmV3Rm9ybShmb3JtKTtcbiAgY29uc3QgdG9nZ2xlQ3Vyc29yUG9pbnRlciA9IGJ1dHRvbiA9PiB1cGRhdGVEaXNwbGF5LnRvZ2dsZUN1cnNvclBvaW50ZXIoYnV0dG9uKTtcblxuICBjb25zdCBnZXREb25lQnV0dG9uQWxsID0gaWQgPT4gcmVhZERpc3BsYXkuZ2V0RG9uZUJ1dHRvbkFsbChpZCk7XG4gIGNvbnN0IHRvZ2dsZURvbmUgPSBidXR0b24gPT4gdXBkYXRlRGlzcGxheS50b2dnbGVEb25lKGJ1dHRvbik7XG4gIGNvbnN0IGdldEVkaXRCdXR0b25BbGwgPSBpZCA9PiByZWFkRGlzcGxheS5nZXRFZGl0QnV0dG9uQWxsKGlkKTtcbiAgY29uc3Qgb3BlbkZvcm1Ub0VkaXQgPSBvYmogPT4gdXBkYXRlRGlzcGxheS5vcGVuRm9ybVRvRWRpdChvYmopO1xuICBjb25zdCBjb2xsZWN0Rm9ybUhpZGRlbkRhdGEgPSBvYmogPT4gcmVhZERpc3BsYXkuY29sbGVjdEZvcm1IaWRkZW5EYXRhKG9iaik7XG4gIGNvbnN0IGdldFByb2plY3RzRXhjZXB0Q3VycmVudCA9ICgpID0+IHJlYWREaXNwbGF5LmdldFByb2plY3RzRXhjZXB0Q3VycmVudCgpO1xuXG4gIGNvbnN0IGZvY3VzU2V0ID0gdGFyZ2V0ID0+IHV0aWxzLmZvY3VzU2V0KHRhcmdldCk7XG4gIGNvbnN0IHJlbG9hZFNjcmVlbiA9ICgpID0+IHV0aWxzLnJlbG9hZFNjcmVlbigpO1xuICBjb25zdCBkeW5hbWljU2V0dGluZyA9ICgpID0+IHV0aWxzLmR5bmFtaWNTZXR0aW5nKCk7XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gICAgYWRkVG9kb0dyb3VwLFxuICAgIGFkZFByb2plY3RHcm91cCxcbiAgICBnZXRGb3JtTGF5b3V0LFxuICAgIGdldEZvcm1EYXRhLFxuICAgIG1ha2VCbGFua0Zvcm0sXG4gICAgb3RoZXJCdXR0b25PZmYsXG4gICAgZ2V0RGVsZXRlQnV0dG9uQWxsLFxuICAgIGRlbGV0ZVVuaXQsXG4gICAgZ2V0UmVzZXRCdXR0b24sXG4gICAgZ2V0UHJvamVjdExpc3QsXG4gICAgdXBkYXRlQ3VycmVudFByb2plY3QsXG4gICAgY3VycmVudE9yTGFzdFByb2plY3QsXG4gICAgZ2V0RG9uZUJ1dHRvbkFsbCxcbiAgICB0b2dnbGVEb25lLFxuICAgIHRvZ2dsZU5ld0Zvcm0sXG4gICAgdG9nZ2xlQ3Vyc29yUG9pbnRlcixcbiAgICBnZXRFZGl0QnV0dG9uQWxsLFxuICAgIG9wZW5Gb3JtVG9FZGl0LFxuICAgIGNvbGxlY3RGb3JtSGlkZGVuRGF0YSxcbiAgICBmb2N1c1NldCxcbiAgICByZWxvYWRTY3JlZW4sXG4gICAgZ2V0UHJvamVjdHNFeGNlcHRDdXJyZW50LFxuICAgIGR5bmFtaWNTZXR0aW5nLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUludGVyZmFjZTtcbiIsImltcG9ydCBkaXNwbGF5SW50ZXJmYWNlIGZyb20gJy4vZGlzcGxheV9pbnRlcmZhY2UnO1xuaW1wb3J0IGxvZ2ljSW50ZXJmYWNlIGZyb20gJy4vbG9naWNfaW50ZXJmYWNlJztcblxuY29uc3QgaW50ZXJmYWNlTWFpbiA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RTZXR0aW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IGxvZ2ljSW50ZXJmYWNlLmdldFByb2plY3RMaXN0KCk7XG4gICAgZGlzcGxheUludGVyZmFjZS5hZGRQcm9qZWN0R3JvdXAocHJvamVjdEFycmF5KTtcbiAgfTtcblxuICBjb25zdCB0b2RvU2V0dGluZyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvQXJyYXkgPSBsb2dpY0ludGVyZmFjZS5nZXRUb2RvTGlzdEZvclByb2plY3QoKTtcbiAgICBkaXNwbGF5SW50ZXJmYWNlLmFkZFRvZG9Hcm91cCh0b2RvQXJyYXkpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUN1cnJlbnRQcm9qZWN0ID0gKGJ1dHRvbikgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGRpc3BsYXlJbnRlcmZhY2UudXBkYXRlQ3VycmVudFByb2plY3QoYnV0dG9uKTtcbiAgICBsb2dpY0ludGVyZmFjZS51cGRhdGVUb2RvTGlzdEZvclByb2plY3QocHJvamVjdElkKTtcbiAgICBkaXNwbGF5SW50ZXJmYWNlLnRvZ2dsZUN1cnNvclBvaW50ZXIoYnV0dG9uKTtcbiAgICB0b2RvU2V0dGluZygpO1xuICB9O1xuXG4gIGNvbnN0IGFmdGVyU3VibWlzc2lvbiA9IChmb3JtKSA9PiB7XG4gICAgZGlzcGxheUludGVyZmFjZS5tYWtlQmxhbmtGb3JtKGZvcm0pO1xuICAgIGRpc3BsYXlJbnRlcmZhY2UucmVsb2FkU2NyZWVuKCk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0Rm9ybSA9IChzb3J0LCBmb3JtKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGRpc3BsYXlJbnRlcmZhY2UuZ2V0Rm9ybURhdGEoZm9ybSk7XG4gICAgaWYgKGRpc3BsYXlJbnRlcmZhY2UuY29sbGVjdEZvcm1IaWRkZW5EYXRhKHsgZGF0YSwgZm9ybSB9KSkge1xuICAgICAgbG9naWNJbnRlcmZhY2UuZmlsbEluRGF0YSh7IGRhdGEgfSk7XG4gICAgICBsb2dpY0ludGVyZmFjZS51cGRhdGVVbml0KHsgaWQ6IGRhdGEuaWQsIGRhdGEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzb3J0ID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgbG9naWNJbnRlcmZhY2UuYWRkUHJvamVjdExpc3QoZGF0YSk7XG4gICAgICB9XG4gICAgICBpZiAoc29ydCA9PT0gJ3RvZG8nKSB7XG4gICAgICAgIGRhdGEucHJvamVjdElkID0gbG9naWNJbnRlcmZhY2UuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICAgICAgbG9naWNJbnRlcmZhY2UuYWRkVG9kb0xpc3QoZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICAgIGFmdGVyU3VibWlzc2lvbihmb3JtKTtcbiAgfTtcblxuICBjb25zdCBzZXRJbml0aWFsQ3VycmVudFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gbG9naWNJbnRlcmZhY2UuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCBwcm9qZWN0T2JqID0gZGlzcGxheUludGVyZmFjZS5jdXJyZW50T3JMYXN0UHJvamVjdChwcm9qZWN0SWQpO1xuICAgIGlmIChwcm9qZWN0T2JqKSB1cGRhdGVDdXJyZW50UHJvamVjdChwcm9qZWN0T2JqKTtcbiAgfTtcblxuICBjb25zdCBmb3JtU3VibWlzc2lvbkV2ZW50ID0gKGZvcm0sIHNvcnQpID0+IHtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3VibWl0Rm9ybShzb3J0LCBmb3JtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0U3dpdGNoRXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRpc3BsYXlJbnRlcmZhY2UuZ2V0UHJvamVjdHNFeGNlcHRDdXJyZW50KCk7XG4gICAgaWYgKGJ1dHRvbnMubGVuZ3RoID4gMCkge1xuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KGJ1dHRvbik7XG4gICAgICAgICAgZGlzcGxheUludGVyZmFjZS5yZWxvYWRTY3JlZW4oKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdFVuaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgaWQgPSBsb2dpY0ludGVyZmFjZS5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGRpc3BsYXlJbnRlcmZhY2UuZGVsZXRlVW5pdCh7IGlkIH0pO1xuICAgIGxvZ2ljSW50ZXJmYWNlLmRlbGV0ZVVuaXQoaWQpO1xuICAgIGRpc3BsYXlJbnRlcmZhY2UucmVsb2FkU2NyZWVuKCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kb1VuaXQgPSAoYnV0dG9uKSA9PiB7XG4gICAgY29uc3QgaWQgPSBkaXNwbGF5SW50ZXJmYWNlLmRlbGV0ZVVuaXQoeyBidXR0b24gfSk7XG4gICAgbG9naWNJbnRlcmZhY2UuZGVsZXRlVW5pdChpZCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlRXZlbnQgPSAod29yZCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZUFsbEJ1dHRvbiA9IGRpc3BsYXlJbnRlcmZhY2UuZ2V0RGVsZXRlQnV0dG9uQWxsKHdvcmQpO1xuICAgIGRlbGV0ZUFsbEJ1dHRvbi5mb3JFYWNoKChkZWxldGVCdG4pID0+IHtcbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHdvcmQgPT09ICdwcm9qZWN0JykgZGVsZXRlUHJvamVjdFVuaXQoKTtcbiAgICAgICAgaWYgKHdvcmQgPT09ICd0b2RvJykgZGVsZXRlVG9kb1VuaXQoZGVsZXRlQnRuKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRvbmVVbml0ID0gKGJ1dHRvbikgPT4ge1xuICAgIGNvbnN0IGlkID0gZGlzcGxheUludGVyZmFjZS50b2dnbGVEb25lKGJ1dHRvbik7XG4gICAgbG9naWNJbnRlcmZhY2UuZG9uZVVuaXQoaWQpO1xuICB9O1xuXG4gIGNvbnN0IGRvbmVFdmVudCA9ICh3b3JkKSA9PiB7XG4gICAgY29uc3QgZG9uZUFsbEJ0biA9IGRpc3BsYXlJbnRlcmZhY2UuZ2V0RG9uZUJ1dHRvbkFsbCh3b3JkKTtcbiAgICBkb25lQWxsQnRuLmZvckVhY2goKGRvbmVCdG4pID0+IHtcbiAgICAgIGRvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvbmVVbml0KGRvbmVCdG4pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgaWQgPSBsb2dpY0ludGVyZmFjZS5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIHJldHVybiBkaXNwbGF5SW50ZXJmYWNlLm9wZW5Gb3JtVG9FZGl0KHsgaWQgfSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvZG8gPSBidXR0b24gPT4gZGlzcGxheUludGVyZmFjZS5vcGVuRm9ybVRvRWRpdCh7IGJ1dHRvbiB9KTtcblxuICBjb25zdCBlZGl0VW5pdCA9IChzb3J0LCBidXR0b24pID0+IHtcbiAgICBkaXNwbGF5SW50ZXJmYWNlLm90aGVyQnV0dG9uT2ZmKGJ1dHRvbik7XG4gICAgY29uc3QgeyBzdGF0dXMsIGZvcm0gfSA9IChzb3J0ID09PSAncHJvamVjdCcpID8gZWRpdFByb2plY3QoKSA6IGVkaXRUb2RvKGJ1dHRvbik7XG4gICAgaWYgKHN0YXR1cyA9PT0gJ29wZW5lZCcpIHtcbiAgICAgIHN1Ym1pdEZvcm0oc29ydCwgZm9ybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1TdWJtaXNzaW9uRXZlbnQoZm9ybSwgc29ydCk7XG4gICAgICBkaXNwbGF5SW50ZXJmYWNlLmZvY3VzU2V0KGZvcm0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBlZGl0RXZlbnQgPSAoc29ydCkgPT4ge1xuICAgIGNvbnN0IGVkaXRBbGxCdG4gPSBkaXNwbGF5SW50ZXJmYWNlLmdldEVkaXRCdXR0b25BbGwoc29ydCk7XG4gICAgZWRpdEFsbEJ0bi5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgZWRpdFVuaXQoc29ydCwgYnRuKTsgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcHJvZ3JhbVJlc2V0RXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzZXRCdG4gPSBkaXNwbGF5SW50ZXJmYWNlLmdldFJlc2V0QnV0dG9uKCk7XG4gICAgbGV0IG51bSA9IDA7XG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBudW0gKz0gMTtcbiAgICAgIGlmIChudW0gPCA3KSByZXR1cm47IC8vIHJlc2V0IHNob3VsZCBiZSBoaWRkZW4gZnJvbSB1c2VyXG4gICAgICBsb2dpY0ludGVyZmFjZS5yZXNldFN0b3JhZ2UoKTtcbiAgICAgIGRpc3BsYXlJbnRlcmZhY2UucmVsb2FkU2NyZWVuKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb3BlbkZvcm1FdmVudCA9IChvcGVucywgZm9ybSkgPT4ge1xuICAgIG9wZW5zLmZvckVhY2gob3BlbiA9PiBvcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGlzcGxheUludGVyZmFjZS5vdGhlckJ1dHRvbk9mZihvcGVuKTtcbiAgICAgIGRpc3BsYXlJbnRlcmZhY2UudG9nZ2xlTmV3Rm9ybShmb3JtKTtcbiAgICAgIGRpc3BsYXlJbnRlcmZhY2UuZm9jdXNTZXQoZm9ybSk7XG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUV2ZW50cyA9ICh3b3JkKSA9PiB7XG4gICAgY29uc3QgeyBvcGVucywgZm9ybSB9ID0gZGlzcGxheUludGVyZmFjZS5nZXRGb3JtTGF5b3V0KHdvcmQpO1xuICAgIG9wZW5Gb3JtRXZlbnQob3BlbnMsIGZvcm0pO1xuICAgIGZvcm1TdWJtaXNzaW9uRXZlbnQoZm9ybSwgd29yZCk7XG4gICAgZWRpdEV2ZW50KHdvcmQpO1xuICAgIGRlbGV0ZUV2ZW50KHdvcmQpO1xuICAgIGlmICh3b3JkID09PSAndG9kbycpIHtcbiAgICAgIGRvbmVFdmVudCh3b3JkKTtcbiAgICB9XG4gICAgaWYgKHdvcmQgPT09ICdwcm9qZWN0Jykge1xuICAgICAgcHJvamVjdFN3aXRjaEV2ZW50KCk7XG4gICAgICBwcm9ncmFtUmVzZXRFdmVudCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGxvZ2ljSW50ZXJmYWNlLnNldEluaXQoKTtcbiAgICBkaXNwbGF5SW50ZXJmYWNlLnJlbmRlcigpO1xuICAgIGRpc3BsYXlJbnRlcmZhY2UuZHluYW1pY1NldHRpbmcoKTtcbiAgICBwcm9qZWN0U2V0dGluZygpO1xuICAgIHNldEluaXRpYWxDdXJyZW50UHJvamVjdCgpO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIGluaXQoKTtcbiAgICBbJ3Byb2plY3QnLCAndG9kbyddLmZvckVhY2god29yZCA9PiBjcmVhdGVFdmVudHMod29yZCkpO1xuICB9O1xuXG4gIHJldHVybiB7IHN0YXJ0IH07XG59KSgpO1xuXG5pbnRlcmZhY2VNYWluLnN0YXJ0KCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBjcmVhdGVUb2RvLCBtYWluQ3JlYXRlIH0gZnJvbSAnLi9sb2dpY3MvY3JlYXRlX2xvZ2ljJztcbmltcG9ydCByZWFkTG9naWMgZnJvbSAnLi9sb2dpY3MvcmVhZF9sb2dpYyc7XG5pbXBvcnQgZGVsZXRlTG9naWMgZnJvbSAnLi9sb2dpY3MvZGVsZXRlX2xvZ2ljJztcbmltcG9ydCB1cGRhdGVMb2dpYyBmcm9tICcuL2xvZ2ljcy91cGRhdGVfbG9naWMnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9sb2dpY3Mvc3RvcmFnZSc7XG5cbmNvbnN0IGxvZ2ljSW50ZXJmYWNlID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdExpc3QgPSBkYXRhID0+IGNyZWF0ZVByb2plY3QuYWRkUHJvamVjdExpc3QoZGF0YSk7XG4gIGNvbnN0IGFkZFRvZG9MaXN0ID0gZGF0YSA9PiBjcmVhdGVUb2RvLmFkZFRvZG9MaXN0KGRhdGEpO1xuICBjb25zdCB1cGRhdGVUb2RvTGlzdEZvclByb2plY3QgPSBpZCA9PiBjcmVhdGVUb2RvLnNldFRvZG9MaXN0Rm9yUHJvamVjdChpZCk7XG5cbiAgY29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSAoKSA9PiByZWFkTG9naWMuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiByZWFkTG9naWMuZ2V0UHJvamVjdExpc3QoKTtcbiAgY29uc3QgZ2V0VG9kb0xpc3RGb3JQcm9qZWN0ID0gKCkgPT4gcmVhZExvZ2ljLmdldFRvZG9MaXN0Rm9yUHJvamVjdCgpO1xuXG4gIGNvbnN0IGRlbGV0ZVVuaXQgPSBpZCA9PiBkZWxldGVMb2dpYy5kZWxldGVVbml0KGlkKTtcbiAgY29uc3QgcmVzZXRTdG9yYWdlID0gKCkgPT4gc3RvcmFnZS5yZXNldFN0b3JhZ2UoKTtcblxuICBjb25zdCBmaWxsSW5EYXRhID0gZGF0YSA9PiB1cGRhdGVMb2dpYy5maWxsSW5EYXRhKGRhdGEpO1xuICBjb25zdCBkb25lVW5pdCA9IGlkID0+IHVwZGF0ZUxvZ2ljLmRvbmVVbml0KGlkKTtcbiAgY29uc3QgdXBkYXRlVW5pdCA9IG9iaiA9PiB1cGRhdGVMb2dpYy51cGRhdGVVbml0KG9iaik7XG5cbiAgY29uc3Qgc2V0SW5pdCA9ICgpID0+IG1haW5DcmVhdGUuc2V0SW5pdCgpO1xuXG4gIHJldHVybiB7XG4gICAgc2V0SW5pdCxcbiAgICBhZGRQcm9qZWN0TGlzdCxcbiAgICBhZGRUb2RvTGlzdCxcbiAgICBnZXRDdXJyZW50UHJvamVjdCxcbiAgICByZXNldFN0b3JhZ2UsXG4gICAgZ2V0UHJvamVjdExpc3QsXG4gICAgZ2V0VG9kb0xpc3RGb3JQcm9qZWN0LFxuICAgIHVwZGF0ZVRvZG9MaXN0Rm9yUHJvamVjdCxcbiAgICBkZWxldGVVbml0LFxuICAgIGZpbGxJbkRhdGEsXG4gICAgZG9uZVVuaXQsXG4gICAgdXBkYXRlVW5pdCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2ljSW50ZXJmYWNlO1xuIiwiaW1wb3J0IHsgcHJvamVjdCwgdG9kbywgc2F2aW5ncyB9IGZyb20gJy4vb2JqZWN0cyc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5jb25zdCBnZXROZXdJZCA9IChzb3J0KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7fTtcbiAgbGV0IGlkO1xuICBpZiAoc3RvcmFnZS5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKCdpZHMnKSAmJiBzdG9yYWdlLmdldEpzb25JbmZvRnJvbVN0b3JhZ2UoJ2lkcycpW2Ake3NvcnR9TGFzdElkYF0pIHtcbiAgICBpZCA9IHN0b3JhZ2UuZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZSgnaWRzJylbYCR7c29ydH1MYXN0SWRgXTtcbiAgICBjb25zdCBuZXdOdW1iZXIgPSBOdW1iZXIoaWQuc3BsaXQoJy0nKVsxXSkgKyAxO1xuICAgIGlkID0gYCR7c29ydH0tJHtuZXdOdW1iZXJ9YDtcbiAgfSBlbHNlIHtcbiAgICBpZCA9IGAke3NvcnR9LTFgO1xuICB9XG4gIGRhdGFbYCR7c29ydH1MYXN0SWRgXSA9IGlkO1xuICBkYXRhW2Ake3NvcnR9Q3VycmVudElkYF0gPSBpZDtcbiAgc3RvcmFnZS5hcHBlbmRKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQ6ICdpZHMnLCBkYXRhIH0pO1xuICByZXR1cm4gaWQ7XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0RGVmYXVsdFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZURhdGEgPSBzdG9yYWdlLmdldEpzb25JbmZvRnJvbVN0b3JhZ2UoJ3Byb2plY3QnKTtcbiAgICBpZiAoIXN0b3JhZ2VEYXRhIHx8IHN0b3JhZ2VEYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBbXG4gICAgICAgIHsgcHJvamVjdE5hbWU6ICdkZWZhdWx0IHByb2plY3QnLCBpZDogJ3Byb2plY3QtMScgfSxcbiAgICAgIF07XG4gICAgICBzdG9yYWdlLnNldEpzb25JbmZvVG9TdG9yYWdlKHsgc29ydDogJ3Byb2plY3QnLCBkYXRhOiBkZWZhdWx0UHJvamVjdCB9KTtcbiAgICAgIHN0b3JhZ2UuYXBwZW5kSnNvbkluZm9Ub1N0b3JhZ2Uoe1xuICAgICAgICBzb3J0OiAnaWRzJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHByb2plY3RMYXN0SWQ6IGRlZmF1bHRQcm9qZWN0WzBdLmlkLFxuICAgICAgICAgIHByb2plY3RDdXJyZW50SWQ6IGRlZmF1bHRQcm9qZWN0WzBdLmlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3RMaXN0ID0gKHsgcHJvamVjdE5hbWUsIGlkIH0pID0+IHtcbiAgICBjb25zdCBjb3B5UHJvamVjdElkID0gaWQgfHwgZ2V0TmV3SWQoJ3Byb2plY3QnKTtcbiAgICBzYXZpbmdzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCh7IHByb2plY3ROYW1lLCBpZDogY29weVByb2plY3RJZCB9KSk7XG4gICAgc3RvcmFnZS5zZXRKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQ6ICdwcm9qZWN0JywgZGF0YTogc2F2aW5ncy5wcm9qZWN0TGlzdCB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRJbmZvRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFsID0gc3RvcmFnZS5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKCdwcm9qZWN0Jyk7XG4gICAgaWYgKHZhbCkgc2F2aW5ncy5wcm9qZWN0TGlzdCA9IHZhbDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFByb2plY3RMaXN0LCBzZXRJbmZvRnJvbVN0b3JhZ2UsIHNldERlZmF1bHRQcm9qZWN0LFxuICB9O1xufSkoKTtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFRvZG9MaXN0ID0gKGRhdGEpID0+IHtcbiAgICBpZiAoIWRhdGEuaWQpIGRhdGEuaWQgPSBnZXROZXdJZCgndG9kbycpO1xuICAgIHNhdmluZ3MudG9kb0xpc3QucHVzaCh0b2RvKGRhdGEpKTtcbiAgICBzdG9yYWdlLnNldEpzb25JbmZvVG9TdG9yYWdlKHsgc29ydDogJ3RvZG8nLCBkYXRhOiBzYXZpbmdzLnRvZG9MaXN0IH0pO1xuICB9O1xuXG4gIGNvbnN0IHNldEluZm9Gcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB2YWwgPSBzdG9yYWdlLmdldEpzb25JbmZvRnJvbVN0b3JhZ2UoJ3RvZG8nKTtcbiAgICBpZiAodmFsKSBzYXZpbmdzLnRvZG9MaXN0ID0gdmFsO1xuICB9O1xuXG4gIGNvbnN0IHNldFRvZG9MaXN0Rm9yUHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICBzYXZpbmdzLnRvZG9MaXN0Rm9yUHJvamVjdCA9IHNhdmluZ3MudG9kb0xpc3QuZmlsdGVyKGUgPT4gZS5wcm9qZWN0SWQgPT09IHByb2plY3RJZCk7XG4gICAgc3RvcmFnZS5hcHBlbmRKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQ6ICdpZHMnLCBkYXRhOiB7IHByb2plY3RDdXJyZW50SWQ6IHByb2plY3RJZCB9IH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkVG9kb0xpc3QsIHNldFRvZG9MaXN0Rm9yUHJvamVjdCwgc2V0SW5mb0Zyb21TdG9yYWdlLFxuICB9O1xufSkoKTtcblxuY29uc3QgbWFpbkNyZWF0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldEluaXQgPSAoKSA9PiB7XG4gICAgY3JlYXRlUHJvamVjdC5zZXREZWZhdWx0UHJvamVjdCgpO1xuICAgIGNyZWF0ZVByb2plY3Quc2V0SW5mb0Zyb21TdG9yYWdlKCk7XG4gICAgY3JlYXRlVG9kby5zZXRJbmZvRnJvbVN0b3JhZ2UoKTtcbiAgfTtcblxuICByZXR1cm4geyBzZXRJbml0LCBnZXROZXdJZCB9O1xufSkoKTtcblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgY3JlYXRlVG9kbywgbWFpbkNyZWF0ZSB9O1xuIiwiaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7IHNhdmluZ3MgfSBmcm9tICcuL29iamVjdHMnO1xuXG5jb25zdCBkZWxldGVMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZVRvZG9Vbml0ID0gKGlkU29ydCwgaWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gc3RvcmFnZS5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKCd0b2RvJyk7XG4gICAgY29uc3QgdXBkYXRlZCA9IChkYXRhID8gZGF0YS5maWx0ZXIoZSA9PiBlW2lkU29ydF0gIT09IGlkKSA6IFtdKTtcbiAgICBzYXZpbmdzLnRvZG9MaXN0ID0gdXBkYXRlZDtcbiAgICBzdG9yYWdlLnNldEpzb25JbmZvVG9TdG9yYWdlKHsgc29ydDogJ3RvZG8nLCBkYXRhOiB1cGRhdGVkIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3RVbml0ID0gKGlkU29ydCwgaWQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gc3RvcmFnZS5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKCdwcm9qZWN0Jyk7XG4gICAgY29uc3QgdXBkYXRlZCA9IChkYXRhID8gZGF0YS5maWx0ZXIoZSA9PiBlLmlkICE9PSBpZCkgOiBbXSk7XG4gICAgc2F2aW5ncy5wcm9qZWN0TGlzdCA9IHVwZGF0ZWQ7XG4gICAgc3RvcmFnZS5zZXRKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQ6ICdwcm9qZWN0JywgZGF0YTogdXBkYXRlZCB9KTtcbiAgICBkZWxldGVUb2RvVW5pdCgncHJvamVjdElkJywgaWQpO1xuICAgIHN0b3JhZ2UucmVzZXRKc29uSW5mb1RvU3RvcmFnZSh7IHNvcnQ6ICdpZHMnLCBkYXRhOiB7IHByb2plY3RDdXJyZW50SWQ6IG51bGwgfSB9KTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVVbml0ID0gKGlkKSA9PiB7XG4gICAgY29uc3Qgc29ydCA9IGlkLnNwbGl0KCctJylbMF07XG4gICAgaWYgKHNvcnQgPT09ICd0b2RvJykgZGVsZXRlVG9kb1VuaXQoJ2lkJywgaWQpO1xuICAgIGlmIChzb3J0ID09PSAncHJvamVjdCcpIGRlbGV0ZVByb2plY3RVbml0KCdpZCcsIGlkKTtcbiAgfTtcblxuICByZXR1cm4geyBkZWxldGVVbml0IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVMb2dpYztcbiIsImNvbnN0IHByb2plY3QgPSAoeyBwcm9qZWN0TmFtZSwgaWQgfSkgPT4gKHsgcHJvamVjdE5hbWUsIGlkIH0pO1xuY29uc3QgdG9kbyA9ICh7XG4gIHRpdGxlLCBwcm9qZWN0SWQsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaWQsIGRvbmUgPSBmYWxzZSxcbn0pID0+ICh7XG4gIHRpdGxlLCBwcm9qZWN0SWQsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaWQsIGRvbmUsXG59KTtcblxuY29uc3Qgc2F2aW5ncyA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gW107XG4gIGNvbnN0IHRvZG9MaXN0ID0gW107XG4gIGNvbnN0IHRvZG9MaXN0Rm9yUHJvamVjdCA9IFtdO1xuICByZXR1cm4geyBwcm9qZWN0TGlzdCwgdG9kb0xpc3QsIHRvZG9MaXN0Rm9yUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IHtcbiAgcHJvamVjdCwgdG9kbywgc2F2aW5ncyxcbn07XG4iLCJpbXBvcnQgeyBzYXZpbmdzIH0gZnJvbSAnLi9vYmplY3RzJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5cbmNvbnN0IHJlYWRMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlkcyA9IHN0b3JhZ2UuZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZSgnaWRzJyk7XG4gICAgaWYgKCFpZHMpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGlkcy5wcm9qZWN0Q3VycmVudElkO1xuICB9O1xuICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHNhdmluZ3MucHJvamVjdExpc3Q7XG4gIGNvbnN0IGdldFRvZG9MaXN0Rm9yUHJvamVjdCA9ICgpID0+IHNhdmluZ3MudG9kb0xpc3RGb3JQcm9qZWN0O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Q3VycmVudFByb2plY3QsIGdldFByb2plY3RMaXN0LCBnZXRUb2RvTGlzdEZvclByb2plY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCByZWFkTG9naWM7XG4iLCJjb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0SnNvbkluZm9Ub1N0b3JhZ2UgPSAoeyBzb3J0LCBkYXRhIH0pID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oc29ydCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZEpzb25JbmZvVG9TdG9yYWdlID0gKHsgc29ydCwgZGF0YSB9KSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luYWxEYXRhID0gc3RvcmFnZS5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKHNvcnQpO1xuICAgIGNvbnN0IHVwZGF0ZSA9IG9yaWdpbmFsRGF0YSB8fCB7fTtcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xuICAgICAgdXBkYXRlW2tdID0gdjtcbiAgICB9XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHNvcnQsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGdldEpzb25JbmZvRnJvbVN0b3JhZ2UgPSAoc29ydCkgPT4ge1xuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oc29ydCkpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShzb3J0KSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRKc29uSW5mb1RvU3RvcmFnZSA9ICh7IHNvcnQsIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsRGF0YSA9IGdldEpzb25JbmZvRnJvbVN0b3JhZ2Uoc29ydCk7XG4gICAgY29uc3QgdXBkYXRlID0gb3JpZ2luYWxEYXRhIHx8IHt9O1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IGRlbGV0ZSB1cGRhdGVba2V5XSk7XG4gICAgfVxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb3J0LCBKU09OLnN0cmluZ2lmeSh1cGRhdGUpKTtcbiAgfTtcblxuICBjb25zdCByZXNldFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0SnNvbkluZm9Ub1N0b3JhZ2UsXG4gICAgYXBwZW5kSnNvbkluZm9Ub1N0b3JhZ2UsXG4gICAgZ2V0SnNvbkluZm9Gcm9tU3RvcmFnZSxcbiAgICByZXNldEpzb25JbmZvVG9TdG9yYWdlLFxuICAgIHJlc2V0U3RvcmFnZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7XG4iLCJpbXBvcnQgeyBzYXZpbmdzIH0gZnJvbSAnLi9vYmplY3RzJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgcmVhZExvZ2ljIGZyb20gJy4vcmVhZF9sb2dpYyc7XG5cbmNvbnN0IHVwZGF0ZUxvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgZG9uZVVuaXQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBzb3J0ID0gaWQuc3BsaXQoJy0nKVswXTtcbiAgICBjb25zdCBkYXRhID0gc3RvcmFnZS5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKHNvcnQpO1xuICAgIGNvbnN0IG9iaiA9IGRhdGEuZmluZChlID0+IGUuaWQgPT09IGlkKTtcbiAgICBpZiAob2JqKSBvYmouZG9uZSA9ICFvYmouZG9uZTtcbiAgICBzYXZpbmdzW2Ake3NvcnR9TGlzdGBdID0gZGF0YTtcbiAgICBzdG9yYWdlLnNldEpzb25JbmZvVG9TdG9yYWdlKHsgc29ydCwgZGF0YSB9KTtcbiAgfTtcblxuICBjb25zdCBmaWxsSW5EYXRhID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgaWYgKCFkYXRhLmlkKSByZXR1cm47XG4gICAgY29uc3QgaWRTZXQgPSBkYXRhLmlkLnNwbGl0KCctJyk7XG4gICAgY29uc3Qgc29ydCA9IGlkU2V0WzBdO1xuICAgIGlmIChzb3J0ID09PSAndG9kbycpIHtcbiAgICAgIGRhdGEucHJvamVjdElkID0gcmVhZExvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVVuaXQgPSAoeyBpZCwgZGF0YSB9KSA9PiB7XG4gICAgY29uc3Qgc29ydCA9IGlkLnNwbGl0KCctJylbMF07XG4gICAgY29uc3QgdXBkYXRpbmdEYXRhID0gc3RvcmFnZS5nZXRKc29uSW5mb0Zyb21TdG9yYWdlKHNvcnQpO1xuICAgIGNvbnN0IG9iaiA9IHVwZGF0aW5nRGF0YS5maW5kKGUgPT4gZS5pZCA9PT0gaWQpO1xuICAgIHVwZGF0aW5nRGF0YS5zcGxpY2UodXBkYXRpbmdEYXRhLmluZGV4T2Yob2JqKSwgMSwgZGF0YSk7XG4gICAgc2F2aW5nc1tgJHtzb3J0fUxpc3RgXSA9IHVwZGF0aW5nRGF0YTtcbiAgICBzdG9yYWdlLnNldEpzb25JbmZvVG9TdG9yYWdlKHsgc29ydCwgZGF0YTogdXBkYXRpbmdEYXRhIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGRvbmVVbml0LCB1cGRhdGVVbml0LCBmaWxsSW5EYXRhIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVMb2dpYztcbiJdLCJzb3VyY2VSb290IjoiIn0=