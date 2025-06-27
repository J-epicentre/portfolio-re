import { ROUTE_PATH } from "@/constants/route/path";
import Link from "next/link";

export const HeaderNav = () => {
  return (
    <nav>
      <ul className="flex items-center gap-14">
        <li>
          <Link href={ROUTE_PATH.ABOUT} className="text-sm hover:text-[#B88F63] cursor-pointer font-bold" >
            About
          </Link>
        </li>
        <li>
          <Link href={ROUTE_PATH.MEMBER} className="text-sm hover:text-[#B88F63] cursor-pointer font-bold">
            Member
          </Link>
        </li>
        <li>
          <Link href={ROUTE_PATH.PORTFOLIO} className="text-sm hover:text-[#B88F63] cursor-pointer font-bold">
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
};
