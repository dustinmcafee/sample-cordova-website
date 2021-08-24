document.getElementById("scanQRFront").addEventListener("click", scanQRFront);
document.getElementById("scanQRAndEAN13Front").addEventListener("click", scanQRAndEAN13Front);
document.getElementById("scanEAN13Front").addEventListener("click", scanEAN13Front);
//document.getElementById("scanQRBack").addEventListener("click", scanQRBack);
document.addEventListener("deviceready", checkCameras, false);


function scanQRFront() {
    BarcodeScanner.scanBarcode(
        function (err, result) {
            if (err) {
                console.log('scan error:', err._message);
            } else {
                document.getElementById("textField").setAttribute("value", result);
            }
        }, BarcodeScanner.CAMERA_FRONT, BarcodeScanner.FORMAT_QR_CODE
    );
}

function scanEAN13Front() {
    BarcodeScanner.scanBarcode(
        function (err, result) {
            if (err) {
                console.log('scan error:', err._message);
            } else {
                document.getElementById("textField").setAttribute("value", result);
            }
        }, BarcodeScanner.CAMERA_FRONT, BarcodeScanner.FORMAT_EAN_13
    );
}

function scanQRAndEAN13Front() {
    BarcodeScanner.scanBarcode(
        function (err, result) {
            if (err) {
                console.log('scan error:', err._message);
            } else {
                document.getElementById("textField").setAttribute("value", result);
            }
        }, BarcodeScanner.CAMERA_FRONT, BarcodeScanner.FORMAT_QR_CODE, BarcodeScanner.FORMAT_EAN_13 // Just keep adding formats you want to support!
    );
}

function scanQRBack() {
    BarcodeScanner.scanBarcode(
        function (err, result) {
            if (err) {
                console.log('scan error:', err._message);
            } else {
                document.getElementById("textField").setAttribute("value", result);
            }
        }, BarcodeScanner.CAMERA_BACK, BarcodeScanner.FORMAT_QR_CODE
    );
}

function checkCameras() {
    BarcodeScanner.hasCameraId(
        function (err, result) {
            if (err) {
                // This should only happen if you are using Android API < 21
                console.log('Error:', err._message);
            } else {
                if (result = "1") {
                    document.getElementById("hasFrontCameraIndicator").innerHTML = "Device has Front Camera";
                } else {
                    document.getElementById("hasFrontCameraIndicator").innerHTML = "Device does not have Front Camera";
                }
            }
        }, BarcodeScanner.CAMERA_FRONT
    );
    // ELO I-Series devices seem to report false back camera support. Safe to assume they do not have a rear camera.
//    BarcodeScanner.hasCameraId(
//        function(err, result){
//            if(err) {
//                // This should only happen if you are using Android API < 21
//                console.log('Error:', err._message);
//            } else {
//                if(result = "1"){
//                    document.getElementById("hasBackCameraIndicator").innerHTML = "Device has Back Camera";
//                } else {
//                    document.getElementById("hasBackCameraIndicator").innerHTML = "Device does not have Back Camera";
//                }
//            }
//        }, BarcodeScanner.CAMERA_BACK
//    );
}

