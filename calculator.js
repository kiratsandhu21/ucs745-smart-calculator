// Smart CLI Calculator - Merged & Resolved Version

function formatResult(op, a, b, result, decimals = 2) {
  const formatted = Number.isInteger(result) ? result : Number(result.toFixed(decimals));
  return `[Calc] ${a} ${op} ${b} = ${formatted}`;
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
      return formatResult('/', a, b, a / b, 4);
    case 'pow':
      return formatResult('^', a, b, Math.pow(a, b));
    case 'mod':
      if (b === 0) return 'Error: Modulo by zero';
      return formatResult('%', a, b, a % b);
    case 'sqrt':
      if (a < 0) return 'Error: Negative square root';
      return `[Calc] sqrt(${a}) = ${Number(Math.sqrt(a).toFixed(4))}`;
    default:
      return `Error: Unsupported operation '${op}'`;
  }
}

if (require.main === module) {
  console.log(calculate('add', 12, 8));
  console.log(calculate('div', 10, 3));
  console.log(calculate('pow', 2, 5));
  console.log(calculate('mod', 17, 5));
  console.log(calculate('sqrt', 25, 0));
}

module.exports = { calculate, formatResult };
