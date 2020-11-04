input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    end = input.runningTime()
    basic.showString("" + (end - start))
})
let end = 0
let start = 0
start = 0
basic.forever(function () {
	
})
