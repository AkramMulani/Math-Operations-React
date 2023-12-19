
class MathOperation {
    constructor(name,expression) {
        this.name = name;
        this.expression = expression;
        this.timestamp = Date.now();
    }

    getName(){return this.name;}
    getExpression(){return this.expression;}
    getTimestamp(){return this.timestamp;}
    setName(name){this.name=name;}
    setExpression(expression){this.expression=expression;}
    setTimestamp(timestamp){this.timestamp=timestamp}

    toString() {
        return `MathOperation{name: "${this.name}", expression: "${this.expression}", timestamp: ${this.timestamp}}`;
    }

}