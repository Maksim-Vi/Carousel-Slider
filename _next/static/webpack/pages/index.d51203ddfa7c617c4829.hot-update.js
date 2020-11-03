webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MainFildSlaider/Slaider.js":
/*!***********************************************!*\
  !*** ./components/MainFildSlaider/Slaider.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Settings_Timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Settings/Timer */ "./components/Settings/Timer.js");
/* harmony import */ var _ViewSliders_SliderTwoAndMore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewSliders/SliderTwoAndMore */ "./components/MainFildSlaider/ViewSliders/SliderTwoAndMore.js");
/* harmony import */ var _ViewSliders_SliderOneImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewSliders/SliderOneImage */ "./components/MainFildSlaider/ViewSliders/SliderOneImage.js");
/* harmony import */ var _ViewSliders_SliderThreeImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ViewSliders/SliderThreeImage */ "./components/MainFildSlaider/ViewSliders/SliderThreeImage.js");
var _this = undefined,
    _jsxFileName = "D:\\Projects\\NEXT_JS\\Slaid_App\\slaid_app\\components\\MainFildSlaider\\Slaider.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Slaider = function Slaider(props) {
  _s();

  var image = [{
    "id": 1,
    "img": "http://habrastorage.org/files/3f2/628/bd5/3f2628bd58c8452db516195cb0c9bfc9.jpg"
  }, {
    "id": 2,
    "img": "http://habrastorage.org/files/3e1/95d/c7f/3e195dc7f5a64469807f49a14f97ba0e.jpg"
  }, {
    "id": 3,
    "img": "http://habrastorage.org/files/663/6b1/d4f/6636b1d4f8e643d29eab8c192fc1cea3.jpg"
  }, {
    "id": 4,
    "img": "https://avtomaniya.com/pubsource/photo/9379/100-zhigul-tyuningjpeg.jpg"
  }, {
    "id": 5,
    "img": "https://5koleso.ru/wp-content/cache/thumb/c9/b637edf794815c9_1200x580.jpg"
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      currentClick = _useState[0],
      setCurrentClick = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      openFullScreen = _useState2[0],
      setOpenFullScreen = _useState2[1];

  var hendlerPrevClick = function hendlerPrevClick() {
    var newPrev = currentClick; // from_beginning_to_end

    if (newPrev > 0 && props.settingsCmponent.value === 'from_beginning_to_end') {
      newPrev = currentClick - 1;
    } // cycle


    if (newPrev >= 0 && props.settingsCmponent.value === 'cycle') {
      if (newPrev === 0) {
        newPrev = image.length - 1;
      } else if (newPrev > 0) {
        newPrev = currentClick - 1;
      }
    }

    setCurrentClick(newPrev);
  };

  var hendlerNextClick = function hendlerNextClick() {
    var newNext = currentClick; // from_beginning_to_end

    if (newNext < image.length - 1 && props.settingsCmponent.value === 'from_beginning_to_end') {
      newNext = currentClick + 1;
    } // cycle


    if (newNext < image.length && props.settingsCmponent.value === 'cycle') {
      if (newNext === image.length - 1) {
        newNext = 0;
      } else {
        newNext = currentClick + 1;
      }
    }

    setCurrentClick(newNext);
  };

  var setFullScreenDiv = function setFullScreenDiv() {
    setOpenFullScreen(!openFullScreen);
  };

  var SelectSlider = function SelectSlider() {
    if (props.settingsCmponent.stateImage === 'oneImage') {
      return __jsx(_ViewSliders_SliderOneImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        image: image,
        currentClick: currentClick,
        setCurrentClick: setCurrentClick,
        settingsCmponent: props.settingsCmponent,
        hendlerPrevClick: hendlerPrevClick,
        hendlerNextClick: hendlerNextClick,
        setFoolScreen: props.setFoolScreen,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 20
        }
      });
    } else if (props.settingsCmponent.stateImage === 'threeImage_On_the_sides') {
      return __jsx(_ViewSliders_SliderThreeImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        image: image,
        currentClick: currentClick,
        setCurrentClick: setCurrentClick,
        settingsCmponent: props.settingsCmponent,
        hendlerPrevClick: hendlerPrevClick,
        hendlerNextClick: hendlerNextClick,
        setFoolScreen: props.setFoolScreen,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 20
        }
      });
    } else if (props.settingsCmponent.stateImage === 'twoImage') {
      return __jsx(_ViewSliders_SliderTwoAndMore__WEBPACK_IMPORTED_MODULE_2__["default"], {
        image: image,
        currentClick: currentClick,
        setCurrentClick: setCurrentClick,
        settingsCmponent: props.settingsCmponent,
        hendlerPrevClick: hendlerPrevClick,
        hendlerNextClick: hendlerNextClick,
        setFoolScreen: props.setFoolScreen,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 20
        }
      });
    }
  };

  return __jsx(_Settings_Timer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    settingsCmponent: props.settingsCmponent,
    hendlerNextClick: hendlerNextClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, SelectSlider());
};

_s(Slaider, "9rngseIiQldhBrTN7DFuJqrQAU8=");

_c = Slaider;
/* harmony default export */ __webpack_exports__["default"] = (Slaider);

var _c;

$RefreshReg$(_c, "Slaider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluRmlsZFNsYWlkZXIvU2xhaWRlci5qcyJdLCJuYW1lcyI6WyJTbGFpZGVyIiwicHJvcHMiLCJpbWFnZSIsInVzZVN0YXRlIiwiY3VycmVudENsaWNrIiwic2V0Q3VycmVudENsaWNrIiwib3BlbkZ1bGxTY3JlZW4iLCJzZXRPcGVuRnVsbFNjcmVlbiIsImhlbmRsZXJQcmV2Q2xpY2siLCJuZXdQcmV2Iiwic2V0dGluZ3NDbXBvbmVudCIsInZhbHVlIiwibGVuZ3RoIiwiaGVuZGxlck5leHRDbGljayIsIm5ld05leHQiLCJzZXRGdWxsU2NyZWVuRGl2IiwiU2VsZWN0U2xpZGVyIiwic3RhdGVJbWFnZSIsInNldEZvb2xTY3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFdkIsTUFBTUMsS0FBSyxHQUFHLENBQ1Y7QUFBRSxVQUFNLENBQVI7QUFBVyxXQUFPO0FBQWxCLEdBRFUsRUFFVjtBQUFFLFVBQU0sQ0FBUjtBQUFXLFdBQU87QUFBbEIsR0FGVSxFQUdWO0FBQUUsVUFBTSxDQUFSO0FBQVcsV0FBTztBQUFsQixHQUhVLEVBSVY7QUFBRSxVQUFNLENBQVI7QUFBVyxXQUFPO0FBQWxCLEdBSlUsRUFLVjtBQUFFLFVBQU0sQ0FBUjtBQUFXLFdBQU87QUFBbEIsR0FMVSxDQUFkOztBQUZ1QixrQkFVaUJDLHNEQUFRLENBQUMsQ0FBRCxDQVZ6QjtBQUFBLE1BVWhCQyxZQVZnQjtBQUFBLE1BVUZDLGVBVkU7O0FBQUEsbUJBV2tCRixzREFBUSxDQUFDLEtBQUQsQ0FYMUI7QUFBQSxNQVdsQkcsY0FYa0I7QUFBQSxNQVdIQyxpQkFYRzs7QUFhdkIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQUlD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LEVBQXNEO0FBQ3pELGFBQU8sTUFBQyxxRUFBRDtBQUFrQixhQUFLLEVBQUVmLEtBQXpCO0FBQWdDLG9CQUFZLEVBQUVFLFlBQTlDO0FBQTRELHVCQUFlLEVBQUVDLGVBQTdFO0FBQThGLHdCQUFnQixFQUFFSixLQUFLLENBQUNTLGdCQUF0SDtBQUF3SSx3QkFBZ0IsRUFBRUYsZ0JBQTFKO0FBQTRLLHdCQUFnQixFQUFFSyxnQkFBOUw7QUFBZ04scUJBQWEsRUFBRVosS0FBSyxDQUFDaUIsYUFBck87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQO0FBQ0g7QUFDSixHQVREOztBQVdKLFNBQ0ksTUFBQyx1REFBRDtBQUFPLG9CQUFnQixFQUFFakIsS0FBSyxDQUFDUyxnQkFBL0I7QUFBaUQsb0JBQWdCLEVBQUVHLGdCQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tHLFlBQVksRUFEakIsQ0FESjtBQUtDLENBeEVEOztHQUFNaEIsTzs7S0FBQUEsTztBQTBFU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDUxMjAzZGRmYTdjNjE3YzQ4MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRpbWVyIGZyb20gJy4uL1NldHRpbmdzL1RpbWVyJ1xyXG5pbXBvcnQgU2xpZGVyVHdvQW5kTW9yZSBmcm9tICcuL1ZpZXdTbGlkZXJzL1NsaWRlclR3b0FuZE1vcmUnXHJcbmltcG9ydCBTbGlkZXJPbmVJbWFnZSBmcm9tICcuL1ZpZXdTbGlkZXJzL1NsaWRlck9uZUltYWdlJ1xyXG5pbXBvcnQgU2xpZGVyVGhyZWVJbWFnZSBmcm9tICcuL1ZpZXdTbGlkZXJzL1NsaWRlclRocmVlSW1hZ2UnXHJcblxyXG5jb25zdCBTbGFpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBbXHJcbiAgICAgICAgeyBcImlkXCI6IDEsIFwiaW1nXCI6IFwiaHR0cDovL2hhYnJhc3RvcmFnZS5vcmcvZmlsZXMvM2YyLzYyOC9iZDUvM2YyNjI4YmQ1OGM4NDUyZGI1MTYxOTVjYjBjOWJmYzkuanBnXCIgfSxcclxuICAgICAgICB7IFwiaWRcIjogMiwgXCJpbWdcIjogXCJodHRwOi8vaGFicmFzdG9yYWdlLm9yZy9maWxlcy8zZTEvOTVkL2M3Zi8zZTE5NWRjN2Y1YTY0NDY5ODA3ZjQ5YTE0Zjk3YmEwZS5qcGdcIiB9LFxyXG4gICAgICAgIHsgXCJpZFwiOiAzLCBcImltZ1wiOiBcImh0dHA6Ly9oYWJyYXN0b3JhZ2Uub3JnL2ZpbGVzLzY2My82YjEvZDRmLzY2MzZiMWQ0ZjhlNjQzZDI5ZWFiOGMxOTJmYzFjZWEzLmpwZ1wiIH0sXHJcbiAgICAgICAgeyBcImlkXCI6IDQsIFwiaW1nXCI6IFwiaHR0cHM6Ly9hdnRvbWFuaXlhLmNvbS9wdWJzb3VyY2UvcGhvdG8vOTM3OS8xMDAtemhpZ3VsLXR5dW5pbmdqcGVnLmpwZ1wiIH0sXHJcbiAgICAgICAgeyBcImlkXCI6IDUsIFwiaW1nXCI6IFwiaHR0cHM6Ly81a29sZXNvLnJ1L3dwLWNvbnRlbnQvY2FjaGUvdGh1bWIvYzkvYjYzN2VkZjc5NDgxNWM5XzEyMDB4NTgwLmpwZ1wiIH0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRDbGljaywgc2V0Q3VycmVudENsaWNrXSA9IHVzZVN0YXRlKDApXHJcbiAgICBsZXQgW29wZW5GdWxsU2NyZWVuLHNldE9wZW5GdWxsU2NyZWVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhlbmRsZXJQcmV2Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1ByZXYgPSBjdXJyZW50Q2xpY2tcclxuICAgICAgICAvLyBmcm9tX2JlZ2lubmluZ190b19lbmRcclxuICAgICAgICBpZiAobmV3UHJldiA+IDAgJiYgcHJvcHMuc2V0dGluZ3NDbXBvbmVudC52YWx1ZSA9PT0gJ2Zyb21fYmVnaW5uaW5nX3RvX2VuZCcpIHtcclxuICAgICAgICAgICAgbmV3UHJldiA9IGN1cnJlbnRDbGljayAtIDFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGN5Y2xlXHJcbiAgICAgICAgaWYgKG5ld1ByZXYgPj0gMCAmJiBwcm9wcy5zZXR0aW5nc0NtcG9uZW50LnZhbHVlID09PSAnY3ljbGUnKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXdQcmV2ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQcmV2ID0gaW1hZ2UubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1ByZXYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQcmV2ID0gY3VycmVudENsaWNrIC0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDdXJyZW50Q2xpY2sobmV3UHJldilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoZW5kbGVyTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdOZXh0ID0gY3VycmVudENsaWNrXHJcbiAgICAgICAgLy8gZnJvbV9iZWdpbm5pbmdfdG9fZW5kXHJcbiAgICAgICAgaWYgKG5ld05leHQgPCBpbWFnZS5sZW5ndGggLSAxICYmIHByb3BzLnNldHRpbmdzQ21wb25lbnQudmFsdWUgPT09ICdmcm9tX2JlZ2lubmluZ190b19lbmQnKSB7XHJcbiAgICAgICAgICAgIG5ld05leHQgPSBjdXJyZW50Q2xpY2sgKyAxXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjeWNsZVxyXG4gICAgICAgIGlmIChuZXdOZXh0IDwgaW1hZ2UubGVuZ3RoICYmIHByb3BzLnNldHRpbmdzQ21wb25lbnQudmFsdWUgPT09ICdjeWNsZScpIHtcclxuICAgICAgICAgICAgaWYgKG5ld05leHQgPT09IGltYWdlLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIG5ld05leHQgPSAwXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdOZXh0ID0gY3VycmVudENsaWNrICsgMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDdXJyZW50Q2xpY2sobmV3TmV4dClcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2V0RnVsbFNjcmVlbkRpdiA9ICgpID0+e1xyXG4gICAgICAgIHNldE9wZW5GdWxsU2NyZWVuKCFvcGVuRnVsbFNjcmVlbikgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IFNlbGVjdFNsaWRlciA9ICgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuc2V0dGluZ3NDbXBvbmVudC5zdGF0ZUltYWdlID09PSAnb25lSW1hZ2UnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8U2xpZGVyT25lSW1hZ2UgaW1hZ2U9e2ltYWdlfSBjdXJyZW50Q2xpY2s9e2N1cnJlbnRDbGlja30gc2V0Q3VycmVudENsaWNrPXtzZXRDdXJyZW50Q2xpY2t9IHNldHRpbmdzQ21wb25lbnQ9e3Byb3BzLnNldHRpbmdzQ21wb25lbnR9IGhlbmRsZXJQcmV2Q2xpY2s9e2hlbmRsZXJQcmV2Q2xpY2t9IGhlbmRsZXJOZXh0Q2xpY2s9e2hlbmRsZXJOZXh0Q2xpY2t9IHNldEZvb2xTY3JlZW49e3Byb3BzLnNldEZvb2xTY3JlZW59Lz5cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy5zZXR0aW5nc0NtcG9uZW50LnN0YXRlSW1hZ2UgPT09ICd0aHJlZUltYWdlX09uX3RoZV9zaWRlcycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxTbGlkZXJUaHJlZUltYWdlIGltYWdlPXtpbWFnZX0gY3VycmVudENsaWNrPXtjdXJyZW50Q2xpY2t9IHNldEN1cnJlbnRDbGljaz17c2V0Q3VycmVudENsaWNrfSBzZXR0aW5nc0NtcG9uZW50PXtwcm9wcy5zZXR0aW5nc0NtcG9uZW50fSBoZW5kbGVyUHJldkNsaWNrPXtoZW5kbGVyUHJldkNsaWNrfSBoZW5kbGVyTmV4dENsaWNrPXtoZW5kbGVyTmV4dENsaWNrfSBzZXRGb29sU2NyZWVuPXtwcm9wcy5zZXRGb29sU2NyZWVufS8+XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy5zZXR0aW5nc0NtcG9uZW50LnN0YXRlSW1hZ2UgPT09ICd0d29JbWFnZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxTbGlkZXJUd29BbmRNb3JlIGltYWdlPXtpbWFnZX0gY3VycmVudENsaWNrPXtjdXJyZW50Q2xpY2t9IHNldEN1cnJlbnRDbGljaz17c2V0Q3VycmVudENsaWNrfSBzZXR0aW5nc0NtcG9uZW50PXtwcm9wcy5zZXR0aW5nc0NtcG9uZW50fSBoZW5kbGVyUHJldkNsaWNrPXtoZW5kbGVyUHJldkNsaWNrfSBoZW5kbGVyTmV4dENsaWNrPXtoZW5kbGVyTmV4dENsaWNrfSBzZXRGb29sU2NyZWVuPXtwcm9wcy5zZXRGb29sU2NyZWVufS8+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxucmV0dXJuIChcclxuICAgIDxUaW1lciBzZXR0aW5nc0NtcG9uZW50PXtwcm9wcy5zZXR0aW5nc0NtcG9uZW50fSBoZW5kbGVyTmV4dENsaWNrPXtoZW5kbGVyTmV4dENsaWNrfT5cclxuICAgICAgICB7U2VsZWN0U2xpZGVyKCl9XHJcbiAgICA8L1RpbWVyPlxyXG4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsYWlkZXIiXSwic291cmNlUm9vdCI6IiJ9