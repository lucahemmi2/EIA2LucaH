export class Snowflake {
    constructor(canvasWidth, canvasHeight) {
        // Zufällige Startposition
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.speed = Math.random() * 2 + 1; // Geschwindigkeit zwischen 1 und 3
    }
    move(canvasHeight) {
        this.y += this.speed; // Bewegung nach unten
        if (this.y > canvasHeight) {
            this.y = 0; // Wieder oben erscheinen
            this.x = Math.random() * canvasHeight; // Neue zufällige X-Position
        }
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI); // Schneeflocke als Kreis
        ctx.fillStyle = "white";
        ctx.fill();
    }
}
//# sourceMappingURL=Snowflake.js.map