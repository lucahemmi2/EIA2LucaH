// Funktionen aus Tiere.ts importieren
import { drawCow, drawChicken, drawDog, drawHorse, drawPig, drawDonkey } from "./Tiere.js";
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
// Base Animal Class
class Animal {
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
    doSpecialAction() {
        return `${this.name} is doing something special.`;
    }
}
// Specific Animal Subclasses
class Cow extends Animal {
    doSpecialAction() {
        return `${this.name} is chewing cud.`;
    }
}
class Chicken extends Animal {
    doSpecialAction() {
        return `${this.name} laid an egg.`;
    }
}
class Dog extends Animal {
    doSpecialAction() {
        return `${this.name} is guarding the farm.`;
    }
}
class Horse extends Animal {
    doSpecialAction() {
        return `${this.name} is galloping around.`;
    }
}
class Pig extends Animal {
    doSpecialAction() {
        return `${this.name} is rolling in the mud.`;
    }
}
class Donkey extends Animal {
    doSpecialAction() {
        return `${this.name} is carrying some hay.`;
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
    new Cow("Bessie", AnimalType.Cow, FoodType.Grass, 10, "Moo", "purple", 100, 300),
    new Chicken("Clucky", AnimalType.Chicken, FoodType.Grains, 5, "Gack", "red", 200, 350),
    new Dog("Buddy", AnimalType.Dog, FoodType.Meat, 8, "Woof", "brown", 300, 320),
    new Horse("Spirit", AnimalType.Horse, FoodType.Grass, 15, "Neigh", "black", 400, 300),
    new Pig("Porky", AnimalType.Pig, FoodType.Junk, 12, "Oink", "pink", 500, 350),
    new Donkey("Eeyore", AnimalType.Donkey, FoodType.Grass, 10, "Hee-Haw", "grey", 600, 320)
];
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
        ctx.textAlign = "center";
        ctx.fillText(animal.name, animal.x, animal.y - 30);
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
        const specialActionMessage = animal.doSpecialAction();
        console.log(specialActionMessage);
        appendLog(specialActionMessage);
    });
    drawFarm();
}
// Call the simulation function when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    simulateDay();
});
//# sourceMappingURL=megges.js.map