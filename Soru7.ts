// Soru 7: Nesne güncelleme (Partial ve Readonly)
type KullaniciB = { id: number; name: string; email: string; };

function updateUserA(userA: KullaniciB, updatesA: Partial<KullaniciB>): Readonly<KullaniciB> {
  return { ...userA, ...updatesA };
}

const kullaniciA: KullaniciB = { id: 1, name: "Ali", email: "ali@mail.com" };
const updatesA = updateUserA(kullaniciA, { name: "Baran", email: "baran.yeni@mail.com" });
console.log("S7:", updatesA);
