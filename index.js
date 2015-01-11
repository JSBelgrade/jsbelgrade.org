'use strict';

require('newrelic');

var ghost = require('ghost'),
    path = require('path');

// Setup Ghost with a custom config path
ghost({
  config: path.join(__dirname, 'ghost/config.js')
}).then(function (ghostServer) {
  // And start Ghost server
  ghostServer.start();
});

// That's it for now. Thank you, come again.
