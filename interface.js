
class Animal {
    makeSound() {
        throw new Error("This method must be overridden!");
    }
}

class Dog extends Animal {
    makeSound() {
        return "Bark!";
    }
}

class Cat extends Animal {
    makeSound() {
        return "Meow!";
    }
}

const myDog = new Dog();
const myCat = new Cat();
console.log(myDog.makeSound());
console.log(myCat.makeSound()); 
