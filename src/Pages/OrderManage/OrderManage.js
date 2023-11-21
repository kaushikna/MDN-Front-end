import React, { Fragment, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdEdit, MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Menu, Transition, Dialog } from '@headlessui/react';
import Fan from '../../Assets/Images/ProductDetailImages/fan.png';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const OrderManage = () => {
    const [open, setOpen] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return (
        <div>
            <Header />
            <div className='bg-[#a9a4ba]'>
                <div className="max-w-[1300px] mx-auto px-[20px] pb-[40px]">
                    <div className='md:flex justify-between py-[20px] pb-[40px] items-end'>
                        <div className='sm:gap-[20px] gap-[10px] grid grid-cols-2 md:max-w-[500px]'>
                            <div>
                                <label className='text-[#3e337c] font-semibold block'>From</label>
                                <div className='relative'>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        placeholderText="From Date"
                                    />
                                    <FaRegCalendarAlt className='absolute top-[50%] translate-y-[-50%] right-[8px] text-[#3e337c]' />
                                </div>
                            </div>
                            <div>
                                <label className='text-[#3e337c] font-semibold block'>To</label>
                                <div className='relative'>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        placeholderText="To Date"
                                    />
                                    <FaRegCalendarAlt className='absolute top-[50%] translate-y-[-50%] right-[8px] text-[#3e337c]' />
                                </div>
                            </div>
                        </div>
                        <div className='lg:max-w-[300px] md:max-w-[260px] w-full relative md:mt-0 mt-[14px]'>
                            <input type='text' placeholder='Search...' className='text-[14px] w-full text-[#3e337c] rounded-md p-[8px_12px] outline-none pl-[46px]' />
                            <IoSearch className='absolute left-[16px] top-[50%] translate-y-[-50%] text-[18px]' />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-[20px]'>
                        <div className='border-[#3e337c] border-[1px] bg-[#b6b0cd] rounded-md'>
                            <button className='text-[#3e337c] lg:text-[18px] text-[16px] font-bold p-[8px_12px] flex justify-between gap-[20px] w-full'>Today's Order <span className='text-white'>204</span></button>
                            {/* <div className='p-[8px_12px] border-t-[#3e337c] border-t-[1px]'>
                                <div className='flex justify-between gap-[12px]'>
                                    <div className='flex gap-[14px]'>
                                        <img src={Fan} alt='Fan' className='w-[48px] h-[48px] rounded-md border border-gray-200' />
                                        <div>
                                            <h3 className='text-[#fff] font-semibold text-[14px]'>Efficio Ceiling Fan</h3>
                                            <div>
                                                <button className='items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800'>White</button>
                                                <button className='items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 ml-[10px]'>1200mm</button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-[#fff] text-[16px] font-semibold'>₹3,299</p>
                                </div>
                            </div>
                            <div className='p-[8px_12px] border-t-[#3e337c] border-t-[1px]'>
                                <div className='flex justify-between gap-[12px]'>
                                    <div className='flex gap-[14px]'>
                                        <img src={Fan} alt='Fan' className='w-[48px] h-[48px] rounded-md border border-gray-200' />
                                        <div>
                                            <h3 className='text-[#fff] font-semibold text-[14px]'>Aris Ceiling Fan</h3>
                                            <div>
                                                <button className='items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800'>White</button>
                                                <button className='items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 ml-[10px]'>1400mm</button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-[#fff] text-[16px] font-semibold'>₹5,120</p>
                                </div>
                            </div> */}
                        </div>
                        <div className='border-[#3e337c] border-[1px] bg-[#b6b0cd] rounded-md'>
                            <button className='text-[#3e337c] lg:text-[18px] text-[16px] font-bold p-[8px_12px] flex justify-between gap-[20px] w-full'>Return Order <span className='text-white'>84</span></button>
                        </div>
                        <div className='border-[#3e337c] border-[1px] bg-[#b6b0cd] rounded-md'>
                            <h1 className='text-[#3e337c] lg:text-[18px] text-[16px] font-bold p-[8px_12px] flex justify-between gap-[20px] w-full'>Total Order <span className='text-white'>638</span></h1>
                        </div>
                        <div className='sm:text-end'>
                            <button className='text-[#fff] lg:text-[18px] text-[16px] font-semibold p-[8px_12px] lg:w-[200px] w-[150px] bg-[#3e337c] rounded-md border-[#3e337c] border-[1px] '>Export Order</button>
                        </div>
                    </div>
                    <div className='overflow-auto'>
                        <table className='w-full mt-[50px]'>
                            <thead>
                                <tr>
                                    <th className='text-left text-[#3e337c] p-[8px_20px] border-y-[#3e337c] border-y-[1px] font-semibold'>Order ID</th>
                                    <th className='text-left text-[#3e337c] p-[8px_20px] border-y-[#3e337c] border-y-[1px] font-semibold whitespace-nowrap	'>Product Name</th>
                                    <th className='text-left text-[#3e337c] p-[8px_20px] border-y-[#3e337c] border-y-[1px] font-semibold'>Email</th>
                                    <th className='text-left text-[#3e337c] p-[8px_20px] border-y-[#3e337c] border-y-[1px] font-semibold'>Action</th>
                                    <th className='text-left text-[#3e337c] p-[8px_20px] border-y-[#3e337c] border-y-[1px] font-semibold'>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='group cursor-pointer'>
                                    <td className='text-left text-[#3e337c] p-[8px_20px] border-y-[#3e337c] border-y-[1px] font-medium'>738563456</td>
                                    <td className='text-left text-[#3e337c] p-[8px_20px] border-y-[#3e337c] border-y-[1px] font-medium whitespace-nowrap	'>Automberg Fan</td>
                                    <td className='text-left text-[#3e337c] p-[8px_20px] border-y-[#3e337c] border-y-[1px] font-medium whitespace-nowrap	'>test123@gmail.com</td>
                                    <td className='text-left text-[#3e337c] p-[8px_20px] border-y-[#3e337c] border-y-[1px] font-medium'>
                                        <div className='flex gap-1'>
                                            <button className='bg-[#3e337c] text-[#f8f6ff] rounded-[6px] p-[8px_16px] text-[12px] font-semibold'>Confirm</button>
                                            <button className='bg-[#3e337c] text-[#f8f6ff] rounded-[6px] p-[8px_16px] text-[12px] font-semibold' onClick={() => setOpen(true)}>Shipping</button>
                                            <button className='bg-[#3e337c] text-[#f8f6ff] rounded-[6px] p-[8px_16px] text-[12px] font-semibold'>Deliverd</button>
                                        </div>
                                    </td>
                                    <td className='text-left text-[#3e337c] p-[8px_20px] border-y-[#3e337c] border-y-[1px] font-medium w-[200px]'>
                                        <div>
                                            <p className='block group-hover:hidden'>19/11/2023</p>
                                            <div className='hidden gap-[20px] group-hover:flex '>
                                                <button className='flex flex-col items-center group'>
                                                    <MdEdit className='text-[#3e337c] text-[20px] hidden group-hover:block' />
                                                </button>
                                                <button className='flex flex-col items-center'>
                                                    <a href='/myorders'>
                                                        <FaEye className='text-[#3e337c] text-[20px] hidden group-hover:block' />
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-y-[#3e337c] border-y-[1px]'>
                                    <td colSpan='5'>
                                        <div className="flex items-center justify-between bg-transparent p-[8px_20px]">
                                            <div className=" flex flex-1 items-center justify-between">
                                                <div>
                                                    <p className="text-sm text-[#fff]">
                                                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                                                        <span className="font-medium">26</span> results
                                                    </p>
                                                </div>
                                                <div>
                                                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                                        <a
                                                            href="#"
                                                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-white ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                                                        >
                                                            <span className="sr-only">Previous</span>
                                                            <MdOutlineChevronLeft className="h-5 w-5" aria-hidden="true" />
                                                        </a>
                                                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                                                        <a
                                                            href="#"
                                                            aria-current="page"
                                                            className="relative z-10 inline-flex items-center bg-[#3e337c] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                        >
                                                            1
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
                                                        >
                                                            2
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0 md:inline-flex"
                                                        >
                                                            3
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-white ring-1 ring-inset ring-gray-300 "
                                                        >
                                                            <span className="sr-only">Next</span>
                                                            <MdOutlineChevronRight className="h-5 w-5" aria-hidden="true" />
                                                        </a>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[#000] bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-[20px]">
                                    <div>
                                        <h3 className='text-[#3e337c] font-bold text-center  sm:text-[28px] text-[22px]'>Shipping Details</h3>
                                        <div className='mt-[20px]'>
                                            <label className='text-[#3e337c] font-medium text-[14px]'>Tracking ID</label>
                                            <input type='text' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none mt-1' />
                                        </div>
                                        <div className='mt-[20px]'>
                                            <label className='text-[#3e337c] font-medium text-[14px]'>Tracking number</label>
                                            <input type='text' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none mt-1' />
                                        </div>
                                        <div className='mt-[20px]'>
                                            <label className='text-[#3e337c] font-medium text-[14px]'>Tracking Details</label>
                                            <input type='text' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none mt-1' />
                                        </div>
                                        <div className='flex gap-[20px] mt-[30px] sm:flex-nowrap flex-wrap'>
                                            <button onClick={() => setOpen(false)} className='bg-[#3e337c] text-[#f8f6ff] rounded-[8px] p-[10px_20px] uppercase font-semibold w-full'>Send</button>
                                            <button onClick={() => setOpen(false)} className='bg-[#c6c0db] text-[#f8f6ff] rounded-[8px] p-[10px_20px] uppercase font-semibold w-full'>Cancel</button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <Footer />
        </div >
    )
}

export default OrderManage