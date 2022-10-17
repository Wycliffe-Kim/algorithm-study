export function reverseString(s: string[]): void {
  const min = 0;
  const max = s.length;
  const size = Math.floor((max - min) / 2);
  for (let i = 0; i < size; i++) {
    const temp = s[i];
    s[i] = s[max - (i + 1)];
    s[max - (i + 1)] = temp;
  }
}
