// Smart CLI Calculator - Scientific Operations Update

function formatResult(op, a, b, result) {
  const formatted = Number.isInteger(result) ? result : result.toFixed(4);
  return `[Sci] ${a} ${op} ${b} = ${formatted}`;
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
    case 'mod':
      if (b === 0) return 'Error: Modulo by zero';
      return formatResult('%', a, b, a % b);
    case 'sqrt':
      if (a < 0) return 'Error: Negative square root';
      return `[Sci] sqrt(${a}) = ${Number(Math.sqrt(a).toFixed(4))}`;
    default:
      return `Error: Unsupported operation '${op}'`;
  }
}

if (require.main === module) {
  console.log(calculate('add', 12, 8));
  console.log(calculate('div', 10, 3));
  console.log(calculate('mod', 17, 5));
  console.log(calculate('sqrt', 25, 0));
}

module.exports = { calculate, formatResult };
