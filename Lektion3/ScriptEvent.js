"use strict";
// Install load listener on the window object
window.addEventListener('load', handleLoad);
function handleLoad() {
    // Set up listeners for logging and custom events
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
    // Add listener to capture the custom event
    document.addEventListener('customButtonClick', handleCustomEvent);
}
// Function to handle mouse move events
function setInfoBox(event) {
    const infoBox = document.getElementById('infoBox');
    if (infoBox) {
        // Display mouse position and the event's target in the span element
        infoBox.textContent = `Mouse Position: (${event.clientX}, ${event.clientY}), Target: ${event.target}`;
        infoBox.style.left = `${event.clientX + 10}px`;
        infoBox.style.top = `${event.clientY + 10}px`;
    }
}
// Function to log event information in the browser console
function logInfo(event) {
    console.log('Event type:', event.type);
    console.log('Target:', event.target);
    console.log('Current Target:', event.currentTarget);
    console.log('Event Object:', event);
}
// Function to handle the custom event and change background color
function handleCustomEvent(event) {
    console.log("Custom Event Captured:", event);
    const div1 = document.getElementById('div1');
    if (div1) {
        div1.style.backgroundColor = getRandomColor();
    }
}
// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Function to dispatch the custom event
function triggerCustomEvent() {
    const customEvent = new CustomEvent('customButtonClick', { bubbles: true });
    document.getElementById('customButton')?.dispatchEvent(customEvent);
}
//# sourceMappingURL=ScriptEvent.js.map