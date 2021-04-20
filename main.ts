input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (true) {
    	
    } else {
    	
    }
})
basic.showString("Hello!")
basic.showString("0")
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . # #
        . # # # .
        . . . . .
        `)
})
