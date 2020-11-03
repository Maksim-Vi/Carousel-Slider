webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MainFildSlaider/ViewSliders/SliderThreeImage.js":
/*!********************************************************************!*\
  !*** ./components/MainFildSlaider/ViewSliders/SliderThreeImage.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/slaider.module.scss */ "./styles/slaider.module.scss");
/* harmony import */ var _styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/Navigation */ "./components/MainFildSlaider/navigation/Navigation.js");
/* harmony import */ var _styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/foolScreen.module.scss */ "./styles/foolScreen.module.scss");
/* harmony import */ var _styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "D:\\Projects\\NEXT_JS\\Slaid_App\\slaid_app\\components\\MainFildSlaider\\ViewSliders\\SliderThreeImage.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var SliderThreeImage = function SliderThreeImage(_ref) {
  _s();

  var _classNames, _classNames2, _classNames3, _classNames4, _classNames5, _classNames6, _classNames7, _classNames8;

  var image = _ref.image,
      currentClick = _ref.currentClick,
      setCurrentClick = _ref.setCurrentClick,
      settingsCmponent = _ref.settingsCmponent,
      hendlerPrevClick = _ref.hendlerPrevClick,
      hendlerNextClick = _ref.hendlerNextClick,
      setFoolScreen = _ref.setFoolScreen,
      setFullScreenDiv = _ref.setFullScreenDiv;
  var ImagePrev = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (currentClick === 0) {
      return image[image.length - 1].img;
    } else {
      return image[currentClick - 1].img;
    }
  }, [currentClick]);
  var ImageNext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (currentClick === image.length - 1) {
      return image[0].img;
    } else {
      return image[currentClick + 1].img;
    }
  }, [currentClick]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var handleEsc = function handleEsc(event) {
      if (event.keyCode === 27) {
        setFoolScreen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return function () {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  return __jsx(FullScreenDiv, {
    openDiv: openFullScreen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_wrapper), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_wrapper), !settingsCmponent.foolScreen), _classNames)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_slider), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_slider), !settingsCmponent.foolScreen), _classNames2)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_slides_prev), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_slides_prev), !settingsCmponent.foolScreen), _classNames3)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_slide), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_slide), !settingsCmponent.foolScreen), _classNames4)),
    src: ImagePrev(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames5 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames5, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_slides_middle), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames5, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_slides_middle), !settingsCmponent.foolScreen), _classNames5))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames6 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames6, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_slide), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames6, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_slide), !settingsCmponent.foolScreen), _classNames6)),
    src: image[currentClick].img,
    onClick: function onClick() {
      setFullScreenDiv();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames7 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames7, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_slides_next), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames7, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_slides_next), !settingsCmponent.foolScreen), _classNames7))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames8 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames8, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_slide), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames8, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_slide), !settingsCmponent.foolScreen), _classNames8)),
    src: ImageNext(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }))), __jsx(_navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    settingsCmponent: settingsCmponent,
    setCurrentClick: setCurrentClick,
    hendlerPrevClick: hendlerPrevClick,
    hendlerNextClick: hendlerNextClick,
    currentImg: image[currentClick],
    image: image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })));
};

_s(SliderThreeImage, "uW2FR1qjPDkZruDL/hHrGy/G+K4=");

_c = SliderThreeImage;
/* harmony default export */ __webpack_exports__["default"] = (SliderThreeImage);

var _c;

$RefreshReg$(_c, "SliderThreeImage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluRmlsZFNsYWlkZXIvVmlld1NsaWRlcnMvU2xpZGVyVGhyZWVJbWFnZS5qcyJdLCJuYW1lcyI6WyJTbGlkZXJUaHJlZUltYWdlIiwiaW1hZ2UiLCJjdXJyZW50Q2xpY2siLCJzZXRDdXJyZW50Q2xpY2siLCJzZXR0aW5nc0NtcG9uZW50IiwiaGVuZGxlclByZXZDbGljayIsImhlbmRsZXJOZXh0Q2xpY2siLCJzZXRGb29sU2NyZWVuIiwic2V0RnVsbFNjcmVlbkRpdiIsIkltYWdlUHJldiIsInVzZUNhbGxiYWNrIiwibGVuZ3RoIiwiaW1nIiwiSW1hZ2VOZXh0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJoYW5kbGVFc2MiLCJldmVudCIsImtleUNvZGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9wZW5GdWxsU2NyZWVuIiwiY2xhc3NOYW1lcyIsInNfRm9vbFNjcmVlbiIsIkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV93cmFwcGVyIiwiZm9vbFNjcmVlbiIsInMiLCJTbGlkZXJUaHJlZUltYWdlX3dyYXBwZXIiLCJGb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfc2xpZGVyIiwiU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXIiLCJGb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfc2xpZGVzX3ByZXYiLCJTbGlkZXJUaHJlZUltYWdlX3NsaWRlc19wcmV2IiwiRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlIiwiU2xpZGVyVGhyZWVJbWFnZV9zbGlkZSIsIkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbWlkZGxlIiwiU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbWlkZGxlIiwiRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlc19uZXh0IiwiU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbmV4dCJdLCJtYXBwaW5n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QUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVILGlEQUFVLHVJQUFNQyxxRUFBWSxDQUFDUyxpQ0FBbkIsR0FBeUQ3QixnQkFBZ0IsQ0FBQ3NCLFVBQTFFLHFIQUF5RkMsa0VBQUMsQ0FBQ08sc0JBQTNGLEdBQXNILENBQUM5QixnQkFBZ0IsQ0FBQ3NCLFVBQXhJLGlCQUExQjtBQUFnTCxPQUFHLEVBQUViLFNBQVMsRUFBOUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBUEosQ0FESixFQVlJLE1BQUMsOERBQUQ7QUFBWSxvQkFBZ0IsRUFBRVQsZ0JBQTlCO0FBQWdELG1CQUFlLEVBQUVELGVBQWpFO0FBQWtGLG9CQUFnQixFQUFFRSxnQkFBcEc7QUFBc0gsb0JBQWdCLEVBQUVDLGdCQUF4STtBQUEwSixjQUFVLEVBQUVMLEtBQUssQ0FBQ0MsWUFBRCxDQUEzSztBQUEyTCxTQUFLLEVBQUVELEtBQWxNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixDQURJLENBQVI7QUFnQkgsQ0FoREQ7O0dBQU1ELGdCOztLQUFBQSxnQjtBQWtEU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDg3ZWE0YTNkZWNhOTA3ZmJmNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NsYWlkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL25hdmlnYXRpb24vTmF2aWdhdGlvbic7XHJcbmltcG9ydCBzX0Zvb2xTY3JlZW4gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2Zvb2xTY3JlZW4ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY29uc3QgU2xpZGVyVGhyZWVJbWFnZSA9ICh7IGltYWdlLCBjdXJyZW50Q2xpY2ssc2V0Q3VycmVudENsaWNrLCBzZXR0aW5nc0NtcG9uZW50LGhlbmRsZXJQcmV2Q2xpY2ssaGVuZGxlck5leHRDbGljayxzZXRGb29sU2NyZWVuLHNldEZ1bGxTY3JlZW5EaXYgfSkgPT4ge1xyXG5cclxuICAgIGxldCAgSW1hZ2VQcmV2ID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgaWYoY3VycmVudENsaWNrID09PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIGltYWdlW2ltYWdlLmxlbmd0aC0xXS5pbWdcclxuICAgICAgICB9ICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGltYWdlW2N1cnJlbnRDbGljay0xXS5pbWdcclxuICAgICAgICB9XHJcbiAgICB9LFtjdXJyZW50Q2xpY2tdKTtcclxuXHJcbiAgICBsZXQgIEltYWdlTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIGlmKGN1cnJlbnRDbGljayA9PT0gaW1hZ2UubGVuZ3RoLTEpe1xyXG4gICAgICAgICAgICByZXR1cm4gaW1hZ2VbMF0uaW1nXHJcbiAgICAgICAgfSAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbWFnZVtjdXJyZW50Q2xpY2srMV0uaW1nXHJcbiAgICAgICAgfVxyXG4gICAgfSxbY3VycmVudENsaWNrXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVFc2MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRGb29sU2NyZWVuKGZhbHNlKVxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIH07XHJcbiAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRXNjKTtcclxuICAgICBcclxuICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUVzYyk7XHJcbiAgICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuICg8RnVsbFNjcmVlbkRpdiBvcGVuRGl2PXtvcGVuRnVsbFNjcmVlbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3dyYXBwZXJ9YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbixbYCR7cy5TbGlkZXJUaHJlZUltYWdlX3dyYXBwZXJ9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXJ9YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbixbYCR7cy5TbGlkZXJUaHJlZUltYWdlX3NsaWRlcn1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfcHJldn1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuLFtgJHtzLlNsaWRlclRocmVlSW1hZ2Vfc2xpZGVzX3ByZXZ9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlfWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4sW2Ake3MuU2xpZGVyVGhyZWVJbWFnZV9zbGlkZX1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfSBzcmM9e0ltYWdlUHJldigpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5Gb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfc2xpZGVzX21pZGRsZX1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuLFtgJHtzLlNsaWRlclRocmVlSW1hZ2Vfc2xpZGVzX21pZGRsZX1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZX1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuLFtgJHtzLlNsaWRlclRocmVlSW1hZ2Vfc2xpZGV9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0gc3JjPXtpbWFnZVtjdXJyZW50Q2xpY2tdLmltZ30gb25DbGljaz17KCk9PntzZXRGdWxsU2NyZWVuRGl2KCl9fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbmV4dH1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuLFtgJHtzLlNsaWRlclRocmVlSW1hZ2Vfc2xpZGVzX25leHR9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5Gb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfc2xpZGV9YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbixbYCR7cy5TbGlkZXJUaHJlZUltYWdlX3NsaWRlfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9IHNyYz17SW1hZ2VOZXh0KCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIHNldHRpbmdzQ21wb25lbnQ9e3NldHRpbmdzQ21wb25lbnR9IHNldEN1cnJlbnRDbGljaz17c2V0Q3VycmVudENsaWNrfSBoZW5kbGVyUHJldkNsaWNrPXtoZW5kbGVyUHJldkNsaWNrfSBoZW5kbGVyTmV4dENsaWNrPXtoZW5kbGVyTmV4dENsaWNrfSBjdXJyZW50SW1nPXtpbWFnZVtjdXJyZW50Q2xpY2tdfSBpbWFnZT17aW1hZ2V9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvRnVsbFNjcmVlbkRpdj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlclRocmVlSW1hZ2VcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9