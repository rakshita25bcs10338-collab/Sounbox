// sound file paths
const sounds = {
    dog: "sounds/dog.wav",
    cat: "sounds/cat.wav",
    pop: "sounds/pop.wav",
    laugh: "sounds/laugh.wav",
    applause: "sounds/applause.wav",
    monkey: "sounds/monkey.wav"
};

let audio = null;
let isLooping = false;

const volSlider = document.getElementById("vol");

// play sounds when clicking a card
document.querySelectorAll(".sound-btn").forEach((btn) => {
    btn.addEventListener("click", () => {

        let which = btn.dataset.sound;

        // stop previous one
        if(audio){
            audio.pause();
            audio.currentTime = 0;
        }

        // create new audio each time
        let newAudio = new Audio(sounds[which]);
        audio = newAudio;

        audio.volume = volSlider.value;
        audio.loop = isLooping;

        audio.play();
    });
});

// basic player buttons
document.getElementById("playBtn").onclick = () => {
    if(audio) audio.play();
};

document.getElementById("pauseBtn").onclick = () => {
    if(audio) audio.pause();
};

document.getElementById("stopBtn").onclick = () => {
    if(audio){
        audio.pause();
        audio.currentTime = 0;
    }
};

// volume stuff
document.getElementById("incVol").onclick = () => {
    if(audio){
        let v = audio.volume + .1;
        audio.volume = v > 1 ? 1 : v;
        volSlider.value = audio.volume;
    }
};

document.getElementById("decVol").onclick = () => {
    if(audio){
        let v = audio.volume - .1;
        audio.volume = v < 0 ? 0 : v;
        volSlider.value = audio.volume;
    }
};

volSlider.addEventListener("input", () => {
    if(audio) audio.volume = volSlider.value;
});

// loop toggle
document.getElementById("loopBtn").onclick = () => {
    isLooping = !isLooping;
    if(audio) audio.loop = isLooping;
};

// switch theme
document.getElementById("themeBtn").onclick = () => {
    document.body.classList.toggle("light");
};

// random sound
document.getElementById("randomBtn").onclick = () => {
    const btns = document.querySelectorAll(".sound-btn");
    const rand = btns[Math.floor(Math.random() * btns.length)];
    rand.click();
};