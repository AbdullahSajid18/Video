const myVideo = document.querySelector('.video-container') 

const playVid = () => {
    myVideo.play()
}

const pauseVid = () => {
    myVideo.pause()
}

const restartVid = ()=> {
    myVideo.load()
}