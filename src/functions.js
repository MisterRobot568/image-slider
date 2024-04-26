// this function is used to get all IDs of images based on a shared class name
function getElementIDs(className) {
    const elements = document.querySelectorAll(`.${className}`);

    const elementIDs = [];
    elements.forEach((element) => {
        elementIDs.push(element.id);
    });

    return elementIDs;
}

export default getElementIDs;
