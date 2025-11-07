// Soru 12: GetReturnType (infer ile fonksiyon dönüş tipini elde et)
type GetReturnTypeA<T> = T extends (...args: any[]) => infer R ? R : never;

const fn1A = () => "hello";
const fn2A = (aA: number) => aA * 2;

let ret1A: GetReturnTypeA<typeof fn1A> = "world";
let ret2A: GetReturnTypeA<typeof fn2A> = 100;
// @ts-expect-error
let error1A: GetReturnTypeA<typeof fn1A> = 123;

console.log("S12:", ret1A, ret2A);
