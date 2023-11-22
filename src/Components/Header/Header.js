import React, { Fragment, useState } from 'react';
import Logo from '../../Assets/Images/logo.png';
import { BiSearch, BiUser } from 'react-icons/bi';
import { MdDelete } from "react-icons/md";
import Fan from '../../Assets/Images/ProductDetailImages/fan.png';
import { HiOutlineMenuAlt3, HiOutlineShoppingBag } from 'react-icons/hi';
import { IoMdClose } from "react-icons/io";
import { Menu, Transition, Dialog } from '@headlessui/react';
// import ProductModel from '../ProductModel/ProductModel';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Sidedata = [
    { menu: 'Home', link: '/' },
    { menu: 'Fans', link: '/ceiling-fans' },
    { menu: 'Service and Warranty', link: '/' },
    { menu: 'Testimonials', link: '/' },
    { menu: 'Add Product', link: '/add-product' },
    { menu: 'Order', link: '/' },
    { menu: 'Order Manage', link: '/order-manage' },
    { menu: 'Customer Inqury', link: '/customer-inquiry' },
    { menu: 'Support', link: '/support' },
]

const Header = () => {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);
    // const [sidebar, setSidebar] = useState(false)

    return (
        <>
            <div className='shadow-[rgb(100_100_111/12%)_0px_1px_4px_0px]'>
                <div className='max-w-[1300px] mx-auto px-[20px]'>
                    <div className=' flex justify-between items-center lg:p-0 p-[20px_0]'>
                        <img className='xl:max-w-[80px] max-w-[60px]' src={Logo} alt='logo' />
                        <div className='lg:flex hidden xl:gap-[24px] gap-[14px]'>
                            <a href='/' className='p-[28px_0] xl:text-[14px] text-[13px] font-semibold text-[#3e337c] trans'>Home</a>
                            <a href='/ceiling-fans' className='p-[28px_0] xl:text-[14px] text-[13px] font-semibold text-[#3e337c] trans'>Fans</a>
                            {/* <div className='p-[28px_0] group'>
                            <div className='xl:text-[14px] text-[13px] font-semibold text-[#3e337c] trans'>Product Features</div>
                            <div className='absolute top-[83px] left-0 w-full bg-white hidden group-hover:block z-[1]'>
                                <ProductModel />
                            </div>
                        </div> */}
                            {/* <a href='/' className='p-[28px_0] xl:text-[14px] text-[13px] font-semibold text-[#3e337c] trans'>Service and Warranty</a>
                            <a href='/' className='p-[28px_0] xl:text-[14px] text-[13px] font-semibold text-[#3e337c] trans'>Testimonials</a> */}
                            <a href='/add-product' className='p-[28px_0] xl:text-[14px] text-[13px] font-semibold text-[#3e337c] trans'>Add Product</a>
                            {/* <a href='/' className='p-[28px_0] xl:text-[14px] text-[13px] font-semibold text-[#3e337c] trans'>Order</a> */}
                            <a href='/order-manage' className='p-[28px_0] xl:text-[14px] text-[13px] font-semibold text-[#3e337c] trans'>Order Manage</a>
                            <a href='/customer-inquiry' className='p-[28px_0] xl:text-[14px] text-[13px] font-semibold text-[#3e337c] trans'>Customer Inqury</a>

                            <a href='/support' className='p-[28px_0] xl:text-[14px] text-[13px] font-semibold text-[#3e337c] trans'>Support</a>
                        </div>
                        <div className='flex xl:gap-[20px] gap-[12px] items-center'>
                            <button className='text-[24px] text-[#3e337c] trans' onClick={() => setActive(!active)}><BiSearch /></button>
                            <Menu as="div" className="relative inline-block text-left">
                                <div className='flex items-center'>
                                    <Menu.Button className="inline-flex w-full justify-center gap-3 bg-transparent text-sm font-semibold text-[#3e337c] p-0 trans">
                                        <HiOutlineShoppingBag className='text-[24px] text-[#3e337c]' />
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
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-[360px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="p-[14px]">
                                            <div>
                                                <p className='text-[#3e337c] text-center text-[14px] font-medium border-b-[#707070] border-b-[1px] pb-[14px]'>You have <span className='font-semibold'>{count} items</span> in cart</p>
                                            </div>
                                            <div className='py-[30px] flex gap-[16px] items-start border-b-[#707070] border-b-[1px]'>
                                                <img src={Fan} alt='Fan' className='w-[62px] rounded-md border border-gray-200' />
                                                <div>
                                                    <h5 className='text-[#3e337c] font-semibold text-[16px]'>Efficio Ceiling Fan</h5>
                                                    <div className='mt-2'>
                                                        <button className='items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800'>White</button>
                                                        <button className='items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 ml-[10px]'>1200mm</button>
                                                    </div>
                                                    <div className='flex items-center gap-[12px] mt-[14px]'>
                                                        <p className='text-[#838383] text-[14px]'>₹3,299</p>
                                                        <div className='flex items-center'>
                                                            <button className='bg-[#3e337c] text-white w-[26px] h-[26px] flex justify-center items-center' onClick={() => setCount(count - 1)}>-</button>
                                                            <button className='flex justify-center items-center p-[2.5px_10px] text-[14px] text-[#3e337c] shadow-[0_2px_6px_1px_#3e337c30]'>{count}</button>
                                                            <button className='bg-[#3e337c] text-white w-[26px] h-[26px] flex justify-center items-center' onClick={() => setCount(count + 1)}>+</button>
                                                        </div>
                                                        <button className='text-[#000] text-[24px]'><MdDelete /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='flex justify-between items-center mt-[20px]'>
                                                    <p className='text-[#838383] text-[14px]'>Subtotal:</p>
                                                    <p className='text-[#838383] text-[14px]'>₹3,299</p>
                                                </div>
                                                <a href='/checkout' type="submit" class="h-10 items-center justify-center font-semibold hover:underline w-full bg-[#E5E5E5] border border-transparent shadow-sm py-2 px-4 text-sm rounded-md text-black mt-[20px] flex">Go to Checkout</a>
                                            </div>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            <Menu as="div" className="relative inline-block text-left">
                                <div className='flex items-center'>
                                    <Menu.Button className="inline-flex w-full justify-center gap-3 bg-transparent text-sm font-semibold text-[#3e337c] p-0">
                                        <BiUser className='text-[24px] text-[#3e337c]' />
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
                                                        href="/myorders"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900 font-medium' : 'text-[#3e337c] font-medium',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        My Orders
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900 font-medium' : 'text-[#3e337c] font-medium',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Update Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900 font-medium' : 'text-[#3e337c] font-medium',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Reset Password
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item onClick={() => setOpen(true)}>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900 font-medium' : 'text-[#3e337c] font-medium',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Logout
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            {/* <button className='text-[24px] text-[#3e337c] trans lg:hidden'><HiOutlineMenuAlt3 /></button> */}
                            <Menu as="div" className="relative inline-block text-left lg:hidden">
                                <div className='flex items-center'>
                                    <Menu.Button className="p-0 text-[24px] text-[#3e337c] trans">
                                        <HiOutlineMenuAlt3 className='text-[24px] text-[#3e337c]' />
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
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-[200px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {Sidedata.map((data, i) =>
                                                <Menu.Item key={i}>
                                                    {({ active }) => (
                                                        <a
                                                            href={data.link}
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900 font-medium' : 'text-[#3e337c] font-medium',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            {data.menu}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            )}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
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
                                            <h3 className='text-[#3e337c] font-bold text-center text-[28px]'>Log Out</h3>
                                            <p className='text-[#3e337c] text-[16px] text-center font-medium mt-3'>Are you sure you want to log out?</p>
                                            <div class="flex gap-[20px] mt-[40px] sm:flex-nowrap flex-wrap justify-center">
                                                <button onClick={() => setOpen(false)} class="bg-[#c6c0db] text-[#f8f6ff] rounded-lg sm:w-[120px] p-[10px_20px] uppercase font-semibold">Cancel</button>
                                                <a href='/login' class="bg-[#3e337c] text-[#f8f6ff] rounded-lg sm:w-[120px] text-center p-[10px_20px] uppercase font-semibold">OK</a>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            </div>
            {active && <>
                <div className='bg-[#7b7492] py-[20px]'>
                    <div className='max-w-[1200px] mx-auto'>
                        <div className='relative'>
                            <input type='text' placeholder='Search here' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none' />
                            <button className='absolute right-[8px] top-[50%] translate-y-[-50%] text-[#3e337c]' onClick={() => setActive(false)}>
                                <IoMdClose />
                            </button>
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}

export default Header