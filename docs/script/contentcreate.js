class ContentCreater{

    static createNode(content){
        if(content["contentType"] == "mainTitle")
            return newNode = ContentCreater._createTitle(text);
        else if(content["contentType"] == "figure")
            return newNode = ContentCreater._createFigure(content["src"], content["text"]);
    }

    static _createTitle(text){
        const newElement = document.createElement('h1');
        const textNode = document.createTextNode(text);
        newElement.appendChild(textNode);
        return newElement;
    }

    static _createFigure(srcs, captions){
        const newElement = document.createElement("div");
        newElement.setAttribute('class', 'figure-list');
        for(let i = 0; srcs.length; i++){
            const figureElement = document.createElement('div');
            figureElement.setAttribute('class', 'figure');

            const image = document.createElement('img');
            image.setAttribute('src', src[i]);

            const caption = document.createElement('p');
            const captionText = document.createTextNode(captions[i]);
            caption.appendChild(captionText);

            figureElement.appendChild(image);
            figureElement.appendChild(caption);
            newElement.appendChild(figureElement);
        }
        return newElement;
    }

}