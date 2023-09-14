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
  "Divider": function() { return /* reexport */ external_UNSTABLE_elementorPackages_ui_namespaceObject.Divider; },
  "PopoverMenu": function() { return /* reexport */ PopoverMenu; },
  "PopoverMenuItem": function() { return /* reexport */ PopoverMenuItem; },
  "ToolbarMenu": function() { return /* reexport */ ToolbarMenu; },
  "ToolbarMenuItem": function() { return /* reexport */ ToolbarMenuItem; },
  "ToolbarMenuMore": function() { return /* reexport */ ToolbarMenuMore; },
  "ToolbarMenuToggleItem": function() { return /* reexport */ ToolbarMenuToggleItem; },
  "createMenu": function() { return /* reexport */ createMenu; },
  "injectIntoCanvasDisplay": function() { return /* reexport */ injectIntoCanvasDisplay; },
  "injectIntoPrimaryAction": function() { return /* reexport */ injectIntoPrimaryAction; },
  "mainMenu": function() { return /* reexport */ mainMenu; },
  "toolsMenu": function() { return /* reexport */ toolsMenu; },
  "utilitiesMenu": function() { return /* reexport */ utilitiesMenu; }
});

;// CONCATENATED MODULE: external "React"
var external_React_namespaceObject = React;
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.locations"
var external_UNSTABLE_elementorPackages_locations_namespaceObject = __UNSTABLE__elementorPackages.locations;
;// CONCATENATED MODULE: ./packages/top-bar/src/contexts/menu-context.tsx

const MenuContext = /*#__PURE__*/(0,external_React_namespaceObject.createContext)({
  type: 'toolbar'
});
function MenuContextProvider({
  type,
  children
}) {
  return /*#__PURE__*/React.createElement(MenuContext.Provider, {
    value: {
      type
    }
  }, children);
}
function useMenuContext() {
  return (0,external_React_namespaceObject.useContext)(MenuContext);
}
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.ui"
var external_UNSTABLE_elementorPackages_ui_namespaceObject = __UNSTABLE__elementorPackages.ui;
;// CONCATENATED MODULE: ./packages/top-bar/src/components/ui/toolbar-menu-item.tsx
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ToolbarMenuItem({
  title,
  ...props
}) {
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Tooltip, {
    title: title
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Box, {
    component: "span",
    "aria-label": undefined
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.IconButton, _extends({}, props, {
    "aria-label": title,
    size: "small"
  }))));
}
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.icons"
var external_UNSTABLE_elementorPackages_icons_namespaceObject = __UNSTABLE__elementorPackages.icons;
;// CONCATENATED MODULE: ./packages/top-bar/src/components/ui/popover-menu-item.tsx
function popover_menu_item_extends() { popover_menu_item_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return popover_menu_item_extends.apply(this, arguments); }



const DirectionalArrowIcon = (0,external_UNSTABLE_elementorPackages_ui_namespaceObject.withDirection)(external_UNSTABLE_elementorPackages_icons_namespaceObject.ArrowUpRightIcon);
function PopoverMenuItem({
  text,
  icon,
  onClick,
  href,
  target,
  disabled,
  ...props
}) {
  const isExternalLink = href && target === '_blank';
  return /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.MenuItem, popover_menu_item_extends({}, props, {
    disabled: disabled,
    onClick: onClick,
    component: href ? 'a' : 'div',
    href: href,
    target: target
  }), /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.ListItemIcon, null, icon), /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.ListItemText, {
    primary: text
  }), isExternalLink && /*#__PURE__*/external_React_namespaceObject.createElement(DirectionalArrowIcon, null));
}
;// CONCATENATED MODULE: ./packages/top-bar/src/components/actions/action.tsx
function action_extends() { action_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return action_extends.apply(this, arguments); }



function Action({
  icon: Icon,
  title,
  ...props
}) {
  const {
    type
  } = useMenuContext();
  return type === 'toolbar' ? /*#__PURE__*/React.createElement(ToolbarMenuItem, action_extends({
    title: title
  }, props), /*#__PURE__*/React.createElement(Icon, null)) : /*#__PURE__*/React.createElement(PopoverMenuItem, action_extends({}, props, {
    text: title,
    icon: /*#__PURE__*/React.createElement(Icon, null)
  }));
}
;// CONCATENATED MODULE: ./packages/top-bar/src/components/ui/toolbar-menu-toggle-item.tsx
function toolbar_menu_toggle_item_extends() { toolbar_menu_toggle_item_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return toolbar_menu_toggle_item_extends.apply(this, arguments); }

function ToolbarMenuToggleItem({
  title,
  onClick,
  ...props
}) {
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Tooltip, {
    title: title
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Box, {
    component: "span",
    "aria-label": undefined
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.ToggleButton, toolbar_menu_toggle_item_extends({}, props, {
    onChange: onClick,
    "aria-label": title,
    size: "small"
  }))));
}
;// CONCATENATED MODULE: ./packages/top-bar/src/components/actions/toggle-action.tsx
function toggle_action_extends() { toggle_action_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return toggle_action_extends.apply(this, arguments); }



function ToggleAction({
  icon: Icon,
  title,
  value,
  ...props
}) {
  const {
    type
  } = useMenuContext();
  return type === 'toolbar' ? /*#__PURE__*/React.createElement(ToolbarMenuToggleItem, toggle_action_extends({
    value: value || title,
    title: title
  }, props), /*#__PURE__*/React.createElement(Icon, null)) : /*#__PURE__*/React.createElement(PopoverMenuItem, toggle_action_extends({}, props, {
    text: title,
    icon: /*#__PURE__*/React.createElement(Icon, null)
  }));
}
;// CONCATENATED MODULE: ./packages/top-bar/src/components/actions/link.tsx
function link_extends() { link_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return link_extends.apply(this, arguments); }



function Link({
  icon: Icon,
  title,
  ...props
}) {
  const {
    type
  } = useMenuContext();
  return type === 'toolbar' ? /*#__PURE__*/React.createElement(ToolbarMenuItem, link_extends({
    title: title
  }, props), /*#__PURE__*/React.createElement(Icon, null)) : /*#__PURE__*/React.createElement(PopoverMenuItem, link_extends({}, props, {
    text: title,
    icon: /*#__PURE__*/React.createElement(Icon, null)
  }));
}
;// CONCATENATED MODULE: ./packages/top-bar/src/locations/menus.tsx
function menus_extends() { menus_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return menus_extends.apply(this, arguments); }






function createMenu({
  name: menuName,
  groups = []
}) {
  const menuGroups = [...groups, 'default'];
  const registerAction = createRegisterMenuItem({
    menuName,
    menuGroups,
    component: Action
  });
  const registerToggleAction = createRegisterMenuItem({
    menuName,
    menuGroups,
    component: ToggleAction
  });
  const registerLink = createRegisterMenuItem({
    menuName,
    menuGroups,
    component: Link
  });
  const useMenuItems = createUseMenuItems({
    menuName,
    menuGroups
  });
  return {
    registerAction,
    registerToggleAction,
    registerLink,
    useMenuItems
  };
}
function createRegisterMenuItem({
  menuName,
  menuGroups,
  component
}) {
  return ({
    group = 'default',
    name,
    overwrite,
    priority,
    ...args
  }) => {
    if (!menuGroups.includes(group)) {
      return;
    }
    const useProps = 'props' in args ? () => args.props : args.useProps;
    const Component = component;
    const Filler = props => {
      const componentProps = useProps();
      return /*#__PURE__*/external_React_namespaceObject.createElement(Component, menus_extends({}, props, componentProps));
    };
    const location = getMenuLocationId(menuName, group);
    (0,external_UNSTABLE_elementorPackages_locations_namespaceObject.inject)({
      location,
      name,
      filler: Filler,
      options: {
        priority,
        overwrite
      }
    });
  };
}
function createUseMenuItems({
  menuName,
  menuGroups
}) {
  const locations = menuGroups.map(group => getMenuLocationId(menuName, group));
  return () => {
    const injectionsGroups = (0,external_UNSTABLE_elementorPackages_locations_namespaceObject.useInjectionsOf)(locations);

    // Normalize the injections groups to an object with the groups as keys.
    return (0,external_React_namespaceObject.useMemo)(() => {
      return injectionsGroups.reduce((acc, injections, index) => {
        const groupName = menuGroups[index];
        return {
          ...acc,
          [groupName]: injections.map(injection => ({
            id: injection.id,
            MenuItem: injection.filler
          }))
        };
      }, {});
    }, [injectionsGroups]);
  };
}
function getMenuLocationId(menu, group) {
  return `editor/top-bar/${menu}/${group}`;
}
;// CONCATENATED MODULE: ./packages/top-bar/src/locations/consts.ts
// Locations
const LOCATION_CANVAS_DISPLAY = 'editor/top-bar/canvas-display'; // What this name means?
const LOCATION_PRIMARY_ACTION = 'editor/top-bar/primary-action';
;// CONCATENATED MODULE: ./packages/top-bar/src/locations/index.ts





const injectIntoCanvasDisplay = (0,external_UNSTABLE_elementorPackages_locations_namespaceObject.createInjectorFor)(LOCATION_CANVAS_DISPLAY);
const injectIntoPrimaryAction = (0,external_UNSTABLE_elementorPackages_locations_namespaceObject.createInjectorFor)(LOCATION_PRIMARY_ACTION);
const mainMenu = createMenu({
  name: 'main',
  groups: ['exits']
});
const toolsMenu = createMenu({
  name: 'tools'
});
const utilitiesMenu = createMenu({
  name: 'utilities'
});
;// CONCATENATED MODULE: ./packages/top-bar/src/components/ui/popover-menu.tsx
function popover_menu_extends() { popover_menu_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return popover_menu_extends.apply(this, arguments); }


function PopoverMenu({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement(MenuContextProvider, {
    type: 'popover'
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Menu, popover_menu_extends({
    PaperProps: {
      sx: {
        mt: 4
      }
    }
  }, props, {
    MenuListProps: {
      component: 'div'
    }
  }), children));
}
;// CONCATENATED MODULE: ./packages/top-bar/src/components/ui/toolbar-menu.tsx


function ToolbarMenu({
  children
}) {
  return /*#__PURE__*/React.createElement(MenuContextProvider, {
    type: 'toolbar'
  }, /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Stack, {
    sx: {
      px: 4
    },
    spacing: 4,
    direction: "row",
    alignItems: "center"
  }, children));
}
;// CONCATENATED MODULE: external "wp.i18n"
var external_wp_i18n_namespaceObject = wp.i18n;
;// CONCATENATED MODULE: ./packages/top-bar/src/components/ui/toolbar-menu-more.tsx
function toolbar_menu_more_extends() { toolbar_menu_more_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return toolbar_menu_more_extends.apply(this, arguments); }





function ToolbarMenuMore({
  children,
  id
}) {
  const popupState = (0,external_UNSTABLE_elementorPackages_ui_namespaceObject.usePopupState)({
    variant: 'popover',
    popupId: id
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToolbarMenuItem, toolbar_menu_more_extends({}, (0,external_UNSTABLE_elementorPackages_ui_namespaceObject.bindTrigger)(popupState), {
    title: (0,external_wp_i18n_namespaceObject.__)('More', 'elementor')
  }), /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_icons_namespaceObject.DotsVerticalIcon, null)), /*#__PURE__*/React.createElement(PopoverMenu, toolbar_menu_more_extends({
    onClick: popupState.close
  }, (0,external_UNSTABLE_elementorPackages_ui_namespaceObject.bindMenu)(popupState)), children));
}
;// CONCATENATED MODULE: ./packages/top-bar/src/components/ui/toolbar-logo.tsx
function toolbar_logo_extends() { toolbar_logo_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return toolbar_logo_extends.apply(this, arguments); }



const ElementorLogo = props => {
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.SvgIcon, toolbar_logo_extends({
    viewBox: "0 0 32 32"
  }, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.7 9H9V22.3H11.7V9Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.4 9H9V11.7H22.4V9Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.4 14.4004H9V17.1004H22.4V14.4004Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.4 19.6992H9V22.3992H22.4V19.6992Z"
  })));
};
const StyledToggleButton = (0,external_UNSTABLE_elementorPackages_ui_namespaceObject.styled)(external_UNSTABLE_elementorPackages_ui_namespaceObject.ToggleButton)(() => ({
  padding: 0,
  '&.MuiToggleButton-root:hover': {
    backgroundColor: 'initial'
  },
  '&.MuiToggleButton-root.Mui-selected': {
    backgroundColor: 'initial'
  }
}));
const StyledElementorLogo = (0,external_UNSTABLE_elementorPackages_ui_namespaceObject.styled)(ElementorLogo, {
  shouldForwardProp: prop => prop !== 'showMenuIcon'
})(({
  theme,
  showMenuIcon
}) => ({
  width: 'auto',
  height: '100%',
  '& path': {
    fill: 'initial',
    transition: 'all 0.2s linear',
    transformOrigin: 'bottom left',
    '&:first-of-type': {
      transitionDelay: !showMenuIcon && '0.2s',
      transform: showMenuIcon && 'translateY(-9px) scaleY(0)'
    },
    '&:not(:first-of-type)': {
      // Emotion automatically change 4 to -4 in RTL moode.
      transform: !showMenuIcon && `translateX(${theme.direction === 'rtl' ? '4' : '9'}px) scaleX(0.6)`
    },
    '&:nth-of-type(2)': {
      transitionDelay: showMenuIcon ? '0' : '0.2s'
    },
    '&:nth-of-type(3)': {
      transitionDelay: '0.1s'
    },
    '&:nth-of-type(4)': {
      transitionDelay: showMenuIcon ? '0.2s' : '0'
    }
  }
}));
function ToolbarLogo(props) {
  const [isHoverState, setIsHoverState] = (0,external_React_namespaceObject.useState)(false);
  const showMenuIcon = props.selected || isHoverState;
  return /*#__PURE__*/React.createElement(StyledToggleButton, toolbar_logo_extends({}, props, {
    value: "selected",
    size: "small",
    onMouseEnter: () => setIsHoverState(true),
    onMouseLeave: () => setIsHoverState(false)
  }), /*#__PURE__*/React.createElement(StyledElementorLogo, {
    titleAccess: (0,external_wp_i18n_namespaceObject.__)('Elementor Logo', 'elementor'),
    showMenuIcon: showMenuIcon
  }));
}
;// CONCATENATED MODULE: ./packages/top-bar/src/components/locations/main-menu-location.tsx
function main_menu_location_extends() { main_menu_location_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return main_menu_location_extends.apply(this, arguments); }




const {
  useMenuItems
} = mainMenu;
function MainMenuLocation() {
  const menuItems = useMenuItems();
  const orderedGroups = [menuItems.default, menuItems.exits];
  const popupState = (0,external_UNSTABLE_elementorPackages_ui_namespaceObject.usePopupState)({
    variant: 'popover',
    popupId: 'elementor-v2-top-bar-main-menu'
  });
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Stack, {
    sx: {
      paddingInlineStart: 4
    },
    direction: "row",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(ToolbarLogo, main_menu_location_extends({}, (0,external_UNSTABLE_elementorPackages_ui_namespaceObject.bindTrigger)(popupState), {
    selected: popupState.isOpen
  })), /*#__PURE__*/React.createElement(PopoverMenu, main_menu_location_extends({
    onClick: popupState.close
  }, (0,external_UNSTABLE_elementorPackages_ui_namespaceObject.bindMenu)(popupState), {
    PaperProps: {
      sx: {
        mt: 4,
        marginInlineStart: -2
      }
    }
  }), orderedGroups.filter(group => group.length).map((group, index) => {
    return [index > 0 ? /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Divider, {
      key: index,
      orientation: "horizontal"
    }) : null, ...group.map(({
      MenuItem,
      id
    }) => /*#__PURE__*/React.createElement(MenuItem, {
      key: id
    }))];
  })));
}
;// CONCATENATED MODULE: ./packages/top-bar/src/components/locations/tools-menu-location.tsx




const MAX_TOOLBAR_ACTIONS = 5;
const {
  useMenuItems: tools_menu_location_useMenuItems
} = toolsMenu;
function ToolsMenuLocation() {
  const menuItems = tools_menu_location_useMenuItems();
  const toolbarMenuItems = menuItems.default.slice(0, MAX_TOOLBAR_ACTIONS);
  const popoverMenuItems = menuItems.default.slice(MAX_TOOLBAR_ACTIONS);
  return /*#__PURE__*/external_React_namespaceObject.createElement(ToolbarMenu, null, toolbarMenuItems.map(({
    MenuItem,
    id
  }) => /*#__PURE__*/external_React_namespaceObject.createElement(MenuItem, {
    key: id
  })), popoverMenuItems.length > 0 && /*#__PURE__*/external_React_namespaceObject.createElement(ToolbarMenuMore, {
    id: "elementor-editor-top-bar-tools-more"
  }, popoverMenuItems.map(({
    MenuItem,
    id
  }) => /*#__PURE__*/external_React_namespaceObject.createElement(MenuItem, {
    key: id
  }))));
}
;// CONCATENATED MODULE: ./packages/top-bar/src/components/locations/canvas-display-location.tsx





function CanvasDisplayLocation() {
  const injections = (0,external_UNSTABLE_elementorPackages_locations_namespaceObject.useInjectionsOf)(LOCATION_CANVAS_DISPLAY);
  return /*#__PURE__*/React.createElement(ToolbarMenu, null, injections.map(({
    filler: Filler,
    id
  }, index) => /*#__PURE__*/React.createElement(external_React_namespaceObject.Fragment, {
    key: id
  }, index === 0 && /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Divider, {
    orientation: "vertical"
  }), /*#__PURE__*/React.createElement(Filler, null), /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Divider, {
    orientation: "vertical"
  }))));
}
;// CONCATENATED MODULE: ./packages/top-bar/src/components/locations/utilities-menu-location.tsx





const utilities_menu_location_MAX_TOOLBAR_ACTIONS = 3;
const {
  useMenuItems: utilities_menu_location_useMenuItems
} = utilitiesMenu;
function UtilitiesMenuLocation() {
  const menuItems = utilities_menu_location_useMenuItems();
  const toolbarMenuItems = menuItems.default.slice(0, utilities_menu_location_MAX_TOOLBAR_ACTIONS);
  const popoverMenuItems = menuItems.default.slice(utilities_menu_location_MAX_TOOLBAR_ACTIONS);
  return /*#__PURE__*/React.createElement(ToolbarMenu, null, toolbarMenuItems.map(({
    MenuItem,
    id
  }, index) => /*#__PURE__*/React.createElement(external_React_namespaceObject.Fragment, {
    key: id
  }, index === 0 && /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Divider, {
    orientation: "vertical"
  }), /*#__PURE__*/React.createElement(MenuItem, null))), popoverMenuItems.length > 0 && /*#__PURE__*/React.createElement(ToolbarMenuMore, {
    id: "elementor-editor-top-bar-utilities-more"
  }, popoverMenuItems.map(({
    MenuItem,
    id
  }) => /*#__PURE__*/React.createElement(MenuItem, {
    key: id
  }))));
}
;// CONCATENATED MODULE: ./packages/top-bar/src/components/locations/primary-action-location.tsx


function PrimaryActionLocation() {
  return /*#__PURE__*/React.createElement(external_UNSTABLE_elementorPackages_locations_namespaceObject.Slot, {
    location: LOCATION_PRIMARY_ACTION
  });
}
;// CONCATENATED MODULE: ./packages/top-bar/src/components/top-bar.tsx







function TopBar() {
  return /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.ThemeProvider, {
    colorScheme: "dark"
  }, /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.AppBar, {
    position: "sticky"
  }, /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Box, {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)"
  }, /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Grid, {
    container: true
  }, /*#__PURE__*/external_React_namespaceObject.createElement(MainMenuLocation, null), /*#__PURE__*/external_React_namespaceObject.createElement(ToolsMenuLocation, null)), /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Grid, {
    container: true,
    justifyContent: "center"
  }, /*#__PURE__*/external_React_namespaceObject.createElement(CanvasDisplayLocation, null)), /*#__PURE__*/external_React_namespaceObject.createElement(external_UNSTABLE_elementorPackages_ui_namespaceObject.Grid, {
    container: true,
    justifyContent: "flex-end"
  }, /*#__PURE__*/external_React_namespaceObject.createElement(UtilitiesMenuLocation, null), /*#__PURE__*/external_React_namespaceObject.createElement(PrimaryActionLocation, null)))));
}
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.editor"
var external_UNSTABLE_elementorPackages_editor_namespaceObject = __UNSTABLE__elementorPackages.editor;
;// CONCATENATED MODULE: ./packages/top-bar/src/init.ts





function init() {
  (0,external_UNSTABLE_elementorPackages_editor_namespaceObject.injectIntoTop)({
    name: 'top-bar',
    filler: TopBar
  });
  mainMenu.registerLink({
    name: 'manage-website',
    group: 'exits',
    useProps: () => {
      const {
        urls
      } = (0,external_UNSTABLE_elementorPackages_editor_namespaceObject.useSettings)();
      return {
        title: (0,external_wp_i18n_namespaceObject.__)('Manage Website', 'elementor'),
        href: urls.admin,
        icon: external_UNSTABLE_elementorPackages_icons_namespaceObject.WordpressIcon,
        target: '_blank'
      };
    }
  });
}
;// CONCATENATED MODULE: ./packages/top-bar/src/index.ts










init();
(window.__UNSTABLE__elementorPackages = window.__UNSTABLE__elementorPackages || {}).topBar = __webpack_exports__;
/******/ })()
;