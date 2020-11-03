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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluRmlsZFNsYWlkZXIvVmlld1NsaWRlcnMvU2xpZGVyVGhyZWVJbWFnZS5qcyJdLCJuYW1lcyI6WyJTbGlkZXJUaHJlZUltYWdlIiwiaW1hZ2UiLCJjdXJyZW50Q2xpY2siLCJzZXRDdXJyZW50Q2xpY2siLCJzZXR0aW5nc0NtcG9uZW50IiwiaGVuZGxlclByZXZDbGljayIsImhlbmRsZXJOZXh0Q2xpY2siLCJzZXRGb29sU2NyZWVuIiwic2V0RnVsbFNjcmVlbkRpdiIsIkltYWdlUHJldiIsInVzZUNhbGxiYWNrIiwibGVuZ3RoIiwiaW1nIiwiSW1hZ2VOZXh0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJoYW5kbGVFc2MiLCJldmVudCIsImtleUNvZGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZXMiLCJzX0Zvb2xTY3JlZW4iLCJGb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfd3JhcHBlciIsImZvb2xTY3JlZW4iLCJzIiwiU2xpZGVyVGhyZWVJbWFnZV93cmFwcGVyIiwiRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlciIsIlNsaWRlclRocmVlSW1hZ2Vfc2xpZGVyIiwiRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlc19wcmV2IiwiU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfcHJldiIsIkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZSIsIlNsaWRlclRocmVlSW1hZ2Vfc2xpZGUiLCJGb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfc2xpZGVzX21pZGRsZSIsIlNsaWRlclRocmVlSW1hZ2Vfc2xpZGVzX21pZGRsZSIsIkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbmV4dCIsIlNsaWRlclRocmVlSW1hZ2Vfc2xpZGVzX25leHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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RSxxSEFBeUZDLGtFQUFDLENBQUNPLHNCQUEzRixHQUFzSCxDQUFDN0IsZ0JBQWdCLENBQUNxQixVQUF4SSxpQkFBMUI7QUFBZ0wsT0FBRyxFQUFFWixTQUFTLEVBQTlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVBKLENBREosRUFZSSxNQUFDLDhEQUFEO0FBQVksb0JBQWdCLEVBQUVULGdCQUE5QjtBQUFnRCxtQkFBZSxFQUFFRCxlQUFqRTtBQUFrRixvQkFBZ0IsRUFBRUUsZ0JBQXBHO0FBQXNILG9CQUFnQixFQUFFQyxnQkFBeEk7QUFBMEosY0FBVSxFQUFFTCxLQUFLLENBQUNDLFlBQUQsQ0FBM0s7QUFBMkwsU0FBSyxFQUFFRCxLQUFsTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosQ0FESSxDQUFSO0FBZ0JILENBaEREOztHQUFNRCxnQjs7S0FBQUEsZ0I7QUFrRFNBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFkY2UxYzI5MjVlNmZlYTQ3NmJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zbGFpZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9uYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xyXG5pbXBvcnQgc19Gb29sU2NyZWVuIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9mb29sU2NyZWVuLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmNvbnN0IFNsaWRlclRocmVlSW1hZ2UgPSAoeyBpbWFnZSwgY3VycmVudENsaWNrLHNldEN1cnJlbnRDbGljaywgc2V0dGluZ3NDbXBvbmVudCxoZW5kbGVyUHJldkNsaWNrLGhlbmRsZXJOZXh0Q2xpY2ssc2V0Rm9vbFNjcmVlbixzZXRGdWxsU2NyZWVuRGl2IH0pID0+IHtcclxuXHJcbiAgICBsZXQgIEltYWdlUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+e1xyXG4gICAgICAgIGlmKGN1cnJlbnRDbGljayA9PT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBpbWFnZVtpbWFnZS5sZW5ndGgtMV0uaW1nXHJcbiAgICAgICAgfSAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbWFnZVtjdXJyZW50Q2xpY2stMV0uaW1nXHJcbiAgICAgICAgfVxyXG4gICAgfSxbY3VycmVudENsaWNrXSk7XHJcblxyXG4gICAgbGV0ICBJbWFnZU5leHQgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBpZihjdXJyZW50Q2xpY2sgPT09IGltYWdlLmxlbmd0aC0xKXtcclxuICAgICAgICAgICAgcmV0dXJuIGltYWdlWzBdLmltZ1xyXG4gICAgICAgIH0gIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaW1hZ2VbY3VycmVudENsaWNrKzFdLmltZ1xyXG4gICAgICAgIH1cclxuICAgIH0sW2N1cnJlbnRDbGlja10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlRXNjID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgICAgICAgICAgc2V0Rm9vbFNjcmVlbihmYWxzZSlcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICB9O1xyXG4gICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUVzYyk7XHJcbiAgICAgXHJcbiAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVFc2MpO1xyXG4gICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5Gb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfd3JhcHBlcn1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuLFtgJHtzLlNsaWRlclRocmVlSW1hZ2Vfd3JhcHBlcn1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlcn1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuLFtgJHtzLlNsaWRlclRocmVlSW1hZ2Vfc2xpZGVyfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlc19wcmV2fWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4sW2Ake3MuU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfcHJldn1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5Gb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfc2xpZGV9YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbixbYCR7cy5TbGlkZXJUaHJlZUltYWdlX3NsaWRlfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9IHNyYz17SW1hZ2VQcmV2KCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbWlkZGxlfWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4sW2Ake3MuU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbWlkZGxlfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlfWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4sW2Ake3MuU2xpZGVyVGhyZWVJbWFnZV9zbGlkZX1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfSBzcmM9e2ltYWdlW2N1cnJlbnRDbGlja10uaW1nfSBvbkNsaWNrPXsoKT0+e3NldEZ1bGxTY3JlZW5EaXYoKX19Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlc19uZXh0fWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4sW2Ake3MuU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbmV4dH1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZX1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuLFtgJHtzLlNsaWRlclRocmVlSW1hZ2Vfc2xpZGV9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0gc3JjPXtJbWFnZU5leHQoKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gc2V0dGluZ3NDbXBvbmVudD17c2V0dGluZ3NDbXBvbmVudH0gc2V0Q3VycmVudENsaWNrPXtzZXRDdXJyZW50Q2xpY2t9IGhlbmRsZXJQcmV2Q2xpY2s9e2hlbmRsZXJQcmV2Q2xpY2t9IGhlbmRsZXJOZXh0Q2xpY2s9e2hlbmRsZXJOZXh0Q2xpY2t9IGN1cnJlbnRJbWc9e2ltYWdlW2N1cnJlbnRDbGlja119IGltYWdlPXtpbWFnZX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJUaHJlZUltYWdlXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==