// Soru 18: Son parametre tipini bulma (Conditional + Tuple Inference)
type LastParameterA<T> = T extends (...args: infer P) => any
  ? P extends [...infer _RestA, infer LA]
    ? LA
    : never
  : never;

function combineA(aA: number, bA: string, cA: boolean) {}
function printA(messageA: string) {}

type LastOfCombineA = LastParameterA<typeof combineA>; // boolean
type LastOfPrintA = LastParameterA<typeof printA>;     // string

const val11A: LastOfCombineA = true;
const val12A: LastOfPrintA = "Hello TypeScript!";

// @ts-expect-error - 'LastOfCombineA' boolean olmalı
const val3A: LastOfCombineA = "string";

console.log("Soru 18 Başarılı!", val11A, val12A);
