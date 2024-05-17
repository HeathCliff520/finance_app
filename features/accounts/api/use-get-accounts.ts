//和app/api/[[...route]]/accounts.ts进行通讯

import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query"; //保护数据类型安全

export const useGetAccouns = () => {
    const query = useQuery({
        queryKey:["accounts"],
        queryFn: async () => {
            //client => AppType => FinanceAppBankend.route => accountsApiPage 
            //不用fetch("api/accounts")
            const response = await client.api.accounts.$get();//get请求数据库

            if(!response.ok){
                //请求失败
                throw new Error("Failed to fetch accounts");
            }

            const { data } = await response.json();

            return data;
        }
    });

    return query;
}