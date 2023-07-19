/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./constants.ts":
/*!**********************!*\
  !*** ./constants.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIENT_CALLS_SERVER_RPC_PREFIX: () => (/* binding */ CLIENT_CALLS_SERVER_RPC_PREFIX),
/* harmony export */   DOMAIN: () => (/* binding */ DOMAIN),
/* harmony export */   RPC_WS_PATH: () => (/* binding */ RPC_WS_PATH),
/* harmony export */   WS_DOMAIN_NAME: () => (/* binding */ WS_DOMAIN_NAME),
/* harmony export */   d: () => (/* binding */ d),
/* harmony export */   e: () => (/* binding */ e),
/* harmony export */   getErrorMessage: () => (/* binding */ getErrorMessage)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// TODO: update the domain when I have picked a final domain name!
const DOMAIN = "devzone.pelmers.com";
const WS_DOMAIN_NAME = `wss://${DOMAIN}`;
const RPC_WS_PATH = "rpc";
const CLIENT_CALLS_SERVER_RPC_PREFIX = "ccsrp";
const DEBUG_LOG = true;
const d = DEBUG_LOG
    ? (...args) => console.log(...args)
    : (..._unused) => { };
function getErrorMessage(e) {
    if (e.message != null) {
        return e.message;
    }
    return "unknown error";
}
/**
 * Given async func, return new function with the same signature that wraps any errors func throws with a log
 */
function e(func, params = {}) {
    return (...args) => __awaiter(this, void 0, void 0, function* () {
        try {
            return yield func(...args);
        }
        catch (e) {
            const prefix = params.errorPrefix ? params.errorPrefix + ": " : "";
            const message = `${prefix}${getErrorMessage(e)}`;
            d(`Error: ${message}`);
            throw e;
        }
    });
}


/***/ }),

/***/ "./rpc.ts":
/*!****************!*\
  !*** ./rpc.ts ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerCalls: () => (/* binding */ ServerCalls),
/* harmony export */   wrapServerErrors: () => (/* binding */ wrapServerErrors)
/* harmony export */ });
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! io-ts */ "io-ts");
/* harmony import */ var io_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(io_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./constants.ts");


function wrapServerErrors(server) {
    const oldRegister = server.register.bind(server);
    server.register = (call, func) => oldRegister(call, (0,_constants__WEBPACK_IMPORTED_MODULE_1__.e)(func, { errorPrefix: call.name }));
}
function optional(typ) {
    return io_ts__WEBPACK_IMPORTED_MODULE_0__.union([io_ts__WEBPACK_IMPORTED_MODULE_0__["null"], io_ts__WEBPACK_IMPORTED_MODULE_0__.undefined, typ]);
}
const ServerCalls = {
    GetMapboxApiKey: () => ({
        i: io_ts__WEBPACK_IMPORTED_MODULE_0__["null"],
        o: io_ts__WEBPACK_IMPORTED_MODULE_0__.string,
    }),
};


/***/ }),

/***/ "./server/utils.ts":
/*!*************************!*\
  !*** ./server/utils.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var __filename = "server/utils.ts";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ r),
/* harmony export */   repoRoot: () => (/* binding */ repoRoot)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

const repoRoot = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(__filename, "..", "..");
const r = (relative) => path__WEBPACK_IMPORTED_MODULE_0___default().resolve(repoRoot, relative);


/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "console-stamp":
/*!********************************!*\
  !*** external "console-stamp" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("console-stamp");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "io-ts":
/*!************************!*\
  !*** external "io-ts" ***!
  \************************/
/***/ ((module) => {

module.exports = require("io-ts");

/***/ }),

/***/ "roots-rpc":
/*!****************************!*\
  !*** external "roots-rpc" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("roots-rpc");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("serve-favicon");

/***/ }),

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("ws");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./server/main.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! serve-favicon */ "serve-favicon");
/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(serve_favicon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var console_stamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! console-stamp */ "console-stamp");
/* harmony import */ var console_stamp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(console_stamp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ws */ "ws");
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./server/utils.ts");
/* harmony import */ var roots_rpc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! roots-rpc */ "roots-rpc");
/* harmony import */ var roots_rpc__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(roots_rpc__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rpc */ "./rpc.ts");
// Serve index.html on the route '/'
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









console_stamp__WEBPACK_IMPORTED_MODULE_3___default()(console);
const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const port = 4041;
const mapboxApiKey = process.env.MAPBOX_API_KEY;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        app.use(compression__WEBPACK_IMPORTED_MODULE_1___default()());
        app.use(serve_favicon__WEBPACK_IMPORTED_MODULE_2___default()((0,_utils__WEBPACK_IMPORTED_MODULE_6__.r)("static/favicon.ico")));
        app.use("/dist", express__WEBPACK_IMPORTED_MODULE_0___default()["static"]((0,_utils__WEBPACK_IMPORTED_MODULE_6__.r)("dist")));
        app.use("/static", express__WEBPACK_IMPORTED_MODULE_0___default()["static"]((0,_utils__WEBPACK_IMPORTED_MODULE_6__.r)("static")));
        app.get("/", (_, res) => res.sendFile((0,_utils__WEBPACK_IMPORTED_MODULE_6__.r)("index.html")));
        const server = app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
        const wss = new (ws__WEBPACK_IMPORTED_MODULE_4___default().Server)({ server });
        wss.on("connection", (socket, req) => {
            if (req.url === "/" + _constants__WEBPACK_IMPORTED_MODULE_5__.RPC_WS_PATH) {
                handleRpcConnection(socket, req);
            }
        });
    });
}
function handleRpcConnection(socket, req) {
    (0,_constants__WEBPACK_IMPORTED_MODULE_5__.d)(`Client(${JSON.stringify(req.headers["user-agent"])}) connected to ${req.url}`);
    const server = new roots_rpc__WEBPACK_IMPORTED_MODULE_7__.RpcServer(new roots_rpc__WEBPACK_IMPORTED_MODULE_7__.WebsocketTransport(socket, _constants__WEBPACK_IMPORTED_MODULE_5__.CLIENT_CALLS_SERVER_RPC_PREFIX));
    (0,_rpc__WEBPACK_IMPORTED_MODULE_8__.wrapServerErrors)(server);
    server.register(_rpc__WEBPACK_IMPORTED_MODULE_8__.ServerCalls.GetMapboxApiKey, () => __awaiter(this, void 0, void 0, function* () { return mapboxApiKey; }));
}
main();

})();

/******/ })()
;
//# sourceMappingURL=server.bundle.js.map