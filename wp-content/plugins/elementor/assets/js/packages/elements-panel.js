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
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.v1Adapters"
var external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject = __UNSTABLE__elementorPackages.v1Adapters;
;// CONCATENATED MODULE: ./packages/elements-panel/src/sync/sync-panel-title.ts


function syncPanelTitle() {
  const title = (0,external_wp_i18n_namespaceObject.__)('Elements', 'elementor');
  (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.listenTo)((0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.routeOpenEvent)('panel/elements'), () => setPanelTitle(title));
  (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.listenTo)((0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.v1ReadyEvent)(), () => {
    if ((0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.isRouteActive)('panel/elements')) {
      setPanelTitle(title);
    }
  });
}
function setPanelTitle(title) {
  window.elementor?.getPanelView?.()?.getHeaderView?.()?.setTitle?.(title);
}
;// CONCATENATED MODULE: ./packages/elements-panel/src/sync/index.ts

;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.icons"
var external_UNSTABLE_elementorPackages_icons_namespaceObject = __UNSTABLE__elementorPackages.icons;
;// CONCATENATED MODULE: ./packages/elements-panel/src/hooks/use-action-props.tsx



function useActionProps() {
  const {
    isActive,
    isBlocked
  } = (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.useRouteStatus)('panel/elements');
  return {
    title: (0,external_wp_i18n_namespaceObject.__)('Add Element', 'elementor'),
    icon: external_UNSTABLE_elementorPackages_icons_namespaceObject.PlusIcon,
    onClick: () => (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.openRoute)('panel/elements/categories'),
    selected: isActive,
    disabled: isBlocked
  };
}
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.topBar"
var external_UNSTABLE_elementorPackages_topBar_namespaceObject = __UNSTABLE__elementorPackages.topBar;
;// CONCATENATED MODULE: ./packages/elements-panel/src/init.ts



function init() {
  registerTopBarMenuItems();
  syncPanelTitle();
}
function registerTopBarMenuItems() {
  external_UNSTABLE_elementorPackages_topBar_namespaceObject.toolsMenu.registerToggleAction({
    name: 'open-elements-panel',
    priority: 1,
    useProps: useActionProps
  });
}
;// CONCATENATED MODULE: ./packages/elements-panel/src/index.ts

init();
(window.__UNSTABLE__elementorPackages = window.__UNSTABLE__elementorPackages || {}).elementsPanel = __webpack_exports__;
/******/ })()
;