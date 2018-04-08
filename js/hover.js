$(document).ready(function () {
    $(".navButton").hover(function (){
        $(this).css("font-weight", "bold");
        $(this).css("font-size", "1.8em");
    }, function(){
        $(this).css("font-weight", "normal");
        $(this).css("font-size", "1.5em");
    });

    $( function() {
        $( document ).tooltip();
    } );  $( function() {
        $( document ).tooltip();
    } );

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    // Get the header
        let header = document.getElementById("navSection");

    // Get the offset position of the navbar
        let sticky = navSection.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});


