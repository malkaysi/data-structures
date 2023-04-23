// Fibonacci sequence

function fib(n) {
  if (n <= 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  // Create the initial array based on the n start
  const array = fib(n - 1);

  // Keep existing array, find index of previous two numbers to sum, then add them to the end
  return [...array, array[n - 2] + array[n - 3]];
}
