DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
while (DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12) > 40) {
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    while (DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12) < 40 && DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12) > 35) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
        while (DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12) < 35 && DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12) > 30) {
            basic.showLeds(`
                # . # . #
                . # # # .
                . . # . .
                . # # # .
                # . # . #
                `)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
            while (DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12) < 30 && DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12) > 25) {
                basic.showLeds(`
                    # . # . #
                    . # # # .
                    # # # # #
                    . # # # .
                    # . # . #
                    `)
                DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
            }
        }
    }
}
DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
basic.pause(1000)
DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
basic.pause(1000)
DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 0)
basic.pause(1000)
DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
if (DFRobotMaqueenPlus.ultraSonic(PIN.P12, PIN.P12) < 10) {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
}
basic.forever(function () {
	
})
