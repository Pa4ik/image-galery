console.log('10/60');

// переключение кнопки плей и паузы 
let getImg = document.getElementsByClassName('pl-pa');    
for (let i = 0; i < getImg.length; i++) {
    getImg[i].onclick = function (objTarget) {
        let imgTarget = objTarget.target;
        let imgClick = imgTarget.getAttribute('data-replace');
        let imgSrc = imgTarget.src;

        imgTarget.setAttribute('data-replace',imgSrc);
        imgTarget.setAttribute('src',imgClick);    
    }
}




const player = document.querySelector('.main-container')
const playBtn = document.querySelector('.pl-pa')
const pverBtn = document.getElementById('prevSong')
const nextBtn = document.getElementById('nextSong')
const currentTime = document.querySelector('.currentTime')
const durationTime = document.querySelector('.durationTime')
const progressBar = document.getElementById('song-length')
const songExecutor = document.querySelector('.song-executor')
const songName = document.querySelector('.song-name')
const cover = document.getElementById('cover')
const audio = document.getElementById('audio')
const backImg = document.querySelector('.back-img')



// название песен 
const songs = ['Don t Hurt Yourself', 'Don t Start Now'];
//артисты
const artist = ['Beyonce', 'Dua Lipa']

// первая песня 
let songIndex = 1;
 

// init
function loadSong(song){
    songName.innerHTML = song
    audio.src = `assets/audio/${song}.mp3`
    cover.src = `assets/img/cover${songIndex + 1}.png`
    backImg.src = `assets/img/cover${songIndex + 1}.png`
    songExecutor.innerHTML = artist[songIndex]
}

loadSong(songs[songIndex])


//Play
function playSong () {
    player.classList.add('play')
    cover.style.transform =' scale(1.1)';
    audio.play()
}

//Pause
function pauseSong () {
    player.classList.remove('play')
    cover.style.transform = 'scale(1)';
    audio.pause()
}

//play-pause
playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')
    if(isPlaying){
        pauseSong()
    } else {
        playSong()
    }
})

