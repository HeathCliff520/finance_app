import { config } from "dotenv";
config({ path: ".env.local"});

// ===============================================================================
//../db/drizzle.ts中的代码
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
// 在哪投放数据库
const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);//使用drizzle驱动管理在数据库产生数据表



//数据库表上传动作逻辑
import { migrate } from "drizzle-orm/neon-http/migrator"
import { log } from "console";
const main = async ()=>{
    try {
        log("数据库上传脚本启动")
        log("数据库数据表正在上传建立中…………")
        await migrate(db, {migrationsFolder:"drizzle"})
        log("上传数据库表完成！")
    } catch (error) {
        console.error("Error during migration:",error);
        process.exit(1)
    }
}
main(); //执行main函数