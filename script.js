const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')
const screenPlay = document.getElementById('screen-play')

function toggleVideoStatus() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function updatePlayIcon() {
  if (video.paused) {
    screenPlay.style.display = 'block'
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    screenPlay.style.display = 'none'
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100

  let mins = Math.floor(video.currentTime / 60)
  mins < 10 && (mins = `0${mins}`)

  let secs = Math.floor(video.currentTime % 60)
  secs < 10 && (secs = `0${secs}`)

  timestamp.innerHTML = `${mins}:${secs}`
}

function stopVideo() {
  video.currentTime = 0
  video.pause()
}

function setVideoProgress() {
  video.currentTime = (progress.value * video.duration) / 100
}

video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

screenPlay.addEventListener('click', () =>  {
  toggleVideoStatus()
  updatePlayIcon()
})

play.addEventListener('click', toggleVideoStatus)
stop.addEventListener('click', stopVideo)
progress.addEventListener('change', setVideoProgress)
