import HeaderLogo from "@/components/headerlogo";
import { Navigation } from "@/components/navigation";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import WelcomMsg from "./welcomemsg";

const Header = () => {
    return ( 
        <header className=" bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36">
            <div className=" max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between mb-14">
                    <div className=" flex items-center lg:gap-x-16">
                        <HeaderLogo />
                        <Navigation />
                    </div>
                    {/* 用户已登录小动画 */}
                    <ClerkLoaded>
                        <UserButton afterSignOutUrl="/" />
                    </ClerkLoaded>
                    {/* 用户登录时的动画 */}
                    <ClerkLoading>
                        <Loader2 className=" size-8 animate-spin text-slate-400"/>
                    </ClerkLoading>                    
                </div>

                <WelcomMsg />
            </div>
        </header>
     );
}
 
export default Header;