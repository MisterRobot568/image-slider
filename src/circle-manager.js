class CircleManager {
    constructor(ID) {
        this.circleID = `${ID}circlebtn`;
    }

    createNavCircle() {
        const circleButton = document.createElement('button');
        circleButton.setAttribute('class', 'circle-buttons');
        circleButton.setAttribute('id', `${this.circleID}circlebtn`);
        circleButton.setAttribute('type', 'button');
    }
}

export default CircleManager;
