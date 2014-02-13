var soap = require('node-soap');

var Meetings = function (wsdl) {
  this.wsdl = wsdl;
};


Meetings.prototype.getStatus = function(callback){
  soap.createClient(this.wsdl, function(err, client) {
      client.ListarSituacoesReuniaoSessao(null, function(err, result) {
          callback(err, result.ListarSituacoesReuniaoSessaoResult.situacaoReuniaoSessao.situacaoReuniao);
      });
  });
};

Meetings.prototype.getParliamentaryAttendance = function(callback, dateInit, dateEnd, parliamentaryId){
  var args = {dataIni:dateInit, dataFim:dateEnd, numMatriculaParlamentar:parliamentaryId};
  soap.createClient(this.wsdl, function(err, client) {
      client.ListarPresencasParlamentar(args, function(err, result) {
          callback(err, result.ListarPresencasParlamentarResult.parlamentar);
      });
  });
};

Meetings.prototype.getAttendances = function(callback, date, parliamentaryId, acronymParty, acronymUF){
  var args = {data:date, numMatriculaParlamentar:parliamentaryId, siglaPartido:acronymParty, siglaUF:acronymUF};
  soap.createClient(this.wsdl, function(err, client) {
      client.ListarPresencasDia(args, function(err, result) {
          callback(err, result.ListarPresencasDiaResult.dia);
      });
  });
};

Meetings.prototype.getFullTextSpeech = function(callback, dateInit, dateEnd, meetingId, parliamentaryName, acronymParty, acronymUF){
  var args = {dataIni: dateInit, dataFim: dateEnd, codigoSessao:meetingId, parteNomeParlamentar: parliamentaryName, siglaPartido: acronymParty, siglaUF:acronymUF};
  soap.createClient(this.wsdl, function(err, client) {
      client.ListarDiscursosPlenario(args, function(err, result) {
          callback(err, result.ListarDiscursosPlenarioResult.sessoesDiscursos);
      });
  });
};

exports.Meetings = Meetings;