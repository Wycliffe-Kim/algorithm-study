const _combination = (
  result: number[][],
  stack: number[],
  n: number,
  k: number,
  cnt: number
) => {
  if (stack.length === k) {
    result.push([...stack]);
    // console.log(`[condition 1] cnt: ${cnt}, stack:`, stack);
    return;
  }

  if (cnt > n) {
    // console.log('[condition 2]');
    return;
  }

  stack.push(cnt);
  // console.log(`[1] cnt: ${cnt},`, 'stack:', stack);
  _combination(result, stack, n, k, cnt + 1);
  // console.log(`[2] cnt: ${cnt},`, 'stack:', stack);
  stack.pop();
  // console.log(`[3] cnt: ${cnt},`, 'stack:', stack);
  _combination(result, stack, n, k, cnt + 1);
  // console.log(`[4] cnt: ${cnt},`, 'stack:', stack);
};

export function combination(n: number, k: number): number[][] {
  // console.log('----- combination -----', `n: ${n}, k: ${k}`);
  let result: number[][] = [];
  const stack: number[] = [];
  _combination(result, stack, n, k, 1);
  // console.log('result', result);
  return result;
}
