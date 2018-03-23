/*
Component: Photomap
*/
(function( $ ) {
    "use strict";

    var componentName = "photomap",
        enhancedAttr = "data-enhanced-" + componentName,
        initSelector = "." + componentName + ":not([" + enhancedAttr + "])";

    $.fn[ componentName ] = function(){
        return this.each( function(){
            // Define some variables referring to this photomap, the `li` and `a` elements within it, and the class we’ll use to “open” the links.
            var $target = $( this ),
                $items = $target.find( "li" ),
                $links = $target.find( "a" ),
                activeClass = "is-open",
                titleId = $( this ).attr('data-title');

            // On small screens, the captions will appear *beneath* the image. So let’s insert an empty `div` to hold them. (We’ll use appendAround to shuttle the captions between this block and their “overlay” position on the image.)
            var $captions = $( '<div class="photomap-captions"></div>' ).insertAfter( $target );

            // Each `li` contains text for each “feature” shown on the photomap, but it also contains positioning information. Let’s cycle through each, and process them accordingly.
            $items.each( function() {
                var $this = $( this ),
                    $link = $this.find( "a" ),
                    style = $this.attr( "style" ),
                    thisClass = [];

                // Let’s grab the caption associated with each feature, keying off the `href` in each link.
                var id = $link.attr( "href" ).split( "#" )[ 1 ];
                var caption = $( "#" + id ).parent( "p" );

                // For each caption, we’ll append a `<p data-set="[id]">` element to our captions block, which we’ll eventually use for appendAround purposes.
                $captions.append( '<p data-set="' + id + '"></p>' ); 

                caption.attr( "data-set", id );

                // Take the `style` attribute on this list item, and apply it to the link!
                $link.attr( "style" ,  style );

                /*
                Parse the x/y coordinates to see if this caption is too far up (or down).
                */
                // Define some regular expressions
                var testX = /left\: ?(\d+)%/g,
                    testY = /top\: ?(\d+)%/g;

                // Execute the search
                var searchX = testX.exec( style ),
                    searchY = testY.exec( style );

                // Store the results
                var x = searchX[ 1 ],
                    y = searchY[ 1 ];

                // If this caption is too far up or down, apply the near-x / far-x and near-y / far-y classes.
                if ( x >= 70 ) {
                    thisClass.push( "far-x" );
                } else if ( x <= 30 ) {
                    thisClass.push( "near-x" );
                }
                if ( y >= 60 ) {
                    thisClass.push( "far-y" );
                } else if ( y <= 20 ) {
                    thisClass.push( "near-y" );
                }

                if ( thisClass.length > 0 ) {
                    $this.addClass( thisClass.join(" ") );
                }
            } );

            // Initialize appendAround
            $( "[data-set] > *", $target ).appendAround();

            // Event handlers for the circle links shown on the photomap
            $links
                .bind( "open", function() {
                    // When the “open” event is triggered, add the `activeClass` to the link *and* the caption
                    var $parent = $( this ).parent(),
                        slug = $( this ).attr( "href" ).split( "#" )[ 1 ],
                        $caption = $( "#" + slug ).parent();

                    $parent.addClass( activeClass );
                    $caption.addClass( activeClass );
                } )
                .bind( "close", function() {
                    // When the “close” event is triggered, REMOVE the `activeClass` from the link *and* its caption
                    var $parent = $( this ).parent(),
                        slug = $( this ).attr( "href" ).split( "#" )[ 1 ],
                        $caption = $( "#" + slug ).parent();

                    $parent.removeClass( activeClass );
                    $caption.removeClass( activeClass );
                } )
                .bind( "click", function() {
                    // If the link is “open” (i.e., it has the `activeClass`), then trigger the “close” event; otherwise if it’s “closed” (i.e., there’s no `activeClass`), then trigger the “open” event!
                    var $parent = $( this ).parent();

                    $parent.siblings().find( "a" ).trigger( "close" );

                    if ( $parent.is( "." + activeClass ) ) {
                        $( this ).trigger( "close" );
                    } else {
                        $( this ).trigger( "open" );
                    }

                    // Prevent the link from firing
                    return false;
                } );

            // Close the tabs if the user taps/clicks anywhere
            $( document ).bind( "click", function( e ) {
                var $target = $( e.target );
                var $parents = $target.parents();

                if ( !$parents.filter( $links ).length ) {
                    $links.trigger( "close" );
                }
            } );

            // It’s likely this will run _after_ grunticon does, so let’s re-add our SVGs to the document.
            EYP.utils.embedSVGs();

        });
    };

    // auto-init on enhance (which is called on domready)
    $( document ).bind( "enhance", function( e ){
        var $sel = $( e.target ).is( initSelector ) ? $( e.target ) : $( initSelector, e.target );
        $sel[ componentName ]().attr( enhancedAttr, "true" );
    });

}( shoestring ));
