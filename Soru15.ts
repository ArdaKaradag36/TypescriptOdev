// Soru 15: PickByValueType (belirtilen tipteki alanları seç)
type PickByValueTypeA<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K];
};

type ExampleA = { id: number; name: string; active: boolean; };
type OnlyStringA = PickByValueTypeA<ExampleA, string>;

const dataA: OnlyStringA = { name: "Ali" };
// @ts-expect-error
// const wrongDataA: OnlyStringA = { id: 1 };

console.log("S15:", dataA.name);
