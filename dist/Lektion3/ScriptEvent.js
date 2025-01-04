"use strict";
window.addEventListener('load', handleLoad);
function handleLoad() {
    document.addEventListener('mousemove', setInfoBox);
    document.addEventListener('click', logInfo);
    document.addEventListener('keyup', logInfo);
    document.body.addEventListener('click', logInfo);
    document.body.addEventListener('keyup', logInfo);
    const divElements = document.querySelectorAll('div');
    divElements.forEach(div => {
        div.addEventListener('click', logInfo);
        div.addEventListener('keyup', logInfo);
    });
    document.addEventListener('customButtonClick', handleCustomEvent);
}
function setInfoBox(event) {
    const infoBox = document.getElementById('infoBox');
    if (infoBox) {
        infoBox.textContent = `Mouse Position: (${event.clientX}, ${event.clientY}), Target: ${event.target}`;
        infoBox.style.left = `${event.clientX + 10}px`;
        infoBox.style.top = `${event.clientY + 10}px`;
    }
}
function logInfo(event) {
    console.log('Event type:', event.type);
    console.log('Target:', event.target);
    console.log('Current Target:', event.currentTarget);
    console.log('Event Object:', event);
}
function handleCustomEvent(event) {
    console.log("Custom Event Captured:", event);
    const div1 = document.getElementById('div1');
    if (div1) {
        div1.style.backgroundColor = getRandomColor();
    }
}
//Funktion für eine zufällige Farbe (Random Event)
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//Funktion um das CustomEvent auszulösen
function triggerCustomEvent() {
    var _a;
    const customEvent = new CustomEvent('customButtonClick', { bubbles: true });
    (_a = document.getElementById('customButton')) === null || _a === void 0 ? void 0 : _a.dispatchEvent(customEvent);
}
//# sourceMappingURL=ScriptEvent.js.map