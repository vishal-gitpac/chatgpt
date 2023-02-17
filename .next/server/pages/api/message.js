"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/message";
exports.ids = ["pages/api/message"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("twilio");

/***/ }),

/***/ "(api)/./pages/api/message.js":
/*!******************************!*\
  !*** ./pages/api/message.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openAI = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nasync function handler(req, res) {\n    const MessagingResponse = (__webpack_require__(/*! twilio */ \"twilio\").twiml.MessagingResponse);\n    var messageResponse = new MessagingResponse();\n    const sentMessage = req.body.Body || \"\";\n    let replyToBeSent = \"\";\n    if (sentMessage.trim().length === 0) {\n        replyToBeSent = \"We could not get your message. Please try again\";\n    } else {\n        try {\n            const completion = await openAI.createCompletion({\n                model: \"text-davinci-003\",\n                prompt: req.body.Body,\n                temperature: 0.6,\n                n: 1,\n                max_tokens: 50\n            });\n            replyToBeSent = completion.data.choices[0].text;\n        } catch (error) {\n            if (error.response) {\n                console.log(error.response);\n                replyToBeSent = \"There was an issue with the server\";\n            } else {\n                // error getting response\n                replyToBeSent = \"An error occurred during your request.\";\n            }\n        }\n    }\n    messageResponse.message(replyToBeSent);\n    // send response\n    res.writeHead(200, {\n        \"Content-Type\": \"text/xml\"\n    });\n    res.end(messageResponse.toString());\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVzc2FnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFDbEQsTUFBTUUsZ0JBQWdCLElBQUlGLGlEQUFhQSxDQUFDO0lBQ3RDRyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDcEM7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUNkLGVBQWVNLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLG9CQUFvQkMscUVBQXlDO0lBQ25FLElBQUlFLGtCQUFrQixJQUFJSDtJQUMxQixNQUFNSSxjQUFjTixJQUFJTyxJQUFJLENBQUNDLElBQUksSUFBSTtJQUNyQyxJQUFJQyxnQkFBZ0I7SUFDcEIsSUFBSUgsWUFBWUksSUFBSSxHQUFHQyxNQUFNLEtBQUssR0FBRztRQUNuQ0YsZ0JBQWdCO0lBQ2xCLE9BQU87UUFDTCxJQUFJO1lBQ0YsTUFBTUcsYUFBYSxNQUFNZCxPQUFPZSxnQkFBZ0IsQ0FBQztnQkFDL0NDLE9BQU87Z0JBQ1BDLFFBQVFmLElBQUlPLElBQUksQ0FBQ0MsSUFBSTtnQkFDckJRLGFBQWE7Z0JBQ2JDLEdBQUc7Z0JBQ0hDLFlBQVk7WUFFZDtZQUNBVCxnQkFBZ0JHLFdBQVdPLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtRQUNqRCxFQUFFLE9BQU9DLE9BQU87WUFDZCxJQUFJQSxNQUFNQyxRQUFRLEVBQUU7Z0JBQ2xCQyxRQUFRQyxHQUFHLENBQUNILE1BQU1DLFFBQVE7Z0JBQzFCZCxnQkFBZ0I7WUFDbEIsT0FBTztnQkFDTCx5QkFBeUI7Z0JBQ3pCQSxnQkFBZ0I7WUFDbEIsQ0FBQztRQUNIO0lBQ0YsQ0FBQztJQUNESixnQkFBZ0JxQixPQUFPLENBQUNqQjtJQUN4QixnQkFBZ0I7SUFDaEJSLElBQUkwQixTQUFTLENBQUMsS0FBSztRQUNqQixnQkFBZ0I7SUFDbEI7SUFDQTFCLElBQUkyQixHQUFHLENBQUN2QixnQkFBZ0J3QixRQUFRO0FBQ2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGF0c2FwcC1jaGF0Z3B0Ly4vcGFnZXMvYXBpL21lc3NhZ2UuanM/ZmRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5jb25zdCBvcGVuQUkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBNZXNzYWdpbmdSZXNwb25zZSA9IHJlcXVpcmUoXCJ0d2lsaW9cIikudHdpbWwuTWVzc2FnaW5nUmVzcG9uc2U7XG4gIHZhciBtZXNzYWdlUmVzcG9uc2UgPSBuZXcgTWVzc2FnaW5nUmVzcG9uc2UoKTtcbiAgY29uc3Qgc2VudE1lc3NhZ2UgPSByZXEuYm9keS5Cb2R5IHx8IFwiXCI7XG4gIGxldCByZXBseVRvQmVTZW50ID0gXCJcIjtcbiAgaWYgKHNlbnRNZXNzYWdlLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICByZXBseVRvQmVTZW50ID0gXCJXZSBjb3VsZCBub3QgZ2V0IHlvdXIgbWVzc2FnZS4gUGxlYXNlIHRyeSBhZ2FpblwiO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbkFJLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgICAgICBtb2RlbDogXCJ0ZXh0LWRhdmluY2ktMDAzXCIsIC8vIHJlcXVpcmVkXG4gICAgICAgIHByb21wdDogcmVxLmJvZHkuQm9keSwgLy8gY29tcGxldGlvbiBiYXNlZCBvbiB0aGlzXG4gICAgICAgIHRlbXBlcmF0dXJlOiAwLjYsIC8vXG4gICAgICAgIG46IDEsXG4gICAgICAgIG1heF90b2tlbnM6IDUwLFxuICAgICAgICAvLyBzdG9wOiBcIi5cIlxuICAgICAgfSk7XG4gICAgICByZXBseVRvQmVTZW50ID0gY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgcmVwbHlUb0JlU2VudCA9IFwiVGhlcmUgd2FzIGFuIGlzc3VlIHdpdGggdGhlIHNlcnZlclwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXJyb3IgZ2V0dGluZyByZXNwb25zZVxuICAgICAgICByZXBseVRvQmVTZW50ID0gXCJBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgeW91ciByZXF1ZXN0LlwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBtZXNzYWdlUmVzcG9uc2UubWVzc2FnZShyZXBseVRvQmVTZW50KTtcbiAgLy8gc2VuZCByZXNwb25zZVxuICByZXMud3JpdGVIZWFkKDIwMCwge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwidGV4dC94bWxcIixcbiAgfSk7XG4gIHJlcy5lbmQobWVzc2FnZVJlc3BvbnNlLnRvU3RyaW5nKCkpO1xufVxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbkFJIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIk1lc3NhZ2luZ1Jlc3BvbnNlIiwicmVxdWlyZSIsInR3aW1sIiwibWVzc2FnZVJlc3BvbnNlIiwic2VudE1lc3NhZ2UiLCJib2R5IiwiQm9keSIsInJlcGx5VG9CZVNlbnQiLCJ0cmltIiwibGVuZ3RoIiwiY29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInByb21wdCIsInRlbXBlcmF0dXJlIiwibiIsIm1heF90b2tlbnMiLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiLCJlcnJvciIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ3cml0ZUhlYWQiLCJlbmQiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/message.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/message.js"));
module.exports = __webpack_exports__;

})();