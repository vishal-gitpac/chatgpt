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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openAI = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nasync function handler(req, res) {\n    const MessagingResponse = (__webpack_require__(/*! twilio */ \"twilio\").twiml.MessagingResponse);\n    var messageResponse = new MessagingResponse();\n    const sentMessage = req.body.Body || \"\";\n    let replyToBeSent = \"\";\n    if (sentMessage.trim().length === 0) {\n        replyToBeSent = \"We could not get your message. Please try again\";\n    } else {\n        try {\n            const completion = await openAI.createCompletion({\n                model: \"text-davinci-003\",\n                prompt: req.body.Body,\n                temperature: 0.6,\n                n: 1,\n                max_tokens: 300\n            });\n            replyToBeSent = completion.data.choices[0].text;\n        } catch (error) {\n            if (error.response) {\n                replyToBeSent = \"There was an issue with the server\";\n            } else {\n                // error getting response\n                replyToBeSent = \"An error occurred during your request.\";\n            }\n        }\n    }\n    messageResponse.message(replyToBeSent);\n    // send response\n    res.writeHead(200, {\n        \"Content-Type\": \"text/xml\"\n    });\n    res.end(messageResponse.toString());\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVzc2FnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFDbEQsTUFBTUUsZ0JBQWdCLElBQUlGLGlEQUFhQSxDQUFDO0lBQ3RDRyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDcEM7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUNkLGVBQWVNLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLG9CQUFvQkMscUVBQXlDO0lBQ25FLElBQUlFLGtCQUFrQixJQUFJSDtJQUMxQixNQUFNSSxjQUFjTixJQUFJTyxJQUFJLENBQUNDLElBQUksSUFBSTtJQUNyQyxJQUFJQyxnQkFBZ0I7SUFDcEIsSUFBSUgsWUFBWUksSUFBSSxHQUFHQyxNQUFNLEtBQUssR0FBRztRQUNuQ0YsZ0JBQWdCO0lBQ2xCLE9BQU87UUFDTCxJQUFJO1lBQ0YsTUFBTUcsYUFBYSxNQUFNZCxPQUFPZSxnQkFBZ0IsQ0FBQztnQkFDL0NDLE9BQU87Z0JBQ1BDLFFBQVFmLElBQUlPLElBQUksQ0FBQ0MsSUFBSTtnQkFDckJRLGFBQWE7Z0JBQ2JDLEdBQUc7Z0JBQ0hDLFlBQVk7WUFFZDtZQUNBVCxnQkFBZ0JHLFdBQVdPLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtRQUNqRCxFQUFFLE9BQU9DLE9BQU87WUFDZCxJQUFJQSxNQUFNQyxRQUFRLEVBQUU7Z0JBQ2xCZCxnQkFBZ0I7WUFDbEIsT0FBTztnQkFDTCx5QkFBeUI7Z0JBQ3pCQSxnQkFBZ0I7WUFDbEIsQ0FBQztRQUNIO0lBQ0YsQ0FBQztJQUNESixnQkFBZ0JtQixPQUFPLENBQUNmO0lBQ3hCLGdCQUFnQjtJQUNoQlIsSUFBSXdCLFNBQVMsQ0FBQyxLQUFLO1FBQ2pCLGdCQUFnQjtJQUNsQjtJQUNBeEIsSUFBSXlCLEdBQUcsQ0FBQ3JCLGdCQUFnQnNCLFFBQVE7QUFDbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3doYXRzYXBwLWNoYXRncHQvLi9wYWdlcy9hcGkvbWVzc2FnZS5qcz9mZGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG59KTtcbmNvbnN0IG9wZW5BSSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IE1lc3NhZ2luZ1Jlc3BvbnNlID0gcmVxdWlyZShcInR3aWxpb1wiKS50d2ltbC5NZXNzYWdpbmdSZXNwb25zZTtcbiAgdmFyIG1lc3NhZ2VSZXNwb25zZSA9IG5ldyBNZXNzYWdpbmdSZXNwb25zZSgpO1xuICBjb25zdCBzZW50TWVzc2FnZSA9IHJlcS5ib2R5LkJvZHkgfHwgXCJcIjtcbiAgbGV0IHJlcGx5VG9CZVNlbnQgPSBcIlwiO1xuICBpZiAoc2VudE1lc3NhZ2UudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJlcGx5VG9CZVNlbnQgPSBcIldlIGNvdWxkIG5vdCBnZXQgeW91ciBtZXNzYWdlLiBQbGVhc2UgdHJ5IGFnYWluXCI7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuQUkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIiwgLy8gcmVxdWlyZWRcbiAgICAgICAgcHJvbXB0OiByZXEuYm9keS5Cb2R5LCAvLyBjb21wbGV0aW9uIGJhc2VkIG9uIHRoaXNcbiAgICAgICAgdGVtcGVyYXR1cmU6IDAuNiwgLy9cbiAgICAgICAgbjogMSxcbiAgICAgICAgbWF4X3Rva2VuczogMzAwLFxuICAgICAgICAvLyBzdG9wOiBcIi5cIlxuICAgICAgfSk7XG4gICAgICByZXBseVRvQmVTZW50ID0gY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlcGx5VG9CZVNlbnQgPSBcIlRoZXJlIHdhcyBhbiBpc3N1ZSB3aXRoIHRoZSBzZXJ2ZXJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVycm9yIGdldHRpbmcgcmVzcG9uc2VcbiAgICAgICAgcmVwbHlUb0JlU2VudCA9IFwiQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHlvdXIgcmVxdWVzdC5cIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWVzc2FnZVJlc3BvbnNlLm1lc3NhZ2UocmVwbHlUb0JlU2VudCk7XG4gIC8vIHNlbmQgcmVzcG9uc2VcbiAgcmVzLndyaXRlSGVhZCgyMDAsIHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQveG1sXCIsXG4gIH0pO1xuICByZXMuZW5kKG1lc3NhZ2VSZXNwb25zZS50b1N0cmluZygpKTtcbn1cbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5BSSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJNZXNzYWdpbmdSZXNwb25zZSIsInJlcXVpcmUiLCJ0d2ltbCIsIm1lc3NhZ2VSZXNwb25zZSIsInNlbnRNZXNzYWdlIiwiYm9keSIsIkJvZHkiLCJyZXBseVRvQmVTZW50IiwidHJpbSIsImxlbmd0aCIsImNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJ0ZW1wZXJhdHVyZSIsIm4iLCJtYXhfdG9rZW5zIiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0IiwiZXJyb3IiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJ3cml0ZUhlYWQiLCJlbmQiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/message.js\n");

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