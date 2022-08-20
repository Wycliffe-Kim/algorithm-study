const push = <T>(data: T[], val: T) => data.push(val);
const pop = <T>(data: T[]) => data.pop();

const data = [[0, 0]];

data.push([0, 1]);
data.push([0, 2]);
data.push([0, 3]);
data.push([0, 4]);
console.log(data);
console.log(data.pop());
