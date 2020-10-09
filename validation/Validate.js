'use strict';

var chai = require('chai')
var assert = chai.assert
var expect = chai.expect

let config = require('../config')

const Enviroment = require('../environment/environment')
var env = new Enviroment().getEnvironment()
var Util = require('../util')
var UrlService = require('../service/urlService')

var Validate = function(that){
    this.util = new Util(that)
    this.UrlService = new UrlService(that)
}

Validate.prototype.validateStatus200 = function(respose){
    expect(respose, 'Must return statusCode 200').to.have.status(config.util.HTTP.OK);
    return "ok"
}



module.exports = Validate