$(window).scroll(function(){
    //set container of topbar element
    var topbar = '.tab-bar';
    //when scrolled away from top
    if ( $('body').scrollTop() || $('html').scrollTop() > 0) {
        $( topbar ).slideUp();
    }
    //when scrolled back
    else {
        $( topbar ).slideDown();
    }
});
