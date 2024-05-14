import Link from "next/link";
import Image from "next/image";
const HeaderLogo = () => {
    return ( 
        // 点击logo跳转到首页，link标签的作用
        <Link href="/">
            <div className=" items-center hidden lg:flex ">
                <Image src= "/logo.svg" alt="Logo" height={28} width={28} />、
                <p className=" font-semibold text-white text-2xl ml-2.5">Finance</p>
            </div>
        </Link>
     );
}
 
export default HeaderLogo;