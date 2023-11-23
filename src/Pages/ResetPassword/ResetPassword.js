import React from 'react';
import Img from '../../Assets/Images/login.png'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const ResetPassword = () => {
    return (
        <div>
            <Header />
            <div className='py-[80px]'>
                <div className='shadow-[rgba(100,100,111,0.2)0px_7px_29px_0px] max-w-[1080px] xl:mx-auto bg-white md:flex items-center justify-between mx-[20px]'>
                    <div className='md:w-[50%] p-[30px] md:block hidden'>
                        <img src={Img} alt='Login' className='lg:max-w-[440px] max-w-[360px] mx-auto w-full' />
                    </div>
                    <div className='md:w-[50%] sm:p-[30px] p-[30px_16px]  border-l-[1px] border-l-[#f1f1f1]'>
                        <h1 className='text-[#3e337c] text-center sm:text-[34px] text-[22px] font-semibold'>Reset Password</h1>
                        <p className='sm:text-[14px] text-[12px] text-center'>We will send you an email to reset your password.</p>
                        <div className='mt-[40px]'>
                            <label className='text-[#3e337c] text-[14px] block font-medium'>Old Password</label>
                            <input type='email' className='text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]' />
                        </div>
                        <div className='mt-[20px]'>
                            <label className='text-[#3e337c] text-[14px] block font-medium'>New Password</label>
                            <input type='email' className='text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]' />
                        </div>
                        <div className='flex justify-center gap-4 mt-[40px]'>
                            <button className='bg-[#3e337c] text-white p-[8px_20px] w-full max-w-[320px] lg:text-[20px] text-[14px] font-medium rounded-lg'>Submit</button>
                            <button className='bg-[#c4403e] text-white p-[8px_20px] w-full max-w-[320px] lg:text-[20px] text-[14px] font-medium rounded-lg' >Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ResetPassword