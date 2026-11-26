// Smart CLI Calculator - Base Version

function formatResult(op, a, b, result) {
  return `${a} ${op} ${b} = ${result}`;
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
    default:
      return `Error: Unsupported operation '${op}'`;
  }
}

if (require.main === module) {
  console.log(calculate('add', 12, 8));
  console.log(calculate('div', 10, 3));
}

module.exports = { calculate, formatResult };
