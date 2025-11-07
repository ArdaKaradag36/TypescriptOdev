// Soru 16: Brand Types (Nominal Typing)
// Açıklama: Aynı temel tipe sahip fakat birbirine karıştırılmaması gereken türleri ayırmak için kullanılır.
type BrandA<K, T> = K & { __brandA: T };
type UserIDA = BrandA<string, "UserIDA">;
type PostIDA = BrandA<string, "PostIDA">;

function logIDA(idA: string) { console.log(idA); }

let userIDA = "user-123" as UserIDA;
let postIDA = "post-456" as PostIDA;

logIDA(userIDA); // String olarak kabul edilir
logIDA(postIDA); // String olarak kabul edilir

// @ts-expect-error - Farklı "brand" tipleri karıştırılamaz
userIDA = postIDA;

console.log("Soru 16 Başarılı!");
