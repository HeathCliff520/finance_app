//这是一个页面
import { db } from "@/db/drizzle";
import { accounts } from "@/db/schema";
import { HTTPException } from "hono/http-exception"
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";

const accountsApiPage = new Hono()
    .get("/",
        //加入clerk中间件验证用户访问合法性
        clerkMiddleware(),
        //访问数据库
        async (c) => {
            //验权
            const auth = getAuth(c);
            if(!auth?.userId) {//用户未登录无用户ID，不予访问
                throw new HTTPException(
                    401,
                    { res: c.json({ error : "you have unauthorized"},401)} //书写错误
                ) 
            }

            //  从数据库中拉取数据
            const data = await db
                    .select({
                        id:accounts.id,
                        name:accounts.name,
                    }).from(accounts); //从accounts表中读取id、name字段存放在data中
            
            return c.json({data});
        }
    );

export default accountsApiPage;