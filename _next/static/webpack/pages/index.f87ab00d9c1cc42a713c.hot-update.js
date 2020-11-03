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
  var handle = Object(react_full_screen__WEBPACK_IMPORTED_MODULE_7__["useFullScreenHandle"])();

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
    setOpenFullScreen(!openFullScreen); // if(openFullScreen === true){
    //      handle.enter
    //      console.log(hendle);
    // } else {
    //     handle.exit
    // }
  };

  return __jsx(_FullScreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handle: handle,
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
      setFullScreenDiv(), handle.enter;
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

_s(SliderOneImage, "Djy3t+/tUTdWya9L6QrV3oHlCOc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluRmlsZFNsYWlkZXIvVmlld1NsaWRlcnMvU2xpZGVyT25lSW1hZ2UuanMiXSwibmFtZXMiOlsiU2xpZGVyT25lSW1hZ2UiLCJpbWFnZSIsImN1cnJlbnRDbGljayIsInNldEN1cnJlbnRDbGljayIsInNldHRpbmdzQ21wb25lbnQiLCJoZW5kbGVyUHJldkNsaWNrIiwiaGVuZGxlck5leHRDbGljayIsInNldEZvb2xTY3JlZW4iLCJoYW5kbGUiLCJ1c2VGdWxsU2NyZWVuSGFuZGxlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW5GdWxsU2NyZWVuIiwic2V0T3BlbkZ1bGxTY3JlZW4iLCJ1c2VFZmZlY3QiLCJoYW5kbGVFc2MiLCJldmVudCIsImtleUNvZGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEZ1bGxTY3JlZW5EaXYiLCJjbGFzc05hbWVzIiwic19Gb29sU2NyZWVuIiwid3JhcHBlcl9Gb29sU2NyZWVuIiwiZm9vbFNjcmVlbiIsInMiLCJ3cmFwcGVyIiwic2xpZGVyX0Zvb2xTY3JlZW4iLCJzbGlkZXIiLCJzbGlkZXNfRm9vbFNjcmVlbiIsInNsaWRlcyIsInNsaWRlX0Zvb2xTY3JlZW4iLCJzbGlkZSIsImltZyIsImVudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBK0c7QUFBQTs7QUFBQTs7QUFBQSxNQUE1R0MsS0FBNEcsUUFBNUdBLEtBQTRHO0FBQUEsTUFBckdDLFlBQXFHLFFBQXJHQSxZQUFxRztBQUFBLE1BQXhGQyxlQUF3RixRQUF4RkEsZUFBd0Y7QUFBQSxNQUF2RUMsZ0JBQXVFLFFBQXZFQSxnQkFBdUU7QUFBQSxNQUF0REMsZ0JBQXNELFFBQXREQSxn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QUFBO0FBQUE7QUFBQSxJQU5KLENBREksQ0FBUjtBQVVILENBekNEOztHQUFNRCxjO1VBRWFTLHFFOzs7S0FGYlQsYztBQTJDU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjg3YWIwMGQ5YzFjYzQyYTcxM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zbGFpZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgc19Gb29sU2NyZWVuIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9mb29sU2NyZWVuLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9uYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgRnVsbFNjcmVlbiwgdXNlRnVsbFNjcmVlbkhhbmRsZSB9IGZyb20gXCJyZWFjdC1mdWxsLXNjcmVlblwiO1xyXG5pbXBvcnQgRnVsbFNjcmVlbkRpdiBmcm9tICcuL0Z1bGxTY3JlZW4nO1xyXG5cclxuY29uc3QgU2xpZGVyT25lSW1hZ2UgPSAoeyBpbWFnZSwgY3VycmVudENsaWNrLHNldEN1cnJlbnRDbGljaywgc2V0dGluZ3NDbXBvbmVudCxoZW5kbGVyUHJldkNsaWNrLGhlbmRsZXJOZXh0Q2xpY2ssc2V0Rm9vbFNjcmVlbiB9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZSA9IHVzZUZ1bGxTY3JlZW5IYW5kbGUoKTtcclxuICAgIGxldCBbb3BlbkZ1bGxTY3JlZW4sc2V0T3BlbkZ1bGxTY3JlZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVFc2MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRGb29sU2NyZWVuKGZhbHNlKVxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIH07XHJcbiAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRXNjKTtcclxuICAgICBcclxuICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUVzYyk7XHJcbiAgICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgbGV0IHNldEZ1bGxTY3JlZW5EaXYgPSAoKSA9PntcclxuICAgICAgICBzZXRPcGVuRnVsbFNjcmVlbighb3BlbkZ1bGxTY3JlZW4pXHJcbiAgICAgICAgLy8gaWYob3BlbkZ1bGxTY3JlZW4gPT09IHRydWUpe1xyXG4gICAgICAgIC8vICAgICAgaGFuZGxlLmVudGVyXHJcbiAgICAgICAgLy8gICAgICBjb25zb2xlLmxvZyhoZW5kbGUpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGhhbmRsZS5leGl0XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoPEZ1bGxTY3JlZW5EaXYgaGFuZGxlPXtoYW5kbGV9IG9wZW5EaXY9e29wZW5GdWxsU2NyZWVufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi53cmFwcGVyX0Zvb2xTY3JlZW59YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbixbYCR7cy53cmFwcGVyfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5zbGlkZXJfRm9vbFNjcmVlbn1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuLFtgJHtzLnNsaWRlcn1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLnNsaWRlc19Gb29sU2NyZWVufWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4sW2Ake3Muc2xpZGVzfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLnNsaWRlX0Zvb2xTY3JlZW59YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbixbYCR7cy5zbGlkZX1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfSBzcmM9e2ltYWdlW2N1cnJlbnRDbGlja10uaW1nfSBvbkNsaWNrPXsoKT0+e3NldEZ1bGxTY3JlZW5EaXYoKSxoYW5kbGUuZW50ZXJ9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiBzZXR0aW5nc0NtcG9uZW50PXtzZXR0aW5nc0NtcG9uZW50fSBzZXRDdXJyZW50Q2xpY2s9e3NldEN1cnJlbnRDbGlja30gaGVuZGxlclByZXZDbGljaz17aGVuZGxlclByZXZDbGlja30gaGVuZGxlck5leHRDbGljaz17aGVuZGxlck5leHRDbGlja30gY3VycmVudEltZz17aW1hZ2VbY3VycmVudENsaWNrXX0gaW1hZ2U9e2ltYWdlfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0Z1bGxTY3JlZW5EaXY+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJPbmVJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=