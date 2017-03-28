var randSkill = function () {
    var max = 100;
    var value;
    var bars = 6;

    for (var i = 1; i <= bars; i++) {
        document.getElementById('progress' + i).setAttribute('value', Math.floor(Math.random() * (max + 1)).toString());
    }
}();
