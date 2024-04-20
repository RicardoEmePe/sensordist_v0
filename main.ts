let distancia = 0
basic.showString("BERTA")
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
basic.pause(200)
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    basic.showNumber(distancia)
    basic.pause(100)
    if (distancia < 10 && distancia > 5) {
        music.ringTone(494)
    } else {
        if (distancia < 5 && distancia > 1) {
            music.ringTone(988)
        }
    }
    music.stopAllSounds()
})
