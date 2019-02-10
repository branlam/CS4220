// // DESTRUCTURING OBJECTS
const company = {
    name: 'EA',
    type: 'Video Games',
    subsidiaries: ['BioWare', 'DICE', 'PopCap']
}

const { name, type, subsidiaries } = company
console.log(name)
console.log(type)
console.log(subsidiaries)

// // DESTRUCTURING ARRAYS
const [ first, second, third ] = subsidiaries
console.log(first)
console.log(second)
console.log(third)

// // SETTING DEFAULTS
// const { name, type, subsidiaries, games } = company
// console.log(name)
// console.log(type)
// console.log(subsidiaries)
// console.log(games)


// // DESTRUCTURING OBJECTS AS ARGUMENTS
const print = ({ name = 'Bungie', type, subsidiaries }) => {
    console.log(name, type, subsidiaries)
}
print(company)


// TEMPLATE LITERALS
const food = ['pizza', 'pasta', 'cake']
const foodLoop = arr => {
    arr.forEach(item => {
        console.log(`i ${item === 'cake' ? 'do not like' : 'like'} ${item}`)
    })
}
foodLoop(food)


// // CLASSES
class Polygon {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    get area() {
        return this.height * this.width
    }

    getArea() {
        return this.height * this.width
    }
}
const rectangle = new Polygon(10, 15)
console.log(rectangle.area)
console.log(rectangle.getArea())



// // CLASSES WITH INHERITANCE
class Square extends Polygon {
    constructor(height, width) {
        super(height, width)
    }

    getHeightWidth() {
        return `${this.height} ${this.width}`
    }
    getArea() {
        return 'This is a square ' + super.getArea()
    }

    static create(height, width) {
        return new Square(height, width)
    }

}
const square = Square.create(10, 10)
console.log(square.area)
console.log(square.getArea())


// // CLASSES WITH DOT CHAINING
class Calculator {
    constructor(number = 0) {
        this.number = number
    }

    add(n) {
        this.number += n
        return this
    }

    subtract(n) {
        this.number -= n

        return this
    }

    get total() {
       return this.number
    }
}

const calculator = new Calculator()
const calculation = calculator
                .add(1)
                .add(5)
                .subtract(3)
                .total

console.log(calculation)
