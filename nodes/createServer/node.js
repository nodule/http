output = function () {
  var _http = http.createServer(function httpRequest (req, res) {
    cb({
      out: {
        $.create({
          request: req,
          response: res
        })
      }
    });
  });

  cb({
    http: $.create(_http);
  });
};
