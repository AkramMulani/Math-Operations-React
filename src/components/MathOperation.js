
export default class MathOperation {
    constructor(name,expression) {
        this.name = name;
        this.expression = expression;
    }
    getId(){return this.id}
    getName(){return this.name;}
    getExpression(){return this.expression;}
    getTimestamp(){return this.timestamp;}
    setId(id){this.id=id}
    setName(name){this.name=name;}
    setExpression(expression){this.expression=expression;}
    setTimestamp(timestamp){this.timestamp=timestamp}

    toString() {
        return `MathOperation{name: "${this.name}", expression: "${this.expression}", timestamp: ${this.timestamp}}`;
    }

}