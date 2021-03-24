class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        let perimLength = 0
        for (const key in this.sides){
            perimLength += this.sides[key]
        }
        return perimLength
    }
}

class Triangle extends Polygon {

    get isValid() {
        if (this.sides[0] + this.sides[1] <= this.sides[2] || this.sides[1] + this.sides[2] <= this.sides[0] || this.sides[0] + this.sides[2] <= this.sides[1]) {
            return false;
        } else {
            return true;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        return this.sides.every(side => side === this.sides[0])
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}