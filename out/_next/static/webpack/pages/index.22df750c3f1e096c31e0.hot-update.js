webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MainFildSlaider/ViewSliders/SliderOneImage.js":
/*!******************************************************************!*\
  !*** ./components/MainFildSlaider/ViewSliders/SliderOneImage.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/slaider.module.scss */ "./styles/slaider.module.scss");
/* harmony import */ var _styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/foolScreen.module.scss */ "./styles/foolScreen.module.scss");
/* harmony import */ var _styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation/Navigation */ "./components/MainFildSlaider/navigation/Navigation.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FullScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FullScreen */ "./components/MainFildSlaider/ViewSliders/FullScreen.js");


var _this = undefined,
    _jsxFileName = "D:\\Projects\\NEXT_JS\\Slaid_App\\slaid_app\\components\\MainFildSlaider\\ViewSliders\\SliderOneImage.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var SliderOneImage = function SliderOneImage(_ref) {
  _s();

  var _classNames, _classNames2, _classNames3, _classNames4;

  var image = _ref.image,
      currentClick = _ref.currentClick,
      setCurrentClick = _ref.setCurrentClick,
      settingsCmponent = _ref.settingsCmponent,
      hendlerPrevClick = _ref.hendlerPrevClick,
      hendlerNextClick = _ref.hendlerNextClick,
      setFoolScreen = _ref.setFoolScreen,
      setFullScreenDiv = _ref.setFullScreenDiv;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
  return __jsx(_FullScreen__WEBPACK_IMPORTED_MODULE_6__["default"], {
    openDiv: openFullScreen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper_FoolScreen), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper), !settingsCmponent.foolScreen), _classNames)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slider_FoolScreen), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slider), !settingsCmponent.foolScreen), _classNames2)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slides_FoolScreen), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slides), !settingsCmponent.foolScreen), _classNames3)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide_FoolScreen), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slide), !settingsCmponent.foolScreen), _classNames4)),
    src: image[currentClick].img,
    onClick: function onClick() {
      return setFullScreenDiv();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }))), __jsx(_navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    settingsCmponent: settingsCmponent,
    setCurrentClick: setCurrentClick,
    hendlerPrevClick: hendlerPrevClick,
    hendlerNextClick: hendlerNextClick,
    currentImg: image[currentClick],
    image: image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })));
};

_s(SliderOneImage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = SliderOneImage;
/* harmony default export */ __webpack_exports__["default"] = (SliderOneImage);

var _c;

$RefreshReg$(_c, "SliderOneImage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluRmlsZFNsYWlkZXIvVmlld1NsaWRlcnMvU2xpZGVyT25lSW1hZ2UuanMiXSwibmFtZXMiOlsiU2xpZGVyT25lSW1hZ2UiLCJpbWFnZSIsImN1cnJlbnRDbGljayIsInNldEN1cnJlbnRDbGljayIsInNldHRpbmdzQ21wb25lbnQiLCJoZW5kbGVyUHJldkNsaWNrIiwiaGVuZGxlck5leHRDbGljayIsInNldEZvb2xTY3JlZW4iLCJzZXRGdWxsU2NyZWVuRGl2IiwidXNlRWZmZWN0IiwiaGFuZGxlRXNjIiwiZXZlbnQiLCJrZXlDb2RlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvcGVuRnVsbFNjcmVlbiIsImNsYXNzTmFtZXMiLCJzX0Zvb2xTY3JlZW4iLCJ3cmFwcGVyX0Zvb2xTY3JlZW4iLCJmb29sU2NyZWVuIiwicyIsIndyYXBwZXIiLCJzbGlkZXJfRm9vbFNjcmVlbiIsInNsaWRlciIsInNsaWRlc19Gb29sU2NyZWVuIiwic2xpZGVzIiwic2xpZGVfRm9vbFNjcmVlbiIsInNsaWRlIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWdJO0FBQUE7O0FBQUE7O0FBQUEsTUFBN0hDLEtBQTZILFFBQTdIQSxLQUE2SDtBQUFBLE1BQXRIQyxZQUFzSCxRQUF0SEEsWUFBc0g7QUFBQSxNQUF6R0MsZUFBeUcsUUFBekdBLGVBQXlHO0FBQUEsTUFBeEZDLGdCQUF3RixRQUF4RkEsZ0JBQXdGO0FBQUEsTUFBdkVDLGdCQUF1RSxRQUF2RUEsZ0JBQXVFO0FBQUEsTUFBdERDLGdCQUFzRCxRQUF0REEsZ0JBQXNEO0FBQUEsTUFBckNDLGFBQXFDLFFBQXJDQSxhQUFxQztBQUFBLE1BQXZCQyxnQkFBdUIsUUFBdkJBLGdCQUF1QjtBQUVuSkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCLFVBQUlBLEtBQUssQ0FBQ0MsT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUN0QkwscUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDSjtBQUVGLEtBTEY7O0FBTUNNLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNKLFNBQW5DO0FBRUEsV0FBTyxZQUFNO0FBQ1hHLFlBQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0NMLFNBQXRDO0FBQ0QsS0FGRDtBQUdKLEdBWlEsRUFZTixFQVpNLENBQVQ7QUFnQkEsU0FBUSxNQUFDLG1EQUFEO0FBQWUsV0FBTyxFQUFFTSxjQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0o7QUFBSyxhQUFTLEVBQUVDLGlEQUFVLHFJQUFNQyxxRUFBWSxDQUFDQyxrQkFBbkIsR0FBMENmLGdCQUFnQixDQUFDZ0IsVUFBakIsSUFBK0JKLGNBQXpFLG9IQUE0Rkssa0VBQUMsQ0FBQ0MsT0FBOUYsR0FBMEcsQ0FBQ2xCLGdCQUFnQixDQUFDZ0IsVUFBNUgsZ0JBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUgsaURBQVUsdUlBQU1DLHFFQUFZLENBQUNLLGlCQUFuQixHQUF5Q25CLGdCQUFnQixDQUFDZ0IsVUFBakIsSUFBK0JKLGNBQXhFLHFIQUEyRkssa0VBQUMsQ0FBQ0csTUFBN0YsR0FBd0csQ0FBQ3BCLGdCQUFnQixDQUFDZ0IsVUFBMUgsaUJBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUgsaURBQVUsdUlBQU1DLHFFQUFZLENBQUNPLGlCQUFuQixHQUF5Q3JCLGdCQUFnQixDQUFDZ0IsVUFBakIsSUFBK0JKLGNBQXhFLHFIQUEyRkssa0VBQUMsQ0FBQ0ssTUFBN0YsR0FBd0csQ0FBQ3RCLGdCQUFnQixDQUFDZ0IsVUFBMUgsaUJBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUgsaURBQVUsdUlBQU1DLHFFQUFZLENBQUNTLGdCQUFuQixHQUF3Q3ZCLGdCQUFnQixDQUFDZ0IsVUFBakIsSUFBK0JKLGNBQXZFLHFIQUEwRkssa0VBQUMsQ0FBQ08sS0FBNUYsR0FBc0csQ0FBQ3hCLGdCQUFnQixDQUFDZ0IsVUFBeEgsaUJBQTFCO0FBQWdLLE9BQUcsRUFBRW5CLEtBQUssQ0FBQ0MsWUFBRCxDQUFMLENBQW9CMkIsR0FBekw7QUFBOEwsV0FBTyxFQUFFO0FBQUEsYUFBSXJCLGdCQUFnQixFQUFwQjtBQUFBLEtBQXZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREosRUFNSSxNQUFDLDhEQUFEO0FBQVksb0JBQWdCLEVBQUVKLGdCQUE5QjtBQUFnRCxtQkFBZSxFQUFFRCxlQUFqRTtBQUFrRixvQkFBZ0IsRUFBRUUsZ0JBQXBHO0FBQXNILG9CQUFnQixFQUFFQyxnQkFBeEk7QUFBMEosY0FBVSxFQUFFTCxLQUFLLENBQUNDLFlBQUQsQ0FBM0s7QUFBMkwsU0FBSyxFQUFFRCxLQUFsTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FESSxDQUFSO0FBVUgsQ0E1QkQ7O0dBQU1ELGM7O0tBQUFBLGM7QUE4QlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIyZGY3NTBjM2YxZTA5NmMzMWUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2xhaWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHNfRm9vbFNjcmVlbiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvZm9vbFNjcmVlbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vbmF2aWdhdGlvbi9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBGdWxsU2NyZWVuRGl2IGZyb20gJy4vRnVsbFNjcmVlbic7XHJcblxyXG5jb25zdCBTbGlkZXJPbmVJbWFnZSA9ICh7IGltYWdlLCBjdXJyZW50Q2xpY2ssc2V0Q3VycmVudENsaWNrLCBzZXR0aW5nc0NtcG9uZW50LGhlbmRsZXJQcmV2Q2xpY2ssaGVuZGxlck5leHRDbGljayxzZXRGb29sU2NyZWVuLHNldEZ1bGxTY3JlZW5EaXYgfSkgPT4ge1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZUVzYyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICAgIHNldEZvb2xTY3JlZW4oZmFsc2UpXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfTtcclxuICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVFc2MpO1xyXG4gICAgIFxyXG4gICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRXNjKTtcclxuICAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoPEZ1bGxTY3JlZW5EaXYgb3BlbkRpdj17b3BlbkZ1bGxTY3JlZW59PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLndyYXBwZXJfRm9vbFNjcmVlbn1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuICYmIG9wZW5GdWxsU2NyZWVuLFtgJHtzLndyYXBwZXJ9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLnNsaWRlcl9Gb29sU2NyZWVufWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4gJiYgb3BlbkZ1bGxTY3JlZW4sW2Ake3Muc2xpZGVyfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uc2xpZGVzX0Zvb2xTY3JlZW59YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbiAmJiBvcGVuRnVsbFNjcmVlbixbYCR7cy5zbGlkZXN9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uc2xpZGVfRm9vbFNjcmVlbn1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuICYmIG9wZW5GdWxsU2NyZWVuLFtgJHtzLnNsaWRlfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9IHNyYz17aW1hZ2VbY3VycmVudENsaWNrXS5pbWd9IG9uQ2xpY2s9eygpPT5zZXRGdWxsU2NyZWVuRGl2KCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIHNldHRpbmdzQ21wb25lbnQ9e3NldHRpbmdzQ21wb25lbnR9IHNldEN1cnJlbnRDbGljaz17c2V0Q3VycmVudENsaWNrfSBoZW5kbGVyUHJldkNsaWNrPXtoZW5kbGVyUHJldkNsaWNrfSBoZW5kbGVyTmV4dENsaWNrPXtoZW5kbGVyTmV4dENsaWNrfSBjdXJyZW50SW1nPXtpbWFnZVtjdXJyZW50Q2xpY2tdfSBpbWFnZT17aW1hZ2V9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvRnVsbFNjcmVlbkRpdj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlck9uZUltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==