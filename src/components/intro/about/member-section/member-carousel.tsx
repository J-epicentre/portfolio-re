import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MemberCard } from "./member-card";

export const MemberCarousel = () => {
  return (
    <Carousel className="max-w-[1200px] mx-auto relative"
      opts={{
        loop: true,
      }}
    >
      <CarouselDots />
      <CarouselContent>
        {
          Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index}>
              <MemberCard />
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious variant={null} />
      <CarouselNext variant={null}/>
    </Carousel>
  );
};
