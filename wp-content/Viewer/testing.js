
    // full screen map button click
    jQuery( document ).ready( function( $ ) {
    $( "#hfe-fullscreen-button" ).click( function( e ) {
        e.preventDefault();
        $('.myMap rv-mapnav-button[name="fullscreen"] button' ).trigger( 'click' );
    });
});

    document.addEventListener('fullscreenchange', (event) => {
    console.log('fullscreen=' + document.fullScreenElement);

    if (document.fullscreenElement) {
    console.log(
    `Element: ${document.fullscreenElement.id} entered fullscreen mode.`
    );
} else {
    console.log("Leaving fullscreen mode.");
    // window.location.reload();
    //$('.myMap rv-mapnav-button[name="fullscreen"] button' ).trigger( 'click' );
}

    if (document.fullScreenElement == null) {
    //            //alert('goodbye');
    // window.location.reload();
}

});
