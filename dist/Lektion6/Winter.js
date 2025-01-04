import { drawBirdhouse, drawRoof } from './Vogelhaus'; // Importiere die Funktionen aus Vogelhaus.ts
document.addEventListener("DOMContentLoaded", () => {
    // Haupt-Canvas und Kontext holen
    const myCanvas = document.getElementById("myCanvas");
    const myCrc2 = myCanvas.getContext("2d"); // Der 2D-Kontext des Canvas
    // Sicherstellen, dass Canvas vorhanden ist
    if (!myCanvas) {
        console.error("Canvas-Element nicht gefunden.");
        return;
    }
    // Abrufen des Kontexts und expliziter Typ-Cast
    if (!myCrc2) {
        console.error("Canvas-Kontext konnte nicht abgerufen werden.");
        return;
    }
    // Canvas an Fenstergröße anpassen
    function resizeCanvas() {
        myCanvas.width = window.innerWidth;
        myCanvas.height = window.innerHeight;
    }
    // Zufällige Farbe generieren
    function randomColor() {
        return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
    // Zufällige Position innerhalb des Canvas
    function randomPosition() {
        return [Math.random() * myCanvas.width, Math.random() * myCanvas.height];
    }
    // Kreis zeichnen
    function drawCircle(x, y, radius, color) {
        myCrc2.beginPath();
        myCrc2.arc(x, y, radius, 0, Math.PI * 2);
        myCrc2.fillStyle = color;
        myCrc2.fill();
    }
    // Animations-Schleife
    function animate() {
        myCrc2.clearRect(0, 0, myCanvas.width, myCanvas.height); // Canvas löschen
        // Zeichne 50 zufällige Kreise
        for (let i = 0; i < 50; i++) {
            const [x, y] = randomPosition();
            const color = randomColor();
            drawCircle(x, y, 5, color);
        }
        requestAnimationFrame(animate); // Nächsten Frame planen
    }
    // Event-Listener für Größenänderung
    window.addEventListener("resize", resizeCanvas);
    window.onload = () => {
        myCanvas.width = window.innerWidth; // Canvas-Größe anpassen
        myCanvas.height = window.innerHeight; // Canvas-Größe anpassen
        // Vogelhaus und Dach zeichnen
        drawBirdhouse(myCanvas, myCrc2);
        drawRoof(myCanvas, myCrc2);
    };
    // Initialisierung
    resizeCanvas();
    animate();
});
//# sourceMappingURL=Winter.js.map