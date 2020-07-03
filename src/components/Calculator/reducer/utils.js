export const operators = ["+", "-", "*", "/", "="];

export const calculate = (expression) => {
  const filteredExpression = expression.replace(/[^-()\d/*+.]/g, "");
  let calculatedValue;
  try {
    // eslint-disable-next-line
    calculatedValue = new Function("return " + filteredExpression)();
  } catch (e) {
    calculatedValue = "Error!";
  }
  return calculatedValue;
};
