// Smart CLI Calculator - Precision Rounding Update

function formatResult(op, a, b, result) {
  const rounded = Number(result.toFixed(2));
  return `[Rounded] ${a} ${op} ${b} = ${rounded}`;
}

function calculate(op, a, b) {
  switch (op) {
    case 'add':
      return formatResult('+', a, b, a + b);
    case 'sub':
      return formatResult('-', a, b, a - b);
    case 'mul':
      return formatResult('*', a, b, a * b);
    case 'div':
      if (b === 0) return 'Error: Division by zero';
      return formatResult('/', a, b, a / b);
    case 'pow':
      return formatResult('^', a, b, Math.pow(a, b));
    default:
      return `Error: Unsupported operation '${op}'`;
  }
}

if (require.main === module) {
  console.log(calculate('add', 12, 8));
  console.log(calculate('div', 10, 3));
  console.log(calculate('pow', 2, 5));
}

module.exports = { calculate, formatResult };
