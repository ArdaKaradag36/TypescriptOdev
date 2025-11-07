// Soru 8: Rest parametreleri ile toplama
function sumA(...numbersA: number[]): number {
  return numbersA.reduce((totalA, numA) => totalA + numA, 0);
}

console.log("S8:", sumA(1,2,3));            // 6
console.log("S8:", sumA(10,20,30,40));      // 100
