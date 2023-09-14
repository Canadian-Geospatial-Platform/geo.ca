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

;// CONCATENATED MODULE: external "wp.i18n"
var external_wp_i18n_namespaceObject = wp.i18n;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.icons"
var external_UNSTABLE_elementorPackages_icons_namespaceObject = __UNSTABLE__elementorPackages.icons;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.v1Adapters"
var external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject = __UNSTABLE__elementorPackages.v1Adapters;
;// CONCATENATED MODULE: ./packages/user-preferences/src/hooks/use-action-props.ts



function useActionProps() {
  const {
    isActive,
    isBlocked
  } = (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.useRouteStatus)('panel/editor-preferences');
  return {
    icon: external_UNSTABLE_elementorPackages_icons_namespaceObject.ToggleRightIcon,
    title: (0,external_wp_i18n_namespaceObject.__)('User Preferences', 'elementor'),
    onClick: () => (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.openRoute)('panel/editor-preferences'),
    selected: isActive,
    disabled: isBlocked
  };
}
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.topBar"
var external_UNSTABLE_elementorPackages_topBar_namespaceObject = __UNSTABLE__elementorPackages.topBar;
;// CONCATENATED MODULE: ./packages/user-preferences/src/init.ts


function init() {
  registerTopBarMenuItems();
}
function registerTopBarMenuItems() {
  external_UNSTABLE_elementorPackages_topBar_namespaceObject.mainMenu.registerToggleAction({
    name: 'open-user-preferences',
    priority: 30,
    // After history.
    useProps: useActionProps
  });
}
;// CONCATENATED MODULE: ./packages/user-preferences/src/index.ts

init();
(window.__UNSTABLE__elementorPackages = window.__UNSTABLE__elementorPackages || {}).userPreferences = __webpack_exports__;
/******/ })()
;