// Soru 6: Generic bellek önbelleği
class MemoryCacheA<T> {
  private cacheA: Map<string, T> = new Map();

  setA(keyA: string, valueA: T): void { this.cacheA.set(keyA, valueA); }
  getA(keyA: string): T | undefined { return this.cacheA.get(keyA); }
  clearA(): void { this.cacheA.clear(); }
}

const cacheA = new MemoryCacheA<number>();
cacheA.setA("a", 100);
console.log("S6:", cacheA.getA("a")); // 100
cacheA.clearA();
console.log("S6:", cacheA.getA("a")); // undefined
