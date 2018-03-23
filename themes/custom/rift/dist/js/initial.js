/*! grunt-grunticon Stylesheet Loader - v2.1.6 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */

!function(){function e(e,n,t){"use strict";var o=window.document.createElement("link"),r=n||window.document.getElementsByTagName("script")[0],a=window.document.styleSheets;return o.rel="stylesheet",o.href=e,o.media="only x",r.parentNode.insertBefore(o,r),o.onloadcssdefined=function(e){for(var n,t=0;t<a.length;t++)a[t].href&&a[t].href===o.href&&(n=!0);n?e():setTimeout(function(){o.onloadcssdefined(e)})},o.onloadcssdefined(function(){o.media=t||"all"}),o}function n(e,n){e.onload=function(){e.onload=null,n&&n.call(e)},"isApplicationInstalled"in navigator&&"onloadcssdefined"in e&&e.onloadcssdefined(n)}!function(t){var o=function(r,a){"use strict";if(r&&3===r.length){var i=t.navigator,c=t.document,s=t.Image,d=!(!c.createElementNS||!c.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!c.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||t.opera&&i.userAgent.indexOf("Chrome")===-1||i.userAgent.indexOf("Series40")!==-1),l=new s;l.onerror=function(){o.method="png",o.href=r[2],e(r[2])},l.onload=function(){var t=1===l.width&&1===l.height,i=r[t&&d?0:t?1:2];t&&d?o.method="svg":t?o.method="datapng":o.method="png",o.href=i,n(e(i),a)},l.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",c.documentElement.className+=" grunticon"}};o.loadCSS=e,o.onloadCSS=n,t.grunticon=o}(this),function(e,n){"use strict";var t=n.document,o="grunticon:",r=function(e){if(t.attachEvent?"complete"===t.readyState:"loading"!==t.readyState)e();else{var n=!1;t.addEventListener("readystatechange",function(){n||(n=!0,e())},!1)}},a=function(e){return n.document.querySelector('link[href$="'+e+'"]')},i=function(e){var n,t,r,a,i,c,s={};if(n=e.sheet,!n)return s;t=n.cssRules?n.cssRules:n.rules;for(var d=0;d<t.length;d++)r=t[d].cssText,a=o+t[d].selectorText,i=r.split(");")[0].match(/US\-ASCII\,([^"']+)/),i&&i[1]&&(c=decodeURIComponent(i[1]),s[a]=c);return s},c=function(e){var n,r,a,i;a="data-grunticon-embed";for(var c in e){i=c.slice(o.length);try{n=t.querySelectorAll(i)}catch(s){continue}r=[];for(var d=0;d<n.length;d++)null!==n[d].getAttribute(a)&&r.push(n[d]);if(r.length)for(d=0;d<r.length;d++)r[d].innerHTML=e[c],r[d].style.backgroundImage="none",r[d].removeAttribute(a)}return r},s=function(n){"svg"===e.method&&r(function(){c(i(a(e.href))),"function"==typeof n&&n()})};e.embedIcons=c,e.getCSS=a,e.getIcons=i,e.ready=r,e.svgLoadedCallback=s,e.embedSVG=s}(grunticon,this)}();
(function(){'use strict';var f=[];function g(a){f.push(a);1===f.length&&l()}function m(){for(;f.length;)f[0](),f.shift()}if(window.MutationObserver){var n=document.createElement("div");(new MutationObserver(m)).observe(n,{attributes:!0});var l=function(){n.setAttribute("x",0)}}else l=function(){setTimeout(m)};function p(a){this.a=q;this.b=void 0;this.f=[];var b=this;try{a(function(a){r(b,a)},function(a){t(b,a)})}catch(c){t(b,c)}}var q=2;function u(a){return new p(function(b,c){c(a)})}function v(a){return new p(function(b){b(a)})}
function r(a,b){if(a.a===q){if(b===a)throw new TypeError("Promise settled with itself.");var c=!1;try{var d=b&&b.then;if(null!==b&&"object"===typeof b&&"function"===typeof d){d.call(b,function(b){c||r(a,b);c=!0},function(b){c||t(a,b);c=!0});return}}catch(e){c||t(a,e);return}a.a=0;a.b=b;w(a)}}function t(a,b){if(a.a===q){if(b===a)throw new TypeError("Promise settled with itself.");a.a=1;a.b=b;w(a)}}
function w(a){g(function(){if(a.a!==q)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0===a.a?"function"===typeof c?e(c.call(void 0,a.b)):e(a.b):1===a.a&&("function"===typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}p.prototype.g=function(a){return this.c(void 0,a)};p.prototype.c=function(a,b){var c=this;return new p(function(d,e){c.f.push([a,b,d,e]);w(c)})};
function x(a){return new p(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e===a.length&&b(h)}}var e=0,h=[];0===a.length&&b(h);for(var k=0;k<a.length;k+=1)a[k].c(d(k),c)})}function y(a){return new p(function(b,c){for(var d=0;d<a.length;d+=1)a[d].c(b,c)})};window.Promise||(window.Promise=p,window.Promise.resolve=v,window.Promise.reject=u,window.Promise.race=y,window.Promise.all=x,window.Promise.prototype.then=p.prototype.c,window.Promise.prototype["catch"]=p.prototype.g);}());

(function(){'use strict';function h(a){function b(){document.body?a():setTimeout(b,0)}b()};function v(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.g=document.createElement("span");this.f=-1;this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.g.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;";this.b.appendChild(this.h);this.c.appendChild(this.g);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function w(a,b,c){a.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:"+b+";"+c}function x(a){var b=a.a.offsetWidth,c=b+100;a.g.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.f!==b?(a.f=b,!0):!1}
function y(a,b){a.b.addEventListener("scroll",function(){x(a)&&null!==a.a.parentNode&&b(a.f)},!1);a.c.addEventListener("scroll",function(){x(a)&&null!==a.a.parentNode&&b(a.f)},!1);x(a)};function z(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.variant=c.variant||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"stretch";this.featureSettings=c.featureSettings||"normal"}var B=null;
z.prototype.a=function(a,b){var c=a||"BESbswy",C=b||3E3,k="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",g=document.createElement("div"),l=new v(c),m=new v(c),n=new v(c),d=-1,e=-1,f=-1,q=-1,r=-1,t=-1,p=this;return new Promise(function(a,b){function c(){null!==g.parentNode&&g.parentNode.removeChild(g)}
function u(){if(-1!==d&&-1!==e||-1!==d&&-1!==f||-1!==e&&-1!==f)if(d===e||d===f||e===f){if(null===B){var b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))}B?d===q&&e===q&&f===q||d===r&&e===r&&f===r||d===t&&e===t&&f===t||(c(),a(p)):(c(),a(p))}}h(function(){function a(){if(Date.now()-D>=C)c(),b(p);else{var A=document.hidden;if(!0===A||void 0===A)d=l.a.offsetWidth,e=m.a.offsetWidth,f=n.a.offsetWidth,
u();setTimeout(a,50)}}var D=Date.now();w(l,"sans-serif",k);w(m,"serif",k);w(n,"monospace",k);g.appendChild(l.a);g.appendChild(m.a);g.appendChild(n.a);document.body.appendChild(g);q=l.a.offsetWidth;r=m.a.offsetWidth;t=n.a.offsetWidth;a();y(l,function(a){d=a;u()});w(l,p.family+",sans-serif",k);y(m,function(a){e=a;u()});w(m,p.family+",serif",k);y(n,function(a){f=a;u()});w(n,p.family+",monospace",k)})})};window.FontFaceObserver=z;window.FontFaceObserver.prototype.check=z.prototype.a;}());

window.EYP = {};
window.EYP.utils = {};
window.EYP.config = {};
window.EYP.lang = {};
(function( win, undefined ){

    var lang = win.EYP.lang;

    lang.moreLinks = {
        "textDefault": "More",
        "textAlt": "Less"
    };

}( this ));

(function( win, undefined ){

    var EYP = win.EYP,
        utils = EYP.utils;

    // loadJS: load a JS file asynchronously. Included from https://github.com/filamentgroup/loadJS/
    function loadJS( src, cb ){
        "use strict";
        var ref = window.document.getElementsByTagName( "script" )[ 0 ];
        var script = window.document.createElement( "script" );
        script.src = src;
        script.async = true;
        ref.parentNode.insertBefore( script, ref );
        if (cb && typeof( cb ) === "function") {
            script.onload = cb;
        }
        return script;
    }

    utils.loadJS = loadJS;

    /*!
    loadCSS: load a CSS file asynchronously.
    [c]2016 @scottjehl, Filament Group, Inc.
    Licensed MIT
    */
    var loadCSS = function( href, before, media ){
        // Arguments explained:
        // `href` [REQUIRED] is the URL for your CSS file.
        // `before` [OPTIONAL] is the element the script should use as a reference for injecting our stylesheet <link> before
        // By default, loadCSS attempts to inject the link after the last stylesheet or script in the DOM. However, you might desire a more specific location in your document.
        // `media` [OPTIONAL] is the media type or query of the stylesheet. By default it will be 'all'
        var doc = w.document;
        var ss = doc.createElement( "link" );
        var ref;
        if( before ){
            ref = before;
        }
        else {
            var refs = ( doc.body || doc.getElementsByTagName( "head" )[ 0 ] ).childNodes;
            ref = refs[ refs.length - 1];
        }

        var sheets = doc.styleSheets;
        ss.rel = "stylesheet";
        ss.href = href;
        // temporarily set media to something inapplicable to ensure it'll fetch without blocking render
        ss.media = "only x";

        // wait until body is defined before injecting link. This ensures a non-blocking load in IE11.
        function ready( cb ){
            if( doc.body ){
                return cb();
            }
            setTimeout(function(){
                ready( cb );
            });
        }
        // Inject link
            // Note: the ternary preserves the existing behavior of "before" argument, but we could choose to change the argument to "after" in a later release and standardize on ref.nextSibling for all refs
            // Note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
        ready( function(){
            ref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) );
        });
        // A method (exposed on return object for external use) that mimics onload by polling until document.styleSheets until it includes the new sheet.
        var onloadcssdefined = function( cb ){
            var resolvedHref = ss.href;
            var i = sheets.length;
            while( i-- ){
                if( sheets[ i ].href === resolvedHref ){
                    return cb();
                }
            }
            setTimeout(function() {
                onloadcssdefined( cb );
            });
        };

        function loadCB(){
            if( ss.addEventListener ){
                ss.removeEventListener( "load", loadCB );
            }
            ss.media = media || "all";
        }

        // once loaded, set link's media back to `all` so that the stylesheet applies once it loads
        if( ss.addEventListener ){
            ss.addEventListener( "load", loadCB);
        }
        ss.onloadcssdefined = onloadcssdefined;
        onloadcssdefined( loadCB );
        return ss;
    };

    utils.loadCSS = loadCSS;

    // getMeta function: get a meta tag by name
    // NOTE: meta tag must be in the HTML source before this script is included in order to guarantee it'll be found
    function getMeta( metaname ){
        var metas = window.document.getElementsByTagName( "meta" );
        var meta;
        for( var i = 0; i < metas.length; i ++ ){
            if( metas[ i ].name && metas[ i ].name === metaname ){
                meta = metas[ i ];
                break;
            }
        }
        return meta;
    }

    utils.getMeta = getMeta;

    // Simple debounce (via http://davidwalsh.name/javascript-debounce-function)
    var debounce = function( func, wait, immediate ) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;

            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };

            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if ( callNow ) func.apply(context, args);
        };
    };

    utils.debounce = debounce;

    // cookie function from https://github.com/filamentgroup/cookie/
    function cookie( name, value, days ){
        // if value is undefined, get the cookie value
        if( value === undefined ){
            var cookiestring = "; " + window.document.cookie;
            var cookies = cookiestring.split( "; " + name + "=" );
            if ( cookies.length === 2 ){
                return cookies.pop().split( ";" ).shift();
            }
            return null;
        } else {
            var expires;
            // if value is a false boolean, we'll treat that as a delete
            if( value === false ){
                days = -1;
            }
            if ( days ) {
                var date = new Date();
                date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
                expires = "; expires="+date.toGMTString();
            }
            else {
                expires = "";
            }
            window.document.cookie = name + "=" + value + expires + "; path=/";
        }
    }

    utils.cookie = cookie;

    // Need to call grunticon at any point?
    utils.embedSVGs = false;

    // Translate “String Of Text” into “string-of-text”
    utils.slugify = function( text ) {
        return text
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/&/g, '')              // Replace & with ''
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-');        // Replace multiple - with single -
    }

    // Has an element scrolled into view?
    utils.isScrolledIntoView = function( el ) {
        var isVisible = false;

        if ( el.getBoundingClientRect() ) {
            var elemTop = el.getBoundingClientRect().top,
                elemBottom = el.getBoundingClientRect().bottom;

            isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        }

        return isVisible;
    }

}( this ));

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