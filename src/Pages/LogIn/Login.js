import React, { useState } from 'react';
import Img from '../../Assets/Images/login.png'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Login = () => {
    const [create, setCreate] = useState(true);
    const [forgot, setForgot] = useState(false);
    return (
        <div>
            <Header />
            <div className='py-[80px]'>
                <div className='shadow-[rgba(100,100,111,0.2)0px_7px_29px_0px] max-w-[1080px] xl:mx-auto bg-white md:flex items-center justify-between mx-[20px]'>
                    <div className='md:w-[50%] p-[30px] md:block hidden'>
                        <img src={Img} alt='Login' className='lg:max-w-[440px] max-w-[360px] mx-auto w-full' />
                    </div>
                    {forgot ?
                        <div className='md:w-[50%] sm:p-[30px] p-[30px_16px]  border-l-[1px] border-l-[#f1f1f1]'>
                            <h1 className='text-[#3e337c] text-center sm:text-[34px] text-[22px] font-semibold'>Reset your password</h1>
                            <p className='sm:text-[14px] text-[12px] text-center'>We will send you an email to reset your password.</p>
                            <div className='mt-[40px]'>
                                <label className='text-[#3e337c] text-[14px] block font-medium'>Email</label>
                                <input type='email' className='text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]' />
                            </div>
                            <div className='flex justify-center gap-4 mt-[40px]'>
                                <button className='bg-[#3e337c] text-white p-[8px_20px] w-full max-w-[320px] lg:text-[20px] text-[14px] font-medium rounded-lg'>Submit</button>
                                <button className='bg-[#c4403e] text-white p-[8px_20px] w-full max-w-[320px] lg:text-[20px] text-[14px] font-medium rounded-lg' onClick={() => setForgot(!create)}>Cancel</button>
                            </div>
                        </div> :
                        <>
                            {create ?
                                <div className='md:w-[50%] sm:p-[30px] p-[30px_16px]  border-l-[1px] border-l-[#f1f1f1]'>
                                    <h1 className='text-[#3e337c] text-center sm:text-[34px] text-[30px] font-semibold'>Log In</h1>
                                    <div>
                                        <div className='sm:mt-[60px] mt-[30px]'>
                                            <label className='text-[#3e337c] text-[14px] block font-medium'>Email</label>
                                            <input type='email' className='text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]' />
                                        </div>
                                        <div className='sm:mt-[30px] mt-[20px]'>
                                            <label className='text-[#3e337c] text-[14px] block font-medium'>Password</label>
                                            <input type='email' className='text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]' />
                                        </div>
                                        <div className='flex justify-between items-center mt-3'>
                                            <div className='flex items-center gap-2'>
                                                <input type='checkbox' id='check' className='cursor-pointer' />
                                                <label for='check' className='text-[#3e337c] text-[12px] font-medium select-none cursor-pointer'>Remember me</label>
                                            </div>
                                            <p className='text-[#3e337c] text-[12px] font-medium cursor-pointer' onClick={() => setForgot(!forgot)}>Forgot Password?</p>
                                        </div>
                                        <div className='flex justify-center'>
                                            <button className='bg-[#c4403e] text-white p-[8px_20px] sm:mt-[80px] mt-[40px] w-full max-w-[320px] sm:text-[20px] text-[16px] font-medium rounded-lg'>Log In</button>
                                        </div>
                                        <p className='text-[#3e337c] font-normal text-center mt-[30px] text-[14px]'>Don't have an account yet? <a onClick={() => setCreate(!create)} href='#' className='font-semibold'>Create account</a></p>
                                    </div>
                                </div> : <div className='md:w-[50%] sm:p-[30px] p-[30px_16px]  border-l-[1px] border-l-[#f1f1f1]'>
                                    <h1 className='text-[#3e337c] text-center  sm:text-[34px] text-[26px] font-semibold'>Create Account</h1>
                                    <div>
                                        <div className='sm:mt-[60px] mt-[30px]'>
                                            <label className='text-[#3e337c] text-[14px] block font-medium'>First Name</label>
                                            <input type='text' className='text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]' />
                                        </div>
                                        <div className='sm:mt-[30px] mt-[20px]'>
                                            <label className='text-[#3e337c] text-[14px] block font-medium'>Last Name</label>
                                            <input type='text' className='text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]' />
                                        </div>
                                        <div className='sm:mt-[30px] mt-[20px]'>
                                            <label className='text-[#3e337c] text-[14px] block font-medium'>Email</label>
                                            <input type='email' className='text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]' />
                                        </div>
                                        <div className='sm:mt-[30px] mt-[20px]'>
                                            <label className='text-[#3e337c] text-[14px] block font-medium'>Password</label>
                                            <input type='email' className='text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]' />
                                        </div>
                                        <div className='flex justify-center'>
                                            <button className='bg-[#c4403e] text-white p-[8px_20px] sm:mt-[80px] mt-[40px] w-full max-w-[320px] sm:text-[20px] text-[16px] font-medium rounded-lg'>Create</button>
                                        </div>
                                        <p className='text-[#3e337c] font-normal text-center mt-[30px] text-[14px]'>Already have an account?<a onClick={() => setCreate(!create)} href='#' className='font-semibold'> Login</a></p>
                                    </div>
                                </div>
                            }
                        </>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login