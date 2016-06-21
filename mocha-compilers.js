"use strict";

var noop = function() {
  return null;
};

require('babel-core/register');
require.extensions['.css'] = noop;
