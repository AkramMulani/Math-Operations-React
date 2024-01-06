
export default class MathOperation {
    constructor(name,expression) {
        this.name = name;
        this.expression = expression;
    }
    getId(){return this.id}
    getName(){return this.name;}
    getExpression(){return this.expression;}
    getTimestamp(){return this.timestamp;}
    setId(id){this.id=id; return this;}
    setName(name){this.name=name; return this;}
    setExpression(expression){this.expression=expression; return this;}
    setTimestamp(timestamp){this.timestamp=timestamp; return this;}

    toString() {
        return `MathOperation{name: "${this.name}", expression: "${this.expression}", timestamp: ${this.timestamp}}`;
    }

}