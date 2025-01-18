import { Moveable } from './Movable.js'; // Importiere die Superklasse

export class drawSittingBird extends Moveable {
    private minX: number;
    private maxX: number;
    private direction: number = 1;
    private lastPauseTime: number = 0;
    private bodyColor: string; // Einmalig generierte Farbe für den Körper
    private wingColor: string; // Einmalig generierte Farbe für die Flügel

    constructor(x: number, y: number, speedX: number, minX: number, maxX: number) {
        super(x, y, speedX);
        this.minX = minX;
        this.maxX = maxX;
        this.bodyColor = this.randomBirdColor(); // Farbe wird einmalig im Konstruktor gesetzt
        this.wingColor = this.randomBirdColor(); // Flügelfarbe ebenfalls einmalig gesetzt
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
        // Schnabel
        ctx.fillStyle = "#FFA500";
        ctx.beginPath();
        ctx.moveTo(this.x - 40, this.y - 20);
        ctx.lineTo(this.x - 7, this.y - 22);
        ctx.lineTo(this.x - 7, this.y + 2);
        ctx.closePath();
        ctx.fill();

        // Körper
        ctx.fillStyle = this.bodyColor; // Verwende die gespeicherte Körperfarbe
        ctx.beginPath();
        ctx.ellipse(this.x, this.y - 10, 30, 18, 45, 0, 2 * Math.PI);
        ctx.ellipse(this.x + 10, this.y, 20, 12, 3, 0, 2 * Math.PI);
        ctx.fill();

        // Flügel
        ctx.fillStyle = this.wingColor; // Verwende die gespeicherte Flügelfarbe
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
