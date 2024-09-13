"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import menu from "../public/menu.png"
export default function Menu() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className=''>
      <Image src={menu} alt="menu" width={20} height={20}  onClick={() => {setOpen((prev) => !prev)}}/>
       {open && (
      <div className="absolute flex flex-col items-center gap-5 py-5 text-lg z-10 w-full bg-black text-white left-0 top-16 h-[calc(100vh-9px)]">
        <Link href="">Home</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
      </div>)}
    </div>
  )
}
