const beatPressedHandler = (e) => {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if (!audio) return;
    const beat = audio.parentElement;
    audio.currentTime = 0;
    audio.play();
    beat.classList.toggle('playing');
}

const resetTransition = function(e){
    if(e.propertyName !== 'transform'){
        return;
    }
    this.classList.remove('playing');
}

const beatKeys = document.querySelectorAll(".beat");
window.addEventListener('keydown', beatPressedHandler);
beatKeys.forEach(key => key.addEventListener("transitionend", resetTransition));