import $ from 'jquery'

var AUTOHIDEELEM = undefined;

$(document).ready(function () {
    setGetStartedButtonEventListener();
});

/**
 * Auto hide navigation bar function.
 * 
 * Currently unused function.
 */
function activateNavbarAutohide() {
    AUTOHIDEELEM = $(".autohide");
    AUTOHIDEELEM.hide();
    var lastScrollTop = 0, delta = 10;
    $(window).scroll(function () {
        var nowScrollTop = $(this).scrollTop();
        var beyondDelta = (Math.abs(lastScrollTop - nowScrollTop) >= delta);
        var beyondPresentation = (nowScrollTop > $("#presentation").height());
        if (beyondDelta) {
            if (beyondPresentation) {
                if (nowScrollTop > lastScrollTop) {
                    //Scroll down
                    applyScrollClass(AUTOHIDEELEM, "down");
                } else {
                    //Scroll up
                    applyScrollClass(AUTOHIDEELEM, "up");
                }
                lastScrollTop = nowScrollTop;
                //After scroll effect
                if (AUTOHIDEELEM.is(":hidden"))
                    AUTOHIDEELEM.show();
            } else {
                applyScrollClass(AUTOHIDEELEM, "down");
            }
        }
    });
}

/**
 * Apply scroll class.
 * 
 * Currently unused function.
 */
function applyScrollClass(elem, action){
    if (action == "up"){
        elem.removeClass("scrolled-down");
        elem.addClass("scrolled-up");
    } else if (action == "down") {
        elem.removeClass("scrolled-up");
        elem.addClass("scrolled-down");
    }
}

/**
 * Apply event listener to "Get Started" button.
 */
function setGetStartedButtonEventListener(){
    var button = $("#get-started-button");
    button.on('click', function() {
        setScrollToTop();
    });
}

/**
 * Sets scroll to top of navigation bar.
 */
function setScrollToTop(){
    var nav = $("nav")[0];
    var newHeight = nav.offsetTop;
    document.body.scrollTop = newHeight;
    document.documentElement.scrollTop = newHeight;
}
