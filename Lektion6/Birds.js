export class Bird {
    constructor(x, y, speedX, canvasWidth, canvasHeight) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }
    update() {
        this.x += this.speedX;
        // Vogel bewegt sich wieder in den sichtbaren Bereich
        if (this.x > this.canvasWidth) {
            this.x = -50; // Startet erneut von links
        }
        else if (this.x < -50) {
            this.x = this.canvasWidth; // Startet erneut von rechts
        }
    }
    drawBirds(ctx) {
        // Schnabel
        ctx.fillStyle = "#FFA500";
        ctx.beginPath();
        ctx.moveTo(this.x - 20, this.y); // Spitze des Schnabels
        ctx.lineTo(this.x - 5, this.y - 5); // Obere Ecke
        ctx.lineTo(this.x - 5, this.y + 5); // Untere Ecke
        ctx.closePath();
        ctx.fill();
        // Körper
        ctx.fillStyle = this.randomBirdColor();
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, 10, 6, 0, 0, 2 * Math.PI);
        ctx.ellipse(this.x + 5, this.y, 10, 3, 3, 0, 2 * Math.PI);
        ctx.fill();
        // Flügel
        ctx.fillStyle = this.randomBirdColor();
        ctx.beginPath();
        ctx.ellipse(this.x + 5, this.y - 5, 12.5, 5, -0.5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    randomBirdColor() {
        const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFD700", "#FF69B4"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}
//# sourceMappingURL=Birds.js.map