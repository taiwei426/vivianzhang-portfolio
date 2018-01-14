$(function(){
    function setPlayPause() {
        playPause('#search_final');
    }
    function playPause(video_id) {
        $(video_id).isOnScreen() == true ? $(video_id)[0].play() : $(video_id)[0].pause()
    };
    $.fn.isOnScreen = function(){
        var win = $(window);
        var viewport = {
            top : win.scrollTop()
        };
        viewport.bottom = viewport.top + win.height();
        var bounds = this.offset();
        bounds.bottom = bounds.top + this.outerHeight();
        var videoHeight = this.height();
        var videoHalfHeight = videoHeight / 2;
        var videoQuarterHeight = videoHeight / 4;
        return ( (bounds.top + videoHalfHeight) < viewport.bottom && ((bounds.bottom - videoQuarterHeight) > viewport.top) );
    };
    setPlayPause();
    $(window).scroll(function() {
        setPlayPause();
    });
})