import { ExpandableProfile } from "./expandable-profile";

export const AboutSection = () => {
  return (
    <section className="w-full pb-24">
      <div className="flex flex-col justify-center w-full max-w-[1200px] mx-auto">
        <h2 className="text-[64px] font-[900] text-center">ABOUT</h2>
        <p className="text-[32px] font-[700] text-center my-4">
          지각변동의 중심, <span className="text-[#E8BD27]">주</span>진원지에 오신 걸 환영합니다!
        </p>
        <ExpandableProfile />
      </div>  
    </section>
  );
};
