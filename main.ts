basic.forever(function () {
    if (input.temperature() > 30) {
        basic.showLeds(`
            # . . # .
            . # . . #
            # . . # .
            . # . . #
            # . . # .
            `)
        basic.setLedColor(0xff0000)
    } else if (input.temperature() < 20) {
        basic.showLeds(`
            . # . # .
            # # . # #
            . . # . .
            # # . # #
            . # . # .
            `)
        basic.setLedColor(0x00ffff)
    } else {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
        basic.setLedColor(0x00ff00)
    }
})
