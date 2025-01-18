export function drawMountains(canvas, ctx) {
    // Feste Positionen für Berge
    let mountainPositions = [
        { x: -100, y: 600 },
        { x: 100, y: 650 },
        { x: 300, y: 650 },
        { x: 900, y: 600 },
        { x: 1000, y: 650 },
        { x: 1200, y: 650 },
        { x: 1600, y: 600 }
    ];
    function randomMountains() {
        const colors = ["#7f7679", "#534a45", "#35302c", "#738d71", "#372817"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    for (let i = 0; i < mountainPositions.length; i++) {
        let { x, y } = mountainPositions[i];
        ctx.fillStyle = randomMountains();
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 150, y - 390); // Zufälliger Höhenwert für den Berg
        ctx.lineTo(x + 450, y);
        ctx.closePath();
        ctx.fill();
    }
}
//# sourceMappingURL=Berge.js.map