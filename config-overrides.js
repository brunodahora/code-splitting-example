const rewireVendorSplitting = require('react-app-rewire-vendor-splitting');

module.exports = function override(config, env) {
  config = rewireVendorSplitting(config, env);

  return config;
};
