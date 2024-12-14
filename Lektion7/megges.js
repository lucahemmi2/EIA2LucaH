"use strict";
// Hilfsfunktion, um Nachrichten anzuzeigen
function appendLog(message) {
    const logContainer = document.getElementById("logContainer");
    if (!logContainer)
        return;
    const logMessage = document.createElement("div");
    logMessage.textContent = message;
    logContainer.appendChild(logMessage);
}
// Enum for Animal Types
var AnimalType;
(function (AnimalType) {
    AnimalType["Cow"] = "Cow";
    AnimalType["Chicken"] = "Chicken";
    AnimalType["Dog"] = "Dog";
    AnimalType["Horse"] = "Horse";
    AnimalType["Pig"] = "Pig";
    AnimalType["Donkey"] = "Donkey";
})(AnimalType || (AnimalType = {}));
// Enum for Food Types
var FoodType;
(function (FoodType) {
    FoodType["Grass"] = "Grass";
    FoodType["Grains"] = "Grains";
    FoodType["Meat"] = "Meat";
    FoodType["Junk"] = "Junk";
})(FoodType || (FoodType = {}));
// Animal Class
class Animal {
    name;
    type;
    food;
    foodAmount;
    sound;
    color;
    x;
    y;
    constructor(name, type, food, foodAmount, sound, color, x, y) {
        this.name = name;
        this.type = type;
        this.food = food;
        this.foodAmount = foodAmount;
        this.sound = sound;
        this.color = color;
        this.x = x;
        this.y = y;
    }
    sing() {
        return `${this.name} singt: Old MacDonald had a farm, E-I-E-I-O, and on that farm, he had a ${this.type.toLowerCase()}, ${this.sound.repeat(3)}!`;
    }
    eat(foodSupply) {
        if (foodSupply[this.food] >= this.foodAmount) {
            foodSupply[this.food] -= this.foodAmount;
        }
        else {
            console.log(`${this.name} the ${this.type} is still hungry!`);
        }
    }
}
// Create food supply
const foodSupply = {
    [FoodType.Grass]: 100,
    [FoodType.Grains]: 100,
    [FoodType.Meat]: 100,
    [FoodType.Junk]: 100
};
// Create animals
const animals = [
    new Animal("Bessie", AnimalType.Cow, FoodType.Grass, 10, "Moo", "purple", 100, 300),
    new Animal("Clucky", AnimalType.Chicken, FoodType.Grains, 5, "Gack", "red", 200, 350),
    new Animal("Buddy", AnimalType.Dog, FoodType.Meat, 8, "Woof", "brown", 300, 320),
    new Animal("Spirit", AnimalType.Horse, FoodType.Grass, 15, "Neigh", "black", 400, 300),
    new Animal("Porky", AnimalType.Pig, FoodType.Junk, 12, "Oink", "pink", 500, 350),
    new Animal("Eeyore", AnimalType.Donkey, FoodType.Grass, 10, "Hee-Haw", "grey", 600, 320)
];
function drawCow(ctx, x, y) {
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
function drawChicken(ctx, x, y) {
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
function drawDog(ctx, x, y) {
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
function drawHorse(ctx, x, y) {
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
function drawPig(ctx, x, y) {
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
function drawDonkey(ctx, x, y) {
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
function drawFarm() {
    const canvas = document.getElementById("farmCanvas");
    const ctx = canvas.getContext("2d");
    if (!ctx)
        return;
    // Himmel zeichnen
    const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height / 2);
    skyGradient.addColorStop(0, "lightblue");
    skyGradient.addColorStop(1, "white");
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Boden zeichnen
    ctx.fillStyle = "green";
    ctx.fillRect(0, canvas.height * 0.75, canvas.width, canvas.height * 0.25);
    // Tiere zeichnen
    animals.forEach((animal) => {
        // Tier zeichnen
        switch (animal.type) {
            case AnimalType.Cow:
                drawCow(ctx, animal.x, animal.y);
                break;
            case AnimalType.Chicken:
                drawChicken(ctx, animal.x, animal.y);
                break;
            case AnimalType.Dog:
                drawDog(ctx, animal.x, animal.y);
                break;
            case AnimalType.Horse:
                drawHorse(ctx, animal.x, animal.y);
                break;
            case AnimalType.Pig:
                drawPig(ctx, animal.x, animal.y);
                break;
            case AnimalType.Donkey:
                drawDonkey(ctx, animal.x, animal.y);
                break;
        }
        // Name anzeigen
        ctx.fillStyle = "black";
        ctx.font = "12px Arial";
        ctx.textAlign = "center"; // Zentrierter Text
        ctx.fillText(animal.name, animal.x, animal.y - 30); // Über dem Tier
    });
}
function simulateDay() {
    animals.forEach((animal) => {
        const singMessage = animal.sing();
        console.log(singMessage);
        appendLog(singMessage);
        animal.eat(foodSupply);
        const foodMessage = `Remaining food for ${animal.food}: ${foodSupply[animal.food]}`;
        console.log(foodMessage);
        appendLog(foodMessage);
    });
    drawFarm();
}
// Call the simulation function when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    simulateDay();
});
//# sourceMappingURL=megges.js.map