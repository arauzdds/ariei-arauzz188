let Angulo = 0
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
basic.forever(function () {
    Angulo = input.compassHeading()
    if (Angulo > 315 && Angulo <= 360 || Angulo >= 0 && Angulo <= 45) {
        basic.showString("N")
    } else if (Angulo > 45 && Angulo <= 135) {
        basic.showString("E")
    } else if (Angulo > 135 && Angulo <= 225) {
        basic.showString("5")
    } else if (Angulo > 225 && Angulo <= 315) {
        basic.showString("O")
    }
})
