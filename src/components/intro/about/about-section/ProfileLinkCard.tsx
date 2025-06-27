"use client";

import Image from "next/image";
import SampleProfileImg from "@/assets/images/sample-profile.png";
import Link from "next/link";

interface ProfileLinkCardProps {
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isActive?: boolean;
}
export const ProfileLinkCard = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  isActive = false
}: ProfileLinkCardProps) => {
  
  return (
    <div 
      className={`
        h-[450px]
        relative
        overflow-hidden
        transition-all duration-300 ease-in-out
        flex-shrink-0
        ${isActive ? "flex-[8]" : "flex-[1]"}
      `}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className={`
          absolute 
          top-[50%] 
          left-[50%] 
          flex 
          flex-row 
          w-[800px]
          translate-y-[-50%] 
          ${isActive ? "translate-x-[-50%] " : "translate-x-[-20%] "}
          duration-400
        `}
      >
        <Image src={SampleProfileImg} alt="profile" width={360} height={450}/>
        <div className="flex flex-col ">
          <span 
            className={`
              text-[80px] 
              font-bold 
              leading-[90px]
            `}
          >
            DESIGNER
          </span>
          <strong className="text-[80px] font-bold leading-[90px]">오<span className="text-[#E8BD27]">주</span>연</strong>
          <Link href="" className="mt-4">
            <span 
              className="
                block 
                w-[220px] 
                h-[69px] 
                rounded-full 
                bg-[#714C37] 
                leading-[69px] 
                text-center 
                text-white 
                text-[20px] 
                font-bold
                hover:scale-[1.05]
                transition-transform duration-300 ease-in-out
                "
              >
              개인 프로필 바로가기
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
