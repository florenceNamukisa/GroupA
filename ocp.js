// Base Bird class (open for extension but closed for modification)
class Bird {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        throw new Error("This method should be overridden by subclasses");
    }
}
class Sparrow extends Bird {
    makeSound() {
        console.log("Sparrow chirps");
    }
}

class Penguin extends Bird {
    makeSound() {
        console.log("Penguin squawks");
    }
}

class Parrot extends Bird {
    makeSound() {
        console.log("Parrot talks");
    }
}


class Owl extends Bird {
    makeSound() {
        console.log("Owl hoots");
    }
}

// Using the classes (correct implementation following OCP)
console.log("----Following OCP----");

const sparrow = new Sparrow("Sparrow");
sparrow.makeSound();  

const penguin = new Penguin("Penguin");
penguin.makeSound();  

const parrot = new Parrot("Parrot");
parrot.makeSound();  

const owl = new Owl("Owl");
owl.makeSound();  
