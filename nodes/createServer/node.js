output = function(cb) {

  var h = http.createServer(function(req, res) {
    cb({ request: req, response: res });
  });

  cb({ http: h });

};
