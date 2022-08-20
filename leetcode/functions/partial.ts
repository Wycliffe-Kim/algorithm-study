type Partial2<T1, T2, R> = T2 extends undefined
  ? T1 extends undefined
    ? (v1: T1, v2: T2) => R
    : (v2: T2) => R
  : R;

type Partial3<T1, T2, T3, R> = T3 extends undefined
  ? T2 extends undefined
    ? T1 extends undefined
      ? (v1: T1, v2: T2, v3: T3) => R
      : (v2: T2, v3: T3) => R
    : (v3: T3) => R
  : R;

type Partial4<T1, T2, T3, T4, R> = T4 extends undefined
  ? T3 extends undefined
    ? T2 extends undefined
      ? T1 extends undefined
        ? (v1: T1, v2: T2, v3: T3, v4: T4) => R
        : (v2: T2, v3: T3, v4: T4) => R
      : (v3: T3, v4: T4) => R
    : (v4: T4) => R
  : R;

type Partial5<T1, T2, T3, T4, T5, R> = T5 extends undefined
  ? T4 extends undefined
    ? T3 extends undefined
      ? T2 extends undefined
        ? T1 extends undefined
          ? (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R
          : (v2: T2, v3: T3, v4: T4, v5: T5) => R
        : (v3: T3, v4: T4, v5: T5) => R
      : (v4: T4, v5: T5) => R
    : (v5: T5) => R
  : R;

export const partial2 =
  <T1, T2, R>(func: (v1: T1, v2: T2) => R) =>
  (v1?: T1, v2?: T2) =>
    (v1 ? (v2 ? func(v1, v2) : (v2: T2) => func(v1, v2)) : func) as Partial2<
      typeof v1,
      T2,
      R
    >;

export const partial3 =
  <T1, T2, T3, R>(func: (v1: T1, v2: T2, v3: T3) => R) =>
  (v1?: T1, v2?: T2, v3?: T3) =>
    (v1
      ? v2
        ? v3
          ? func(v1, v2, v3)
          : (v3: T3) => func(v1, v2, v3)
        : partial2((v2: T2, v3: T3) => func(v1, v2, v3))
      : func) as Partial3<T1, T2, T3, R>;

export const partial4 =
  <T1, T2, T3, T4, R>(func: (v1: T1, v2: T2, v3: T3, v4: T4) => R) =>
  (v1?: T1, v2?: T2, v3?: T3, v4?: T4) =>
    (v1
      ? v2
        ? v3
          ? v4
            ? func(v1, v2, v3, v4)
            : (v4: T4) => func(v1, v2, v3, v4)
          : partial2((v3: T3, v4: T4) => func(v1, v2, v3, v4))
        : partial3((v2: T2, v3: T3, v4: T4) => func(v1, v2, v3, v4))
      : func) as Partial4<T1, T2, T3, T4, R>;

export const partial5 =
  <T1, T2, T3, T4, T5, R>(
    func: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R
  ) =>
  (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5) =>
    (v1
      ? v2
        ? v3
          ? v4
            ? v5
              ? func(v1, v2, v3, v4, v5)
              : (v5: T5) => func(v1, v2, v3, v4, v5)
            : partial2((v4: T4, v5: T5) => func(v1, v2, v3, v4, v5))
          : partial3((v3: T3, v4: T4, v5: T5) => func(v1, v2, v3, v4, v5))
        : partial4((v2: T2, v3: T3, v4: T4, v5: T5) => func(v1, v2, v3, v4, v5))
      : func) as Partial5<T1, T2, T3, T4, T5, R>;
