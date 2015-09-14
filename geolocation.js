Geolocation = {};

/**
 * The geolocation status.
 * @enum
 */
var Status = Geolocation.Status = {
  ERROR: 0,
  ANDROID_GPS_OFF: 1,
  IOS_LOCATION_SERVICES_OFF: 2,
  IOS_APPLICATION_DOES_NOT_HAVE_PERMISSION: 3,
  AVAILABLE: 4
};

var isAndroid = /android/g.test(navigator.userAgent.toLowerCase());
var isIos = /(ipad|iphone|ipod)/g.test(navigator.userAgent.toLowerCase());

/**
 * Check for geolocation access.
 * @param callback
 */
Geolocation.checkAccess = function (callback) {
  if (!callback) throw 'You must set a callback.';

  if (isAndroid) {
    // support older app versions
    if (!window.GPSDetector) return callback(Status.ERROR);

    window.GPSDetector.checkGPS(function (isEnabled) {
      callback(isEnabled ? Status.AVAILABLE : Status.ANDROID_GPS_OFF);
    }, function () {
      callback(Status.ERROR);
    });

    return;
  }

  navigator.geolocation.getCurrentPosition(function () {
    callback(Geolocation.Status.AVAILABLE);
  }, function (error) {
    if (error.message === 'Location services are disabled.') {
      callback(Status.IOS_LOCATION_SERVICES_OFF);
    } else if (isIos) {
      callback(Status.IOS_APPLICATION_DOES_NOT_HAVE_PERMISSION);
    } else {
      callback(Status.ERROR);
    }
  });
};
