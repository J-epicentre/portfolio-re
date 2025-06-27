
export const PortfolioListSection = () => {
  return (
    <div 
      className="w-full h-screen bg-[#A67C52] flex items-center justify-center"
    >
      <div
        className="flex flex-row gap-6"
      >
        {
          Array.from({ length: 4 }).map((_, index) => (
            <div
              className="relative w-[200px] h-[300px] bg-white flex items-center justify-center"
              key={index}
            >
              <span className="z-10 text-3xl">포폴{index + 1}</span>
              <div
                className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[160px] h-[15px] rounded-full bg-black opacity-60 blur-[15px]"
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};
