// evaluator.js

const evaluateExpression = (expression, variables) => {
    try {
      const replacedExpression = expression.replace(/[a-z]/gi, match => {
        // Replace variables in the expression with their values from the variables object
        return variables[match] || 0; // If variable is not found, default to 0
      });
  
      const result = eval(replacedExpression); // Evaluate the modified expression
      return result;
    } catch (error) {
      console.error('Error evaluating expression:', error);
      return 'Error: Invalid Expression';
    }
  };
  
  export default evaluateExpression;
  