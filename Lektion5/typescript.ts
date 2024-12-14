// Zugriff auf das Canvas-Element und den 2D-Rendering-Context
let canvas = document.querySelector("canvas") as HTMLCanvasElement;
let crc2 = canvas.getContext("2d") as CanvasRenderingContext2D;

//function random(min: number, max: number): number {
  //  return Math.random() * (max - min) + min;
//}

// Hilfsfunktion, um eine zufällige Farbe zu generieren
function randomColor(): string {
    const r = Math.floor(random(0, 255));
    const g = Math.floor(random(0, 255));
    const b = Math.floor(random(0, 255));
    const alpha = random(0.3, 1); // Transparenz
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Canvas füllen mit einem Farbverlauf
function drawBackground(): void {
    let gradient = crc2.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, randomColor());
    gradient.addColorStop(0.5, randomColor());
    gradient.addColorStop(1, randomColor());
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, canvas.width, canvas.height);
}

// Zeichnet zufällige Kreise
function drawRandomCircles(): void {
    for (let i = 0; i < 20; i++) {
        let x = random(0, canvas.width);
        let y = random(0, canvas.height);
        let radius = random(10, 100);
        crc2.beginPath();
        crc2.arc(x, y, radius, 0, 2 * Math.PI);
        crc2.fillStyle = randomColor();
        crc2.fill();
    }
}

// Zeichnet ein Muster aus Linien
function drawRandomLines(): void {
    crc2.lineWidth = random(1, 5);
    for (let i = 0; i < 10; i++) {
        let x1 = random(0, canvas.width);
        let y1 = random(0, canvas.height);
        let x2 = random(0, canvas.width);
        let y2 = random(0, canvas.height);
        crc2.strokeStyle = randomColor();
        crc2.beginPath();
        crc2.moveTo(x1, y1);
        crc2.lineTo(x2, y2);
        crc2.stroke();
    }
}

// Zeichnet geschwungene Pfade
function drawCurves(): void {
    for (let i = 0; i < 5; i++) {
        crc2.beginPath();
        crc2.moveTo(random(0, canvas.width), random(0, canvas.height));
        crc2.bezierCurveTo(
            random(0, canvas.width), random(0, canvas.height),
            random(0, canvas.width), random(0, canvas.height),
            random(0, canvas.width), random(0, canvas.height)
        );
        crc2.strokeStyle = randomColor();
        crc2.lineWidth = random(1, 3);
        crc2.stroke();
    }
}

// Hauptprogramm: Aufruf der Zeichenfunktionen
function createAbstractArt(): void {
    drawBackground();
    drawRandomCircles();
    drawRandomLines();
    drawCurves();
}

// Starte das generative Kunstwerk
createAbstractArt();
