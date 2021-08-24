document.getElementById("print").addEventListener("click", samplePrintImage);
document.getElementById("printHTML").addEventListener("click", samplePrintHTML);
document.getElementById("printText").addEventListener("click", samplePrintText);
document.getElementById("getPrintableTypes").addEventListener("click", getPrintableTypes);
document.getElementById("getDefaultSettings").addEventListener("click", getDefaultSettings);
function samplePrintImage() {
    cordova.plugins.eloprinter.print("https://www.fnordware.com/superpng/pnggrad8rgb.png");
}

function samplePrintText() {
    var content = document.getElementById("textField").value;
    cordova.plugins.eloprinter.print(content);
}

function samplePrintHTML() {
    var html = '<img src="https://www.fnordware.com/superpng/pnggrad8rgb.png" />';
    cordova.plugins.eloprinter.print(html);
}

function getPrintableTypes() {
    var callback = function (msg) {
        alert(msg);
    };
    cordova.plugins.eloprinter.getPrintableTypes(callback);
}

function getDefaultSettings() {
    // By default, there are not defaults. See '_defaults' in 'plugins/cordova-plugin-eloprinter/printer.js'
    var map = cordova.plugins.eloprinter.getDefaults();
    alert(JSON.stringify(map));
}
