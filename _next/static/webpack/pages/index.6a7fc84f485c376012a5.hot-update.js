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
  return __jsx("div", {
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
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluRmlsZFNsYWlkZXIvVmlld1NsaWRlcnMvU2xpZGVyVGhyZWVJbWFnZS5qcyJdLCJuYW1lcyI6WyJTbGlkZXJUaHJlZUltYWdlIiwiaW1hZ2UiLCJjdXJyZW50Q2xpY2siLCJzZXRDdXJyZW50Q2xpY2siLCJzZXR0aW5nc0NtcG9uZW50IiwiaGVuZGxlclByZXZDbGljayIsImhlbmRsZXJOZXh0Q2xpY2siLCJzZXRGb29sU2NyZWVuIiwic2V0RnVsbFNjcmVlbkRpdiIsIkltYWdlUHJldiIsInVzZUNhbGxiYWNrIiwibGVuZ3RoIiwiaW1nIiwiSW1hZ2VOZXh0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJoYW5kbGVFc2MiLCJldmVudCIsImtleUNvZGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZXMiLCJzX0Zvb2xTY3JlZW4iLCJGb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfd3JhcHBlciIsImZvb2xTY3JlZW4iLCJzIiwiU2xpZGVyVGhyZWVJbWFnZV93cmFwcGVyIiwiRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlciIsIlNsaWRlclRocmVlSW1hZ2Vfc2xpZGVyIiwiRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlc19wcmV2IiwiU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfcHJldiIsIkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZSIsIlNsaWRlclRocmVlSW1hZ2Vfc2xpZGUiLCJGb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfc2xpZGVzX21pZGRsZSIsIlNsaWRlclRocmVlSW1hZ2Vfc2xpZGVzX21pZGRsZSIsIkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbmV4dCIsIlNsaWRlclRocmVlSW1hZ2Vfc2xpZGVzX25leHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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eUZDLGtFQUFDLENBQUNPLHNCQUEzRixHQUFzSCxDQUFDN0IsZ0JBQWdCLENBQUNxQixVQUF4SSxpQkFBMUI7QUFBZ0wsT0FBRyxFQUFFWixTQUFTLEVBQTlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVBKLENBREosRUFZSSxNQUFDLDhEQUFEO0FBQVksb0JBQWdCLEVBQUVULGdCQUE5QjtBQUFnRCxtQkFBZSxFQUFFRCxlQUFqRTtBQUFrRixvQkFBZ0IsRUFBRUUsZ0JBQXBHO0FBQXNILG9CQUFnQixFQUFFQyxnQkFBeEk7QUFBMEosY0FBVSxFQUFFTCxLQUFLLENBQUNDLFlBQUQsQ0FBM0s7QUFBMkwsU0FBSyxFQUFFRCxLQUFsTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosQ0FESjtBQWdCSCxDQWhERDs7R0FBTUQsZ0I7O0tBQUFBLGdCO0FBa0RTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YTdmYzg0ZjQ4NWMzNzYwMTJhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2xhaWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vbmF2aWdhdGlvbi9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IHNfRm9vbFNjcmVlbiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvZm9vbFNjcmVlbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5jb25zdCBTbGlkZXJUaHJlZUltYWdlID0gKHsgaW1hZ2UsIGN1cnJlbnRDbGljayxzZXRDdXJyZW50Q2xpY2ssIHNldHRpbmdzQ21wb25lbnQsaGVuZGxlclByZXZDbGljayxoZW5kbGVyTmV4dENsaWNrLHNldEZvb2xTY3JlZW4sc2V0RnVsbFNjcmVlbkRpdiB9KSA9PiB7XHJcblxyXG4gICAgbGV0ICBJbWFnZVByZXYgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBpZihjdXJyZW50Q2xpY2sgPT09IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gaW1hZ2VbaW1hZ2UubGVuZ3RoLTFdLmltZ1xyXG4gICAgICAgIH0gIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaW1hZ2VbY3VycmVudENsaWNrLTFdLmltZ1xyXG4gICAgICAgIH1cclxuICAgIH0sW2N1cnJlbnRDbGlja10pO1xyXG5cclxuICAgIGxldCAgSW1hZ2VOZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgaWYoY3VycmVudENsaWNrID09PSBpbWFnZS5sZW5ndGgtMSl7XHJcbiAgICAgICAgICAgIHJldHVybiBpbWFnZVswXS5pbWdcclxuICAgICAgICB9ICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGltYWdlW2N1cnJlbnRDbGljaysxXS5pbWdcclxuICAgICAgICB9XHJcbiAgICB9LFtjdXJyZW50Q2xpY2tdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZUVzYyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICAgIHNldEZvb2xTY3JlZW4oZmFsc2UpXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfTtcclxuICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVFc2MpO1xyXG4gICAgIFxyXG4gICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRXNjKTtcclxuICAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV93cmFwcGVyfWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4sW2Ake3MuU2xpZGVyVGhyZWVJbWFnZV93cmFwcGVyfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5Gb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfc2xpZGVyfWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4sW2Ake3MuU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXJ9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5Gb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfc2xpZGVzX3ByZXZ9YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbixbYCR7cy5TbGlkZXJUaHJlZUltYWdlX3NsaWRlc19wcmV2fWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZX1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuLFtgJHtzLlNsaWRlclRocmVlSW1hZ2Vfc2xpZGV9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0gc3JjPXtJbWFnZVByZXYoKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlc19taWRkbGV9YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbixbYCR7cy5TbGlkZXJUaHJlZUltYWdlX3NsaWRlc19taWRkbGV9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5Gb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfc2xpZGV9YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbixbYCR7cy5TbGlkZXJUaHJlZUltYWdlX3NsaWRlfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9IHNyYz17aW1hZ2VbY3VycmVudENsaWNrXS5pbWd9IG9uQ2xpY2s9eygpPT57c2V0RnVsbFNjcmVlbkRpdigpfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5Gb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfc2xpZGVzX25leHR9YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbixbYCR7cy5TbGlkZXJUaHJlZUltYWdlX3NsaWRlc19uZXh0fWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlfWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4sW2Ake3MuU2xpZGVyVGhyZWVJbWFnZV9zbGlkZX1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfSBzcmM9e0ltYWdlTmV4dCgpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiBzZXR0aW5nc0NtcG9uZW50PXtzZXR0aW5nc0NtcG9uZW50fSBzZXRDdXJyZW50Q2xpY2s9e3NldEN1cnJlbnRDbGlja30gaGVuZGxlclByZXZDbGljaz17aGVuZGxlclByZXZDbGlja30gaGVuZGxlck5leHRDbGljaz17aGVuZGxlck5leHRDbGlja30gY3VycmVudEltZz17aW1hZ2VbY3VycmVudENsaWNrXX0gaW1hZ2U9e2ltYWdlfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlclRocmVlSW1hZ2VcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9