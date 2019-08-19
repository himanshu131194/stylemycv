module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar _default = {\n  env: \"development\" || false,\n  port: process.env.PORT || 8000,\n  mongoURI: 'mongodb+srv://stylemycv:stylemycv123@cluster0-4h7wx.mongodb.net/test?retryWrites=true&w=majority',\n  S3: {\n    BUCKET: 'stylemycv',\n    URL: 'https://stylemycv.s3.ap-south-1.amazonaws.com',\n    ACCESS: 'AKIA3YIPQLXVUZ3S3UD7',\n    SECRET: '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',\n    PASSWORD: 'WMwQ}t%c(XqR'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/stylemycv/config/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/admin_controller.js":
/*!************************************************!*\
  !*** ./server/controllers/admin_controller.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar _default = function _default(router) {\n  //     router.get('/upload-resumes', async (req, res)=>{\n  //       const s3 = new AWS.S3({\n  //             accessKeyId: CONFIG.S3.ACCESS,\n  //             secretAccessKey: CONFIG.S3.SECRET\n  //             // region: 'ap-south-1'\n  //       });\n  //       //const container = 'resumes';\n  //       const s3URL = 'https://stylemycv.s3.ap-south-1.amazonaws.com';\n  //       let dataArray = [];\n  //       for(let parentFolder in resumeSamples){\n  //          let category = parentFolder.toLowerCase();\n  //          //fs.mkdirSync(`./${container}/${category}`);\n  //          //let parent1 = `./${container}/${category}`;\n  //          let professionals = resumeSamples[parentFolder];\n  //          for(let y in professionals){\n  //              let subCategory = y.toLowerCase();\n  //              //fs.mkdirSync(`${parent1}/${subCategory}`);\n  //              //let parent2 = `${parent1}/${subCategory}`;\n  //              let resumeArrays = professionals[y].url;\n  //              for(let z of resumeArrays){\n  //                  let dataObj = {};\n  //                  dataObj['resumeImage'] ={} ;dataObj['resumeImage']['thumbnail'] = {};\n  //                  dataObj['resumeImage']['original'] = {};\n  //                  let slugId = uuid();\n  //                  let a = z;\n  //                  let imgarray = a.split('?');\n  //                  let original = imgarray[0];\n  //                  let ext = original.split('.').pop();\n  //                  let thumbnail = z;\n  //                  //dataObj creattion\n  //                  dataObj['resumeImage']['thumbnail']['name'] = `${slugId}_thumbnail.${ext}`\n  //                  dataObj['resumeImage']['original']['name'] = `${slugId}_original.${ext}`\n  //                  dataObj['resumeImage']['thumbnail']['mime'] = `image/${ext}`\n  //                  dataObj['resumeImage']['original']['mime'] = `image/${ext}`\n  //                  dataObj['resumeImage']['thumbnail']['url'] = `${category}/${subCategory}/${slugId}_thumbnail.${ext}`\n  //                  dataObj['resumeImage']['original']['url'] = `${category}/${subCategory}/${slugId}_original.${ext}`\n  //                  dataObj['s3URL']  = s3URL;\n  //                  dataObj['templateID']  = slugId;\n  //                  dataObj['category']  = category;\n  //                  dataObj['subCategory']  = subCategory;\n  //                  dataObj['s3Bucket'] = CONFIG.S3.BUCKET;\n  //                  dataObj['templateURL']  = `/${slugId}.html`;\n  //                  let resImage = await rp({\n  //                      uri: original,\n  //                      encoding: null\n  //                  });\n  //                  let resImageThumb = await rp({\n  //                      uri: thumbnail,\n  //                      encoding: null\n  //                  });\n  //                  //fs.writeFileSync(`${parent2}/${slugId}_original.${ext}`, resImage);\n  //                  //fs.writeFileSync(`${parent2}/${slugId}_thumbnail.${ext}`, resImageThumb);\n  //                  //thumb\n  //                  const paramsThumb = {\n  //                    Bucket: CONFIG.S3.BUCKET,\n  //                    Key: `${category}/${subCategory}/${slugId}_thumbnail.${ext}`,\n  //                    Body: resImageThumb,\n  //                    ContentType: `image/${ext}`\n  //                  }\n  //                  await s3.putObject(paramsThumb).promise(); \n  //                  //original\n  //                  const params = {\n  //                    Bucket: CONFIG.S3.BUCKET,\n  //                    Key: `${category}/${subCategory}/${slugId}_original.${ext}`,\n  //                    Body: resImage,\n  //                    ContentType: `image/${ext}`\n  //                  }\n  //                  await s3.putObject(params).promise(); \n  //                  dataArray.push(dataObj);\n  //              }\n  //          }\n  //      }\n  //     resumeTrack.insertMany(dataArray, function(error, docs) {\n  //            res.send({\n  //                docs\n  //            })\n  //     });\n  //            //const dataResult = await resumeTrack.inserMany(dataArray);\n  //     })\n  router.get('/test-admin', function (req, res) {\n    res.send({\n      key: 'working'\n    });\n  });\n  return router;\n};\n\n// import resumeTrack from '../models/resumeTrack_model'\n// import CONFIG from '../../config';\n// import fs from 'fs';\n// import uuid from 'uuid/v4';\n// import AWS from 'aws-sdk'\n// import request from 'request'\n// import rp from 'request-promise'\n//    let resumeSamples = {\n//      Business: {\n//        Accountant:{\n//             url : [\n//                 \"https://images.ctfassets.net/ii3k8n6p1keg/asYpKcn1e0ukO6qgucIeS/24733d9cde6a84a1f3efa5861bda3d08/Screen_Shot_2017-06-27_at_3.01.37_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//             ]\n//        },\n//        Administration:{\n//          url : [\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/2KtYpjcJlYKeKwmew4ogMa/329cd7ca7158caec0c40ed12cc8a6df0/Screen_Shot_2016-09-23_at_10.17.51_AM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//          ]\n//        },\n//        Banking:{\n//          url : [\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/1FKDfb2p6km2g0okuewy0e/ccbc83f53586b5bf85a3fef819801d94/Screen_Shot_2017-01-20_at_2.25.56_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/SFtzqZZu6IgcAM40iMQq0/fc040196c1ad9fb27e45fb98b655e03c/Screen_Shot_2016-09-22_at_3.05.47_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/5fzSwYn8GQ8o6gAUoeC8Yq/536f4c5a404c4dee53a4af1a0a660a73/finance-professional.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/5fzSwYn8GQ8o6gAUoeC8Yq/536f4c5a404c4dee53a4af1a0a660a73/finance-professional.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//          ]\n//        },\n//        BusinessDevelopment:{\n//          url : [\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/39EhNGrZG0gKggoAIKoscU/9481ebb41636d917f68b580c8790118c/Screen_Shot_2016-09-23_at_2.48.39_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/4aqT1PNLVeYEI4IMEEacSM/3bda629b7983eca374eaa864cc2d55ed/financial_sales_and_something_officer.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/1uEO5nuAgACOu6SwmsSGEc/41cfd8f22f88cb027c210abc27633ad1/information-technology-professional.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//          ]\n//        },\n//        Executive:{\n//          url : [\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/5kvCubLIwEg8qQWSWgqmEc/c3927fa0ce59a9d28935ece8ad705823/Screen_Shot_2017-01-20_at_2.24.05_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/2CqGotWp2UM8GeiY2aQE2S/c37686eb6d0047a0eeac64fedb84e249/Screen_Shot_2016-11-22_at_4.25.22_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//          ]\n//        },\n//        hr:{\n//          url : [\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/64AZt2qht6OuOSkQQ8qWQE/a4fd7d4166a10ee84e2987cfe1edc475/Screen_Shot_2016-09-23_at_11.42.22_AM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/2KtYpjcJlYKeKwmew4ogMa/329cd7ca7158caec0c40ed12cc8a6df0/Screen_Shot_2016-09-23_at_10.17.51_AM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/4TCP7QEEbeOeEAG4AaSMQS/99cf865d4b465bb5433e81080f88a634/senior-hr-professional.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/6EOJNBKBocCIAu0i0As2yg/a12be0d90e8321120db592de9ec95209/hr-professional.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//          ]\n//        },\n//        InvestmentBanking:{\n//          url : [\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/SFtzqZZu6IgcAM40iMQq0/fc040196c1ad9fb27e45fb98b655e03c/Screen_Shot_2016-09-22_at_3.05.47_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/5fzSwYn8GQ8o6gAUoeC8Yq/536f4c5a404c4dee53a4af1a0a660a73/finance-professional.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//          ]\n//        },\n//        Management:{\n//          url : [\n//            \"https://images.ctfassets.net/ii3k8n6p1keg/5pl1BQuVVKkyEIKG8y4GI4/ef8a4c0748c250854b1094712f29fa7c/Screen_Shot_2017-01-20_at_2.33.25_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//            \"https://images.ctfassets.net/ii3k8n6p1keg/4SOe84qpDyemgumQw8SO6Q/7f474e0c782653ec982cd82d79527321/Screen_Shot_2017-01-20_at_2.31.42_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//            \"https://images.ctfassets.net/ii3k8n6p1keg/27hnqat9oU6Oqg4KC2QeQK/b1d8d8d52427cd4608105124037b0d49/Screen_Shot_2017-01-20_at_3.22.19_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//            \"https://images.ctfassets.net/ii3k8n6p1keg/6NtbAt7IcMMSkU4UsWCg6Q/e8c2ea94c08d064adfbffb934cd906f8/Screen_Shot_2017-01-20_at_2.52.02_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//          ]\n//        },\n//        Marketing:{\n//          url : [\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/3vpfRZvdZ6SSkI28qSGu4C/106577378def6ab6cb639a252ac28c25/Screen_Shot_2017-01-20_at_3.30.13_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/5qZONqUGHK0G8mikCWGsgI/81028dc3828aad230e0527d7cc4bf02f/Screen_Shot_2016-09-23_at_4.05.07_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/6tWPoMEHjGucgSogiims2C/18fd7a3482aa6a555510473aeddf687f/Screen_Shot_2016-09-23_at_11.36.53_AM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//          ]\n//        },\n//        Sales:{\n//          url : [\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/nnnkpRX3gWGqu6aEsquEm/fef596948c6d0c072e4bb6f5ef1c6677/Screen_Shot_2017-01-20_at_3.09.50_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/3pACVCskzKIEqqmwoYWW6e/d9c8df1be045f63a2bc9304470ca65a6/Screen_Shot_2017-01-20_at_3.02.00_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/1oMEAh9NxKO0ksc0q8Awc2/a8c5ffaade475ee1302052f37492a373/Screen_Shot_2016-09-23_at_2.07.57_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//          ]\n//        },\n//        Secretary :{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/7mXEJo1yFyueiwq8MowWyk/2f1dbb18dfb58533f8d795e929b96956/Screen_Shot_2017-11-09_at_4.10.10_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        }\n//      },\n//      Creative:{\n//        Artist:{\n//           url:[\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/2XEGjEqhRKM0segMGOuSWi/c0f6a6ff0704949eec426e4424f65ef8/Screen_Shot_2017-06-28_at_2.55.04_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/5pEbK7N7H2m0SyYY2asSqQ/c1ea27c291a9959333210c7c92ef772d/Screen_Shot_2017-06-28_at_1.40.58_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/4wdjOUnd8cKUmQSwwqI6cY/fd41514a6d9cfcb1fc64873b4f8b94df/Screen_Shot_2017-01-20_at_2.57.44_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Creative:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/5pEbK7N7H2m0SyYY2asSqQ/c1ea27c291a9959333210c7c92ef772d/Screen_Shot_2017-06-28_at_1.40.58_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/4wdjOUnd8cKUmQSwwqI6cY/fd41514a6d9cfcb1fc64873b4f8b94df/Screen_Shot_2017-01-20_at_2.57.44_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/30RLkQ05xe2kK8GogmKWoG/6751af1bfad059da98f61fc797a51aa8/Screen_Shot_2017-01-20_at_2.43.55_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        GraphicDesign:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/5pEbK7N7H2m0SyYY2asSqQ/c1ea27c291a9959333210c7c92ef772d/Screen_Shot_2017-06-28_at_1.40.58_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        InteriorDesign:{\n//           url:[\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/4wdjOUnd8cKUmQSwwqI6cY/fd41514a6d9cfcb1fc64873b4f8b94df/Screen_Shot_2017-01-20_at_2.57.44_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Photography:{\n//           url:[\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/6aKu4FtflCMewaikqU6a4W/e421e28cbb03f3646310289f683cc007/Screen_Shot_2017-11-08_at_3.06.57_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Writer:{\n//           url:[\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/30RLkQ05xe2kK8GogmKWoG/6751af1bfad059da98f61fc797a51aa8/Screen_Shot_2017-01-20_at_2.43.55_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        }\n//      },\n//      ServiceHospitality:{\n//        CallCenter:{\n//            url: [\n//                \"https://images.ctfassets.net/ii3k8n6p1keg/2dMSZdcUPaE6QMoaW0OUGw/a5a1a7fc91a8fc12bf7b726403993d12/Screen_Shot_2017-01-20_at_3.28.07_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//            ]\n//        },\n//        CustomerService:{\n//            url: [\n//                 \"https://images.ctfassets.net/ii3k8n6p1keg/6upnyAtcqI0u6I6UaIa8Q2/c961a99855421198389910cbdc5c6ef1/Screen_Shot_2016-09-23_at_4.07.57_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//                 \"https://images.ctfassets.net/ii3k8n6p1keg/2LB1r4RUdiwCM6so6SKAs2/e8c8d731bd2f76987f3c25a485bafc7c/Screen_Shot_2016-09-23_at_3.37.26_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//                 \"https://images.ctfassets.net/ii3k8n6p1keg/1QmUg1koe8WQeUSAwIm2c2/606978de597c43d77e4477180a708886/Screen_Shot_2017-01-20_at_3.00.21_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//                 \"https://images.ctfassets.net/ii3k8n6p1keg/1Sj1kzUCLykaYowIw80KM0/d0a99df156e4a2a2ecfbbbcadd02177e/Screen_Shot_2017-01-20_at_2.58.58_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//                 \"https://images.ctfassets.net/ii3k8n6p1keg/4MfwxtCHHG4Aew0Ya8SAO4/a5190ff96ea5ab3ff44ee9249fe0228d/Screen_Shot_2016-11-22_at_9.34.28_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//            ]\n//        },\n//        Housekeeping:{\n//            url: [\n//                \"https://images.ctfassets.net/ii3k8n6p1keg/6LKWXh4aIMgcC4Ygawqcmo/37ce92e8b6b68c6fb041ff397a0075c1/Screen_Shot_2017-01-20_at_2.48.07_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//            ]\n//        },\n//        Retail:{\n//            url: [\n//               \"https://images.ctfassets.net/ii3k8n6p1keg/1r2gES8S7CsqCi4IocooUI/bb2caed34f9b31e4fd9d33bc43b4af22/Screen_Shot_2017-01-20_at_2.53.41_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//            ]\n//        },\n//        WaiterWaitress :{\n//            url: [\n//               \"https://images.ctfassets.net/ii3k8n6p1keg/5EnwM80ItqIUEGg6QcYeYQ/baa9dd7752a8aaa7e3324e0eb3d15be5/Screen_Shot_2017-01-20_at_3.11.26_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//            ]\n//        }\n//      },\n//      Engineering:{\n//        CivilEngineer:{\n//            url:[\n//               \"https://images.ctfassets.net/ii3k8n6p1keg/50bdGcgfFKMg68Y0MSi220/71d1a9c82c6548f75c57702848892f29/Screen_Shot_2016-11-22_at_9.07.49_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//            ]\n//        },\n//        ElectricalEngineer:{\n//            url:[\n//               \"https://images.ctfassets.net/ii3k8n6p1keg/3kCwQESREAKaAuoUEOMA4q/1a96d9997720f929332c96538c0121f5/Screen_Shot_2017-06-29_at_2.48.57_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//            ]\n//        },\n//        MechanicalEngineer:{\n//            url:[\n//               \"https://images.ctfassets.net/ii3k8n6p1keg/E6iehaX9G8UyE08u6WKas/b274cb570c493890bd2480a1538704eb/Screen_Shot_2017-06-27_at_4.01.05_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//            ]\n//        }\n//      },\n//      Construction:{\n//        ConstructionWorker:{\n//           url:[\n//               \"https://images.ctfassets.net/ii3k8n6p1keg/1qfk562qZWMemea6QYwaW2/a46bb3205640639cb41ef1727666bbd2/Screen_Shot_2017-01-20_at_2.37.58_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        QuantitySurveyor:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/1keb7308cSsIuMyEKqCmeM/90f45f487e236fe04d2e379acede53c2/Screen_Shot_2017-06-29_at_3.40.35_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        SiteManager:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/1qfk562qZWMemea6QYwaW2/a46bb3205640639cb41ef1727666bbd2/Screen_Shot_2017-01-20_at_2.37.58_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//      },\n//      HealthCare:{\n//        DirectCare:{\n//           url:[\n//               \"https://images.ctfassets.net/ii3k8n6p1keg/621ZKYz3YA6eceMSUEEuCS/f1d6f222a2b013d6756f00ff23a6509b/Screen_Shot_2017-01-20_at_3.03.19_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Medical:{\n//           url:[\n//               \"https://images.ctfassets.net/ii3k8n6p1keg/15KHoJCsOEEiCcgYsOKugQ/67346d6b6cbfe00296f3ae506e8ccac9/Screen_Shot_2016-09-23_at_3.34.22_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//               \"https://images.ctfassets.net/ii3k8n6p1keg/G7nHY5nDQQq4kM2oKs8Q8/f487311a26ce13913f5c3e19efaafb31/Screen_Shot_2017-01-20_at_2.39.42_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//               \"https://images.ctfassets.net/ii3k8n6p1keg/1OicmtSSlWgSqeKuwIiC8Y/e587c7bdb181dfac22a7663a1fe78cf6/Screen_Shot_2016-09-23_at_2.11.05_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//               \"https://images.ctfassets.net/ii3k8n6p1keg/4vwzjpJbsc8cKieWi06044/9a22f0d910cfd0dbb5edc8554e227b8d/Screen_Shot_2016-09-23_at_3.53.38_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Nursing:{\n//           url:[\n//               \"https://images.ctfassets.net/ii3k8n6p1keg/G7nHY5nDQQq4kM2oKs8Q8/f487311a26ce13913f5c3e19efaafb31/Screen_Shot_2017-01-20_at_2.39.42_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//               \"https://images.ctfassets.net/ii3k8n6p1keg/1OicmtSSlWgSqeKuwIiC8Y/e587c7bdb181dfac22a7663a1fe78cf6/Screen_Shot_2016-09-23_at_2.11.05_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//               \"https://images.ctfassets.net/ii3k8n6p1keg/15KHoJCsOEEiCcgYsOKugQ/67346d6b6cbfe00296f3ae506e8ccac9/Screen_Shot_2016-09-23_at_3.34.22_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Pharmacist:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/5JlzCKeWxquuG4UQqauyau/687021062dd1eaa371ece7e0a7bfd9e7/Screen_Shot_2017-06-28_at_12.42.16_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Physician:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/4nPUj5uY12qM0Kk2quaucI/809d4853c7def5e4cf01bee4a4ad66f5/physician-cv-example.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        SocialWork:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/2N16TM4J4IIOoSOAeQ2UY8/36745d91f9e2590e7bc2b4ad3b72453b/Screen_Shot_2017-11-08_at_4.36.04_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        }\n//      },\n//      ITSoftware:{\n//        it:{\n//           url:[\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/6u0obPKGmA8IMiUOcye0su/ffc6feb6e8d9394c936a1f0b9f59a946/Screen_Shot_2017-01-20_at_3.26.18_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        ProjectManager:{\n//           url:[\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/27hnqat9oU6Oqg4KC2QeQK/b1d8d8d52427cd4608105124037b0d49/Screen_Shot_2017-01-20_at_3.22.19_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/5pl1BQuVVKkyEIKG8y4GI4/ef8a4c0748c250854b1094712f29fa7c/Screen_Shot_2017-01-20_at_2.33.25_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/4SOe84qpDyemgumQw8SO6Q/7f474e0c782653ec982cd82d79527321/Screen_Shot_2017-01-20_at_2.31.42_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        SoftwareEngineer:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/3bMSiZ1CcgEQEmy4EAiAA6/550b51712cd463b9819b807b51dadd40/Screen_Shot_2017-01-20_at_3.05.40_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/4wFohUf1WwEUugmSoGe4cw/1669ffe504b4474c1487148a7c133193/Screen_Shot_2017-01-20_at_2.22.00_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        TechnicalSupport:{\n//           url:[\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/4wFohUf1WwEUugmSoGe4cw/1669ffe504b4474c1487148a7c133193/Screen_Shot_2017-01-20_at_2.22.00_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/6u0obPKGmA8IMiUOcye0su/ffc6feb6e8d9394c936a1f0b9f59a946/Screen_Shot_2017-01-20_at_3.26.18_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        }\n//      },\n//      Education:{\n//        Professor:{\n//           url:[\n//                \"https://images.ctfassets.net/ii3k8n6p1keg/4A0m8N28u4eWGUogEs0EsS/c5546b17f592807ebf3544439242e191/Screen_Shot_2017-06-30_at_3.26.02_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Psychologist:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/5FUUaZxjnaCQmEsu2aIkgC/efac08668069d2e3cd4b6ed6a75c72cc/Screen_Shot_2017-01-20_at_3.08.11_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Research:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/4lM800VzTyOcK8UsgSO4As/2a6cb7e6424be374a98b7b0c37cbb418/Screen_Shot_2017-11-09_at_3.19.26_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Teacher:{\n//           url:[\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/2Sp97RTYOIqiYe24maQm0u/6831f0dba4346a6dd54ef3b565384f41/Screen_Shot_2016-11-22_at_10.03.34_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/6bkSY0c4SWW0cI4COwaICo/90ffdad7e6c4ad042b46b4c1a03abf07/Screen_Shot_2017-06-29_at_4.48.45_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        TeacherAssistant:{\n//           url:[\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/eK7Cb9l2cEEUcG0GOGee0/ec9c5fa64eb627ee87524a9132b0b723/Screen_Shot_2017-06-29_at_4.15.09_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        }\n//      },\n//      Other:{\n//        Consulting:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/1qmNsJy3z2g6kSgMM2qOKo/6b37af9cfe6377fabbad1b8987e3b67b/Screen_Shot_2017-01-20_at_2.56.42_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/iWIwZSkPJeYuI0CIGmmQ4/fe63bd3d0788d2feaa04e7c8ab8b452f/Screen_Shot_2016-09-23_at_2.37.57_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Logistics:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/6NtbAt7IcMMSkU4UsWCg6Q/e8c2ea94c08d064adfbffb934cd906f8/Screen_Shot_2017-01-20_at_2.52.02_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/6EHvDxB5ioIIeQyG4aAW0O/c6a10f10f8c15cbbf6175e6660f99784/Screen_Shot_2016-11-22_at_9.50.21_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Military:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/42seWP1680COMYA4U2SKeQ/f1aa4190a08720044463f4e9a0760438/Screen_Shot_2016-09-23_at_10.26.08_AM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Paralegal:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/3mckjBpFeEQiWm8QA0c2iA/c4dff78491507f716c9c2d4492ffec09/Screen_Shot_2017-01-20_at_2.30.20_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\",\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/1BpcoZ1SYgO8oOyKo6Gkew/331dba6b382a9155578322fc0e8a480e/professional.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Pilot:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/XkaHCMRIIeGiqgqqSSc/9c6163e0490de7206449bbde463b91ac/Screen_Shot_2017-11-21_at_4.28.07_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        PublicRelations:{\n//           url:[\n//              \"https://images.ctfassets.net/ii3k8n6p1keg/4vwzjpJbsc8cKieWi06044/9a22f0d910cfd0dbb5edc8554e227b8d/Screen_Shot_2016-09-23_at_3.53.38_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        RealEstate:{\n//           url:[\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/2NaCHIiYp2AuQgQ6iMwyKW/df90d464702457dc3a4d2846e578161b/Screen_Shot_2017-01-20_at_3.06.47_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        },\n//        Warehouse:{\n//           url:[\n//             \"https://images.ctfassets.net/ii3k8n6p1keg/4HTOLdFTDWy6q4Cq6qGykk/f6df2b8cd6f817892ead73b47bdbe6f4/Screen_Shot_2017-01-20_at_2.35.56_PM.png?fit=thumb&f=top&w=360&h=510&fm=jpg&q=80\"\n//           ]\n//        }\n//      }\n//    }\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/stylemycv/server/controllers/admin_controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/admin_controller.js?");

/***/ }),

/***/ "./server/controllers/index.js":
/*!*************************************!*\
  !*** ./server/controllers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_resumeTrack_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/resumeTrack_model */ \"./server/models/resumeTrack_model.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar _default = function _default(router) {\n  router.post('/get-resume-samples',\n  /*#__PURE__*/\n  function () {\n    var _ref = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(req, res) {\n      var category, subCategory, queryFilter, result;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              category = req.body.category;\n              subCategory = req.body.subCategory;\n              queryFilter = {};\n              if (category) queryFilter['category'] = category;\n              if (subCategory) queryFilter['subCategory'] = subCategory;\n              _context.next = 7;\n              return _models_resumeTrack_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(queryFilter);\n\n            case 7:\n              result = _context.sent;\n              console.log(result);\n              res.status(200).send({\n                result: result\n              });\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }()); //TEST URL IN INDEX CONTROLLER\n\n  router.get('/test-index', function (req, res) {\n    console.log('resume CONTROLLER');\n    res.send({\n      key: 'working'\n    });\n  });\n  return router;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/stylemycv/server/controllers/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/index.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar compile = function compile(app) {\n  if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/Users/himanshusavita/Documents/live-projects/stylemycv/server/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/stylemycv/server/devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/models/resumeTrack_model.js":
/*!********************************************!*\
  !*** ./server/models/resumeTrack_model.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/ */ \"./config/index.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar resumeTrack = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  resumeImage: {\n    thumbnail: {\n      name: {\n        type: String\n      },\n      mime: {\n        type: String\n      },\n      url: {\n        type: String\n      },\n      width: {\n        type: Number\n      },\n      height: {\n        type: Number\n      },\n      size: {\n        type: Number\n      }\n    },\n    original: {\n      name: {\n        type: String\n      },\n      mime: {\n        type: String\n      },\n      url: {\n        type: String\n      },\n      width: {\n        type: Number\n      },\n      height: {\n        type: Number\n      },\n      size: {\n        type: Number\n      }\n    }\n  },\n  s3Bucket: {\n    type: String\n  },\n  s3URL: {\n    type: String\n  },\n  templateID: {\n    type: String\n  },\n  category: {\n    type: String\n  },\n  subCategory: {\n    type: String\n  },\n  templateURL: {\n    type: String\n  },\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('resumeTrack', resumeTrack);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(resumeTrack, \"resumeTrack\", \"/Users/himanshusavita/Documents/live-projects/stylemycv/server/models/resumeTrack_model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/stylemycv/server/models/resumeTrack_model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/resumeTrack_model.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _controllers___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/ */ \"./server/controllers/index.js\");\n/* harmony import */ var _controllers_admin_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/admin_controller */ \"./server/controllers/admin_controller.js\");\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../template.js */ \"./template.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_4___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_4___default.a.connect(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mongoURI, {\n  useNewUrlParser: true,\n  useFindAndModify: false\n});\nmongoose__WEBPACK_IMPORTED_MODULE_4___default.a.connection.on('error', function () {\n  throw new Error('unable to connect to database');\n});\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar CURRENT_WORKING_DIR = process.cwd();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({\n  limit: '10mb',\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json({\n  limit: '10mb',\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'public'))); //comment out before building for production\n\n //comment out before building for production\n\n_devBundle__WEBPACK_IMPORTED_MODULE_8__[\"default\"].compile(app);\napp.use('/api', Object(_controllers___WEBPACK_IMPORTED_MODULE_5__[\"default\"])(express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()));\napp.use('/api', Object(_controllers_admin_controller__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()));\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist')));\napp.get('*', function (req, res) {\n  res.send(Object(_template_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])());\n});\napp.listen(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port);\n});\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/Users/himanshusavita/Documents/live-projects/stylemycv/server/server.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/himanshusavita/Documents/live-projects/stylemycv/server/server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar _default = function _default() {\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n            <title></title>\\n            <meta charset=\\\"UTF-8\\\">\\n            <meta http-equiv=\\\"Content-type\\\" content=\\\"text/html; charset=UTF-8\\\">\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap\\\" rel=\\\"stylesheet\\\">\\n            <meta name=\\\"viewport\\\"  content=\\\"width=device-width initial-scale=1\\\"/>\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\"></div>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n          <script type=\\\"text/javascript\\\" src=\\\"/js/main.js\\\"></script>\\n        </body>\\n      </html>\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/stylemycv/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['babel-polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader'],\n      resolve: {\n        extensions: [\".js\", \".jsx\"]\n      }\n    }, {\n      test: /.css$/,\n      use: [{\n        loader: 'style-loader'\n      }, {\n        loader: 'css-loader'\n      }]\n    }, {\n      test: /\\.(png|woff|woff2|eot|ttf|svg|gif)$/,\n      use: ['url-loader?limit=100000']\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/himanshusavita/Documents/live-projects/stylemycv/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/himanshusavita/Documents/live-projects/stylemycv/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi babel-polyfill ./server/server.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! /Users/himanshusavita/Documents/live-projects/stylemycv/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./server/server.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });