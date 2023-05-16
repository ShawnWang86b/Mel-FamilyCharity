import Link from "next/link";
import { MdFamilyRestroom } from "react-icons/md";

export const AppLogo = () => {
  return (
    <div className="flex text-3xl text-center py-4 font-heading">
      <Link href="/">VR1Family Charity</Link>
      <span className="text-3xl pt-1">
        <MdFamilyRestroom />
      </span>
    </div>
  );
};
