const config = {
    plugins: {
        "postcss-px-to-viewport-8-plugin": {
            unitToConvert: "px",
            viewportWidth: 375,
            unitPrecision: 10,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: ['.fixShowimg'],
            minPixelValue: 0,
            mediaQuery: false,
            replace: true,
            exclude: [/node_modules/, /src\/app\/iphone/, /src\/app\/mdeditor/, /src\/app\/page\.tsx/],
            landscape: false
        },
        autoprefixer: {}
    }
}

export default config;