// Violating SRP
class Car {
    constructor(model) {
        this.model = model;
    }

    startEngine() {
        // Logic to start the engine
    }

    calculateFuelConsumption() {
        // Logic to calculate fuel consumption
    }

    navigate(destination) {
        // Logic for navigation
    }
}

// Implementing SRP
class Car {
    constructor(model) {
        this.model = model;
    }

    startEngine() {
        // Logic to start the engine
    }
}

class FuelCalculator {
    calculateFuelConsumption(car) {
        // Logic to calculate fuel consumption
    }
}

class NavigationSystem {
    navigate(car, destination) {
        // Logic for navigation
    }
}
