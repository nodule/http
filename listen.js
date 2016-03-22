module.exports = {
  name: "listen",
  ns: "http",
  description: "HTTP Listen",
  phrases: {
    active: "HTTP Listening on {{input.host}}:{{input.port}}"
  },
  ports: {
    input: {
      http: {
        title: "Server",
        type: "Server",
        required: true
      },
      port: {
        title: "Port",
        type: "string",
        "default": "8080"
      },
      host: {
        title: "Host",
        type: "string",
        "default": "0.0.0.0"
      }
    },
    output: {
      http: {
        title: "Server",
        type: "Server"
      }
    }
  },
  fn: function listen(input, $, output, state, done, cb, on) {
    var r = function() {
      output.http = $.create($.http.listen($.port, $.host));
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}