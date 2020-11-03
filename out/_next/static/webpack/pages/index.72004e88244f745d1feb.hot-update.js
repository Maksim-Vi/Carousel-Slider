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
    } else {
      screen.exit;
    }
  };

  return __jsx(_FullScreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
    screen: screen,
    openDiv: openFullScreen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper_FoolScreen), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper), !settingsCmponent.foolScreen), _classNames)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slider_FoolScreen), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slider), !settingsCmponent.foolScreen), _classNames2)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slides_FoolScreen), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slides), !settingsCmponent.foolScreen), _classNames3)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slide_FoolScreen), settingsCmponent.foolScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide), !settingsCmponent.foolScreen), _classNames4)),
    src: image[currentClick].img,
    onClick: function onClick() {
      return screen.enter;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluRmlsZFNsYWlkZXIvVmlld1NsaWRlcnMvU2xpZGVyT25lSW1hZ2UuanMiXSwibmFtZXMiOlsiU2xpZGVyT25lSW1hZ2UiLCJpbWFnZSIsImN1cnJlbnRDbGljayIsInNldEN1cnJlbnRDbGljayIsInNldHRpbmdzQ21wb25lbnQiLCJoZW5kbGVyUHJldkNsaWNrIiwiaGVuZGxlck5leHRDbGljayIsInNldEZvb2xTY3JlZW4iLCJzY3JlZW4iLCJ1c2VGdWxsU2NyZWVuSGFuZGxlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW5GdWxsU2NyZWVuIiwic2V0T3BlbkZ1bGxTY3JlZW4iLCJ1c2VFZmZlY3QiLCJoYW5kbGVFc2MiLCJldmVudCIsImtleUNvZGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEZ1bGxTY3JlZW5EaXYiLCJlbnRlciIsImV4aXQiLCJjbGFzc05hbWVzIiwic19Gb29sU2NyZWVuIiwid3JhcHBlcl9Gb29sU2NyZWVuIiwiZm9vbFNjcmVlbiIsInMiLCJ3cmFwcGVyIiwic2xpZGVyX0Zvb2xTY3JlZW4iLCJzbGlkZXIiLCJzbGlkZXNfRm9vbFNjcmVlbiIsInNsaWRlcyIsInNsaWRlX0Zvb2xTY3JlZW4iLCJzbGlkZSIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQStHO0FBQUE7O0FBQUE7O0FBQUEsTUFBNUdDLEtBQTRHLFFBQTVHQSxLQUE0RztBQUFBLE1BQXJHQyxZQUFxRyxRQUFyR0EsWUFBcUc7QUFBQSxNQUF4RkMsZUFBd0YsUUFBeEZBLGVBQXdGO0FBQUEsTUFBdkVDLGdCQUF1RSxRQUF2RUEsZ0JBQXVFO0FBQUEsTUFBdERDLGdCQUFzRCxR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QUQsQ0FBM0s7QUFBMkwsU0FBSyxFQUFFRCxLQUFsTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FESSxDQUFSO0FBVUgsQ0F4Q0Q7O0dBQU1ELGM7VUFFY1MscUU7OztLQUZkVCxjO0FBMENTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MjAwNGU4ODI0NGY3NDVkMWZlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NsYWlkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBzX0Zvb2xTY3JlZW4gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2Zvb2xTY3JlZW4ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL25hdmlnYXRpb24vTmF2aWdhdGlvbic7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBGdWxsU2NyZWVuLCB1c2VGdWxsU2NyZWVuSGFuZGxlIH0gZnJvbSBcInJlYWN0LWZ1bGwtc2NyZWVuXCI7XHJcbmltcG9ydCBGdWxsU2NyZWVuRGl2IGZyb20gJy4vRnVsbFNjcmVlbic7XHJcblxyXG5jb25zdCBTbGlkZXJPbmVJbWFnZSA9ICh7IGltYWdlLCBjdXJyZW50Q2xpY2ssc2V0Q3VycmVudENsaWNrLCBzZXR0aW5nc0NtcG9uZW50LGhlbmRsZXJQcmV2Q2xpY2ssaGVuZGxlck5leHRDbGljayxzZXRGb29sU2NyZWVuIH0pID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qgc2NyZWVuICA9IHVzZUZ1bGxTY3JlZW5IYW5kbGUoKTtcclxuICAgIGxldCBbb3BlbkZ1bGxTY3JlZW4sc2V0T3BlbkZ1bGxTY3JlZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVFc2MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRGb29sU2NyZWVuKGZhbHNlKVxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIH07XHJcbiAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRXNjKTtcclxuICAgICBcclxuICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUVzYyk7XHJcbiAgICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgbGV0IHNldEZ1bGxTY3JlZW5EaXYgPSAoKSA9PntcclxuICAgICAgICBzZXRPcGVuRnVsbFNjcmVlbighb3BlbkZ1bGxTY3JlZW4pXHJcbiAgICAgICAgaWYob3BlbkZ1bGxTY3JlZW4gPT09IHRydWUpe1xyXG4gICAgICAgICAgICBzY3JlZW4uZW50ZXJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzY3JlZW4uZXhpdFxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKDxGdWxsU2NyZWVuRGl2IHNjcmVlbj17c2NyZWVufSBvcGVuRGl2PXtvcGVuRnVsbFNjcmVlbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4ud3JhcHBlcl9Gb29sU2NyZWVufWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4sW2Ake3Mud3JhcHBlcn1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uc2xpZGVyX0Zvb2xTY3JlZW59YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbixbYCR7cy5zbGlkZXJ9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5zbGlkZXNfRm9vbFNjcmVlbn1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuLFtgJHtzLnNsaWRlc31gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5zbGlkZV9Gb29sU2NyZWVufWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4sW2Ake3Muc2xpZGV9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0gc3JjPXtpbWFnZVtjdXJyZW50Q2xpY2tdLmltZ30gb25DbGljaz17KCk9PnNjcmVlbi5lbnRlcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gc2V0dGluZ3NDbXBvbmVudD17c2V0dGluZ3NDbXBvbmVudH0gc2V0Q3VycmVudENsaWNrPXtzZXRDdXJyZW50Q2xpY2t9IGhlbmRsZXJQcmV2Q2xpY2s9e2hlbmRsZXJQcmV2Q2xpY2t9IGhlbmRsZXJOZXh0Q2xpY2s9e2hlbmRsZXJOZXh0Q2xpY2t9IGN1cnJlbnRJbWc9e2ltYWdlW2N1cnJlbnRDbGlja119IGltYWdlPXtpbWFnZX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9GdWxsU2NyZWVuRGl2PilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyT25lSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9