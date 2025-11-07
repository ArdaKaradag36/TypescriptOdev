Bu ödevde TypeScript dilinde toplam 20 tane soru yer alıyordu. Soruların çoğu type, generic, infer, mapped type, conditional type gibi konularla ilgiliydi. Bazıları gerçekten uğraştırdı, özellikle 12, 13, 17 ve 20. sorularda baya zorlandım ama sonunda hepsi düzgün şekilde çalıştı.

Bazı satırlarda bilerek hata bıraktım çünkü hocanın özellikle istediği şey, @ts-expect-error ile derleyici hatasının beklenmesiydi.
Her soruyu ayrı bir dosyada yazdım (Soru1.ts, Soru2.ts, ... Soru20.ts) ve test ederken npx ts-node komutuyla çalıştırdım.

Bu ödev sayesinde TypeScript’in infer, mapped type, union ve conditional type gibi ileri seviye konularını çok daha iyi anladım. Özellikle infer kısmı ve mapped type’ların kullanımı başta karışık geldi ama birkaç örnekle ve deneme yaparak mantığını oturttum.
Bazı sorularda bilinçli olarak hata mesajı bıraktım çünkü hoca “o satır derleyici hatası verecek” demişti, bu yüzden o kısımları özellikle değiştirmedim.
