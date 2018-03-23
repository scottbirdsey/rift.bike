// Init components/plugins on DOMready
(function( $ ){
    $( function(){
        $( "[data-set] > *" ).appendAround();

        $( "[data-append], [data-replace], [data-after], [data-before]" ).ajaxInclude();

        $( ".search-anchor").bind( "click", function( event ) {
        	onloadFocus();
        });

        $( document ).trigger( "enhance" );
    });
}( shoestring ));


function onloadFocus(){
    setTimeout(function() {
        document.getElementById('edit-keys--2').focus();
    }, 10);
}


