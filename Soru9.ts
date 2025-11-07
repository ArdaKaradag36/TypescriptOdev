// Soru 9: Soyut sınıf örneği
abstract class ShapeA {
  abstract getAreaA(): number;
}

class CircleA extends ShapeA {
  constructor(private radiusA: number) { super(); }
  getAreaA(): number { return Math.PI * this.radiusA * this.radiusA; }
}

const circleA = new CircleA(10);
console.log("S9:", circleA.getAreaA());
