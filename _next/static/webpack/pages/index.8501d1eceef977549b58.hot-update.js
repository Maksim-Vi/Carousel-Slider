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
      setFullScreenDiv = _ref.setFullScreenDiv,
      openFullScreen = _ref.openFullScreen;
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
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper_FoolScreen), settingsCmponent.foolScreen || openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper), !settingsCmponent.foolScreen), _classNames)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slider_FoolScreen), settingsCmponent.foolScreen || openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slider), !settingsCmponent.foolScreen), _classNames2)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slides_FoolScreen), settingsCmponent.foolScreen || openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slides), !settingsCmponent.foolScreen), _classNames3)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(_styles_foolScreen_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide_FoolScreen), settingsCmponent.foolScreen || openFullScreen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(_styles_slaider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slide), !settingsCmponent.foolScreen), _classNames4)),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluRmlsZFNsYWlkZXIvVmlld1NsaWRlcnMvU2xpZGVyT25lSW1hZ2UuanMiXSwibmFtZXMiOlsiU2xpZGVyT25lSW1hZ2UiLCJpbWFnZSIsImN1cnJlbnRDbGljayIsInNldEN1cnJlbnRDbGljayIsInNldHRpbmdzQ21wb25lbnQiLCJoZW5kbGVyUHJldkNsaWNrIiwiaGVuZGxlck5leHRDbGljayIsInNldEZvb2xTY3JlZW4iLCJzZXRGdWxsU2NyZWVuRGl2Iiwib3BlbkZ1bGxTY3JlZW4iLCJ1c2VFZmZlY3QiLCJoYW5kbGVFc2MiLCJldmVudCIsImtleUNvZGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZXMiLCJzX0Zvb2xTY3JlZW4iLCJ3cmFwcGVyX0Zvb2xTY3JlZW4iLCJmb29sU2NyZWVuIiwicyIsIndyYXBwZXIiLCJzbGlkZXJfRm9vbFNjcmVlbiIsInNsaWRlciIsInNsaWRlc19Gb29sU2NyZWVuIiwic2xpZGVzIiwic2xpZGVfRm9vbFNjcmVlbiIsInNsaWRlIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQStJO0FBQUE7O0FBQUE7O0FBQUEsTUFBNUlDLEtBQTRJLFFBQTVJQSxLQUE0STtBQUFBLE1BQXJJQyxZQUFxSSxRQUFySUEsWUFBcUk7QUFBQSxNQUF4SEMsZUFBd0gsUUFBeEhBLGVBQXdIO0FBQUEsTUFBdkdDLGdCQUF1RyxRQUF2R0EsZ0JBQXVHO0FBQUEsTUFBdEZDLGdCQUFzRixRQUF0RkEsZ0JBQXNGO0FBQUEsTUFBckVDLGdCQUFxRSxRQUFyRUEsZ0JBQXFFO0FBQUEsTUFBcERDLGFBQW9ELFFBQXBEQSxhQUFvRDtBQUFBLE1BQXRDQyxnQkFBc0MsUUFBdENBLGdCQUFzQztBQUFBLE1BQXJCQyxjQUFxQixRQUFyQkEsY0FBcUI7QUFFbEtDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUN6QixVQUFJQSxLQUFLLENBQUNDLE9BQU4sS0FBa0IsRUFBdEIsRUFBMEI7QUFDdEJOLHFCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0o7QUFFRixLQUxGOztBQU1DTyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DSixTQUFuQztBQUVBLFdBQU8sWUFBTTtBQUNYRyxZQUFNLENBQUNFLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDTCxTQUF0QztBQUNELEtBRkQ7QUFHSixHQVpRLEVBWU4sRUFaTSxDQUFUO0FBZ0JBLFNBQVEsTUFBQyxtREFBRDtBQUFlLFdBQU8sRUFBRUYsY0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNKO0FBQUssYUFBUyxFQUFFUSxpREFBVSxxSUFBTUMscUVBQVksQ0FBQ0Msa0JBQW5CLEdBQTBDZixnQkFBZ0IsQ0FBQ2dCLFVBQWpCLElBQStCWCxjQUF6RSxvSEFBNEZZLGtFQUFDLENBQUNDLE9BQTlGLEdBQTBHLENBQUNsQixnQkFBZ0IsQ0FBQ2dCLFVBQTVILGdCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVILGlEQUFVLHVJQUFNQyxxRUFBWSxDQUFDSyxpQkFBbkIsR0FBeUNuQixnQkFBZ0IsQ0FBQ2dCLFVBQWpCLElBQStCWCxjQUF4RSxxSEFBMkZZLGtFQUFDLENBQUNHLE1BQTdGLEdBQXdHLENBQUNwQixnQkFBZ0IsQ0FBQ2dCLFVBQTFILGlCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVILGlEQUFVLHVJQUFNQyxxRUFBWSxDQUFDTyxpQkFBbkIsR0FBeUNyQixnQkFBZ0IsQ0FBQ2dCLFVBQWpCLElBQStCWCxjQUF4RSxxSEFBMkZZLGtFQUFDLENBQUNLLE1BQTdGLEdBQXdHLENBQUN0QixnQkFBZ0IsQ0FBQ2dCLFVBQTFILGlCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVILGlEQUFVLHVJQUFNQyxxRUFBWSxDQUFDUyxnQkFBbkIsR0FBd0N2QixnQkFBZ0IsQ0FBQ2dCLFVBQWpCLElBQStCWCxjQUF2RSxxSEFBMEZZLGtFQUFDLENBQUNPLEtBQTVGLEdBQXNHLENBQUN4QixnQkFBZ0IsQ0FBQ2dCLFVBQXhILGlCQUExQjtBQUFnSyxPQUFHLEVBQUVuQixLQUFLLENBQUNDLFlBQUQsQ0FBTCxDQUFvQjJCLEdBQXpMO0FBQThMLFdBQU8sRUFBRTtBQUFBLGFBQUlyQixnQkFBZ0IsRUFBcEI7QUFBQSxLQUF2TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQURKLEVBTUksTUFBQyw4REFBRDtBQUFZLG9CQUFnQixFQUFFSixnQkFBOUI7QUFBZ0QsbUJBQWUsRUFBRUQsZUFBakU7QUFBa0Ysb0JBQWdCLEVBQUVFLGdCQUFwRztBQUFzSCxvQkFBZ0IsRUFBRUMsZ0JBQXhJO0FBQTBKLGNBQVUsRUFBRUwsS0FBSyxDQUFDQyxZQUFELENBQTNLO0FBQTJMLFNBQUssRUFBRUQsS0FBbE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBREksQ0FBUjtBQVVILENBNUJEOztHQUFNRCxjOztLQUFBQSxjO0FBOEJTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NTAxZDFlY2VlZjk3NzU0OWI1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3NsYWlkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBzX0Zvb2xTY3JlZW4gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2Zvb2xTY3JlZW4ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL25hdmlnYXRpb24vTmF2aWdhdGlvbic7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgRnVsbFNjcmVlbkRpdiBmcm9tICcuL0Z1bGxTY3JlZW4nO1xyXG5cclxuY29uc3QgU2xpZGVyT25lSW1hZ2UgPSAoeyBpbWFnZSwgY3VycmVudENsaWNrLHNldEN1cnJlbnRDbGljaywgc2V0dGluZ3NDbXBvbmVudCxoZW5kbGVyUHJldkNsaWNrLGhlbmRsZXJOZXh0Q2xpY2ssc2V0Rm9vbFNjcmVlbixzZXRGdWxsU2NyZWVuRGl2LG9wZW5GdWxsU2NyZWVuIH0pID0+IHtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVFc2MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRGb29sU2NyZWVuKGZhbHNlKVxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIH07XHJcbiAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRXNjKTtcclxuICAgICBcclxuICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUVzYyk7XHJcbiAgICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKDxGdWxsU2NyZWVuRGl2IG9wZW5EaXY9e29wZW5GdWxsU2NyZWVufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi53cmFwcGVyX0Zvb2xTY3JlZW59YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbiB8fCBvcGVuRnVsbFNjcmVlbixbYCR7cy53cmFwcGVyfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7W2Ake3NfRm9vbFNjcmVlbi5zbGlkZXJfRm9vbFNjcmVlbn1gXTogc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVuIHx8IG9wZW5GdWxsU2NyZWVuLFtgJHtzLnNsaWRlcn1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLnNsaWRlc19Gb29sU2NyZWVufWBdOiBzZXR0aW5nc0NtcG9uZW50LmZvb2xTY3JlZW4gfHwgb3BlbkZ1bGxTY3JlZW4sW2Ake3Muc2xpZGVzfWBdOiAhc2V0dGluZ3NDbXBvbmVudC5mb29sU2NyZWVufSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtbYCR7c19Gb29sU2NyZWVuLnNsaWRlX0Zvb2xTY3JlZW59YF06IHNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbiB8fCBvcGVuRnVsbFNjcmVlbixbYCR7cy5zbGlkZX1gXTogIXNldHRpbmdzQ21wb25lbnQuZm9vbFNjcmVlbn0pfSBzcmM9e2ltYWdlW2N1cnJlbnRDbGlja10uaW1nfSBvbkNsaWNrPXsoKT0+c2V0RnVsbFNjcmVlbkRpdigpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiBzZXR0aW5nc0NtcG9uZW50PXtzZXR0aW5nc0NtcG9uZW50fSBzZXRDdXJyZW50Q2xpY2s9e3NldEN1cnJlbnRDbGlja30gaGVuZGxlclByZXZDbGljaz17aGVuZGxlclByZXZDbGlja30gaGVuZGxlck5leHRDbGljaz17aGVuZGxlck5leHRDbGlja30gY3VycmVudEltZz17aW1hZ2VbY3VycmVudENsaWNrXX0gaW1hZ2U9e2ltYWdlfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0Z1bGxTY3JlZW5EaXY+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJPbmVJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=