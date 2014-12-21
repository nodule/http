module.exports = {
  name: "createServer",
  ns: "http",
  description: "Create HTTP Server",
  phrases: {
    active: "Creating HTTP Server"
  },
  ports: {
    input: {
      app: {
        title: "App",
        type: "function"
      }
    },
    output: {
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
  fn: function createServer(input, output, state, done, cb, on, http) {
    var r = function() {
      output.http = http.createServer(input.app);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}