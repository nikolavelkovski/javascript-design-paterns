
/*
Singleton  design pattern that a class has only one immutable instance 
simply singleton pattern consists of object that can't be copied or modified

*/
const Config = {
    start: () => console.log("App started"),
    update: () => console.log("App closed")
}

Object.freeze(Config)

Config.start()

Config.name = "Nikola" // this would not work
console.log(Config)


//using class

class ConfigClass {
    constructor() { }
    start() { console.log("App started") }
    update() { console.log("App closed") }

}

const configObj = new Config()
Object.freeze(configObj) //this will freeze the object makingit immutable