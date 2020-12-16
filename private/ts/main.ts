function getJSON(path:string): any{
    let jsonObject: any;
    let request:XMLHttpRequest = new XMLHttpRequest();
    request.open('GET', path, true)

    request.onload = () => {
        try{
            jsonObject = JSON.parse(request.responseText)
        }
        catch(e){

        }
    }

    request.send(null);
    return jsonObject;
}

function getObject(): any{
    let jsonObject: any;
    return jsonObject;
}
