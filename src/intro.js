// Lesson: Writing your first tests
export function max(a, b) {
  return (a > b) ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function calculateAverage(numbers) {
  return numbers.length
    ? numbers?.reduce((acc, element) => acc + element, 0) / numbers.length
    : NaN;
}

export function factorial(number) {
  if (number < 0) return undefined;
  if (number === 0 || number === 1) return 1;
  return number * factorial(number - 1);
}

export function reverseString(string) {
  return typeof string === "string"
    ? string.split("").reverse().join("")
    : undefined;
}

export const API_URL = `https://api.user.com`