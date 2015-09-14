Package.describe({
  name: 'dispatch:geolocation',
  version: '1.0.3',
  summary: 'Geolocation status helper functions.',
  git: 'https://github.com/DispatchMe/meteor-geolocation.git'
});

Cordova.depends({
  'com.butterflyeffect.plugins.GPSDetectionPlugin': 'https://github.com/DispatchMe/GPSDetector/tarball/40c7d5081088960c6411f1b542c7b87a28c704a0'
});

Package.onUse(function (api) {
  api.use('dispatch:platform@1.0.0', 'web');
  
  api.addFiles('geolocation.js', 'web');
  api.export('Geolocation', 'web');
});
