"use client"
import React from 'react'
import K72LOGO from '../K72LOGO'
import { useState } from 'react'
import FullScreenNav from './FullScreenNav'
import Image from 'next/image'
import Link from 'next/link'
function Navbar() {

    const [toggle, setToggle] = useState(false)
    const onAgencyPage = window.location.pathname === "/Agency"
    console.log(onAgencyPage)

  return (
    <div className='h-44 z-30 flex justify-between  w-full fixed top-0 right-0 text-white'>
        {/* logo  */}
        <Link href={"/Agency"} className='m-3 '>
        {
          onAgencyPage? <K72LOGO color='#000000' /> :   <K72LOGO color='#ffffff'/>
        }
        </Link>

        {/* // hamburger  */}
        {
            toggle ? <FullScreenNav setToggle={setToggle} /> : <div className='h-12 flex justify-end px-8 w-60 bg-black transition-normal duration-200 hover:bg-yellow text-white'>
                <button
                className='cursor-pointer'
                onClick={()=> setToggle(!toggle)}
                >
                <Image src={ "/hamburger.svg"} height={60} width={60} alt={""} />
                </button>
            </div>
        }
        
    </div>
  )
}

export default Navbar