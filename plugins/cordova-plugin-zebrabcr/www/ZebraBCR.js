cordova.define("cordova-plugin-zebrabcr.ZebraBCR", function(require, exports, module) {

var exec = require('cordova/exec');

function errorCallback(callback) {
    if (!callback) {
        return null;
    }
    return function(error) {
        var errorCode = parseInt(error);
        var BCRError = {};
        switch (errorCode) {
            case 0:
                BCRError = {
                    name: 'TIMEOUT',
                    code: 0,
                    _message: 'Barcode Reader Timeout.'
                };
                break;
            case 1:
                BCRError = {
                    name: 'CANCELLED',
                    code: 1,
                    _message: 'The user Cancelled the Barcode Scan'
                };
                break;
            case 2:
                BCRError = {
                    name: 'UNKNOWN',
                    code: 2,
                    _message: 'Unknown error.'
                };
                break;
            case 3:
                BCRError = {
                    name: 'ARGUMENTS',
                    code: 3,
                    _message: 'Supplied incorrect arguments to function'
                };
                break;
            case 4:
                BCRError = {
                    name: 'PERMISSIONS',
                    code: 4,
                    _message: 'Insufficient permissions to use barcode reader'
                };
                break;
        }
        callback(BCRError);
    };
}

/**
 * Scan Barcode with HH Zebra Barcode Scanner using Manual Mode.
 * @param  {function} Callback Function to receive Barcode scan on success or error code on failure.
 */
module.exports.scanManual = function(callback) {
    if (!callback) {
        throw new Error('No callback provided to method.');
    }
    var success = function(result) {
        callback(null, result);
    };
    cordova.exec(success, errorCallback(callback), 'ZebraBCR', 'scanManual', []);
};

/**
 * Scan Barcode with HH Zebra Barcode Scanner using Hands-Free Mode.
 * @param  {function} Callback Function to receive Barcode scan on success or error code on failure.
 */
module.exports.scanHandsFree = function(callback) {
    if (!callback) {
        throw new Error('No callback provided to method')
    }
    var success = function(result) {
        callback(null, result);
    };
    cordova.exec(success, errorCallback(callback), 'ZebraBCR', 'scanHandsFree', []);
}

});
