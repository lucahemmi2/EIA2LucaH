import { Moveable } from './Movable.js';
export class Snowflake extends Moveable {
    constructor(x, y, speedX, canvasHeight) {
        super(x, y, speedX);
        this.canvasHeight = canvasHeight;
    }
    update() {
        this.y += this.speedX;
        if (this.y > this.canvasHeight)
            this.y = 0;
    }
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, 3, 0, Math.PI * 2);
        context.fillStyle = 'white';
        context.fill();
    }
}
//# sourceMappingURL=Snowflake.js.map