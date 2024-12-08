//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var nav = $("nav")[0];
    var HighThreshold = nav.offsetTop + nav.offsetHeight;
    var LowThreshold = nav.offsetTop;
    if (
        document.body.scrollTop > HighThreshold ||
        document.documentElement.scrollTop > HighThreshold
    ) {
        mybutton.style.display = "block";
    } else if (
        document.body.scrollTop <= LowThreshold ||
        document.documentElement.scrollTop <= LowThreshold
    ) {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    var nav = $("nav")[0];
    var newHeight = nav.offsetTop;
    document.body.scrollTop = newHeight;
    document.documentElement.scrollTop = newHeight;
}