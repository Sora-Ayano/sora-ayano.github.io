(function () {
  window.addEventListener('load', () => {
    function setVideoClass(el) {
      if(el.classList.contains('is-playing')) {
        el.classList.remove('is-playing');
        el.classList.add('is-paused');
      } else {
        el.classList.remove('is-paused');
        el.classList.add('is-playing');
      }
    }

    function setVideoPlayer (videos, target) {
      const targetParent = target.querySelector('.video-js');
      const isPaused = targetParent.classList.contains('vjs-paused');
      const targetVideo = target.querySelector('video');

      for(const video of videos) {
        const movie = video.querySelector('video');

        if(!movie.paused) {
          setVideoClass(video)
          movie.pause();
        }
      }

      if(isPaused) {
        setVideoClass(target)
        targetVideo.play();
      }

      targetVideo.addEventListener('ended', () => {
        console.log('end')
        setVideoClass(target);
      })
    }

    function initVideoPlayer() {
      setVideoPlayer(btns, this);
    }

    const btns = document.querySelectorAll('.sample-voice-list .js-bc-player');

    for(const btn of btns) {
      btn.addEventListener('click', initVideoPlayer)
    }
  })
}());