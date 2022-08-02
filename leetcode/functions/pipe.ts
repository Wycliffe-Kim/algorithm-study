type Func<T, R> = (val: T) => R;

export const pipe2 =
  <T, R1, R>(func1: Func<T, R1>, func2: Func<R1, R>) =>
  (val: T) =>
    func2(func1(val));

export const pipe3 =
  <T, R1, R2, R>(func1: Func<T, R1>, func2: Func<R1, R2>, func3: Func<R2, R>) =>
  (val: T) =>
    func3(func2(func1(val)));
