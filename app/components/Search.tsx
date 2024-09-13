import React from 'react'
import search from "../public/search.png"
import Image from 'next/image'
export default function Search() {
  return (
  <form className='flex justify-between bg-gray-100 border-2 rounded-3xl px-3'>
    <input className='bg-transparent  outline-none p-2' type="text" placeholder='search'/>
    <button className='bg-transparent'>
        <Image src={search} alt='' width={20} height={20}/>
    </button>
  </form>
  )
}
