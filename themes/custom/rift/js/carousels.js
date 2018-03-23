/*
Carousel helpers:
- Wraps .carousel elements in HTML shims, so appendAround.js can reposition the carousel at different breakpoints
- Sets the height of the images in each carousel to be a uniform height
*/
(function( $ ) {
    "use strict";

    var componentName = "eyp-carousel",
        enhancedAttr = "data-enhanced-" + componentName,
        initSelector = "." + componentName + ":not([" + enhancedAttr + "])";

    // Function to calculate heights in our carousel
    var fixCarouselHeight = function( carousel ) {
        var min = 0,
            $carousel = $( carousel ),
            $imgs = $carousel.find( "img" );

        $imgs.each( function( count ) {
            var $img = $( this );

            // Clear out any inline heights, and let the CSS take over.
            $img.attr( "style", "" );

            // Measure the height of the image
            var height = $img.height();

            if ( count === 0 || height < min ) {
                min = height;
            }
        } );

        if ( min > 0 ) {
            $( "img",  $carousel ).height( min );
        }
    };

    // Expose it
    EYP.utils.fixCarouselHeight = fixCarouselHeight;

    var fixAllCarouselHeights = function() {
        $( "." + componentName ).each( function() {
            EYP.utils.fixCarouselHeight( this );
        } );
    };

    // Resize handler
    $( window ).bind( "resize", EYP.utils.debounce( function() {
        fixAllCarouselHeights();
    }, 250 ) );

    // Process the carousels
    $.fn[ componentName ] = function() {
        return this.each( function( count ) {

            // The appendAround library needs `[data-set]` blocks to move content around, so let’s define a markup “template” we’ll use for each carousel.
            var shim = '<div class="carousel-wrap carousel-{slot}" data-set="carousel-{id}"></div>';

            // Variables! Are! Great!
            var $this = $( this ),
                $container = $this.parent(),
                shim = shim.split( "{id}" ).join( count );

            // Let’s take our little shim “template”, and drop in the right slots
            var shimDefault = shim.split( "{slot}" ).join( "default" ),
                shimWide = shim.split( "{slot}" ).join( "secondary" );

            // Insert our shim elements into the document
            $( shimDefault ).insertBefore( $this );
            $( shimWide ).prependTo( $container );

            // There’s no .wrap() in shoestring ( ¯\_(ツ)_/¯ ), so we’ll make do with this for now.
            $this.appendTo( $( "[data-set=carousel-" + count + "].carousel-default" ) );

            $( "[data-set] > *", $container ).appendAround();

            // Now that we’ve added the appendAround shims, let’s add our height fixer!
            $this.bind( "create.carousel ajaxIncludeResponse", function() {
                imagesLoaded( $this[ 0 ], function() {
                    EYP.utils.fixCarouselHeight( this );
                } );
            } )

            // And let’s *also* run our height fixer after the images have loaded. (via http://imagesloaded.desandro.com/v3/)
            imagesLoaded( $this[ 0 ], function() {
                EYP.utils.fixCarouselHeight( $this[ 0 ] );
            } );
        });
    };

    // auto-init on enhance (which is called on domready)
    $( document ).bind( "enhance", function( e ){
        var $sel = $( e.target ).is( initSelector ) ? $( e.target ) : $( initSelector, e.target );
        $sel[ componentName ]().attr( enhancedAttr, "true" );
    });

}( shoestring ));
