import { drawBirdhouse, drawRoof } from './Vogelhaus.js'; // Importiere die Vogelhaus-Funktionen
import { Snowfall } from './Snowflakes.js'; // Importiere die Schneefall-Klasse
import { drawScene } from './Szene.js';
import { Bird } from './Birds.js'; // Importiere die Bird-Klasse
import { BigBird } from './BigBird.js'; // Importiere die BigBird-Klasse
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("myCanvas");
    if (!(canvas instanceof HTMLCanvasElement)) {
        console.error("Das Canvas-Element wurde nicht gefunden.");
        return;
    }
    const myCrc2 = canvas.getContext("2d");
    if (!myCrc2) {
        console.error("Der 2D-Kontext konnte nicht erstellt werden.");
        return;
    }
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Erstelle Schneefall
    const snowfall = new Snowfall(canvas.width, canvas.height, myCrc2);
    snowfall.generateSnowflakes(200);
    // Erstelle Array für fliegende Vögel
    const birds = [];
    const birdCount = 20; // Anzahl der Vögel
    for (let i = 0; i < birdCount; i++) {
        const x = Math.random() * canvas.width; // Zufällige Startposition
        const y = Math.random() * canvas.height * 0.5 + 280; // Im oberen Bereich
        const speedX = -(Math.random() * 2 + 1); // Geschwindigkeit von 1 bis 3 Pixel
        birds.push(new Bird(x, y, speedX, canvas.width, canvas.height));
    }
    // Erstelle Array für sitzende Vögel
    const bigBirds = [];
    const bigBirdCount = 2; // Anzahl der sitzenden Vögel
    const minY = canvas.height * 0.65;
    const maxY = canvas.height * 0.67;
    const minX = canvas.width * 0.3 + 150;
    const maxX = canvas.width * 0.5;
    for (let i = 0; i < bigBirdCount; i++) {
        const x = Math.random() * (maxX - minX) + minX;
        const y = Math.random() * (maxY - minY) + minY;
        const speedX = 0.05 + Math.random() * 0.1; // Langsame Bewegung
        bigBirds.push(new BigBird(x, y, speedX, minX, maxX));
    }
    function animate(timestamp) {
        // Canvas leeren
        myCrc2.clearRect(0, 0, canvas.width, canvas.height);
        // Statische Szene zeichnen (Hintergrund)
        drawScene(myCrc2);
        // Vögel aus Birds.ts aktualisieren und zeichnen (Hintergrund-Vögel)
        for (const bird of birds) {
            bird.update();
            bird.drawBirds(myCrc2);
        }
        // Vogelhaus und Dach zeichnen (im Vordergrund)
        drawBirdhouse(myCrc2);
        drawRoof(myCrc2);
        // Vögel aus BigBird.ts aktualisieren und zeichnen (Vordergrund-Vögel)
        for (const bigBird of bigBirds) {
            bigBird.update(timestamp);
            bigBird.draw(myCrc2);
        }
        // Schneeflocken aktualisieren und zeichnen
        snowfall.update();
        snowfall.draw();
        // Animation fortsetzen
        requestAnimationFrame(animate);
    }
    // Animation starten
    animate(0);
});
//# sourceMappingURL=Winter.js.map