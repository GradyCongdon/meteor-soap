Package.describe({
  name: 'gradycongdon:soap',
  version: '0.2.6',
  summary: 'Wrapped npm soap package',
  git: 'https://github.com/gradycongdon/meteor-soap',
  documentation: 'README.md'
});

Npm.depends({
  soap: '0.16.0'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.3');
  api.use(['coffeescript', 'webapp']);
  api.addFiles('client.coffee', 'server');
  api.addFiles('server.coffee', 'server');
});

Package.onTest(function(api) {
  api.use(['coffeescript', 'tinytest', 'gradycongdon:soap']);
  api.addFiles('tests/data.js', 'server');
  api.addFiles('tests/tests.coffee', 'server');
});
