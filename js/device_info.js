// Set up button click listener
document.getElementById("deviceInfoShow").addEventListener("click", showInfo);

// Example show Device Info in alert box
function showInfo() {
    // Call the getInfo function with success and failure callbacks
    Device.getInfo(success, fail);
    // Define success callback
    function success(result){
        var message = ""
        for (key in result){
            message += key + " = " + result[key] + "\n"
        }
        alert(message);
    }
    // Define failure callback
    function fail(err){
        console.log(err)
    }
}

