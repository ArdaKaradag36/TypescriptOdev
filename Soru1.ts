// Soru 1: İki farklı tipte diziyi birleştirme
function mergeArraysA<T, U>(arr1A: T[], arr2A: U[]): (T | U)[] {
  return [...arr1A, ...arr2A];
}

const numbersA = [1, 2, 3];
const stringsA = ["a", "b", "c"];
console.log("S1:", mergeArraysA(numbersA, stringsA)); // [1,2,3,"a","b","c"]
