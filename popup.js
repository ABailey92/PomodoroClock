document.addEventListener("DOMContentLoaded", () => {
  const playOrPause = document.querySelector('.play')
  const stop = document.querySelector('.stop')
  let seconds = document.querySelector('.secs')
  let minutes = document.querySelector('.mins')
  let modal = document.querySelector('.modal')
  let close = document.querySelector('.modal-close')
  let alarm = document.querySelector('#alarm')

  let isPlaying = false
  let stopOrStart;

  playOrPause.addEventListener("click", () => {
    isPlaying = !isPlaying

    if (isPlaying) {
      
      stopOrStart = setInterval(() => {
        if (seconds.innerText === "00") {
          seconds.innerText = "59"
        } else {
          let secs = Number(seconds.innerText)
          secs--
          seconds.innerText = secs < 10 ? "0" + String(secs) : String(secs)
        }
    
        if (seconds.innerText === "59") {
         let mins = Number(minutes.innerText.slice(0, 2))
          mins--
          minutes.innerText = String(mins) + ":"
        }
      }, 1000)
    }
    else clearInterval(stopOrStart)
  })
  stop.addEventListener("click", () => {
    isPlaying = false
    clearInterval(stopOrStart)
    seconds.innerText = "00"
    minutes.innerText = "25:"
    modal.style.visibility = "visible"
    alarm.play()
  })


  if (isPlaying) {
    stopOrStart()
  }

  close.addEventListener("click", () => {
    modal.style.visibility = 'hidden'
    alarm.pause();
  })

  if (minutes.innerText === "00") {
    clearInterval(stopOrStart)
    seconds.innerText = "00"
    minutes.innerText = "25:"
    modal.style.visibility = "visible"
    alarm.play()
  }
})