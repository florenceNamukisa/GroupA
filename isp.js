//  Violating ISP 

class IAnimal {
    eat() {
        throw new Error("This method must be overridden");
    }

    walk() {
        throw new Error("This method must be overridden");
    }

    swim() {
        throw new Error("This method must be overridden");
    }
}

class Dog extends IAnimal {
    eat() {
        console.log("Dog is eating");
    }

    walk() {
        console.log("Dog is walking");
    }

    swim() {
        console.log("Dog cannot swim, but this method is here!");
    }
}

class Fish extends IAnimal {
    eat() {
        console.log("Fish is eating");
    }

    walk() {
        console.log("Fish cannot walk, but this method is here!");
    }

    swim() {
        console.log("Fish is swimming");
    }
}
console.log("----Violation----");
const myDog = new Dog();
myDog.eat();  
myDog.walk();  
myDog.swim();  

const myFish = new Fish();
myFish.eat();  
myFish.walk();  
myFish.swim();  


// Correct Implementation Following ISP 


class IEating {
    eat() {
        throw new Error("This method must be overridden");
    }
}

class IWalking {
    walk() {
        throw new Error("This method must be overridden");
    }
}

class ISwimming {
    swim() {
        throw new Error("This method must be overridden");
    }
}

class NewDog extends IEating {
    eat() {
        console.log("Dog is eating");
    }

    walk() {
        console.log("Dog is walking");
    }
}

class NewFish extends IEating {
    eat() {
        console.log("Fish is eating");
    }

    swim() {
        console.log("Fish is swimming");
    }
}

console.log("----Following ISP----");
const newDog = new NewDog();
newDog.eat();   
newDog.walk();  

const newFish = new NewFish();
newFish.eat(); 
newFish.swim();  

