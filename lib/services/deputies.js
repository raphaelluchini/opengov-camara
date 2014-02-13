var soap = require('node-soap');

var Deputies = function (wsdl) {
  this.wsdl = wsdl;
};


Deputies.prototype.getDeputies = function(callback){
  soap.createClient(this.wsdl, function(err, client) {
      client.ObterDeputados(null, function(err, result) {
          callback(err, result.ObterDeputadosResult.deputados);
      });
  });
};


exports.Deputies = Deputies;