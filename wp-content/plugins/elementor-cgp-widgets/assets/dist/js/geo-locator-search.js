class GeoLocatorSearchHandler extends elementorModules.frontend.handlers.Base {

	getDefaultSettings() {
		//alert('get settings');

		return {
			selectors: {
				button: '.geo-locator-search__submit',
				icon: '#geo-locator-icon',
				input: '.geo-locator-search__input',
				form: '.geo-locator-search__form',
				selectBox: '#suggestion-box',
				//document: 'document',
			},
		};
	}

	getDefaultElements() {
		//alert('get default');

		const selectors = this.getSettings( 'selectors' );

		return {
			$button: this.$element.find( selectors.button ),
			$icon: this.$element.find( selectors.icon ),
			$input: this.$element.find( selectors.input ),
			$form: this.$element.find( selectors.form ),
			$selectBox: this.$element.find( selectors.selectBox ),
		};
	}

	bindEvents() {
		//alert('bind events');

		this.elements.$button.on( 'click', this.onButtonClick.bind( this ) );
		this.elements.$button.on( 'focusout', this.onFocusOut.bind( this ) );
		this.elements.$input.on( 'keyup', this.onInputKeyUp.bind( this ) );
		this.elements.$input.on( 'focusout', this.onFocusOut.bind( this ) );
		this.elements.$selectBox.on( 'keyup', this.onSelectBoxKeyUp.bind( this ) );
		this.elements.$selectBox.on( 'keydown', this.onSelectBoxKeyDown.bind( this ) );
		this.elements.$selectBox.on( 'click', this.onSelectBoxClick.bind( this ) );
		this.elements.$selectBox.on( 'focusout', this.onFocusOut.bind( this ) );


		//this.elements.$form.submit( 'click', this.buttonClick.bind( this ) );
	}

	onSelectBoxKeyUp( event ) {
		console.log('active=' + document.activeElement.getAttribute('aria-label') +
			'lat=' + document.activeElement.getAttribute('data-lat') +
			' map=' + document.activeElement.getAttribute('data-map-id') +
			' type=' + document.activeElement.getAttribute('data-map-type'));

		let lat = document.activeElement.getAttribute('data-lat');
		let lng = document.activeElement.getAttribute('data-lng');
		let mapID = document.activeElement.getAttribute('data-map-id');
		let mapType = document.activeElement.getAttribute('data-map-type');

		//console.log('key up selectbox');
		if (event.key === "Enter") {
			if ( isNaN( lat ) || isNaN( lng )) {
				// lat lng non numeric
			} else {
				event.preventDefault();
				//console.log('enter');
				if ( mapType == 'ramp' ) {
					window.RAMP.mapById(mapID).mapI.zoomToPoint({latitude: lat, longitude: lng});
					this.hideSelectBox();
					this.elements.$input.focus();
				}

			}
		}
		else if ( event.key === 'Tab' ) { // Tab within list, closes selectBox
			console.log('Tab key');
			event.preventDefault();
			//$(document.activeElement).not('.geo-locator-item').next().focus();

			if ( ! document.activeElement.classList.contains('geo-locator-first') ) {
				this.hideSelectBox();
			}
			//const selected = document.getElementsByClassName("geo-locator-selected");
			//selected[0].focus({preventScroll:true})
		}
	}

	onSelectBoxKeyDown( event ) {

	 if ( event.key === 'ArrowDown' ) {
			console.log('down key');
			event.preventDefault();
			//$(document.activeElement).next().focus();

			const currentIndex = this.listItems.indexOf(document.activeElement);
			//console.log('length=' + this.listItems.length);
			//console.log('currentIndex=' + currentIndex);
			const nextIndex = ( currentIndex + 1) % this.listItems.length;  // sneaky way to set to 0 at end of list
			//console.log('nextIndex=' + nextIndex);
			const nextListItem = this.listItems[nextIndex];

			// Focus on the next list item
			if (nextListItem) {
				nextListItem.focus();
			}
		}
		else if ( event.key === 'ArrowUp' ) {
			//console.log('up key');
			event.preventDefault();
			$(document.activeElement).prev().focus();
			//const selected = document.getElementsByClassName("geo-locator-selected");
			//selected[0].focus({preventScroll:true})
		}

	}

	onSelectBoxClick( event ) {
		console.log('active=' + document.activeElement.getAttribute('aria-label') +
			'lat=' + document.activeElement.getAttribute('data-lat') +
			' map=' + document.activeElement.getAttribute('data-map-id') +
			' type=' + document.activeElement.getAttribute('data-map-type'));

		let lat = document.activeElement.getAttribute('data-lat');
		let lng = document.activeElement.getAttribute('data-lng');
		let mapID = document.activeElement.getAttribute('data-map-id');
		let mapType = document.activeElement.getAttribute('data-map-type');

		//console.log('click selectbox');
		if ( isNaN( lat ) || isNaN( lng )) {
			// lat lng non numeric
		} else {
			if ( mapType == 'ramp' ) {
				window.RAMP.mapById(mapID).mapI.zoomToPoint({latitude: lat, longitude: lng});
				this.hideSelectBox();
				this.elements.$input.focus();
			}

		}
	}


	onButtonClick( event ) {
		event.preventDefault();
		this.hideSelectBox();

		if (this.elements.$input.val().length > 2 ) {
			this.fetchGeoLocator();
		}
	}

	onInputKeyUp( event ) {

		event.preventDefault();
		this.hideSelectBox();

		if (this.elements.$input.val().length > 2 ) {
			// debounce
			clearTimeout(this.timer);
			this.timer = setTimeout(() => {
				this.fetchGeoLocator();
			}, 800);
		}

	}

	onFocusOut ( event ) {

		console.log('onFocusOut target=' + event.relatedTarget);

		// do not hide selectBox for focusout to list item or submit button
		if ( event.relatedTarget ) {
			console.log('tagName=' + event.relatedTarget.tagName);
			if (event.relatedTarget.tagName == 'LI' ||
				event.relatedTarget.tagName == 'UL' ||
				event.relatedTarget.tagName == 'BUTTON') {
				return
			}
		}

		this.hideSelectBox();
	}

	onInit() {
		super.onInit();

		this.mapType = this.elements.$input.data( 'map-type' );
		this.mapID = this.elements.$input.data( 'map-id' );
		this.lang = this.elements.$input.data( 'lang' );

		console.log('rampID =' + this.mapID);

	}

	fetchGeoLocator() {

		this.elements.$icon.removeClass('fa fa-search');
		this.elements.$button.addClass('geo-locator-spinner nohover');
		this.query = this.elements.$input.val();

		let url = geo.geoLocatorApiUrl + '/?keys=geonames,nominatim,locate&lang=' + this.lang + '&q=' + this.query + '*';

		fetch( url )
			.then( ( response ) => response.json() )
			.then( ( data ) => {
				this.handleGeoLocator( data );
			} )
			.catch( ( error ) => {
    			console.error( 'Error:', error );
  			} );
	}

	handleGeoLocator ( data ) {

		this.elements.$icon.addClass('fa fa-search');
		this.elements.$button.removeClass('geo-locator-spinner nohover');

		this.hideSelectBox();
		console.log ('query=' + this.query);
		// for (const key in data) {
		// 	//console.log(`key=${key}: ${data[key]}`);
		// 	let prov = data[key]['province'];
		// 	let name = data[key]['name'];
		// 	console.log('name=' + name + ' prov=' + prov);
		// }

		if( typeof data !== 'undefined' && data !== 'internal server error'  ) {

			let selectBox = '<ul id="select-list" tabindex="-1">'; // tabindex=-1 to stop tab focus on UL, firefox with scrollbar
			if ( $.isEmptyObject( data ) ) {
				let noResult =  'No results found for ';
				if (this.lang == 'fr') {
					noResult = 'Aucun résultat trouvé pour ';
				}
				selectBox = selectBox.concat(`<li>${noResult}${this.query}</li>`);
			}

			let tabIndex = 0;
			let firstListItem = 'geo-locator-first';
			for ( const key in data ) {
				//console.log(`key=${key}: ${data[key]}`);
				let prov = data[key]['province'];
				let name = data[key]['name'];
				let tooltip = '';
				if (name) {
					name = name.split(',', 1)[0];  // remove text after first comma
					//console.log('name=' + name);

					tooltip = name;
					name = this.queryTextBold(this.query, name);

					if (prov && prov !== 'null') {
						name = name + ',<span class="item-prov"> ' + prov + '</span>';
						tooltip = tooltip + ', ' + prov;
					}

					let lat = data[key]['lat'];
					let lng = data[key]['lng'];
					let tag = data[key]['tag'];
					let tagType = '';
					if (Array.isArray(tag)) {
						if (tag[1]) {
							tagType = `<div class="item-type">&nbsp;${tag[1]}</div>`;
							tooltip = tooltip + ', ' + tag[1];
						}
					}

					//console.log('name=' + name);
					//console.log('lat=' + lat);
					//console.log('lng=' + lng);

					//console.log('close=' + this.elements.$selectBox);
					//let suggestionBox = this.elements.$selectBox;

					//let itemOnClick = `window.RAMP.mapById('${this.mapID}').mapI.zoomToPoint({ latitude: ${lat}, longitude: ${lng}});`;
					//let itemOnClick = ` handleZoom( ${lat}, ${lng}, '${this.mapID}')`;


					selectBox = selectBox.concat(`<li class="geo-locator-item geo-locator-tooltip ${firstListItem} "
 													  aria-label="${tooltip}"
 													  tabindex="${tabIndex}" 
 													  data-lat="${lat}"
 													  data-lng="${lng}"
 													  data-map-type="${this.mapType}"
 													  data-map-id="${this.mapID}">
 													  <div>${name}</div>${tagType}
 													  </li>`);
					firstListItem = '';
				}
			}

			selectBox = selectBox.concat('</ul>');
			this.showSelectBox(selectBox);

			//  widths to show tooltip
			const listWidth75 = $('#select-list').width() * .75; // 3/4 width
			const listWidth50 = $('#select-list').width() * .50; // half width
			const listWidth40 = $('#select-list').width() * .40; // .40 width
			const listWidth15 = $('#select-list').width() * .15; // .15 width

			$('#select-list li').each (function ( index ) {

				let listNameWidth = $(this).find('div').width();
				let listTypeWidth = $(this).find('div').next().width();

				//future reference - always returns ellipsis
				// let listItem = $(this).find('div')[0];
				// let computedStyle =  window.getComputedStyle(listItem);
				// console.log('c=' + computedStyle.getPropertyValue('text-overflow'));

				//console.log ('listNameWidth= ' + listNameWidth+ ' listTypeDiv=' + listTypeWidth );

				// show tooltip when ellipsis for name or type
				// ellipsis check above not working for flex items, so simulate by checking width of name and type
				if ( listNameWidth < listWidth75) {
					if ( (listNameWidth > listWidth50 && listTypeWidth > listWidth15) ||
						 (listNameWidth < listWidth50 && listTypeWidth > listWidth40) ) {
						// keep tooltip
					} else {
						$(this).removeClass('geo-locator-tooltip', index);
					}
				}
			});
		}

	}



	showSelectBox (selectBox) {
		//console.log('show selectBox');
		this.elements.$selectBox.html(selectBox);
		this.elements.$input.css('border-bottom-left-radius', 'initial');
		this.elements.$button.css('border-bottom-right-radius', 'initial');
		this.elements.$selectBox.show();

		this.listItems = Array.from(document.querySelectorAll('LI.geo-locator-item'));

	}

	hideSelectBox () {
		//console.log('hideSelectBox');
		this.elements.$selectBox.hide();
		this.elements.$selectBox.empty();

		this.elements.$input.css('border-bottom-left-radius', '25px');
		this.elements.$button.css('border-bottom-right-radius', '25px');

	}

	queryTextBold(query,name) {

		let searchText = name.toLowerCase();
		let search = query.trim().toLowerCase();

		const startIndex = searchText.indexOf(search);
		//console.log('searchText=' + searchText + ' search=' + search + ' startIndex=' + startIndex);

		if (startIndex !== -1) {
			const endIndex = startIndex + search.length - 1;
			let beforeBold = '', textBold = '', afterBold = '';

			//console.log(' endIndex=' ,  endIndex);

			if (startIndex > 0) {
				beforeBold = name.slice(0,startIndex);
				//console.log('beforeBold=' , beforeBold);
			}
			textBold = name.slice(startIndex,endIndex + 1);
			//console.log('textBold=' + textBold);

			let searchLength = searchText.length;
			if (endIndex < searchLength) {
				afterBold = name.slice(endIndex + 1);
				//console.log('afterBold=' + afterBold);
			}

			name = beforeBold + '<b>' + textBold + '</b>' + afterBold;
			//console.log('name=' + name);

		}
		return name;
	}



}

jQuery( window ).on( 'elementor/frontend/init', ( $ ) => {
   elementorFrontend.elementsHandler.attachHandler( 'geo-locator-search', GeoLocatorSearchHandler );
} );
