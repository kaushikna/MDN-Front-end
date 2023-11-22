import React from 'react'

const TrackComplaint = () => {
    return (
        <div >
            <p className='text-[14px] text-[#3e337c] font-medium text-center max-w-[1110px] mx-auto mt-[30px]'>When we say we are confident of our products, we mean it! Which is why we'd love for you to register for the warranty card. Oh, did we mention that you get an additional year of warranty if you do so? Here's how you can register for it. It cannot get simpler. Or better.</p>
            <div className='max-w-[500px] mx-auto mt-[30px]'>
                <input type='text' placeholder='Ticket No' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none' />
                <input type='number' placeholder='Mobile No. (Skip if entering Ticket number)' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4' />
                <p className='text-[14px] text-[#3e337c] font-medium text-center mt-[30px]'>Note: We recommend entering Ticket number (Eg.2101260892) for a better result.</p>
                <div className='text-center'>
                    <button className='bg-[#3e337c] text-white mt-8 p-[8px_18px] text-[14px] rounded-md'>Track Now</button>
                </div>
            </div>
        </div>
    )
}

export default TrackComplaint