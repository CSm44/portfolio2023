/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  background-color: #003049;\\n  box-sizing: border-box;\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  min-height: 100vh;\\n  margin: 0;\\n  box-sizing: border-box;\\n  display: flex;\\n  flex-direction: column;\\n  overflow-x: hidden;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\n\\nheader {\\n  display: flex;\\n  justify-content: space-between;\\n  margin: 20px 40px;\\n  height: 4rem;\\n}\\nheader svg {\\n  width: fit-content;\\n  height: 4rem;\\n  margin: auto;\\n}\\nheader nav {\\n  display: flex;\\n  align-items: center;\\n}\\nheader nav ul {\\n  display: flex;\\n  gap: 1em;\\n  height: 2em;\\n}\\nheader nav ul li {\\n  margin: auto 10px;\\n  width: fit-content;\\n}\\nheader nav ul li:hover {\\n  border-bottom: solid 2px #f77f00;\\n  transform: scale(0.95);\\n  transition: transform 200ms;\\n}\\nheader nav ul a {\\n  width: fit-content;\\n  align-items: center;\\n  list-style: none;\\n  text-decoration: none;\\n  color: #f77f00;\\n  font-weight: 500;\\n  font-size: 20px;\\n  letter-spacing: 1px;\\n}\\n\\n.mainContainer {\\n  display: flex;\\n  flex-wrap: row wrap;\\n  margin: 2em 5em;\\n  justify-content: center;\\n}\\n.mainContainer .infoContainer {\\n  background-color: #f77f00;\\n  width: 60%;\\n  margin: auto 0;\\n  display: flex;\\n  flex-direction: column;\\n  height: fit-content;\\n}\\n.mainContainer .infoContainer h1 {\\n  text-transform: lowercase;\\n  margin: auto;\\n  width: 70%;\\n  background-color: #f77f00;\\n  color: #003049;\\n  cursor: default;\\n}\\n.mainContainer .infoContainer p {\\n  text-transform: lowercase;\\n  width: 90%;\\n  margin: auto;\\n  padding: 20px;\\n  background-color: #f77f00;\\n  color: #003049;\\n  font-size: 20pt;\\n  text-align: center;\\n  cursor: default;\\n}\\n.mainContainer .infoContainer p em {\\n  background-color: #f77f00;\\n  color: #003049;\\n}\\n\\n.portrait-container {\\n  width: 40%;\\n  margin-right: 5%;\\n  display: flex;\\n}\\n.portrait-container img {\\n  width: 100%;\\n  height: auto;\\n  border-radius: 30px;\\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);\\n}\\n\\n.socialRowContainer {\\n  display: flex;\\n  height: fit-content;\\n  justify-content: center;\\n}\\n.socialRowContainer a {\\n  height: fit-content;\\n  border-radius: 100px;\\n  cursor: default;\\n  margin: 20px;\\n  text-decoration: none;\\n  fill: rgb(247, 127, 0);\\n}\\n.socialRowContainer a svg {\\n  fill: #000;\\n}\\n.socialRowContainer a svg:hover {\\n  fill: #f77f00;\\n}\\n\\n.bodyContainer {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n.bodyContainer .portfolioSlide {\\n  height: 80vh;\\n  text-align: center;\\n  position: relative;\\n  cursor: default;\\n  margin: auto;\\n}\\n.bodyContainer .portfolioSlide .setTitle {\\n  line-height: 100px;\\n  font-size: 60px;\\n  color: #fff;\\n  position: relative;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);\\n  margin-left: -300px;\\n}\\n.bodyContainer .portfolioSlide .setTitle .rotatingWords {\\n  display: inline-block;\\n  position: relative;\\n}\\n.bodyContainer .portfolioSlide .setTitle .rotatingWords div {\\n  display: inline-block;\\n  position: absolute;\\n  top: -200px;\\n  transform: rotateX(-90deg);\\n  opacity: 0;\\n  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);\\n  animation-timing-function: ease;\\n}\\n.bodyContainer .portfolioSlide .setTitle .rotatingWords div:nth-child(1) {\\n  animation: rollDown 10s forwards infinite;\\n  color: #f77f00;\\n}\\n.bodyContainer .portfolioSlide .setTitle .rotatingWords div:nth-child(2) {\\n  animation: rollDown2 10s forwards infinite;\\n  color: #f77f00;\\n}\\n.bodyContainer .portfolioSlide .setTitle .rotatingWords div:nth-child(3) {\\n  animation: rollDown3 10s forwards infinite;\\n  color: #f77f00;\\n}\\n.bodyContainer .mainWorksContainer {\\n  display: flex;\\n  flex-flow: column wrap;\\n  display: grid;\\n  min-height: 20em;\\n  position: relative;\\n  height: 150vh;\\n  margin: 10px auto;\\n  background: rgb(252, 191, 73);\\n  background: linear-gradient(0deg, rgb(252, 191, 73) 0%, rgb(255, 162, 64) 50%, rgb(247, 127, 0) 100%);\\n}\\n.bodyContainer .mainWorksContainer #row-two,\\n.bodyContainer .mainWorksContainer #worksTwo {\\n  flex-flow: row-reverse;\\n  align-self: flex-end;\\n}\\n.bodyContainer .mainWorksContainer .rows {\\n  display: flex;\\n  height: 50vh;\\n  width: 100%;\\n  justify-content: space-between;\\n  background: transparent;\\n}\\n.bodyContainer .mainWorksContainer .worksContainer {\\n  width: 33%;\\n  height: 40vh;\\n  margin: auto 5px;\\n  display: flex;\\n  border-radius: 30px;\\n  box-shadow: 0 0 0.5em #003049;\\n  background: transparent;\\n}\\n.bodyContainer .mainWorksContainer .worksContainer .worksPhoto {\\n  border: solid 1px black;\\n  height: 90%;\\n  width: 90%;\\n  margin: auto;\\n  display: flex;\\n}\\n.bodyContainer .mainWorksContainer .worksContainer .worksPhoto a img {\\n  height: auto;\\n  width: 100%;\\n}\\n.bodyContainer .mainWorksContainer .worksContainer .worksInfo {\\n  display: none;\\n}\\n.bodyContainer .mainWorksContainer h4 {\\n  display: none;\\n}\\n.bodyContainer .worksSection {\\n  background: rgb(252, 191, 73);\\n  background: linear-gradient(0deg, rgb(252, 191, 73) 0%, rgb(255, 162, 64) 50%, rgb(247, 127, 0) 100%);\\n}\\n.bodyContainer .worksContainer:hover, .bodyContainer .worksContainer:focus {\\n  display: flex;\\n  justify-content: space-around;\\n  margin: 5vh 1%;\\n  width: 98%;\\n  position: absolute;\\n  transition: 400ms ease;\\n}\\n.bodyContainer .worksContainer:hover .worksPhoto, .bodyContainer .worksContainer:focus .worksPhoto {\\n  border: solid 1px black;\\n  display: flex;\\n  transform: scale(150%);\\n  width: 33%;\\n}\\n.bodyContainer .worksContainer:hover .worksInfo, .bodyContainer .worksContainer:focus .worksInfo {\\n  display: flex;\\n  align-self: center;\\n  width: 20%;\\n  margin: 30px;\\n  text-align: center;\\n  line-height: 1.5;\\n  cursor: default;\\n  animation: textTrans 2500ms;\\n  background: transparent;\\n}\\n.bodyContainer .worksContainer:hover h4, .bodyContainer .worksContainer:focus h4 {\\n  display: inline-block;\\n  align-self: center;\\n  margin: 30px;\\n  text-align: center;\\n  font-size: 25px;\\n  line-height: 1.5;\\n  cursor: default;\\n  animation: textTrans 2500ms;\\n  background: transparent;\\n}\\n\\n.quotes {\\n  display: flex;\\n  height: 20%;\\n  min-width: fit-content;\\n  max-width: 20ch;\\n  margin: auto 20%;\\n  text-align: center;\\n  font-size: 30px;\\n  line-height: 1.6;\\n  cursor: default;\\n  background: transparent;\\n}\\n.quotes p {\\n  background: transparent;\\n}\\n\\n.contact-container {\\n  border-radius: 30px;\\n  width: 40rem;\\n  height: 33rem;\\n  display: flex;\\n  margin: auto;\\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);\\n  background-color: #00263a;\\n  text-transform: lowercase;\\n}\\n.contact-container .contact-main {\\n  display: flex;\\n  flex-direction: column;\\n  width: 30rem;\\n  height: 30rem;\\n  margin: auto;\\n  background-color: transparent;\\n}\\n.contact-container .contact-main .contact-section {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  border-radius: 30px;\\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);\\n  background-color: #ab5800;\\n  width: 100%;\\n  height: 30%;\\n  margin: auto;\\n}\\n.contact-container .contact-main .contact-section .contact-label {\\n  font-size: 20px;\\n  color: white;\\n  background-color: transparent;\\n  cursor: default;\\n}\\n.contact-container .contact-main .contact-section .contact-links {\\n  display: none;\\n}\\n.contact-container .contact-section:hover {\\n  background-color: #f77f00;\\n  transform: scale(1.1);\\n  transition: transform 500ms;\\n}\\n.contact-container .contact-section:hover .contact-label {\\n  display: none;\\n}\\n.contact-container .contact-section:hover .contact-links {\\n  display: flex;\\n  width: 40%;\\n  justify-content: space-around;\\n  background-color: transparent;\\n  transform: translateX(center);\\n  z-index: 1;\\n}\\n.contact-container .contact-section:hover .contact-links a {\\n  color: white;\\n  background-color: transparent;\\n  font-size: 20px;\\n  text-decoration: none;\\n}\\n.contact-container .contact-section:hover .contact-links svg {\\n  fill: #003049;\\n  background-color: transparent;\\n  transform: scale(1.5);\\n}\\n\\nfooter {\\n  margin-top: auto;\\n}\\nfooter .footerContainer {\\n  display: flex;\\n  width: 100%;\\n  color: #fff;\\n}\\nfooter .footerContainer h3 {\\n  cursor: default;\\n  background-color: black;\\n  padding: 10px;\\n  width: 100%;\\n  letter-spacing: 2px;\\n  text-align: center;\\n}\\n\\n@keyframes rollDown {\\n  0% {\\n    top: -200px;\\n    transform: rotateX(-90deg);\\n  }\\n  11% {\\n    top: -74px;\\n    transform: rotateX(0deg);\\n    opacity: 1;\\n  }\\n  22% {\\n    top: -74px;\\n    transform: rotateX(0deg);\\n    opacity: 1;\\n  }\\n  33% {\\n    top: 50px;\\n    transform: rotateX(30deg);\\n    opacity: 0;\\n  }\\n}\\n@keyframes rollDown2 {\\n  33% {\\n    top: -200px;\\n    transform: rotateX(-90deg);\\n  }\\n  44% {\\n    top: -74px;\\n    transform: rotateX(0deg);\\n    opacity: 1;\\n  }\\n  55% {\\n    top: -74px;\\n    transform: rotateX(0deg);\\n    opacity: 1;\\n  }\\n  66% {\\n    top: 50px;\\n    transform: rotateX(30deg);\\n    opacity: 0;\\n  }\\n}\\n@keyframes rollDown3 {\\n  66% {\\n    top: -200px;\\n    transform: rotateX(-90deg);\\n  }\\n  77% {\\n    top: -74px;\\n    transform: rotateX(0deg);\\n    opacity: 1;\\n  }\\n  88% {\\n    top: -74px;\\n    transform: rotateX(0deg);\\n    opacity: 1;\\n  }\\n  99% {\\n    top: 50px;\\n    transform: rotateX(30deg);\\n    opacity: 0;\\n  }\\n}\\n@keyframes textTrans {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio2023/./src/style/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://portfolio2023/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://portfolio2023/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio2023/./src/style/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio2023/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://portfolio2023/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://portfolio2023/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://portfolio2023/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://portfolio2023/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://portfolio2023/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio */ \"./src/portfolio.js\");\n\n\n\n\n// foldOut();\nconsole.log(_portfolio__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n// export default foldOut();\n\n//# sourceURL=webpack://portfolio2023/./src/index.js?");

/***/ }),

/***/ "./src/portfolio.js":
/*!**************************!*\
  !*** ./src/portfolio.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('foldOut');\n\n// const title = document.querySelector('.setTitle');\n\nfunction foldOut(){\n    const title = document.querySelector('.setTitle');\n\n    title.addEventListener('click', function(){\n        console.log('click');\n    })\n\n// this gets the cards to change to active class\n\n    const worksCards = document.getElementsByClassName('worksContainer');\n\n    for(var i = 0; i < worksCards.length; i++) {\n        worksCards[i].addEventListener('click', openCards)\n    };\n\n    function openCards(e) {\n        e.target.classList.add('active')\n            // if(worksCards[i].classList = 'active'){\n            //     // e.target.removeEventListener('click', openCards)\n            //     worksCards[i].classList.remove('active');\n            // }\n    }\n}\n\n\n\n\nconsole.log('card')\n\n\n\nfoldOut();\n\n//# sourceURL=webpack://portfolio2023/./src/portfolio.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;