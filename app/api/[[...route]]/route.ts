import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge';

//后端基本接口
const FinanceAppBankend = new Hono().basePath('/api')

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


//以上校验过于冗杂，将其分散到不同文件之中


export const GET = handle(FinanceAppBankend)
export const POST = handle(FinanceAppBankend)