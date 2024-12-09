
import React from 'react'

export default function Hero() {
  return (
    <div>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[600px] gap-8 text-white ' >

            {/* text section */}

            <div className='flex flex-col justify-center gap-5 text-center md:text-left  pb-10 pt-24'  >

                <h1 className='text-5xl font-bold ' >Delicious Food Is Waiting For You </h1>

                <p className='font-semibold text-3xl ' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Explicabo, animi quae. Corrupti voluptas similique quam expedita provident.
                     Consequuntur, vitae excepturi?
                </p>

                <div className='flex gap-4 items-center md:justify-start justify-center ' >

                    <button className=' px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-orange-500  rounded-xl' >Food Menu</button>
                    
                    <button className='px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white  hover:from-pink-500 hover:to-orange-500 rounded-xl' >Book Table</button>
                </div>
            </div>

            {/* image section */}

            <div className='flex flex-col justify-center' >
                <img src="1.png" alt="" />
            </div>

            <div></div>

        </div>

    </div>
  )
}
