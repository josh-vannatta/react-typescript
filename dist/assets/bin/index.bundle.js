/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/basic/Counter.tsx":
/*!*******************************!*\
  !*** ./src/basic/Counter.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("button", { className: "foo", onClick: this.props.onClickFunction }, "Add one"));
    }
}
const Result = (props) => (React.createElement("div", null,
    "n: ",
    props.counter));
class Counter extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { counter: 0 };
    }
    incrementCounter() {
        this.setState(() => ({
            counter: this.state.counter + 1
        }));
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Button, { onClickFunction: () => this.incrementCounter() }),
            React.createElement(Result, { counter: this.state.counter })));
    }
}
exports.Counter = Counter;


/***/ }),

/***/ "./src/basic/GithubViewer.tsx":
/*!************************************!*\
  !*** ./src/basic/GithubViewer.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
let axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
class Form extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            userName: ''
        };
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(res => {
            this.props.onCardChange(res.data);
            this.setState({ userName: '' });
        });
    }
    render() {
        return (React.createElement("form", { onSubmit: e => this.handleSubmit(e), className: "my-4" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "form-group col-sm-9" },
                    React.createElement("input", { type: "text", className: "form-control", placeholder: "Enter username", value: this.state.userName, onChange: (e) => this.setState({ userName: e.target.value }) })),
                React.createElement("div", { className: "col-sm-3 pl-0" },
                    React.createElement("button", { type: "submit", className: "btn btn-primary w-100" }, "Add card")))));
    }
}
const Card = (props) => {
    function handleClick() {
        window.open(props.html_url, '_blank');
    }
    return (React.createElement("div", { className: "github-card z-depth-2 z-depth-hover my-3 p-3 pointer", onClick: () => handleClick() },
        React.createElement("img", { width: "100", src: props.avatar_url }),
        React.createElement("div", { className: "card-body" },
            React.createElement("h2", { style: { fontSize: '1.25em' } }, props.name),
            React.createElement("p", { style: { fontSize: '1em' } }, props.company))));
};
const CardList = (props) => {
    return (React.createElement("div", { className: "card-list" }, props.cards.map(card => React.createElement(Card, Object.assign({}, card, { key: card.id })))));
};
class GithubViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }
    onCardChange(data) {
        this.setState({
            data: this.state.data.concat(data)
        });
    }
    render() {
        return (React.createElement("div", { className: "container" },
            React.createElement(Form, { onCardChange: d => this.onCardChange(d) }),
            React.createElement(CardList, { cards: this.state.data })));
    }
}
exports.GithubViewer = GithubViewer;


/***/ }),

/***/ "./src/basic/Hello.tsx":
/*!*****************************!*\
  !*** ./src/basic/Hello.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class Hello extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null,
                "Hello, ",
                this.props.name),
            React.createElement("p", null, "The app is working!")));
    }
}
exports.Hello = Hello;


/***/ }),

/***/ "./src/flux/BrowserRouter.tsx":
/*!************************************!*\
  !*** ./src/flux/BrowserRouter.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const HomePage_1 = __webpack_require__(/*! ./components/HomePage */ "./src/flux/components/HomePage.tsx");
const AboutPage_1 = __webpack_require__(/*! ./components/about/AboutPage */ "./src/flux/components/about/AboutPage.tsx");
const AuthorPage_1 = __webpack_require__(/*! ./components/authors/AuthorPage */ "./src/flux/components/authors/AuthorPage.tsx");
const ManageAuthorsPage_1 = __webpack_require__(/*! ./components/authors/ManageAuthorsPage */ "./src/flux/components/authors/ManageAuthorsPage.tsx");
const Error404_1 = __webpack_require__(/*! ./components/Error404 */ "./src/flux/components/Error404.tsx");
class App extends React.Component {
    render() {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", name: "home", component: HomePage_1.HomePage }),
                React.createElement(react_router_dom_1.Route, { name: "about", path: "/about", component: AboutPage_1.AboutPage }),
                React.createElement(react_router_dom_1.Route, { name: "authors", path: "/authors", component: AuthorPage_1.AuthorPage }),
                React.createElement(react_router_dom_1.Route, { name: "add-author", path: "/add-author", component: ManageAuthorsPage_1.ManageAuthorsPage }),
                React.createElement(react_router_dom_1.Route, { name: "manage-author", path: "/author/:id", component: ManageAuthorsPage_1.ManageAuthorsPage }),
                React.createElement(react_router_dom_1.Redirect, { from: "/aboot", to: "/about" }),
                React.createElement(react_router_dom_1.Redirect, { from: "/about/*", to: "/about" }),
                React.createElement(react_router_dom_1.Redirect, { from: "/home", to: "/" }),
                React.createElement(react_router_dom_1.Route, { component: Error404_1.Error404 }))));
    }
}
exports.App = App;


/***/ }),

/***/ "./src/flux/Flux.tsx":
/*!***************************!*\
  !*** ./src/flux/Flux.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const InitializeActions_1 = __webpack_require__(/*! ./actions/InitializeActions */ "./src/flux/actions/InitializeActions.ts");
const BrowserRouter_1 = __webpack_require__(/*! ./BrowserRouter */ "./src/flux/BrowserRouter.tsx");
InitializeActions_1.InitializeActions.initApp();
class FluxTutorial extends React.Component {
    render() {
        return (React.createElement(BrowserRouter_1.App, null));
    }
}
exports.FluxTutorial = FluxTutorial;


/***/ }),

/***/ "./src/flux/actions/InitializeActions.ts":
/*!***********************************************!*\
  !*** ./src/flux/actions/InitializeActions.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dispatcher_1 = __webpack_require__(/*! ../dispatcher */ "./src/flux/dispatcher/index.ts");
const ActionTypes_1 = __webpack_require__(/*! ../constants/ActionTypes */ "./src/flux/constants/ActionTypes.ts");
const AuthorApi_1 = __webpack_require__(/*! ../api/AuthorApi */ "./src/flux/api/AuthorApi.ts");
class InitializeActions {
    static initApp() {
        dispatcher_1.dispatcher.dispatch({
            actionType: ActionTypes_1.ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi_1.default.getAllAuthors()
            }
        });
    }
}
exports.InitializeActions = InitializeActions;


/***/ }),

/***/ "./src/flux/actions/authorActions.ts":
/*!*******************************************!*\
  !*** ./src/flux/actions/authorActions.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dispatcher_1 = __webpack_require__(/*! ../dispatcher */ "./src/flux/dispatcher/index.ts");
const ActionTypes_1 = __webpack_require__(/*! ../constants/ActionTypes */ "./src/flux/constants/ActionTypes.ts");
const AuthorApi_1 = __webpack_require__(/*! ../api/AuthorApi */ "./src/flux/api/AuthorApi.ts");
class AuthorActions {
    static createAuthor(author) {
        let newAuthor = AuthorApi_1.default.saveAuthor(author);
        dispatcher_1.dispatcher.dispatch({
            actionType: ActionTypes_1.ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    }
    static deleteAuthor(author) {
        AuthorApi_1.default.deleteAuthor(author.id);
        dispatcher_1.dispatcher.dispatch({
            actionType: ActionTypes_1.ActionTypes.DELETE_AUTHOR,
            author: author
        });
    }
    static updateAuthor(author) {
        let updatedAuthor = AuthorApi_1.default.saveAuthor(author);
        dispatcher_1.dispatcher.dispatch({
            actionType: ActionTypes_1.ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    }
}
exports.AuthorActions = AuthorActions;


/***/ }),

/***/ "./src/flux/api/AuthorApi.ts":
/*!***********************************!*\
  !*** ./src/flux/api/AuthorApi.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
const authorData_1 = __webpack_require__(/*! ./authorData */ "./src/flux/api/authorData.ts");
let authors = authorData_1.authorData.authors;
class AuthorApi {
    static getAllAuthors() {
        return this.clone(authors);
    }
    static getAuthorById(id) {
        let author = _.find(authors, { id: id });
        return this.clone(author);
    }
    static saveAuthor(author) {
        if (author.id) {
            let existingAuthorIndex = _.indexOf(authors, _.find(authors, { id: author.id }));
            authors.splice(existingAuthorIndex, 1, author);
        }
        else {
            author.id = this.generateId(author);
            authors.push(author);
        }
        return this.clone(author);
    }
    static deleteAuthor(id) {
        _.remove(authors, { id: id });
    }
    static generateId(author) {
        return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
    }
    static clone(item) {
        return JSON.parse(JSON.stringify(item));
    }
}
exports.default = AuthorApi;


/***/ }),

/***/ "./src/flux/api/authorData.ts":
/*!************************************!*\
  !*** ./src/flux/api/authorData.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.authorData = {
    authors: [
        {
            id: 'cory-house',
            firstName: 'Cory',
            lastName: 'House'
        },
        {
            id: 'scott-allen',
            firstName: 'Scott',
            lastName: 'Allen'
        },
        {
            id: 'dan-wahlin',
            firstName: 'Dan',
            lastName: 'Wahlin'
        }
    ]
};


/***/ }),

/***/ "./src/flux/components/Error404.tsx":
/*!******************************************!*\
  !*** ./src/flux/components/Error404.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const Layout_1 = __webpack_require__(/*! ./common/Layout */ "./src/flux/components/common/Layout.tsx");
class Error404 extends React.Component {
    render() {
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "p-5" },
                React.createElement("h1", null, "Uh oh! Page not found"),
                React.createElement("p", null, "It looks like you made a wrong turn"),
                React.createElement(react_router_dom_1.Link, { className: "btn btn-primary", to: "home" }, "Take me home")) }));
    }
}
exports.Error404 = Error404;


/***/ }),

/***/ "./src/flux/components/HomePage.tsx":
/*!******************************************!*\
  !*** ./src/flux/components/HomePage.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const Layout_1 = __webpack_require__(/*! ./common/Layout */ "./src/flux/components/common/Layout.tsx");
class HomePage extends React.Component {
    render() {
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "jumbotron" },
                React.createElement("h1", null, "Pluralsight Admin"),
                React.createElement("p", null, "React, React router, Flux"),
                React.createElement(react_router_dom_1.Link, { className: "btn btn-primary", to: "about" }, "Learn More")) }));
    }
}
exports.HomePage = HomePage;


/***/ }),

/***/ "./src/flux/components/about/AboutPage.tsx":
/*!*************************************************!*\
  !*** ./src/flux/components/about/AboutPage.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const Layout_1 = __webpack_require__(/*! ../common/Layout */ "./src/flux/components/common/Layout.tsx");
class AboutPage extends React.Component {
    constructor() {
        super(...arguments);
        this.techStack = [
            'React', 'React Router', 'Flux', 'Node', 'Gulp', 'Browserify', 'Bootstrap'
        ];
    }
    render() {
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "p-5" },
                React.createElement("h1", null, "About"),
                React.createElement("p", null, "This page uses the following technologies:"),
                React.createElement("ul", null, this.techStack.map((tech, i) => React.createElement("li", { key: i }, tech)))) }));
    }
}
exports.AboutPage = AboutPage;


/***/ }),

/***/ "./src/flux/components/authors/AuthorForm.tsx":
/*!****************************************************!*\
  !*** ./src/flux/components/authors/AuthorForm.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const TextInput_1 = __webpack_require__(/*! ../common/TextInput */ "./src/flux/components/common/TextInput.tsx");
class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let errors = this.props.errors;
        return (React.createElement("form", { onSubmit: this.props.onSave },
            React.createElement(TextInput_1.TextInput, { name: "firstName", label: "First name", onChange: this.props.update, value: this.props.author.firstName, error: errors.firstName ? errors.firstName : false }),
            React.createElement(TextInput_1.TextInput, { name: "lastName", label: "Last name", onChange: this.props.update, error: errors.lastName ? errors.lastName : false, value: this.props.author.lastName }),
            React.createElement("button", { type: "submit", className: "btn btn-primary" }, "Submit")));
    }
}
exports.AuthorForm = AuthorForm;


/***/ }),

/***/ "./src/flux/components/authors/AuthorList.tsx":
/*!****************************************************!*\
  !*** ./src/flux/components/authors/AuthorList.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const authorActions_1 = __webpack_require__(/*! ../../actions/authorActions */ "./src/flux/actions/authorActions.ts");
class AuthorList extends React.Component {
    getAuthorRow(author) {
        return (React.createElement("tr", { key: author.id },
            React.createElement("td", { scope: "row" },
                React.createElement(react_router_dom_1.Link, { to: "author/" + author.id },
                    " ",
                    author.id)),
            React.createElement("td", null,
                author.firstName,
                " ",
                author.lastName),
            React.createElement("td", null,
                React.createElement("a", { href: "#", onClick: () => authorActions_1.AuthorActions.deleteAuthor(author) }, "Delete"))));
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Authors: "),
            React.createElement("table", { className: "table" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { scope: "col" }, "ID"),
                        React.createElement("th", { scope: "col" }, "Name"),
                        React.createElement("th", { scope: "col" }))),
                React.createElement("tbody", null, this.props.authors.map(author => this.getAuthorRow(author))))));
    }
}
AuthorList.defaultProps = {
    authors: [],
    category: "default"
};
exports.default = AuthorList;


/***/ }),

/***/ "./src/flux/components/authors/AuthorPage.tsx":
/*!****************************************************!*\
  !*** ./src/flux/components/authors/AuthorPage.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const AuthorStore_1 = __webpack_require__(/*! ../../stores/AuthorStore */ "./src/flux/stores/AuthorStore.ts");
const AuthorList_1 = __webpack_require__(/*! ./AuthorList */ "./src/flux/components/authors/AuthorList.tsx");
const Layout_1 = __webpack_require__(/*! ../common/Layout */ "./src/flux/components/common/Layout.tsx");
class AuthorPage extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            authors: AuthorStore_1.authorStore.getAllAuthors()
        };
    }
    componentWillMount() {
        AuthorStore_1.authorStore.addChangeListener(() => this.onChange());
    }
    componentWillUnmount() {
        AuthorStore_1.authorStore.addChangeListener(() => this.onChange());
    }
    onChange() {
        this.setState({
            authors: AuthorStore_1.authorStore.getAllAuthors()
        });
    }
    render() {
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "p-5" },
                React.createElement(AuthorList_1.default, { authors: this.state.authors }),
                React.createElement(react_router_dom_1.Link, { className: "btn btn-primary", to: "add-author" }, " Add new author")) }));
    }
}
exports.AuthorPage = AuthorPage;


/***/ }),

/***/ "./src/flux/components/authors/ManageAuthorsPage.tsx":
/*!***********************************************************!*\
  !*** ./src/flux/components/authors/ManageAuthorsPage.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const AuthorStore_1 = __webpack_require__(/*! ../../stores/AuthorStore */ "./src/flux/stores/AuthorStore.ts");
const authorActions_1 = __webpack_require__(/*! ../../actions/authorActions */ "./src/flux/actions/authorActions.ts");
const Layout_1 = __webpack_require__(/*! ../common/Layout */ "./src/flux/components/common/Layout.tsx");
const AuthorForm_1 = __webpack_require__(/*! ./AuthorForm */ "./src/flux/components/authors/AuthorForm.tsx");
class ManageAuthorsPage extends React.Component {
    constructor(props) {
        super(props);
        this.title = 'Create new author';
        this.state = {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            },
            authorSaved: false,
            dirty: false,
            invalid: false,
            errors: {}
        };
        let activeAuthor = props.match.params.id;
        if (activeAuthor) {
            activeAuthor = AuthorStore_1.authorStore.getAuthorById(activeAuthor);
            this.title = 'Edit author';
            this.state.author = {
                id: activeAuthor.id,
                firstName: activeAuthor.firstName,
                lastName: activeAuthor.lastName
            };
        }
    }
    updateAuthor(e) {
        this.state.author[e.target.name] = e.target.value;
        this.setState({ author: this.state.author, dirty: true });
        if (this.state.invalid)
            this.formValid();
    }
    onSaveAuthor(e) {
        e.preventDefault();
        if (!this.formValid())
            return;
        if (this.state.author.id)
            authorActions_1.AuthorActions.updateAuthor(this.state.author);
        else
            authorActions_1.AuthorActions.createAuthor(this.state.author);
        this.setState({ authorSaved: true, dirty: false });
    }
    formValid() {
        this.state.errors = {};
        if (this.state.author.firstName.length < 3) {
            this.state.errors['firstName'] = 'First name must be at least 3 characters';
        }
        if (this.state.author.lastName.length < 3) {
            this.state.errors['lastName'] = 'Last name must be at least 3 characters';
        }
        this.setState({ errors: this.state.errors, invalid: true });
        return Object.keys(this.state.errors).length == 0;
    }
    render() {
        if (this.state.authorSaved)
            return React.createElement(react_router_dom_1.Redirect, { to: "/authors" });
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "p-5" },
                React.createElement(react_router_dom_1.Prompt, { when: this.state.dirty, message: () => 'Leave page and lose your progress?' }),
                React.createElement("h1", null, this.title),
                React.createElement(AuthorForm_1.AuthorForm, { author: this.state.author, update: e => this.updateAuthor(e), onSave: e => this.onSaveAuthor(e), errors: this.state.errors }),
                React.createElement("p", { className: "mt-3" },
                    this.state.author.firstName,
                    " \u00A0",
                    this.state.author.lastName)) }));
    }
}
exports.ManageAuthorsPage = ManageAuthorsPage;


/***/ }),

/***/ "./src/flux/components/common/Layout.tsx":
/*!***********************************************!*\
  !*** ./src/flux/components/common/Layout.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const NavLinks_1 = __webpack_require__(/*! ./NavLinks */ "./src/flux/components/common/NavLinks.tsx");
class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "app-container" },
            React.createElement(NavLinks_1.NavLinks, null),
            this.props.body));
    }
}
exports.Layout = Layout;


/***/ }),

/***/ "./src/flux/components/common/NavLinks.tsx":
/*!*************************************************!*\
  !*** ./src/flux/components/common/NavLinks.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
class NavLinks extends React.Component {
    render() {
        return (React.createElement("nav", { className: "navbar  navbar-expand-sm navbar-light bg-light z-depth-1" },
            React.createElement(react_router_dom_1.Link, { className: "navbar-brand", to: "/home" },
                React.createElement("img", { src: "/assets/images/pluralsight_logo.png", height: "40" })),
            React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                React.createElement("span", { className: "navbar-toggler-icon" })),
            React.createElement("div", { className: "collapse navbar-collapse ml-3", id: "navbarNav" },
                React.createElement("ul", { className: "navbar-nav" },
                    React.createElement("li", { className: "nav-item active mr-2" },
                        React.createElement(react_router_dom_1.Link, { className: "nav-link", to: "/home" }, "Home")),
                    React.createElement("li", { className: "nav-item mr-2" },
                        React.createElement(react_router_dom_1.Link, { className: "nav-link", to: "/about" }, "About")),
                    React.createElement("li", { className: "nav-item mr-2" },
                        React.createElement(react_router_dom_1.Link, { className: "nav-link", to: "/authors" }, "Authors"))))));
    }
}
exports.NavLinks = NavLinks;


/***/ }),

/***/ "./src/flux/components/common/TextInput.tsx":
/*!**************************************************!*\
  !*** ./src/flux/components/common/TextInput.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputState = ['valid'];
    }
    render() {
        this.inputState = ['valid'];
        if (this.props.error)
            this.inputState = ['has-error', 'invalid'];
        return (React.createElement("div", { className: 'form-group ' + this.inputState.join(' ') },
            React.createElement("label", { htmlFor: this.props.name }, this.props.label),
            React.createElement("input", { type: "text", className: "form-control", name: this.props.name, ref: this.props.name, placeholder: this.props.placeholder, onChange: (e) => this.props.onChange(e), value: this.props.value }),
            React.createElement("small", { className: "text-danger" }, this.props.error)));
    }
}
exports.TextInput = TextInput;


/***/ }),

/***/ "./src/flux/constants/ActionTypes.ts":
/*!*******************************************!*\
  !*** ./src/flux/constants/ActionTypes.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionTypes = {
    CREATE_AUTHOR: 'CREATE_AUTHOR',
    UPDATE_AUTHOR: 'UPDATE_AUTHOR',
    DELETE_AUTHOR: 'DELETE_AUTHOR',
    INITIALIZE: 'INITIALIZE',
};


/***/ }),

/***/ "./src/flux/dispatcher/index.ts":
/*!**************************************!*\
  !*** ./src/flux/dispatcher/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const flux_1 = __webpack_require__(/*! flux */ "./node_modules/flux/index.js");
exports.dispatcher = new flux_1.Dispatcher();


/***/ }),

/***/ "./src/flux/stores/AuthorStore.ts":
/*!****************************************!*\
  !*** ./src/flux/stores/AuthorStore.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dispatcher_1 = __webpack_require__(/*! ../dispatcher */ "./src/flux/dispatcher/index.ts");
const ActionTypes_1 = __webpack_require__(/*! ../constants/ActionTypes */ "./src/flux/constants/ActionTypes.ts");
const events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
const _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
let CHANGE_EVENT = 'change';
let authors = [];
class AuthorStore extends events_1.EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
    getAllAuthors() {
        return authors;
    }
    getAuthorById(id) {
        return _.find(authors, { id: id });
    }
}
let authorStore = new AuthorStore();
exports.authorStore = authorStore;
dispatcher_1.dispatcher.register((action) => {
    let author;
    switch (action.actionType) {
        case ActionTypes_1.ActionTypes.CREATE_AUTHOR:
            authors.push(action.author);
            break;
        case ActionTypes_1.ActionTypes.UPDATE_AUTHOR:
            author = authorStore.getAuthorById(action.author.id);
            authors.splice(authors.indexOf(author), 1, action.author);
            break;
        case ActionTypes_1.ActionTypes.DELETE_AUTHOR:
            _.remove(authors, { id: action.author.id });
            break;
        case ActionTypes_1.ActionTypes.INITIALIZE:
            authors = action.initialData.authors;
            break;
        default:
    }
    authorStore.emitChange();
});


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
const Hello_1 = __webpack_require__(/*! ./basic/Hello */ "./src/basic/Hello.tsx");
const Counter_1 = __webpack_require__(/*! ./basic/Counter */ "./src/basic/Counter.tsx");
const GithubViewer_1 = __webpack_require__(/*! ./basic/GithubViewer */ "./src/basic/GithubViewer.tsx");
const Flux_1 = __webpack_require__(/*! ./flux/Flux */ "./src/flux/Flux.tsx");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const Redux_1 = __webpack_require__(/*! ./redux/Redux */ "./src/redux/Redux.tsx");
let mountNode = document.getElementById("app");
let activeExample = 'Redux';
switch (activeExample) {
    case 'Hello':
        ReactDOM.render(React.createElement(Hello_1.Hello, { name: "Josh" }), mountNode);
        break;
    case 'Counter':
        ReactDOM.render(React.createElement(Counter_1.Counter, null), mountNode);
        break;
    case 'GithubViewer':
        ReactDOM.render(React.createElement(GithubViewer_1.GithubViewer, null), mountNode);
        break;
    case 'Flux':
        ReactDOM.render(React.createElement(Flux_1.FluxTutorial, null), mountNode);
        break;
    case 'Redux':
        ReactDOM.render(React.createElement(react_redux_1.Provider, { store: Redux_1.store },
            React.createElement(Redux_1.ReduxTutorial, null)), mountNode);
        break;
}


/***/ }),

/***/ "./src/redux/BrowserRouter.tsx":
/*!*************************************!*\
  !*** ./src/redux/BrowserRouter.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const HomePage_1 = __webpack_require__(/*! ./app/HomePage */ "./src/redux/app/HomePage.tsx");
const AboutPage_1 = __webpack_require__(/*! ./app/about/AboutPage */ "./src/redux/app/about/AboutPage.tsx");
const AuthorPage_1 = __webpack_require__(/*! ./app/authors/components/AuthorPage */ "./src/redux/app/authors/components/AuthorPage.tsx");
const ManageAuthorsPage_1 = __webpack_require__(/*! ./app/authors/components/ManageAuthorsPage */ "./src/redux/app/authors/components/ManageAuthorsPage.tsx");
const Error404_1 = __webpack_require__(/*! ./app/Error404 */ "./src/redux/app/Error404.tsx");
const CoursesPage_1 = __webpack_require__(/*! ./app/courses/components/CoursesPage */ "./src/redux/app/courses/components/CoursesPage.tsx");
const ManageCoursePage_1 = __webpack_require__(/*! ./app/courses/components/ManageCoursePage */ "./src/redux/app/courses/components/ManageCoursePage.tsx");
class App extends React.Component {
    render() {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", name: "home", component: HomePage_1.HomePage }),
                React.createElement(react_router_dom_1.Route, { name: "about", path: "/about", component: AboutPage_1.AboutPage }),
                React.createElement(react_router_dom_1.Route, { name: "authors", path: "/authors", component: AuthorPage_1.AuthorPage }),
                React.createElement(react_router_dom_1.Route, { name: "add-author", path: "/add-author", component: ManageAuthorsPage_1.ManageAuthorsPage }),
                React.createElement(react_router_dom_1.Route, { name: "manage-author", path: "/author/:id", component: ManageAuthorsPage_1.ManageAuthorsPage }),
                React.createElement(react_router_dom_1.Route, { name: "courses", path: "/courses", component: CoursesPage_1.CoursesPage }),
                React.createElement(react_router_dom_1.Route, { name: "add-course", path: "/add-course", component: ManageCoursePage_1.ManageCoursePage }),
                React.createElement(react_router_dom_1.Route, { name: "manage-course", path: "/course/:id", component: ManageCoursePage_1.ManageCoursePage }),
                React.createElement(react_router_dom_1.Redirect, { from: "/aboot", to: "/about" }),
                React.createElement(react_router_dom_1.Redirect, { from: "/about/*", to: "/about" }),
                React.createElement(react_router_dom_1.Redirect, { from: "/home", to: "/" }),
                React.createElement(react_router_dom_1.Route, { component: Error404_1.Error404 }))));
    }
}
exports.App = App;


/***/ }),

/***/ "./src/redux/Redux.tsx":
/*!*****************************!*\
  !*** ./src/redux/Redux.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
const redux_thunk_1 = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
const reducers_1 = __webpack_require__(/*! ./app/reducers */ "./src/redux/app/reducers.ts");
const store = redux_1.createStore(reducers_1.default, {}, redux_1.applyMiddleware(redux_thunk_1.default));
exports.store = store;
const dispatcher_1 = __webpack_require__(/*! ./app/dispatcher */ "./src/redux/app/dispatcher.ts");
dispatcher_1.loadStore(store);
const BrowserRouter_1 = __webpack_require__(/*! ./BrowserRouter */ "./src/redux/BrowserRouter.tsx");
class ReduxTutorial extends React.Component {
    render() {
        return (React.createElement(BrowserRouter_1.App, null));
    }
}
exports.ReduxTutorial = ReduxTutorial;


/***/ }),

/***/ "./src/redux/api/AuthorApi.ts":
/*!************************************!*\
  !*** ./src/redux/api/AuthorApi.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const delay_1 = __webpack_require__(/*! ./delay */ "./src/redux/api/delay.ts");
const authors = [
    {
        id: 'cory-house',
        firstName: 'Cory',
        lastName: 'House'
    },
    {
        id: 'scott-allen',
        firstName: 'Scott',
        lastName: 'Allen'
    },
    {
        id: 'dan-wahlin',
        firstName: 'Dan',
        lastName: 'Wahlin'
    }
];
const generateId = (author) => {
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};
class AuthorApi {
    static getAllAuthors() {
        return new Promise((resolve, {}) => {
            setTimeout(() => {
                resolve(Object.assign([], authors));
            }, delay_1.default);
        });
    }
    static saveAuthor(author) {
        author = Object.assign({}, author);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const minAuthorNameLength = 3;
                if (author.firstName.length < minAuthorNameLength) {
                    reject(`First Name must be at least ${minAuthorNameLength} characters.`);
                }
                if (author.lastName.length < minAuthorNameLength) {
                    reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
                }
                if (author.id) {
                    const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
                    authors.splice(existingAuthorIndex, 1, author);
                }
                else {
                    author.id = generateId(author);
                    authors.push(author);
                }
                resolve(author);
            }, delay_1.default);
        });
    }
    static deleteAuthor(authorId) {
        return new Promise((resolve, {}) => {
            setTimeout(() => {
                const indexOfAuthorToDelete = authors.findIndex(author => {
                    return author.id == authorId;
                });
                authors.splice(indexOfAuthorToDelete, 1);
                resolve();
            }, delay_1.default);
        });
    }
}
exports.default = AuthorApi;


/***/ }),

/***/ "./src/redux/api/CourseApi.ts":
/*!************************************!*\
  !*** ./src/redux/api/CourseApi.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const delay_1 = __webpack_require__(/*! ./delay */ "./src/redux/api/delay.ts");
const courses = [
    {
        id: "react-flux-building-applications",
        title: "Building Applications in React and Flux",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "5:08",
        category: "JavaScript"
    },
    {
        id: "clean-code",
        title: "Clean Code: Writing Code for Humans",
        watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
        authorId: "cory-house",
        length: "3:10",
        category: "Software Practices"
    },
    {
        id: "architecture",
        title: "Architecting Applications for the Real World",
        watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
        authorId: "cory-house",
        length: "2:52",
        category: "Software Architecture"
    },
    {
        id: "career-reboot-for-developer-mind",
        title: "Becoming an Outlier: Reprogramming the Developer Mind",
        watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
        authorId: "cory-house",
        length: "2:30",
        category: "Career"
    },
    {
        id: "web-components-shadow-dom",
        title: "Web Component Fundamentals",
        watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
        authorId: "cory-house",
        length: "5:10",
        category: "HTML5"
    }
];
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};
class CourseApi {
    static getAllCourses() {
        return new Promise((resolve, {}) => {
            setTimeout(() => resolve(Object.assign([], courses)), delay_1.default);
        });
    }
    static saveCourse(course) {
        course = Object.assign({}, course);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const minCourseTitleLength = 1;
                if (course.title.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }
                if (course.id) {
                    const existingCourseIndex = courses.findIndex(a => a.id == course.id);
                    courses.splice(existingCourseIndex, 1, course);
                }
                else {
                    course.id = generateId(course);
                    course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    courses.push(course);
                }
                resolve(course);
            }, delay_1.default);
        });
    }
    static deleteCourse(courseId) {
        return new Promise((resolve, {}) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => {
                    return course.id == courseId;
                });
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay_1.default);
        });
    }
}
exports.default = CourseApi;


/***/ }),

/***/ "./src/redux/api/delay.ts":
/*!********************************!*\
  !*** ./src/redux/api/delay.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = 1000;


/***/ }),

/***/ "./src/redux/app/Error404.tsx":
/*!************************************!*\
  !*** ./src/redux/app/Error404.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const Layout_1 = __webpack_require__(/*! ./common/Layout */ "./src/redux/app/common/Layout.tsx");
class Error404 extends React.Component {
    render() {
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "p-5" },
                React.createElement("h1", null, "Uh oh! Page not found"),
                React.createElement("p", null, "It looks like you made a wrong turn"),
                React.createElement(react_router_dom_1.Link, { className: "btn btn-primary", to: "home" }, "Take me home")) }));
    }
}
exports.Error404 = Error404;


/***/ }),

/***/ "./src/redux/app/HomePage.tsx":
/*!************************************!*\
  !*** ./src/redux/app/HomePage.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const Layout_1 = __webpack_require__(/*! ./common/Layout */ "./src/redux/app/common/Layout.tsx");
class HomePage extends React.Component {
    render() {
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "jumbotron" },
                React.createElement("h1", null, "Pluralsight Admin"),
                React.createElement("p", null, "React, React router, Flux"),
                React.createElement(react_router_dom_1.Link, { className: "btn btn-primary", to: "about" }, "Learn More")) }));
    }
}
exports.HomePage = HomePage;


/***/ }),

/***/ "./src/redux/app/about/AboutPage.tsx":
/*!*******************************************!*\
  !*** ./src/redux/app/about/AboutPage.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const Layout_1 = __webpack_require__(/*! ../common/Layout */ "./src/redux/app/common/Layout.tsx");
class AboutPage extends React.Component {
    constructor() {
        super(...arguments);
        this.techStack = [
            'React', 'React Router', 'Flux', 'Node', 'Gulp', 'Browserify', 'Bootstrap'
        ];
    }
    render() {
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "p-5" },
                React.createElement("h1", null, "About"),
                React.createElement("p", null, "This page uses the following technologies:"),
                React.createElement("ul", null, this.techStack.map((tech, i) => React.createElement("li", { key: i }, tech)))) }));
    }
}
exports.AboutPage = AboutPage;


/***/ }),

/***/ "./src/redux/app/authors/AuthorActions.ts":
/*!************************************************!*\
  !*** ./src/redux/app/authors/AuthorActions.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes_1 = __webpack_require__(/*! ../../constants/ActionTypes */ "./src/redux/constants/ActionTypes.ts");
const AuthorApi_1 = __webpack_require__(/*! ../../api/AuthorApi */ "./src/redux/api/AuthorApi.ts");
const _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
class AuthorActions {
    static getAuthorById(authors, id) {
        return _.find(authors, { id: id });
    }
    loadAuthors() {
        let _this = this;
        return function (dispatch) {
            return AuthorApi_1.default.getAllAuthors()
                .then(authors => dispatch(_this.authorsLoaded(authors)));
        };
    }
    authorsLoaded(authors) {
        return {
            type: ActionTypes_1.ActionTypes.AUTHORS_LOADED,
            authors: authors
        };
    }
    createAuthor(author) {
        AuthorApi_1.default.saveAuthor(author);
        author.id = author.firstName + '-' + author.lastName;
        return {
            type: ActionTypes_1.ActionTypes.CREATE_AUTHOR,
            author: author
        };
    }
    deleteAuthor(author) {
        AuthorApi_1.default.deleteAuthor(author.id);
        return {
            type: ActionTypes_1.ActionTypes.DELETE_AUTHOR,
            author: author
        };
    }
    updateAuthor(author) {
        return {
            type: ActionTypes_1.ActionTypes.UPDATE_AUTHOR,
            author: author
        };
    }
}
exports.AuthorActions = AuthorActions;


/***/ }),

/***/ "./src/redux/app/authors/authorsReducer.ts":
/*!*************************************************!*\
  !*** ./src/redux/app/authors/authorsReducer.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes_1 = __webpack_require__(/*! ../../constants/ActionTypes */ "./src/redux/constants/ActionTypes.ts");
const _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
class AuthorsReducer {
    static createAuthor(authors, action) {
        return [...authors, Object.assign({}, action.author)];
    }
    static updateAuthor(authors, action) {
        let author = _.find(authors, { id: action.author.id });
        authors.splice(authors.indexOf(author), 1, action.author);
        return authors;
    }
    static deleteAuthor(authors, action) {
        _.remove(authors, { id: action.author.id });
        return authors;
    }
}
function authorsReducer(authors = [], action) {
    switch (action.type) {
        case ActionTypes_1.ActionTypes.AUTHORS_LOADED:
            return action.authors;
        case ActionTypes_1.ActionTypes.CREATE_AUTHOR:
            return AuthorsReducer.createAuthor(authors, action);
        case ActionTypes_1.ActionTypes.UPDATE_AUTHOR:
            return AuthorsReducer.updateAuthor(authors, action);
        case ActionTypes_1.ActionTypes.DELETE_AUTHOR:
            return AuthorsReducer.deleteAuthor(authors, action);
        default: return authors;
    }
}
exports.authorsReducer = authorsReducer;


/***/ }),

/***/ "./src/redux/app/authors/components/AuthorForm.tsx":
/*!*********************************************************!*\
  !*** ./src/redux/app/authors/components/AuthorForm.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const TextInput_1 = __webpack_require__(/*! ../../common/TextInput */ "./src/redux/app/common/TextInput.tsx");
class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let errors = this.props.errors;
        return (React.createElement("form", { onSubmit: this.props.onSave },
            React.createElement(TextInput_1.TextInput, { name: "firstName", label: "First name", onChange: this.props.update, value: this.props.author.firstName, error: errors.firstName ? errors.firstName : false }),
            React.createElement(TextInput_1.TextInput, { name: "lastName", label: "Last name", onChange: this.props.update, error: errors.lastName ? errors.lastName : false, value: this.props.author.lastName }),
            React.createElement("button", { type: "submit", className: "btn btn-primary" }, "Submit")));
    }
}
exports.AuthorForm = AuthorForm;


/***/ }),

/***/ "./src/redux/app/authors/components/AuthorList.tsx":
/*!*********************************************************!*\
  !*** ./src/redux/app/authors/components/AuthorList.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
class AuthorList extends React.Component {
    getAuthorRow(author) {
        return (React.createElement("tr", { key: author.id },
            React.createElement("td", { scope: "row" },
                React.createElement(react_router_dom_1.Link, { to: "author/" + author.id },
                    " ",
                    author.id)),
            React.createElement("td", null,
                author.firstName,
                " ",
                author.lastName),
            React.createElement("td", null,
                React.createElement("a", { href: "#", onClick: () => this.props.delete(author) }, "Delete"))));
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Authors: "),
            React.createElement("table", { className: "table" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { scope: "col" }, "ID"),
                        React.createElement("th", { scope: "col" }, "Name"),
                        React.createElement("th", { scope: "col" }))),
                React.createElement("tbody", null, this.props.authors.map(author => this.getAuthorRow(author))))));
    }
}
AuthorList.defaultProps = {
    authors: [],
    category: "default"
};
exports.AuthorList = AuthorList;


/***/ }),

/***/ "./src/redux/app/authors/components/AuthorPage.tsx":
/*!*********************************************************!*\
  !*** ./src/redux/app/authors/components/AuthorPage.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const AuthorList_1 = __webpack_require__(/*! ./AuthorList */ "./src/redux/app/authors/components/AuthorList.tsx");
const AuthorActions_1 = __webpack_require__(/*! ../AuthorActions */ "./src/redux/app/authors/AuthorActions.ts");
const Layout_1 = __webpack_require__(/*! ../../common/Layout */ "./src/redux/app/common/Layout.tsx");
const dispatcher_1 = __webpack_require__(/*! ../../dispatcher */ "./src/redux/app/dispatcher.ts");
class AuthorPageRef extends React.Component {
    render() {
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "p-5" },
                React.createElement(AuthorList_1.AuthorList, { authors: this.props.authors, delete: author => this.props.actions.deleteAuthor(author) }),
                React.createElement(react_router_dom_1.Link, { className: "btn btn-primary", to: "add-author" }, " Add new author")) }));
    }
}
exports.AuthorPage = dispatcher_1.dispatch(AuthorPageRef, {
    actions: AuthorActions_1.AuthorActions,
    state: ['authors']
});


/***/ }),

/***/ "./src/redux/app/authors/components/ManageAuthorsPage.tsx":
/*!****************************************************************!*\
  !*** ./src/redux/app/authors/components/ManageAuthorsPage.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const Layout_1 = __webpack_require__(/*! ../../common/Layout */ "./src/redux/app/common/Layout.tsx");
const AuthorActions_1 = __webpack_require__(/*! ../AuthorActions */ "./src/redux/app/authors/AuthorActions.ts");
const AuthorForm_1 = __webpack_require__(/*! ./AuthorForm */ "./src/redux/app/authors/components/AuthorForm.tsx");
const dispatcher_1 = __webpack_require__(/*! ../../dispatcher */ "./src/redux/app/dispatcher.ts");
class ManageAuthorsPageRef extends React.Component {
    constructor(props) {
        super(props);
        this.title = 'Create new author';
        this.state = {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            },
            authorSaved: false,
            dirty: false,
            invalid: false,
            errors: {}
        };
        if (props.match.params.id) {
            let activeAuthor = AuthorActions_1.AuthorActions.getAuthorById(this.props.authors, props.match.params.id);
            this.title = 'Edit author';
            this.state.author = activeAuthor;
        }
    }
    updateAuthor(e) {
        this.state.author[e.target.name] = e.target.value;
        this.setState({ author: this.state.author, dirty: true });
        if (this.state.invalid)
            this.formValid();
    }
    onSaveAuthor(e) {
        e.preventDefault();
        if (!this.formValid())
            return;
        if (this.state.author.id)
            this.props.actions.updateAuthor(this.state.author);
        else
            this.props.actions.createAuthor(this.state.author);
        this.setState({ authorSaved: true, dirty: false });
    }
    formValid() {
        this.state.errors = {};
        if (this.state.author.firstName.length < 3) {
            this.state.errors['firstName'] = 'First name must be at least 3 characters';
        }
        if (this.state.author.lastName.length < 3) {
            this.state.errors['lastName'] = 'Last name must be at least 3 characters';
        }
        this.setState({ errors: this.state.errors, invalid: true });
        return Object.keys(this.state.errors).length == 0;
    }
    render() {
        if (this.state.authorSaved)
            return React.createElement(react_router_dom_1.Redirect, { to: "/authors" });
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "p-5" },
                React.createElement(react_router_dom_1.Prompt, { when: this.state.dirty, message: () => 'Leave page and lose your progress?' }),
                React.createElement("h1", null, this.title),
                React.createElement(AuthorForm_1.AuthorForm, { author: this.state.author, update: e => this.updateAuthor(e), onSave: e => this.onSaveAuthor(e), errors: this.state.errors }),
                React.createElement("p", { className: "mt-3" },
                    this.state.author.firstName,
                    " \u00A0",
                    this.state.author.lastName)) }));
    }
}
exports.ManageAuthorsPageRef = ManageAuthorsPageRef;
exports.ManageAuthorsPage = dispatcher_1.dispatch(ManageAuthorsPageRef, {
    actions: AuthorActions_1.AuthorActions,
    state: ['authors']
});


/***/ }),

/***/ "./src/redux/app/common/Layout.tsx":
/*!*****************************************!*\
  !*** ./src/redux/app/common/Layout.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const NavLinks_1 = __webpack_require__(/*! ./NavLinks */ "./src/redux/app/common/NavLinks.tsx");
class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "app-container" },
            React.createElement(NavLinks_1.NavLinks, null),
            this.props.body));
    }
}
exports.Layout = Layout;


/***/ }),

/***/ "./src/redux/app/common/NavLinks.tsx":
/*!*******************************************!*\
  !*** ./src/redux/app/common/NavLinks.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
class NavLinks extends React.Component {
    render() {
        return (React.createElement("nav", { className: "navbar  navbar-expand-sm navbar-light bg-light z-depth-1" },
            React.createElement(react_router_dom_1.Link, { className: "navbar-brand", to: "/home" },
                React.createElement("img", { src: "/assets/images/pluralsight_logo.png", height: "40" })),
            React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                React.createElement("span", { className: "navbar-toggler-icon" })),
            React.createElement("div", { className: "collapse navbar-collapse ml-3", id: "navbarNav" },
                React.createElement("ul", { className: "navbar-nav" },
                    React.createElement("li", { className: "nav-item active mr-2" },
                        React.createElement(react_router_dom_1.Link, { className: "nav-link", to: "/home" }, "Home")),
                    React.createElement("li", { className: "nav-item mr-2" },
                        React.createElement(react_router_dom_1.Link, { className: "nav-link", to: "/about" }, "About")),
                    React.createElement("li", { className: "nav-item mr-2" },
                        React.createElement(react_router_dom_1.Link, { className: "nav-link", to: "/authors" }, "Authors")),
                    React.createElement("li", { className: "nav-item mr-2" },
                        React.createElement(react_router_dom_1.Link, { className: "nav-link", to: "/courses" }, "Courses"))))));
    }
}
exports.NavLinks = NavLinks;


/***/ }),

/***/ "./src/redux/app/common/SelectInput.tsx":
/*!**********************************************!*\
  !*** ./src/redux/app/common/SelectInput.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class SelectInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputState = ['valid'];
    }
    render() {
        this.inputState = ['valid'];
        if (this.props.error)
            this.inputState = ['has-error', 'invalid'];
        return (React.createElement("div", { className: 'form-group ' + this.inputState.join(' ') },
            React.createElement("label", { htmlFor: this.props.name }, this.props.label),
            React.createElement("select", { className: "form-control", name: this.props.name, onChange: (e) => this.props.onChange(e), value: this.props.value },
                React.createElement("option", null,
                    " ",
                    this.props.defaultOption,
                    " "),
                this.props.options.map((option) => React.createElement("option", { key: option.value, value: option.value }, option.text))),
            this.props.error && React.createElement("small", { className: "text-danger" }, this.props.error)));
    }
}
exports.SelectInput = SelectInput;


/***/ }),

/***/ "./src/redux/app/common/TextInput.tsx":
/*!********************************************!*\
  !*** ./src/redux/app/common/TextInput.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputState = ['valid'];
    }
    render() {
        this.inputState = ['valid'];
        if (this.props.error)
            this.inputState = ['has-error', 'invalid'];
        return (React.createElement("div", { className: 'form-group ' + this.inputState.join(' ') },
            React.createElement("label", { htmlFor: this.props.name }, this.props.label),
            React.createElement("input", { type: "text", className: "form-control", name: this.props.name, placeholder: this.props.placeholder, onChange: (e) => this.props.onChange(e), value: this.props.value }),
            this.props.error && React.createElement("small", { className: "text-danger" }, this.props.error)));
    }
}
exports.TextInput = TextInput;


/***/ }),

/***/ "./src/redux/app/courses/CourseActions.ts":
/*!************************************************!*\
  !*** ./src/redux/app/courses/CourseActions.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes_1 = __webpack_require__(/*! ../../constants/ActionTypes */ "./src/redux/constants/ActionTypes.ts");
const CourseApi_1 = __webpack_require__(/*! ../../api/CourseApi */ "./src/redux/api/CourseApi.ts");
class CourseActions {
    static getCourseById(courses, id) {
        let course = courses.filter(course => course.id == id);
        if (course.length > 0)
            return course[0];
        return null;
    }
    createCourseSuccess(course) {
        return {
            type: ActionTypes_1.ActionTypes.CREATE_COURSE,
            course: course
        };
    }
    updateCourseSuccess(course) {
        return {
            type: ActionTypes_1.ActionTypes.UPDATE_COURSE,
            course: course
        };
    }
    saveCourse(course) {
        let _this = this;
        return function (dispatch) {
            return CourseApi_1.default.saveCourse(course)
                .then(savedCourse => {
                if (course.id == '')
                    dispatch(_this.createCourseSuccess(savedCourse));
                else
                    dispatch(_this.updateCourseSuccess(savedCourse));
            })
                .catch(error => {
                throw (error);
            });
        };
    }
    loadCoursesSuccess(courses) {
        return {
            type: ActionTypes_1.ActionTypes.LOAD_COURSES_SUCCESS,
            courses: courses
        };
    }
    loadCourses() {
        let _this = this;
        return function (dispatch) {
            return CourseApi_1.default.getAllCourses()
                .then(courses => {
                dispatch(_this.loadCoursesSuccess(courses));
            })
                .catch(error => {
                throw (error);
            });
        };
    }
}
CourseActions.instance = self;
exports.CourseActions = CourseActions;


/***/ }),

/***/ "./src/redux/app/courses/CourseReducer.ts":
/*!************************************************!*\
  !*** ./src/redux/app/courses/CourseReducer.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes_1 = __webpack_require__(/*! ../../constants/ActionTypes */ "./src/redux/constants/ActionTypes.ts");
function courseReducer(courses = [], action) {
    switch (action.type) {
        case ActionTypes_1.ActionTypes.CREATE_COURSE:
            return [
                ...courses,
                Object.assign({}, action.course)
            ];
        case ActionTypes_1.ActionTypes.UPDATE_COURSE:
            return [
                ...courses.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];
        case ActionTypes_1.ActionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;
        default: return courses;
    }
}
exports.courseReducer = courseReducer;


/***/ }),

/***/ "./src/redux/app/courses/components/CourseForm.tsx":
/*!*********************************************************!*\
  !*** ./src/redux/app/courses/components/CourseForm.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const TextInput_1 = __webpack_require__(/*! ../../common/TextInput */ "./src/redux/app/common/TextInput.tsx");
const SelectInput_1 = __webpack_require__(/*! ../../common/SelectInput */ "./src/redux/app/common/SelectInput.tsx");
class CourseForm extends React.Component {
    render() {
        const { course, allAuthors, onSave, onChange, loading, errors } = this.props;
        return (React.createElement("form", { onSubmit: this.props.onSave },
            React.createElement(TextInput_1.TextInput, { name: "title", label: "Title", onChange: onChange, value: course.title, error: errors.title ? errors.title : false }),
            React.createElement(SelectInput_1.SelectInput, { name: "authorId", label: "Author", options: allAuthors, defaultOption: "Select Author", onChange: onChange, value: course.authorId, error: errors.authorId ? errors.authorId : false }),
            React.createElement(TextInput_1.TextInput, { name: "category", label: "Category", onChange: onChange, value: course.category, error: errors.category ? errors.category : false }),
            React.createElement(TextInput_1.TextInput, { name: "length", label: "Length", onChange: onChange, value: course.length, error: errors.length ? errors.length : false }),
            React.createElement("input", { type: "submit", className: "btn btn-primary", disabled: loading, value: loading ? 'Saving...' : 'Save', onClick: onSave })));
    }
}
exports.CourseForm = CourseForm;


/***/ }),

/***/ "./src/redux/app/courses/components/CourseListRow.tsx":
/*!************************************************************!*\
  !*** ./src/redux/app/courses/components/CourseListRow.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
class CourseListRow extends React.Component {
    render() {
        let course = this.props.course;
        return (React.createElement("tr", null,
            React.createElement("td", null,
                React.createElement("a", { href: course.watchHref, target: "_blank" }, "Watch")),
            React.createElement("td", null,
                React.createElement(react_router_dom_1.Link, { to: '/course/' + course.id }, course.title)),
            React.createElement("td", null, course.authorId),
            React.createElement("td", null, course.category),
            React.createElement("td", null, course.length)));
    }
}
exports.CourseListRow = CourseListRow;


/***/ }),

/***/ "./src/redux/app/courses/components/Courselist.tsx":
/*!*********************************************************!*\
  !*** ./src/redux/app/courses/components/Courselist.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const CourseListRow_1 = __webpack_require__(/*! ./CourseListRow */ "./src/redux/app/courses/components/CourseListRow.tsx");
class CourseList extends React.Component {
    render() {
        return (React.createElement("table", { className: "table" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "\u00A0"),
                    React.createElement("th", null, "Title"),
                    React.createElement("th", null, "Author"),
                    React.createElement("th", null, "Category"),
                    React.createElement("th", null, "Length"))),
            React.createElement("tbody", null, this.props.courses.map(course => React.createElement(CourseListRow_1.CourseListRow, { key: course.id, course: course })))));
    }
}
exports.CourseList = CourseList;


/***/ }),

/***/ "./src/redux/app/courses/components/CoursesPage.tsx":
/*!**********************************************************!*\
  !*** ./src/redux/app/courses/components/CoursesPage.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const Layout_1 = __webpack_require__(/*! ../../common/Layout */ "./src/redux/app/common/Layout.tsx");
const dispatcher_1 = __webpack_require__(/*! ../../dispatcher */ "./src/redux/app/dispatcher.ts");
const CourseActions_1 = __webpack_require__(/*! ../CourseActions */ "./src/redux/app/courses/CourseActions.ts");
const Courselist_1 = __webpack_require__(/*! ./Courselist */ "./src/redux/app/courses/components/Courselist.tsx");
class CoursesPageRef extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { title: '' }
        };
    }
    render() {
        const { courses } = this.props;
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "p-5" },
                React.createElement("h1", null, "Courses"),
                React.createElement(Courselist_1.CourseList, { courses: courses }),
                React.createElement(react_router_dom_1.Link, { className: "btn btn-primary", to: "add-course" }, " Add new course")) }));
    }
}
exports.CoursesPage = dispatcher_1.dispatch(CoursesPageRef, {
    actions: CourseActions_1.CourseActions,
    state: ['courses']
});


/***/ }),

/***/ "./src/redux/app/courses/components/ManageCoursePage.tsx":
/*!***************************************************************!*\
  !*** ./src/redux/app/courses/components/ManageCoursePage.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const CourseActions_1 = __webpack_require__(/*! ../CourseActions */ "./src/redux/app/courses/CourseActions.ts");
const dispatcher_1 = __webpack_require__(/*! ../../dispatcher */ "./src/redux/app/dispatcher.ts");
const Layout_1 = __webpack_require__(/*! ../../common/Layout */ "./src/redux/app/common/Layout.tsx");
const CourseForm_1 = __webpack_require__(/*! ./CourseForm */ "./src/redux/app/courses/components/CourseForm.tsx");
class ManageCoursePageRef extends React.Component {
    constructor(props) {
        super(props);
        this.title = 'Create new course';
        this.state = {
            course: Object.assign({}, this.props.course),
            courseSaved: false,
            dirty: false,
            invalid: false,
            errors: {},
            isLoading: false
        };
        this.loadCourse(props);
    }
    componentWillReceiveProps(props) {
        this.loadCourse(props);
    }
    loadCourse(props) {
        if (props.match.params.id && props.courses.length > 0) {
            this.state.course = CourseActions_1.CourseActions.getCourseById(props.courses, props.match.params.id);
            this.title = 'Edit course: ' + this.state.course.title;
        }
    }
    saveCourse(e) {
        e.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.setState({
            courseSaved: true
        });
    }
    handleChange(e) {
        let course = Object.assign({}, this.state.course);
        course[e.target.name] = e.target.value;
        this.setState({ course: course });
    }
    render() {
        if (this.state.courseSaved)
            return React.createElement(react_router_dom_1.Redirect, { to: "/courses" });
        return React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "p-5" },
                React.createElement("h1", null, this.title),
                React.createElement(CourseForm_1.CourseForm, { course: this.state.course, allAuthors: this.props.authors, onSave: (e) => this.saveCourse(e), onChange: (e) => this.handleChange(e), errors: this.state.errors, loading: this.state.isLoading })) });
    }
}
exports.ManageCoursePageRef = ManageCoursePageRef;
const prepareCourse = {
    id: '', watchHref: '', title: '', authorId: '', length: '', category: ''
};
const prepareAuthors = authors => authors.map(author => ({
    value: author.id,
    text: author.firstName + ' ' + author.lastName,
}));
exports.ManageCoursePage = dispatcher_1.dispatch(ManageCoursePageRef, {
    actions: CourseActions_1.CourseActions,
    state: state => ({
        course: prepareCourse,
        courses: state.courses,
        authors: prepareAuthors(state.authors)
    })
});


/***/ }),

/***/ "./src/redux/app/dispatcher.ts":
/*!*************************************!*\
  !*** ./src/redux/app/dispatcher.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const CourseActions_1 = __webpack_require__(/*! ./courses/CourseActions */ "./src/redux/app/courses/CourseActions.ts");
const AuthorActions_1 = __webpack_require__(/*! ./authors/AuthorActions */ "./src/redux/app/authors/AuthorActions.ts");
function dispatch(Component, mappings) {
    let map = {
        state: state => {
            if (mappings.state == null || !mappings.state)
                return {};
            if (typeof mappings.state === 'object')
                return state;
            if (typeof mappings.state === 'function')
                return state => mappings.state(state);
            let finalState = {};
            mappings.state.forEach(param => {
                finalState[param] = state[param];
            });
            return finalState;
        },
        dispatch: dispatch => {
            let types = Object.getOwnPropertyNames(mappings.actions.prototype);
            let actions = new mappings.actions();
            let newActions = {};
            types.forEach(type => {
                if (type == 'constructor')
                    return;
                newActions[type] = props => dispatch(actions[type](props));
            });
            return { actions: newActions };
        }
    };
    return react_redux_1.connect(map.state, map.dispatch)(Component);
}
exports.dispatch = dispatch;
function loadStore(store) {
    let courseActions = new CourseActions_1.CourseActions();
    let authorActions = new AuthorActions_1.AuthorActions();
    store.dispatch(courseActions.loadCourses());
    store.dispatch(authorActions.loadAuthors());
}
exports.loadStore = loadStore;


/***/ }),

/***/ "./src/redux/app/reducers.ts":
/*!***********************************!*\
  !*** ./src/redux/app/reducers.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
const CourseReducer_1 = __webpack_require__(/*! ./courses/CourseReducer */ "./src/redux/app/courses/CourseReducer.ts");
const authorsReducer_1 = __webpack_require__(/*! ./authors/authorsReducer */ "./src/redux/app/authors/authorsReducer.ts");
const rootReducer = redux_1.combineReducers({
    courses: CourseReducer_1.courseReducer,
    authors: authorsReducer_1.authorsReducer
});
exports.default = rootReducer;


/***/ }),

/***/ "./src/redux/constants/ActionTypes.ts":
/*!********************************************!*\
  !*** ./src/redux/constants/ActionTypes.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionTypes = {
    CREATE_AUTHOR: 'CREATE_AUTHOR',
    UPDATE_AUTHOR: 'UPDATE_AUTHOR',
    DELETE_AUTHOR: 'DELETE_AUTHOR',
    AUTHORS_LOADED: 'AUTHORS_LOADED',
    CREATE_COURSE: 'CREATE_COURSE',
    UPDATE_COURSE: 'UPDATE_COURSE',
    GET_COURSE: 'GET_COURSE',
    LOAD_COURSES_SUCCESS: 'LOAD_COURSES_SUCCESS',
    INITIALIZE: 'INITIALIZE',
};


/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/index.tsx ./src/sass/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Server\www\quickstart\react-typescript\src\index.tsx */"./src/index.tsx");
module.exports = __webpack_require__(/*! C:\Server\www\quickstart\react-typescript\src\sass\index.scss */"./src/sass/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map