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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        return _super.call(this, props) || this;
    }
    Button.prototype.render = function () {
        return (React.createElement("button", { className: "foo", onClick: this.props.onClickFunction }, "Add one"));
    };
    return Button;
}(React.Component));
var Result = function (props) { return (React.createElement("div", null,
    "n: ",
    props.counter)); };
var Counter = (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { counter: 0 };
        return _this;
    }
    Counter.prototype.incrementCounter = function () {
        var _this = this;
        this.setState(function () { return ({
            counter: _this.state.counter + 1
        }); });
    };
    Counter.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(Button, { onClickFunction: function () { return _this.incrementCounter(); } }),
            React.createElement(Result, { counter: this.state.counter })));
    };
    return Counter;
}(React.Component));
exports.Counter = Counter;


/***/ }),

/***/ "./src/basic/GithubViewer.tsx":
/*!************************************!*\
  !*** ./src/basic/GithubViewer.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var Form = (function (_super) {
    __extends(Form, _super);
    function Form() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            userName: ''
        };
        return _this;
    }
    Form.prototype.handleSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        axios.get("https://api.github.com/users/" + this.state.userName)
            .then(function (res) {
            _this.props.onCardChange(res.data);
            _this.setState({ userName: '' });
        });
    };
    Form.prototype.render = function () {
        var _this = this;
        return (React.createElement("form", { onSubmit: function (e) { return _this.handleSubmit(e); }, className: "my-4" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "form-group col-sm-9" },
                    React.createElement("input", { type: "text", className: "form-control", placeholder: "Enter username", value: this.state.userName, onChange: function (e) { return _this.setState({ userName: e.target.value }); } })),
                React.createElement("div", { className: "col-sm-3 pl-0" },
                    React.createElement("button", { type: "submit", className: "btn btn-primary w-100" }, "Add card")))));
    };
    return Form;
}(React.Component));
var Card = function (props) {
    function handleClick() {
        window.open(props.html_url, '_blank');
    }
    return (React.createElement("div", { className: "github-card z-depth-2 z-depth-hover my-3 p-3 pointer", onClick: function () { return handleClick(); } },
        React.createElement("img", { width: "100", src: props.avatar_url }),
        React.createElement("div", { className: "card-body" },
            React.createElement("h2", { style: { fontSize: '1.25em' } }, props.name),
            React.createElement("p", { style: { fontSize: '1em' } }, props.company))));
};
var CardList = function (props) {
    return (React.createElement("div", { className: "card-list" }, props.cards.map(function (card) { return React.createElement(Card, __assign({}, card, { key: card.id })); })));
};
var GithubViewer = (function (_super) {
    __extends(GithubViewer, _super);
    function GithubViewer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: null
        };
        return _this;
    }
    GithubViewer.prototype.onCardChange = function (data) {
        this.setState({
            data: this.state.data.concat(data)
        });
    };
    GithubViewer.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "container" },
            React.createElement(Form, { onCardChange: function (d) { return _this.onCardChange(d); } }),
            React.createElement(CardList, { cards: this.state.data })));
    };
    return GithubViewer;
}(React.Component));
exports.GithubViewer = GithubViewer;


/***/ }),

/***/ "./src/basic/Hello.tsx":
/*!*****************************!*\
  !*** ./src/basic/Hello.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null,
                "Hello, ",
                this.props.name),
            React.createElement("p", null, "The app is working!")));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;


/***/ }),

/***/ "./src/flux/BrowserRouter.tsx":
/*!************************************!*\
  !*** ./src/flux/BrowserRouter.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var HomePage_1 = __webpack_require__(/*! ./components/HomePage */ "./src/flux/components/HomePage.tsx");
var AboutPage_1 = __webpack_require__(/*! ./components/about/AboutPage */ "./src/flux/components/about/AboutPage.tsx");
var AuthorPage_1 = __webpack_require__(/*! ./components/authors/AuthorPage */ "./src/flux/components/authors/AuthorPage.tsx");
var ManageAuthorsPage_1 = __webpack_require__(/*! ./components/authors/ManageAuthorsPage */ "./src/flux/components/authors/ManageAuthorsPage.tsx");
var Error404_1 = __webpack_require__(/*! ./components/Error404 */ "./src/flux/components/Error404.tsx");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
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
    };
    return App;
}(React.Component));
exports.App = App;


/***/ }),

/***/ "./src/flux/Flux.tsx":
/*!***************************!*\
  !*** ./src/flux/Flux.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var InitializeActions_1 = __webpack_require__(/*! ./actions/InitializeActions */ "./src/flux/actions/InitializeActions.ts");
var BrowserRouter_1 = __webpack_require__(/*! ./BrowserRouter */ "./src/flux/BrowserRouter.tsx");
InitializeActions_1.InitializeActions.initApp();
var FluxTutorial = (function (_super) {
    __extends(FluxTutorial, _super);
    function FluxTutorial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FluxTutorial.prototype.render = function () {
        return (React.createElement(BrowserRouter_1.App, null));
    };
    return FluxTutorial;
}(React.Component));
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
var dispatcher_1 = __webpack_require__(/*! ../dispatcher */ "./src/flux/dispatcher/index.ts");
var ActionTypes_1 = __webpack_require__(/*! ../constants/ActionTypes */ "./src/flux/constants/ActionTypes.ts");
var AuthorApi_1 = __webpack_require__(/*! ../api/AuthorApi */ "./src/flux/api/AuthorApi.ts");
var InitializeActions = (function () {
    function InitializeActions() {
    }
    InitializeActions.initApp = function () {
        dispatcher_1.dispatcher.dispatch({
            actionType: ActionTypes_1.ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi_1.default.getAllAuthors()
            }
        });
    };
    return InitializeActions;
}());
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
var dispatcher_1 = __webpack_require__(/*! ../dispatcher */ "./src/flux/dispatcher/index.ts");
var ActionTypes_1 = __webpack_require__(/*! ../constants/ActionTypes */ "./src/flux/constants/ActionTypes.ts");
var AuthorApi_1 = __webpack_require__(/*! ../api/AuthorApi */ "./src/flux/api/AuthorApi.ts");
var AuthorActions = (function () {
    function AuthorActions() {
    }
    AuthorActions.createAuthor = function (author) {
        var newAuthor = AuthorApi_1.default.saveAuthor(author);
        dispatcher_1.dispatcher.dispatch({
            actionType: ActionTypes_1.ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    };
    AuthorActions.deleteAuthor = function (author) {
        AuthorApi_1.default.deleteAuthor(author.id);
        dispatcher_1.dispatcher.dispatch({
            actionType: ActionTypes_1.ActionTypes.DELETE_AUTHOR,
            author: author
        });
    };
    AuthorActions.updateAuthor = function (author) {
        var updatedAuthor = AuthorApi_1.default.saveAuthor(author);
        dispatcher_1.dispatcher.dispatch({
            actionType: ActionTypes_1.ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    };
    return AuthorActions;
}());
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
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var authorData_1 = __webpack_require__(/*! ./authorData */ "./src/flux/api/authorData.ts");
var authors = authorData_1.authorData.authors;
var AuthorApi = (function () {
    function AuthorApi() {
    }
    AuthorApi.getAllAuthors = function () {
        return this.clone(authors);
    };
    AuthorApi.getAuthorById = function (id) {
        var author = _.find(authors, { id: id });
        return this.clone(author);
    };
    AuthorApi.saveAuthor = function (author) {
        if (author.id) {
            var existingAuthorIndex = _.indexOf(authors, _.find(authors, { id: author.id }));
            authors.splice(existingAuthorIndex, 1, author);
        }
        else {
            author.id = this.generateId(author);
            authors.push(author);
        }
        return this.clone(author);
    };
    AuthorApi.deleteAuthor = function (id) {
        _.remove(authors, { id: id });
    };
    AuthorApi.generateId = function (author) {
        return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
    };
    AuthorApi.clone = function (item) {
        return JSON.parse(JSON.stringify(item));
    };
    return AuthorApi;
}());
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var Layout_1 = __webpack_require__(/*! ./common/Layout */ "./src/flux/components/common/Layout.tsx");
var Error404 = (function (_super) {
    __extends(Error404, _super);
    function Error404() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Error404.prototype.render = function () {
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "p-5" },
                React.createElement("h1", null, "Uh oh! Page not found"),
                React.createElement("p", null, "It looks like you made a wrong turn"),
                React.createElement(react_router_dom_1.Link, { className: "btn btn-primary", to: "home" }, "Take me home")) }));
    };
    return Error404;
}(React.Component));
exports.Error404 = Error404;


/***/ }),

/***/ "./src/flux/components/HomePage.tsx":
/*!******************************************!*\
  !*** ./src/flux/components/HomePage.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var Layout_1 = __webpack_require__(/*! ./common/Layout */ "./src/flux/components/common/Layout.tsx");
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.render = function () {
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "jumbotron" },
                React.createElement("h1", null, "Pluralsight Admin"),
                React.createElement("p", null, "React, React router, Flux"),
                React.createElement(react_router_dom_1.Link, { className: "btn btn-primary", to: "about" }, "Learn More")) }));
    };
    return HomePage;
}(React.Component));
exports.HomePage = HomePage;


/***/ }),

/***/ "./src/flux/components/about/AboutPage.tsx":
/*!*************************************************!*\
  !*** ./src/flux/components/about/AboutPage.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Layout_1 = __webpack_require__(/*! ../common/Layout */ "./src/flux/components/common/Layout.tsx");
var AboutPage = (function (_super) {
    __extends(AboutPage, _super);
    function AboutPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.techStack = [
            'React', 'React Router', 'Flux', 'Node', 'Gulp', 'Browserify', 'Bootstrap'
        ];
        return _this;
    }
    AboutPage.prototype.render = function () {
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "p-5" },
                React.createElement("h1", null, "About"),
                React.createElement("p", null, "This page uses the following technologies:"),
                React.createElement("ul", null, this.techStack.map(function (tech, i) { return React.createElement("li", { key: i }, tech); }))) }));
    };
    return AboutPage;
}(React.Component));
exports.AboutPage = AboutPage;


/***/ }),

/***/ "./src/flux/components/authors/AuthorForm.tsx":
/*!****************************************************!*\
  !*** ./src/flux/components/authors/AuthorForm.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var TextInput_1 = __webpack_require__(/*! ../common/TextInput */ "./src/flux/components/common/TextInput.tsx");
var AuthorForm = (function (_super) {
    __extends(AuthorForm, _super);
    function AuthorForm(props) {
        return _super.call(this, props) || this;
    }
    AuthorForm.prototype.render = function () {
        var errors = this.props.errors;
        return (React.createElement("form", { onSubmit: this.props.onSave },
            React.createElement(TextInput_1.TextInput, { name: "firstName", label: "First name", onChange: this.props.update, value: this.props.author.firstName, error: errors.firstName ? errors.firstName : false }),
            React.createElement(TextInput_1.TextInput, { name: "lastName", label: "Last name", onChange: this.props.update, error: errors.lastName ? errors.lastName : false, value: this.props.author.lastName }),
            React.createElement("button", { type: "submit", className: "btn btn-primary" }, "Submit")));
    };
    return AuthorForm;
}(React.Component));
exports.AuthorForm = AuthorForm;


/***/ }),

/***/ "./src/flux/components/authors/AuthorList.tsx":
/*!****************************************************!*\
  !*** ./src/flux/components/authors/AuthorList.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var authorActions_1 = __webpack_require__(/*! ../../actions/authorActions */ "./src/flux/actions/authorActions.ts");
var AuthorList = (function (_super) {
    __extends(AuthorList, _super);
    function AuthorList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthorList.prototype.getAuthorRow = function (author) {
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
                React.createElement("a", { href: "#", onClick: function () { return authorActions_1.AuthorActions.deleteAuthor(author); } }, "Delete"))));
    };
    AuthorList.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("h1", null, "Authors: "),
            React.createElement("table", { className: "table" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { scope: "col" }, "ID"),
                        React.createElement("th", { scope: "col" }, "Name"),
                        React.createElement("th", { scope: "col" }))),
                React.createElement("tbody", null, this.props.authors.map(function (author) { return _this.getAuthorRow(author); })))));
    };
    AuthorList.defaultProps = {
        authors: [],
        category: "default"
    };
    return AuthorList;
}(React.Component));
exports.default = AuthorList;


/***/ }),

/***/ "./src/flux/components/authors/AuthorPage.tsx":
/*!****************************************************!*\
  !*** ./src/flux/components/authors/AuthorPage.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var AuthorStore_1 = __webpack_require__(/*! ../../stores/AuthorStore */ "./src/flux/stores/AuthorStore.ts");
var AuthorList_1 = __webpack_require__(/*! ./AuthorList */ "./src/flux/components/authors/AuthorList.tsx");
var Layout_1 = __webpack_require__(/*! ../common/Layout */ "./src/flux/components/common/Layout.tsx");
var AuthorPage = (function (_super) {
    __extends(AuthorPage, _super);
    function AuthorPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            authors: AuthorStore_1.authorStore.getAllAuthors()
        };
        return _this;
    }
    AuthorPage.prototype.componentWillMount = function () {
        var _this = this;
        AuthorStore_1.authorStore.addChangeListener(function () { return _this.onChange(); });
    };
    AuthorPage.prototype.componentWillUnmount = function () {
        var _this = this;
        AuthorStore_1.authorStore.addChangeListener(function () { return _this.onChange(); });
    };
    AuthorPage.prototype.onChange = function () {
        this.setState({
            authors: AuthorStore_1.authorStore.getAllAuthors()
        });
    };
    AuthorPage.prototype.render = function () {
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "p-5" },
                React.createElement(AuthorList_1.default, { authors: this.state.authors }),
                React.createElement(react_router_dom_1.Link, { className: "btn btn-primary", to: "add-author" }, " Add new author")) }));
    };
    return AuthorPage;
}(React.Component));
exports.AuthorPage = AuthorPage;


/***/ }),

/***/ "./src/flux/components/authors/ManageAuthorsPage.tsx":
/*!***********************************************************!*\
  !*** ./src/flux/components/authors/ManageAuthorsPage.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var AuthorStore_1 = __webpack_require__(/*! ../../stores/AuthorStore */ "./src/flux/stores/AuthorStore.ts");
var authorActions_1 = __webpack_require__(/*! ../../actions/authorActions */ "./src/flux/actions/authorActions.ts");
var Layout_1 = __webpack_require__(/*! ../common/Layout */ "./src/flux/components/common/Layout.tsx");
var AuthorForm_1 = __webpack_require__(/*! ./AuthorForm */ "./src/flux/components/authors/AuthorForm.tsx");
var ManageAuthorsPage = (function (_super) {
    __extends(ManageAuthorsPage, _super);
    function ManageAuthorsPage(props) {
        var _this = _super.call(this, props) || this;
        _this.title = 'Create new author';
        _this.state = {
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
        var activeAuthor = props.match.params.id;
        if (activeAuthor) {
            activeAuthor = AuthorStore_1.authorStore.getAuthorById(activeAuthor);
            _this.title = 'Edit author';
            _this.state.author = {
                id: activeAuthor.id,
                firstName: activeAuthor.firstName,
                lastName: activeAuthor.lastName
            };
        }
        return _this;
    }
    ManageAuthorsPage.prototype.updateAuthor = function (e) {
        this.state.author[e.target.name] = e.target.value;
        this.setState({ author: this.state.author, dirty: true });
        if (this.state.invalid)
            this.formValid();
    };
    ManageAuthorsPage.prototype.onSaveAuthor = function (e) {
        e.preventDefault();
        if (!this.formValid())
            return;
        if (this.state.author.id)
            authorActions_1.AuthorActions.updateAuthor(this.state.author);
        else
            authorActions_1.AuthorActions.createAuthor(this.state.author);
        this.setState({ authorSaved: true, dirty: false });
    };
    ManageAuthorsPage.prototype.formValid = function () {
        this.state.errors = {};
        if (this.state.author.firstName.length < 3) {
            this.state.errors['firstName'] = 'First name must be at least 3 characters';
        }
        if (this.state.author.lastName.length < 3) {
            this.state.errors['lastName'] = 'Last name must be at least 3 characters';
        }
        this.setState({ errors: this.state.errors, invalid: true });
        return Object.keys(this.state.errors).length == 0;
    };
    ManageAuthorsPage.prototype.render = function () {
        var _this = this;
        if (this.state.authorSaved)
            return React.createElement(react_router_dom_1.Redirect, { to: "/authors" });
        return (React.createElement(Layout_1.Layout, { body: React.createElement("div", { className: "p-5" },
                React.createElement(react_router_dom_1.Prompt, { when: this.state.dirty, message: function () { return 'Leave page and lose your progress?'; } }),
                React.createElement("h1", null, this.title),
                React.createElement(AuthorForm_1.AuthorForm, { author: this.state.author, update: function (e) { return _this.updateAuthor(e); }, onSave: function (e) { return _this.onSaveAuthor(e); }, errors: this.state.errors }),
                React.createElement("p", { className: "mt-3" },
                    this.state.author.firstName,
                    " \u00A0",
                    this.state.author.lastName)) }));
    };
    return ManageAuthorsPage;
}(React.Component));
exports.ManageAuthorsPage = ManageAuthorsPage;


/***/ }),

/***/ "./src/flux/components/common/Layout.tsx":
/*!***********************************************!*\
  !*** ./src/flux/components/common/Layout.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var NavLinks_1 = __webpack_require__(/*! ./NavLinks */ "./src/flux/components/common/NavLinks.tsx");
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout(props) {
        return _super.call(this, props) || this;
    }
    Layout.prototype.render = function () {
        return (React.createElement("div", { className: "app-container" },
            React.createElement(NavLinks_1.NavLinks, null),
            this.props.body));
    };
    return Layout;
}(React.Component));
exports.Layout = Layout;


/***/ }),

/***/ "./src/flux/components/common/NavLinks.tsx":
/*!*************************************************!*\
  !*** ./src/flux/components/common/NavLinks.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var NavLinks = (function (_super) {
    __extends(NavLinks, _super);
    function NavLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavLinks.prototype.render = function () {
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
    };
    return NavLinks;
}(React.Component));
exports.NavLinks = NavLinks;


/***/ }),

/***/ "./src/flux/components/common/TextInput.tsx":
/*!**************************************************!*\
  !*** ./src/flux/components/common/TextInput.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var TextInput = (function (_super) {
    __extends(TextInput, _super);
    function TextInput(props) {
        var _this = _super.call(this, props) || this;
        _this.inputState = ['valid'];
        return _this;
    }
    TextInput.prototype.render = function () {
        var _this = this;
        this.inputState = ['valid'];
        if (this.props.error)
            this.inputState = ['has-error', 'invalid'];
        return (React.createElement("div", { className: 'form-group ' + this.inputState.join(' ') },
            React.createElement("label", { htmlFor: this.props.name }, this.props.label),
            React.createElement("input", { type: "text", className: "form-control", name: this.props.name, ref: this.props.name, placeholder: this.props.placeholder, onChange: function (e) { return _this.props.onChange(e); }, value: this.props.value }),
            React.createElement("small", { className: "text-danger" }, this.props.error)));
    };
    return TextInput;
}(React.Component));
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
var flux_1 = __webpack_require__(/*! flux */ "./node_modules/flux/index.js");
exports.dispatcher = new flux_1.Dispatcher();


/***/ }),

/***/ "./src/flux/stores/AuthorStore.ts":
/*!****************************************!*\
  !*** ./src/flux/stores/AuthorStore.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dispatcher_1 = __webpack_require__(/*! ../dispatcher */ "./src/flux/dispatcher/index.ts");
var ActionTypes_1 = __webpack_require__(/*! ../constants/ActionTypes */ "./src/flux/constants/ActionTypes.ts");
var events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var CHANGE_EVENT = 'change';
var authors = [];
var AuthorStore = (function (_super) {
    __extends(AuthorStore, _super);
    function AuthorStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthorStore.prototype.emitChange = function () {
        this.emit(CHANGE_EVENT);
    };
    AuthorStore.prototype.addChangeListener = function (callback) {
        this.on(CHANGE_EVENT, callback);
    };
    AuthorStore.prototype.removeChangeListener = function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    };
    AuthorStore.prototype.getAllAuthors = function () {
        return authors;
    };
    AuthorStore.prototype.getAuthorById = function (id) {
        return _.find(authors, { id: id });
    };
    return AuthorStore;
}(events_1.EventEmitter));
var authorStore = new AuthorStore();
exports.authorStore = authorStore;
dispatcher_1.dispatcher.register(function (action) {
    var author;
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
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var Hello_1 = __webpack_require__(/*! ./basic/Hello */ "./src/basic/Hello.tsx");
var Counter_1 = __webpack_require__(/*! ./basic/Counter */ "./src/basic/Counter.tsx");
var GithubViewer_1 = __webpack_require__(/*! ./basic/GithubViewer */ "./src/basic/GithubViewer.tsx");
var Flux_1 = __webpack_require__(/*! ./flux/Flux */ "./src/flux/Flux.tsx");
var mountNode = document.getElementById("app");
var activeExample = 'Flux';
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
}


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