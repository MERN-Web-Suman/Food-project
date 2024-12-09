
import React from 'react'
import { FaCaretDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className='py-4 text-white ' >
         
         <div className='container flex justify-between items-center ' >

            {/* logo section */}

            <div>
                <p className='text-xl font-semibold' >

                    FOOD <span className='text-green-500' >EAT</span>
                </p>
            </div>

            {/* Menu section */}
                
                <div className=' flex justify-center items-center gap-6' >

                    <ul className='sm:flex hidden gap-8' >

                        <li className='hover:border-b-2 border-primary uppercase  '  >HOME</li>

                        <li className='hover:border-b-2 border-primary uppercase  ' >MENU</li>

                        <li className='hover:border-b-2 border-primary uppercase  '>ABOUT</li>

                    </ul>
                </div>

                {/* login section */}

                <div className='flex gap-4 items-center ' >
                    <img src="profile.jpg" alt="" className='w-10 rounded-full' />

                    <FaCaretDown />
                </div>

                

         </div>

         </div>
  )
}
