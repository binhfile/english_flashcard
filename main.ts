input.onButtonPressed(Button.A, function () {
    if (word_index <= 0) {
        word_index = word_count
    }
    word_index = word_index - 1
})
input.onButtonPressed(Button.B, function () {
    word_index = word_index + 1
    if (word_index >= word_count) {
        word_index = 0
    }
})
let word_count = 0
let word_index = 0
word_index = 0
word_count = 3
let text_list = [
"art",
"computers",
"English",
"maths",
"music",
"PE",
"reading",
"science"
]
basic.forever(function () {
    if (input.logoIsPressed() || (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.showString("" + (text_list[word_index]))
        basic.clearScreen()
    }
})
