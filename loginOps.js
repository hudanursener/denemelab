const sql = require('mssql');

var webconfig = {
  user: 'calisma ',
  password: 'HUDANUR',
  server: '192.168.1.105',
  database: 'hudanur'
};

module.exports.userLogin = function(req, res) {
  sql.connect(webconfig, function(err) {
    if (err) console.log(err);
    var request1 = new sql.Request();
    request1.query('', function(err, verisonucu) {
      if (err) {
        console.log(err);
      }
      console.log(verisonucu.recordsets);
      sql.close();
      res.render('home', { veri: verisonucu.recordsets });
    });
  });
};
module.exports.etkinlikYonet = function(req, res) {
  sql.connect(webconfig, function(err) {
    if (err) console.log(err);
    var request1 = new sql.Request();
    request1.query('', function(err, verisonucu) {
      if (err) {
        console.log(err);
      }
      console.log(verisonucu.recordsets);
      sql.close();
      res.render('etkinlikyonet', { veri: verisonucu.recordsets });
    });
  });
};
