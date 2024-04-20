basic.forever(function () {
    basic.showString("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )))
})
