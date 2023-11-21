import React from 'react'

const Product = () => {
    return (
        <div className='max-w-[500px] mx-auto mt-[30px]'>
            <input type='text' placeholder='Name' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none' />
            <input type='number' placeholder='Price' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4' />
            <input type='file' placeholder='Model' className='text-[14px] w-full outline-none mt-4' />
            <button className='bg-[#3e337c] text-white mt-4 p-[8px_48px] text-[14px]'>Next</button>
        </div>
    )
}

export default Product