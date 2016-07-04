if (typeof Map === 'function') {
  module.exports = Map
} else {
  module.exports = require('./pseudomap')
}
