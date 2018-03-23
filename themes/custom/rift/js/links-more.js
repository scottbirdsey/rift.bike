/*
Component: Photomap
*/
(function( $ ) {

    "use strict";

    var componentName = "additional",
        enhancedAttr = "data-enhanced-" + componentName,
        initSelector = "." + componentName + ":not([" + enhancedAttr + "])";

    $.fn[ componentName ] = function(){

        var lang = window.EYP.lang,
            count = 0;

        // Loop through each `.additional` block.
        return this.each( function(){

            var $target = $( this ),
                hiddenClass = "is-closed",
                link = '<a class="more" data-alt="' + lang.moreLinks.textAlt + '" href="#{id}">' + lang.moreLinks.textDefault + '</a>';

            // Find the paragraph immediately before this block.
            var $sibling = $target.prev( "p" );

            // Did we find a paragraph? Great. Let’s add the toggling behavior.
            if ( $sibling.length === 1 ) {
                // Set an identifier for this content block.
                var id = "additional-content-" + count;
                // Now, we’ll apply the identifier to the `id` of the content block AND the `href` of the link.
                var $link = $( link.split( "{id}" ).join( id ) );
                $target.attr( "id", id );

                // Drop the link into the paragraph.
                $sibling.append( $link );

                // Attach an event handler to the $link.
                $link
                    .bind( "click", function() {
                        /*
                        Define some variables:
                         - $link refers to this, uh, link
                         - $target uses the $link’s `href` to target the .additional block we’ll expand or collapse
                         - text is the text inside $link
                         - alt is the value of $link’s [data-alt] attribute
                        */
                        var $link = $( this ),
                            $target = $( "#" + $link.attr( "href" ).split( "#" )[ 1 ] ),
                            text = $link.text(),
                            alt = $link.attr( "data-alt" );

                        // Let’s swap the text shown in the link (from MORE to LESS, or vice versa)
                        $link.html( alt );
                        $link.attr( "data-alt", text );

                        // Show/hide the $target: if $target currently has the hiddenClass, remove it; otherwise, add it.
                        if ( $target.is( "." + hiddenClass ) ) {
                            $target.removeClass( hiddenClass );
                        } else {
                            $target.addClass( hiddenClass );
                        }

                        // Prevent the default link behavior
                        return false;
                    } );

                // Hide the block.
                $target.addClass( hiddenClass );
            }

            // Increment the counter
            count++;

        });
    };

    // auto-init on enhance (which is called on domready)
    $( document ).bind( "enhance", function( e ){
        var $sel = $( e.target ).is( initSelector ) ? $( e.target ) : $( initSelector, e.target );
        $sel[ componentName ]().attr( enhancedAttr, "true" );
    });

}( shoestring ));
