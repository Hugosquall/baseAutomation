'use strict';

const Enviroment = require('./environment/environment')
const env = new Enviroment().getEnvironment()

var Util = function (that) {
    chai.use(chaiHttp);
    this.that = that;
};

Util.prototype.getUrl = function (baseUrl, header, url) {
    return chai.request(baseUrl)
      .get(url)
      .set(header);
  };
  
  Util.prototype.postUrl = function (baseUrl, body, header, url) {
    return chai.request(baseUrl).post(url)
      .set(header)
      .send(body);
  };


module.exports = Util;