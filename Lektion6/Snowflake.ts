import { Moveable } from './Movable.js';

export class Snowflake extends Moveable {
    private canvasHeight: number;

    constructor(x: number, y: number, speedX: number, canvasHeight: number) {
        super(x, y, speedX);
        this.canvasHeight = canvasHeight;
    }

    update(): void {
        this.y += this.speedX;
        if (this.y > this.canvasHeight) this.y = 0;
    }

    draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.arc(this.x, this.y, 3, 0, Math.PI * 2);
        context.fillStyle = 'white';
        context.fill();
    }
}
