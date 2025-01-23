const config = {
    plugins: {
        "postcss-px-to-viewport-8-plugin": {
            unitToConvert: "px",
            viewportWidth: 375,
            unitPrecision: 10,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 0,
            mediaQuery: false,
            replace: true,
            exclude: [/node_modules/],
            landscape: false
        },
        autoprefixer: {}
    }
}

export default config;