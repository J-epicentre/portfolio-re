import GroundImg from '@/assets/images/ground.png';
import Image from 'next/image';

export const GroundSection = () => {
  return (
    <div className='w-full relative'>
      <div 
        className='w-full h-[700px] bg-[#6DB32E]'
      />
      <div 
        className='absolute top-0 left-0 w-full h-[700px] bg-[#27203F] opacity-[0.3]'
      />
      <Image 
        src={GroundImg}
        alt='ground'
        className='w-full h-auto object-cover'
      />
    </div>
  );
};
