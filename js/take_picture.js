document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture);
document.getElementById("cameraSwitchPicture").addEventListener("click", changePhoto);

// Example Take a Picture using the camera and change image src
function cameraTakePicture() {
    navigator.camera.getPicture(onSuccess, onFail, {quality: 50, destinationType: Camera.DestinationType.DATA_URL});

    // navigator.camera.getPicture(onSuccess, onFail, {quality: 50, destinationType: Camera.DestinationType.FILE_URI});

    function onSuccess(imageData) {
        var img = "url('data:image/png;base64, " + imageData + "')";
        document.body.style.backgroundImage = img;
        document.body.style.backgroundSize = "cover";
        console.log("Success in cameraTakePicture");
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}

// Example Choose Picture using File Manager and change image src
function changePhoto() {
    var cameraSuccess = function (imageURI) {
        // validate file format
        if(!fileValidation(imageURI)){
            alert("Invalid File Type");
            return;
        }
        // add dummy param to disable caching
        var random = Math.floor(Math.random() * 1000);
        var newImagePath = imageURI + "?dummy=" + random;
        var img = "url('" + newImagePath + "')";

        document.body.style.backgroundImage = img;
        document.body.style.backgroundSize = "cover";

        console.log("Success in changePhoto");
        console.log(newImagePath);
    };

    var cameraError = function (msg) {
        console.log("ERROR in Camera");
        alert(msg);
    };

    navigator.camera.getPicture(cameraSuccess, cameraError, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        mediaType: Camera.MediaType.PICTURE
    });
}

function fileValidation(filePath) {
    // Allowing file type
    var allowedExtensions =  /(\.png|\.jpg|\.jpeg|\.webp|\.gif)/i;
    console.log(filePath);
    if (!allowedExtensions.exec(filePath)) {
        return false;
    }
    return true;
}
