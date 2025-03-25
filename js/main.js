document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("videoPlayer");
    var playPauseBtn = document.getElementById("playPauseBtn");
    var seekBar = document.getElementById("seekBar");
    var volumeBar = document.getElementById("volumeBar");
    var rewindBtn = document.getElementById("rewindBtn");
    var forwardBtn = document.getElementById("forwardBtn");
    var muteBtn = document.getElementById("muteBtn");

    // Play/Pause button
    playPauseBtn.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playPauseBtn.children[0].src = "icons/pause.svg"; // Change to pause icon
        } else {
            video.pause();
            playPauseBtn.children[0].src = "icons/play.svg"; // Change to play icon
        }
    });

    // Seekbar control
    video.addEventListener("timeupdate", function () {
        var progress = (video.currentTime / video.duration) * 100;
        seekBar.value = progress;
    });

    seekBar.addEventListener("input", function () {
        video.currentTime = (seekBar.value / 100) * video.duration;
    });

    // Rewind button
    rewindBtn.addEventListener("click", function () {
        video.currentTime = Math.max(0, video.currentTime - 5);
    });

    // Forward button
    forwardBtn.addEventListener("click", function () {
        video.currentTime = Math.min(video.duration, video.currentTime + 5);
    });

    // Mute button
    muteBtn.addEventListener("click", function () {
        if (video.muted) {
            video.muted = false;
            muteBtn.children[0].src = "icons/volume.svg"; // Change to volume icon
        } else {
            video.muted = true;
            muteBtn.children[0].src = "icons/mute.svg"; // Change to mute icon
        }
    });

    // Volume control
    volumeBar.addEventListener("input", function () {
        video.volume = volumeBar.value;
    });

    // Remote Control Support
    document.addEventListener("keydown", function (event) {
        switch (event.keyCode) {
            case 13: // OK/Enter (Toggle Play/Pause)
                if (video.paused) {
                    video.play();
                    playPauseBtn.children[0].src = "icons/pause.svg";
                } else {
                    video.pause();
                    playPauseBtn.children[0].src = "icons/play.svg";
                }
                break;
            case 37: // Left Arrow (Rewind)
                video.currentTime = Math.max(0, video.currentTime - 5);
                break;
            case 39: // Right Arrow (Fast Forward)
                video.currentTime = Math.min(video.duration, video.currentTime + 5);
                break;
            case 38: // Up Arrow (Increase Volume)
                video.volume = Math.min(1, video.volume + 0.1);
                volumeBar.value = video.volume;
                break;
            case 40: // Down Arrow (Decrease Volume)
                video.volume = Math.max(0, video.volume - 0.1);
                volumeBar.value = video.volume;
                break;
        }
    });
});
