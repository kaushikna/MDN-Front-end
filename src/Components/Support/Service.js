import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai'

const Service = () => {
    return (
        <div>
            <div className='max-w-[500px] mx-auto mt-[30px]'>
                <div className='relative'>
                    <select className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none'>
                        <option>Customer</option>
                        <option>Distributor</option>
                        <option>Retailer</option>
                        <option>B2B</option>
                        <option>B2G</option>
                        <option>Institutional</option>
                    </select>
                    <AiFillCaretDown className='text-[#3e337c] absolute right-[10px] top-[50%] translate-y-[-50%]' />
                </div>
                <div className='relative mt-4'>
                    <select className='text-[14px] w-full border-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none'>
                        <option>Inspection Request</option>
                        <option>Service Request</option>
                    </select>
                    <AiFillCaretDown className='text-[#3e337c] absolute right-[10px] top-[50%] translate-y-[-50%]' />
                </div>
            </div>
        </div>
    )
}

export default Service