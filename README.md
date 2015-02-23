geolocation
==========

Check for access to the GPS with cordova.

```js
Geolocation.checkAccess(function (access) {
  if (access === Geolocation.Status.AVAILABLE) return;

  alert('Please enable your GPS');
});
```
