// Soru 20: Route parametrelerini ayrıştırma
// Açıklama: "/users/:id" → { id: string } veya "/posts/:postId/comments/:commentId" → { postId: string; commentId: string }
type ParseRouteParamsA<T extends string> =
  T extends `${string}/:${infer ParamA}/${infer RestA}`
    ? { [K in ParamA | keyof ParseRouteParamsA<`/${RestA}`>]: string }
    : T extends `${string}/:${infer LastA}`
      ? { [K in LastA]: string }
      : {};

type Route1A = "/users/:id";
type Route2A = "/posts/:postId/comments/:commentId";

type Params1A = ParseRouteParamsA<Route1A>;
type Params2A = ParseRouteParamsA<Route2A>;

const p1A: Params1A = { id: "123" };
const p2A: Params2A = { postId: "abc", commentId: "xyz" };

// @ts-expect-error - 'userId' HATA VERMELİ (doğrusu 'id')
const errorP1A: Params1A = { userId: "123" };

// @ts-expect-error - 'commentId' eksik, HATA VERMELİ
const errorP2A: Params2A = { postId: "abc" };

console.log("Soru 20 Başarılı!", p1A.id, p2A.postId);
