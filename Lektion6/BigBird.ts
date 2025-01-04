export class BigBird {
    x: number;
    y: number;
    speedX: number;
    minX: number;
    maxX: number;
    direction: number = 1;
    lastPauseTime: number = 0;

    constructor(x: number, y: number, speedX: number, minX: number, maxX: number) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.minX = minX;
        this.maxX = maxX;
    }

    update(timestamp: number): void {
        if (timestamp - this.lastPauseTime > 2000) {
            if (this.x >= this.maxX || this.x <= this.minX) {
                this.direction *= -1; // Richtung umkehren
                this.lastPauseTime = timestamp; // Pause einlegen
            }
            this.x += this.speedX * this.direction;
        }
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#FFA500"; // Schnabel
        ctx.beginPath();
        ctx.moveTo(this.x - 40, this.y - 20);
        ctx.lineTo(this.x - 7, this.y - 22);
        ctx.lineTo(this.x - 7, this.y + 2);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = this.randomBirdColor(); // Körper
        ctx.beginPath();
        ctx.ellipse(this.x, this.y - 10, 30, 18, 45, 0, 2 * Math.PI);
        ctx.ellipse(this.x + 10, this.y, 20, 12, 3, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = this.randomBirdColor(); // Flügel
        ctx.beginPath();
        ctx.ellipse(this.x + 5, this.y - 5, 25, 15, 45, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    private randomBirdColor(): string {
        const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFD700", "#FF69B4"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}
