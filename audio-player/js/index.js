console.log('10/60');

const player = document.querySelector('.main-container')
const playBtn = document.querySelector('.pl-pa')
const prevBtn = document.getElementById('prevSong')
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
let songIndex = 0;
 

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
    playBtn.src = 'assets/svg/pause.png'
    audio.play()
}

//Pause
function pauseSong () {
    player.classList.remove('play')
    cover.style.transform = 'scale(1)';
    playBtn.src = 'assets/svg/play.png'
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


// Next song 
function nextSongs (){
    songIndex++

    if (songIndex > songs.length -1){
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}
nextBtn.addEventListener('click', nextSongs)

//Prev song
function prevSongs (){
    songIndex--

    if (songIndex < 0){
        songIndex = songs.length-1
    }

    loadSong(songs[songIndex])
    playSong()
}
prevBtn.addEventListener('click', prevSongs);