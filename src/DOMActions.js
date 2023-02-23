const _getDomElem = id => {
    return document.getElementById(id);
}

 export const mapListToDomElements = listOfId => {
    const _viewElems = {}

    for(const id of listOfId){
        _viewElems[id] = _getDomElem(id);

    }
    return _viewElems;
}