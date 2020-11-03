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
/* harmony import */ var _FullScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FullScreen */ "./components/MainFildSlaider/ViewSliders/FullScreen.js");


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
      setFullScreenDiv = _ref.setFullScreenDiv,
      openFullScreen = _ref.openFullScreen;
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
  return __jsx(_FullScreen__WEBPACK_IMPORTED_MODULE_6__["default"], {
    openDiv: openFullScreen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_wrapper), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_wrapper), !settingsCmponent.foolScreen), _classNames)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_slider), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_slider), !settingsCmponent.foolScreen), _classNames2)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_slides_prev), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_slides_prev), !settingsCmponent.foolScreen), _classNames3)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_slide), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_slide), !settingsCmponent.foolScreen), _classNames4)),
    src: ImagePrev(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames5 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames5, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_slides_middle), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames5, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_slides_middle), !settingsCmponent.foolScreen), _classNames5))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames6 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames6, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_slide), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames6, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_slide), !settingsCmponent.foolScreen), _classNames6)),
    src: image[currentClick].img,
    onClick: function onClick() {
      setFullScreenDiv();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "".concat(classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames7 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames7, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_slides_next), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames7, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_slides_next), !settingsCmponent.foolScreen), _classNames7))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames8 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames8, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FoolScreen_SliderThreeImage_slide), settingsCmponent.foolScreen && openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames8, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SliderThreeImage_slide), !settingsCmponent.foolScreen), _classNames8)),
    src: ImageNext(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluRmlsZFNsYWlkZXIvVmlld1NsaWRlcnMvU2xpZGVyVGhyZWVJbWFnZS5qcyJdLCJuYW1lcyI6WyJTbGlkZXJUaHJlZUltYWdlIiwiaW1hZ2UiLCJjdXJyZW50Q2xpY2siLCJzZXRDdXJyZW50Q2xpY2siLCJzZXR0aW5nc0NtcG9uZW50IiwiaGVuZGxlclByZXZDbGljayIsImhlbmRsZXJOZXh0Q2xpY2siLCJzZXRGb29sU2NyZWVuIiwic2V0RnVsbFNjcmVlbkRpdiIsIm9wZW5GdWxsU2NyZWVuIiwiSW1hZ2VQcmV2IiwidXNlQ2FsbGJhY2siLCJsZW5ndGgiLCJpbWciLCJJbWFnZU5leHQiLCJSZWFjdCIsInVzZUVmZmVjdCIsImhhbmRsZUVzYyIsImV2ZW50Iiwia2V5Q29kZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lcyIsInNfRm9vbFNjcmVlbiIsIkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV93cmFwcGVyIiwiZm9vbFNjcmVlbiIsInMiLCJTbGlkZXJUaHJlZUltYWdlX3dyYXBwZXIiLCJGb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfc2xpZGVyIiwiU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXIiLCJGb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfc2xpZGVzX3ByZXYiLCJTbGlkZXJUaHJlZUltYWdlX3NsaWRlc19wcmV2IiwiRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlIiwiU2xpZGVyVGhyZWVJbWFnZV9zbGlkZSIsIkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbWlkZGxlIiwiU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbWlkZGxlIiwiRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlc19uZXh0IiwiU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbmV4dCJdLCJtYXBwaW5n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QStEakMsZ0JBQWdCLENBQUNzQixVQUFqQixJQUErQmpCLGNBQTlGLHFIQUFpSGtCLGtFQUFDLENBQUNXLDRCQUFuSCxHQUFvSixDQUFDbEMsZ0JBQWdCLENBQUNzQixVQUF0SyxpQkFBZixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUgsaURBQVUsdUlBQU1DLHFFQUFZLENBQUNTLGlDQUFuQixHQUF5RDdCLGdCQUFnQixDQUFDc0IsVUFBakIsSUFBK0JqQixjQUF4RixxSEFBMkdrQixrRUFBQyxDQUFDTyxzQkFBN0csR0FBd0ksQ0FBQzlCLGdCQUFnQixDQUFDc0IsVUFBMUosaUJBQTFCO0FBQWtNLE9BQUcsRUFBRVosU0FBUyxFQUFoTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FQSixDQURKLEVBWUksTUFBQyw4REFBRDtBQUFZLG9CQUFnQixFQUFFVixnQkFBOUI7QUFBZ0QsbUJBQWUsRUFBRUQsZUFBakU7QUFBa0Ysb0JBQWdCLEVBQUVFLGdCQUFwRztBQUFzSCxvQkFBZ0IsRUFBRUMsZ0JBQXhJO0FBQTBKLGNBQVUsRUFBRUwsS0FBSyxDQUFDQyxZQUFELENBQTNLO0FBQTJMLFNBQUssRUFBRUQsS0FBbE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLENBREksQ0FBUjtBQWdCSCxDQWhERDs7R0FBTUQsZ0I7O0tBQUFBLGdCO0FBa0RTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNDZhZTc2ZWQ5ZGZiNWMxYTM2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2xhaWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vbmF2aWdhdGlvbi9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IHNfRm9vbFNjcmVlbiBmcm9tICcuLi8uLi8uLi9zdHlsZXMvZm9vbFNjcmVlbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBGdWxsU2NyZWVuRGl2IGZyb20gJy4vRnVsbFNjcmVlbic7XHJcblxyXG5jb25zdCBTbGlkZXJUaHJlZUltYWdlID0gKHsgaW1hZ2UsIGN1cnJlbnRDbGljayxzZXRDdXJyZW50Q2xpY2ssIHNldHRpbmdzQ21wb25lbnQsaGVuZGxlclByZXZDbGljayxoZW5kbGVyTmV4dENsaWNrLHNldEZvb2xTY3JlZW4sc2V0RnVsbFNjcmVlbkRpdixvcGVuRnVsbFNjcmVlbiB9KSA9PiB7XHJcblxyXG4gICAgbGV0ICBJbWFnZVByZXYgPSB1c2VDYWxsYmFjaygoKSA9PntcclxuICAgICAgICBpZihjdXJyZW50Q2xpY2sgPT09IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gaW1hZ2VbaW1hZ2UubGVuZ3RoLTFdLmltZ1xyXG4gICAgICAgIH0gIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaW1hZ2VbY3VycmVudENsaWNrLTFdLmltZ1xyXG4gICAgICAgIH1cclxuICAgIH0sW2N1cnJlbnRDbGlja10pO1xyXG5cclxuICAgIGxldCAgSW1hZ2VOZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT57XHJcbiAgICAgICAgaWYoY3VycmVudENsaWNrID09PSBpbWFnZS5sZW5ndGgtMSl7XHJcbiAgICAgICAgICAgIHJldHVybiBpbWFnZVswXS5pbWdcclxuICAgICAgICB9ICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGltYWdlW2N1cnJlbnRDbGljaysxXS5pbWdcclxuICAgICAgICB9XHJcbiAgICB9LFtjdXJyZW50Q2xpY2tdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZUVzYyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICAgIHNldEZvb2xTY3JlZW4oZmFsc2UpXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfTtcclxuICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVFc2MpO1xyXG4gICAgIFxyXG4gICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRXNjKTtcclxuICAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKDxGdWxsU2NyZWVuRGl2IG9wZW5EaXY9e29wZW5GdWxsU2NyZWVufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5Gb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfd3JhcHBlcn1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuICYmIG9wZW5GdWxsU2NyZWVuLFtgJHtzLlNsaWRlclRocmVlSW1hZ2Vfd3JhcHBlcn1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlcn1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuICYmIG9wZW5GdWxsU2NyZWVuLFtgJHtzLlNsaWRlclRocmVlSW1hZ2Vfc2xpZGVyfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlc19wcmV2fWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4gJiYgb3BlbkZ1bGxTY3JlZW4sW2Ake3MuU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfcHJldn1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5Gb29sU2NyZWVuX1NsaWRlclRocmVlSW1hZ2Vfc2xpZGV9YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbiAmJiBvcGVuRnVsbFNjcmVlbixbYCR7cy5TbGlkZXJUaHJlZUltYWdlX3NsaWRlfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9IHNyYz17SW1hZ2VQcmV2KCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbWlkZGxlfWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4gJiYgb3BlbkZ1bGxTY3JlZW4sW2Ake3MuU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbWlkZGxlfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlfWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4gJiYgb3BlbkZ1bGxTY3JlZW4sW2Ake3MuU2xpZGVyVGhyZWVJbWFnZV9zbGlkZX1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfSBzcmM9e2ltYWdlW2N1cnJlbnRDbGlja10uaW1nfSBvbkNsaWNrPXsoKT0+e3NldEZ1bGxTY3JlZW5EaXYoKX19Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZXMoe1tgJHtzX0Zvb2xTY3JlZW4uRm9vbFNjcmVlbl9TbGlkZXJUaHJlZUltYWdlX3NsaWRlc19uZXh0fWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4gJiYgb3BlbkZ1bGxTY3JlZW4sW2Ake3MuU2xpZGVyVGhyZWVJbWFnZV9zbGlkZXNfbmV4dH1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLkZvb2xTY3JlZW5fU2xpZGVyVGhyZWVJbWFnZV9zbGlkZX1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuICYmIG9wZW5GdWxsU2NyZWVuLFtgJHtzLlNsaWRlclRocmVlSW1hZ2Vfc2xpZGV9YF06ICFzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW59KX0gc3JjPXtJbWFnZU5leHQoKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gc2V0dGluZ3NDbXBvbmVudD17c2V0dGluZ3NDbXBvbmVudH0gc2V0Q3VycmVudENsaWNrPXtzZXRDdXJyZW50Q2xpY2t9IGhlbmRsZXJQcmV2Q2xpY2s9e2hlbmRsZXJQcmV2Q2xpY2t9IGhlbmRsZXJOZXh0Q2xpY2s9e2hlbmRsZXJOZXh0Q2xpY2t9IGN1cnJlbnRJbWc9e2ltYWdlW2N1cnJlbnRDbGlja119IGltYWdlPXtpbWFnZX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9GdWxsU2NyZWVuRGl2PilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyVGhyZWVJbWFnZVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=