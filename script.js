// Background slideshow ----------------
let images = ["images/bg1.jpg", "images/bg2.jpg", "images/bg3.jpg"];
let bgIndex = 0;

function changeBackground() {
    document.getElementById("background").style.backgroundImage =
        `url(${images[bgIndex]})`;
    bgIndex = (bgIndex + 1) % images.length;
}
setInterval(changeBackground, 5000);
changeBackground();

// Pomodoro Timer ----------------------
let time = 1500;  
let timerInterval;

function startPomodoro() {
    clearInterval(timerInterval);
    time = 1500;

    timerInterval = setInterval(() => {
        time--;
        let m = Math.floor(time / 60);
        let s = time % 60;

        document.getElementById("timer").innerText =
            `${m}:${s < 10 ? "0" + s : s}`;

        if (time === 0) {
            time = 300;  
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer").innerText = "25:00";
}

// Music Player -------------------------
function changeMusic() {
    let file = document.getElementById("musicSelect").value;
    document.getElementById("player").src = "music/" + file;
    document.getElementById("player").play();
}

// Doll Companion ------------------------
function askDoll() {
    let messages = [
        "You're doing great! Keep going 😊",
        "Stay focused, champion!",
        "Need a break? Take a deep breath 💙",
        "I'm here with you—let’s finish this!",
        "Proud of your effort!"
    ];

    let msg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("dollText").innerText = msg;
}
