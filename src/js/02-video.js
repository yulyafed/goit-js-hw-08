import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
    console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});


const onTimeUpdate = function (data) {
    console.log(data);
    localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onTimeUpdate,1000));


const playerCurrentTime = localStorage.getItem(STORAGE_KEY);

if (playerCurrentTime) {
    player.setCurrentTime(playerCurrentTime);
}
