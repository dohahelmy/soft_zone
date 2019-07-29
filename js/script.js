// Navbar changes on scroll

function nav_scroll(){
    var scrollTop = 0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 100) {
            $('#logo').attr('src', 'img/logo-mini.png');
        } else if (scrollTop < 100) {
            $('#logo').attr('src', 'img/logo.png');
        }
    });
}



$(document).ready(function(){
    nav_scroll();
    // smooth_page_scroll();
});
