input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    maqueen2 = !(maqueen2)
    if (maqueen2) {
        radio.sendNumber(2)
    } else {
        radio.sendNumber(4)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(7)
})
let maqueen2 = false
radio.setGroup(7)
music.playMelody("C5 E A D B F G C ", 120)
