const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

import '../videoPlayer/player.css';
import '../videoPlayer/progress.css';
import '../installDemos/installVisual.css';

console.log(progress);

//play + pause video

const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause"></i>';
  }
};

const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;
  setVideoProgress();
};

const setVideoProgress = () => {
  //video.currentTime = (+progress.value * video.duration) / 100

  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }

  timestamp.innerHTML = `${mins}:${seconds}`;
};

const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

//event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
