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
  "useActiveDocument": function() { return /* reexport */ useActiveDocument; },
  "useActiveDocumentActions": function() { return /* reexport */ useActiveDocumentActions; },
  "useHostDocument": function() { return /* reexport */ useHostDocument; }
});

;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.store"
var external_UNSTABLE_elementorPackages_store_namespaceObject = __UNSTABLE__elementorPackages.store;
;// CONCATENATED MODULE: ./packages/documents/src/sync/utils.ts
function getV1DocumentsManager() {
  const documentsManager = window.elementor?.documents;
  if (!documentsManager) {
    throw new Error('Elementor Editor V1 documents manager not found');
  }
  return documentsManager;
}
function normalizeV1Document(documentData) {
  // Draft or autosave.
  const isUnpublishedRevision = documentData.config.revisions.current_id !== documentData.id;
  return {
    id: documentData.id,
    title: documentData.container.settings.get('post_title'),
    type: {
      value: documentData.config.type,
      label: documentData.config.panel.title
    },
    status: {
      value: documentData.config.status.value,
      label: documentData.config.status.label
    },
    isDirty: documentData.editor.isChanged || isUnpublishedRevision,
    isSaving: documentData.editor.isSaving,
    isSavingDraft: false,
    userCan: {
      publish: documentData.config.user.can_publish
    }
  };
}
;// CONCATENATED MODULE: external "__UNSTABLE__elementorPackages.v1Adapters"
var external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject = __UNSTABLE__elementorPackages.v1Adapters;
;// CONCATENATED MODULE: ./packages/documents/src/sync/sync-store.ts



function syncStore(slice) {
  syncInitialization(slice);
  syncActiveDocument(slice);
  syncOnDocumentSave(slice);
  syncOnDocumentChange(slice);
}
function syncInitialization(slice) {
  const {
    init
  } = slice.actions;
  (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.listenTo)((0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.v1ReadyEvent)(), () => {
    const documentsManager = getV1DocumentsManager();
    const entities = Object.entries(documentsManager.documents).reduce((acc, [id, document]) => {
      acc[id] = normalizeV1Document(document);
      return acc;
    }, {});
    (0,external_UNSTABLE_elementorPackages_store_namespaceObject.dispatch)(init({
      entities,
      hostId: documentsManager.getInitialId(),
      activeId: documentsManager.getCurrentId()
    }));
  });
}
function syncActiveDocument(slice) {
  const {
    activateDocument
  } = slice.actions;
  (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.listenTo)((0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.commandEndEvent)('editor/documents/open'), () => {
    const documentsManager = getV1DocumentsManager();
    const currentDocument = normalizeV1Document(documentsManager.getCurrent());
    (0,external_UNSTABLE_elementorPackages_store_namespaceObject.dispatch)(activateDocument(currentDocument));
  });
}
function syncOnDocumentSave(slice) {
  const {
    startSaving,
    endSaving,
    startSavingDraft,
    endSavingDraft
  } = slice.actions;
  const isDraft = e => {
    const event = e;

    /**
     * @see https://github.com/elementor/elementor/blob/5f815d40a/assets/dev/js/editor/document/save/hooks/ui/save/before.js#L18-L22
     */
    return event.args?.status === 'autosave';
  };
  (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.listenTo)((0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.commandStartEvent)('document/save/save'), e => {
    if (isDraft(e)) {
      (0,external_UNSTABLE_elementorPackages_store_namespaceObject.dispatch)(startSavingDraft());
      return;
    }
    (0,external_UNSTABLE_elementorPackages_store_namespaceObject.dispatch)(startSaving());
  });
  (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.listenTo)((0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.commandEndEvent)('document/save/save'), e => {
    const activeDocument = normalizeV1Document(getV1DocumentsManager().getCurrent());
    if (isDraft(e)) {
      (0,external_UNSTABLE_elementorPackages_store_namespaceObject.dispatch)(endSavingDraft(activeDocument));
    } else {
      (0,external_UNSTABLE_elementorPackages_store_namespaceObject.dispatch)(endSaving(activeDocument));
    }
  });
}
function syncOnDocumentChange(slice) {
  const {
    markAsDirty,
    markAsPristine
  } = slice.actions;
  (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.listenTo)((0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.commandEndEvent)('document/save/set-is-modified'), () => {
    const currentDocument = getV1DocumentsManager().getCurrent();
    if (currentDocument.editor.isChanged) {
      (0,external_UNSTABLE_elementorPackages_store_namespaceObject.dispatch)(markAsDirty());
      return;
    }
    (0,external_UNSTABLE_elementorPackages_store_namespaceObject.dispatch)(markAsPristine());
  });
}
;// CONCATENATED MODULE: ./packages/documents/src/sync/index.ts

;// CONCATENATED MODULE: ./packages/documents/src/store/index.ts

const initialState = {
  entities: {},
  activeId: null,
  hostId: null
};
function hasActiveEntity(state) {
  return !!(state.activeId && state.entities[state.activeId]);
}
function createSlice() {
  return (0,external_UNSTABLE_elementorPackages_store_namespaceObject.addSlice)({
    name: 'documents',
    initialState,
    reducers: {
      init(state, {
        payload
      }) {
        state.entities = payload.entities;
        state.hostId = payload.hostId;
        state.activeId = payload.activeId;
      },
      activateDocument(state, action) {
        state.entities[action.payload.id] = action.payload;
        state.activeId = action.payload.id;
      },
      startSaving(state) {
        if (hasActiveEntity(state)) {
          state.entities[state.activeId].isSaving = true;
        }
      },
      endSaving(state, action) {
        if (hasActiveEntity(state)) {
          state.entities[state.activeId] = {
            ...action.payload,
            isSaving: false
          };
        }
      },
      startSavingDraft: state => {
        if (hasActiveEntity(state)) {
          state.entities[state.activeId].isSavingDraft = true;
        }
      },
      endSavingDraft(state, action) {
        if (hasActiveEntity(state)) {
          state.entities[state.activeId] = {
            ...action.payload,
            isSavingDraft: false
          };
        }
      },
      markAsDirty(state) {
        if (hasActiveEntity(state)) {
          state.entities[state.activeId].isDirty = true;
        }
      },
      markAsPristine(state) {
        if (hasActiveEntity(state)) {
          state.entities[state.activeId].isDirty = false;
        }
      }
    }
  });
}
;// CONCATENATED MODULE: ./packages/documents/src/init.ts


function init() {
  initStore();
}
function initStore() {
  const slice = createSlice();
  syncStore(slice);
}
;// CONCATENATED MODULE: ./packages/documents/src/store/selectors.ts

const selectEntities = state => state.documents.entities;
const selectActiveId = state => state.documents.activeId;
const selectHostId = state => state.documents.hostId;
const selectActiveDocument = (0,external_UNSTABLE_elementorPackages_store_namespaceObject.createSelector)(selectEntities, selectActiveId, (entities, activeId) => activeId && entities[activeId] ? entities[activeId] : null);
const selectHostDocument = (0,external_UNSTABLE_elementorPackages_store_namespaceObject.createSelector)(selectEntities, selectHostId, (entities, hostId) => hostId && entities[hostId] ? entities[hostId] : null);
;// CONCATENATED MODULE: ./packages/documents/src/hooks/use-active-document.ts


function useActiveDocument() {
  return (0,external_UNSTABLE_elementorPackages_store_namespaceObject.useSelector)(selectActiveDocument);
}
;// CONCATENATED MODULE: external "React"
var external_React_namespaceObject = React;
;// CONCATENATED MODULE: ./packages/documents/src/hooks/use-active-document-actions.ts


function useActiveDocumentActions() {
  const save = (0,external_React_namespaceObject.useCallback)(() => (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.runCommand)('document/save/default'), []);
  const saveDraft = (0,external_React_namespaceObject.useCallback)(() => (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.runCommand)('document/save/draft'), []);
  const saveTemplate = (0,external_React_namespaceObject.useCallback)(() => (0,external_UNSTABLE_elementorPackages_v1Adapters_namespaceObject.openRoute)('library/save-template'), []);
  return {
    save,
    saveDraft,
    saveTemplate
  };
}
;// CONCATENATED MODULE: ./packages/documents/src/hooks/use-host-document.ts


function useHostDocument() {
  return (0,external_UNSTABLE_elementorPackages_store_namespaceObject.useSelector)(selectHostDocument);
}
;// CONCATENATED MODULE: ./packages/documents/src/hooks/index.ts



;// CONCATENATED MODULE: ./packages/documents/src/index.ts



init();
(window.__UNSTABLE__elementorPackages = window.__UNSTABLE__elementorPackages || {}).documents = __webpack_exports__;
/******/ })()
;