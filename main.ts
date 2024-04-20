let distancia = 0
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    basic.showNumber(distancia)
    basic.pause(100)
    if (distancia < 20) {
        basic.showIcon(IconNames.Heart)
    }
})
