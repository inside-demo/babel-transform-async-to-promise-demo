function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

const fetch = require('node-fetch');

function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

_async(function () {
  console.log('step 1', 'start');
  return _await(fetch('http://jsonplaceholder.typicode.com/posts/1'), function (response) {
    console.log('step 2', response);
    return _await(response.json(), function (json) {
      console.log('step 3', json);
      console.log('step 4', 'end');
    });
  });
})();
