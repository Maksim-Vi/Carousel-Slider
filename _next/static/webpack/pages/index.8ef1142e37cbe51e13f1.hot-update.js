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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/slaider.module.scss */ "./styles/slaider.module.scss");
/* harmony import */ var _styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/foolScreen.module.scss */ "./styles/foolScreen.module.scss");
/* harmony import */ var _styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/Navigation */ "./components/MainFildSlaider/navigation/Navigation.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_full_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-full-screen */ "./node_modules/react-full-screen/dist/index.modern.js");
/* harmony import */ var _FullScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FullScreen */ "./components/MainFildSlaider/ViewSliders/FullScreen.js");



var _this = undefined,
    _jsxFileName = "D:\\Projects\\NEXT_JS\\Slaid_App\\slaid_app\\components\\MainFildSlaider\\ViewSliders\\SliderOneImage.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var SliderOneImage = function SliderOneImage(_ref) {
  _s();

  var _classNames, _classNames2, _classNames3, _classNames4;

  var image = _ref.image,
      currentClick = _ref.currentClick,
      setCurrentClick = _ref.setCurrentClick,
      settingsCmponent = _ref.settingsCmponent,
      hendlerPrevClick = _ref.hendlerPrevClick,
      hendlerNextClick = _ref.hendlerNextClick,
      setFoolScreen = _ref.setFoolScreen;
  var screen = Object(react_full_screen__WEBPACK_IMPORTED_MODULE_7__["useFullScreenHandle"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      openFullScreen = _React$useState2[0],
      setOpenFullScreen = _React$useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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

  var setFullScreenDiv = function setFullScreenDiv() {
    setOpenFullScreen(!openFullScreen);

    if (openFullScreen === true) {
      screen.enter;
      console.log(hendle);
    } else {
      screen.exit;
    }
  };

  return __jsx(_FullScreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handle: screen,
    openDiv: openFullScreen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper_FoolScreen), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper), !settingsCmponent.foolScreen), _classNames)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slider_FoolScreen), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slider), !settingsCmponent.foolScreen), _classNames2)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slides_FoolScreen), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slides), !settingsCmponent.foolScreen), _classNames3)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slide_FoolScreen), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide), !settingsCmponent.foolScreen), _classNames4)),
    src: image[currentClick].img,
    onClick: function onClick() {
      setFullScreenDiv();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }))), __jsx(_navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    settingsCmponent: settingsCmponent,
    setCurrentClick: setCurrentClick,
    hendlerPrevClick: hendlerPrevClick,
    hendlerNextClick: hendlerNextClick,
    currentImg: image[currentClick],
    image: image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  })));
};

_s(SliderOneImage, "YNQJHdbCAMoOK3abvXLeX02BbSY=", false, function () {
  return [react_full_screen__WEBPACK_IMPORTED_MODULE_7__["useFullScreenHandle"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluRmlsZFNsYWlkZXIvVmlld1NsaWRlcnMvU2xpZGVyT25lSW1hZ2UuanMiXSwibmFtZXMiOlsiU2xpZGVyT25lSW1hZ2UiLCJpbWFnZSIsImN1cnJlbnRDbGljayIsInNldEN1cnJlbnRDbGljayIsInNldHRpbmdzQ21wb25lbnQiLCJoZW5kbGVyUHJldkNsaWNrIiwiaGVuZGxlck5leHRDbGljayIsInNldEZvb2xTY3JlZW4iLCJzY3JlZW4iLCJ1c2VGdWxsU2NyZWVuSGFuZGxlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW5GdWxsU2NyZWVuIiwic2V0T3BlbkZ1bGxTY3JlZW4iLCJ1c2VFZmZlY3QiLCJoYW5kbGVFc2MiLCJldmVudCIsImtleUNvZGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEZ1bGxTY3JlZW5EaXYiLCJlbnRlciIsImNvbnNvbGUiLCJsb2ciLCJoZW5kbGUiLCJleGl0IiwiY2xhc3NOYW1lcyIsInNfRm9vbFNjcmVlbiIsIndyYXBwZXJfRm9vbFNjcmVlbiIsImZvb2xTY3JlZW4iLCJzIiwid3JhcHBlciIsInNsaWRlcl9Gb29sU2NyZWVuIiwic2xpZGVyIiwic2xpZGVzX0Zvb2xTY3JlZW4iLCJzbGlkZXMiLCJzbGlkZV9Gb29sU2NyZWVuIiwic2xpZGUiLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUErRztBQUFBOztBQUFBOztBQUFBLE1BQTVHQyxLQUE0RyxRQUE1R0EsS0FBNEc7QUFBQSxNQUFyR0MsWUFBcUcsUUFBckdBLFlBQXFHO0FBQUEsTUFBeEZDLGVBQXdGLFFBQXhGQSxlQUF3RjtBQUFBLE1BQXZFQyxnQkFBdUUsUUFBdkVBLGdC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c0gsb0JBQWdCLEVBQUVDLGdCQUF4STtBQUEwSixjQUFVLEVBQUVMLEtBQUssQ0FBQ0MsWUFBRCxDQUEzSztBQUEyTCxTQUFLLEVBQUVELEtBQWxNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQURJLENBQVI7QUFVSCxDQXpDRDs7R0FBTUQsYztVQUVjUyxxRTs7O0tBRmRULGM7QUEyQ1NBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhlZjExNDJlMzdjYmU1MWUxM2YxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2xhaWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHNfRm9vbFNjcmVlbiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvZm9vbFNjcmVlbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vbmF2aWdhdGlvbi9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IEZ1bGxTY3JlZW4sIHVzZUZ1bGxTY3JlZW5IYW5kbGUgfSBmcm9tIFwicmVhY3QtZnVsbC1zY3JlZW5cIjtcclxuaW1wb3J0IEZ1bGxTY3JlZW5EaXYgZnJvbSAnLi9GdWxsU2NyZWVuJztcclxuXHJcbmNvbnN0IFNsaWRlck9uZUltYWdlID0gKHsgaW1hZ2UsIGN1cnJlbnRDbGljayxzZXRDdXJyZW50Q2xpY2ssIHNldHRpbmdzQ21wb25lbnQsaGVuZGxlclByZXZDbGljayxoZW5kbGVyTmV4dENsaWNrLHNldEZvb2xTY3JlZW4gfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBzY3JlZW4gID0gdXNlRnVsbFNjcmVlbkhhbmRsZSgpO1xyXG4gICAgbGV0IFtvcGVuRnVsbFNjcmVlbixzZXRPcGVuRnVsbFNjcmVlbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZUVzYyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICAgIHNldEZvb2xTY3JlZW4oZmFsc2UpXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfTtcclxuICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVFc2MpO1xyXG4gICAgIFxyXG4gICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRXNjKTtcclxuICAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBsZXQgc2V0RnVsbFNjcmVlbkRpdiA9ICgpID0+e1xyXG4gICAgICAgIHNldE9wZW5GdWxsU2NyZWVuKCFvcGVuRnVsbFNjcmVlbilcclxuICAgICAgICBpZihvcGVuRnVsbFNjcmVlbiA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHNjcmVlbi5lbnRlclxyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coaGVuZGxlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzY3JlZW4uZXhpdFxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKDxGdWxsU2NyZWVuRGl2IGhhbmRsZT17c2NyZWVufSBvcGVuRGl2PXtvcGVuRnVsbFNjcmVlbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4ud3JhcHBlcl9Gb29sU2NyZWVufWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4sW2Ake3Mud3JhcHBlcn1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uc2xpZGVyX0Zvb2xTY3JlZW59YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbixbYCR7cy5zbGlkZXJ9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5zbGlkZXNfRm9vbFNjcmVlbn1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuLFtgJHtzLnNsaWRlc31gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5zbGlkZV9Gb29sU2NyZWVufWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4sW2Ake3Muc2xpZGV9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0gc3JjPXtpbWFnZVtjdXJyZW50Q2xpY2tdLmltZ30gb25DbGljaz17KCk9PntzZXRGdWxsU2NyZWVuRGl2KCl9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiBzZXR0aW5nc0NtcG9uZW50PXtzZXR0aW5nc0NtcG9uZW50fSBzZXRDdXJyZW50Q2xpY2s9e3NldEN1cnJlbnRDbGlja30gaGVuZGxlclByZXZDbGljaz17aGVuZGxlclByZXZDbGlja30gaGVuZGxlck5leHRDbGljaz17aGVuZGxlck5leHRDbGlja30gY3VycmVudEltZz17aW1hZ2VbY3VycmVudENsaWNrXX0gaW1hZ2U9e2ltYWdlfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0Z1bGxTY3JlZW5EaXY+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJPbmVJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=