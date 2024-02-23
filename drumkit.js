const beatPressedHandler = (e) => {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if (!audio) return;               //Exist if key does not contain an audio.
    const beat = audio.parentElement;
    audio.currentTime = 0;
    audio.play();
    beat.classList.toggle('playing');
}

// Function called when playing transition has ended. 
const resetTransition = function(e){
    if(e.propertyName !== 'transform'){ // Exits the function if the event propertyname is not of transform.
        return;
    }
    this.classList.remove('playing');
}

const beatKeys = document.querySelectorAll(".beat");
window.addEventListener('keydown', beatPressedHandler);
beatKeys.forEach(key => key.addEventListener("transitionend", resetTransition)); 