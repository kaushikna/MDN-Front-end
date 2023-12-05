import React, { Fragment, useEffect, useState } from 'react';
import { BsSortUp } from 'react-icons/bs';
import { Menu, Transition } from '@headlessui/react';
import MordenFan from "../../Assets/Images/SliderImages/mordenFan.webp";
import FanProduct from '../../Assets/Images/ProductImages/fan-product.png';
import FanProduct2 from '../../Assets/Images/ProductImages/fan-product2.png';
import FanProduct3 from '../../Assets/Images/ProductImages/fan-product3.png';
import FanProduct4 from '../../Assets/Images/ProductImages/fan-product4.png';
import FanProduct5 from '../../Assets/Images/ProductImages/fan-product5.png';
import FanProduct6 from '../../Assets/Images/ProductImages/fan-product6.png';
import boost from '../../Assets/Images/ProductImages/boost.webp';
import sleep from '../../Assets/Images/ProductImages/sleep.webp';
import meter from '../../Assets/Images/ProductImages/meter.webp';
import remote from '../../Assets/Images/ProductImages/remote.png';
import product1 from '../../Assets/Images/ProductImages/product1.png';
import product2 from '../../Assets/Images/ProductImages/product2.png';
import product3 from '../../Assets/Images/ProductImages/product3.png';
import product4 from '../../Assets/Images/ProductImages/product4.png';
import saves from '../../Assets/Images/ProductImages/saves.webp';
import runs from '../../Assets/Images/ProductImages/runs.webp';
import superEfficient from '../../Assets/Images/ProductImages/super-efficient.webp';
import dustResistant from '../../Assets/Images/ProductImages/dust-resistant.webp';
import ledIndication from '../../Assets/Images/ProductImages/led-indication.webp';
import longerBlade from '../../Assets/Images/ProductImages/longer-blade.webp';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ReviewadRatings from '../../Components/CeilingFans/ReviewadRatings';
import { MdEdit } from 'react-icons/md';
import { AuthAPI } from '../../API';
import toast, { useToaster } from 'react-hot-toast';
import WithAppContext from '../../Helper/Context/app.ContextHoc';
import { Link, useNavigate } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ChooseData = [
    {
        img: saves,
        name: 'SAVES UP TO ₹1500/YEAR'
    },
    {
        img: runs,
        name: 'RUNS 3 TIMES LONGER ON INVERTER'
    },
    {
        img: superEfficient,
        name: 'SUPER EFFICIENT BLDC MOTOR'
    },
    {
        img: dustResistant,
        name: 'EASY TO CLEAN'
    },
    {
        img: ledIndication,
        name: 'LED INDICATION FOR SPEED'
    },
    {
        img: longerBlade,
        name: 'LONGER BLADE SPAN'
    },
]
const imageURL = process.env.REACT_APP_IMAGE_URL;

const CeilingFans = ({ context }) => {
    const [allProduct, setAllProduct] = useState([])
    const { addToCart } = context
    const navigate = useNavigate();

    const getAllProduct = async () => {
        try {
            const response = await AuthAPI("/product/", {
                method: "GET",
            });
            if (response?.status === 201) {
                toast.success(response.message);
            } else {
                toast.error("Something went wrong..");
            }
            setAllProduct(response.data)
        } catch (error) {
            toast.error("Something went to wrong...");
            console.error(error);
        }
    }

    useEffect(() => {
        getAllProduct()
    }, [])

    const handleCardClick = async (origin, val, event) => {
        if (origin.toLowerCase() === 'button') {
            addToCart({...val, selectedVariant: val.productVariants?.[0]})
            event.stopPropagation();
        } else {
            navigate(`/product-details/${val._id}`)
        }
    }


    return (
        <div>
            <Header />
            <div>
                <div className='px-[20px] py-4 bg-[#a9a4ba]'>
                    <div className='text-[#3e337c] text-[14px] flex items-center'>
                        <a href='/' className='font-medium underline'>Home</a><span className='block mx-2'>/</span><p>Ceiling Fans</p>
                    </div>
                    <h1 className='text-[#f8f6ff] sm:text-[20px] text-[16px] font-bold mt-2'>Ceiling Fans</h1>
                </div>
                <img src={MordenFan} alt='FanImage' className='xl:h-[550px] w-full object-cover' />
                <div className='bg-[#7b7492] xl:px-[40px] px-[20px] pb-[120px]'>
                    <div className='text-end py-[30px]'>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center gap-3 rounded-md bg-[#c6c0db] px-3 py-2 text-sm font-semibold text-[#3e337c] shadow-sm p-[10px_20px]">
                                    <BsSortUp className='text-[20px]' />
                                    Sort By
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-[180px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Best Match
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Price: High to Low
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Price: Low to High
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-[20px] sm:max-w-none max-w-[400px] mx-auto'>

                        {allProduct.map((val, index) =>
                            <div className='bg-[#c6c0db] rounded-[20px] cursor-pointer' key={index} onClick={(e) => handleCardClick('card', val, e)} >
                                <img src={val?.productVariants?.[0]?.images?.[0] ? `${imageURL}${val?.productVariants?.[0]?.images?.[0]}` : FanProduct} alt='FanProduct' className='border-b-[#7b7492] border-b-[2px] h-3/5 rounded-[20px_20px_0_0] w-full object-scale-down cursor-pointer' onClick={() => navigate(`/product-details/${val._id}`)} />
                                <div className='2xl:px-[30px] px-[12px]' >
                                    <h2 className='text-[#3e337c] xl:text-[20px] text-[18px] font-bold pt-3 whitespace-nowrap overflow-hidden text-ellipsis'>{val.name}</h2>
                                    <p className='text-[14px] text-[#3e337c] font-medium mt-3'>Colors:</p>
                                    <div className='mt-2 flex items-center gap-3'>
                                        {val?.productVariants?.map((ele, ind) => {
                                            return (
                                                <button className='p-[2px] rounded-[4px]' key={ind} >
                                                    <div className={`w-[26px] h-[26px] rounded-[4px]`} style={{ backgroundColor: ele.color_code }} />
                                                </button>
                                            )
                                        })}
                                    </div>
                                    <div className='mt-[40px] pb-6 flex justify-between items-center'>
                                        <div>
                                            <p className='line-through text-[#3e337c] text-[14px]'>₹7,490</p>
                                            <h1 className='text-[#fff] font-semibold xl:text-[20px] text-[18px]'>₹{val.price} <span className='text-[18px] text-[#3e337c]'>-33%</span></h1>
                                        </div>
                                        <div className='flex flex-col gap-2 z-50'>
                                            {/* <button className="bg-[#3e337c] text-[#f8f6ff] rounded-[30px] xl:p-[8px_20px] p-[8px_14px] xl:text-[14px] text-[12px] flex items-center gap-1 justify-center"><MdEdit className='text-[18px]' /> Edit</button> */}
                                            <button className="bg-[#3e337c] text-[#f8f6ff] rounded-[30px] xl:p-[8px_20px] p-[8px_14px] xl:text-[14px] text-[12px]" onClick={(e) => handleCardClick('button', val, e)}>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className=' bg-[#c6c0db]'>
                    <div className="max-w-[1300px] mx-auto px-[20px]">
                        <div className='flex justify-center items-center'>
                            <img src={remote} alt='remote' className='relative top-[-50px]' />
                            <div>
                                <h2 className='text-[#3e337c] font-bold sm:text-[22px] text-[18px]'>Smart Remote</h2>
                                <p className='text-[#3e337c] sm:text-[16px] text-[14px]'>With Boost, Timer and Sleep mode</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#a9a4ba]'>
                    <div className="max-w-[1300px] mx-auto px-[20px]">
                        <div className='flex justify-center items-start gap-[60px] py-[50px] flex-wrap'>
                            <div>
                                <div className='flex justify-center mb-[20px]'>
                                    <img src={boost} alt='boost' />
                                </div>
                                <h3 className='text-[#fff] text-[20px] font-semibold text-center'>BOOST MODE</h3>
                                <p className='text-[14px] text-[#3e337c] text-center font-medium'>Highest speed performanc</p>
                            </div>
                            <div>
                                <div className='flex justify-center mb-[20px]'>
                                    <img src={sleep} alt='sleep' />
                                </div>
                                <h3 className='text-[#fff] text-[20px] font-semibold text-center'>SLEEP MODE</h3>
                                <p className='text-[14px] text-[#3e337c] text-center font-medium max-w-[250px]'>Decrease the fan speed by 1 notch every 2 hours</p>
                            </div>
                            <div>
                                <div className='flex justify-center mb-[20px]'>
                                    <img src={meter} alt='meter' />
                                </div>
                                <h3 className='text-[#fff] text-[20px] font-semibold text-center'>UP TO 6 Meter.</h3>
                                <p className='text-[14px] text-[#3e337c] text-center font-medium'>Operable distance using remote</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#7b7492] py-[40px]'>
                    <div className="max-w-[1000px] mx-auto px-[20px] flex md:justify-between justify-center items-center flex-wrap gap-[30px]">
                        <div className='flex justify-center'>
                            <img src={product1} alt='product1' className='sm:w-auto w-[120px]' />
                        </div>
                        <div className='flex justify-center'>
                            <img src={product2} alt='product2' className='sm:w-auto w-[120px]' />
                        </div>
                        <div className='flex justify-center'>
                            <img src={product3} alt='product3' className='sm:w-auto w-[120px]' />
                        </div>
                        <div className='flex justify-center'>
                            <img src={product4} alt='product4' className='sm:w-auto w-[120px]' />
                        </div>
                    </div>
                </div>
                <div className=' bg-[#c6c0db]'>
                    <div className="max-w-[1300px] mx-auto px-[20px] py-[60px]">
                        <h1 className='text-[#3e337c] font-semibold text-lg md:text-[22px] lg:text-[24px] text-center'>WHY SHOULD YOU CHOOSE US ?</h1>
                        <div className='flex justify-center flex-wrap gap-[40px] gap-y-[60px] mt-[70px]'>
                            {ChooseData.map((data, index) =>
                                <div className='md:w-[20%] sm:w-[25%] w-[100%]' key={index}>
                                    <div className='flex justify-center'>
                                        <img src={data.img} alt='saves' className='lg:max-w-none max-w-[100px] lg:w-auto w-full' />
                                    </div>
                                    <p className='text-[#3e337c] font-semibold lg:text-[17px] text-[14px] text-center mt-3 max-w-[250px] mx-auto'>{data.name}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <ReviewadRatings />
            </div>
            <Footer />
        </div>
    )
}

export default WithAppContext(CeilingFans)