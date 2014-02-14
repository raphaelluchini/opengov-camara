var soap = require('node-soap');

var Institutions = function (wsdl) {
  this.wsdl = wsdl;
};


Institutions.prototype.getInstitutions = function(callback){
  soap.createClient(this.wsdl, function(err, client) {
    client.ObterOrgaos(null, function(err, result) {
      callback(err, result.ObterOrgaosResult.orgaos.orgao);
    });
  });
};

Institutions.prototype.getInstitutionTypes = function(callback){
  soap.createClient(this.wsdl, function(err, client) {
    client.ListarTiposOrgaos(null, function(err, result) {
      callback(err, result.ListarTiposOrgaosResult.tipoOrgaos.tipoOrgao);
    });
  });
};

Institutions.prototype.getScript = function(callback, idInstitution, dateInit, dateEnd){
  var args = {IDOrgao:idInstitution, datIni:dateInit, datFim:dateEnd};
  soap.createClient(this.wsdl, function(err, client) {
    client.ObterPauta(args, function(err, result) {
      callback(err, result.ObterPautaResult.pauta);
    });
  });
};

//There are more services

exports.Institutions = Institutions;