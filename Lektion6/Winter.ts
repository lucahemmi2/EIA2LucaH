window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Zufallszahl zwischen min und max
function random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

// Canvas initialisieren
const myCanvas = document.querySelector("canvas") as HTMLCanvasElement;
const myCrc2 = myCanvas.getContext("2d") as CanvasRenderingContext2D;

// Virtuelle Breite und Höhe der Szene
const sceneWidth = 1920;
const sceneHeight = 1080;

function resizeCanvas(): void {
    // Erhalte die CSS-Größe des Canvas
    const cssWidth = myCanvas.clientWidth;
    const cssHeight = myCanvas.clientHeight;

    // Setze die physische Größe entsprechend der CSS-Größe und des Pixelverhältnisses
    const devicePixelRatio = window.devicePixelRatio || 1;
    myCanvas.width = cssWidth * devicePixelRatio;
    myCanvas.height = cssHeight * devicePixelRatio;

    // Skalierung für Zeichenkontext festlegen
    myCrc2.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

    drawScene(); // Zeichne die Szene neu
}

function setupTransform(): void {
    // Transformiere das Canvas, damit die Szene immer passt
    const scaleX = myCanvas.width / sceneWidth;
    const scaleY = myCanvas.height / sceneHeight;
    const scale = Math.min(scaleX, scaleY);

    myCrc2.setTransform(scale, 0, 0, scale, 0, 0); // Einheitliche Skalierung
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function drawSceneResize(): void {
    // Setze Transformation
    setupTransform();

    // Lösche Canvas
    myCrc2.clearRect(0, 0, myCanvas.width, myCanvas.height);

    // Zeichne alle Elemente
    drawBackgroundSky();
    drawSun();
    drawMountains();
    drawGround();
    drawTrees();
    drawBirds();
    drawClouds();
    drawSnowflakes();
    drawBirdhouse();
    drawRoof();
    drawSittingBird();
}

// Zufallszahl-Funktion bleibt gleich

// Zeichnen-Funktionen bleiben unverändert
// ... (Alle anderen Zeichenmethoden bleiben unverändert)
drawScene();

// Zeichnet den Himmel mit einem Farbverlauf
function drawBackgroundSky(): void {
    let gradient = myCrc2.createLinearGradient(0, 0, 0, myCanvas.height * 0.5);
    gradient.addColorStop(0, "#87CEEB"); // Blau
    gradient.addColorStop(1, "#FFFFFF"); // Weiß
    myCrc2.fillStyle = gradient;
    myCrc2.fillRect(0, 0, myCanvas.width, myCanvas.height * 0.5);
}

function drawGround(): void {
    myCrc2.fillStyle = "#fcfcfc"; // leicht abgefärbtes Weiß
    myCrc2.fillRect(0, myCanvas.height * 0.58, myCanvas.width, myCanvas.height * 0.5);
}

function drawSun(): void {
    // Beschränke die Höhe und Breite der Sonne
    const minX = myCanvas.width * 0.01;      // Minimaler X-Wert
    const maxX = myCanvas.width * 1;        // Maximaler X-Wert
    const minY = myCanvas.height * 0.1;    // Minimaler Y-Wert
    const maxY = myCanvas.height * 0.4;   // Maximaler Y-Wert

    // Zufällige Position innerhalb des Bereichs
    const x = random(minX, maxX);
    const y = random(minY, maxY);

    // Sonne zeichnen
    myCrc2.beginPath();
    myCrc2.arc(x, y, 80, 0, 2 * Math.PI); // Radius 80
    myCrc2.fillStyle = "#FFD700"; // Gelb
    myCrc2.fill();
}

// Wolken zeichnen
function drawCloud(x: number, y: number): void {
    myCrc2.fillStyle = "#FFFFFF";
    myCrc2.beginPath();
    myCrc2.arc(x, y, 30, 0, 2 * Math.PI);
    myCrc2.arc(x + 40, y + 10, 40, 0, 2 * Math.PI);
    myCrc2.arc(x - 40, y + 10, 40, 0, 2 * Math.PI);
    myCrc2.fill();
}

// Einzelner Berg
function drawMountain(x: number, y: number): void {
    myCrc2.fillStyle = randomMountains();
    myCrc2.beginPath();
    myCrc2.moveTo(x + 5, y - 5);
    myCrc2.lineTo(x - 250, y + 260);
    myCrc2.lineTo(x + 200, y + 300);
    myCrc2.closePath();
    myCrc2.fill();
}

// Einzelner Baum
function drawTree(x: number, y: number): void {
    myCrc2.fillStyle = randomTreeTrunkColor();
    myCrc2.fillRect(x - 10, y, 40, 160);
    myCrc2.beginPath();
    myCrc2.moveTo(x + 5, y - 20);
    myCrc2.lineTo(x - 65, y + 30);
    myCrc2.lineTo(x + 70, y + 10);
    myCrc2.moveTo(x + 24, y - 25);
    myCrc2.lineTo(x + 90, y - 10);
    myCrc2.moveTo(x + 5, y - 80);
    myCrc2.lineTo(x - 95, y + 120);
    myCrc2.lineTo(x + 100, y + 120);
    myCrc2.closePath();
    myCrc2.fillStyle = randomLeavesColor();
    myCrc2.fill();
}

// Vogelhäuschen zeichnen
function drawBirdhouse(): void {
    const houseWidth = myCanvas.width * 0.1; // Dynamische Breite
    const houseHeight = myCanvas.height * 0.2; // Dynamische Höhe

    myCrc2.fillStyle = "#000000";
    myCrc2.fillRect(houseWidth * 0.475, houseHeight * 0.8, 90, 310); //Vogelhaus-Pfosten
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
   // myCrc2.fillRect(houseWidth * 0.4, houseHeight * 0.5, 15, 120);  //Support Beam 1
   // myCrc2.fillRect(houseWidth * 0.5, houseHeight * 0.5, 15, 120);   // Support Beam 2
    //myCrc2.fillRect(houseWidth * 0.575, houseHeight * 0.5, 15, 120);//  Support Beam 3
    myCrc2.closePath();
    myCrc2.fill();
    
}

function drawRoof(): void {
    const houseCenterX = myCanvas.width * 0.5; // Zentrum des Vogelhauses
    const houseTopY = myCanvas.height * 0.4; // Oberer Punkt des Daches
    const roofWidth = myCanvas.width * 0.1; // Breite des Daches

    myCrc2.fillStyle = "#453510";
    myCrc2.beginPath();
    myCrc2.moveTo(houseCenterX, houseTopY); // Spitze des Daches
    myCrc2.lineTo(houseCenterX - roofWidth, houseTopY + roofWidth); // Linker Punkt
    myCrc2.lineTo(houseCenterX + roofWidth, houseTopY + roofWidth); // Rechter Punkt
    myCrc2.closePath();
    myCrc2.fill();
}

function drawSimpleBird(x: number, y: number): void {
    // Schnabel
    myCrc2.fillStyle = "#FFA500";
    myCrc2.beginPath();
    myCrc2.moveTo(x - 20, y); // Spitze des Schnabels
    myCrc2.lineTo(x - 5, y - 5); // Obere Ecke
    myCrc2.lineTo(x - 5, y + 5); // Untere Ecke
    myCrc2.closePath();
    myCrc2.fill();

    // Körper
    myCrc2.fillStyle = randomBirdColor(); // Zufällig gewählte Farbe aus einem vorgefertigten Topf
    myCrc2.beginPath();
    myCrc2.ellipse(x, y, 10, 6, 0, 0, 2 * Math.PI);
    myCrc2.ellipse(x + 5, y, 10, 3, 3, 0, 2 * Math.PI);
    myCrc2.fill();

    // Flügel
    myCrc2.fillStyle = randomBirdColor(); //Zufällig gewählte Farbe aus einem vorgefertigten Topf
    myCrc2.beginPath();
    myCrc2.ellipse(x + 5, y - 5, 12.5, 5, -0.5, 0, 2 * Math.PI);
    myCrc2.fill();
    myCrc2.closePath();
}

function drawBigBird(x: number, y: number): void {
    // Schnabel
    myCrc2.fillStyle = "#FFA500";
    myCrc2.beginPath();
    myCrc2.moveTo(x - 40, y - 10); // Spitze des Schnabels
    myCrc2.lineTo(x - 7, y - 12); // Obere Ecke
    myCrc2.lineTo(x - 7, y + 12); // Untere Ecke
    myCrc2.closePath();
    myCrc2.fill();

    // Körper
    myCrc2.fillStyle = randomBirdColor(); // Zufällig gewählte Farbe aus einem vorgefertigten Topf
    myCrc2.beginPath();
    myCrc2.ellipse(x, y, 30, 18, 45, 0, 2 * Math.PI);
    myCrc2.ellipse(x + 10, y, 20, 12, 3, 0, 2 * Math.PI);
    myCrc2.fill();

    // Flügel
    myCrc2.fillStyle = randomBirdColor(); //Zufällig gewählte Farbe aus einem vorgefertigten Topf
    myCrc2.beginPath();
    myCrc2.ellipse(x + 5, y + 5, 25, 15, 45, 0, 2 * Math.PI);
    myCrc2.fill();
    myCrc2.closePath();
}

// Berge zeichnen
function drawMountains(): void {
    const minY = myCanvas.height * 0.2;
    const maxY = myCanvas.height * 0.4;

    for (let i = 0; i < 10; i++) {
        let x = random(0, myCanvas.width);     // Zufällige X-Koordinate
        let y = random(minY, maxY);           // Zufällige Y-Koordinate innerhalb des Bereichs
        drawMountain(x, y);
    }
}

// Zeichnet Wolken
function drawClouds(): void {
    for (let i = 0; i < 10; i++) {
        let x = random(0, myCanvas.width);
        let y = random(50, myCanvas.height * 0.3);
        drawCloud(x, y);
    }
}

// Bäume zeichnen
function drawTrees(): void {
    const minY = myCanvas.height * 0.4;
    const maxY = myCanvas.height * 0.8;
    for (let i = 0; i < 15; i++) {
        let x = random(0, myCanvas.width); // Zufällige X-Koordinate
        let y = random(minY, maxY);        // Zufällige Y-Koordinate 
        drawTree(x, y);
    }
}

// Vögel zeichnen
function drawBirds(): void {
    const minY = myCanvas.height * 0.32;
    const maxY = myCanvas.height * 0.87;
    for (let i = 0; i < 40; i++) {
        let x = random(0, myCanvas.width);
        let y = random(minY, maxY);
        drawSimpleBird(x, y);
    }
}

function drawSittingBird(): void {
    const minY = myCanvas.height * 0.62;
    const maxY = myCanvas.height * 0.64;
    const minX = myCanvas.width * 0.4;
    const maxX = myCanvas.width * 0.6;

    for (let i = 0; i < 2; i++) {
        let x = random(minX, maxX);
        let y = random(minY, maxY);
        drawBigBird(x, y);
    }
}

// Schneeflocken zeichnen
function drawSnowflakes(): void {
    myCrc2.fillStyle = "#FFFFFF";
    for (let i = 0; i < 120; i++) {
        let x = random(0, myCanvas.width);
        let y = random(0, myCanvas.height);
        myCrc2.beginPath();
        myCrc2.arc(x, y, random(2, 5), 0, 2 * Math.PI);
        myCrc2.fill();
    }
}

//FARBSPEICHER!!!!
// Vögel
function randomBirdColor(): string {
    const colors = ["#808000", "#20603d", "#781f19", "#0e518d", "#4a203b"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function randomLeavesColor(): string {
    const colors = ["#467b41", "#7aba38", "#354733", "#c1121c", "#008000"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function randomTreeTrunkColor(): string {
    const colors = ["#995000", "#6e3f0c", "#503211", "#4a3217", "#372817"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function randomMountains(): string {
    const colors = ["#7f7679", "#534a45", "#35302c", "#738d71", "#372817"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Gesamtes Bild rendern
function drawScene(): void {

    drawBackgroundSky();      // Himmel zuerst
    drawSun();               //  Sonne 
    drawMountains();        //   Berge
    drawGround();          //    Boden 
    drawTrees();          //     Bäume         
    drawBirds();         //      Vögel
    drawClouds();       //       Wolken als letzte Schicht im Himmel
    drawSnowflakes();  //        Schneeflocken  
    drawBirdhouse();  //         Vogelhäuschen + Pfosten (Schwarz-Grau)
    drawRoof();      //          Dach (Braun)
    drawSittingBird();
}

drawScene();
