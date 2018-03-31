$(document).ready(function () {
  $('video').each(function() {
    this.onclick = function () {
      var video = $('video').get()[0];
      video.currentTime = 0;
      video.play();
    }
  })
})
