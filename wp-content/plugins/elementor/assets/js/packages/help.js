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
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.topBar"
var external_UNSTABLE_elementorPackages_topBar_namespaceObject = __UNSTABLE__elementorPackages.topBar;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.v1Adapters"
var external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject = __UNSTABLE__elementorPackages.v1Adapters;
;// CONCATENATED MODULE: ./packages/help/src/hooks/use-keyboard-shortcuts-action-props.ts



function useKeyboardShortcutsActionProps() {
  return {
    icon: external_UNSTABLE_elementorPackages_icons_namespaceObject.KeyboardIcon,
    title: (0,external_wp_i18n_namespaceObject.__)('Keyboard Shortcuts', 'elementor'),
    onClick: () => (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.runCommand)('shortcuts/open')
  };
}
;// CONCATENATED MODULE: ./packages/help/src/init.ts




function init() {
  registerTopBarMenuItems();
}
function registerTopBarMenuItems() {
  external_UNSTABLE_elementorPackages_topBar_namespaceObject.mainMenu.registerAction({
    name: 'open-keyboard-shortcuts',
    group: 'default',
    priority: 40,
    // After user preferences.
    useProps: useKeyboardShortcutsActionProps
  });
  external_UNSTABLE_elementorPackages_topBar_namespaceObject.utilitiesMenu.registerLink({
    name: 'open-help-center',
    priority: 20,
    // After Finder.
    useProps: () => {
      return {
        title: (0,external_wp_i18n_namespaceObject.__)('Help', 'elementor'),
        href: 'https://go.elementor.com/editor-top-bar-learn/',
        icon: external_UNSTABLE_elementorPackages_icons_namespaceObject.HelpIcon,
        target: '_blank'
      };
    }
  });
}
;// CONCATENATED MODULE: ./packages/help/src/index.ts

init();
(window.__UNSTABLE__elementorPackages = window.__UNSTABLE__elementorPackages || {}).help = __webpack_exports__;
/******/ })()
;