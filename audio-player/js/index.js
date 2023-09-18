const player = document.querySelector('.main-container')
const playBtn = document.querySelector('.pl-pa')
const prevBtn = document.getElementById('prevSong')
const nextBtn = document.getElementById('nextSong')
const currentTimes = document.querySelector('.currentTime')
const durationTime = document.querySelector('.durationTime')
const progressBar = document.getElementById('song-length')
const songExecutor = document.querySelector('.song-executor')
const songName = document.querySelector('.song-name')
const cover = document.getElementById('cover')
const audio = document.getElementById('audio')
const backImg = document.querySelector('.back-img')



// название песен 
const songs = ['Don t Hurt Yourself', 'Don t Start Now' , 'Don t Speak' , 'Moi Lolita' , 'Incognito','Love Like Mine', 'MIDDLE OF THE NIGHT', 'Ceux qui rêvent' , 'Mental Funeral'];
//артисты
const artist = ['Beyonce', 'Dua Lipa' , 'No Doubt' , 'Alizée' , 'bludnymph' , 'Stela Cole', 'Elley Duhé', 'Pomme', 'Ehle ']
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


//Время в нормальный формат
function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
       seconds = "0" + seconds;
    }
    return `${minutes}:${seconds}`;
 }


// Progress bar 
function upProgress(event){
    const {duration, currentTime} = event.srcElement
    const progressPercent = (currentTime / duration) * 100
    progressBar.value = `${progressPercent}`
    currentTimes.innerHTML = formatTime(currentTime);
    durationTime.innerHTML = formatTime(duration);
}
audio.addEventListener('timeupdate', upProgress)


// перемотка 
function setProgress (event){
   const width = this.clientWidth
   const clickX = event.offsetX
   const duration = audio.duration
   audio.currentTime = ( clickX / width) * duration
}
progressBar.addEventListener('click', setProgress)


//auto play
audio.addEventListener('ended', nextSongs)

duration.setMinutes(min [sec])
alert(duration)

