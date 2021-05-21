const preventToLoadingVideo = () => {
    $('*[data-video=6200113649001]').click(function () {
        $('#vjs_video_3 video').attr('controls', 'true');
        $('#vjs_video_3 video').attr('preload', 'none');
    });
}

preventToLoadingVideo();
