// Soru 10: MathHelper (statik sabit ve metot)
class MathHelperA {
  static PIA = 3.14159;
  static calculateCircumferenceA(radiusA: number): number {
    return 2 * MathHelperA.PIA * radiusA;
  }
}

console.log("S10:", MathHelperA.PIA);
console.log("S10:", MathHelperA.calculateCircumferenceA(10));
