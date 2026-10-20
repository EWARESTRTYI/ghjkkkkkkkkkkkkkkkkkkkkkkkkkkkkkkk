basic.showLeds(`
    # # # # #
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    `)
music.play(music.stringPlayable("C5 B E F C5 B E F ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("D D C5 E E C5 C A ", 120), music.PlaybackMode.UntilDone)
basic.clearScreen()
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
music.play(music.stringPlayable("C A C A A D A D ", 209), music.PlaybackMode.UntilDone)
turtle.forward(1)
turtle.back(1)
turtle.forward(1)
turtle.back(1)
turtle.forward(1)
turtle.back(1)
basic.forever(function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 386), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E D G F B A C5 B ", 386), music.PlaybackMode.UntilDone)
})
