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
/* harmony export */   OVERPASS_STATS_AREA_LIMIT_KM2: () => (/* binding */ OVERPASS_STATS_AREA_LIMIT_KM2),
/* harmony export */   RPC_WS_PATH: () => (/* binding */ RPC_WS_PATH),
/* harmony export */   WS_DOMAIN_NAME: () => (/* binding */ WS_DOMAIN_NAME),
/* harmony export */   d: () => (/* binding */ d),
/* harmony export */   e: () => (/* binding */ e),
/* harmony export */   getErrorMessage: () => (/* binding */ getErrorMessage),
/* harmony export */   t: () => (/* binding */ t)
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
const OVERPASS_STATS_AREA_LIMIT_KM2 = 250;
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
/** Like e, but using a timer */
function t(func, name) {
    return (...args) => __awaiter(this, void 0, void 0, function* () {
        const start = Date.now();
        try {
            return yield func(...args);
        }
        finally {
            d(`Executing ${name || func.name} took ${Date.now() - start}ms`);
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
const ClippedAndUnclippedXml = io_ts__WEBPACK_IMPORTED_MODULE_0__.type({
    clippedXml: io_ts__WEBPACK_IMPORTED_MODULE_0__.string,
    unclippedXml: io_ts__WEBPACK_IMPORTED_MODULE_0__.string,
});
const ServerCalls = {
    GetMapboxApiKey: () => ({
        i: io_ts__WEBPACK_IMPORTED_MODULE_0__["null"],
        o: io_ts__WEBPACK_IMPORTED_MODULE_0__.string,
    }),
    GetParkingAreas: () => ({
        i: io_ts__WEBPACK_IMPORTED_MODULE_0__.any,
        o: ClippedAndUnclippedXml,
    }),
};


/***/ }),

/***/ "./server/osmUtils.ts":
/*!****************************!*\
  !*** ./server/osmUtils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   osmconvertWithPolygon: () => (/* binding */ osmconvertWithPolygon),
/* harmony export */   osmiumSort: () => (/* binding */ osmiumSort),
/* harmony export */   savePolygonFormat: () => (/* binding */ savePolygonFormat)
/* harmony export */ });
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ "child_process");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./constants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Import child process tools




function execCommand(command) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0,_constants__WEBPACK_IMPORTED_MODULE_3__.e)((0,util__WEBPACK_IMPORTED_MODULE_1__.promisify)(child_process__WEBPACK_IMPORTED_MODULE_0__.exec))(command);
    });
}
function osmiumSort(inputFile) {
    return __awaiter(this, void 0, void 0, function* () {
        const outputFile = inputFile + ".sorted.xml";
        const command = `osmium sort ${inputFile} -o ${outputFile}`;
        yield execCommand(command);
        yield (0,util__WEBPACK_IMPORTED_MODULE_1__.promisify)((fs__WEBPACK_IMPORTED_MODULE_2___default().rename))(outputFile, inputFile);
    });
}
/**
 * Save the given polygon coordinates to the given filename in Polygon Filter Format
 * described at https://wiki.openstreetmap.org/wiki/Osmosis/Polygon_Filter_File_Format
 */
function savePolygonFormat(coords, filename) {
    return __awaiter(this, void 0, void 0, function* () {
        const header = "custom_poly\narea\n";
        const footer = "\nEND";
        const polyContents = header + coords.map(([lng, lat]) => ` ${lng} ${lat}`).join("\n") + footer;
        yield (0,util__WEBPACK_IMPORTED_MODULE_1__.promisify)((fs__WEBPACK_IMPORTED_MODULE_2___default().writeFile))(filename, polyContents);
    });
}
/**
 * Calls osmconvert on the input file with the given polygon file as a filter
 * saves the output to the given output file
 */
function osmconvertWithPolygon(inputFile, polygonFile, outputFile) {
    return __awaiter(this, void 0, void 0, function* () {
        const command = `osmconvert ${inputFile} -B=${polygonFile} -o=${outputFile}`;
        yield execCommand(command);
    });
}


/***/ }),

/***/ "./server/queryOverpass.ts":
/*!*********************************!*\
  !*** ./server/queryOverpass.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryOverpass: () => (/* binding */ queryOverpass)
/* harmony export */ });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./constants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const OVERPASS_INSTANCE_URL = "https://overpass-api.de/api/interpreter";
function queryOverpass(queryCode) {
    return __awaiter(this, void 0, void 0, function* () {
        (0,_constants__WEBPACK_IMPORTED_MODULE_1__.d)(`Querying overpass with query code:\n${queryCode}`);
        const url = `${OVERPASS_INSTANCE_URL}?data=${encodeURIComponent(queryCode)}`;
        const response = yield node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url);
        const text = yield response.text();
        return text;
    });
}


/***/ }),

/***/ "./server/rpcServer.ts":
/*!*****************************!*\
  !*** ./server/rpcServer.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRpcServer: () => (/* binding */ createRpcServer)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var roots_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! roots-rpc */ "roots-rpc");
/* harmony import */ var roots_rpc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(roots_rpc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rpc */ "./rpc.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./constants.ts");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @turf/turf */ "@turf/turf");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_turf_turf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _queryOverpass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./queryOverpass */ "./server/queryOverpass.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./server/utils.ts");
/* harmony import */ var _osmUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./osmUtils */ "./server/osmUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










const mapboxApiKey = process.env.MAPBOX_API_KEY;
function createRpcServer(socket) {
    const server = new roots_rpc__WEBPACK_IMPORTED_MODULE_3__.RpcServer(new roots_rpc__WEBPACK_IMPORTED_MODULE_3__.WebsocketTransport(socket, _constants__WEBPACK_IMPORTED_MODULE_5__.CLIENT_CALLS_SERVER_RPC_PREFIX));
    (0,_rpc__WEBPACK_IMPORTED_MODULE_4__.wrapServerErrors)(server);
    server.register(_rpc__WEBPACK_IMPORTED_MODULE_4__.ServerCalls.GetMapboxApiKey, () => __awaiter(this, void 0, void 0, function* () { return mapboxApiKey; }));
    server.register(_rpc__WEBPACK_IMPORTED_MODULE_4__.ServerCalls.GetParkingAreas, getParkingAreas);
    return server;
}
function getPolyFilter(coords) {
    return `poly:"${coords.map(([lng, lat]) => `${lat} ${lng}`).join(" ")}"`;
}
function getParkingAreas(i) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: remove cast if i make better io-ts typing for turf
        const input = (0,_turf_turf__WEBPACK_IMPORTED_MODULE_6__.unkinkPolygon)(i);
        const polygon = input.features[0].geometry;
        const coords = polygon.coordinates[0];
        // Docs for osmconvert say the output should have:
        // objects  ordered  by  their  type:  first, all nodes, next, all ways, followed by all
        // relations. Within each of these sections, the objects section must be sorted by their id
        // in ascending order.
        const overpassql = `
    [out:xml][timeout:30];
    (
      nwr["amenity"="parking"](${getPolyFilter(coords)});
    );
      out body;
      >;
      out body qt;`;
        const unclippedXml = yield (0,_queryOverpass__WEBPACK_IMPORTED_MODULE_7__.queryOverpass)(overpassql);
        const clippedXml = yield (0,_utils__WEBPACK_IMPORTED_MODULE_8__.withTempFolder)((tempFolder) => __awaiter(this, void 0, void 0, function* () {
            // Subtract 1 from number of points because the first and last point are the same
            (0,_constants__WEBPACK_IMPORTED_MODULE_5__.d)(`Processing ${(unclippedXml.length / 1000).toFixed(2)} kb XML in ${tempFolder} with polygon of ${coords.length - 1} points...`);
            const xmlFile = path__WEBPACK_IMPORTED_MODULE_0___default().join(tempFolder, "result.xml");
            const polygonFile = path__WEBPACK_IMPORTED_MODULE_0___default().join(tempFolder, "polygon.poly");
            const outputFile = path__WEBPACK_IMPORTED_MODULE_0___default().join(tempFolder, "output.xml");
            yield util__WEBPACK_IMPORTED_MODULE_2___default().promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile))(xmlFile, unclippedXml);
            yield (0,_osmUtils__WEBPACK_IMPORTED_MODULE_9__.savePolygonFormat)(coords, polygonFile);
            yield (0,_osmUtils__WEBPACK_IMPORTED_MODULE_9__.osmiumSort)(xmlFile);
            yield (0,_osmUtils__WEBPACK_IMPORTED_MODULE_9__.osmconvertWithPolygon)(xmlFile, polygonFile, outputFile);
            const result = yield util__WEBPACK_IMPORTED_MODULE_2___default().promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile))(outputFile, "utf-8");
            // TODO: Print elapsed time
            return result;
        }));
        return { clippedXml, unclippedXml };
    });
}


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
/* harmony export */   repoRoot: () => (/* binding */ repoRoot),
/* harmony export */   rmrf: () => (/* binding */ rmrf),
/* harmony export */   withTempFolder: () => (/* binding */ withTempFolder)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tmp_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tmp-promise */ "tmp-promise");
/* harmony import */ var tmp_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tmp_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./constants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const repoRoot = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(__filename, "..", "..");
const r = (relative) => path__WEBPACK_IMPORTED_MODULE_0___default().resolve(repoRoot, relative);
// Recursively delete a folder, does not throw any error
function rmrf(path) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0,_constants__WEBPACK_IMPORTED_MODULE_3__.e)(fs__WEBPACK_IMPORTED_MODULE_2__.promises.rm)(path, { recursive: true, force: true });
        }
        finally {
        }
    });
}
function withTempFolder(fn) {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a temporary folder
        const tempDir = yield tmp_promise__WEBPACK_IMPORTED_MODULE_1___default().dir();
        try {
            return yield (0,_constants__WEBPACK_IMPORTED_MODULE_3__.e)(fn, {
                errorPrefix: `Error from temp folder ${tempDir.path}`,
            })(tempDir.path);
        }
        finally {
            // Delete the temporary folder
            yield rmrf(tempDir.path);
        }
    });
}


/***/ }),

/***/ "@turf/turf":
/*!*****************************!*\
  !*** external "@turf/turf" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("@turf/turf");

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

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

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

/***/ "tmp-promise":
/*!******************************!*\
  !*** external "tmp-promise" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("tmp-promise");

/***/ }),

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("ws");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

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
/* harmony import */ var _rpcServer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rpcServer */ "./server/rpcServer.ts");
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
    const server = (0,_rpcServer__WEBPACK_IMPORTED_MODULE_7__.createRpcServer)(socket);
    socket.on("close", () => {
        server.dispose();
        (0,_constants__WEBPACK_IMPORTED_MODULE_5__.d)(`Client(${JSON.stringify(req.headers["user-agent"])}) disconnected`);
    });
}
main();

})();

/******/ })()
;
//# sourceMappingURL=server.bundle.js.map