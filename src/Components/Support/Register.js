import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs'

const Register = () => {
    return (
        <div >
            <p className='text-[14px] text-[#3e337c] font-medium text-center max-w-[1110px] mx-auto mt-[30px]'>When we say we are confident of our products, we mean it! Which is why we'd love for you to register for the warranty card. Oh, did we mention that you get an additional year of warranty if you do so? Here's how you can register for it. It cannot get simpler. Or better.</p>
            <div className='max-w-[500px] mx-auto mt-[30px]'>
                <input type='text' placeholder='Enter Your Name*' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none' />
                <input type='number' placeholder='Enter Your Mobile Number*' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4' />
                <button className='bg-[#3e337c] text-white mt-4 p-[8px_18px] text-[14px]'>Please Verify Number</button>
                <input type='email' placeholder='Enter Your Email Address*' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4' />
                <input type='text' placeholder='Line1*' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none mt-4' />
                <input type='text' placeholder='Line2' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none mt-4' />
                <input type='text' placeholder='Landmark*' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none mt-4' />
                <input type='number' placeholder='ZIP / Postal Code*' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none mt-4' />
                <input type='text' placeholder='City*' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none mt-4' />
                <div className='relative mt-4'>
                    <select className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none'>
                        <option selected disabled>Select State</option>
                        <option>Andaman & Nicobar Islands</option>
                        <option>Andhra Pradesh</option>
                        <option>Arunachal Pradesh</option>
                        <option>Assam</option>
                        <option>Bihar</option>
                        <option>Chandigarh</option>
                        <option>Chhattisgarh</option>
                        <option>Dadra & Nagar Haveli & Daman & Diu</option>
                        <option>Delhi</option>
                        <option>Goa</option>
                        <option>Gujarat</option>
                        <option>Haryana</option>
                        <option>Himachal Pradesh</option>
                        <option>Jammu & Kashmir</option>
                    </select>
                    <AiFillCaretDown className='text-[#3e337c] absolute right-[10px] top-[50%] translate-y-[-50%]' />
                </div>
                <input type='text' placeholder='Enter Product Serial Number / Barcode*' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none mt-4' />
                <div className='flex mt-1 items-center gap-2'>
                    <BsFillInfoCircleFill className='text-[#3e337c]' />
                    <p className='text-[#3e337c] text-[14px]'>How to find correct serial number?</p>
                </div>
                <div className='relative mt-4'>
                    <select className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none'>
                        <option selected disabled>Select Product Option*</option>
                        <option>fan</option>
                        <option>mixer</option>
                    </select>
                    <AiFillCaretDown className='text-[#3e337c] absolute right-[10px] top-[50%] translate-y-[-50%]' />
                </div>
                <div className='relative mt-4'>
                    <select className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none'>
                        <option selected disabled>Select Types*</option>
                    </select>
                    <AiFillCaretDown className='text-[#3e337c] absolute right-[10px] top-[50%] translate-y-[-50%]' />
                </div>
                <div className='relative mt-4'>
                    <select className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none'>
                        <option selected disabled>Select SubCategory*</option>
                    </select>
                    <AiFillCaretDown className='text-[#3e337c] absolute right-[10px] top-[50%] translate-y-[-50%]' />
                </div>
                <input type='text' placeholder='Model' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none mt-4' />
                <div className='relative mt-4'>
                    <select className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none'>
                        <option selected disabled>Source of Purchase*</option>
                        <option>Amazon</option>
                        <option>Flipkart</option>
                        <option>Pepperfry</option>
                        <option>PayTm</option>
                        <option>MDN Website</option>
                        <option>Snapdeal</option>
                        <option>Dealer/Retail shop/Channel partner</option>
                        <option>BSES</option>
                        <option>TATA Mumbai DSM Program</option>
                        <option>TPDDL Delhi DSM Program</option>
                        <option>BSES-Rajdhani DSM Program</option>
                        <option>Tata Cliq</option>
                        <option>Other channels</option>
                    </select>
                    <AiFillCaretDown className='text-[#3e337c] absolute right-[10px] top-[50%] translate-y-[-50%]' />
                </div>
                <div className='mt-4'>
                    <label className='text-[#3e337c] text-[14px] font-semibold'>Date of Purchase*</label>
                    <input type='date' placeholder='Model' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none mt-1' />
                </div>
                <div className='mt-4'>
                    <label className='text-[#3e337c] text-[14px] font-semibold'>Please upload your pdf/images here</label>
                    <input type='file' placeholder='Model' className='text-[14px] w-full outline-none mt-1' />
                </div>
                <button className='bg-[#3e337c] text-white mt-8 p-[8px_18px] text-[14px] rounded-md'>Register Warranty</button>
            </div>
        </div>
    )
}

export default Register