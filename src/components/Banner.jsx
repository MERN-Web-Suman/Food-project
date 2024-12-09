
import React from 'react'

export default function Banner() {
  return (
    <div className='container py-14 ' >

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 ' >

            {/* image section */}

            <div>
                <img src="2.png" alt="" />
            </div>

            {/* text section */}

            <div className='flex flex-col justify-center' >
                
                <h1 className='text-3xl font-semibold text-white  text-center' >Food Is Always Good</h1>

                <p className='py-4 text-white font-semibold' >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Obcaecati laboriosam fugiat fuga nemo suscipit voluptate
                      reiciendis voluptates dicta quaerat commodi?
                </p>
            </div>
        </div>
    </div>
  )
}
