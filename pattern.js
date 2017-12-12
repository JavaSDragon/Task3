window.onload=function() {
    bpm.onclick = function () {
        setInterval(function() {

            // Increase `data.step` by one.  If `data.step` is `15` (the last
            // step) loop back around to `0` (the first step).
            data.step = (data.step + 1) % data.tracks[0].steps.length;

            // Find all the tracks where the current step is on.  Play the
            // sounds for those tracks.
            data.tracks
                .filter(function(track) { return track.steps[data.step]; })
                .forEach(function(track) { track.playSound(); });
        }, 60);
    };
save.onclick = function () {
    console.log(data.tracks);
    var saveObj = JSON.stringify(data.tracks);
    console.log(saveObj);
    localStorage.setItem("save", saveObj);
};


    load.onclick = function () {

           data.tracks= JSON.parse(localStorage.getItem("save"));

        }
    };


