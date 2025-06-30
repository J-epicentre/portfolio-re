"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Mountain1 from "@/assets/images/mountain-1.png";
import Mountain2 from "@/assets/images/mountain-2.png";
import Mountain3 from "@/assets/images/mountain-3.png";
import MountainBack4 from "@/assets/images/mountain-back-4.png";
import MountainBack5 from "@/assets/images/mountain-back-5.png";
import MountainBack6 from "@/assets/images/mountain-back-6.png";

export const ScrollAnimationSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 구간 설정
  const onlyPerspective = {
    start: 0,
    end: 0.5,
  };
  const perspectiveWithLift = {
    start: 0.5,
    end: 1,
  };

  const scrollBreakpoints = [onlyPerspective.start, onlyPerspective.end, perspectiveWithLift.end];

  // mountain 1 
  const scale1 = useTransform(scrollYProgress, scrollBreakpoints, [1.8, 1.7, 1.2]);
  const lift1 = useTransform(scrollYProgress, scrollBreakpoints, ["0%", "0%", "-20%"]);

  const scale2 = useTransform(scrollYProgress, scrollBreakpoints, [2.5, 1.7, 1.2]);
  const left2 = useTransform(scrollYProgress, scrollBreakpoints, [-200, -150, 0]);
  const lift2 = useTransform(scrollYProgress, scrollBreakpoints, ["0%", "0%", "-35%"]);

  const scale3 = useTransform(scrollYProgress, scrollBreakpoints, [2.5, 1.7, 1.2]);
  const left3 = useTransform(scrollYProgress, scrollBreakpoints, [0, -20, -180]);
  const lift3 = useTransform(scrollYProgress, scrollBreakpoints, ["0%", "0%", "-35%"]);

  const lift4 = useTransform(scrollYProgress, scrollBreakpoints, ["0%", "0%", "-25%"]);
  const scale4 = useTransform(scrollYProgress, scrollBreakpoints, [1, 1.5, 2]);
  const right4 = useTransform(scrollYProgress, scrollBreakpoints, [0, 40, 110]);

  const lift5 = useTransform(scrollYProgress, scrollBreakpoints, ["0%", "0%", "-20%"]);
  const scale5 = useTransform(scrollYProgress, scrollBreakpoints, [1, 1.1, 1.2]);
  const right5 = useTransform(scrollYProgress, scrollBreakpoints, [0, 0, -100]);

  const lift6 = useTransform(scrollYProgress, scrollBreakpoints, ["0%", "0%", "-25%"]);
  const scale6 = useTransform(scrollYProgress, scrollBreakpoints, [1, 1.1, 1.2]);
  const right6 = useTransform(scrollYProgress, scrollBreakpoints, [0, 0, -100]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.2, 1],
    ["rgb(255, 255, 255)", "rgb(0, 31, 63)"] // 흰색 → 남색
  );

  const backBackground = useTransform(
    scrollYProgress,
    [0.2, 1],
    [0, 0.3]
  )

  const burrowLift = useTransform(
    scrollYProgress,
    [0.6, 1],
    [500, 0]
  );
  const burrowScale = useTransform(
    scrollYProgress,
    [0.6, 1],
    [3, 1]
  );

  useEffect(() => {
    console.log("Scroll Y Progress:", scrollYProgress.get());
  }, [scrollYProgress.get()]);

  return (
    <div ref={containerRef} className="w-full h-[4000px] relative">
      <div className="sticky top-0 left-0 h-screen flex items-center justify-center w-full overflow-hidden">
        {/* background sky */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundColor
          }}
        />
        {/* back */}
        <motion.img
          src={MountainBack4.src}
          alt="Mountain Back 4"
          className="absolute top-[50%] left-[50%] translate-x-[-150%] translate-y-[15%] object-cover"
          width={200}
          style={{ 
            scale: scale4,
            y: lift4,
            x: right4,
            transformOrigin: "bottom center",
          }}
        />
        <motion.img
          src={MountainBack5.src}
          alt="Mountain Back 4"
          className="absolute top-[50%] left-[50%] translate-x-[20%] translate-y-[-7%] object-cover"
          width={300}
          style={{ 
            scale: scale5,
            y: lift5,
            x: right5,
            transformOrigin: "bottom center",
          }}
        />
        <motion.img
          src={MountainBack6.src}
          alt="Mountain Back 4"
          className="absolute top-[50%] left-[50%] translate-x-[100%] translate-y-[5%] object-cover"
          width={250}
          style={{ 
            scale: scale6,
            y: lift6,
            x: right6,
            transformOrigin: "bottom center",
          }}
        />
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-[#27203F]"
          style={{
            opacity: backBackground,
          }}
        />
        {/* front */}
        <motion.img
          src={Mountain1.src}
          alt="Mountain"
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-20%] object-cover"
          width={300}
          style={{ 
            scale: scale1,
            y: lift1,
            transformOrigin: "bottom center",
          }}
        />
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-[#27203F]"
          style={{
            opacity: backBackground,
          }}
        />
        <motion.img
          src={Mountain2.src}
          alt="Mountain"
          className="absolute top-[50%] left-[50%] translate-x-[-170%] translate-y-[18%] object-cover"
          width={200}
          style={{ 
            scale: scale2,
            y: lift2,
            x: left2,
            transformOrigin: "bottom center",
          }}
        />
        <motion.img
          src={Mountain3.src}
          alt="Mountain"
          className="absolute top-[50%] left-[50%] translate-x-[90%] translate-y-[25%] object-cover"
          width={250}
          style={{ 
            scale: scale3,
            y: lift3,
            x: left3,
            transformOrigin: "bottom center",
          }}
        />
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-[#27203F]"
          style={{
            opacity: backBackground,
          }}
        />
        <motion.div 
          className={`absolute bottom-0 left-0 w-full bg-[#6DB32E] h-[calc(50vh-260px)]`}
          style={{
            scale: useTransform(scrollYProgress, scrollBreakpoints, [1, 1, 1.5]),
            transformOrigin: "bottom center",
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div 
              className="absolute top-[30%] left-[50%] translate-x-[-50%] translate-y[-50%] w-[400px] h-[100px] bg-[#603813] rounded-[100%]"
              style={{
                y: burrowLift,
                scale: burrowScale
              }}
            />
          </div>
        </motion.div>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-[#27203F]"
          style={{
            opacity: backBackground,
          }}
        />
      </div>
    </div>
  );
};
