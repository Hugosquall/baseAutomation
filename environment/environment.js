'use strict';
var config = require('../config.js')

var Environment = function () {
    this.environment = process.env.ENVIRONMENT || 'qa'
}

Environment.prototype.getEnvironment = function() {
    return this.environment.trim();
}

module.exports = Environment