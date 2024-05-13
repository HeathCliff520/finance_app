This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## hono 使用案例

路径：app/api/[[...route]]/route.ts
// import { Hono } from 'hono'
// import { handle } from 'hono/vercel'

// export const runtime = 'edge';

//后端基本接口
// const FinanceAppBankend = new Hono().basePath('/api')

// 基础路径搭建
// // 请求路径
// FinanceAppBankend
// .get('/hello', (c) => {
//   return c.json({
//     message: 'Hello Next.js!',
//   })
// })//无参请求
// .get('hello/:testparams',(c)=>{ 
//     const testparams = c.req.param("testparams")
//     return c.json({
//         message:"hello world",
//         test:testparams
//     })
// })//带参请求


// 加入zod中间件进行验权认证
// import { z } from 'zod';
// import { zValidator } from '@hono/zod-validator';

// FinanceAppBankend
// .get('/hello', (c) => {
//   return c.json({
//     message: 'Hello Next.js!',
//   })
// })//无参请求
// .get(
//     'hello/:testparams',
//     // 校验请求路径中的testparams
//     zValidator("param",
//                 z.object({
//                     testparams: z.number(),
//                 })),
//     (c)=>{ 
//         const testparams = c.req.valid("param")
//         return c.json({
//                 message:"hello world",
//                 test:testparams
//                 })
// })//带参请求



// //第三方路径保护,加入中间件
// import { z } from 'zod';
// import { zValidator } from '@hono/zod-validator';
// import { clerkMiddleware,getAuth } from '@hono/clerk-auth';

// FinanceAppBankend
// .get('/hello',
//     //第三方中间件保护
//     clerkMiddleware(), 
//     (c) => {
//         const auth = getAuth(c) //获取验权
//         //验证是否授权
//         if(!auth?.userId){//clerk监测到用户未登录
//             return c.json({
//                 error:"Unauthorzied",
//             })
//         }
//         return c.json({
//             message: 'Hello Next.js!',
//             //clerk在管理用户状态；如是否登录，是否有userId
//             userId:auth.userId,
//         })
// })//无参请求

// export const GET = handle(FinanceAppBankend)
// export const POST = handle(FinanceAppBankend)

//以上校验过于冗杂，将其分散到不同文件之中
// books.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.json('list books'))
app.post('/', (c) => c.json('create a book', 201))
app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default app


// authors.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.json('list authors'))
app.post('/', (c) => c.json('create an author', 201))
app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default app


// import { Hono } from 'hono'
// import authors from './authors'
// import books from './books'

// const FinanceAppBankend= new Hono()

// FinanceAppBankend.route('/authors', authors)
// FinanceAppBankend.route('/books', books)

// export default FinanceAppBankend



