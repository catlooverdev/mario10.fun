Mario10Fun.Mario10Fun.settings.input = {
    "InputWritrArgs": {
        "aliases": {
            // Keyboard aliases
            "left":   [65, 37],     // a,     left
            "right":  [68, 39],     // d,     right
            "up":     [87, 38, 32], // w,     up,    space
            "down":   [83, 40],     // s,     down
            "sprint": [16, 17],     // shift, ctrl
            "pause":  [80],         // p (pause)
            // Mouse aliases
            "rightclick": [3],
        },
        "triggers": {
            "onkeydown": {
                "left": Mario10Fun.Mario10Fun.prototype.keyDownLeft,
                "right": Mario10Fun.Mario10Fun.prototype.keyDownRight,
                "up": Mario10Fun.Mario10Fun.prototype.keyDownUp,
                "down": Mario10Fun.Mario10Fun.prototype.keyDownDown,
                "sprint": Mario10Fun.Mario10Fun.prototype.keyDownSprint,
                "pause": Mario10Fun.Mario10Fun.prototype.keyDownPause,
                "mute": Mario10Fun.Mario10Fun.prototype.keyDownMute,
            },
            "onkeyup": {
                "left": Mario10Fun.Mario10Fun.prototype.keyUpLeft,
                "right": Mario10Fun.Mario10Fun.prototype.keyUpRight,
                "up": Mario10Fun.Mario10Fun.prototype.keyUpUp,
                "down": Mario10Fun.Mario10Fun.prototype.keyUpDown,
                "sprint": Mario10Fun.Mario10Fun.prototype.keyUpSprint,
                "pause": Mario10Fun.Mario10Fun.prototype.keyUpPause
            },
            "onmousedown": {
                "rightclick": Mario10Fun.Mario10Fun.prototype.mouseDownRight
            },
            "oncontextmenu": {},
            "ondevicemotion": {
                "devicemotion": Mario10Fun.Mario10Fun.prototype.deviceMotion
            }
        }
    }
};
