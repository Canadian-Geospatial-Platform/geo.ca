/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.topBar"
var external_UNSTABLE_elementorPackages_topBar_namespaceObject = __UNSTABLE__elementorPackages.topBar;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.icons"
var external_UNSTABLE_elementorPackages_icons_namespaceObject = __UNSTABLE__elementorPackages.icons;
;// CONCATENATED MODULE: external "wp.i18n"
var external_wp_i18n_namespaceObject = wp.i18n;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.v1Adapters"
var external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject = __UNSTABLE__elementorPackages.v1Adapters;
;// CONCATENATED MODULE: ./packages/history/src/hooks/use-action-props.ts



function useActionProps() {
  const {
    isActive,
    isBlocked
  } = (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.useRouteStatus)('panel/history');
  return {
    title: (0,external_wp_i18n_namespaceObject.__)('History', 'elementor'),
    icon: external_UNSTABLE_elementorPackages_icons_namespaceObject.HistoryIcon,
    onClick: () => (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.openRoute)('panel/history/actions'),
    selected: isActive,
    disabled: isBlocked
  };
}
;// CONCATENATED MODULE: ./packages/history/src/init.ts


function init() {
  registerTopBarMenuItems();
}
function registerTopBarMenuItems() {
  external_UNSTABLE_elementorPackages_topBar_namespaceObject.mainMenu.registerToggleAction({
    name: 'open-history',
    priority: 20,
    useProps: useActionProps
  });
}
;// CONCATENATED MODULE: ./packages/history/src/index.ts

init();
(window.__UNSTABLE__elementorPackages = window.__UNSTABLE__elementorPackages || {}).history = __webpack_exports__;
/******/ })()
;