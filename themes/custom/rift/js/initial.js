(function( win, undefined ){

    // Enable JS strict mode
    "use strict";

    // Variables! The best.
    var EYP = win.EYP,
        utils = EYP.utils,
        docClasses = [ "enhanced" ],
        // grunticon config
        grunticonPath = document.getElementById( "grunticon" ),
        iconsDataSVG = "icons.data.svg.css",
        iconsDataPNG = "icons.data.png.css",
        iconsPNG = "icons.fallback.css",
        // Meta keywords
        fullJSKey = "fullJS",
        fullCSSKey = "fullCSS";

    EYP.is_enhanced = false;

/*
Enhancements for all browsers.
*/
    // Load full CSS
    var fullCSS = utils.getMeta( fullCSSKey );
    if ( fullCSS ) {
        utils.loadCSS( fullCSS.content );
    }

    // Grunticon
    if ( grunticonPath && grunticonPath.content ) {
        var path = grunticonPath.content;

        // load 'em
        utils.embedSVGs = function() {
            grunticon( [ path + iconsDataSVG, path + iconsDataPNG, path + iconsPNG ], function() {
                        grunticon.svgLoadedCallback();

                    } );
        };

        utils.embedSVGs();

        if ( grunticon.method ) {
            window.document.documentElement.className += " grunticon-" + grunticon.method;
        }
    }


/*
Mustard cuttin'.
*/
    if ( !( "querySelector" in document
        && "addEventListener" in window
        && "sessionStorage" in window
    ) ) {
        return;
    }

/*
Enhancements for QUALIFIED browsers.
*/

    // Yay! We passed!
    EYP.is_enhanced = true;

    // Flexbox support? (Specifically looking for `flex-wrap`.)
    var s = document.body || document.documentElement, s = s.style;
    if ( s.webkitFlexWrap == '' || s.msFlexWrap == '' || s.flexWrap == '' ) {
        docClasses.push( "supports-flex" );
    }

    // Font Loading!
    var fontsClass = "fonts-loaded";

    if ( sessionStorage.getItem( "fontsLoaded" ) === "loaded" ) {
        docClasses.push( fontsClass );
    } else {
        // Okay! Let’s watch for font events!
        var theSans = new FontFaceObserver( "TheSans", {
            weight: 400
        } );
        var theSansItalic = new FontFaceObserver( "TheSans", {
            style: "italic",
            weight: 400
        } );
        var theSansBold = new FontFaceObserver( "TheSans", {
            weight: 600
        } );

        // When the fonts above are loaded, we'll attach a .fonts-loaded class to the document. (Per https://www.filamentgroup.com/lab/font-events.html)
        // We'll also append the class to the `html`. (This can happen post-DOMready, we can't rely on our docClasses[] array. So we'll just append it to the `className`.)
        win.Promise
            .all( [
                theSans.check(),
                theSansItalic.check(),
                theSansBold.check(),
            ] )
            .then( function() {
                win.document.documentElement.className += " " + fontsClass;
                sessionStorage.setItem( "fontsLoaded" , "loaded" );
            } );
    }

    // Get scripts to load, if defined
    var fullJS = utils.getMeta( fullJSKey );

    if ( fullJS ) {
        utils.loadJS( fullJS.content );
    }

    // Add scoping classes to HTML element
    win.document.documentElement.className += " " + docClasses.join(" ");

}( this ));