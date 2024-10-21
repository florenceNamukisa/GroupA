// Simulating an interface class 
class Vehicle {
    start() {
        throw new Error("Must implement method: start");
    }

    stop() {
        throw new Error("Must implement method: stop");
    }
}

class Car extends Vehicle {
    start() {
        return "Car is starting";
    }

    stop() {
        return "Car is stopping";
    }
}

class Bicycle extends Vehicle {
    start() {
        return "Bicycle is starting";
    }

    stop() {
        return "Bicycle is stopping";
    }
}

const myCar = new Car();
const myBicycle = new Bicycle();
console.log(myCar.start()); 
console.log(myBicycle.start()); 
