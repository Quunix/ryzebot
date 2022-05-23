module.exports = {
        px: '+',
        id: '932520113612152834',
        token: 'OTM1MjU3MzcyNTI2NTEwMDky.Ye8ATQ.WMbiEEueJfBvsp8dPm8i9L4jDf0',
        botid: '935257372526510092',

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['help','avatar','bass','back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25 
            }
        }
    }
};
