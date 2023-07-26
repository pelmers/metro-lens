(self["webpackChunk"] = self["webpackChunk"] || []).push([["client_index_MapComponent_tsx-data_image_svg_xml_charset_utf-8_3Csvg_viewBox_270_0_20_20_27_x-67c81b"],{

/***/ "../node_modules/css-loader/dist/cjs.js!./client/index/MapComponent.css":
/*!******************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./client/index/MapComponent.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.map-container-container {
  display: flex;
  margin: auto;
  max-width: 100vw;
  flex-flow: row wrap;
}

.map-container-with-style-select {
  flex: 1;
}

.map-container-with-style-select > div {
  width: 100%;
  max-width: 950px;
  min-width: calc(min(100vw, 600px));
  margin: auto;
}

.map-container {
  min-height: 620px;
}

.map-style-select {
  margin-left: 10px;
  font-weight: bold;
  display: none;
}

.map-style-select > label {
  margin-left: 4px;
}

/* in satellite view the black text can be hard to read */
.map-container-container.satellite-view .map-style-select {
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
}

/* tooltip with border that points to the right |> */
.tooltip-right {
  position: absolute;
  right: 33px;
  top: 30px;
  color: aliceblue;
  background-color: rgba(48, 48, 48, 0.9);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid rgba(48, 48, 48, 0.9);
  border-radius: 4px;
  text-align: right;
  width: 150px;
  font-style: italic;
  padding-right: 25px;
  transition: visibility 0.3s, opacity 0.5s linear;
}

/* tooltip that border that points to the right |> */
.tooltip-right:before {
  content: "";
  position: absolute;
  border-left: 15px solid #aaa;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  right: 0;
  top: 0;
}
`, "",{"version":3,"sources":["webpack://./client/index/MapComponent.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA,yDAAyD;AACzD;EACE,YAAY;EACZ,oCAAoC;AACtC;;AAEA,oDAAoD;AACpD;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,gBAAgB;EAChB,uCAAuC;EACvC,iCAAiC;EACjC,oCAAoC;EACpC,4CAA4C;EAC5C,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,gDAAgD;AAClD;;AAEA,oDAAoD;AACpD;EACE,WAAW;EACX,kBAAkB;EAClB,4BAA4B;EAC5B,iCAAiC;EACjC,oCAAoC;EACpC,QAAQ;EACR,MAAM;AACR","sourcesContent":[".map-container-container {\n  display: flex;\n  margin: auto;\n  max-width: 100vw;\n  flex-flow: row wrap;\n}\n\n.map-container-with-style-select {\n  flex: 1;\n}\n\n.map-container-with-style-select > div {\n  width: 100%;\n  max-width: 950px;\n  min-width: calc(min(100vw, 600px));\n  margin: auto;\n}\n\n.map-container {\n  min-height: 620px;\n}\n\n.map-style-select {\n  margin-left: 10px;\n  font-weight: bold;\n  display: none;\n}\n\n.map-style-select > label {\n  margin-left: 4px;\n}\n\n/* in satellite view the black text can be hard to read */\n.map-container-container.satellite-view .map-style-select {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n/* tooltip with border that points to the right |> */\n.tooltip-right {\n  position: absolute;\n  right: 33px;\n  top: 30px;\n  color: aliceblue;\n  background-color: rgba(48, 48, 48, 0.9);\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid rgba(48, 48, 48, 0.9);\n  border-radius: 4px;\n  text-align: right;\n  width: 150px;\n  font-style: italic;\n  padding-right: 25px;\n  transition: visibility 0.3s, opacity 0.5s linear;\n}\n\n/* tooltip that border that points to the right |> */\n.tooltip-right:before {\n  content: \"\";\n  position: absolute;\n  border-left: 15px solid #aaa;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  right: 0;\n  top: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./client/index/MapStatsComponent.css":
/*!***********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./client/index/MapStatsComponent.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* create stats container with fixed width and light gray background */
#map-stats-container {
  width: 410px;
  background-color: #f8f8f8;
  padding: 4px;
  margin-left: calc(min(2vw, 6px));
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #ddd;
  font-family: Consolas, Monaco, "Roboto Mono", monospace;
}

#map-stats-container > table > colgroup > col:nth-of-type(1) {
  width: 163px;
}

#map-stats-container > table > colgroup > col:nth-of-type(2) {
  width: calc(100% - 163px);
}

/* inline class is set when the stats are put inside of the map container */
#map-stats-container.map-stats-container-inline {
  width: 325px;
  background-color: rgba(248, 248, 248, 0.85);
  max-height: 480px;
  overflow-y: auto;
}

/* add a border, bold the values in the second column of the table */
#map-stats-container table tr td:nth-of-type(2) {
  border-left: 1px solid #ddd;
}

/* render missing values in a light orange color in italics */
#map-stats-container .map-stats-missing-value {
  color: #ff8a80;
  font-style: italic;
}

/* render linked values with bolded dark blue font but no underline */
#map-stats-container .map-stats-linked-value {
  color: #0d4069;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}

#map-stats-container .map-stats-linked-value:hover {
  color: #2196f3;
  text-decoration: underline;
}

/* render unlinked values with a bolded dark gray font */
#map-stats-container .map-stats-unlinked-value {
  color: #303030;
  font-weight: bold;
}

/* style the control area*/
#map-stats-container #map-stats-controls {
  margin-top: 8px;
}
#map-stats-container #map-stats-controls label:not(:last-of-type) {
  margin-right: 12px;
}

/* if the container is inline and screen is mobile, then hide the map-stats-labels */
@media screen and (max-width: 640px) {
  #map-stats-container.map-stats-container-inline {
    width: 190px;
    background-color: rgba(248, 248, 248, 0.85);
    max-height: 480px;
    overflow-y: auto;
  }
  #map-stats-container.map-stats-container-inline .map-stats-label {
    display: none;
  }
  #map-stats-container.map-stats-container-inline
    > table
    > colgroup
    > col:nth-of-type(1) {
    width: 30px;
  }
  #map-stats-container.map-stats-container-inline
    > table
    > colgroup
    > col:nth-of-type(2) {
    width: calc(100% - 30px);
  }
  #map-stats-container #map-stats-controls label:not(:last-of-type) {
    margin-right: 1px;
  }
}
`, "",{"version":3,"sources":["webpack://./client/index/MapStatsComponent.css"],"names":[],"mappings":"AAAA,sEAAsE;AACtE;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,gCAAgC;EAChC,kBAAkB;EAClB,sBAAsB;EACtB,wBAAwB;EACxB,uDAAuD;AACzD;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,2EAA2E;AAC3E;EACE,YAAY;EACZ,2CAA2C;EAC3C,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,oEAAoE;AACpE;EACE,2BAA2B;AAC7B;;AAEA,6DAA6D;AAC7D;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA,qEAAqE;AACrE;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,0BAA0B;AAC5B;;AAEA,wDAAwD;AACxD;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA,0BAA0B;AAC1B;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;;AAEA,oFAAoF;AACpF;EACE;IACE,YAAY;IACZ,2CAA2C;IAC3C,iBAAiB;IACjB,gBAAgB;EAClB;EACA;IACE,aAAa;EACf;EACA;;;;IAIE,WAAW;EACb;EACA;;;;IAIE,wBAAwB;EAC1B;EACA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["/* create stats container with fixed width and light gray background */\n#map-stats-container {\n  width: 410px;\n  background-color: #f8f8f8;\n  padding: 4px;\n  margin-left: calc(min(2vw, 6px));\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  box-shadow: 0 0 5px #ddd;\n  font-family: Consolas, Monaco, \"Roboto Mono\", monospace;\n}\n\n#map-stats-container > table > colgroup > col:nth-of-type(1) {\n  width: 163px;\n}\n\n#map-stats-container > table > colgroup > col:nth-of-type(2) {\n  width: calc(100% - 163px);\n}\n\n/* inline class is set when the stats are put inside of the map container */\n#map-stats-container.map-stats-container-inline {\n  width: 325px;\n  background-color: rgba(248, 248, 248, 0.85);\n  max-height: 480px;\n  overflow-y: auto;\n}\n\n/* add a border, bold the values in the second column of the table */\n#map-stats-container table tr td:nth-of-type(2) {\n  border-left: 1px solid #ddd;\n}\n\n/* render missing values in a light orange color in italics */\n#map-stats-container .map-stats-missing-value {\n  color: #ff8a80;\n  font-style: italic;\n}\n\n/* render linked values with bolded dark blue font but no underline */\n#map-stats-container .map-stats-linked-value {\n  color: #0d4069;\n  cursor: pointer;\n  font-weight: bold;\n  text-decoration: none;\n}\n\n#map-stats-container .map-stats-linked-value:hover {\n  color: #2196f3;\n  text-decoration: underline;\n}\n\n/* render unlinked values with a bolded dark gray font */\n#map-stats-container .map-stats-unlinked-value {\n  color: #303030;\n  font-weight: bold;\n}\n\n/* style the control area*/\n#map-stats-container #map-stats-controls {\n  margin-top: 8px;\n}\n#map-stats-container #map-stats-controls label:not(:last-of-type) {\n  margin-right: 12px;\n}\n\n/* if the container is inline and screen is mobile, then hide the map-stats-labels */\n@media screen and (max-width: 640px) {\n  #map-stats-container.map-stats-container-inline {\n    width: 190px;\n    background-color: rgba(248, 248, 248, 0.85);\n    max-height: 480px;\n    overflow-y: auto;\n  }\n  #map-stats-container.map-stats-container-inline .map-stats-label {\n    display: none;\n  }\n  #map-stats-container.map-stats-container-inline\n    > table\n    > colgroup\n    > col:nth-of-type(1) {\n    width: 30px;\n  }\n  #map-stats-container.map-stats-container-inline\n    > table\n    > colgroup\n    > col:nth-of-type(2) {\n    width: calc(100% - 30px);\n  }\n  #map-stats-container #map-stats-controls label:not(:last-of-type) {\n    margin-right: 1px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./client/index/components/ExpandableTableRow.css":
/*!***********************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./client/index/components/ExpandableTableRow.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* render descriptions with a blockquote blue border on the left and sans-serif font */
.expandable-table-row.row-description td {
  border-left: 4px solid #2196f3;
  padding: 8px;
  background: #d1d1d1;
  line-height: 1.4em;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

/* render labels with a cursor and highlight in blue on hover to indicate they can be expanded */
.expandable-table-row.row-label > td:nth-child(1):hover {
  cursor: pointer;
  color: #2196f3;
}

/* when not hovered add a very light blue underline */
.expandable-table-row.row-label > td:nth-child(1) > span {
  border-bottom: 1px solid #b8e8ff;
}
`, "",{"version":3,"sources":["webpack://./client/index/components/ExpandableTableRow.css"],"names":[],"mappings":"AAAA,sFAAsF;AACtF;EACE,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB;;cAEY;AACd;;AAEA,gGAAgG;AAChG;EACE,eAAe;EACf,cAAc;AAChB;;AAEA,qDAAqD;AACrD;EACE,gCAAgC;AAClC","sourcesContent":["/* render descriptions with a blockquote blue border on the left and sans-serif font */\n.expandable-table-row.row-description td {\n  border-left: 4px solid #2196f3;\n  padding: 8px;\n  background: #d1d1d1;\n  line-height: 1.4em;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n}\n\n/* render labels with a cursor and highlight in blue on hover to indicate they can be expanded */\n.expandable-table-row.row-label > td:nth-child(1):hover {\n  cursor: pointer;\n  color: #2196f3;\n}\n\n/* when not hovered add a very light blue underline */\n.expandable-table-row.row-label > td:nth-child(1) > span {\n  border-bottom: 1px solid #b8e8ff;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./client/index/MapComponent.css":
/*!***************************************!*\
  !*** ./client/index/MapComponent.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_MapComponent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./MapComponent.css */ "../node_modules/css-loader/dist/cjs.js!./client/index/MapComponent.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_MapComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_MapComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_MapComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_MapComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./client/index/MapStatsComponent.css":
/*!********************************************!*\
  !*** ./client/index/MapStatsComponent.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_MapStatsComponent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./MapStatsComponent.css */ "../node_modules/css-loader/dist/cjs.js!./client/index/MapStatsComponent.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_MapStatsComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_MapStatsComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_MapStatsComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_MapStatsComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./client/index/components/ExpandableTableRow.css":
/*!********************************************************!*\
  !*** ./client/index/components/ExpandableTableRow.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ExpandableTableRow_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./ExpandableTableRow.css */ "../node_modules/css-loader/dist/cjs.js!./client/index/components/ExpandableTableRow.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ExpandableTableRow_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ExpandableTableRow_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ExpandableTableRow_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ExpandableTableRow_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./client/index/MapComponent.tsx":
/*!***************************************!*\
  !*** ./client/index/MapComponent.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "../node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mapbox/mapbox-gl-draw */ "../node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js");
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mapbox/mapbox-gl-geocoder */ "../node_modules/@mapbox/mapbox-gl-geocoder/lib/index.js");
/* harmony import */ var _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @turf/turf */ "../node_modules/@turf/turf/dist/es/index.js");
/* harmony import */ var mapbox_gl_draw_circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mapbox-gl-draw-circle */ "../node_modules/mapbox-gl-draw-circle/index.js");
/* harmony import */ var _MapComponent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MapComponent.css */ "./client/index/MapComponent.css");
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ "../node_modules/mapbox-gl/dist/mapbox-gl.css");
/* harmony import */ var _mapbox_mapbox_gl_draw_dist_mapbox_gl_draw_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css */ "../node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css");
/* harmony import */ var _mapbox_mapbox_gl_geocoder_dist_mapbox_gl_geocoder_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css */ "../node_modules/@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./constants.ts");
/* harmony import */ var _rpcClient__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rpcClient */ "./client/rpcClient.ts");
/* harmony import */ var osmtogeojson__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! osmtogeojson */ "../node_modules/osmtogeojson/index.js");
/* harmony import */ var osmtogeojson__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(osmtogeojson__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _MapStatsComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MapStatsComponent */ "./client/index/MapStatsComponent.tsx");
/* harmony import */ var _mapUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../mapUtils */ "./client/mapUtils.tsx");
/* harmony import */ var _fetchPopulation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fetchPopulation */ "./client/index/fetchPopulation.tsx");
/* harmony import */ var _pickACity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../pickACity */ "./pickACity.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





// @ts-ignore untyped module












const MapStyles = {
    default: "mapbox://styles/pelmers/clkio1a3n00pm01qk9d17c5vv",
    satellite: "mapbox://styles/pelmers/cl8ilg939000u15o5hxcr1mjy",
};
const MapLayers = {
    SURFACE_PARKING_POLYGONS: {
        id: "surfaceParkingAreas",
        type: "fill",
        paint: {
            "fill-color": "red",
            "fill-opacity": 0.7,
        },
    },
    NATURE_AND_PARKS_POLYGONS: {
        id: "natureAndParks",
        type: "fill",
        paint: {
            "fill-color": "green",
            "fill-opacity": 0.5,
        },
    },
    WATERY_FEATURES_POLYGONS: {
        id: "wateryFeatures",
        type: "fill",
        paint: {
            "fill-color": "blue",
            "fill-opacity": 0.5,
        },
    },
    WATERY_FEATURES_LINES: {
        id: "wateryFeaturesLines",
        type: "line",
        paint: {
            "line-color": "blue",
            "line-opacity": 0.2,
            "line-width": {
                type: "exponential",
                base: 1.5,
                stops: [
                    [14, 1],
                    [18, 15],
                    [22, 130],
                ],
            },
        },
    },
    STREETS_FEATURES_LINES: {
        id: "streetsFeaturesLines",
        type: "line",
        paint: {
            "line-color": "#b3b300",
            "line-opacity": 0.5,
            "line-width": {
                type: "exponential",
                base: 1.5,
                stops: [
                    [14, 1],
                    [18, 15],
                    [22, 130],
                ],
            },
        },
    },
    ROADS_FEATURES_LINES: {
        id: "roadsFeaturesLines",
        type: "line",
        paint: {
            "line-color": "#b3b300",
            "line-opacity": 0.7,
            "line-width": {
                type: "exponential",
                base: 1.5,
                stops: [
                    [12, 0.5],
                    [18, 22],
                    [22, 220],
                ],
            },
        },
    },
    HIGHWAYS_FEATURES_LINES: {
        id: "highwaysFeaturesLines",
        type: "line",
        paint: {
            "line-color": "orange",
            "line-opacity": 0.9,
            "line-width": {
                type: "exponential",
                base: 1.5,
                stops: [
                    [3, 0.8],
                    [18, 32],
                    [22, 320],
                ],
            },
        },
    },
    CYCLEWAYS_FEATURES_LINES: {
        id: "cyclewaysFeaturesLines",
        type: "line",
        paint: {
            "line-color": "#006400",
            "line-opacity": 0.6,
            "line-width": {
                type: "exponential",
                base: 1.5,
                stops: [
                    [14, 0.5],
                    [18, 14],
                ],
            },
        },
    },
};
const OverpassAreaTooBigValue = {
    missing: `Selection too large (>${_constants__WEBPACK_IMPORTED_MODULE_10__.OVERPASS_STATS_AREA_MAX_KM2} km²)`,
};
const HighwayAreaTooBigValue = {
    missing: `Selection too large (>${_constants__WEBPACK_IMPORTED_MODULE_10__.HIGHWAY_STATS_AREA_MAX_KM2} km²)`,
};
function showTemporaryTooltip(options) {
    const tooltip = document.createElement("div");
    tooltip.className = `tooltip-${options.align}`;
    tooltip.textContent = options.text;
    tooltip.style.top = `${options.top}px`;
    options.target.appendChild(tooltip);
    setTimeout(() => {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
    }, options.timer);
}
const getTransitCountsStats = (0,_constants__WEBPACK_IMPORTED_MODULE_10__.wrapWithDefault)({ railStops: _MapStatsComponent__WEBPACK_IMPORTED_MODULE_13__.ErrorValue, totalTransitLines: _MapStatsComponent__WEBPACK_IMPORTED_MODULE_13__.ErrorValue }, (borders, areaKm2, assertUpdateId) => __awaiter(void 0, void 0, void 0, function* () {
    if (areaKm2 > _constants__WEBPACK_IMPORTED_MODULE_10__.OVERPASS_STATS_AREA_MAX_KM2) {
        return {
            railStops: OverpassAreaTooBigValue,
            totalTransitLines: OverpassAreaTooBigValue,
        };
    }
    const { railStops, totalLines, query } = yield (0,_rpcClient__WEBPACK_IMPORTED_MODULE_11__.getTransitCounts)(borders);
    assertUpdateId();
    return {
        railStops: { value: railStops, units: "", query },
        totalTransitLines: { value: totalLines, units: "", query },
    };
}));
const fetchAndClassifyHighways = (borders) => __awaiter(void 0, void 0, void 0, function* () {
    const allHighways = yield (0,_rpcClient__WEBPACK_IMPORTED_MODULE_11__.getHighways)(borders);
    const xmlObject = new DOMParser().parseFromString(allHighways.xml, "text/xml");
    const geoJsons = osmtogeojson__WEBPACK_IMPORTED_MODULE_12___default()(xmlObject);
    const { linestrings, points } = (0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.splitFeatureCollection)(geoJsons);
    const result = {
        streets: (0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.EmptyFeatureCollection)(),
        roads: (0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.EmptyFeatureCollection)(),
        highways: (0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.EmptyFeatureCollection)(),
        cycleways: (0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.EmptyFeatureCollection)(),
    };
    for (const linestring of linestrings.features) {
        switch (linestring.properties.highway) {
            case "cycleway":
                result.cycleways.features.push(linestring);
                break;
            case "trunk":
            case "motorway":
            case "primary":
                result.highways.features.push(linestring);
                break;
            case "secondary":
            case "motorway_link":
            case "trunk_link":
                result.roads.features.push(linestring);
                break;
            case "service":
            case "tertiary":
            case "unclassified":
            case "living_street":
            case "residential":
            case "primary_link":
            case "secondary_link":
            case "tertiary_link":
                result.streets.features.push(linestring);
                break;
            default:
                if (linestring.properties.cycleway === "track" ||
                    linestring.properties.cycleway === "separate") {
                    result.cycleways.features.push(linestring);
                }
        }
    }
    // For each result value, clip lines at border
    for (const [key, value] of Object.entries(result)) {
        if (key === "busStops")
            continue;
        result[key] = (0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.clipLineSegmentsAtBorder)(value, borders);
    }
    const busFeatures = points.features.filter((p) => p.properties.highway === "bus_stop");
    return Object.assign(Object.assign({}, result), { busStops: _turf_turf__WEBPACK_IMPORTED_MODULE_4__.featureCollection(busFeatures), query: allHighways.query });
});
class MapComponent extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    constructor(props) {
        super(props);
        this.updateId = 0;
        this.drawControl = new (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_2___default())({
            displayControlsDefault: false,
            // Select which mapbox-gl-draw control buttons to add to the map.
            controls: {
                polygon: true,
                trash: true,
            },
            modes: Object.assign(Object.assign({}, (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_2___default().modes)), { drag_circle: mapbox_gl_draw_circle__WEBPACK_IMPORTED_MODULE_5__.DragCircleMode }),
        });
        this.mapControl = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default().NavigationControl)({ visualizePitch: true });
        this.geocoderControl = new (_mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3___default())({
            accessToken: this.props.apiKey,
            mapboxgl: (mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default()),
        });
        this.mapDivRef = react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
        this.satelliteSelectRef = react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
        this.state = {
            style: MapStyles.default,
            stats: (0,_MapStatsComponent__WEBPACK_IMPORTED_MODULE_13__.DefaultStats)(),
            isLoading: false,
        };
        this.updateHighwayMapAndGetStats = (0,_constants__WEBPACK_IMPORTED_MODULE_10__.wrapWithDefault)({
            busStops: _MapStatsComponent__WEBPACK_IMPORTED_MODULE_13__.ErrorValue,
            highwayLength: _MapStatsComponent__WEBPACK_IMPORTED_MODULE_13__.ErrorValue,
            cyclewayLength: _MapStatsComponent__WEBPACK_IMPORTED_MODULE_13__.ErrorValue,
            highwayArea: _MapStatsComponent__WEBPACK_IMPORTED_MODULE_13__.ErrorValue,
            cyclewayArea: _MapStatsComponent__WEBPACK_IMPORTED_MODULE_13__.ErrorValue,
        }, (borders, areaKm2, updateId) => __awaiter(this, void 0, void 0, function* () {
            if (areaKm2 > _constants__WEBPACK_IMPORTED_MODULE_10__.HIGHWAY_STATS_AREA_MAX_KM2) {
                return {
                    busStops: HighwayAreaTooBigValue,
                    highwayLength: HighwayAreaTooBigValue,
                    cyclewayLength: HighwayAreaTooBigValue,
                    highwayArea: HighwayAreaTooBigValue,
                    cyclewayArea: HighwayAreaTooBigValue,
                };
            }
            const { streets, roads, highways, cycleways, busStops, query } = yield fetchAndClassifyHighways(borders);
            this.assertUpdateId(updateId);
            this.map.getSource(MapLayers.STREETS_FEATURES_LINES.id).setData(streets);
            this.map.getSource(MapLayers.ROADS_FEATURES_LINES.id).setData(roads);
            this.map.getSource(MapLayers.HIGHWAYS_FEATURES_LINES.id).setData(highways);
            this.map.getSource(MapLayers.CYCLEWAYS_FEATURES_LINES.id).setData(cycleways);
            const stats = {
                cyclewayLength: {
                    value: 0,
                    units: "km",
                    query,
                },
                cyclewayArea: {
                    value: 0,
                    units: "km²",
                    query,
                },
                highwayLength: {
                    value: 0,
                    units: "km",
                    query,
                },
                highwayArea: {
                    value: 0,
                    units: "km²",
                    query,
                },
                busStops: {
                    value: busStops.features.length,
                    units: "",
                    query,
                },
            };
            for (const cycleway of cycleways.features) {
                const wayLength = _turf_turf__WEBPACK_IMPORTED_MODULE_4__.length(cycleway, { units: "kilometers" });
                stats.cyclewayLength.value += wayLength;
                stats.cyclewayArea.value +=
                    (wayLength * (0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.estimateHighwayFeatureWidth)(cycleway)) /
                        1000;
            }
            for (const highway of highways.features
                .concat(roads.features)
                .concat(streets.features)) {
                const wayLength = _turf_turf__WEBPACK_IMPORTED_MODULE_4__.length(highway, { units: "kilometers" });
                stats.highwayLength.value += wayLength;
                stats.highwayArea.value +=
                    (wayLength * (0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.estimateHighwayFeatureWidth)(highway)) /
                        1000;
            }
            return Object.assign({}, stats);
        }));
        this.assertUpdateId = (id) => {
            if (id !== this.updateId) {
                throw new Error(`abort update for ${id}, new update is ${this.updateId}`);
            }
        };
        // TODO: put up a loading spinner that blocks the map while we wait for the stats to load
        this.updateDrawing = (_evt) => __awaiter(this, void 0, void 0, function* () {
            // TODO: if there are multiple polygons only update the one that was changed
            this.updateId++;
            const currentUpdateId = this.updateId;
            const data = this.drawControl.getAll();
            if (data.features.length == 0) {
                this.deleteFeatures();
                return;
            }
            // Since react batches state updates, if we updated with setState many times,
            // only the last one would be reflected. We don't know in advance the order and timing
            // so we keep a batch object that contains all stats so far, and use it as the new state each time.
            const currentBatchStats = (0,_MapStatsComponent__WEBPACK_IMPORTED_MODULE_13__.AllLoadingStats)();
            const assertUpdateId = () => this.assertUpdateId(currentUpdateId);
            const setCurrentBatchState = (isLoading = true) => {
                if (currentUpdateId !== this.updateId)
                    return;
                this.setState({ stats: Object.assign({}, currentBatchStats), isLoading });
            };
            setCurrentBatchState();
            const area = {
                value: _turf_turf__WEBPACK_IMPORTED_MODULE_4__.area(data) / 1000000,
                units: "km²",
            };
            const perimeter = {
                value: _turf_turf__WEBPACK_IMPORTED_MODULE_4__.length(data, { units: "kilometers" }),
                units: "km",
            };
            currentBatchStats.area = area;
            currentBatchStats.perimeter = perimeter;
            setCurrentBatchState();
            const updateAreaFeature = (0,_constants__WEBPACK_IMPORTED_MODULE_10__.wrapWithDefault)(_MapStatsComponent__WEBPACK_IMPORTED_MODULE_13__.ErrorValue, (overpassQueryFn, polygonLayerId, lineLayerId) => __awaiter(this, void 0, void 0, function* () {
                if (area.value > _constants__WEBPACK_IMPORTED_MODULE_10__.OVERPASS_STATS_AREA_MAX_KM2) {
                    return OverpassAreaTooBigValue;
                }
                const areas = yield overpassQueryFn(data);
                assertUpdateId();
                const xmlObject = new DOMParser().parseFromString(areas.xml, "text/xml");
                const geoJsons = osmtogeojson__WEBPACK_IMPORTED_MODULE_12___default()(xmlObject);
                let { polygons, linestrings } = (0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.splitFeatureCollection)(geoJsons);
                polygons = (0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.clipPolygonsAtBorder)(polygons, data);
                this.map.getSource(polygonLayerId).setData(polygons);
                if (lineLayerId) {
                    linestrings = (0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.clipLineSegmentsAtBorder)(linestrings, data);
                    this.map.getSource(lineLayerId).setData(linestrings);
                }
                // TODO: for correctness we should take the union of all polygons before calculating area
                // otherwise we would double count the area of overlapping polygons
                // but this method is super super slow, there should be some faster way
                // const union = unionPolygon(polygons);
                const union = polygons;
                const areaValueM2 = _turf_turf__WEBPACK_IMPORTED_MODULE_4__.area(union ? union : polygons);
                return {
                    value: areaValueM2 / 1000000,
                    units: "km²",
                    query: areas.query,
                };
            }));
            const updatePromises = [];
            updatePromises.push(...[
                {
                    key: "parkingArea",
                    id: MapLayers.SURFACE_PARKING_POLYGONS.id,
                    fn: _rpcClient__WEBPACK_IMPORTED_MODULE_11__.getParkingAreas,
                    // TODO: include on-street parking in calculation
                    // https://wiki.openstreetmap.org/wiki/Street_parking#Physical_properties
                },
                {
                    key: "natureArea",
                    id: MapLayers.NATURE_AND_PARKS_POLYGONS.id,
                    fn: _rpcClient__WEBPACK_IMPORTED_MODULE_11__.getNatureAndParkAreas,
                },
                {
                    key: "wateryArea",
                    id: MapLayers.WATERY_FEATURES_POLYGONS.id,
                    lineId: MapLayers.WATERY_FEATURES_LINES.id,
                    fn: _rpcClient__WEBPACK_IMPORTED_MODULE_11__.getWateryAreas,
                },
            ].map(({ key, id, fn, lineId }) => __awaiter(this, void 0, void 0, function* () {
                const value = yield updateAreaFeature(fn, id, lineId);
                currentBatchStats[key] = value;
                setCurrentBatchState();
            })));
            updatePromises.push((0,_fetchPopulation__WEBPACK_IMPORTED_MODULE_15__.fetchPopulation)(data, area.value).then((value) => {
                currentBatchStats.population = value;
                setCurrentBatchState();
            }));
            updatePromises.push(this.updateHighwayMapAndGetStats(data, area.value, currentUpdateId).then((stats) => {
                for (const [key, value] of Object.entries(stats)) {
                    currentBatchStats[key] = value;
                }
                setCurrentBatchState();
            }));
            updatePromises.push(getTransitCountsStats(data, area.value, assertUpdateId).then(({ railStops, totalTransitLines }) => {
                currentBatchStats.railStops = railStops;
                currentBatchStats.totalTransitLines = totalTransitLines;
                setCurrentBatchState();
            }));
            try {
                yield Promise.all(updatePromises);
                assertUpdateId();
            }
            catch (err) {
                console.error(err);
            }
            setCurrentBatchState(false);
        });
        this.deleteFeatures = () => {
            for (const layer of Object.values(MapLayers)) {
                this.map.getSource(layer.id).setData((0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.EmptyFeatureCollection)());
            }
            this.setState({
                stats: (0,_MapStatsComponent__WEBPACK_IMPORTED_MODULE_13__.DefaultStats)(),
            });
        };
        if (props.initialState) {
            this.state = Object.assign(Object.assign({}, this.state), props.initialState);
        }
    }
    setMapSources() {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise((resolve) => {
                this.map.once("styledata", () => {
                    for (const layer of Object.values(MapLayers)) {
                        this.map.addSource(layer.id, {
                            type: "geojson",
                            data: (0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.EmptyFeatureCollection)(),
                        });
                        this.map.addLayer(Object.assign(Object.assign({}, layer), { source: layer.id }));
                    }
                    // Add layers for measurement rendering
                    this.map.addSource("_measurements", {
                        type: "geojson",
                        data: {
                            type: "FeatureCollection",
                            features: [],
                        },
                    });
                    // measurements layer
                    this.map.addLayer({
                        id: "_measurements",
                        source: "_measurements",
                        type: "symbol",
                        paint: {
                            "text-color": "hsl(234, 100%, 32%)",
                            "text-halo-color": "hsl(0, 0%, 100%)",
                            "text-halo-width": 2,
                        },
                        layout: {
                            "text-field": "{label}",
                            "text-size": 16,
                        },
                    });
                    resolve();
                });
            });
        });
    }
    constructMap() {
        return __awaiter(this, void 0, void 0, function* () {
            const center = (0,_pickACity__WEBPACK_IMPORTED_MODULE_16__.randomCityCenter)();
            this.map = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default().Map)({
                container: this.mapDivRef.current,
                style: this.state.style,
                accessToken: this.props.apiKey,
                center,
                zoom: 12,
            });
            this.map.addControl(this.geocoderControl, "top-left");
            this.map.addControl(this.mapControl);
            // Add geolocate control
            this.map.addControl(new (mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default().GeolocateControl)({
                positionOptions: {
                    enableHighAccuracy: true,
                },
                trackUserLocation: true,
            }));
            this.map.addControl(this.drawControl);
            // TODO: the correct button isn't highlighted as active when clicked
            (0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.addDrawControlButton)("/static/icons/circle.svg", () => {
                this.drawControl.changeMode("drag_circle");
            });
            this.map.on("draw.create", this.updateDrawing);
            this.map.on("draw.update", this.updateDrawing);
            this.map.on("draw.delete", this.updateDrawing);
            this.map.on("draw.render", () => (0,_mapUtils__WEBPACK_IMPORTED_MODULE_14__.renderDrawMeasurements)(this.map, this.drawControl.getAll()));
            const drawPolyButton = document.querySelector(".mapbox-gl-draw_ctrl-draw-btn.mapbox-gl-draw_polygon");
            const drawCircleButton = document.querySelector(".mapbox-gl-draw_ctrl-draw-btn.mapbox-gl-draw_circle");
            showTemporaryTooltip({
                align: "right",
                timer: 16000,
                text: "Click to draw a polygon",
                target: drawPolyButton,
                top: 0,
            });
            showTemporaryTooltip({
                align: "right",
                timer: 16000,
                text: "Click to draw a circle",
                target: drawCircleButton,
                top: 30,
            });
            // Add the satellite select button as a child of the .mapboxgl-ctrl-top-left div
            const topLeftDiv = document.querySelector(".mapboxgl-ctrl-top-left");
            if (topLeftDiv) {
                topLeftDiv.appendChild(this.satelliteSelectRef.current);
            }
            this.satelliteSelectRef.current.style.display = "block";
            yield this.setMapSources();
        });
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.constructMap();
        });
    }
    componentWillUpdate(nextProps, nextState) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.state.style !== nextState.style) {
                this.map.setStyle(nextState.style);
                yield this.setMapSources();
                yield this.updateDrawing({ type: "stylechange" });
            }
        });
    }
    render() {
        const styleClass = this.state.style === MapStyles.satellite
            ? "satellite-view"
            : "default-view";
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `map-container-container ${styleClass}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "map-container-with-style-select" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "map-style-select mapboxgl-ctrl", ref: this.satelliteSelectRef },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", id: "map-style-select", name: "map-style-select", checked: this.state.style === MapStyles.satellite, onChange: (e) => {
                            this.setState({
                                style: e.target.checked
                                    ? MapStyles.satellite
                                    : MapStyles.default,
                            });
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "map-style-select" }, "\uD83D\uDEF0\uFE0F Satellite")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "map-container mapboxgl-ctrl", ref: this.mapDivRef })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapStatsComponent__WEBPACK_IMPORTED_MODULE_13__.MapStatsComponent, Object.assign({}, this.state.stats))));
    }
}


/***/ }),

/***/ "./client/index/MapStatsComponent.tsx":
/*!********************************************!*\
  !*** ./client/index/MapStatsComponent.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllLoadingStats: () => (/* binding */ AllLoadingStats),
/* harmony export */   DefaultStats: () => (/* binding */ DefaultStats),
/* harmony export */   ErrorValue: () => (/* binding */ ErrorValue),
/* harmony export */   LoadingValue: () => (/* binding */ LoadingValue),
/* harmony export */   MapStatsComponent: () => (/* binding */ MapStatsComponent),
/* harmony export */   NoPolygonValue: () => (/* binding */ NoPolygonValue)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "../node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./constants.ts");
/* harmony import */ var _MapStatsComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapStatsComponent.css */ "./client/index/MapStatsComponent.css");
/* harmony import */ var _components_ExpandableTableRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ExpandableTableRow */ "./client/index/components/ExpandableTableRow.tsx");





const NoPolygonValue = {
    missing: "Draw a shape",
};
const ErrorValue = {
    missing: "Error (see console)",
};
const LoadingValue = {
    missing: "Loading...",
};
class DefaultProps {
    constructor() {
        this.area = NoPolygonValue;
        this.perimeter = NoPolygonValue;
        this.population = NoPolygonValue;
        this.parkingArea = NoPolygonValue;
        this.natureArea = NoPolygonValue;
        this.wateryArea = NoPolygonValue;
        this.highwayLength = NoPolygonValue;
        this.cyclewayLength = NoPolygonValue;
        this.highwayArea = NoPolygonValue;
        this.cyclewayArea = NoPolygonValue;
        this.busStops = NoPolygonValue;
        this.totalTransitLines = NoPolygonValue;
        this.railStops = NoPolygonValue;
    }
}
const DefaultStats = () => new DefaultProps();
const AllLoadingStats = () => {
    const props = new DefaultProps();
    for (const key of Object.keys(props)) {
        props[key] = LoadingValue;
    }
    return props;
};
function EmojiLabelComponent(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "map-stats-emoji-label" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "map-stats-emoji" }, props.emoji),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "map-stats-label" }, " " + props.label)));
}
class MapStatsComponent extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    constructor() {
        super(...arguments);
        this.containerRef = react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
        this.state = {
            inline: false,
            metric: true,
            density: false,
        };
    }
    valueToDisplay(stat, options) {
        var _a, _b;
        const isEstimate = (_a = options === null || options === void 0 ? void 0 : options.isEstimate) !== null && _a !== void 0 ? _a : false;
        const skipDensity = (_b = options === null || options === void 0 ? void 0 : options.skipDensity) !== null && _b !== void 0 ? _b : false;
        if ("missing" in stat) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "map-stats-missing-value" }, stat.missing);
        }
        else {
            let { value, units } = stat;
            // Stats are given as metric by default
            if (!this.state.metric) {
                if (stat.units === "km²") {
                    value *= 0.386102;
                    units = "mi²";
                }
                else if (stat.units == "km") {
                    value *= 0.621371;
                    units = "mi";
                }
            }
            if (this.state.density && "value" in this.props.area && !skipDensity) {
                const areaKm2 = this.props.area.value;
                const areaMaybeMi2 = this.state.metric ? areaKm2 : areaKm2 * 0.386102;
                if (stat.units === "km²") {
                    value = (stat.value / areaKm2) * 100;
                    units = "%";
                }
                else {
                    value = value / areaMaybeMi2;
                    units = units + (this.state.metric ? "/km²" : "/mi²");
                }
            }
            const text = `${isEstimate ? "~" : ""}${(0,_constants__WEBPACK_IMPORTED_MODULE_1__.numberForDisplay)(value)} ${units}`;
            return stat.query ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "map-stats-linked-value", href: `https://overpass-turbo.eu/?Q=${encodeURIComponent(stat.query)}`, target: "_blank", rel: "noopener noreferrer" }, text)) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "map-stats-unlinked-value" }, text));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        var _a;
        if (prevState.inline === this.state.inline) {
            return;
        }
        // First remove from DOM
        if ((_a = this.containerRef.current) === null || _a === void 0 ? void 0 : _a.parentElement) {
            // this.containerRef.current.parentElement.removeChild(
            //   this.containerRef.current
            // );
        }
        // If it is now inline, then move the container div to be a child of the bottom-left map control
        if (this.state.inline) {
            const mapControlContainer = document.querySelector(".mapboxgl-ctrl-bottom-left > .mapboxgl-ctrl");
            if (mapControlContainer) {
                // Insert as first child
                mapControlContainer.insertBefore(this.containerRef.current, mapControlContainer.firstChild);
            }
        }
        else {
            // Otherwise, move it to a sibling of the map container (child of map container container)
            const mapContainerContainer = document.querySelector(".map-container-container");
            if (mapContainerContainer) {
                mapContainerContainer.appendChild(this.containerRef.current);
            }
        }
    }
    render() {
        const { props } = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "map-stats-container", ref: this.containerRef, className: this.state.inline ? "map-stats-container-inline" : "" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("colgroup", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("col", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("col", null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExpandableTableRow__WEBPACK_IMPORTED_MODULE_3__.ExpandableTableRow, { label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmojiLabelComponent, { emoji: "\uD83D\uDDFA\uFE0F", label: "Area" }), value: this.valueToDisplay(props.area, { skipDensity: true }), description: "Area of the drawn shape." }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExpandableTableRow__WEBPACK_IMPORTED_MODULE_3__.ExpandableTableRow, { label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmojiLabelComponent, { emoji: "\uD83D\uDCCF", label: "Perimeter" }), value: this.valueToDisplay(props.perimeter, {
                            skipDensity: true,
                        }), description: "Perimeter of the drawn shape." }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExpandableTableRow__WEBPACK_IMPORTED_MODULE_3__.ExpandableTableRow, { label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmojiLabelComponent, { emoji: "\uD83D\uDC65", label: "Population" }), value: this.valueToDisplay(props.population, {
                            isEstimate: true,
                        }), description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_markdown__WEBPACK_IMPORTED_MODULE_4__.ReactMarkdown, { linkTarget: "_blank" }, "Estimated population within the drawn shape. Data source: [WorldPop 2020](https://www.worldpop.org/).") }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExpandableTableRow__WEBPACK_IMPORTED_MODULE_3__.ExpandableTableRow, { label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmojiLabelComponent, { emoji: "\uD83C\uDD7F\uFE0F", label: "Parking Area" }), value: this.valueToDisplay(props.parkingArea), description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_markdown__WEBPACK_IMPORTED_MODULE_4__.ReactMarkdown, { linkTarget: "_blank" }, "Total area of all [dedicated parking amenities](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) within the shape. Does not include on-street parking. Shown in red on the map. Click number for data source.") }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExpandableTableRow__WEBPACK_IMPORTED_MODULE_3__.ExpandableTableRow, { label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmojiLabelComponent, { emoji: "\uD83D\uDEE3\uFE0F", label: "Road Length" }), value: this.valueToDisplay(props.highwayLength), description: "Total length of all vehicle-accessible roads within the shape. Click number for data source. Shown in shades of yellow or orange on the map." }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExpandableTableRow__WEBPACK_IMPORTED_MODULE_3__.ExpandableTableRow, { label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmojiLabelComponent, { emoji: "\uD83D\uDE99\uFE0F", label: "Road Area" }), value: this.valueToDisplay(props.highwayArea, {
                            isEstimate: true,
                        }), description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_markdown__WEBPACK_IMPORTED_MODULE_4__.ReactMarkdown, { linkTarget: "_blank" }, "Total area of all vehicle-accessible roads within the shape. Estimate based on lane data of roads and [heuristics for road width](https://en.wikipedia.org/wiki/Lane#Lane_width).") }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExpandableTableRow__WEBPACK_IMPORTED_MODULE_3__.ExpandableTableRow, { label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmojiLabelComponent, { emoji: "\uD83D\uDEB4\u200D\u2642\uFE0F", label: "Cycle Paths" }), value: this.valueToDisplay(props.cyclewayLength), description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_markdown__WEBPACK_IMPORTED_MODULE_4__.ReactMarkdown, { linkTarget: "_blank" }, "Total length of all [dedicated cycle paths](https://wiki.openstreetmap.org/wiki/Key:highway#When_cycleway_is_drawn_as_its_own_way_(see_Bicycle)) within the shape, does not include shared lanes on roads. Shown in dark green on the map. Click number for data source.") }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExpandableTableRow__WEBPACK_IMPORTED_MODULE_3__.ExpandableTableRow, { label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmojiLabelComponent, { emoji: "\uD83D\uDEB2\uFE0F\uFE0F", label: "Cycle Area" }), value: this.valueToDisplay(props.cyclewayArea, {
                            isEstimate: true,
                        }), description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_markdown__WEBPACK_IMPORTED_MODULE_4__.ReactMarkdown, { linkTarget: "_blank" }, "Estimated total area of all dedicated cycle paths, not including shared lanes on roads. Estimate based on [average width of all labeled cycle paths](https://taginfo.openstreetmap.org/keys/cycleway%3Awidth#overview).") }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExpandableTableRow__WEBPACK_IMPORTED_MODULE_3__.ExpandableTableRow, { label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmojiLabelComponent, { emoji: "\uD83C\uDF33", label: "Nature Area" }), value: this.valueToDisplay(props.natureArea), description: "Total area of all natural features such as parks, forests, and recreation areas within the shape, shown in green on the map. Click number for data source." }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExpandableTableRow__WEBPACK_IMPORTED_MODULE_3__.ExpandableTableRow, { label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmojiLabelComponent, { emoji: "\uD83D\uDE8C", label: "Bus Stops" }), value: this.valueToDisplay(props.busStops), description: "Total number of bus stops within the shape. Click number for data source." }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExpandableTableRow__WEBPACK_IMPORTED_MODULE_3__.ExpandableTableRow, { label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmojiLabelComponent, { emoji: "\uD83D\uDE83", label: "Rail Stations" }), value: this.valueToDisplay(props.railStops), description: "Total number of rail stations within the shape, including trains, subway, trams, and other light rail. Click number for data source." }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExpandableTableRow__WEBPACK_IMPORTED_MODULE_3__.ExpandableTableRow, { label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmojiLabelComponent, { emoji: "\uD83D\uDE87", label: "Transit Routes" }), value: this.valueToDisplay(props.totalTransitLines), description: "Total number of transit routes contained in or passing through the shape, including bus, train, subway, tram, and light rail. Click number for data source." }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExpandableTableRow__WEBPACK_IMPORTED_MODULE_3__.ExpandableTableRow, { label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmojiLabelComponent, { emoji: "\uD83D\uDCA6", label: "Water Area" }), value: this.valueToDisplay(props.wateryArea), description: "Total area of all water features such as lakes, rivers, and reservoirs within the shape, not including oceans, shown with blue on the map. Click number for data source." }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "map-stats-controls" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", checked: this.state.inline, onChange: (e) => this.setState({ inline: e.target.checked }) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Inline"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", checked: this.state.metric, onChange: (e) => this.setState({ metric: e.target.checked }) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Metric"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", checked: this.state.density, onChange: (e) => this.setState({ density: e.target.checked }) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Density"))));
    }
}


/***/ }),

/***/ "./client/index/components/ExpandableTableRow.tsx":
/*!********************************************************!*\
  !*** ./client/index/components/ExpandableTableRow.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandableTableRow: () => (/* binding */ ExpandableTableRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExpandableTableRow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandableTableRow.css */ "./client/index/components/ExpandableTableRow.css");


// Defines a 2-column table row class that can be expanded when the user clicks the label
// Expanding a row adds a second row that shows the description for the label and takes the whole width of the table
class ExpandableTableRow extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    constructor() {
        super(...arguments);
        this.state = { expanded: false };
    }
    render() {
        const { label, value, description } = this.props;
        const { expanded } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "expandable-table-row row-label" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { onClick: () => this.setState({ expanded: !expanded }) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, label)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, value)),
            expanded && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "expandable-table-row row-description" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { colSpan: 2 },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, description))))));
    }
}


/***/ }),

/***/ "./client/index/fetchPopulation.tsx":
/*!******************************************!*\
  !*** ./client/index/fetchPopulation.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchPopulation: () => (/* binding */ fetchPopulation),
/* harmony export */   sleep: () => (/* binding */ sleep)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./constants.ts");
/* harmony import */ var _MapStatsComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapStatsComponent */ "./client/index/MapStatsComponent.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function sleep(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => setTimeout(resolve, ms));
    });
}
// Poll task id until it gives a result or given timeout is reached (in seconds)
function pollTaskId(taskId, timeoutSeconds = 30) {
    return __awaiter(this, void 0, void 0, function* () {
        const start = Date.now();
        const taskUrl = "https://api.worldpop.org/v1/tasks/" + taskId;
        while (true) {
            const taskResponse = yield fetch(taskUrl);
            const taskJson = (yield taskResponse.json());
            if (taskJson.data && taskJson.data.total_population) {
                return taskJson.data.total_population;
            }
            if (taskJson.error) {
                throw new Error(taskJson.error_message);
            }
            yield sleep(300);
            if (Date.now() - start > timeoutSeconds * 1000) {
                throw new Error("timeout polling worldpop response");
            }
        }
    });
}
const PopulationAreaTooSmallValue = {
    missing: `Selection too small (<${_constants__WEBPACK_IMPORTED_MODULE_0__.WORLDPOP_AREA_MINIMUM_KM2} km²)`,
};
const PopulationAreaTooLargeValue = {
    missing: `Selection too large (<${_constants__WEBPACK_IMPORTED_MODULE_0__.WORLDPOP_AREA_MAX_KM2} km²)`,
};
const fetchPopulation = (0,_constants__WEBPACK_IMPORTED_MODULE_0__.t)((0,_constants__WEBPACK_IMPORTED_MODULE_0__.wrapWithDefault)(_MapStatsComponent__WEBPACK_IMPORTED_MODULE_1__.ErrorValue, (borders, areaKm2) => __awaiter(void 0, void 0, void 0, function* () {
    if (areaKm2 < _constants__WEBPACK_IMPORTED_MODULE_0__.WORLDPOP_AREA_MINIMUM_KM2) {
        return PopulationAreaTooSmallValue;
    }
    if (areaKm2 > _constants__WEBPACK_IMPORTED_MODULE_0__.WORLDPOP_AREA_MAX_KM2) {
        return PopulationAreaTooLargeValue;
    }
    const baseUrl = "https://api.worldpop.org/v1/services/stats?dataset=wpgppop&year=2020";
    const url = `${baseUrl}}&geojson=${JSON.stringify(borders)}`;
    const response = yield fetch(url);
    const json = (yield response.json());
    if (json.error) {
        throw new Error(json.error_message);
    }
    if (!json.taskid) {
        throw new Error("no task id returned from population api");
    }
    return {
        value: Math.round(yield pollTaskId(json.taskid)),
        units: "🧍",
    };
})), "fetchPopulation");


/***/ }),

/***/ "./client/mapUtils.tsx":
/*!*****************************!*\
  !*** ./client/mapUtils.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyFeatureCollection: () => (/* binding */ EmptyFeatureCollection),
/* harmony export */   addDrawControlButton: () => (/* binding */ addDrawControlButton),
/* harmony export */   clipLineSegmentsAtBorder: () => (/* binding */ clipLineSegmentsAtBorder),
/* harmony export */   clipPolygonsAtBorder: () => (/* binding */ clipPolygonsAtBorder),
/* harmony export */   estimateHighwayFeatureWidth: () => (/* binding */ estimateHighwayFeatureWidth),
/* harmony export */   parseOsmLengthField: () => (/* binding */ parseOsmLengthField),
/* harmony export */   renderDrawMeasurements: () => (/* binding */ renderDrawMeasurements),
/* harmony export */   splitFeatureCollection: () => (/* binding */ splitFeatureCollection),
/* harmony export */   unionPolygon: () => (/* binding */ unionPolygon)
/* harmony export */ });
/* harmony import */ var cheap_ruler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cheap-ruler */ "../node_modules/cheap-ruler/index.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/turf */ "../node_modules/@turf/turf/dist/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./constants.ts");
/* harmony import */ var turf_line_slice_at_intersection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! turf-line-slice-at-intersection */ "../node_modules/turf-line-slice-at-intersection/index.js");
/* harmony import */ var turf_line_slice_at_intersection__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(turf_line_slice_at_intersection__WEBPACK_IMPORTED_MODULE_3__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



// @ts-ignore untyped module

// nb. it is really annoying that this FeatureCollection type is duplicated
function EmptyFeatureCollection() {
    return {
        type: "FeatureCollection",
        features: [],
    };
}
// Split 1 feature collection into 3: polygons, linestrings, and points
function splitFeatureCollection(collection) {
    const polygons = EmptyFeatureCollection();
    const linestrings = EmptyFeatureCollection();
    const points = EmptyFeatureCollection();
    for (const feature of collection.features) {
        switch (feature.geometry.type) {
            case "Polygon":
            case "MultiPolygon":
                polygons.features.push(feature);
                break;
            case "LineString":
            case "MultiLineString":
                linestrings.features.push(feature);
                break;
            case "Point":
            case "MultiPoint":
                points.features.push(feature);
                break;
        }
    }
    return {
        polygons,
        linestrings,
        points,
    };
}
// Take the union of all features with Polygon geometry in collection
// Can be null if no features have Polygon geometry
function unionPolygon(collection) {
    let union = null;
    for (const feature of collection.features) {
        if (feature) {
            if (union) {
                union = _turf_turf__WEBPACK_IMPORTED_MODULE_1__.union(union, feature);
            }
            else {
                union = feature;
            }
        }
    }
    return union;
}
// Clip polygons with the given border collection of polygons.
// This is done by taking turf/intersect with each polygon against each border polygon
function clipPolygonsAtBorder(featurePolygons, borders) {
    const { polygons: borderPolygons } = splitFeatureCollection(borders);
    const clippedPolygons = EmptyFeatureCollection();
    for (const poly of featurePolygons.features) {
        const unionCollection = EmptyFeatureCollection();
        unionCollection.features = borderPolygons.features.map((border) => _turf_turf__WEBPACK_IMPORTED_MODULE_1__.intersect(poly, border));
        const clipped = unionPolygon(unionCollection);
        if (clipped) {
            clippedPolygons.features.push(clipped);
        }
    }
    return clippedPolygons;
}
// Clip line strings at given border polygons and return a collection of line strings
// fully contained in at least one border polygon
// Slightly modified from https://gis.stackexchange.com/a/459122/227981 (added end check)
// nb. Apparently lineSplit is buggy: https://github.com/Turfjs/turf/issues/2288
// so instead using yarn add turf-line-slice-at-intersection
// suggested in: https://github.com/Turfjs/turf/issues/2288#issuecomment-1125563629
function clipLineSegmentsAtBorder(featureLineSegments, borders) {
    const { polygons: borderPolygons } = splitFeatureCollection(borders);
    const clippedLines = EmptyFeatureCollection();
    for (const lines of featureLineSegments.features) {
        const flattened = _turf_turf__WEBPACK_IMPORTED_MODULE_1__.flatten(lines);
        for (const line of flattened.features) {
            for (const border of borderPolygons.features) {
                // split line by polygon
                // const split = turf.lineSplit(line, border);
                const split = turf_line_slice_at_intersection__WEBPACK_IMPORTED_MODULE_3___default()(line, border);
                for (const part of split.features) {
                    // check which parts have a start and end inside the polygon
                    const start = _turf_turf__WEBPACK_IMPORTED_MODULE_1__.booleanPointInPolygon(_turf_turf__WEBPACK_IMPORTED_MODULE_1__.point(part.geometry.coordinates[0]), border);
                    const end = _turf_turf__WEBPACK_IMPORTED_MODULE_1__.booleanPointInPolygon(_turf_turf__WEBPACK_IMPORTED_MODULE_1__.point(part.geometry.coordinates[part.geometry.coordinates.length - 1]), border);
                    if (start && end) {
                        clippedLines.features.push(part);
                    }
                }
            }
        }
    }
    return clippedLines;
}
// Renders a label measuring the distance of every line segment and the area of every polygon
// on the map, passed in as drawCollection. Lengths are placed on midpoints and areas at centroid.
// Includes labeling the length of every edge of every polygon.
// adapted from: https://github.com/mapbox/mapbox-gl-draw/issues/801#issuecomment-403360815
function renderDrawMeasurements(map, drawCollection
// TODO: option to render miles
) {
    const ruler = new cheap_ruler__WEBPACK_IMPORTED_MODULE_0__["default"](map.getCenter().lat, "kilometers");
    const labelFeatures = [];
    // Extend features by adding a line-stringified version of all edges of all polygons
    const extendedFeatures = [...drawCollection.features];
    for (const feature of drawCollection.features) {
        if (feature.geometry.type === "Polygon" &&
            feature.geometry.coordinates.length > 0 &&
            feature.geometry.coordinates[0].length >= 2 &&
            // For circles we only show the area in the middle, since it is drawn with a lot of short line segments
            feature.properties.isCircle !== true) {
            for (let i = 0; i < feature.geometry.coordinates[0].length - 1; i++) {
                const cur = feature.geometry.coordinates[0][i];
                const next = feature.geometry.coordinates[0][i + 1];
                if (!cur || !next) {
                    continue;
                }
                const line = _turf_turf__WEBPACK_IMPORTED_MODULE_1__.lineString([cur, next]);
                extendedFeatures.push(line);
            }
        }
    }
    // If there are multiple polygons, label the center of each with its number
    const numberOfPolygons = extendedFeatures.filter((f) => _turf_turf__WEBPACK_IMPORTED_MODULE_1__.getType(f) === "Polygon").length;
    let seenPolygons = 0;
    for (const feature of extendedFeatures) {
        if (!("coordinates" in feature.geometry)) {
            continue;
        }
        switch (_turf_turf__WEBPACK_IMPORTED_MODULE_1__.getType(feature)) {
            case "LineString":
                // label Lines
                const lineCoords = feature.geometry.coordinates;
                if (lineCoords.length > 1) {
                    const length = ruler.lineDistance(lineCoords);
                    const label = (0,_constants__WEBPACK_IMPORTED_MODULE_2__.numberForDisplay)(length) + " km";
                    const midpoint = ruler.along(lineCoords, length / 2);
                    if (length < 0.001) {
                        // A "line" is generated before a single point has been drawn by taking the current cursor position to itself,
                        // so we filter that out here
                        break;
                    }
                    labelFeatures.push(_turf_turf__WEBPACK_IMPORTED_MODULE_1__.point(midpoint, {
                        type: "line",
                        label,
                    }));
                }
                break;
            case "Polygon":
                // label Polygons
                const polyCoords = feature.geometry.coordinates;
                if (polyCoords.length > 0 && polyCoords[0].length > 3) {
                    const area = ruler.area(polyCoords);
                    const prefix = numberOfPolygons > 1 ? `${seenPolygons + 1}: ` : "";
                    const label = prefix + (0,_constants__WEBPACK_IMPORTED_MODULE_2__.numberForDisplay)(area) + " km²";
                    labelFeatures.push(_turf_turf__WEBPACK_IMPORTED_MODULE_1__.point(_turf_turf__WEBPACK_IMPORTED_MODULE_1__.centroid(feature).geometry.coordinates, {
                        type: "area",
                        label,
                    }));
                }
                seenPolygons++;
                break;
        }
    }
    const source = map.getSource("_measurements");
    if (source) {
        source.setData({
            type: "FeatureCollection",
            features: labelFeatures,
        });
    }
}
function addDrawControlButton(iconPath, onClick) {
    var _a;
    const siblingSelector = ".mapbox-gl-draw_ctrl-draw-btn.mapbox-gl-draw_polygon";
    // Create a button with the given icon as a sibling of the selected polygon button
    const button = document.createElement("button");
    button.className = "mapbox-gl-draw_ctrl-draw-btn";
    button.classList.add("mapbox-gl-draw_circle");
    // Set padding: 3px on the button
    button.style.padding = "3px";
    button.innerHTML = `<span class="mapbox-gl-draw_icon"><img src="${iconPath}"></span>`;
    button.onclick = () => __awaiter(this, void 0, void 0, function* () {
        button.classList.add("active");
        yield onClick();
    });
    const sibling = document.querySelector(siblingSelector);
    if (sibling) {
        (_a = sibling.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(button, sibling.nextSibling);
    }
    else {
        console.warn("Could not find sibling for draw control button");
    }
}
// Parse a length-type field from OSM into a meters number. If not possible return NaN.
// This includes formats such as 7'6", 8 km, 16 ft, etc.
// see: https://wiki.openstreetmap.org/wiki/Key:width
function parseOsmLengthField(length) {
    // TODO: actually check the uncommon length formats
    try {
        return Number.parseFloat(length);
    }
    catch (e) {
        return NaN;
    }
}
// Given a feature with property highway set, estimate a width for it in meters.
// This will use the width property if it's available, otherwise we will multiply the lanes
// property by a heuristic value depending on the type of highway.
// nb. This estimation is VERY ROUGH, mostly derived from https://en.wikipedia.org/wiki/Lane#Lane_width.
// e.g. it may underestimate in the U.S. and overestimate in Europe.
function estimateHighwayFeatureWidth(feature) {
    if (!Number.isNaN(parseOsmLengthField(feature.properties.width))) {
        return parseOsmLengthField(feature.properties.width);
    }
    if (!Number.isNaN(parseOsmLengthField(feature.properties.est_width))) {
        return parseOsmLengthField(feature.properties.est_width);
    }
    let lanes = 2;
    let laneWidth = 3.5;
    let buffer = 0.5;
    switch (feature.properties.highway) {
        case "cycleway":
            lanes = 1;
            // average cycle path width globally: https://overpass-turbo.eu/s/1xSP
            laneWidth = 1.881;
            buffer = 0;
            break;
        case "trunk":
        case "motorway":
            laneWidth = 3.75;
            buffer = 3.3;
            break;
        case "primary":
            laneWidth = 3.5;
            buffer = 2;
            break;
        case "secondary":
        case "motorway_link":
        case "trunk_link":
            laneWidth = 3.35;
            buffer = 0.8;
            break;
        case "service":
        case "tertiary":
        case "residential":
        case "primary_link":
        case "secondary_link":
        case "tertiary_link":
            laneWidth = 3.1;
            buffer = 0.5;
            break;
        case "unclassified":
        case "living_street":
            laneWidth = 2.6;
            buffer = 0.1;
            break;
    }
    if (feature.properties.lanes) {
        try {
            lanes = parseInt(feature.properties.lanes);
        }
        catch (e) {
            console.warn("could not parse lanes property", feature.properties);
        }
    }
    // Heuristic for the width of a lane, plus some buffer, depending on highway type
    const width = buffer + lanes * laneWidth;
    // if nan, return 0 and print a warning
    if (Number.isNaN(width)) {
        console.warn("Could not estimate width for feature", feature);
        return 0;
    }
    else {
        return width;
    }
}


/***/ }),

/***/ "./pickACity.ts":
/*!**********************!*\
  !*** ./pickACity.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomCityCenter: () => (/* binding */ randomCityCenter)
/* harmony export */ });
// Pick a [lon, lat] of a random major city in the world
// Used to set the map's initial position
function randomCityCenter() {
    // thanks chatgpt
    const cities = [
        // Tokyo
        [139.6917, 35.6895],
        // Delhi
        [77.209, 28.614],
        // Shanghai
        [121.4737, 31.2304],
        // São Paulo
        [-46.6333, -23.5505],
        // Mexico City
        [-99.1332, 19.4326],
        // Cairo
        [31.2357, 30.0444],
        // Mumbai
        [72.8777, 19.076],
        // Beijing
        [116.4074, 39.9042],
        // Dhaka
        [90.4125, 23.8103],
        // Osaka
        [135.5022, 34.6937],
        // New York
        [-74.0059, 40.7128],
        // Karachi
        [67.0099, 24.8615],
        // Buenos Aires
        [-58.3816, -34.6037],
        // Chongqing
        [106.5516, 29.563],
        // Istanbul
        [28.9784, 41.0082],
        // Kolkata
        [88.3639, 22.5726],
        // Manila
        [120.9842, 14.5995],
        // Lagos
        [3.3792, 6.5244],
        // Rio de Janeiro
        [-43.1729, -22.9068],
        // Tianjin
        [117.1994, 39.0851],
        // Kinshasa
        [15.2663, -4.4419],
        // Guangzhou
        [113.2644, 23.1291],
        // Los Angeles
        [-118.2437, 34.0522],
        // Moscow
        [37.6173, 55.7558],
        // Shenzhen
        [114.0579, 22.5431],
        // Lahore
        [74.3587, 31.5204],
        // Bangalore
        [77.5946, 12.9716],
        // Paris
        [2.3522, 48.8566],
        // Bogotá
        [-74.0721, 4.7109],
        // Jakarta
        [106.865, -6.1751],
        // Chennai
        [80.2707, 13.0827],
        // Lima
        [-77.0428, -12.0464],
        // Bangkok
        [100.5018, 13.7563],
        // Seoul
        [126.978, 37.5665],
        // Nagoya
        [136.9065, 35.1815],
        // Hyderabad
        [78.4867, 17.385],
        // London
        [-0.1276, 51.5072],
        // Chicago
        [-87.6298, 41.8781],
        // Chengdu
        [104.0665, 30.5728],
        // Ho Chi Minh City
        [106.6297, 10.8231],
        // Kuala Lumpur
        [101.6869, 3.139],
        // Xi'an
        [108.9398, 34.3416],
        // Hong Kong
        [114.1491, 22.2815],
        // Riyadh
        [46.6753, 24.7136],
        // Baghdad
        [44.3661, 33.3152],
        // Santiago
        [-70.6483, -33.4489],
        // Madrid
        [-3.7038, 40.4168],
        // Houston
        [-95.3698, 29.7604],
        // Dallas
        [-96.797, 32.7767],
        // Toronto
        [-79.3832, 43.6532],
        // Dar es Salaam
        [39.2083, -6.7924],
        // Miami
        [-80.1918, 25.7617],
        // Belo Horizonte
        [-43.9722, -19.9167],
        // Singapore
        [103.8198, 1.3521],
        // Philadelphia
        [-75.1652, 39.9526],
        // Atlanta
        [-84.3879, 33.749],
        // Fukuoka
        [130.4181, 33.5904],
        // Barcelona
        [2.1734, 41.3851],
        // Johannesburg
        [28.0473, -26.2041],
        // Saint Petersburg
        [30.3351, 59.9343],
        // Washington
        [-77.0369, 38.9072],
        // Alexandria
        [29.9511, 31.2001],
        // Guadalajara
        [-103.344, 20.6597],
        // Amsterdam
        [4.8952, 52.3702],
        // Stockholm
        [18.0686, 59.3293],
        // Copenhagen
        [12.5683, 55.6761],
        // Oslo
        [10.7522, 59.9139],
        // Taipei
        [121.5654, 25.0329],
        // Berlin
        [13.4049, 52.52],
        // Rome
        [12.4964, 41.9028],
        // Vienna
        [16.3738, 48.2082],
        // Busan
        [129.0756, 35.1796],
        // Seattle
        [-122.3321, 47.6062],
        // San francisco
        [-122.4194, 37.7749],
    ];
    return cities[Math.floor(Math.random() * cities.length)];
}


/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27 fill=%27%23fff%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27 fill=%27%23fff%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27 fill=%27%23fff%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill-rule=%27evenodd%27%3E%3Cpath d=%27M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0m5-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27 display=%27none%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27 display=%27none%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27 display=%27none%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%2333b5e5%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23666%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23666%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23666%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23999%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23999%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23999%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23aaa%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23aaa%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23aaa%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 fill=%27%23f00%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e54e33%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27 display=%27none%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e54e33%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27 display=%27none%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e54e33%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27 display=%27none%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e58978%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e58978%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23e58978%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27%3E%3Cpath d=%27M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z%27/%3E%3Ccircle id=%27dot%27 cx=%2710%27 cy=%2710%27 r=%272%27/%3E%3Cpath id=%27stroke%27 d=%27M14 5l1 1-9 9-1-1 9-9z%27 display=%27none%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23ccc%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23333%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23999%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23999%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M10.5 14l4-8 4 8h-8z%27/%3E%3Cpath id=%27south%27 d=%27M10.5 16l4 8 4-8h-8z%27 fill=%27%23999%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M24 16v5.5c0 1.75-.75 2.5-2.5 2.5H16v-1l3-1.5-4-5.5 1-1 5.5 4 1.5-3h1zM6 16l1.5 3 5.5-4 1 1-4 5.5 3 1.5v1H7.5C5.75 24 5 23.25 5 21.5V16h1zm7-11v1l-3 1.5 4 5.5-1 1-5.5-4L6 13H5V7.5C5 5.75 5.75 5 7.5 5H13zm11 2.5c0-1.75-.75-2.5-2.5-2.5H16v1l3 1.5-4 5.5 1 1 5.5-4 1.5 3h1V7.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 29 29%27%3E%3Cpath d=%27M18.5 16c-1.75 0-2.5.75-2.5 2.5V24h1l1.5-3 5.5 4 1-1-4-5.5 3-1.5v-1h-5.5zM13 18.5c0-1.75-.75-2.5-2.5-2.5H5v1l3 1.5L4 24l1 1 5.5-4 1.5 3h1v-5.5zm3-8c0 1.75.75 2.5 2.5 2.5H24v-1l-3-1.5L25 5l-1-1-5.5 4L17 5h-1v5.5zM10.5 13c1.75 0 2.5-.75 2.5-2.5V5h-1l-1.5 3L5 4 4 5l4 5.5L5 12v1h5.5z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%270.3%27 stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%270.9%27 fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%270.3%27 stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%270.9%27 fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%270.3%27 stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%270.9%27 fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%271%27 stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%271%27 fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%271%27 stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%271%27 fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%271%27 stroke=%27%23000%27 stroke-width=%273%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%271%27 fill=%27%23fff%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%271%27 stroke=%27%23fff%27 stroke-width=%273%27 fill=%27%23fff%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%271%27 fill=%27%23000%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%271%27 stroke=%27%23fff%27 stroke-width=%273%27 fill=%27%23fff%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%271%27 fill=%27%23000%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 fill-rule=%27evenodd%27 viewBox=%270 0 88 23%27%3E%3Cdefs%3E%3Cpath id=%27logo%27 d=%27M11.5 2.25c5.105 0 9.25 4.145 9.25 9.25s-4.145 9.25-9.25 9.25-9.25-4.145-9.25-9.25 4.145-9.25 9.25-9.25zM6.997 15.983c-.051-.338-.828-5.802 2.233-8.873a4.395 4.395 0 013.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39 0 1.18-.449 2.301-1.28 3.13C12.72 16.93 7 16 7 16l-.003-.017zM15.3 10.5l-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z%27/%3E%3Cpath id=%27text%27 d=%27M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19c-1.04 0-2.03-.43-2.74-1.18v3.77c0 .13-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01c.01 0 .01 0 .01-.01.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V15c-.7.76-1.69 1.19-2.73 1.19-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.375-.19a4.24 4.24 0 00-4.16 3.29c-.13.59-.13 1.19 0 1.77a4.233 4.233 0 004.17 3.3c2.35 0 4.26-1.87 4.26-4.19 0-2.32-1.9-4.17-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18 1.88 0 3.45 1.4 3.84 3.28.13.59.13 1.2 0 1.8-.39 1.88-1.96 3.29-3.84 3.29-1.03 0-2.02-.43-2.73-1.18v.77c0 .12-.1.23-.23.23h-1.4c-.13 0-.23-.1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4c-.13 0-.23-.11-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55.45-.95 1.4-1.55 2.44-1.56 1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41c-.13 0-.23-.11-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.615 0h-1.61c-.04 0-.08-.01-.12-.03-.09-.06-.13-.19-.06-.28l2.43-3.71-2.39-3.65a.213.213 0 01-.03-.12c0-.12.09-.21.21-.21h1.61c.13 0 .24.06.3.17l1.41 2.37 1.4-2.37a.34.34 0 01.3-.17h1.6c.04 0 .08.01.12.03.09.06.13.19.06.28l-2.37 3.65 2.43 3.7c0 .05.01.09.01.13 0 .12-.09.21-.21.21h-1.61c-.13 0-.24-.06-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 01-.3.17zm-7.12-1.49c-1.33 0-2.42-1.12-2.42-2.51 0-1.39 1.08-2.52 2.42-2.52 1.33 0 2.42 1.12 2.42 2.51 0 1.39-1.08 2.51-2.42 2.52zm-19.865 0c-1.32 0-2.39-1.11-2.42-2.48v-.07c.02-1.38 1.09-2.49 2.4-2.49 1.32 0 2.41 1.12 2.41 2.51 0 1.39-1.07 2.52-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51c0-1.39 1.08-2.52 2.4-2.52 1.33 0 2.39 1.11 2.41 2.48l.02.08zm18.12 2.47c-1.32 0-2.39-1.11-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51c0 1.39-1.09 2.51-2.42 2.51z%27/%3E%3C/defs%3E%3Cmask id=%27clip%27%3E%3Crect x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27 fill=%27white%27/%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/mask%3E%3Cg id=%27outline%27 opacity=%271%27 stroke=%27%23fff%27 stroke-width=%273%27 fill=%27%23fff%27%3E%3Ccircle mask=%27url%28%23clip%29%27 cx=%2711.5%27 cy=%2711.5%27 r=%279.25%27/%3E%3Cuse xlink:href=%27%23text%27 mask=%27url%28%23clip%29%27/%3E%3C/g%3E%3Cg id=%27fill%27 opacity=%271%27 fill=%27%23000%27%3E%3Cuse xlink:href=%27%23logo%27/%3E%3Cuse xlink:href=%27%23text%27/%3E%3C/g%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\">%3Cpath d=\"M10,3.4 c-0.8,0-1.5,0.5-1.8,1.2H5l-1,1v1h12v-1l-1-1h-3.2C11.5,3.9,10.8,3.4,10,3.4z M5,8v7c0,1,1,2,2,2h6c1,0,2-1,2-2V8h-2v5.5h-1.5V8h-3 v5.5H7V8H5z\"/>%3C/svg>":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20">%3Cpath d="M10,3.4 c-0.8,0-1.5,0.5-1.8,1.2H5l-1,1v1h12v-1l-1-1h-3.2C11.5,3.9,10.8,3.4,10,3.4z M5,8v7c0,1,1,2,2,2h6c1,0,2-1,2-2V8h-2v5.5h-1.5V8h-3 v5.5H7V8H5z"/>%3C/svg> ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\">%3Cpath d=\"M10,3.4 c-0.8,0-1.5,0.5-1.8,1.2H5l-1,1v1h12v-1l-1-1h-3.2C11.5,3.9,10.8,3.4,10,3.4z M5,8v7c0,1,1,2,2,2h6c1,0,2-1,2-2V8h-2v5.5h-1.5V8h-3 v5.5H7V8H5z\"/>%3C/svg>";

/***/ }),

/***/ "data:image/svg+xml;utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\">%3Cpath d=\"M12.1,2c-0.3,0-0.5,0.1-0.7,0.3l-1,1c-0.4,0.4-0.4,1,0,1.4l4.9,4.9c0.4,0.4,1,0.4,1.4,0l1-1 c0.4-0.4,0.4-1,0-1.4l-4.9-4.9C12.6,2.1,12.3,2,12.1,2z M8,8C7,8,7,9,7.5,9.5c0.3,0.3,1,1,1,1l-1,1c0,0-0.5,0.5,0,1s1,0,1,0l1-1l1,1 C11,13,12,13,12,12V8H8z M4,10c-0.3,0-0.5,0.1-0.7,0.3l-1,1c-0.4,0.4-0.4,1,0,1.4l1,1c0.4,0.4,1,0.4,1.4,0l1-1c0.4-0.4,0.4-1,0-1.4 l-1-1C4.5,10.1,4.3,10,4,10z M8,14c-0.3,0-0.5,0.1-0.7,0.3l-1,1c-0.4,0.4-0.4,1,0,1.4l1,1c0.4,0.4,1,0.4,1.4,0l1-1 c0.4-0.4,0.4-1,0-1.4l-1-1C8.5,14.1,8.3,14,8,14z\"/>%3C/svg>":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20">%3Cpath d="M12.1,2c-0.3,0-0.5,0.1-0.7,0.3l-1,1c-0.4,0.4-0.4,1,0,1.4l4.9,4.9c0.4,0.4,1,0.4,1.4,0l1-1 c0.4-0.4,0.4-1,0-1.4l-4.9-4.9C12.6,2.1,12.3,2,12.1,2z M8,8C7,8,7,9,7.5,9.5c0.3,0.3,1,1,1,1l-1,1c0,0-0.5,0.5,0,1s1,0,1,0l1-1l1,1 C11,13,12,13,12,12V8H8z M4,10c-0.3,0-0.5,0.1-0.7,0.3l-1,1c-0.4,0.4-0.4,1,0,1.4l1,1c0.4,0.4,1,0.4,1.4,0l1-1c0.4-0.4,0.4-1,0-1.4 l-1-1C4.5,10.1,4.3,10,4,10z M8,14c-0.3,0-0.5,0.1-0.7,0.3l-1,1c-0.4,0.4-0.4,1,0,1.4l1,1c0.4,0.4,1,0.4,1.4,0l1-1 c0.4-0.4,0.4-1,0-1.4l-1-1C8.5,14.1,8.3,14,8,14z"/>%3C/svg> ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\">%3Cpath d=\"M12.1,2c-0.3,0-0.5,0.1-0.7,0.3l-1,1c-0.4,0.4-0.4,1,0,1.4l4.9,4.9c0.4,0.4,1,0.4,1.4,0l1-1 c0.4-0.4,0.4-1,0-1.4l-4.9-4.9C12.6,2.1,12.3,2,12.1,2z M8,8C7,8,7,9,7.5,9.5c0.3,0.3,1,1,1,1l-1,1c0,0-0.5,0.5,0,1s1,0,1,0l1-1l1,1 C11,13,12,13,12,12V8H8z M4,10c-0.3,0-0.5,0.1-0.7,0.3l-1,1c-0.4,0.4-0.4,1,0,1.4l1,1c0.4,0.4,1,0.4,1.4,0l1-1c0.4-0.4,0.4-1,0-1.4 l-1-1C4.5,10.1,4.3,10,4,10z M8,14c-0.3,0-0.5,0.1-0.7,0.3l-1,1c-0.4,0.4-0.4,1,0,1.4l1,1c0.4,0.4,1,0.4,1.4,0l1-1 c0.4-0.4,0.4-1,0-1.4l-1-1C8.5,14.1,8.3,14,8,14z\"/>%3C/svg>";

/***/ }),

/***/ "data:image/svg+xml;utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\">%3Cpath d=\"m10 2c-3.3 0-6 2.7-6 6s6 9 6 9 6-5.7 6-9-2.7-6-6-6zm0 2c2.1 0 3.8 1.7 3.8 3.8 0 1.5-1.8 3.9-2.9 5.2h-1.7c-1.1-1.4-2.9-3.8-2.9-5.2-.1-2.1 1.6-3.8 3.7-3.8z\"/>%3C/svg>":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20">%3Cpath d="m10 2c-3.3 0-6 2.7-6 6s6 9 6 9 6-5.7 6-9-2.7-6-6-6zm0 2c2.1 0 3.8 1.7 3.8 3.8 0 1.5-1.8 3.9-2.9 5.2h-1.7c-1.1-1.4-2.9-3.8-2.9-5.2-.1-2.1 1.6-3.8 3.7-3.8z"/>%3C/svg> ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\">%3Cpath d=\"m10 2c-3.3 0-6 2.7-6 6s6 9 6 9 6-5.7 6-9-2.7-6-6-6zm0 2c2.1 0 3.8 1.7 3.8 3.8 0 1.5-1.8 3.9-2.9 5.2h-1.7c-1.1-1.4-2.9-3.8-2.9-5.2-.1-2.1 1.6-3.8 3.7-3.8z\"/>%3C/svg>";

/***/ }),

/***/ "data:image/svg+xml;utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\">%3Cpath d=\"m12 2c-.3 0-.5.1-.7.3l-1 1c-.4.4-.4 1 0 1.4l1 1c.4.4 1 .4 1.4 0l1-1c.4-.4.4-1 0-1.4l-1-1c-.2-.2-.4-.3-.7-.3zm4 4c-.3 0-.5.1-.7.3l-1 1c-.4.4-.4 1 0 1.4l1 1c.4.4 1 .4 1.4 0l1-1c.4-.4.4-1 0-1.4l-1-1c-.2-.2-.4-.3-.7-.3zm-7 1c-1 0-1 1-.5 1.5.3.3 1 1 1 1l-1 1s-.5.5 0 1 1 0 1 0l1-1 1 1c.5.5 1.5.5 1.5-.5v-4zm-5 3c-.3 0-.5.1-.7.3l-1 1c-.4.4-.4 1 0 1.4l4.9 4.9c.4.4 1 .4 1.4 0l1-1c.4-.4.4-1 0-1.4l-4.9-4.9c-.1-.2-.4-.3-.7-.3z\"/>%3C/svg>":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20">%3Cpath d="m12 2c-.3 0-.5.1-.7.3l-1 1c-.4.4-.4 1 0 1.4l1 1c.4.4 1 .4 1.4 0l1-1c.4-.4.4-1 0-1.4l-1-1c-.2-.2-.4-.3-.7-.3zm4 4c-.3 0-.5.1-.7.3l-1 1c-.4.4-.4 1 0 1.4l1 1c.4.4 1 .4 1.4 0l1-1c.4-.4.4-1 0-1.4l-1-1c-.2-.2-.4-.3-.7-.3zm-7 1c-1 0-1 1-.5 1.5.3.3 1 1 1 1l-1 1s-.5.5 0 1 1 0 1 0l1-1 1 1c.5.5 1.5.5 1.5-.5v-4zm-5 3c-.3 0-.5.1-.7.3l-1 1c-.4.4-.4 1 0 1.4l4.9 4.9c.4.4 1 .4 1.4 0l1-1c.4-.4.4-1 0-1.4l-4.9-4.9c-.1-.2-.4-.3-.7-.3z"/>%3C/svg> ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\">%3Cpath d=\"m12 2c-.3 0-.5.1-.7.3l-1 1c-.4.4-.4 1 0 1.4l1 1c.4.4 1 .4 1.4 0l1-1c.4-.4.4-1 0-1.4l-1-1c-.2-.2-.4-.3-.7-.3zm4 4c-.3 0-.5.1-.7.3l-1 1c-.4.4-.4 1 0 1.4l1 1c.4.4 1 .4 1.4 0l1-1c.4-.4.4-1 0-1.4l-1-1c-.2-.2-.4-.3-.7-.3zm-7 1c-1 0-1 1-.5 1.5.3.3 1 1 1 1l-1 1s-.5.5 0 1 1 0 1 0l1-1 1 1c.5.5 1.5.5 1.5-.5v-4zm-5 3c-.3 0-.5.1-.7.3l-1 1c-.4.4-.4 1 0 1.4l4.9 4.9c.4.4 1 .4 1.4 0l1-1c.4-.4.4-1 0-1.4l-4.9-4.9c-.1-.2-.4-.3-.7-.3z\"/>%3C/svg>";

/***/ }),

/***/ "data:image/svg+xml;utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\">%3Cpath d=\"m13.5 3.5c-1.4 0-2.5 1.1-2.5 2.5 0 .3 0 .6.2.9l-3.8 3.8c-.3-.1-.6-.2-.9-.2-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5c0-.3 0-.6-.2-.9l3.8-3.8c.3.1.6.2.9.2 1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z\"/>%3C/svg>":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20">%3Cpath d="m13.5 3.5c-1.4 0-2.5 1.1-2.5 2.5 0 .3 0 .6.2.9l-3.8 3.8c-.3-.1-.6-.2-.9-.2-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5c0-.3 0-.6-.2-.9l3.8-3.8c.3.1.6.2.9.2 1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z"/>%3C/svg> ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\">%3Cpath d=\"m13.5 3.5c-1.4 0-2.5 1.1-2.5 2.5 0 .3 0 .6.2.9l-3.8 3.8c-.3-.1-.6-.2-.9-.2-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5c0-.3 0-.6-.2-.9l3.8-3.8c.3.1.6.2.9.2 1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z\"/>%3C/svg>";

/***/ }),

/***/ "data:image/svg+xml;utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\">%3Cpath d=\"m15 12.3v-4.6c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2-.7 0-1.4.4-1.7 1h-4.6c-.3-.6-1-1-1.7-1-1.1 0-2 .9-2 2 0 .7.4 1.4 1 1.7v4.6c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2 .7 0 1.4-.4 1.7-1h4.6c.3.6 1 1 1.7 1 1.1 0 2-.9 2-2 0-.7-.4-1.4-1-1.7zm-8-.3v-4l1-1h4l1 1v4l-1 1h-4z\"/>%3C/svg>":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20">%3Cpath d="m15 12.3v-4.6c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2-.7 0-1.4.4-1.7 1h-4.6c-.3-.6-1-1-1.7-1-1.1 0-2 .9-2 2 0 .7.4 1.4 1 1.7v4.6c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2 .7 0 1.4-.4 1.7-1h4.6c.3.6 1 1 1.7 1 1.1 0 2-.9 2-2 0-.7-.4-1.4-1-1.7zm-8-.3v-4l1-1h4l1 1v4l-1 1h-4z"/>%3C/svg> ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\">%3Cpath d=\"m15 12.3v-4.6c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2-.7 0-1.4.4-1.7 1h-4.6c-.3-.6-1-1-1.7-1-1.1 0-2 .9-2 2 0 .7.4 1.4 1 1.7v4.6c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2 .7 0 1.4-.4 1.7-1h4.6c.3.6 1 1 1.7 1 1.1 0 2-.9 2-2 0-.7-.4-1.4-1-1.7zm-8-.3v-4l1-1h4l1 1v4l-1 1h-4z\"/>%3C/svg>";

/***/ }),

/***/ "?5591":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6bfc":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=client_index_MapComponent_tsx-data_image_svg_xml_charset_utf-8_3Csvg_viewBox_270_0_20_20_27_x-67c81b.bundle.js.map