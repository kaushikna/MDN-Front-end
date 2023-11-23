import React from 'react';
import Logo from '../../Assets/Images/logo.png';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoPinterest, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi';

const Footer = () => {
    return (
        <div>
            <div className='shadow-[rgba(100,100,111,0.2)0px_1px_6px_0px] bg-white flex items-center justify-between'>
                <div className='max-w-[1300px] mx-auto p-[60px_16px] text-[#3e337c] w-full'>
                    <div className='xl:flex-row flex-col flex gap-[40px]'>
                        <div className='xl:max-w-[390px]'>
                            <img className='max-w-[80px]' src={Logo} alt='logo' />
                            <p className='lg:text-[14px] text-[12px] max-w-[400px] mt-[20px]'>MDN Technologies pioneer manufacturing of smart and energy-efficient home appliances powered by the BLDC motor.</p>
                            <p className='lg:text-[14px] text-[12px] mt-4'>Name of Company:- <span className='font-semibold'>MDN TECHNOLOGIES PRIVATE LIMITED</span></p>
                            <p className='text-[12px] mt-1'>Address of its registered office:-</p>
                            <p className='lg:text-[14px] text-[12px] italic font-semibold mt-1'>Office No. 1205, 12th Floor, Rupa Solitaire, Millennium Business Park,Thane-Belapur Road, Mahape, Navi Mumbai- 400710</p>
                            <p className='text-[12px] mt-1'>Corporate office address:-</p>
                            <p className='lg:text-[14px] text-[12px] italic font-semibold mt-1'>12B107, 12A108, 12th Floor, 247 Park, WeWork, Lal Bahadur Shastri Rd, Gandhi Nagar, Vikhroli, Mumbai, Maharashtra- 400079</p>
                            <p className='lg:text-[14px] text-[12px] mt-4'>corporate identity number:- <span className='font-semibold'>U72900MH2012PTC229788</span></p>
                            <p className='lg:text-[14px] text-[12px] mt-4'>Telephone Number:- <span className='font-semibold'>084484 49442</span></p>
                            <div className='flex gap-[20px] mt-[20px]'>
                                <button className='text-[20px]'><BiLogoFacebook /></button>
                                <button className='text-[20px]'><BiLogoYoutube /></button>
                                <button className='text-[20px]'><BiLogoLinkedin /></button>
                                <button className='text-[20px]'><BiLogoTwitter /></button>
                                <button className='text-[20px]'><BiLogoInstagram /></button>
                                <button className='text-[20px]'><BiLogoPinterest /></button>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-4 sm:grid-cols-2 lg:gap-[40px] md:gap-0 gap-[30px]'>
                            <div>
                                <h2 className='text-[20px] font-extrabold mb-3'>DISCOVER US</h2>
                                <ul className='flex flex-col gap-1'>
                                    <li><a href='/about' className='lg:text-[14px] text-[12px] hover:underline'>About us</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Support and warranty</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Blogs</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Careers</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Fans Store Locator</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Mixer Grinder Store Locator</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Register warranty card</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>For professionals</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Track your order</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Fan Technology</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Mixer Grinder Technology</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>FAQs</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className='text-[20px] font-extrabold mb-3'>POLICIES</h2>
                                <ul className='flex flex-col gap-1'>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Cancellation & returns</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Customer grievance policy</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Purchase order conditions</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Vendor grievance policy</a></li>
                                    <li><a href='/privacy-policy' className='lg:text-[14px] text-[12px] hover:underline'>Privacy policy</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Shipping policy</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Product warranty policy</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Price match guarantee</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Sitemap</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Investor Relations</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Quick Fix</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Terms and Conditions</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>MobiKwik T&C</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>POSH Policy</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Code of Conduct</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className='text-[20px] font-extrabold mb-3'>PRODUCTS</h2>
                                <ul className='flex flex-col gap-1'>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Ceiling fans</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Mixer grinder</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Pedestal fans</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Wall fans</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Exhaust fans</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Accessories</a></li>
                                    <li><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Smart Locks</a></li>
                                </ul>
                            </div>
                            <div className='sm:max-w-[250px]'>
                                <h2 className='text-[20px] font-extrabold mb-3'>CONTACT US</h2>
                                <ul>
                                    <li className='mb-3'><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>For expert help and customer complaints, call: 844 844 9442</a></li>
                                    <li className='mb-3'><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Timings: 9.30 am to 6.30 pm on all days except public holidays</a></li>
                                    <li className='mb-3'><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Whatsapp: 809-745-4422</a></li>
                                    <li className='mb-3'><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>Email: support@MDN.com</a></li>
                                    <li className='mb-3'><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>For sales assistance & partnership: salesenquiry@MDN.com</a></li>
                                    <li className='mb-3'><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>For after sales support (Service complaint registration): support@MDN.com</a></li>
                                    <li className='mb-3'><a href='#' className='lg:text-[14px] text-[12px] hover:underline'>For all other queries: salesenquiry@MDN.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer