import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const MyOrders = () => {
    return (
        <div>
            <Header />
            <div className="max-w-[1300px] mx-auto px-[20px]">
                <div className='text-[#3e337c] text-[14px] flex items-center py-4'>
                    <a href='/' className='font-medium underline'>Home</a><span className='block mx-2'>/</span><p>My Orders</p>
                </div>
                <h2 className='text-[#3e337c] sm:text-[32px] text-[24px] font-bold mt-[20px]'>Order #25896473</h2>
                <h6 className='text-[#3e337c] text-[16px] uppercase font-semibold tracking-[2px] mt-2'>Place on October 12, 2023 at 7:45 pm</h6>
                <div className='grid md:grid-cols-2 xl:gap-[40px] gap-[20px] mt-[30px] items-start mb-[60px]'>
                    <div className='border-[#3e337c] border-[1px]'>
                        <div className='p-[12px] flex justify-between items-center'>
                            <label className='text-[#3e337c] text-[16px] uppercase font-bold tracking-[1px]'>Product</label>
                            <p className='text-[#3e337c] text-[16px] font-medium'>Renesa + Ceiling Fan</p>
                        </div>
                        <div className='p-[12px] pt-0'>
                            <h4 className='text-[#3e337c] text-[16px] uppercase border-[#3e337c] border-[1px] p-[12px] font-semibold'>Fulfilled October 13, 2023 ECOM EXPRESS #3243587755</h4>
                        </div>
                        <div className='p-[12px] flex justify-between items-center'>
                            <label className='text-[#3e337c] text-[16px] uppercase font-bold tracking-[1px]'>SKU</label>
                            <p className='text-[#3e337c] text-[16px] font-medium'>144BSWAAY#1</p>
                        </div>
                        <div className='p-[12px] flex justify-between items-center'>
                            <label className='text-[#3e337c] text-[16px] uppercase font-bold tracking-[1px]'>PRICE</label>
                            <p className='text-[#3e337c] text-[16px] font-medium'>2,499</p>
                        </div>
                        <div className='p-[12px] flex justify-between items-center'>
                            <label className='text-[#3e337c] text-[16px] uppercase font-bold tracking-[1px]'>QUANTITY</label>
                            <p className='text-[#3e337c] text-[16px] font-medium'>1</p>
                        </div>
                        <div className='p-[12px] flex justify-between items-center border-t-[#3e337c] border-t-[1px]'>
                            <label className='text-[#3e337c] text-[16px] uppercase font-bold tracking-[1px]'>SUBTOTAL</label>
                            <p className='text-[#3e337c] text-[16px] font-medium'>2,499</p>
                        </div>
                        <div className='p-[12px] flex justify-between items-center'>
                            <label className='text-[#3e337c] text-[16px] uppercase font-bold tracking-[1px]'>SHIPPING</label>
                            <p className='text-[#3e337c] text-[16px] font-medium'>0</p>
                        </div>
                    </div>
                    <div>
                        <div className='border-[#3e337c] border-[1px] p-[12px]'>
                            <h2 className='text-[#3e337c] text-[22px] font-bold tracking-[1px]'>Billing address</h2>
                            <div className='text-[#3e337c] text-[14px] mt-3'><span className='font-bold'>Payment status:</span> Paid</div>
                            <h3 className='text-[#3e337c] text-[16px] font-bold mt-2'>John Deo</h3>
                            <p className='text-[#3e337c] text-[14px] mt-2'>6, Omkar Apts, Opp National Garage, S V Road, Santacruz(w), Mumbai</p>
                            <p className='text-[#3e337c] text-[14px] mt-2'>Mumbai</p>
                            <p className='text-[#3e337c] text-[14px] mt-2'>Maharashtra</p>
                            <p className='text-[#3e337c] text-[14px]'>400054</p>
                            <p className='text-[#3e337c] text-[14px] mt-1'>India</p>
                            <p className='text-[#3e337c] text-[14px] mt-1'>7846932548</p>
                        </div>
                        <div className='border-[#3e337c] border-[1px] p-[12px] mt-[20px]'>
                            <h2 className='text-[#3e337c] text-[22px] font-bold tracking-[1px]'>Shipping address</h2>
                            <div className='text-[#3e337c] text-[14px] mt-3'><span className='font-bold'>Fulfillment status: </span> Fulfilled</div>
                            <h3 className='text-[#3e337c] text-[16px] font-bold mt-2'>John Deo</h3>
                            <p className='text-[#3e337c] text-[14px] mt-2'>6, Omkar Apts, Opp National Garage, S V Road, Santacruz(w), Mumbai</p>
                            <p className='text-[#3e337c] text-[14px] mt-2'>Mumbai</p>
                            <p className='text-[#3e337c] text-[14px] mt-2'>Maharashtra</p>
                            <p className='text-[#3e337c] text-[14px]'>400054</p>
                            <p className='text-[#3e337c] text-[14px] mt-1'>India</p>
                            <p className='text-[#3e337c] text-[14px] mt-1'>7846932548</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyOrders