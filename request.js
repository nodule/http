module.exports = {
  name: "request",
  ns: "http",
  description: "http request",
  phrases: {
    active: "Performing HTTP request to {{input.url}}"
  },
  ports: {
    input: {
      url: {
        title: "Url Request",
        type: "string",
        format: "url",
        description: "The url to be requested."
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      res: {
        title: "Stream",
        type: "Stream"
      },
      body: {
        title: "Body",
        type: "string"
      }
    }
  },
  dependencies: {
    npm: {
      request: require('request')
    }
  },
  fn: function request(input, $, output, state, done, cb, on, request) {
    var r = function() {
      var obj = {}
      obj.request = request
      obj.request($.url, function requestCallback(error, res, body) {
        cb({
          error: error,
          res: res,
          body: body
        });
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