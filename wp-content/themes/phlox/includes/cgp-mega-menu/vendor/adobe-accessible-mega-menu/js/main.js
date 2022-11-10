/*
Copyright © 2013 Adobe Systems Incorporated.

Licensed under the Apache License, Version 2.0 (the “License”);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an “AS IS” BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/*jslint browser: true */
/*global jQuery */
if (jQuery) {
  (function ($) {
    'use strict';
    $(document).ready(function () {
      // initialize the megamenu
      $('.cgp-mega-menu-wrap').accessibleMegaMenu({
        /* prefix for generated unique id attributes, which are required 
           to indicate aria-owns, aria-controls and aria-labelledby */
        uuidPrefix: 'accessible-megamenu',

        /* css class used to define the megamenu styling */
        menuClass: 'nav-menu',

        /* css class for a top-level navigation item in the megamenu */
        topNavItemClass: 'menu-item',

        /* css class for a megamenu panel */
        panelClass: 'sub-menu-panel',

        /* css class for a group of items within a megamenu panel */
        panelGroupClass: 'sub-menu-group',

        /* css class for the hover state */
        hoverClass: 'hover',

        /* css class for the focus state */
        focusClass: 'focus',

        /* css class for the open state */
        openClass: 'open',

        toggleButtonClass: 'cgp-mega-menu-toggle',
      });

      // hack so that the megamenu doesn't show flash of css animation after the page loads.
      setTimeout(function () {
        $('body').removeClass('init');
      }, 500);
    });
  })(jQuery);
}
