import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge';

//后端基本接口
const FinanceAppBankend = new Hono().basePath('/api')

//挂载accounts路由
import accountsApiPage from "./accounts";
import { HTTPException } from 'hono/http-exception';

//路径错误处理
FinanceAppBankend.onError((err, c) => {
    //hono管理了路径信息，如accountsApiPage中get请求用了HTTPException了类型，此时hono可以识别这个异常类
    if( err instanceof HTTPException) return err.getResponse();
    return c.json({error : "Internal Error"},500)
})


const apiRoutes = FinanceAppBankend.route("/accounts",accountsApiPage) //路径名，路径页面


export const GET = handle(FinanceAppBankend)
export const POST = handle(FinanceAppBankend)
export type AppType = typeof apiRoutes;

