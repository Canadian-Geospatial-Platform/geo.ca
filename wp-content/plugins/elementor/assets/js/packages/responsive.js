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
  "useBreakpoints": function() { return /* reexport */ useBreakpoints; }
});

;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.store"
var external_UNSTABLE_elementorPackages_store_namespaceObject = __UNSTABLE__elementorPackages.store;
;// CONCATENATED MODULE: ./packages/responsive/src/store/index.ts

const initialState = {
  entities: {},
  activeId: null
};
function createSlice() {
  return (0,external_UNSTABLE_elementorPackages_store_namespaceObject.addSlice)({
    name: 'breakpoints',
    initialState,
    reducers: {
      init(state, action) {
        state.activeId = action.payload.activeId;
        state.entities = normalizeEntities(action.payload.entities);
      },
      activateBreakpoint(state, action) {
        if (state.entities[action.payload]) {
          state.activeId = action.payload;
        }
      }
    }
  });
}
function normalizeEntities(entities) {
  return entities.reduce((acc, breakpoint) => {
    return {
      ...acc,
      [breakpoint.id]: breakpoint
    };
  }, {});
}
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.v1Adapters"
var external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject = __UNSTABLE__elementorPackages.v1Adapters;
;// CONCATENATED MODULE: external "wp.i18n"
var external_wp_i18n_namespaceObject = wp.i18n;
;// CONCATENATED MODULE: ./packages/responsive/src/sync/sync-store.ts



function syncStore(slice) {
  syncInitialization(slice);
  syncOnChange(slice);
}
function syncInitialization(slice) {
  const {
    init
  } = slice.actions;
  (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.listenTo)((0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.v1ReadyEvent)(), () => {
    (0,external_UNSTABLE_elementorPackages_store_namespaceObject.dispatch)(init({
      entities: getBreakpoints(),
      activeId: getActiveBreakpoint()
    }));
  });
}
function syncOnChange(slice) {
  const {
    activateBreakpoint
  } = slice.actions;
  (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.listenTo)(deviceModeChangeEvent(), () => {
    const activeBreakpoint = getActiveBreakpoint();
    (0,external_UNSTABLE_elementorPackages_store_namespaceObject.dispatch)(activateBreakpoint(activeBreakpoint));
  });
}
function getBreakpoints() {
  const {
    breakpoints
  } = window.elementor?.config?.responsive || {};
  if (!breakpoints) {
    return [];
  }
  const entities = Object.entries(breakpoints).filter(([, breakpoint]) => breakpoint.is_enabled).map(([id, {
    value,
    direction,
    label
  }]) => {
    return {
      id,
      label,
      width: value,
      type: direction === 'min' ? 'min-width' : 'max-width'
    };
  });

  // Desktop breakpoint is not included in V1 config.
  entities.push({
    id: 'desktop',
    label: (0,external_wp_i18n_namespaceObject.__)('Desktop', 'elementor')
  });
  return entities;
}
function getActiveBreakpoint() {
  const extendedWindow = window;
  return extendedWindow.elementor?.channels?.deviceMode?.request?.('currentMode') || null;
}
function deviceModeChangeEvent() {
  return (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.windowEvent)('elementor/device-mode/change');
}
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.topBar"
var external_UNSTABLE_elementorPackages_topBar_namespaceObject = __UNSTABLE__elementorPackages.topBar;
;// CONCATENATED MODULE: ./packages/responsive/src/store/selectors.ts

const selectEntities = state => state.breakpoints.entities;
const selectActiveId = state => state.breakpoints.activeId;
const selectActiveBreakpoint = (0,external_UNSTABLE_elementorPackages_store_namespaceObject.createSelector)(selectEntities, selectActiveId, (entities, activeId) => activeId && entities[activeId] ? entities[activeId] : null);
const selectSortedBreakpoints = (0,external_UNSTABLE_elementorPackages_store_namespaceObject.createSelector)(selectEntities, entities => {
  const byWidth = (a, b) => {
    return a.width && b.width ? b.width - a.width : 0;
  };
  const all = Object.values(entities);
  const defaults = all.filter(breakpoint => !breakpoint.width); // AKA Desktop.
  const minWidth = all.filter(breakpoint => breakpoint.type === 'min-width');
  const maxWidth = all.filter(breakpoint => breakpoint.type === 'max-width');

  // Sort by size, big to small.
  return [...minWidth.sort(byWidth), ...defaults, ...maxWidth.sort(byWidth)];
});
;// CONCATENATED MODULE: ./packages/responsive/src/hooks/use-breakpoints.ts


function useBreakpoints() {
  const all = (0,external_UNSTABLE_elementorPackages_store_namespaceObject.useSelector)(selectSortedBreakpoints);
  const active = (0,external_UNSTABLE_elementorPackages_store_namespaceObject.useSelector)(selectActiveBreakpoint);
  return {
    all,
    active
  };
}
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.ui"
var external_UNSTABLE_elementorPackages_ui_namespaceObject = __UNSTABLE__elementorPackages.ui;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.icons"
var external_UNSTABLE_elementorPackages_icons_namespaceObject = __UNSTABLE__elementorPackages.icons;
;// CONCATENATED MODULE: external "React"
var external_React_namespaceObject = React;
;// CONCATENATED MODULE: ./packages/responsive/src/hooks/use-breakpoints-actions.ts


function useBreakpointsActions() {
  const activate = (0,external_React_namespaceObject.useCallback)(device => {
    return (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.runCommand)('panel/change-device-mode', {
      device
    });
  }, []);
  return {
    activate
  };
}
;// CONCATENATED MODULE: ./packages/responsive/src/components/breakpoints-switcher.tsx
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function BreakpointsSwitcher() {
  const {
    all,
    active
  } = useBreakpoints();
  const {
    activate
  } = useBreakpointsActions();
  if (!all.length || !active) {
    return null;
  }
  const onChange = (_, value) => activate(value);
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Tabs, {
    value: active.id,
    onChange: onChange,
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('Switch Device', 'elementor')
  }, all.map(({
    id,
    label,
    type,
    width
  }) => {
    const Icon = iconsMap[id];
    const title = labelsMap[type || 'default'].replace('%s', label).replace('%d', width?.toString() || '');
    return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Tab, {
      value: id,
      key: id,
      "aria-label": title,
      icon: /*#__PURE__*/React.createElement(Tooltip, {
        title: title
      }, /*#__PURE__*/React.createElement(Icon, null))
    });
  }));
}
function Tooltip(props) {
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Tooltip, _extends({
    PopperProps: {
      sx: {
        '&.MuiTooltip-popper .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementBottom': {
          mt: 7
        }
      }
    }
  }, props));
}
const iconsMap = {
  widescreen: external_UNSTABLE_elementorPackages_icons_namespaceObject.WidescreenIcon,
  desktop: external_UNSTABLE_elementorPackages_icons_namespaceObject.DesktopIcon,
  laptop: external_UNSTABLE_elementorPackages_icons_namespaceObject.LaptopIcon,
  tablet_extra: external_UNSTABLE_elementorPackages_icons_namespaceObject.TabletLandscapeIcon,
  tablet: external_UNSTABLE_elementorPackages_icons_namespaceObject.TabletPortraitIcon,
  mobile_extra: external_UNSTABLE_elementorPackages_icons_namespaceObject.MobileLandscapeIcon,
  mobile: external_UNSTABLE_elementorPackages_icons_namespaceObject.MobilePortraitIcon
};
const labelsMap = {
  default: '%s',
  // translators: %s: Breakpoint label, %d: Breakpoint size.
  'min-width': (0,external_wp_i18n_namespaceObject.__)('%s (%dpx and up)', 'elementor'),
  // translators: %s: Breakpoint label, %d: Breakpoint size.
  'max-width': (0,external_wp_i18n_namespaceObject.__)('%s (up to %dpx)', 'elementor')
};
;// CONCATENATED MODULE: ./packages/responsive/src/init.ts




function init() {
  initStore();
  registerTopBarUI();
}
function initStore() {
  const slice = createSlice();
  syncStore(slice);
}
function registerTopBarUI() {
  (0,external_UNSTABLE_elementorPackages_topBar_namespaceObject.injectIntoCanvasDisplay)({
    name: 'responsive-breakpoints-switcher',
    filler: BreakpointsSwitcher,
    options: {
      priority: 20 // After document indication.
    }
  });
}
;// CONCATENATED MODULE: ./packages/responsive/src/index.ts


init();
(window.__UNSTABLE__elementorPackages = window.__UNSTABLE__elementorPackages || {}).responsive = __webpack_exports__;
/******/ })()
;