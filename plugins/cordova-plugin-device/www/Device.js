cordova.define("cordova-plugin-device.Device", function(require, exports, module) {
    var argscheck = require('cordova/argscheck');
    var exec = require('cordova/exec');

    /* Available Keys, as described in https://developer.android.com/reference/android/os/Build
     *
     * uuid, platform, version, sdk, isVirtual,
     * board, brand, device, display, fingerprint,
     * hardware, manufacturer, model, product, serial
     * timezone
     *
     * @param success callback returns object as described above
     * @param fail callback returns string
     */
    module.exports.getInfo = function (success, fail) {
        argscheck.checkArgs('fF', 'Device.getInfo', arguments);
        exec(success, fail, 'Device', 'getDeviceInfo', []);
    };

});