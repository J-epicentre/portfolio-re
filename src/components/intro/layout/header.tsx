import Logo from '@/assets/images/logo.svg';
import Image from 'next/image';
import { HeaderNav } from './header-nav';

export const Header = () => {
  return (
    <header className='flex items-center justify-center px-4'>
      <div className="flex items-center justify-between py-2 h-[75px] max-w-[1200px] w-full">
        <h1>
          <Image src={Logo} alt="주진원지" width={178} height={75} />          
          <span className="sr-only">주진원지</span>
        </h1>
        <HeaderNav />
      </div>
    </header>
  );
};
