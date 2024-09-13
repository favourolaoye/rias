import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import logo from "../public/logo.png";
import NavIcons from "./NavIcons";
import SearchInput from "./Search";
export default function Navbar() {
  return (
  <div className="h-16 px-5 md:px-8 lg:px-16 xl:px-32 bg-gray-100 2xl:px-64 relative">
      {/* mobile screens */}
      <div className="md:hidden h-full flex justify-between items-center ">
        <Link href="/">
          <div className="tracking-wide text-2xl font-semibold">Ria&apos;s</div>
        </Link>
        <Menu/>
      </div>
      {/* bigger screens */}
      <div className="hidden md:flex justify-between w-full h-16 items-center">
        <div className="flex justify-between w-10 cursor-pointer gap-1">
          <Image src={logo} alt="" height={24} width={24} className="bg-transparent"/>
          <p className="text-2xl tracking-wide">Ria&apos;s</p>
        </div>
        <div className="flex items-center justify-between w-2/3">
         <SearchInput/>
         <NavIcons/>
        </div>
      </div>
    </div>
  );
  
}
