import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const savedTimeInSeconds = parseFloat(
  localStorage.getItem('videoplayer-current-time')
);

if (!isNaN(savedTimeInSeconds)) {
  player.setCurrentTime(savedTimeInSeconds);
}

player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTimeInSeconds = data.seconds;

    localStorage.setItem('videoplayer-current-time', currentTimeInSeconds);
  }, 1000)
);
