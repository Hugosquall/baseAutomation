'use strict';
var Util = require('../util.js');
var config = require('../config')

const Enviroment = require('../environment/environment')
var env = new Enviroment().getEnvironment()

var UrlService = function (that) {
  this.util = new Util(that)
  this.urls = config.env[env]
}

UrlService.prototype.getBaseUrl = function () {
  return this.urls.baseUrl
}

module.exports = UrlService;