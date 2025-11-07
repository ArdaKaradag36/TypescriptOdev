// Soru 13: CreateGetters (mapped types + template literal)
type CreateGettersA<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserPropsA = { id: number; name: string; };
type UserGettersA = CreateGettersA<UserPropsA>;

const userGettersA: UserGettersA = {
  getId: () => 1,
  getName: () => "Ali"
};

// @ts-expect-error - kasıtlı hata testi: getName string döndürmeli
const errorGetterA: UserGettersA = {
  getId: () => 1,
  getName: () => 123
};

console.log("S13:", userGettersA.getName());
