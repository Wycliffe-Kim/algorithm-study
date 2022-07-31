export function intersect(nums1: number[], nums2: number[]): number[] {
  type Dict = { [key: number]: number };

  const dict: Dict = {};
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    if (dict[nums1[i]]) {
      dict[nums1[i]] += 1;
    } else {
      dict[nums1[i]] = 1;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (dict.hasOwnProperty(nums2[i]) && dict[nums2[i]] !== 0) {
      res.push(nums2[i]);
      dict[nums2[i]] -= 1;
    }
  }
  return res;
}
