import Image from "next/image";
import headerLogo from "../../assets/home/TOADS-LOGO-GRAY-header.png";
import Link from "next/link";
import Dropdown from "./DropDown";

const MenuBar = () => {
  return (
    <div className="flex items-center justify-between mx-auto max-w-7xl">
      <Image src={headerLogo} alt="headerLogo" />
      <div>
        <ul className="flex gap-[30px] text-[#475467]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/factory">Factory</Link>
          </li>
          <li>
            <Link href="/print-technic">Print Technic</Link>
          </li>
          <li>
            <Link href="/client">Client</Link>
          </li>
          <li>
            <Link href="/compliance">Compliance</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Dropdown />
      {/* <select name="" id="" className="bg-[#F2F4F7] px-3 py-2 rounded-lg">
        <option value="" className="p-4">English</option>
        <option value="" className="p-4">French</option>
      </select> */}
    </div>
  );
};

export default MenuBar;
