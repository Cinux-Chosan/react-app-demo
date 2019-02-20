const util = require('util');


/* config-overrides.js */

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    console.log(util.inspect(config.rules, { showHidden: true, depth: null }))
    return config;
}