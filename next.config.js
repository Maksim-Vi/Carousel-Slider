const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    exportPathMap: function () {
        return {
          "/": { page: "/" },
        }
    },
  assetPrefix: !debug ? 'https://maksim-vi.github.io/Carousel-Slider' : '',
  //assetPrefix: !debug ? '' : '',
}
