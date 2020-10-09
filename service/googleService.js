'use strict'

var Util = require('../util')
var UrlService = require('./urlService.js');
var colors = require('colors')

var GoogleService = function (that) {
    this.util = new Util(that)
    this.urlService = new UrlService(that)
}

GoogleService.prototype.getGoogle = async function(url){
    console.log("GET URL".green)
    try{
        var baseUrl = this.urlService.getBaseUrl()
        //var header = this.util.getHeaderJson()
        let resultRequest = await this.util.getUrl(baseUrl, /* header ,*/'/posts')
        return resultRequest
        console.log("✓ GET URL SUCESS")
    }
    catch(ex){
        console.log("X GET URL FAIL".red + ex)
    }
}

module.exports =  GoogleService