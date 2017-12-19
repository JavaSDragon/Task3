window.onload=function() {
    bpm.onclick = function () {
        setInterval(function () {

            // Increase `data.step` by one.  If `data.step` is `15` (the last
            // step) loop back around to `0` (the first step).
            data.step = (data.step + 1) % data.tracks[0].steps.length;

            // Find all the tracks where the current step is on.  Play the
            // sounds for those tracks.
            data.tracks
                .filter(function (track) {
                    return track.steps[data.step];
                })
                .forEach(function (track) {
                    track.playSound();
                });
        }, 60);
    };
    var mas = new Array (6);
    for (var i = 0; i < 6; i++){
        mas[i] = new Array (16);
        }


    save.onclick = function () {
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 16; j++) {
                mas[i][j]=data.tracks[i].steps[j]
                }
            }

        var saveObj = JSON.stringify(mas);
        localStorage.setItem("save", saveObj);
    };

    load.onclick = function () {
         mas= JSON.parse(localStorage.getItem("save"));
         for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 16; j++) {
                data.tracks[i].steps[j] = mas[i][j];
            }
        }

    }
}


