'use strict'

const path = require('path');

module.exports = {
    extensions: ['.ts', '.js'],
    modules: [
      path.join(__dirname, '..', 'src'),
      path.join(__dirname, '..', 'node_modules')
    ]
};
