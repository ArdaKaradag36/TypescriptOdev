// Soru 4: Jenerik özellik erişimi
function getPropertyA<T, K extends keyof T>(objA: T, keyA: K): T[K] {
  return objA[keyA];
}

const personA = { name: "Ali", age: 30 };
console.log("S4:", getPropertyA(personA, "name")); // Ali
console.log("S4:", getPropertyA(personA, "age"));  // 30
