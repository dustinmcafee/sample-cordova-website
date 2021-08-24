cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-barcodescanner.BarcodeScanner",
    "file": "plugins/cordova-plugin-barcodescanner/www/BarcodeScanner.js",
    "pluginId": "cordova-plugin-barcodescanner",
    "clobbers": [
      "BarcodeScanner"
    ]
  },
  {
    "id": "cordova-plugin-zebrabcr.ZebraBCR",
    "file": "plugins/cordova-plugin-zebrabcr/www/ZebraBCR.js",
    "pluginId": "cordova-plugin-zebrabcr",
    "clobbers": [
      "ZebraBCR"
    ]
  },
  {
    "id": "cordova-plugin-device.Device",
    "file": "plugins/cordova-plugin-device/www/Device.js",
    "pluginId": "cordova-plugin-Device",
    "clobbers": [
      "Device"
    ]
  },
  {
    "id": "cordova-plugin-eloprinter.Printer",
    "file": "plugins/cordova-plugin-eloprinter/www/printer.js",
    "pluginId": "cordova-plugin-eloprinter",
    "clobbers": [
      "cordova.plugins.eloprinter"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.4",
  "cordova-plugin-camera": "4.1.0",
  "cordova-plugin-barcodescanner": "1.0.0",
  "cordova-plugin-zebrabcr": "1.0.0",
  "cordova-plugin-device": "1.0.0",
  "cordova-plugin-eloprinter": "1.0.0"
};
// BOTTOM OF METADATA
});
