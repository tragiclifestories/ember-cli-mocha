var EOL = require('os').EOL;

module.exports = {
  name: 'ember-cli-mocha',

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    var addonContext = this;

    return this.addBowerPackagesToProject([
      { name: 'mocha',                 source: 'mocha',                 target: '~2.2.4' },
      { name: 'chai',                  source: 'chai',                  target: '~2.3.0' },
      { name: 'ember-mocha-adapter',   source: 'ember-mocha-adapter',   target: '~0.3.1' }      
    ])
      .then(function() {
        return addonContext.addPackageToProject('ember-cli-test-loader', '^1.1.0')
      })
      .then(function() {
      if ('removePackageFromProject' in addonContext) {
        return addonContext.removePackageFromProject('ember-cli-qunit');
      }
    });
  }
};
