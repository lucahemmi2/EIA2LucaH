export function drawCow(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    // Kopf
    ctx.fillStyle = "#684FA3"; // Braun
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.fill();

    // Flecken
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(x - 8, y + 10, 4, 20, 1 * Math.PI);
    ctx.fill();
    //Schnauze
    ctx.fillStyle = "#FFC0CB";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 8, y + 5);
    ctx.lineTo(x + 8, y + 10);
    ctx.lineTo(x + 10, y + 10);
    ctx.lineTo(x - 8, y + 15);
    ctx.fill();

    //Augen
    ctx.fillStyle = "#FFFFFF";
    ctx.moveTo(x, y - 10);
    ctx.beginPath();
    ctx.arc(x - 4, y - 10, 5, 3, 3 * Math.PI);
    ctx.arc(x + 4, y - 10, 5, 3, 3 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "#000000";
    ctx.moveTo(x, y - 10);
    ctx.beginPath();
    ctx.arc(x - 4, y - 10, 2, 3, 3 * Math.PI);
    ctx.arc(x + 4, y - 10, 2, 3, 3 * Math.PI);
    ctx.fill();

    // Ohren
    ctx.fillStyle = "#6B4226";
    ctx.beginPath();
    ctx.ellipse(x - 30, y - 10, 10, 5, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(x + 30, y - 10, 10, 5, -Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();
}

export function drawChicken(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    // Körper
    ctx.fillStyle = "#FFFF00"; // Gelb
    ctx.beginPath();
    ctx.ellipse(x, y, 15, 10, 0, 0, 2 * Math.PI);
    ctx.fill();
    // Kopf
    ctx.fillStyle = "#FFA500"; // Orange
    ctx.beginPath();
    ctx.arc(x + 10, y - 5, 10, 0, 2 * Math.PI);
    ctx.fill();
    //Augen
    ctx.fillStyle = "#FFFFFF";
    ctx.moveTo(x + 10, y - 10);
    ctx.beginPath();
    ctx.arc(x + 10, y - 10, 3, 3, 3 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "#000000";
    ctx.moveTo(x, y - 10);
    ctx.beginPath();
    ctx.arc(x + 11, y - 10, 1, 3, 3 * Math.PI);
    ctx.fill();
    // Schnabel
    ctx.fillStyle = "#FF4500"; // Rot
    ctx.beginPath();
    ctx.moveTo(x + 20, y - 5);
    ctx.lineTo(x + 15, y - 2);
    ctx.lineTo(x + 15, y - 8);
    ctx.closePath();
    ctx.fill();
}

export function drawDog(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    // Kopf
    ctx.fillStyle = "#8B4513"; // Braun
    ctx.beginPath();
    ctx.arc(x, y - 10, 20, 0, 2 * Math.PI);
    ctx.fill();
    //Augen
    ctx.fillStyle = "#FFFFFF";
    ctx.moveTo(x, y - 10);
    ctx.beginPath();
    ctx.arc(x - 4, y - 18, 5, 3, 3 * Math.PI);
    ctx.arc(x + 4, y - 18, 5, 3, 3 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "#000000";
    ctx.moveTo(x, y - 10);
    ctx.beginPath();
    ctx.arc(x - 4, y - 18, 2, 3, 3 * Math.PI);
    ctx.arc(x + 4, y - 18, 2, 3, 3 * Math.PI);
    ctx.fill();
    // Ohren
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.ellipse(x - 15, y - 20, 8, 15, Math.PI / 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + 15, y - 20, 8, 15, -Math.PI / 6, 0, 2 * Math.PI);
    ctx.fill();

}

export function drawHorse(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    // Kopf
    ctx.fillStyle = "#654321"; // Dunkelbraun
    ctx.beginPath();
    ctx.ellipse(x, y, 15, 25, 0, 0, 2 * Math.PI);
    ctx.fill();
    // Mähne
    ctx.fillStyle = "#000000"; // Schwarz
    ctx.beginPath();
    ctx.ellipse(x - 10, y - 15, 5, 15, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();
    //Augen
    ctx.fillStyle = "#FFFFFF";
    ctx.moveTo(x, y - 10);
    ctx.beginPath();
    ctx.arc(x - 4, y - 8, 5, 3, 3 * Math.PI);
    ctx.arc(x + 4, y - 8, 5, 3, 3 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "#000000";
    ctx.moveTo(x, y - 10);
    ctx.beginPath();
    ctx.arc(x - 4, y - 8, 2, 3, 3 * Math.PI);
    ctx.arc(x + 4, y - 8, 2, 3, 3 * Math.PI);
    ctx.fill();
}

export function drawPig(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    // Kopf
    ctx.fillStyle = "#FFC0CB"; // Rosa
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();
    // Schnauze
    ctx.fillStyle = "#FF69B4"; // Pink
    ctx.beginPath();
    ctx.arc(x, y + 10, 10, 0, 2 * Math.PI);
    ctx.fill();
    //Nasenlöcher 
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(x - 3, y + 10, 2, 3, 3 * Math.PI);
    ctx.arc(x + 3, y + 10, 2, 3, 3 * Math.PI);
    ctx.fill();
    //Augen
    ctx.fillStyle = "#FFFFFF";
    ctx.moveTo(x, y - 10);
    ctx.beginPath();
    ctx.arc(x - 4, y - 8, 5, 3, 3 * Math.PI);
    ctx.arc(x + 4, y - 8, 5, 3, 3 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "#000000";
    ctx.moveTo(x, y - 10);
    ctx.beginPath();
    ctx.arc(x - 4, y - 8, 2, 3, 3 * Math.PI);
    ctx.arc(x + 4, y - 8, 2, 3, 3 * Math.PI);
    ctx.fill();
}

export function drawDonkey(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    // Ohren
    ctx.fillStyle = "#A9A9A9";
    ctx.beginPath();
    ctx.ellipse(x - 10, y - 30, 5, 15, Math.PI / -10, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(x + 10, y - 30, 5, 15, -Math.PI / 14, 0, 2 * Math.PI);
    ctx.fill();

    // Kopf
    ctx.fillStyle = "#808080"; // Grau
    ctx.beginPath();
    ctx.ellipse(x + 3, y, 20, 25, 0, 0, 2 * Math.PI);
    ctx.fill();

    //Augen
    ctx.fillStyle = "#FFFFFF";
    ctx.moveTo(x, y - 10);
    ctx.beginPath();
    ctx.arc(x - 4, y - 10, 5, 3, 3 * Math.PI);
    ctx.arc(x + 4, y - 10, 5, 3, 3 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "#000000";
    ctx.moveTo(x, y - 10);
    ctx.beginPath();
    ctx.arc(x - 4, y - 10, 2, 3, 3 * Math.PI);
    ctx.arc(x + 4, y - 10, 2, 3, 3 * Math.PI);
    ctx.fill();
}
