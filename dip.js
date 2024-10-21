// Violation of Dependency Inversion Principle (DIP)
class Dog {
    makeSound() {
        return "Woof!";
    }
}

class Pet {
    constructor() {
        this.animal = new Dog(); 
    }

    petSound() {
        console.log(`The pet says: ${this.animal.makeSound()}`);
    }
}

const myPet = new Pet();
myPet.petSound(); 


// Correct Implementation of Dependency Inversion Principle (DIP)
class IAnimalSound {
    makeSound() {
        throw new Error("This method must be overridden");
    }
}

class DogSound extends IAnimalSound {
    makeSound() {
        return "Woof!";
    }
}

class CatSound extends IAnimalSound {
    makeSound() {
        return "Meow!";
    }
}

class NewPet {
    constructor(animal) {
        this.animal = animal; 
    }

    petSound() {
        console.log(`The pet says: ${this.animal.makeSound()}`);
    }
}

const dog = new DogSound();
const myNewPetDog = new NewPet(dog);
myNewPetDog.petSound(); 

const cat = new CatSound();
const myNewPetCat = new NewPet(cat);
myNewPetCat.petSound(); 
