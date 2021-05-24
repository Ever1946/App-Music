const mContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const pContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

const songs = ['hey', 'Shotgun'];

let songIndex = 1


loadSong(songs[songIndex])

function loadSong(songs){
    title.innerText = songs
    audio.src = `music/${songs}.mp3`
    cover.src = `images/${songs}.jpg`
}

function playSong() {
    mContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
  
    audio.play();
  }
  
  // Pause song
  function pauseSong() {
    mContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
    audio.pause();
  }
  

function prevSong() {
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
    
}

function nextSong() {
    songIndex--

    if(songIndex < songs.length - 1){
       songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
    
}
    
    
function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
    /* console.log(e.srcElement.currentTime) */
}

function setProgress(e) {
    const width = this.clientWidth
    const clicX = e.offsetX
    const duration = audio.duration
    
    audio.currentTime = (clicX / width) * duration
}
//Event listeners

playBtn.addEventListener('click', () =>{
    const isPlaying = mContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})


//Cambiar cancion

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

pContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong) 
