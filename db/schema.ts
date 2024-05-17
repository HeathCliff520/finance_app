//定义各路由数据库表单文件

import { pgTable, text } from "drizzle-orm/pg-core";

// 新建pg数据库的帐户表
export const accounts =pgTable("accounts",{
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    userId: text("user_id").notNull(),
})