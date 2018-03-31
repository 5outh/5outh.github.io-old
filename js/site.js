$(document).ready(function () {
  $('.video').click(function () {
    var video = $('video').get()[0];
    video.currentTime = 0;
    video.play();
  })
})
