"use strict";
function getJSON(path) {
    var jsonObject;
    var request = new XMLHttpRequest();
    request.open('GET', path, true);
    request.onload = function () {
        try {
            jsonObject = JSON.parse(request.responseText);
        }
        catch (e) {
        }
    };
    request.send(null);
    return jsonObject;
}
function getObject() {
    var jsonObject;
    return jsonObject;
}
