module.exports = {
  name: "createServer",
  ns: "http",
  description: "Create HTTP Server",
  phrases: {
    active: "Creating HTTP Server"
  },
  ports: {
    input: {},
    output: {
      out: {
        title: "Out",
        type: "object"
      },
      http: {
        title: "Server",
        type: "Server"
      }
    }
  },
  dependencies: {
    npm: {
      http: require('http')
    }
  },
  fn: function createServer(input, $, output, state, done, cb, on, http) {
    var r = function() {
      var _http = http.createServer(function httpRequest(req, res) {
        output({
          out: $.create({
            request: req,
            response: res
          })
        });
      });

      output({
        http: $.create(_http)
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}