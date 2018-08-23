const withManifest = require('next-manifest')
const withWorkBox = require('next-workbox')

module.exports = withWorkBox(withManifest({
  manifest: {
    icons: {
      src: './res/icon-512x512.png'
    }
  }
}))