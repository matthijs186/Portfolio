'use strict';

var Skill = function () {

    var init = function () {
        fillBars(100);
    };

    var fillBars = function (max) {
        for (var i = 0; i <= document.getElementsByClassName('progress').length - 1; i++) {
            document.getElementsByClassName('progress')[i].setAttribute('value', Math.floor(Math.random() * (max + 1)).toString());
        }
    };

    return {
        init: init
    }
}();
