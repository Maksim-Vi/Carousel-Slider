const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? 'https://maksim-vi.github.io/Carousel-Slider' : '',
  //'process.env.BACKEND_URL': prod ? '' : '',
}
