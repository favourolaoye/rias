import Image from 'next/image'
import React from 'react'
import profile from "../public/profile.png";
import cart from "../public/cart.png";
export default function NavIcons() {
  return (
   <div className="flex items-center gap-2">
     <Image className='cursor-pointer' src={profile} alt='' height={24} width={24}/>
     <Image className='cursor-pointer' src={cart} alt='' height={24} width={24}/>
   </div>
  )
}
