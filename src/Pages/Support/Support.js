import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Service from '../../Components/Support/Service';
import Register from '../../Components/Support/Register';
import TrackComplaint from '../../Components/Support/TrackComplaint';
import GrievanceRedressal from '../../Components/Support/GrievanceRedressal';

const Support = () => {
    const [tab, setTab] = useState("Service And Installation Request")
    return (
        <div>
            <Header />
            <div className='max-w-[1300px] mx-auto px-[20px]'>
                <h2 className='text-[#3e337c] sm:text-[28px] text-[20px] text-center font-semibold mt-[30px] mb-[40px]'>Support</h2>
                <div className='flex justify-center md:flex-nowrap flex-wrap md:gap-0 gap-1 sm:max-w-none max-w-[500px] mx-auto'>
                    <button onClick={() => setTab('Service And Installation Request')} className={tab === 'Service And Installation Request' ? 'text-[#3e337c] border-[#3e337c] font-semibold text-[14px] border-[2px] md:border-b-transparent md:rounded-[8px_8px_0_0] rounded-lg lg:p-[10px_16px] p-[10px_8px] sm:w-auto w-full' : 'text-[14px] text-[#3e337c] md:border-b-[#3e337c] border-[#3e337c] md:border-0 border-[1px] md:border-b-[2px] md:rounded-[8px_8px_0_0] rounded-lg lg:p-[10px_16px] p-[10px_8px] sm:w-auto w-full'}>Service And Installation Request</button>
                    <button onClick={() => setTab('Register Warranty Card')} className={tab === 'Register Warranty Card' ? 'text-[#3e337c] border-[#3e337c] font-semibold text-[14px] border-[2px] md:border-b-transparent md:rounded-[8px_8px_0_0] rounded-lg lg:p-[10px_16px] p-[10px_8px] sm:w-auto w-full' : 'text-[14px] text-[#3e337c] md:border-b-[#3e337c] border-[#3e337c] md:border-0 border-[1px] md:border-b-[2px] md:rounded-[8px_8px_0_0] rounded-lg lg:p-[10px_16px] p-[10px_8px] sm:w-auto w-full'}>Register Warranty Card</button>
                    <button onClick={() => setTab('Track Complaint')} className={tab === 'Track Complaint' ? 'text-[#3e337c] border-[#3e337c] font-semibold text-[14px] border-[2px] md:border-b-transparent md:rounded-[8px_8px_0_0] rounded-lg lg:p-[10px_16px] p-[10px_8px] sm:w-auto w-full' : 'text-[14px] text-[#3e337c] md:border-b-[#3e337c] border-[#3e337c] md:border-0 border-[1px] md:border-b-[2px] md:rounded-[8px_8px_0_0] rounded-lg lg:p-[10px_16px] p-[10px_8px] sm:w-auto w-full'}>Track Complaint</button>
                    <button onClick={() => setTab('Help Support')} className={tab === 'Help Support' ? 'text-[#3e337c] border-[#3e337c] font-semibold text-[14px] border-[2px] md:border-b-transparent md:rounded-[8px_8px_0_0] rounded-lg lg:p-[10px_16px] p-[10px_8px] sm:w-auto w-full' : 'text-[14px] text-[#3e337c] md:border-b-[#3e337c] border-[#3e337c] md:border-0 border-[1px] md:border-b-[2px] md:rounded-[8px_8px_0_0] rounded-lg lg:p-[10px_16px] p-[10px_8px] sm:w-auto w-full'}>Help Support</button>
                </div>
                <div className='mb-[60px]'>
                    {tab === 'Service And Installation Request' &&
                        <Service />
                    }
                    {tab === 'Register Warranty Card' &&
                        <Register />
                    }
                    {tab === 'Track Complaint' &&
                        <TrackComplaint />
                    }
                    {tab === 'Help Support' &&
                        <GrievanceRedressal />
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Support