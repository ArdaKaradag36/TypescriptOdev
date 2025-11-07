// Soru 17: Union tiplerinden belirli elemanları filtreleme
// Açıklama: T içinden U’ya dahil olanları çıkarır.
type FilterUnionA<T, U> = T extends U ? never : T;

type AllStatusA = 'pending' | 'active' | 'inactive' | 'deleted';
type ActiveStatusA = 'active' | 'pending';

// 'AllStatusA' içinden 'ActiveStatusA' olanları çıkar
type InactiveStatusA = FilterUnionA<AllStatusA, ActiveStatusA>;

let status1A: InactiveStatusA = 'inactive';
let status2A: InactiveStatusA = 'deleted';

// @ts-expect-error - 'pending' (filtrelendi) HATA VERMELİDİR     
let errorStatusA: InactiveStatusA = 'pending';

console.log("Soru 17 Başarılı!", status1A, status2A);
