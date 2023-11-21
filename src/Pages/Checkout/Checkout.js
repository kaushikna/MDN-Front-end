import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { MdDelete } from 'react-icons/md';
import { IoMdStar } from "react-icons/io";
import Fan from '../../Assets/Images/ProductDetailImages/fan.png';
import Shipping from '../../Assets/Images/ProductDetailImages/shipping.webp';
import Warranty from '../../Assets/Images/ProductDetailImages/warranty.webp';
import Return from '../../Assets/Images/ProductDetailImages/return.webp';
import Delivery from '../../Assets/Images/ProductDetailImages/delivery.webp';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Checkout = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Header />
            <div className='bg-[#c6c0db] pb-[60px]'>
                <div className="max-w-[1300px] mx-auto px-[20px]">
                    <p className='text-[#3e337c] py-[30px]'><a href='#' className='font-semibold'>Sign In </a>for Express Checkout</p>
                    <div className='md:flex items-start xl:gap-[40px] gap-[20px]'>
                        <div className='md:w-[60%] w-full '>
                            <div className='bg-[#7b7492] sm:p-[20px] p-[20px_12px] rounded-xl pb-[40px]'>
                                <h1 className='text-[#fff] text-[18px] font-semibold'>1. SHIPPING INFORMATION</h1>
                                <div>
                                    <div className='mt-[30px] lg:grid grid-cols-2 gap-[20px]'>
                                        <input type='email' placeholder='Email' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none' />
                                        <div className='relative lg:mt-0 mt-[20px]'>
                                            <input type='number' placeholder='Phone Number' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none pl-[40px]' />
                                            <p className='absolute text-[#3e337c] text-[14px] top-[49%] translate-y-[-50%] left-[8px] font-medium'>+91</p>
                                        </div>
                                    </div>
                                    <div className='mt-[20px] lg:grid grid-cols-2 gap-[20px]'>
                                        <input type='text' placeholder='First Name' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none' />
                                        <input type='text' placeholder='Last Name' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none lg:mt-0 mt-[20px]' />
                                    </div>
                                    <div className='mt-[20px] grid xl:grid-cols-3 lg:grid-cols-2 gap-[20px] sweep-main'>
                                        <input type='number' placeholder='ZIP / Postal Code' className='border-[#e2ddff] border-[1px] rounded-md p-[8px_12px] outline-none text-[14px]' />
                                        <input type='text' placeholder='city' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none' />
                                        <div className='relative'>
                                            <select className='border-[#e2ddff] border-[1px] rounded-md p-[8px_12px] outline-none text-[14px] w-full pr-[24px]'>
                                                <option disabled selected className='text-[#3e337c]'>Select State</option>
                                                <option>Andaman & Nicobar Islands</option>
                                                <option>Andhra Pradesh</option>
                                                <option>Arunachal Pradesh</option>
                                                <option>Assam</option>
                                                <option>Bihar</option>
                                                <option>Chandigarh</option>
                                            </select>
                                            <button className='absolute top-[50%] translate-y-[-50%] right-[8px]'>
                                                <FaAngleDown />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='mt-[20px]'>
                                        <input type='text' placeholder='Street Address' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none' />
                                    </div>
                                    <div className='mt-[20px]'>
                                        <input type='text' placeholder='Street Address 2' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none' />
                                    </div>
                                    <div className='flex items-center gap-2 mt-[30px]'>
                                        <input type='checkbox' id='check' className='cursor-pointer w-[18px] h-[18px]' />
                                        <label for='check' className='text-[#fff] text-[14px] font-normal select-none cursor-pointer'>By clicking this you allow communication from Atomberg technologies</label>
                                    </div>
                                    <button className='rounded-full inline-flex font-semibold text-[14px] items-center justify-center p-[10px_40px] bg-[#c6c0db] text-[#3e337c] mt-[40px]'>
                                        Deliver here
                                    </button>
                                </div>
                            </div>
                            <div className='bg-[#7b7492] sm:p-[20px] p-[20px_12px] rounded-xl mt-[20px]'>
                                <div className='flex justify-between items-center'>
                                    <h2 className='text-[#fff] font-bold text-[18px]'>Deliver here</h2>
                                    <button className='text-[#3e337c] font-medium bg-[#c6c0db] p-[6px_20px] rounded-[20px] text-[14px]'>Edit</button>
                                </div>
                                <div className='mt-[16px]'>
                                    <p className='text-[#fff] text-[14px] font-medium'>Test (Name Field)</p>
                                    <p className='text-[#fff] text-[14px] font-medium mt-[12px]'>1234567890 (Number Field)</p>
                                    <p className='text-[#fff] text-[14px] font-medium mt-[12px]'>Address (address1 Field)</p>
                                    <p className='text-[#fff] text-[14px] font-medium mt-[12px]'>Address2 (address2 Field)</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 mt-[20px]'>
                                <input type='checkbox' id='check1' className='cursor-pointer w-[18px] h-[18px]' />
                                <label for='check1' className='text-[#3e337c] text-[14px] font-medium select-none cursor-pointer'>By clicking this you allow communication from Atomberg technologies</label>
                            </div>
                            <div className='bg-[#7b7492] sm:p-[20px] p-[20px_12px] rounded-xl mt-[20px]'>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='check2' className='cursor-pointer w-[20px] h-[20px]' />
                                    <label for='check2' className='text-[#fff] text-[16px] font-semibold select-none cursor-pointer'>Pay Online (UPI, Credit/Debit Card, Net Banking, Wallet, EMI etc.)</label>
                                </div>
                                <p className='text-[#fff] text-[16px] mt-[10px]'>Pay securely by UPI or Wallet or Credit or Debit card or Internet banking</p>
                                <button className='text-[#3e337c] font-medium bg-[#c6c0db] p-[9px_20px] rounded-[20px] text-[14px] mt-[20px] w-full'>Make online Payment</button>
                                <div className='flex items-center gap-2 mt-[20px]'>
                                    <input type='checkbox' id='check3' className='cursor-pointer w-[18px] h-[18px]' />
                                    <label for='check3' className='text-[#fff] text-[14px] font-normal select-none cursor-pointer'>By clicking this you allow communication from Atomberg technologies</label>
                                </div>
                            </div>
                            <div className='flex items-center gap-[32px] mt-8 flex-wrap justify-between bg-[#fff] rounded-xl p-[20px]'>
                                <img src={Shipping} alt='Shipping' className='w-[100px]' />
                                <img src={Warranty} alt='Warranty' className='w-[100px]' />
                                <img src={Return} alt='Return' className='w-[100px]' />
                                <img src={Delivery} alt='Delivery' className='w-[100px]' />
                            </div>
                        </div>
                        <div className='md:w-[40%] w-full md:mt-0 mt-[20px]'>
                            <div className='bg-[#7b7492] rounded-xl'>
                                <div className='py-[30px] flex gap-[16px] items-start border-b-[#c6c0db] border-b-[1px] sm:p-[20px] p-[20px_12px]'>
                                    <img src={Fan} alt='Fan' className='w-[62px] rounded-md border border-gray-200' />
                                    <div>
                                        <h5 className='text-[#fff] font-semibold text-[16px]'>Efficio Ceiling Fan</h5>
                                        <div className='mt-2'>
                                            <button className='items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800'>White</button>
                                            <button className='items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 ml-[10px]'>1200mm</button>
                                        </div>
                                        <div className='flex items-center gap-[12px] mt-[14px]'>
                                            <p className='text-[#fff] text-[14px]'>₹3,299</p>
                                            <div className='flex items-center'>
                                                <button className='bg-[#c6c0db] text-white w-[26px] h-[26px] flex justify-center items-center' onClick={() => setCount(count - 1)}>-</button>
                                                <button className='flex justify-center items-center p-[2.5px_10px] text-[14px] bg-white text-[#3e337c] shadow-[0_2px_6px_1px_#3e337c30]'>{count}</button>
                                                <button className='bg-[#c6c0db] text-white w-[26px] h-[26px] flex justify-center items-center' onClick={() => setCount(count + 1)}>+</button>
                                            </div>
                                            <button className='text-[#fff] text-[24px]'><MdDelete /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className='sm:p-[20px] p-[20px_12px]'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-[#fff] text-[14px]'>Subtotal:</p>
                                        <div>
                                            <p className='text-[#fff] text-[14px]'>₹3,299</p>
                                            <p className='text-[#fff] text-[10px]'>(incl. tax)</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center mt-[20px]'>
                                        <p className='text-[#fff] font-semibold text-[14px]'>Discount</p>
                                        <p className='text-[#fff] text-[14px]'>₹660</p>
                                    </div>
                                    <div className='flex justify-between items-center mt-[20px]'>
                                        <p className='text-[#fff] text-[14px]'>IGST</p>
                                        <p className='text-[#fff] text-[14px]'>₹2,416</p>
                                    </div>
                                    <div className='flex justify-between items-center mt-[20px]'>
                                        <p className='text-[#fff] text-[14px]'>Shipping</p>
                                        <p className='text-[#fff] text-[14px]'>FREE</p>
                                    </div>
                                    <div className='flex justify-between items-center mt-[20px]'>
                                        <p className='text-[#fff] text-[14px]'>Total</p>
                                        <p className='text-[#fff] text-[14px]'>₹3,299</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#7b7492] rounded-xl mt-[20px]'>
                                <div className='sm:p-[20px] p-[20px_12px] border-b-[#c6c0db] border-b-[1px]'>
                                    <h2 className='text-[#fff] text-[16px] font-semibold'>Very Happy with Renesa Fan!</h2>
                                    <div className='flex text-[18px] text-[#fff] mt-1'>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                    <p className='text-[14px] italic text-[#fff] mt-3'>Had purchased 2 fans till last year. But in this month one renesa Model Fan was not working so logged complain, Person came within 3 days of complaint registration. Technician Kashyap Thakkar visited to my place and replaced upper part of FAN PCB assembly and now working fine.Good service.</p>
                                    <div className='mt-5'>
                                        <p className='text-[#fff] text-[14px] font-medium'>Shailesh Wankhede</p>
                                        <p className='text-[#fff] text-[12px]'>Customer</p>
                                    </div>
                                </div>
                                <div className='sm:p-[20px] p-[20px_12px]'>
                                    <h2 className='text-[#fff] text-[16px] font-semibold'>Amazing Post-sales Service</h2>
                                    <div className='flex text-[18px] text-[#fff] mt-1'>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                    <p className='text-[14px] italic text-[#fff] mt-3'>Very very happy with the after sales service, my Efficio ceiling fan had some issue, made a complaint yesterday and the service technician Mr. Jeffrey arrived on the same day and fixed the problem. Keep up the good work team!!! Excellent product and excellent service 👍👍👍</p>
                                    <div className='mt-5'>
                                        <p className='text-[#fff] text-[14px] font-medium'>Nishant Balakrishnan</p>
                                        <p className='text-[#fff] text-[12px]'>Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout