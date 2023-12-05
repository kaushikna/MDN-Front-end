import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Product from '../../Components/AddProduct/Product'
import ProductInfo from '../../Components/AddProduct/ProductInfo'
import AdditionalInfo from '../../Components/AddProduct/AdditionalInfo'

const AddProduct = () => {
    const [tab, setTab] = useState("Service And Installation Request")
    const [productTab, setProductTab] = useState(true)
    const [productInfoTab, setProductInfoTab] = useState(false)
    const [productAdditionalTab, setProductAdditionalTab] = useState(false)

    return (
        <div>
            <Header />
            <div className='max-w-[1300px] mx-auto px-[20px]'>
                <h2 className='text-[#3e337c] sm:text-[28px] text-[20px] text-center font-semibold mt-[30px] mb-[40px]'>Add Product</h2>
                <div className='flex justify-center md:flex-nowrap flex-wrap md:gap-0 gap-1 sm:max-w-none max-w-[500px] mx-auto'>
                    <button onClick={() => setTab('Service And Installation Request')} disabled={!productTab} className={tab === 'Service And Installation Request' ? 'text-[#3e337c] border-[#3e337c] font-semibold text-[14px] border-[2px] md:border-b-transparent md:rounded-[8px_8px_0_0] rounded-lg lg:p-[10px_46px] p-[10px_8px] sm:w-auto w-full' : 'text-[14px] text-[#3e337c] md:border-b-[#3e337c] border-[#3e337c] md:border-0 border-[1px] md:border-b-[2px] md:rounded-[8px_8px_0_0] rounded-lg lg:p-[10px_46px] p-[10px_8px] sm:w-auto w-full'}>Product</button>
                    <button onClick={() => setTab('Register Warranty Card')} disabled={!productInfoTab} className={tab === 'Register Warranty Card' ? 'text-[#3e337c] border-[#3e337c] font-semibold text-[14px] border-[2px] md:border-b-transparent md:rounded-[8px_8px_0_0] rounded-lg lg:p-[10px_46px] p-[10px_8px] sm:w-auto w-full' : 'text-[14px] text-[#3e337c] md:border-b-[#3e337c] border-[#3e337c] md:border-0 border-[1px] md:border-b-[2px] md:rounded-[8px_8px_0_0] rounded-lg lg:p-[10px_46px] p-[10px_8px] sm:w-auto w-full'}>Product Information</button>
                    <button onClick={() => setTab('Track Complaint')} disabled={!productAdditionalTab} className={tab === 'Track Complaint' ? 'text-[#3e337c] border-[#3e337c] font-semibold text-[14px] border-[2px] md:border-b-transparent md:rounded-[8px_8px_0_0] rounded-lg lg:p-[10px_46px] p-[10px_8px] sm:w-auto w-full' : 'text-[14px] text-[#3e337c] md:border-b-[#3e337c] border-[#3e337c] md:border-0 border-[1px] md:border-b-[2px] md:rounded-[8px_8px_0_0] rounded-lg lg:p-[10px_46px] p-[10px_8px] sm:w-auto w-full'}>Additional Information</button>
                </div>
                <div className='mb-[60px]'>
                    {tab === 'Service And Installation Request' &&
                        <Product setTab={setTab}
                            setProductInfoTab={setProductInfoTab}
                        />
                    }
                    {tab === 'Register Warranty Card' &&
                        <ProductInfo setTab={setTab}
                            setProductAdditionalTab={setProductAdditionalTab}
                        />
                    }
                    {tab === 'Track Complaint' &&
                        <AdditionalInfo setTab={setTab}
                            setProductAdditionalTab={setProductAdditionalTab}
                            setProductInfoTab={setProductInfoTab}
                            setProductTab={setProductTab}
                        />
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddProduct