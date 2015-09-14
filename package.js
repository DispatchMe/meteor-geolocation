Package.describe({
  name: 'dispatch:geolocation',
  version: '1.0.4',
  summary: 'Geolocation status helper functions.',
  git: 'https://github.com/DispatchMe/meteor-geolocation.git'
});

Cordova.depends({
  'com.butterflyeffect.plugins.GPSDetectionPlugin': 'https://github.com/DispatchMe/GPSDetector/tarball/089ff711ceaace04343fa9a0b2d9ea53d926a971'
});

Package.onUse(function (api) {
  api.use('dispatch:platform@1.0.0', 'web');

  api.addFiles('geolocation.js', 'web');

  api.export('Geolocation', 'web');
});
