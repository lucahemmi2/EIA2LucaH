// Feste Positionen für Wolken
let cloudPositions: { x: number, y: number }[] = [
    { x: 50, y: 100 },
    { x: 400, y: 120 },
    { x: 600, y: 80 },
    { x: 1200, y: 150 },
    { x: 1500, y: 110 }
];

// Feste Positionen für Berge
let mountainPositions: { x: number, y: number }[] = [
    { x: -100, y: 600 },
    { x: 100, y: 650 },
    { x: 300, y: 650 },
    { x: 900, y: 600 },
    { x: 1000, y: 650 },
    { x: 1200, y: 650 },
    { x: 1600, y: 600 }
];

// Feste Positionen für Bäume
let treePositions: {x: number, y: number}[] = [
    { x: 200, y: 520 },
    { x: 300, y: 700 },
    { x: 500, y: 570 },
    { x: 400, y: 590 },
    { x: 1050, y: 630 },
    { x: 1400, y: 530 },
    { x: 500, y: 630 },
    { x: 900, y: 650 },
    { x: 1250, y: 630 },
    { x: 950, y: 530 },
    { x: 600, y: 630 },
    { x:680, y: 650 },
    { x: 570, y: 650 }
];


function randomLeavesColor(): string {
    const colors = ["#467b41"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Funktion für zufällige Bergfarben
function randomMountains(): string {
    const colors = ["#7f7679"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Virtuelle Breite und Höhe der Szene
const sceneWidth = 2200;
const sceneHeight = 1080;

// Szene zeichnen
export function drawScene(ctx: CanvasRenderingContext2D): void {
    // Hintergrund zeichnen
    function drawBackgroundSky(): void {
        const gradient = ctx.createLinearGradient(0, 0, 0, sceneHeight * 0.5);
        gradient.addColorStop(0, "#87CEEB");
        gradient.addColorStop(1, "#FFFFFF");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, sceneWidth, sceneHeight * 0.5);
    }

    // Boden zeichnen
    function drawGround(): void {
        ctx.fillStyle = "#FFffFF";
        ctx.fillRect(0, sceneHeight * 0.55, sceneWidth, sceneHeight * 0.5);
    }

    // Sonne zeichnen
    function drawSun(): void {
        const sunRadius = 100;
        ctx.beginPath();
        ctx.arc(sceneWidth * 0.55, sceneHeight * 0.2, sunRadius, 0, 2 * Math.PI);
        ctx.fillStyle = "#FFD700";
        ctx.fill();
    }

    // Wolken zeichnen
    function drawClouds(): void {
        for (let { x, y } of cloudPositions) {
            ctx.fillStyle = "#FFFFFF";
            ctx.beginPath();
            ctx.arc(x, y, 30, 0, 2 * Math.PI);
            ctx.arc(x + 40, y + 10, 40, 0, 2 * Math.PI);
            ctx.arc(x - 40, y + 10, 40, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    // Berge zeichnen
    function drawMountains(): void {
        for (let { x, y } of mountainPositions) {
            ctx.fillStyle = randomMountains();
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 150, y - 390); // Zufälliger Höhenwert für den Berg
            ctx.lineTo(x + 450, y);
            ctx.closePath();
            ctx.fill();
        }
    }

    function drawTrees(): void {
        for (let i = 0; i < treePositions.length; i++) {
            let { x, y } = treePositions[i];
    
            // Baumstamm
            ctx.fillStyle = "#8B4513";
            ctx.fillRect(x, y, 25, 80);
            
            // Baumkrone
            ctx.fillStyle = randomLeavesColor();
            ctx.beginPath();
            ctx.arc(x + 12, y, 35, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    

    // Zeichnung starten
    drawBackgroundSky();
    drawSun();
    drawMountains();
    drawGround();
    drawTrees();
    drawClouds();
}
