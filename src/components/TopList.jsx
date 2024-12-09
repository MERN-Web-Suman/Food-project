
import React from 'react'

export default function TopList() {
  return (
        <>
                <div className='container py-14 '>
                <div className='text-center' >

        <h1 className='text-3xl font-semibold text-[#FF2929] ' >Top List</h1>

        <p className='text-white underline' >Our top List</p>
        </div>

        {/* Card section */}

        <div className='grid grid-cols-1 md:grid-cols-3  gap-8  text-white md:ml-10  ' >

            

                <div className='bg-white/50 md:ml-10 text-center rounded-3xl hover:scale-110 transition duration-300 '  >
                
                        <img src="4.png" alt="" className='w-40 h-40 object-cover rounded-full mx-auto  ' />

                <p className='text-yellow-500 space-y-2 ' >⭐⭐⭐⭐⭐</p>

                <p className='text-blue-500' >$10.99</p>
                <p className='text-lg font-semibold space-y-2 text-red-500 ' >Food Name</p>
                </div>
              

                <div className='bg-white/50 md:ml-10 text-center rounded-3xl hover:scale-110 transition duration-300  ' >
                    <img src="5.png" alt="" className='w-40 h-40 object-cover rounded-full mx-auto  ' />

                <p className='text-yellow-500 space-y-2 '>⭐⭐⭐⭐⭐</p>
                <p className='text-blue-500' >$10.99</p>
                <p className='text-lg font-semibold space-y-2 text-red-500 '>Food Name</p>
                </div>

                <div className='bg-white/50 md:ml-10 text-center rounded-3xl hover:scale-110 transition duration-300 '>
                    <img src="3.png" alt=""  className='w-40 h-40 object-cover rounded-full mx-auto  '/>

                <p className='text-yellow-500 space-y-2 '>⭐⭐⭐⭐⭐</p>
                <p className='text-blue-500' >$10.99</p>
                <p className='text-lg font-semibold space-y-2 text-red-500 '>Food Name</p>
                </div>
            </div>
       
</div>
       
        </>     
  
  )
}
