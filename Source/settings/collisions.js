Mario10Fun.Mario10Fun.settings.collisions = {
    "groupNames": ["Solid", "Character"],
    "keyGroupName": "groupType",
    "globalCheckGenerators": {
        "Character": Mario10Fun.Mario10Fun.prototype.generateCanThingCollide,
        "Solid": Mario10Fun.Mario10Fun.prototype.generateCanThingCollide
    },
    "hitCheckGenerators": {
        "Character": {
            "Character": Mario10Fun.Mario10Fun.prototype.generateIsCharacterTouchingCharacter,
            "Solid": Mario10Fun.Mario10Fun.prototype.generateIsCharacterTouchingSolid
        }
    },
    "hitFunctionGenerators": {
        "Character": {
            "Solid": Mario10Fun.Mario10Fun.prototype.generateHitCharacterSolid,
            "Character": Mario10Fun.Mario10Fun.prototype.generateHitCharacterCharacter
        }
    }
};
