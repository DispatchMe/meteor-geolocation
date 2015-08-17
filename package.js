Package.describe({
  name: 'dispatch:geolocation',
  version: '1.0.1',
  summary: 'Geolocation status helper functions.',
  git: 'https://github.com/DispatchMe/meteor-geolocation.git'
});

Cordova.depends({
  'org.apache.cordova.geolocation': '0.3.11',
  'com.butterflyeffect.plugins.GPSDetectionPlugin': 'https://github.com' +
  '/DispatchMe/GPSDetector' +
  '/tarball/089ff711ceaace04343fa9a0b2d9ea53d926a971/tarball'
});

Package.onUse(function (api) {
  api.use('dispatch:platform@1.0.0', 'web');
  api.addFiles('geolocation.js', 'web');
  api.export('Geolocation', 'web');
});
