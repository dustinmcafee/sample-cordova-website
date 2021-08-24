document.getElementById("zebraBCRManual").addEventListener("click", scanManual);
document.getElementById("zebraBCRHandsFree").addEventListener("click", scanHandsFree);
document.addEventListener("deviceready", checkCameras, false);

function scanManual() {
    ZebraBCR.scanManual(
        function (err, result) {
            if (err) {
                console.log('scanManual error:', err._message);
            } else {
                document.getElementById("textField").setAttribute("value", result);
            }
        }
    );
}

function scanHandsFree() {
    ZebraBCR.scanHandsFree(
        function (err, result) {
            if (err) {
                console.log('scanHandsFree error:', err._message);
            } else {
                document.getElementById("textField").setAttribute("value", result);
            }
        }
    );
}
