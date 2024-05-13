import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge';

//后端基本接口
const FinanceAppBankend = new Hono().basePath('/api')

// 基础路径搭建
// 请求路径
FinanceAppBankend
.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})//无参请求


export const GET = handle(FinanceAppBankend)
export const POST = handle(FinanceAppBankend)


