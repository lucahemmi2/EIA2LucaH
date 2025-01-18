import { drawBirdhouse, drawRoof } from './Vogelhaus.js';
import { drawScene } from './Szene.js';
import { drawFlyingBird } from './Birds.js';
import { drawSittingBird } from './BigBird.js';
import { Snowflake } from './Snowflake.js';
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
    const moveables = [];
    // Fliegende Vögel hinzufügen
    const birdCount = 20;
    for (let i = 0; i < birdCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.5 + 280;
        const speedX = -(Math.random() * 2 + 1);
        moveables.push(new drawFlyingBird(x, y, speedX, canvas.width, canvas.height));
    }
    // Sitzende Vögel hinzufügen
    const bigBirdCount = 2;
    const minY = canvas.height * 0.65;
    const maxY = canvas.height * 0.67;
    const minX = canvas.width * 0.3 + 150;
    const maxX = canvas.width * 0.5;
    for (let i = 0; i < bigBirdCount; i++) {
        const x = Math.random() * (maxX - minX) + minX;
        const y = Math.random() * (maxY - minY) + minY;
        const speedX = 0.05 + Math.random() * 0.1;
        moveables.push(new drawSittingBird(x, y, speedX, minX, maxX));
    }
    // Schneeflocken hinzufügen
    const snowflakeCount = 200;
    for (let i = 0; i < snowflakeCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = Math.random() * 1 + 0.5;
        moveables.push(new Snowflake(x, y, speedX, canvas.height));
    }
    function animate(timestamp) {
        myCrc2.clearRect(0, 0, canvas.width, canvas.height);
        // 1. Hintergrundszene zeichnen
        drawScene(myCrc2);
        // 2. Vögel im Hintergrund zeichnen
        for (const moveable of moveables) {
            if (moveable instanceof drawFlyingBird) {
                moveable.update(timestamp);
                moveable.draw(myCrc2);
            }
        }
        // 3. Vogelhaus und Dach zeichnen
        drawBirdhouse(myCrc2);
        drawRoof(myCrc2);
        // 4. Vögel im Vordergrund zeichnen
        for (const moveable of moveables) {
            if (moveable instanceof drawSittingBird) {
                moveable.update(timestamp);
                moveable.draw(myCrc2);
            }
        }
        // 5. Animationsloop fortsetzen
        requestAnimationFrame(animate);
    }
    animate(0);
});
//# sourceMappingURL=Winter.js.map