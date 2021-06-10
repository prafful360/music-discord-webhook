
module.exports = {
    lintOnSave: true,
    productionSourceMap: false,
    css: {
        loaderOptions: {
            sass: {
                prependData:
                    `
          @import "@/assets/scss/_theme.scss";
          `
            }
        }
    }
}