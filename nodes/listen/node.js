on.input.http = function () {
  state.http = $.http.listen($.port, $.host);
  output({
    http: $.create(state.http)
  });
};

on.shutdown = function () {
  if (state.http) {
     state.http.close();
  }
};
