import { drawBirdhouse, drawRoof } from './Vogelhaus'; // Importiere die Funktionen aus Vogelhaus.ts
document.addEventListener("DOMContentLoaded", () => {
    // Haupt-Canvas und Kontext holen
    const canvas = document.getElementById("myCanvas");
    // In Winter.ts
    const myCanvas = document.getElementById("myCanvas");
    const myCrc2 = myCanvas.getContext("2d"); // Der 2D-Kontext des Canvas
    // Sicherstellen, dass Canvas vorhanden ist
    if (!canvas) {
        console.error("Canvas-Element nicht gefunden.");
        return;
    }
    // Abrufen des Kontexts und expliziter Typ-Cast
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        console.error("Canvas-Kontext konnte nicht abgerufen werden.");
        return;
    }
    // Canvas an Fenstergröße anpassen
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    // Zufällige Farbe generieren
    function randomColor() {
        return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
    // Zufällige Position innerhalb des Canvas
    function randomPosition() {
        return [Math.random() * canvas.width, Math.random() * canvas.height];
    }
    // Kreis zeichnen
    function drawCircle(x, y, radius, color) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }
    // Animations-Schleife
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas löschen
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
    function initializeCanvas() {
        const myCanvas = document.getElementById("myCanvas");
        const myCrc2 = myCanvas.getContext("2d");
        if (myCrc2) {
            drawBirdhouse(myCanvas, myCrc2); // Hier rufst du die Funktion auf
            drawRoof(myCanvas, myCrc2); // Und hier ebenfalls
        }
    }
    initializeCanvas();
    // Initialisierung
    resizeCanvas();
    animate();
});
