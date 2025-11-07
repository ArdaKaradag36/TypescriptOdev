// Soru 5: Fonksiyon aşırı yükleme (search)
type KullaniciA = { id: number; name: string; email: string; };
const usersA: KullaniciA[] = [
  { id: 1, name: "Ali", email: "ali@mail.com" },
  { id: 2, name: "Ayşe", email: "ayse@mail.com" },
  { id: 3, name: "Ali", email: "ali2@mail.com" },
];

function searchA(idA: number): KullaniciA;
function searchA(nameA: string): KullaniciA[];
function searchA(paramA: number | string): KullaniciA | KullaniciA[] {
  if (typeof paramA === "number") {
    return usersA.find(u => u.id === paramA)!;
  } else {
    return usersA.filter(u => u.name === paramA);
  }
}

console.log("S5:", searchA(1));       // kullanıcı id 1
console.log("S5:", searchA("Ali"));   // Ali isimli kullanıcılar dizisi
