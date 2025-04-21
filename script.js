const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider input");
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav");

const playTune = (key) => {
   audio.src = `tunes/${key}.wav`; // playing audio based on key pressed
   audio.play(); //playing audio

   const clickedKey = document.querySelector(`[data-key="${key}"]`);
   clickedKey.classList.add("active"); // adding active class to the clicked key element

   setTimeout(() => { //removing active class after 150 ms from the clicked key element
    clickedKey.classList.remove("active"); 
   },150);
}
pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key) // adding data-key value to the allKeys Array
    // playTune function call with data-key value as an argument
    key.addEventListener("click",() => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
    // passing range slider volume as input volume
}

const showHideKeys = () => {
    // toggling the hide keys from input keys
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    // if the key pressed is in the allKeys array, only then call the playTune function
   if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click",showHideKeys);
volumeSlider.addEventListener("input",handleVolume);
document.addEventListener("keydown",pressedKey);