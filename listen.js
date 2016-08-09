module.exports = {
  name: "listen",
  ns: "http",
  async: true,
  description: "HTTP Listen",
  phrases: {
    active: "HTTP Listening on {{input.host}}:{{input.port}}"
  },
  ports: {
    input: {
      http: {
        title: "Server",
        type: "Server",
        async: true,
        required: true,
        fn: function __HTTP__(data, source, state, input, $, output) {
          var r = function() {
            state.http = $.http.listen($.port, $.host);
            output({
              http: $.create(state.http)
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
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
  state: {},
  on: {
    shutdown: function __ONSHUTDOWN__(data, source, state, input, $, output) {
      var r = function() {
        if (state.http) {
          state.http.close();
        }
      }.call(this);
      return {
        state: state,
        return: r
      };
    }
  }
}