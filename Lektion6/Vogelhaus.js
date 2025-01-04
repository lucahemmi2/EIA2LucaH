export function drawBirdhouse(ctx) {
    // Feste Werte für das Vogelhaus
    const houseBaseX = 800; // X-Koordinate des Vogelhauspfostens
    const houseBaseY = 400; // Y-Koordinate des Vogelhauspfostens
    const houseWidth = 90; // Breite des Pfostens
    const houseHeight = 500; // Höhe des Pfostens
    const roofBaseY = houseBaseY - houseHeight - 120; // Oberer Punkt des Daches
    const roofWidth = 180; // Breite des Daches
    // Pfosten
    ctx.fillStyle = "#000000";
    ctx.fillRect(houseBaseX, houseBaseY + 350, houseWidth, houseHeight);
    // Vogelhaus-Korpus
    ctx.fillStyle = "#332e2d";
    ctx.beginPath();
    ctx.moveTo(houseBaseX - 90, houseBaseY + 325); // Linker Punkt
    ctx.lineTo(houseBaseX + roofWidth / 2 - 50, roofBaseY + 1100); // Spitze des Daches
    ctx.lineTo(houseBaseX + houseWidth + 90, houseBaseY + 325); // Rechter Punkt
    ctx.closePath();
    ctx.fill();
}
export function drawRoof(ctx) {
    // Feste Werte für das Dach
    const houseCenterX = 845; // Zentrum des Vogelhauses
    const roofTopY = 280; // Oberer Punkt des Daches
    const roofWidth = 150; // Breite des Daches
    const roofHeight = 50; // Höhe des Daches
    // Stützbalken rechts
    ctx.fillStyle = "#453510";
    ctx.beginPath();
    ctx.moveTo(houseCenterX + 90, roofTopY + roofHeight + 150); // Oben rechts
    ctx.lineTo(houseCenterX + 93, roofTopY + roofHeight + 420); // Unten rechts
    ctx.lineTo(houseCenterX + 70, roofTopY + roofHeight + 450); // Unten links
    ctx.lineTo(houseCenterX + 55, roofTopY + roofHeight + 100); // Oben links
    ctx.closePath();
    ctx.fill();
    // Stützbalken mitte
    ctx.fillStyle = "#453510";
    ctx.beginPath();
    ctx.moveTo(houseCenterX, roofTopY + roofHeight + 120); // Oben
    ctx.lineTo(houseCenterX + 25, roofTopY + roofHeight + 400); // Unten rechts
    ctx.lineTo(houseCenterX - 25, roofTopY + roofHeight + 400); // Unten links
    ctx.closePath();
    ctx.fill();
    // Stützbalken links
    ctx.fillStyle = "#453510";
    ctx.beginPath();
    ctx.moveTo(houseCenterX - 90, roofTopY + roofHeight + 150); // Oben links
    ctx.lineTo(houseCenterX - 93, roofTopY + roofHeight + 420); // Unten links
    ctx.lineTo(houseCenterX - 70, roofTopY + roofHeight + 450); // Unten rechts
    ctx.lineTo(houseCenterX - 55, roofTopY + roofHeight + 100); // Oben rechts
    ctx.closePath();
    ctx.fill();
    // Dach
    ctx.fillStyle = "#33270B";
    ctx.beginPath();
    ctx.moveTo(houseCenterX, roofTopY + 75); // Spitze des Daches
    ctx.lineTo(houseCenterX - roofWidth, roofTopY + roofHeight + 285); // Linker Punkt
    ctx.lineTo(houseCenterX + roofWidth, roofTopY + roofHeight + 280); // Rechter Punkt
    ctx.closePath();
    ctx.fill();
}
//# sourceMappingURL=Vogelhaus.js.map