
var dictionary = {
    'w': 'tom-1',
    'a': 'tom-2',
    's': 'tom-3',
    'd': 'tom-4',
    'j': 'snare',
    'k': 'kick-bass',
    'l': 'crash',
}

function playSound(key) {
    console.log("yes");
    var audioName = "sounds/" + dictionary[key] + ".mp3";
    var audio = new Audio(audioName);
    audio.play();
}

function buttonAnimation(key) {
    var button = document.getElementById(key);
    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");
    }, 500);
}

var buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (event)=> {
        button.style.color = "white";
        setTimeout(() => {
            button.style.color = "#DA0463";
        }, 500);
        playSound(event.target.id);
        buttonAnimation(event.target.id);
    })
})

document.addEventListener("keypress", (event) => {

    if(Object.keys(dictionary).includes(event.key)) {
        var button = document.getElementById(event.key);
        button.style.color = "white";
        setTimeout(() => {
            button.style.color = "#DA0463";
        }, 500);
        playSound(event.key);
        buttonAnimation(event.key);
    }
})
