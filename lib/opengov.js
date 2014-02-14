var Meetings =  require('./services/meetings').Meetings;
var Deputies =  require('./services/deputies').Deputies;
var Institutions =  require('./services/institutions').Institutions;
var rootUrl = "http://www.camara.gov.br/SitCamaraWS/";

exports.getMeetingsService = function (callback) {
    callback(new Meetings(rootUrl + "SessoesReunioes.asmx?wsdl"));
};

exports.getDeputiesService = function (callback) {
    callback(new Deputies(rootUrl + "Deputados.asmx?wsdl"));
};

exports.getInstitutionsService = function (callback) {
    callback(new Institutions(rootUrl + "Orgaos.asmx?wsdl"));
};