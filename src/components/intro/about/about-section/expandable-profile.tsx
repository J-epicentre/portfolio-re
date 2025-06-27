"use client";

import { useState } from "react";
import { ProfileLinkCard } from "./ProfileLinkCard";

export const ExpandableProfile = () => {
  const [isActiveIndex, setIsActiveIndex] = useState<number>(0);
  const length = 4;

  // 카드 사이 간격 (카드가 많을수록 gap 줄이기)
  const baseGap = 48; // px
  const dynamicGap = Math.max(12, baseGap - (length - 4) * 6); // 최소 12px 보장

  return (
    <div
      className="flex w-full max-w-[1400px] mx-auto overflow-hidden h-[450px]"
      style={{ gap: `${dynamicGap}px` }}
    >
      {Array.from({ length }).map((_, index) => (
        <ProfileLinkCard
          key={index}
          onMouseEnter={() => setIsActiveIndex(index)}
          isActive={isActiveIndex === index}
        />
      ))}
    </div>
  );
};
