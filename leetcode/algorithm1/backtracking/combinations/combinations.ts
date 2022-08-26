const factorial = (n: number) => (n > 0 ? n * factorial(n - 1) : 1);

export function combine(n: number, k: number): number[][] {
  const loop = factorial(n) / Math.pow(factorial(k), 2);
  const result = Array.from(Array(loop), (): number[] => Array(k).fill(0));

  return result;
}
