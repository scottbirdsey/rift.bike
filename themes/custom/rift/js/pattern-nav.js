/*
Component: Snippets navigation
*/
(function( $ ) {

    "use strict";

    // auto-init on enhance (which is called on domready)
    $( document ).bind( "enhance", function( e ){

        var $sections = $( ".tmpl-patterns > h2" );
        if ( $sections.length ) {

            /* Functions to set the active navigation as the user scrolls */
            var sectionActive = function( id ) {
                var $navLinks = $( ".nav-snippets a" );

                $navLinks.attr( "class", "" );

                $( "a[href='#" + id + "']" ).attr( "class", "is-active" );
            };

            var sectionVisible = EYP.utils.debounce( function() {
                var visible = [];

                $sections.each( function() {
                    var section = this;

                    if ( EYP.utils.isScrolledIntoView( section ) ) {
                        visible.push( section );
                    }
                } );

                if ( visible.length ) {
                    sectionActive( visible[ 0 ].id )
                }
            }, 100 );

            // Let’s create the navigation bar, and drop it into the body
            $( '<div class="nav-snippets" id="nav"><nav><ul></ul></nav></div>' ).appendTo( "body" );
            var $nav = $( ".nav-snippets ul" );

            $sections.each( function( count ) {
                var $section = $( this ),
                    text = $section.text(),
                    slug = "sect-" + count;

                $section.attr( "id", slug );

                $( '<li><a href="#' + slug + '">' + text + '</a></li>' ).appendTo( $nav );
            } );

            $( "a", $nav ).bind( "click", function() {
                var id = $( this ).attr( "href" ).split( "#" )[ 1 ];
                sectionActive( id );
            } );

            // Set the active nav to fire on scroll, and, well, now!
            $( window ).bind( "scroll", sectionVisible );
            sectionVisible();
        }

    });

}( shoestring ));
