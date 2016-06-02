function mapSupported () {
  return (
    process.env.npm_package_name === 'pseudomap' &&
      process.env.npm_lifecycle_script === 'test'
  )
}

if (typeof Map === 'function' && !mapSupported() && !process.env.TEST_PSEUDOMAP) {
  module.exports = Map
} else {
  module.exports = require('./pseudomap')
}
