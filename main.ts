let zahl = 10
for (let index = 0; index < 10; index++) {
    basic.showNumber(zahl, 70)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    zahl += -1
}
