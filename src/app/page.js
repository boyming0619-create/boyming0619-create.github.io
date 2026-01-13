import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
       {/* 找到 src/app/page.js 里的这段并修改 */}
<div className="w-full h-screen">
  <Navigation />
  <RenderModel>
    {/* 电脑端显示 3D 巫师 */}
    <div className="hidden md:block h-full w-full">
      <Wizard />
    </div>
    
    {/* 手机端显示静态图片，防止崩溃 */}
    <div className="block md:hidden flex items-center justify-center h-full w-full">
      <img 
        src="/background/home-background.png" // 这里可以换成你自己的 PNG 角色图
        alt="Character" 
        className="w-[70%] h-auto object-contain opacity-80" 
      />
    </div>
  </RenderModel>
</div>
      </div>
    </main>
  );
}
