/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "documentOptionsMenu": function() { return /* reexport */ documentOptionsMenu; }
});

;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.ui"
var external_UNSTABLE_elementorPackages_ui_namespaceObject = __UNSTABLE__elementorPackages.ui;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.documents"
var external_UNSTABLE_elementorPackages_documents_namespaceObject = __UNSTABLE__elementorPackages.documents;
;// CONCATENATED MODULE: external "wp.i18n"
var external_wp_i18n_namespaceObject = wp.i18n;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.v1Adapters"
var external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject = __UNSTABLE__elementorPackages.v1Adapters;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.icons"
var external_UNSTABLE_elementorPackages_icons_namespaceObject = __UNSTABLE__elementorPackages.icons;
;// CONCATENATED MODULE: ./packages/documents-ui/src/components/top-bar/settings-button.tsx




function SettingsButton({
  type
}) {
  const {
    isActive,
    isBlocked
  } = (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.useRouteStatus)('panel/page-settings');

  /* translators: %s: Post type label. */
  const title = (0,external_wp_i18n_namespaceObject.__)('%s Settings', 'elementor').replace('%s', type.label);
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Tooltip, {
    title: title
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Box, {
    component: "span",
    "aria-label": undefined
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.ToggleButton, {
    value: "document-settings",
    selected: isActive,
    disabled: isBlocked,
    onChange: () => (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.openRoute)('panel/page-settings/settings'),
    "aria-label": title,
    size: "small"
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_icons_namespaceObject.SettingsIcon, null))));
}
;// CONCATENATED MODULE: ./packages/documents-ui/src/components/top-bar/indicator.tsx

function Indicator({
  title,
  status
}) {
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Tooltip, {
    title: title
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Stack, {
    direction: "row",
    alignItems: "center",
    spacing: 2
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Typography, {
    variant: "body2",
    sx: {
      maxWidth: '120px'
    },
    noWrap: true
  }, title), status.value !== 'publish' && /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Typography, {
    variant: "body2",
    sx: {
      fontStyle: 'italic'
    }
  }, "(", status.label, ")")));
}
;// CONCATENATED MODULE: ./packages/documents-ui/src/components/top-bar/canvas-display.tsx




function CanvasDisplay() {
  const activeDocument = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useActiveDocument)();
  const hostDocument = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useHostDocument)();
  const document = activeDocument && activeDocument.type.value !== 'kit' ? activeDocument : hostDocument;
  if (!document) {
    return null;
  }
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Stack, {
    direction: "row",
    spacing: 3,
    sx: {
      paddingInlineStart: 3,
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement(Indicator, {
    title: document.title,
    status: document.status
  }), /*#__PURE__*/React.createElement(SettingsButton, {
    type: document.type
  }));
}
;// CONCATENATED MODULE: external "React"
var external_React_namespaceObject = React;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.topBar"
var external_UNSTABLE_elementorPackages_topBar_namespaceObject = __UNSTABLE__elementorPackages.topBar;
;// CONCATENATED MODULE: ./packages/documents-ui/src/menus.ts

const documentOptionsMenu = (0,external_UNSTABLE_elementorPackages_topBar_namespaceObject.createMenu)({
  name: 'document-options',
  groups: ['save']
});
;// CONCATENATED MODULE: ./packages/documents-ui/src/components/top-bar/primary-action-menu.tsx
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const {
  useMenuItems
} = documentOptionsMenu;

// CSS hack to hide dividers when a group is rendered empty (due to a limitation in our locations' mechanism).
// It doesn't cover all the cases (i.e. when there are multiple dividers at the end), but it's good enough for our use-case.
const StyledPopoverMenu = (0,external_UNSTABLE_elementorPackages_ui_namespaceObject.styled)(external_UNSTABLE_elementorPackages_topBar_namespaceObject.PopoverMenu)`
	& > .MuiPopover-paper > .MuiList-root > .MuiDivider-root {
		&:only-child, /* A divider is being rendered lonely */
		&:last-child, /* The last group renders empty but renders a divider */
		& + .MuiDivider-root /* Multiple dividers due to multiple empty groups */ {
			display: none;
		}
	}
`;
function PrimaryActionMenu(props) {
  const {
    save: saveActions,
    default: defaultActions
  } = useMenuItems();
  return /*#__PURE__*/external_React_namespaceObject.createElement(StyledPopoverMenu, _extends({}, props, {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    PaperProps: {
      sx: {
        mt: 2,
        ml: 3
      }
    }
  }), saveActions.map(({
    MenuItem,
    id
  }, index) => [index > 0 && /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_topBar_namespaceObject.Divider, {
    key: `${id}-divider`
  }), /*#__PURE__*/external_React_namespaceObject.createElement(MenuItem, {
    key: id
  })]), defaultActions.length > 0 && /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_topBar_namespaceObject.Divider, null), defaultActions.map(({
    MenuItem,
    id
  }) => /*#__PURE__*/external_React_namespaceObject.createElement(MenuItem, {
    key: id
  })));
}
;// CONCATENATED MODULE: ./packages/documents-ui/src/components/top-bar/primary-action.tsx
function primary_action_extends() { primary_action_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return primary_action_extends.apply(this, arguments); }






function PrimaryAction() {
  const document = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useActiveDocument)();
  const {
    save
  } = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useActiveDocumentActions)();
  const popupState = (0,external_UNSTABLE_elementorPackages_ui_namespaceObject.usePopupState)({
    variant: 'popover',
    popupId: 'document-save-options'
  });
  if (!document) {
    return null;
  }
  const isDisabled = !isEnabled(document);

  // When the document is being saved, the spinner should not appear.
  // Usually happens when the Kit is being saved.
  const shouldShowSpinner = document.isSaving && !isDisabled;
  return /*#__PURE__*/external_React_namespaceObject.createElement(external_React_namespaceObject.Fragment, null, /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.ButtonGroup, {
    size: "large",
    variant: "contained"
  }, /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Button, {
    onClick: () => !document.isSaving && save(),
    sx: {
      width: '120px'
    },
    disabled: isDisabled
  }, shouldShowSpinner ? /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.CircularProgress, null) : getLabel(document)), /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Tooltip, {
    title: (0,external_wp_i18n_namespaceObject.__)('Save Options', 'elementor'),
    PopperProps: {
      sx: {
        '&.MuiTooltip-popper .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementBottom': {
          mt: 3,
          mr: 1
        }
      }
    }
  }, /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Button, primary_action_extends({
    sx: {
      px: 0
    }
  }, (0,external_UNSTABLE_elementorPackages_ui_namespaceObject.bindTrigger)(popupState)), /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_icons_namespaceObject.ChevronDownIcon, null)))), /*#__PURE__*/external_React_namespaceObject.createElement(PrimaryActionMenu, (0,external_UNSTABLE_elementorPackages_ui_namespaceObject.bindMenu)(popupState)));
}
function getLabel(document) {
  return document.userCan.publish ? (0,external_wp_i18n_namespaceObject.__)('Publish', 'elementor') : (0,external_wp_i18n_namespaceObject.__)('Submit', 'elementor');
}
function isEnabled(document) {
  if (document.type.value === 'kit') {
    return false;
  }
  return document.isDirty || document.status.value === 'draft';
}
;// CONCATENATED MODULE: ./packages/documents-ui/src/hooks/use-document-preview-props.ts




function useDocumentPreviewProps() {
  const document = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useActiveDocument)();
  return {
    icon: external_UNSTABLE_elementorPackages_icons_namespaceObject.EyeIcon,
    title: (0,external_wp_i18n_namespaceObject.__)('Preview Changes', 'elementor'),
    onClick: () => document && (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.runCommand)('editor/documents/preview', {
      id: document.id
    })
  };
}
;// CONCATENATED MODULE: ./packages/documents-ui/src/hooks/use-document-save-draft-props.ts



function useDocumentSaveDraftProps() {
  const document = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useActiveDocument)();
  const {
    saveDraft
  } = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useActiveDocumentActions)();
  return {
    icon: external_UNSTABLE_elementorPackages_icons_namespaceObject.FileReportIcon,
    title: (0,external_wp_i18n_namespaceObject.__)('Save Draft', 'elementor'),
    onClick: saveDraft,
    disabled: !document || document.isSaving || document.isSavingDraft || !document.isDirty
  };
}
;// CONCATENATED MODULE: ./packages/documents-ui/src/hooks/use-document-save-template-props.ts



function useDocumentSaveTemplateProps() {
  const {
    saveTemplate
  } = (0,external_UNSTABLE_elementorPackages_documents_namespaceObject.useActiveDocumentActions)();
  return {
    icon: external_UNSTABLE_elementorPackages_icons_namespaceObject.FolderIcon,
    title: (0,external_wp_i18n_namespaceObject.__)('Save as Template', 'elementor'),
    onClick: saveTemplate
  };
}
;// CONCATENATED MODULE: ./packages/documents-ui/src/init.ts







function init() {
  registerTopBarMenuItems();
}
function registerTopBarMenuItems() {
  (0,external_UNSTABLE_elementorPackages_topBar_namespaceObject.injectIntoCanvasDisplay)({
    name: 'document-canvas-display',
    filler: CanvasDisplay
  });
  (0,external_UNSTABLE_elementorPackages_topBar_namespaceObject.injectIntoPrimaryAction)({
    name: 'document-primary-action',
    filler: PrimaryAction
  });
  external_UNSTABLE_elementorPackages_topBar_namespaceObject.utilitiesMenu.registerAction({
    name: 'document-preview-button',
    priority: 30,
    // After help.
    useProps: useDocumentPreviewProps
  });
  documentOptionsMenu.registerAction({
    group: 'save',
    name: 'document-save-draft',
    priority: 10,
    // Before save as template.
    useProps: useDocumentSaveDraftProps
  });
  documentOptionsMenu.registerAction({
    group: 'save',
    name: 'document-save-as-template',
    priority: 20,
    // After save draft.
    useProps: useDocumentSaveTemplateProps
  });
}
;// CONCATENATED MODULE: ./packages/documents-ui/src/index.ts


init();
(window.__UNSTABLE__elementorPackages = window.__UNSTABLE__elementorPackages || {}).documentsUi = __webpack_exports__;
/******/ })()
;