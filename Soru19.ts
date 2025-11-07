// Soru 19: Flatten - Dizi eleman tipini çıkarma
// Açıklama: Eğer T bir dizi ise eleman tipini döndür, değilse kendisini döndür.
type FlattenA<T> = T extends (infer U)[] ? U : T;

type NumArrayA = number[];
type StrA = string;

let el1A: FlattenA<NumArrayA> = 123;
let el2A: FlattenA<StrA> = "hello";

// @ts-expect-error - 'NumArrayA'in elemanı 'number', 'string' değil
let errorElA: FlattenA<NumArrayA> = "string";

console.log("Soru 19 Başarılı!", el1A, el2A);
