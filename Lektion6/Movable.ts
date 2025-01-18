export abstract class Moveable {
    x: number;
    y: number;
    speedX: number;

    constructor(x: number, y: number, speedX: number) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
    }

    abstract update(): void;
    abstract draw(ctx: CanvasRenderingContext2D): void; // `draw` als abstrakte Methode deklarieren
}
