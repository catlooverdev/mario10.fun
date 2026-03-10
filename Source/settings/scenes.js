Mario10Fun.Mario10Fun.settings.scenes = {
    "cutscenes": {
		"Flagpole": {
			"firstRoutine": "StartSlidingDown",
			"routines": {
				"StartSlidingDown": Mario10Fun.Mario10Fun.prototype.cutsceneFlagpoleStartSlidingDown,
				"HitBottom": Mario10Fun.Mario10Fun.prototype.cutsceneFlagpoleHitBottom ,
				"Countdown": Mario10Fun.Mario10Fun.prototype.cutsceneFlagpoleCountdown,
				"Fireworks": Mario10Fun.Mario10Fun.prototype.cutsceneFlagpoleFireworks
			}
		},
		"BowserVictory": {
		    "firstRoutine": "CollideCastleAxe",
		    "routines": {
		        "CollideCastleAxe": Mario10Fun.Mario10Fun.prototype.cutsceneBowserVictoryCollideCastleAxe,
		        "CastleBridgeOpen": Mario10Fun.Mario10Fun.prototype.cutsceneBowserVictoryCastleBridgeOpen,
		        "BowserFalls": Mario10Fun.Mario10Fun.prototype.cutsceneBowserVictoryBowserFalls,
		        "Dialog": Mario10Fun.Mario10Fun.prototype.cutsceneBowserVictoryDialog
		    }
		}
	}
};
