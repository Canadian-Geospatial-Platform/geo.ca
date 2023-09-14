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

;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.ui"
var external_UNSTABLE_elementorPackages_ui_namespaceObject = __UNSTABLE__elementorPackages.ui;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.v1Adapters"
var external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject = __UNSTABLE__elementorPackages.v1Adapters;
;// CONCATENATED MODULE: ./packages/site-settings/src/components/portal.tsx
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function Portal(props) {
  const containerRef = (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.useListenTo)([(0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.routeOpenEvent)('panel/global'), (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.routeCloseEvent)('panel/global')], getContainerRef);
  if (!containerRef.current) {
    return null;
  }
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Portal, _extends({
    container: containerRef.current
  }, props));
}
function getContainerRef() {
  return (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.isRouteActive)('panel/global') ? {
    current: document.querySelector('#elementor-panel-inner')
  } : {
    current: null
  };
}
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.documents"
var external_UNSTABLE_elementorPackages_documents_namespaceObject = __UNSTABLE__elementorPackages.documents;
;// CONCATENATED MODULE: external "wp.i18n"
var external_wp_i18n_namespaceObject = wp.i18n;
;// CONCATENATED MODULE: ./packages/site-settings/src/components/primary-action.tsx



function PrimaryAction() {
  const document = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useActiveDocument)();
  const {
    save
  } = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useActiveDocumentActions)();
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Paper, {
    sx: {
      px: 5,
      py: 4,
      borderTop: 1,
      borderColor: 'divider'
    }
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Button, {
    variant: "contained",
    disabled: !document || !document.isDirty,
    size: "medium",
    sx: {
      width: '100%'
    },
    onClick: () => document && !document.isSaving ? save() : null
  }, document?.isSaving ? /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.CircularProgress, null) : (0,external_wp_i18n_namespaceObject.__)('Save Changes', 'elementor')));
}
;// CONCATENATED MODULE: ./packages/site-settings/src/components/portalled-primary-action.tsx


function PortalledPrimaryAction() {
  return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(PrimaryAction, null));
}
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.editor"
var external_UNSTABLE_elementorPackages_editor_namespaceObject = __UNSTABLE__elementorPackages.editor;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.topBar"
var external_UNSTABLE_elementorPackages_topBar_namespaceObject = __UNSTABLE__elementorPackages.topBar;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.icons"
var external_UNSTABLE_elementorPackages_icons_namespaceObject = __UNSTABLE__elementorPackages.icons;
;// CONCATENATED MODULE: ./packages/site-settings/src/hooks/use-action-props.ts



function useActionProps() {
  const {
    isActive,
    isBlocked
  } = (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.useRouteStatus)('panel/global', {
    blockOnKitRoutes: false
  });
  return {
    title: (0,external_wp_i18n_namespaceObject.__)('Site Settings', 'elementor'),
    icon: external_UNSTABLE_elementorPackages_icons_namespaceObject.AdjustmentsHorizontalIcon,
    onClick: () => isActive ? (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.runCommand)('panel/global/close') : (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.runCommand)('panel/global/open'),
    selected: isActive,
    disabled: isBlocked
  };
}
;// CONCATENATED MODULE: ./packages/site-settings/src/init.ts




function init() {
  registerTopBarMenuItems();
  registerPrimaryAction();
}
function registerTopBarMenuItems() {
  external_UNSTABLE_elementorPackages_topBar_namespaceObject.toolsMenu.registerToggleAction({
    name: 'toggle-site-settings',
    priority: 2,
    useProps: useActionProps
  });
}
function registerPrimaryAction() {
  // This is portal, so it injected into the top of the editor, but renders inside the site-settings panel.
  (0,external_UNSTABLE_elementorPackages_editor_namespaceObject.injectIntoTop)({
    name: 'site-settings-primary-action-portal',
    filler: PortalledPrimaryAction
  });
}
;// CONCATENATED MODULE: ./packages/site-settings/src/index.ts

init();
(window.__UNSTABLE__elementorPackages = window.__UNSTABLE__elementorPackages || {}).siteSettings = __webpack_exports__;
/******/ })()
;