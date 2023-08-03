function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Test cases for the add function
test('Addition: 2 + 3 equals 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('Addition: 0 + 0 equals 0', () => {
  expect(add(0, 0)).toBe(0);
});

test('Addition: -5 + 5 equals 0', () => {
  expect(add(-5, 5)).toBe(0);
});

// Test cases for the subtract function
test('Subtraction: 5 - 3 equals 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('Subtraction: 0 - 0 equals 0', () => {
  expect(subtract(0, 0)).toBe(0);
});

test('Subtraction: 3 - 5 equals -2', () => {
  expect(subtract(3, 5)).toBe(-2);
});

// Test cases for the multiply function
test('Multiplication: 2 * 3 equals 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('Multiplication: 0 * 5 equals 0', () => {
  expect(multiply(0, 5)).toBe(0);
});

test('Multiplication: -5 * -2 equals 10', () => {
  expect(multiply(-5, -2)).toBe(10);
});

// Test cases for the divide function
test('Division: 10 / 2 equals 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('Division: 0 / 5 equals 0', () => {
  expect(divide(0, 5)).toBe(0);
});

test('Division: 10 / 0 throws an error', () => {
  expect(() => divide(10, 0)).toThrowError("Division by zero is not allowed.");
});
