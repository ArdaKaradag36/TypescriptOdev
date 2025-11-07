// Soru 14: DeepReadonly (derin readonly)
type DeepReadonlyA<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonlyA<T[K]> : T[K];
};

type UserA = {
  id: number;
  profile: { name: string; address: { city: string } };
};

const userA: DeepReadonlyA<UserA> = {
  id: 1,
  profile: { name: "Ali", address: { city: "İstanbul" } }
};

// @ts-expect-error - readonly olduğu için hata beklenir
userA.profile.name = "Veli";

console.log("S14:", userA.profile.address.city);
