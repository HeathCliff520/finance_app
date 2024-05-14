// 使用hook,hook用于客户端组件，不写“use clinent”系统默认是服务器组件
"use client";

import { usePathname ,useRouter} from "next/navigation";
import { NavButton } from "@/components/navbutton";
import { Menu } from "lucide-react";

import { useMedia } from "react-use";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";



// 定义路由表
const routes =[
    {
        href:"/",
        labal:"Overview"
    },
    {
        href:"/transactions",
        labal:"Transactions"
    },
    {
        href:"/accounts",
        labal:"Accounts"
    },
    {
        href:"/categories",
        labal:"Categories"
    },
    {
        href:"/settings",
        labal:"Settings"
    },

];

export const  Navigation = () => {
    // 定义hook
    const [isOpen,setIsOpen] = useState(false)

    const router = useRouter()

    const isMobile = useMedia("(max-width:1024px)",false)

    const pathname = usePathname();
  


    //动作
    const onClick = ( href : string) =>{
        router.push(href);
        setIsOpen(false)
    };

    if(isMobile){
        return(
            <Sheet open={isOpen} onOpenChange={setIsOpen} >
                <SheetTrigger>
                    <Button
                        variant="outline"
                        size="sm"
                        className=" font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible: ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
                    >
                        <Menu className=" size-4 " />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="px-2">
                    <nav className="flex flex-col gap-y-2 pt-6">
                        {routes.map((route)=>(
                            <Button className="w-full justify-start" key={route.href} variant={route.href===pathname?"secondary":"ghost"} onClick={() => onClick(route.href)}>
                                {route.labal}
                            </Button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        )
    }



    return ( 
        <nav className=" hidden lg:flex items-center gap-x-2 overflow-x-auto">
            {routes.map((route)=>(
                <NavButton 
                    key={route.href}
                    href={route.href}
                    label={route.labal}
                    // 路径是否被点击，若被点击，则hook可以捕捉到路径点击的状态
                    isActive={pathname === route.href}
                />
            ))}
        </nav>
    );
}