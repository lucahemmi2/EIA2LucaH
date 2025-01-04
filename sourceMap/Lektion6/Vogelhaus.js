// Vogelhäuschen zeichnen
// Vogelhaus.ts
export function drawBirdhouse(myCanvas, myCrc2) {
    const houseWidth = myCanvas.width * 0.7 + 590; // Dynamische Breite
    const houseHeight = myCanvas.height * 1; // Dynamische Höhe
    myCrc2.fillStyle = "#000000";
    myCrc2.fillRect(houseWidth * 0.475, houseHeight * 0.8, 90, 500); // Vogelhaus-Pfosten
    myCrc2.fillStyle = "#332e2d";
    myCrc2.beginPath();
    myCrc2.moveTo(houseWidth * 0.45, houseHeight * 0.8);
    myCrc2.lineTo(houseWidth * 0.45 + 180, houseHeight * 0.8 - 120);
    myCrc2.lineTo(houseWidth * 0.45 - 80, houseHeight * 0.8 - 120);
    myCrc2.lineTo(houseWidth * 0.45 + 90, houseHeight * 0.8 - 0);
    myCrc2.moveTo(houseWidth * 0.495, houseHeight * 0.8);
    myCrc2.lineTo(houseWidth * 0.495 + 180, houseHeight * 0.8 - 120);
    myCrc2.lineTo(houseWidth * 0.495 - 90, houseHeight * 0.8 - 120);
    myCrc2.lineTo(houseWidth * 0.495 + 90, houseHeight * 0.8 - 0);
    myCrc2.closePath();
    myCrc2.fill();
}
export function drawRoof(myCanvas, myCrc2) {
    const houseCenterX = myCanvas.width * 0.5; // Zentrum des Vogelhauses
    const houseTopY = myCanvas.height * 0.4 - 40; // Oberer Punkt des Daches
    const roofWidth = myCanvas.width * 0.1; // Breite des Daches
    myCrc2.fillStyle = "#453510"; // Stützbalken rechts
    myCrc2.beginPath();
    myCrc2.moveTo(houseCenterX + 90, houseTopY + 180);
    myCrc2.lineTo(houseCenterX + 90, houseTopY + 295);
    myCrc2.lineTo(houseCenterX + 120, houseTopY + 295);
    myCrc2.lineTo(houseCenterX + 120, houseTopY + 180);
    myCrc2.closePath();
    myCrc2.fill();
    myCrc2.fillStyle = "#453510"; // Stützbalken mitte
    myCrc2.beginPath();
    myCrc2.moveTo(houseCenterX - 15, houseTopY + 180);
    myCrc2.lineTo(houseCenterX - 15, houseTopY + 295);
    myCrc2.lineTo(houseCenterX + 15, houseTopY + 295);
    myCrc2.lineTo(houseCenterX + 15, houseTopY + 180);
    myCrc2.closePath();
    myCrc2.fill();
    myCrc2.fillStyle = "#453510"; // Stützbalken links
    myCrc2.beginPath();
    myCrc2.moveTo(houseCenterX - 90, houseTopY + 180);
    myCrc2.lineTo(houseCenterX - 90, houseTopY + 295);
    myCrc2.lineTo(houseCenterX - 120, houseTopY + 295);
    myCrc2.lineTo(houseCenterX - 120, houseTopY + 180);
    myCrc2.closePath();
    myCrc2.fill();
    myCrc2.fillStyle = "#33270B";
    myCrc2.beginPath();
    myCrc2.moveTo(houseCenterX, houseTopY); // Spitze des Daches
    myCrc2.lineTo(houseCenterX - roofWidth, houseTopY + roofWidth); // Linker Punkt
    myCrc2.lineTo(houseCenterX + roofWidth, houseTopY + roofWidth); // Rechter Punkt
    myCrc2.closePath();
    myCrc2.fill();
}
