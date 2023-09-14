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
  "commandEndEvent": function() { return /* reexport */ commandEndEvent; },
  "commandStartEvent": function() { return /* reexport */ commandStartEvent; },
  "dispatchReadyEvent": function() { return /* reexport */ dispatchReadyEvent; },
  "editModeChangeEvent": function() { return /* reexport */ editModeChangeEvent; },
  "flushListeners": function() { return /* reexport */ flushListeners; },
  "getCurrentEditMode": function() { return /* reexport */ getCurrentEditMode; },
  "isReady": function() { return /* reexport */ isReady; },
  "isRouteActive": function() { return /* reexport */ isRouteActive; },
  "listenTo": function() { return /* reexport */ listenTo; },
  "openRoute": function() { return /* reexport */ openRoute; },
  "routeCloseEvent": function() { return /* reexport */ routeCloseEvent; },
  "routeOpenEvent": function() { return /* reexport */ routeOpenEvent; },
  "runCommand": function() { return /* reexport */ runCommand; },
  "setReady": function() { return /* reexport */ setReady; },
  "useIsPreviewMode": function() { return /* reexport */ useIsPreviewMode; },
  "useIsRouteActive": function() { return /* reexport */ useIsRouteActive; },
  "useListenTo": function() { return /* reexport */ useListenTo; },
  "useRouteStatus": function() { return /* reexport */ useRouteStatus; },
  "v1ReadyEvent": function() { return /* reexport */ v1ReadyEvent; },
  "windowEvent": function() { return /* reexport */ windowEvent; }
});

;// CONCATENATED MODULE: ./packages/v1-adapters/src/dispatchers/utils.ts
function isJQueryDeferred(value) {
  // TODO: Copied from:
  //  https://github.com/elementor/elementor/blob/6a74fc9/modules/web-cli/assets/js/core/commands.js#L410

  return !!value && 'object' === typeof value && Object.hasOwn(value, 'promise') && Object.hasOwn(value, 'then') && Object.hasOwn(value, 'fail');
}
function promisifyJQueryDeferred(deferred) {
  return new Promise((resolve, reject) => {
    deferred.then(resolve, reject);
  });
}
;// CONCATENATED MODULE: ./packages/v1-adapters/src/dispatchers/dispatchers.ts

function runCommand(command, args) {
  const extendedWindow = window;
  if (!extendedWindow.$e?.run) {
    return Promise.reject('`$e.run()` is not available');
  }
  const result = extendedWindow.$e.run(command, args);
  if (result instanceof Promise) {
    return result;
  }
  if (isJQueryDeferred(result)) {
    return promisifyJQueryDeferred(result);
  }
  return Promise.resolve(result);
}
function openRoute(route) {
  const extendedWindow = window;
  if (!extendedWindow.$e?.route) {
    return Promise.reject('`$e.route()` is not available');
  }
  try {
    return Promise.resolve(extendedWindow.$e.route(route));
  } catch (e) {
    return Promise.reject(e);
  }
}
;// CONCATENATED MODULE: ./packages/v1-adapters/src/dispatchers/index.ts

;// CONCATENATED MODULE: external "React"
var external_React_namespaceObject = React;
;// CONCATENATED MODULE: ./packages/v1-adapters/src/listeners/event-creators.ts
const commandStartEvent = command => {
  return {
    type: 'command',
    name: command,
    state: 'before'
  };
};
const commandEndEvent = command => {
  return {
    type: 'command',
    name: command,
    state: 'after'
  };
};
const routeOpenEvent = route => {
  return {
    type: 'route',
    name: route,
    state: 'open'
  };
};
const routeCloseEvent = route => {
  return {
    type: 'route',
    name: route,
    state: 'close'
  };
};
const windowEvent = event => {
  return {
    type: 'window-event',
    name: event
  };
};
const v1ReadyEvent = () => {
  return windowEvent('elementor/initialized');
};
const editModeChangeEvent = () => {
  return windowEvent('elementor/edit-mode/change');
};
;// CONCATENATED MODULE: ./packages/v1-adapters/src/listeners/is-ready.ts
/**
 * This file is used to store the state of the isReady variable, which is used to determine
 * if the adapter is ready to receive events (editor v1 and v2 are loaded).
 */

let ready = false;
function isReady() {
  return ready;
}
function setReady(value) {
  ready = value;
}
;// CONCATENATED MODULE: ./packages/v1-adapters/src/listeners/utils.ts

function dispatchReadyEvent() {
  return getV1LoadingPromise().then(() => {
    setReady(true);
    window.dispatchEvent(new CustomEvent('elementor/initialized'));
  });
}
function getV1LoadingPromise() {
  const v1LoadingPromise = window.__elementorEditorV1LoadingPromise;
  if (!v1LoadingPromise) {
    return Promise.reject('Elementor Editor V1 is not loaded');
  }
  return v1LoadingPromise;
}
function normalizeEvent(e) {
  if (e instanceof CustomEvent && e.detail?.command) {
    return {
      type: 'command',
      command: e.detail.command,
      args: e.detail.args,
      originalEvent: e
    };
  }
  if (e instanceof CustomEvent && e.detail?.route) {
    return {
      type: 'route',
      route: e.detail.route,
      originalEvent: e
    };
  }
  return {
    type: 'window-event',
    event: e.type,
    originalEvent: e
  };
}
;// CONCATENATED MODULE: ./packages/v1-adapters/src/listeners/listeners.ts


const callbacksByEvent = new Map();
let abortController = new AbortController();
function listenTo(eventDescriptors, callback) {
  if (!Array.isArray(eventDescriptors)) {
    eventDescriptors = [eventDescriptors];
  }

  // @see https://github.com/typescript-eslint/typescript-eslint/issues/2841
  // eslint-disable-next-line array-callback-return -- Clashes with typescript.
  const cleanups = eventDescriptors.map(event => {
    const {
      type,
      name
    } = event;
    switch (type) {
      case 'command':
        return registerCommandListener(name, event.state, callback);
      case 'route':
        return registerRouteListener(name, event.state, callback);
      case 'window-event':
        return registerWindowEventListener(name, callback);
    }
  });
  return () => {
    cleanups.forEach(cleanup => cleanup());
  };
}
function flushListeners() {
  abortController.abort();
  callbacksByEvent.clear();
  setReady(false);
  abortController = new AbortController();
}
function registerCommandListener(command, state, callback) {
  return registerWindowEventListener(`elementor/commands/run/${state}`, e => {
    const shouldRunCallback = e.type === 'command' && e.command === command;
    if (shouldRunCallback) {
      callback(e);
    }
  });
}
function registerRouteListener(route, state, callback) {
  return registerWindowEventListener(`elementor/routes/${state}`, e => {
    const shouldRunCallback = e.type === 'route' && e.route.startsWith(route);
    if (shouldRunCallback) {
      callback(e);
    }
  });
}
function registerWindowEventListener(event, callback) {
  const isFirstListener = !callbacksByEvent.has(event);
  if (isFirstListener) {
    callbacksByEvent.set(event, []);
    addListener(event);
  }
  callbacksByEvent.get(event)?.push(callback);
  return () => {
    const callbacks = callbacksByEvent.get(event);
    if (!callbacks?.length) {
      return;
    }
    const filtered = callbacks.filter(cb => cb !== callback);
    callbacksByEvent.set(event, filtered);
  };
}
function addListener(event) {
  window.addEventListener(event, makeEventHandler(event), {
    signal: abortController.signal
  });
}
function makeEventHandler(event) {
  return e => {
    if (!isReady()) {
      return;
    }
    const normalizedEvent = normalizeEvent(e);
    callbacksByEvent.get(event)?.forEach(callback => {
      callback(normalizedEvent);
    });
  };
}
;// CONCATENATED MODULE: ./packages/v1-adapters/src/listeners/index.ts





;// CONCATENATED MODULE: ./packages/v1-adapters/src/hooks/use-listen-to.ts


function useListenTo(event, getSnapshot, deps = []) {
  const [snapshot, setSnapshot] = (0,external_React_namespaceObject.useState)(() => getSnapshot());
  (0,external_React_namespaceObject.useEffect)(() => {
    const updateState = () => setSnapshot(getSnapshot());

    // Ensure the state is re-calculated when the dependencies have been changed.
    updateState();
    const cleanup = listenTo(event, updateState);
    return cleanup;
  }, deps);
  return snapshot;
}
;// CONCATENATED MODULE: ./packages/v1-adapters/src/readers/index.ts
function isRouteActive(route) {
  const extendedWindow = window;
  return !!extendedWindow.$e?.routes?.isPartOf(route);
}
function getCurrentEditMode() {
  const extendedWindow = window;
  return extendedWindow.elementor?.channels?.dataEditMode?.request?.('activeMode');
}
;// CONCATENATED MODULE: ./packages/v1-adapters/src/hooks/use-is-preview-mode.ts



function useIsPreviewMode() {
  return useListenTo(editModeChangeEvent(), () => getCurrentEditMode() === 'preview');
}
;// CONCATENATED MODULE: ./packages/v1-adapters/src/hooks/use-is-route-active.ts



function useIsRouteActive(route) {
  return useListenTo([routeOpenEvent(route), routeCloseEvent(route)], () => isRouteActive(route), [route]);
}
;// CONCATENATED MODULE: ./packages/v1-adapters/src/hooks/use-route-status.ts


function useRouteStatus(route, {
  blockOnKitRoutes = true,
  blockOnPreviewMode = true
} = {}) {
  const isRouteActive = useIsRouteActive(route);
  const isKitRouteActive = useIsRouteActive('panel/global');
  const isPreviewMode = useIsPreviewMode();
  const isActive = isRouteActive && !(blockOnPreviewMode && isPreviewMode);
  const isBlocked = blockOnPreviewMode && isPreviewMode || blockOnKitRoutes && isKitRouteActive;
  return {
    isActive,
    isBlocked
  };
}
;// CONCATENATED MODULE: ./packages/v1-adapters/src/hooks/index.ts




;// CONCATENATED MODULE: ./packages/v1-adapters/src/index.ts




(window.__UNSTABLE__elementorPackages = window.__UNSTABLE__elementorPackages || {}).v1Adapters = __webpack_exports__;
/******/ })()
;