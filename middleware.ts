import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//定义要保护的路径数组
const isProtectedRoute = createRouteMatcher([
    "/",
]);




export default clerkMiddleware((auth, request)=>{
    //如果是要保护的路径，提供保护；否则返回请求资源
    if(isProtectedRoute(request)){
        auth().protect();
    }

    return NextResponse.next();//不需要保护的路径直接放过
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};