export class Snowflake {
    constructor(x, y, radius, color, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedY = speedY;
    }
    update(canvasHeight) {
        this.y += this.speedY; // Bewege die Schneeflocke nach unten
        if (this.y > canvasHeight) {
            this.y = -this.radius; // Wenn unten angekommen, starte von oben neu
        }
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
export class Snowfall {
    constructor(canvasWidth, canvasHeight, ctx) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.ctx = ctx;
        this.snowflakes = [];
    }
    generateSnowflakes(count) {
        for (let i = 0; i < count; i++) {
            const x = Math.random() * this.canvasWidth; // Zufällige X-Position
            const y = Math.random() * this.canvasHeight; // Zufällige Y-Position
            const radius = Math.random() * 3 + 2; // Radius zwischen 2 und 5 Pixel
            const color = "white"; // Weiße Schneeflocken
            const speedY = Math.random() * 2 + 1; // Geschwindigkeit zwischen 1 und 3 Pixel pro Frame
            this.snowflakes.push(new Snowflake(x, y, radius, color, speedY));
        }
    }
    update() {
        for (const snowflake of this.snowflakes) {
            snowflake.update(this.canvasHeight);
        }
    }
    draw() {
        for (const snowflake of this.snowflakes) {
            snowflake.draw(this.ctx);
        }
    }
}
//# sourceMappingURL=Snowflakes.js.map