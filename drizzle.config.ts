// 用于drizzle studio的管理配置文件

import { config } from "dotenv";
config({ path: ".env.local"});


import { defineConfig } from "drizzle-kit"
export default defineConfig({
    schema:"./db/schema.ts",
    driver:"pg",
    dbCredentials:{
        connectionString:process.env.DATABASE_URL!,
    },
    verbose:true,
    strict:true,
});