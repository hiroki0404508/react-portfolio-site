export class Mainchara {
    constructor(name, shape, color){
        this.name = name
        this.shape = shape
        this.color = color
    }
    introduce(){
        return`Hello! I am ${this.name}. I am ${this.color} ${this.shape}.`
    }
}
