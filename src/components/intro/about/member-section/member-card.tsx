import { ExpandableCard, ExpandableGroup } from "@/components/ui/expandable";

export const MemberCard = () => {
  return (
    <div className="w-[1200px] h-[500px] flex flex-row gap-6">
      <div className="w-[380px] h-full flex flex-col gap-4">
        <div className="w-full h-[400px] bg-white" />   
        <div className="w-full h-[90px] bg-white" />
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-[80px] font-bold leading-[80px] mb-6">DESIGNER 오주연</h3>
          <div className="flex flex-row items-center gap-4">
            <p className="text-[20px] font-bold">Tech Stack</p>
            <div className="flex flex-row gap-2">
              <div className="h-[44px] w-[44px] bg-white" />
              <div className="h-[44px] w-[44px] bg-white" />
              <div className="h-[44px] w-[44px] bg-white" />
              <div className="h-[44px] w-[44px] bg-white" />
            </div>
          </div>
        </div>
        <div className="w-[770px]">
          <ExpandableGroup>
            {Array.from({ length: 6 }).map((_, index) => (
              <ExpandableCard key={index} index={index}>
                <div className="w-full min-w-[300px] h-[330px] bg-white mb-2">
                  <p className="text-[20px] font-bold">Tech Stack {index + 1}</p>
                </div>
              </ExpandableCard>
            ))}
          </ExpandableGroup>
        </div>
      </div>
    </div>
  );
};
