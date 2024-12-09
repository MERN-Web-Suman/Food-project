
import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdFoodBank } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

export default function OurServices() {
  return (
    <div className='container py-12  ' >

        {/* header section */}

        <div className='text-center  ' >

            <h1 className='text-4xl font-semibold' >Our Services</h1>
        </div>

        {/* icons sections */}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12' >

            <div className='flex justify-center items-center gap-3' >

            <FaMobileAlt className='text-2xl' />

            <p className='text-2xl font-bold' >Online Booking</p>
            
            </div>

            <div className='flex justify-center items-center gap-3'>
            <IoFastFoodOutline className='text-3xl' />

            <p className='text-2xl font-bold' >Fast Food</p>
            </div>

            <div className='flex justify-center items-center gap-3'>
            <MdFoodBank className='text-3xl' />

            <p className='text-2xl font-bold'>Healthy Food</p>
            </div>

            <div className='flex justify-center items-center gap-3'>
            <TbTruckDelivery  className='text-3xl' />

            <p className='text-2xl font-bold'>Order Delivery</p>
            </div>
        </div>
        
    </div>
  )
}
