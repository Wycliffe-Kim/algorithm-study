const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));

const combination = (n: number, r: number) =>
  factorial(n) / (factorial(r) * factorial(n - r));

const uniquePathWithDP = (
  dp: number[][],
  m: number,
  n: number,
  i = 0,
  j = 0
) => {
  if (i >= m || j >= n) {
    return 0;
  }

  if (i === m - 1 && j === n - 1) {
    return 1;
  }

  if (dp[i][j]) {
    return dp[i][j];
  }

  dp[i][j] =
    uniquePathWithDP(dp, m, n, i + 1, j) + uniquePathWithDP(dp, m, n, i, j + 1);
  return dp[i][j];
};

const uniqueWithCombination = (m: number, n: number) => {
  return combination(m + n - 2, m - 1); // or combination(m + n - 2, n - 2)
};

export function uniquePaths(m: number, n: number) {
  const dp = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  );

  const withDp = false;

  return withDp ? uniquePathWithDP(dp, m, n) : uniqueWithCombination(m, n);
}
