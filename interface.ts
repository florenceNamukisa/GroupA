// Define an interface for Vehicle
interface Vehicle {
    brand: string;
    model: string;
    startEngine(): string; // Method that must be implemented
}

// Class implementing the Vehicle interface
class Car implements Vehicle {
    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    startEngine(): string {
        return `The ${this.brand} ${this.model}'s engine is starting! Vroom Vroom!`;
    }
}

// Class implementing the Vehicle interface
class Bike implements Vehicle {
    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    startEngine(): string {
        return `The ${this.brand} ${this.model}'s engine is starting! Rev Rev!`;
    }
}

// Create instances of Car and Bike
const myCar = new Car("Toyota", "Corolla");
const myBike = new Bike("Yamaha", "R15");

// Call the startEngine method on both
console.log(myCar.startEngine());  // Output: The Toyota Corolla's engine is starting! Vroom Vroom!
console.log(myBike.startEngine());  // Output: The Yamaha R15's engine is starting! Rev Rev!
