var buttons = document.querySelectorAll('.SkylineCity, .DuckClicker, .EventMania');
var sounds = document.querySelectorAll('audio');

buttons.forEach(function(button, index) {
    button.addEventListener('mouseover', function() {
        if (!sounds[index].paused) {
            sounds[index].pause();
            sounds[index].currentTime = 0;
        }
        sounds[index].play();
    });
    button.addEventListener('mouseleave', function() {
        sounds[index].pause();
        sounds[index].currentTime = 0;
    });
});