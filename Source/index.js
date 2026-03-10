var time = Date.now();

document.onreadystatechange = function (event) {
    if (event.target.readyState !== "complete") {
        return;
    }

    var UserWrapper = new UserWrappr.UserWrappr(Mario10Fun.Mario10Fun.prototype.proliferate(
        {
            "GameStartrConstructor": Mario10Fun.Mario10Fun
        }, Mario10Fun.Mario10Fun.settings.ui, true));

    console.log("It took " + (Date.now() - time) + " milliseconds to start."), UserWrapper.displayHelpMenu()
};
