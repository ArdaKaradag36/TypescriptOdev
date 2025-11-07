// Soru 11: UnwrapPromise (Promise iç değerini al)
type UnwrapPromiseA<T> = T extends Promise<infer U> ? U : T;

type pNumA = Promise<number>;
type regularNumA = number;

let val1A: UnwrapPromiseA<pNumA> = 10;
let val2A: UnwrapPromiseA<regularNumA> = 20;
// @ts-expect-error
let val3A: UnwrapPromiseA<pNumA> = "string";

console.log("S11:", val1A, val2A);
