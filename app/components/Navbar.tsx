// import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Button from "./Button";
import {NAV_LINKS} from "@/app/constants"
const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-conatianer padding-container relative z-30 py-5">
<Link href="/">
<Image src="/visitrwanda/v1.jpg" alt="logo" width={74} height={29}/>
</Link>
<ul className="hidden h-full gap-12 lg:flex">
  {NAV_LINKS.map((link)=>(
    <li key={link.key}>
   <Link href={link.href} className="regular-16 text-gray-500 flex flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
      {link.label}
   </Link>
   </li> 
  ))}
<div className="flex ml-[600px] sm:items-start">
  <Button
  type='button'
  title='log in'
  icon='/visitrwanda/v2.jpg'
  // variant='bg-blue-300'
  />
</div>
</ul>

</nav>


  );
};

export default Navbar
