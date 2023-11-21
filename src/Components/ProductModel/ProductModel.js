import React, { useState } from 'react';
import Fan1 from '../../Assets/Images/FansImages/fan1.png';
import Fan2 from '../../Assets/Images/FansImages/fan2.png';

const ProductModel = () => {
    const [tab, setTab] = useState('Ceiling Fans')
    return (
        <div className='flex shadow-[rgba(99,99,99,0.2)0px_2px_8px_0px]'>
            <div className='xl:max-w-[460px] max-w-[300px] w-full'>
                <div className='bg-[#f8f6ff] p-[30px_0] pr-[20px]'>
                    <button onClick={() => setTab('Ceiling Fans')} className={tab === 'Ceiling Fans' ? 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#3e337c] font-semibold text-white' : 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#f8f6ff] font-semibold text-[#3e337c]'}>Ceiling Fans</button>
                    <button onClick={() => setTab('Mixer Grinder')} className={tab === 'Mixer Grinder' ? 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#3e337c] font-semibold text-white ' : 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#f8f6ff] font-semibold text-[#3e337c]'}>Mixer Grinder</button>
                    <button onClick={() => setTab('Pedestal Fans')} className={tab === 'Pedestal Fans' ? 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#3e337c] font-semibold text-white' : 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#f8f6ff] font-semibold text-[#3e337c]'}>Upcoming</button>
                    {/* <button onClick={() => setTab('Wall Fans')} className={tab === 'Wall Fans' ? 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#3e337c] font-semibold text-white' : 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#f8f6ff] font-semibold text-[#3e337c]'}>Wall Fans</button>
                    <button onClick={() => setTab('Exhaust Fans')} className={tab === 'Exhaust Fans' ? 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#3e337c] font-semibold text-white' : 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#f8f6ff] font-semibold text-[#3e337c]'}>Exhaust Fans</button>
                    <button onClick={() => setTab('Accessories')} className={tab === 'Accessories' ? 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#3e337c] font-semibold text-white' : 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#f8f6ff] font-semibold text-[#3e337c]'}>Accessories</button>
                    <button onClick={() => setTab('Smart Locks')} className={tab === 'Smart Locks' ? 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#3e337c] font-semibold text-white' : 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#f8f6ff] font-semibold text-[#3e337c]'}>Smart Locks</button>
                    <button onClick={() => setTab('Support')} className={tab === 'Support' ? 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#3e337c] font-semibold text-white' : 'rounded-[0_30px_30px_0] text-left w-full p-[14px_30px] bg-[#f8f6ff] font-semibold text-[#3e337c]'}>Support</button> */}
                </div>
            </div>
            <div className='w-full p-[30px]'>
                <div>
                    {tab === 'Ceiling Fans' &&
                        <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-[20px]'>
                            <div className='bg-[#f8f6ff] hover-bg xl:p-[30px] p-[10px] rounded-xl cursor-pointer trans group'>
                                <img src={Fan1} alt='Fan1' />
                            </div>
                            <div className='bg-[#f8f6ff] hover-bg xl:p-[30px] p-[10px] rounded-xl cursor-pointer trans group'>
                                <img src={Fan2} alt='Fan1' />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductModel