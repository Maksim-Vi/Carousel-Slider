webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MainFildSlaider/ViewSliders/SliderTwoAndMore.js":
/*!********************************************************************!*\
  !*** ./components/MainFildSlaider/ViewSliders/SliderTwoAndMore.js ***!
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/foolScreen.module.scss */ "./styles/foolScreen.module.scss");
/* harmony import */ var _styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "D:\\Projects\\NEXT_JS\\Slaid_App\\slaid_app\\components\\MainFildSlaider\\ViewSliders\\SliderTwoAndMore.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var SliderTwoAndMore = function SliderTwoAndMore(_ref) {
  _s();

  var _classNames, _classNames2, _classNames3, _classNames4, _classNames5, _classNames6;

  var image = _ref.image,
      currentClick = _ref.currentClick,
      setCurrentClick = _ref.setCurrentClick,
      settingsCmponent = _ref.settingsCmponent,
      hendlerPrevClick = _ref.hendlerPrevClick,
      hendlerNextClick = _ref.hendlerNextClick,
      setFoolScreen = _ref.setFoolScreen,
      setFullScreenDiv = _ref.setFullScreenDiv,
      openFullScreen = _ref.openFullScreen;
  var maxImgCount = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
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
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.FoolScreen_sliderTwoAndMore__wrapper), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sliderTwoAndMore__wrapper), !settingsCmponent.foolScreen), _classNames)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.FoolScreen_sliderTwoAndMore), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sliderTwoAndMore), !settingsCmponent.foolScreen), _classNames2)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.FoolScreen_sliderTwoAndMore__slides), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sliderTwoAndMore__slides), !settingsCmponent.foolScreen), _classNames3)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.FoolScreen_imgSlide), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.imgSlide), !settingsCmponent.foolScreen), _classNames4)),
    src: image[currentClick].img,
    onClick: function onClick() {
      setFullScreenDiv();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames5 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames5, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.FoolScreen_sliderTwoAndMore__slides), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames5, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sliderTwoAndMore__slides), !settingsCmponent.foolScreen), _classNames5)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames6 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames6, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.FoolScreen_imgSlide), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames6, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.imgSlide), !settingsCmponent.foolScreen), _classNames6)),
    src: maxImgCount(),
    onClick: function onClick() {
      setFullScreenDiv();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 43,
      columnNumber: 13
    }
  }));
};

_s(SliderTwoAndMore, "6/w0l6NwUmyZWCWa4Gja1W33OGg=");

_c = SliderTwoAndMore;
/* harmony default export */ __webpack_exports__["default"] = (SliderTwoAndMore);

var _c;

$RefreshReg$(_c, "SliderTwoAndMore");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluRmlsZFNsYWlkZXIvVmlld1NsaWRlcnMvU2xpZGVyVHdvQW5kTW9yZS5qcyJdLCJuYW1lcyI6WyJTbGlkZXJUd29BbmRNb3JlIiwiaW1hZ2UiLCJjdXJyZW50Q2xpY2siLCJzZXRDdXJyZW50Q2xpY2siLCJzZXR0aW5nc0NtcG9uZW50IiwiaGVuZGxlclByZXZDbGljayIsImhlbmRsZXJOZXh0Q2xpY2siLCJzZXRGb29sU2NyZWVuIiwic2V0RnVsbFNjcmVlbkRpdiIsIm9wZW5GdWxsU2NyZWVuIiwibWF4SW1nQ291bnQiLCJ1c2VDYWxsYmFjayIsImxlbmd0aCIsImltZyIsIlJlYWN0IiwidXNlRWZmZWN0IiwiaGFuZGxlRXNjIiwiZXZlbnQiLCJrZXlDb2RlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc05hbWVzIiwic19Gb29sU2NyZWVuIiwiRm9vbFNjcmVlbl9zbGlkZXJUd29BbmRNb3JlX193cmFwcGVyIiwiZm9vbFNjcmVlbiIsInMiLCJzbGlkZXJUd29BbmRNb3JlX193cmFwcGVyIiwiRm9vbFNjcmVlbl9zbGlkZXJUd29BbmRNb3JlIiwic2xpZGVyVHdvQW5kTW9yZSIsIkZvb2xTY3JlZW5fc2xpZGVyVHdvQW5kTW9yZV9fc2xpZGVzIiwic2xpZGVyVHdvQW5kTW9yZV9fc2xpZGVzIiwiRm9vbFNjcmVlbl9pbWdTbGlkZSIsImltZ1NsaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQTRJO0FBQUE7O0FBQUE7O0FBQUEsTUFBMUlDLEtBQTBJLFFBQTFJQSxLQUEwSTtBQUFBLE1BQXBJQyxZQUFvSSxRQUFwSUEsWUFBb0k7QUFBQSxNQUF2SEMsZUFBdUgsUUFBdkhBLGVBQXVIO0FB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Z0JBQWdCLENBQUNxQixVQUE5SixpQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFSCxpREFBVSx1SUFDZEMscUVBQVksQ0FBQ1MsbUJBREMsR0FDdUI1QixnQkFBZ0IsQ0FBQ3FCLFVBQWpCLElBQStCaEIsY0FEdEQscUhBRWRpQixrRUFBQyxDQUFDTyxRQUZZLEdBRUMsQ0FBQzdCLGdCQUFnQixDQUFDcUIsVUFGbkIsaUJBQTFCO0FBR00sT0FBRyxFQUFFZixXQUFXLEVBSHRCO0FBRzBCLFdBQU8sRUFBRSxtQkFBSTtBQUFDRixzQkFBZ0I7QUFBRyxLQUgzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQURKLEVBWUksTUFBQyw4REFBRDtBQUFZLG9CQUFnQixFQUFFSixnQkFBOUI7QUFBZ0QsbUJBQWUsRUFBRUQsZUFBakU7QUFBa0Ysb0JBQWdCLEVBQUVFLGdCQUFwRztBQUFzSCxvQkFBZ0IsRUFBRUMsZ0JBQXhJO0FBQTBKLGNBQVUsRUFBRUwsS0FBSyxDQUFDQyxZQUFELENBQTNLO0FBQTJMLFNBQUssRUFBRUQsS0FBbE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLENBREo7QUFnQkgsQ0F2Q0Q7O0dBQU1ELGdCOztLQUFBQSxnQjtBQXlDU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjIyZmM4ZTc3ZTg1N2I4OTM3YTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NsYWlkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL25hdmlnYXRpb24vTmF2aWdhdGlvbic7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgc19Gb29sU2NyZWVuIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9mb29sU2NyZWVuLm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgU2xpZGVyVHdvQW5kTW9yZSA9ICh7aW1hZ2UsY3VycmVudENsaWNrLHNldEN1cnJlbnRDbGljaywgc2V0dGluZ3NDbXBvbmVudCxoZW5kbGVyUHJldkNsaWNrLGhlbmRsZXJOZXh0Q2xpY2ssc2V0Rm9vbFNjcmVlbixzZXRGdWxsU2NyZWVuRGl2LG9wZW5GdWxsU2NyZWVufSkgPT4ge1xyXG4gICAgbGV0ICBtYXhJbWdDb3VudCA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIGlmKGN1cnJlbnRDbGljayA9PT0gaW1hZ2UubGVuZ3RoLTEpe1xyXG4gICAgICAgICAgICByZXR1cm4gaW1hZ2VbMF0uaW1nXHJcbiAgICAgICAgfSAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbWFnZVtjdXJyZW50Q2xpY2srMV0uaW1nXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9LFtjdXJyZW50Q2xpY2tdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZUVzYyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICAgIHNldEZvb2xTY3JlZW4oZmFsc2UpXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG4gICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUVzYyk7XHJcbiAgICAgXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUVzYyk7XHJcbiAgICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5Gb29sU2NyZWVuX3NsaWRlclR3b0FuZE1vcmVfX3dyYXBwZXJ9YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbiAmJiBvcGVuRnVsbFNjcmVlbixbYCR7cy5zbGlkZXJUd29BbmRNb3JlX193cmFwcGVyfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5Gb29sU2NyZWVuX3NsaWRlclR3b0FuZE1vcmV9YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbiAmJiBvcGVuRnVsbFNjcmVlbixbYCR7cy5zbGlkZXJUd29BbmRNb3JlfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uRm9vbFNjcmVlbl9zbGlkZXJUd29BbmRNb3JlX19zbGlkZXN9YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbiAmJiBvcGVuRnVsbFNjcmVlbixbYCR7cy5zbGlkZXJUd29BbmRNb3JlX19zbGlkZXN9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLkZvb2xTY3JlZW5faW1nU2xpZGV9YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbiAmJiBvcGVuRnVsbFNjcmVlbixbYCR7cy5pbWdTbGlkZX1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfSBzcmM9e2ltYWdlW2N1cnJlbnRDbGlja10uaW1nfSBvbkNsaWNrPXsoKT0+e3NldEZ1bGxTY3JlZW5EaXYoKX19Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uRm9vbFNjcmVlbl9zbGlkZXJUd29BbmRNb3JlX19zbGlkZXN9YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbiAmJiBvcGVuRnVsbFNjcmVlbixbYCR7cy5zbGlkZXJUd29BbmRNb3JlX19zbGlkZXN9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Ake3NfRm9vbFNjcmVlbi5Gb29sU2NyZWVuX2ltZ1NsaWRlfWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4gJiYgb3BlbkZ1bGxTY3JlZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7cy5pbWdTbGlkZX1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gc3JjPXttYXhJbWdDb3VudCgpfSBvbkNsaWNrPXsoKT0+e3NldEZ1bGxTY3JlZW5EaXYoKX19Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gc2V0dGluZ3NDbXBvbmVudD17c2V0dGluZ3NDbXBvbmVudH0gc2V0Q3VycmVudENsaWNrPXtzZXRDdXJyZW50Q2xpY2t9IGhlbmRsZXJQcmV2Q2xpY2s9e2hlbmRsZXJQcmV2Q2xpY2t9IGhlbmRsZXJOZXh0Q2xpY2s9e2hlbmRsZXJOZXh0Q2xpY2t9IGN1cnJlbnRJbWc9e2ltYWdlW2N1cnJlbnRDbGlja119IGltYWdlPXtpbWFnZX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJUd29BbmRNb3JlIl0sInNvdXJjZVJvb3QiOiIifQ==