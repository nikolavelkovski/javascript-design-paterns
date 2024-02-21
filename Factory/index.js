//Factory pattern
/* 
Provides an interface for creating objects that can be modified after creation.
*/

class AlienClass {
    constructor(name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }

    fly() {
        console.log("zht")
    }
    sayPhrase() {
        console.log(this.phrase)
    }
}

const alien1 = new AlienClass("Ali", "i am ali the alien")
console.log(alien1.name)


function Alien(name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = 'alien'
}

Alien.prototype.fly = () => console.log("shhyz")
Alien.prototype.sayPhrase = () => console.log(this.phrase)

const alien2 = new Alien("Mili", "i am mili")
console.log(alien2.phrase)
console.log(alien2.phrase)
alien2.fly()