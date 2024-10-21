//  Violating LSP 
class Bird {
    fly() {
        console.log("The bird is flying!");
    }
}

class Penguin extends Bird {
    fly() {
        console.log("Penguins cannot fly!");
    }
}

console.log("----Violation of LSP----");

const genericBird = new Bird();
genericBird.fly();  

const penguin = new Penguin();
penguin.fly(); 


// Correct Implementation Following LSP 
class FlyingBird {
    fly() {
        console.log("The bird is flying!");
    }
}

class NonFlyingBird {
    walk() {
        console.log("The bird is walking!");
    }
}

class Sparrow extends FlyingBird {
}

class NewPenguin extends NonFlyingBird {
}

console.log("----Following LSP----");

const sparrow = new Sparrow();
sparrow.fly();  

const newPenguin = new NewPenguin();
newPenguin.walk();  

