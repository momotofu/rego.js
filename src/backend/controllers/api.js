const path = require('path')
const devMode = process.env.NODE_ENV === 'development'
const getFileName = require('../utils').getFileName // TODO: search by prefix
const bundleName = devMode
  ? 'bundle.js'
  : getFileName('../public/js', 0)
const mainBundlePath = devMode
  ? 'http://localhost:2992/assets/'
  : 'assets/js/'


module.exports = router => {
  router.get('/assets/js/:filename', (req, res) => {
    res.sendFile(path.resolve(__dirname, `../public/js/${req.params.filename}`))
  })

  router.get('/assets/images/:filename', (req, res) => {
    res.sendFile(path.resolve(__dirname, `../public/images/${req.params.filename}`))
  })

  router.get('/*', (req, res) => {
    res.render('index', { mainBundlePath, bundleName })
  })
}
