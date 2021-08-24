cordova.define("cordova-plugin-barcodescanner.BarcodeScanner", function(require, exports, module) {

var exec = require('cordova/exec');

function errorCallback(callback) {
    if (!callback) {
        return null;
    }
    return function(error) {
        var errorCode = parseInt(error);
        var BarcodeScannerError = {};
        switch (errorCode) {
            case 0:
                BarcodeScannerError = {
                    name: 'UNEXPECTED_ERROR',
                    code: 0,
                    _message: 'Ran into an unexpected error.'
                };
                break;
            case 1:
                BarcodeScannerError = {
                    name: 'INVALID_ARGUMENTS',
                    code: 1,
                    _message: 'The user supplied invalid arguments.'
                };
                break;
            case 2:
                BarcodeScannerError = {
                    name: 'CAMERA_ACCESS_DENIED',
                    code: 2,
                    _message: 'The user denied camera access.'
                };
                break;
            case 3:
                BarcodeScannerError = {
                    name: 'BACK_CAMERA_UNAVAILABLE',
                    code: 3,
                    _message: 'The back camera is unavailable.'
                };
                break;
            case 4:
                BarcodeScannerError = {
                    name: 'FRONT_CAMERA_UNAVAILABLE',
                    code: 4,
                    _message: 'The front camera is unavailable.'
                };
                break;
            case 5:
                BarcodeScannerError = {
                    name: 'SCAN_CANCELED',
                    code: 5,
                    _message: 'Scan was canceled.'
                };
                break;
            case 6:
                BarcodeScannerError = {
                    name: 'INVALID_API',
                    code: 6,
                    _message: 'Android API is lower than 21'
                };
                break;
        }
        callback(BarcodeScannerError);
    };
}

module.exports.FORMAT_QR_CODE = 0;
module.exports.FORMAT_DATA_MATRIX = 1;
module.exports.FORMAT_UPC_E = 2;
module.exports.FORMAT_UPC_A = 3;
module.exports.FORMAT_EAN_8 = 4;
module.exports.FORMAT_EAN_13 = 5;
module.exports.FORMAT_CODE_128 = 6;
module.exports.FORMAT_CODE_93 = 7;
module.exports.FORMAT_CODE_39 = 8;
module.exports.FORMAT_CODABAR = 9;
module.exports.FORMAT_ITF = 10;
module.exports.FORMAT_RSS_14 = 11;
module.exports.FORMAT_PDF_417 = 12;
module.exports.FORMAT_RSS_EXPANDED = 13;
module.exports.FORMAT_AZTEC = 14;
module.exports.FORMAT_MAXICODE = 15;
module.exports.FORMAT_UPC_EAN_EXTENSION = 16;
module.exports.CAMERA_FRONT = 0;
module.exports.CAMERA_BACK = 1;

/**
 * Scan Barcode with given format and given camera ID (0 is front, 1 is back).
 * Barcode Formats are as follows:
 * QR_CODE = 0,
 * DATA_MATRIX = 1,
 * UPC_E = 2,
 * UPC_A = 3,
 * EAN_8 = 4,
 * EAN_13 = 5,
 * CODE_128 = 6,
 * CODE_93 = 7,
 * CODE_39 = 8,
 * CODABAR = 9,
 * ITF = 10,
 * RSS_14 = 11,
 * PDF_417 = 12,
 * RSS_EXPANDED = 13,
 * AZTEC = 14,
 * MAXICODE = 15,
 * UPC_EAN_EXTENSION = 16
 * @param  {function} Callback Function to receive Barcode scan on success or error code on failure.
 * @param  {number} cameraId ID of the camera to use to scan Barcode
 * @param  {number} barcodeFormat Format of Barcode to Scan (See above format list)
 * @param  {number} [barcodeFormat] Format of Barcode to Scan (See above format list) can optionally add add any amount (>1) of supported formats
 */
module.exports.scanBarcode = function() {
    if (arguments.length < 3){
        throw new Error('Not enough arguments supplied to scan Barcode. Need callback, cameraId, and expected Barcode Format.')
    }
    var callback = arguments[0];
    var cameraId = arguments[1];
    var execArgs = [cameraId];
    for (i = 2; i < arguments.length; i++){
        execArgs.push(arguments[i]);
    }
    if (!callback) {
        throw new Error('No callback provided to method.');
    }
    var success = function(result) {
        callback(null, result);
    };
    cordova.exec(success, errorCallback(callback), 'BarcodeScanner', 'scanBarcode', execArgs);
};

module.exports.hasCameraId = function(callback, cameraId) {
    if (!callback) {
        throw new Error('No callback provided to method')
    }
    var success = function(result) {
        callback(null, result);
    };
    cordova.exec(success, errorCallback(callback), 'BarcodeScanner', 'hasCameraId', [cameraId]);
}


});
