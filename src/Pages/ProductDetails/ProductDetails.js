import React, { Fragment, useEffect, useState } from 'react';
import product1 from '../../Assets/Images/ProductImages/product1.png';
import product2 from '../../Assets/Images/ProductImages/product2.png';
import product3 from '../../Assets/Images/ProductImages/product3.png';
import remote from '../../Assets/Images/ProductImages/remote.png';
import boost from '../../Assets/Images/ProductImages/boost.webp';
import sleep from '../../Assets/Images/ProductImages/sleep.webp';
import meter from '../../Assets/Images/ProductImages/meter.webp';
import Fan from '../../Assets/Images/ProductDetailImages/fan.png';
import Shipping from '../../Assets/Images/ProductDetailImages/shipping.webp';
import Warranty from '../../Assets/Images/ProductDetailImages/warranty.webp';
import Return from '../../Assets/Images/ProductDetailImages/return.webp';
import Delivery from '../../Assets/Images/ProductDetailImages/delivery.webp';
import saves from '../../Assets/Images/ProductImages/saves.webp';
import runs from '../../Assets/Images/ProductImages/runs.webp';
import superEfficient from '../../Assets/Images/ProductImages/super-efficient.webp';
import priceMatch from '../../Assets/Images/ProductDetailImages/price-match.png';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ReviewadRatings from '../../Components/CeilingFans/ReviewadRatings';
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Menu, Transition, Dialog } from '@headlessui/react';
import { AuthAPI } from '../../API';
import toast from 'react-hot-toast';
import { useParams, useLocation } from 'react-router-dom';
import WithAppContext from '../../Helper/Context/app.ContextHoc';
import { capitalize } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const imageURL = process.env.REACT_APP_IMAGE_URL;

const ChooseData = [
    {
        img: superEfficient,
        name: 'SUPER EFFICIENT BLDC MOTOR'
    },
    {
        img: runs,
        name: 'RUNS 3 TIMES LONGER ON INVERTER'
    },
    {
        img: saves,
        name: 'SAVES UP TO ₹1500/YEAR'
    }
]

const ProductDetails = (props) => {
    const { context } = props
    const { state } = useLocation();
    const { addToCart } = context
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);
    const { product_id } = useParams()
    const [product, setProduct] = useState({})
    const [productImages, setProductImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [additionalInformation, setAdditionalInformation] = useState([])
    const [technicalInformation, setTechnicalInformation] = useState([])
    const [selectedVariantProduct, setSelectedVariantProduct] = useState('')
    const [selectVariantProductImage, setSelectVariantProductImage] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading) {
            Object.keys(product?.additional_information).forEach(function (key, index) {
                const value = product?.additional_information[key]
                additionalInformation.push({
                    title: key,
                    details: value
                })
                if (index === Object.keys(product?.additional_information).length - 1) {
                    setAdditionalInformation([...additionalInformation])
                }
            })

            Object.keys(product?.technical_information).forEach(function (key, index) {
                const value = product?.technical_information[key]
                technicalInformation.push({
                    title: key,
                    details: value
                })
                if (index === Object.keys(product?.technical_information).length - 1) {
                    setTechnicalInformation([...technicalInformation])
                }
            })
            clickHandler(product.productVariants[0])
        }
    }, [isLoading])

    const getProductById = async () => {
        try {
            const response = await AuthAPI(`/product/${product_id}`, {
                method: "GET",
                data: product_id
            });
            if (response?.status === 200) {
                toast.success(response.message);
                setIsLoading(false)
                setProduct(response.data[0])
                const images = []
                response.data?.[0]?.productVariants?.forEach(elem => {
                    if (elem?.images?.length) {
                        images.push(...elem?.images)
                    }
                })
                setProductImages(images)
            } else {
                toast.error("Something went wrong..");
            }
        } catch (error) {
            toast.error("Something went to wrong...");
            console.error(error);
        }
    }

    useEffect(() => {
        getProductById()
    }, [])

    const clickHandler = (val) => {
        setSelectedVariantProduct(val)
        setSelectVariantProductImage(val?.images?.[0])
    }

    const addToCartHandler = () => {
        const payload = { ...product, selectedVariant: { ...selectedVariantProduct } }
        addToCart(payload)
    }


    const goToCheckOut = () => {
        addToCartHandler()
        navigate("/checkout")
    }

    return (
        <>
            {isLoading ?
                <div>
                    <h1>Loading...</h1>
                </div>
                :
                <div>
                    <Header />
                    <div>
                        <div className='py-4 px-[20px] max-w-[1300px] mx-auto'>
                            <div className='text-[#3e337c] text-[14px] flex items-center'>
                                <a href='/' className='font-medium underline'>Home</a><span className='block mx-2'>/</span><a href='/ceiling-fans' className='font-medium underline'>Ceiling Fans</a><span className='block mx-2'>/</span><p>Efficio Ceiling Fan
                                </p>
                            </div>
                            <div className='grid lg:grid-cols-2 gap-[30px] mt-[30px]'>
                                <div>
                                    <img src={selectVariantProductImage ? `${imageURL}${selectVariantProductImage}` : Fan} alt='Fan' className='mb-3' />
                                    <div>
                                        <div className='w-[90px] h-[90px] border-[1px] border-[#dbdbdb] rounded-md relative mt-12 flex gap-4'>
                                            {
                                                productImages.map(elem => <img src={elem ? `${imageURL}${elem}` : Fan} alt='Fan' className='rounded-md cursor-pointer' onClick={() => setSelectVariantProductImage(elem)} />)
                                            }
                                            {/* <button onClick={() => setOpen(true)} className='bg-[#eeeeee] text-[#3e337c] rounded-full w-[24px] h-[24px] flex justify-center items-center absolute top-[-14px] left-[-13px]'>
                                                <MdModeEdit />
                                            </button>
                                            <button onClick={() => setActive(true)} className='bg-[#eeeeee] text-[#3e337c] rounded-full w-[24px] h-[24px] flex justify-center items-center absolute top-[-14px] right-[-13px]'>
                                                <MdDelete />
                                            </button> */}
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
                                                                        <h3 className='text-[#3e337c] font-bold text-center text-[28px]'>Edit Product</h3>
                                                                        <input type='file' placeholder='Model' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none mt-[30px]' />
                                                                        <div class="flex gap-[20px] mt-[40px] sm:flex-nowrap flex-wrap justify-center">
                                                                            <button onClick={() => setOpen(false)} class="bg-[#c6c0db] text-[#f8f6ff] rounded-lg sm:w-[120px] p-[10px_20px] uppercase font-semibold">Cancel</button>
                                                                            <button onClick={() => setOpen(false)} class="bg-[#3e337c] text-[#f8f6ff] rounded-lg sm:w-[120px] text-center p-[10px_20px] uppercase font-semibold">OK</button>
                                                                        </div>
                                                                    </div>
                                                                </Dialog.Panel>
                                                            </Transition.Child>
                                                        </div>
                                                    </div>
                                                </Dialog>
                                            </Transition.Root>
                                            <Transition.Root show={active} as={Fragment}>
                                                <Dialog as="div" className="relative z-10" onClose={setActive}>
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
                                                                        <h3 className='text-[#3e337c] font-bold text-center text-[28px]'>Delete</h3>
                                                                        <p className='text-[#3e337c] text-[16px] text-center font-medium mt-3'>Are you sure you want to delete Image?</p>
                                                                        <div class="flex gap-[20px] mt-[40px] sm:flex-nowrap flex-wrap justify-center">
                                                                            <button onClick={() => setActive(false)} class="bg-[#c6c0db] text-[#f8f6ff] rounded-lg sm:w-[120px] p-[10px_20px] uppercase font-semibold">Cancel</button>
                                                                            <button onClick={() => setActive(false)} class="bg-[#3e337c] text-[#f8f6ff] rounded-lg sm:w-[120px] text-center p-[10px_20px] uppercase font-semibold">OK</button>
                                                                        </div>
                                                                    </div>
                                                                </Dialog.Panel>
                                                            </Transition.Child>
                                                        </div>
                                                    </div>
                                                </Dialog>
                                            </Transition.Root>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-[30px]'>
                                    <h2 className='text-[#3e337c] font-bold lg:text-[36px] sm:text-[30px] text-[26px]'>{product.name}</h2>
                                    <p className='text-[#3e337c] sm:text-[16px] text-[14px] font-medium mt-3'>MDN Efficio Energy Efficient Ceiling Fan with BLDC Motor and Remote</p>
                                    <div className='flex items-start mt-[20px]'>
                                        <h3 className='line-through text-[#7b7492] font-semibold text-[26px]'>₹5,190</h3>
                                        <div className='ml-[20px]'>
                                            <h3 className='text-[#3e337c] font-bold text-[26px]'>₹{product.price}</h3>
                                            <p className='text-[#3e337c] text-[10px]'>Inclusive of all taxes</p>
                                        </div>
                                        <h3 className='text-[#fdb913] font-semibold ml-[20px] text-[20px]'>-36%</h3>
                                    </div>
                                    <p className='flex text-[16px] text-[#3e337c] font-medium mt-3'><span className='font-bold block mr-2'>Color -</span>
                                        {selectedVariantProduct?.color_name && <span> {capitalize(selectedVariantProduct?.color_name || '')}</span>}
                                    </p>
                                    <div className='mt-2 flex items-center gap-3'>
                                        {product?.productVariants?.map((val, index) => {
                                            return (
                                                <button className='border-[#e2ddff] border-[1px] p-[6px] rounded-[4px] ' key={index} onClick={() => clickHandler(val)} style={{
                                                    ...(selectedVariantProduct._id === val._id && {
                                                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                                                    })
                                                }}>
                                                    <div className={`w-[26px] h-[26px] rounded-[4px] border-[#e2ddff] border-[1px]`} style={{ backgroundColor: val.color_code }} />
                                                </button>
                                            )
                                        })}
                                        {/* <button className='border-[#e2ddff] border-[1px] p-[6px] rounded-[4px] shadow-[0_2px_6px_1px_#3e337c30]'>
                                            <div className='w-[26px] h-[26px] bg-[#fff] rounded-[4px] border-[#e2ddff] border-[1px]' />
                                        </button>
                                        <button className='border-[#e2ddff] border-[1px] p-[6px] rounded-[4px]'>
                                            <div className='w-[26px] h-[26px] bg-[#a7a18f] rounded-[4px] border-[#e2ddff] border-[1px]' />
                                        </button>
                                        <button className='border-[#e2ddff] border-[1px] p-[6px] rounded-[4px]'>
                                            <div className='w-[26px] h-[26px] bg-[#70483c] rounded-[4px] border-[#e2ddff] border-[1px]' />
                                        </button>
                                        <button className='border-[#e2ddff] border-[1px] p-[6px] rounded-[4px]'>
                                            <div className='w-[26px] h-[26px] bg-[#4e6e81] rounded-[4px] border-[#e2ddff] border-[1px]' />
                                        </button>
                                        <button className='border-[#e2ddff] border-[1px] p-[6px] rounded-[4px]'>
                                            <div className='w-[26px] h-[26px] bg-[#6D503A] rounded-[4px] border-[#e2ddff] border-[1px]' />
                                        </button>
                                    </div>
                                    <p className='flex text-[16px] text-[#3e337c] font-medium mt-6'><span className='font-bold block mr-2'>Sweep Size -</span> 1200mm</p>
                                    <div className='mt-2 flex gap-2'>
                                        <button className='border-[#e2ddff] border-[1px] rounded-[6px] p-[6px_13px] text-[14px] text-[#3e337c] font-medium'>
                                            900mm
                                        </button>
                                        <button className='border-[#e2ddff] border-[1px] rounded-[6px] p-[6px_13px] text-[14px] text-[#3e337c] font-medium'>
                                            900mm
                                        </button>
                                        <button className='border-[#e2ddff] border-[1px] rounded-[6px] p-[6px_13px] text-[14px] text-[#3e337c] font-medium'>
                                            900mm
                                        </button>
                                    </div>
                                    <div className='flex justify-between items-center mt-6'>
                                        <div className='sweep-main flex items-center'>
                                            <p className='flex text-[16px] text-[#3e337c]  font-bold mr-2'>Sweep Size -</p>
                                            <input type='number' defaultValue='1' className='border-[#e2ddff] border-[1px] rounded-3xl p-[8px_12px] w-[66px] outline-none text-center' />
                                        </div>
                                        <p className='font-bold text-[#3e337c]'>285 in stock</p> */}
                                    </div>
                                    <div className='flex gap-[20px] mt-[30px] sm:flex-nowrap flex-wrap'>
                                        <button className='bg-[#3e337c] text-[#f8f6ff] rounded-[30px] p-[10px_20px] uppercase font-semibold w-full' onClick={() => goToCheckOut()}>Buy Now</button>
                                        <button className='bg-[#3e337c] text-[#f8f6ff] rounded-[30px] p-[10px_20px] uppercase font-semibold w-full' onClick={() => addToCartHandler()}>Add to Cart</button>
                                    </div>
                                    {/* <div className='flex gap-[20px] mt-[10px] sm:flex-nowrap flex-wrap'>
                                <button className='text-[#3e337c] rounded-[30px] p-[10px_20px] uppercase font-semibold w-full'>Add to compare</button>
                                <button className='text-[#3e337c] rounded-[30px] p-[10px_20px] uppercase font-semibold w-full'>FAN BUYING GUIDE</button>
                            </div> */}
                                    <div className='flex items-center gap-[32px] mt-8 flex-wrap'>
                                        <img src={Shipping} alt='Shipping' className='w-[100px]' />
                                        <img src={Warranty} alt='Warranty' className='w-[100px]' />
                                        <img src={Return} alt='Return' className='w-[100px]' />
                                        <img src={Delivery} alt='Delivery' className='w-[100px]' />
                                    </div>
                                </div>
                                {/* <div className='sweep-main flex items-center justify-between mt-[20px] sm:flex-nowrap flex-wrap gap-[10px]'>
                                    <input type='number' placeholder='Pincode' className='border-[#e2ddff] border-[1px] rounded-3xl p-[8px_12px] outline-none text-[14px]' />
                                    <button className='bg-[#3e337c] text-[#f8f6ff] rounded-[30px] p-[9px_20px] text-[14px]'>Check Delivery time</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#7b7492] py-[40px]'>
                        <h1 className='text-[#fff] font-semibold text-lg md:text-[22px] lg:text-[24px] text-center uppercase mb-[60px]'>Product information</h1>
                        <div className="max-w-[1300px] mx-auto px-[20px]">
                            <div className='grid lg:grid-cols-2 gap-[30px]'>
                                <div className='overflow-auto'>
                                    <h1 className='text-[#fff] font-medium text-[18px]'>Technical Details</h1>
                                    <div className='mt-[20px]'>
                                        <table className='w-full'>
                                            {technicalInformation.map((item, index) =>
                                                <tr key={index}>
                                                    <th className='max-w-[50px] bg-[#827e9d] text-[#fff] font-normal border-y-[#938ea1] border-y-[1px] p-[7px_14px_6px] text-left 2xl:text-[14px] text-[12px]'>{item.title}</th>
                                                    <td className='border-y-[#938ea1] text-[#fff] font-normal border-y-[1px] p-[7px_14px_6px] text-left 2xl:text-[14px] text-[12px]' >{item.details}</td>
                                                </tr>
                                            )}
                                        </table>
                                    </div>
                                </div>
                                <div className='overflow-auto'>
                                    <h1 className='text-[#fff] font-medium text-[18px]'>Additional Information</h1>
                                    <div className='mt-[20px]'>
                                        <table className='w-full'>
                                            {additionalInformation.map((item, index) =>
                                                <tr key={index}>
                                                    <th className='max-w-[50px] bg-[#827e9d] text-[#fff] font-normal border-y-[#938ea1] border-y-[1px] p-[7px_14px_6px] text-left 2xl:text-[14px] text-[12px]'>{item.title}</th>
                                                    <td className='border-y-[#938ea1] text-[#fff] font-normal border-y-[1px] p-[7px_14px_6px] text-left 2xl:text-[14px] text-[12px]' >{item.details}</td>
                                                </tr>
                                            )}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className=' bg-[#7b7492]'>
                <div className="max-w-[1300px] mx-auto px-[20px] py-[60px]">
                    <h1 className='text-[#fff] font-semibold text-lg md:text-[22px] lg:text-[24px] text-center'>WHY SHOULD YOU BUY FROM THE MDN WEBSITE ?</h1>
                    <div className='mt-[60px]'>
                        <div className='flex justify-center'>
                            <img src={priceMatch} alt='price-match' />
                        </div>
                        <p className='text-[#fff] font-semibold text-[16px] text-center mt-3 max-w-[250px] mx-auto'>LOWEST PRICE GUARANTEED</p>
                        <p className='text-white font-medium text-[14px] text-center max-w-[210px] mx-auto'>(Click on the icon to know more)</p>
                    </div>
                    <h1 className='text-[#fff] font-semibold text-lg md:text-[22px] lg:text-[24px] text-center mt-[60px]'>WHY SHOULD YOU CHOOSE US ?</h1>
                    <div className='flex justify-center flex-wrap gap-[40px] gap-y-[60px] mt-[70px]'>
                        {ChooseData.map((data, key) =>
                            <div className='md:w-[20%] sm:w-[25%] w-[100%]' key={key}>
                                <div className='flex justify-center'>
                                    <img src={data.img} alt='saves' className='lg:max-w-none max-w-[100px] lg:w-auto w-full' />
                                </div>
                                <p className='text-[#fff] font-semibold lg:text-[17px] text-[14px] text-center mt-3 max-w-[250px] mx-auto'>{data.name}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className=' bg-[#c6c0db]'>
                <div className="max-w-[1300px] mx-auto px-[20px]">
                    <div className='flex justify-center items-center p-[20px_0]'>
                        <img src={remote} alt='remote' />
                        <div>
                            <h2 className='text-[#3e337c] font-bold sm:text-[22px] text-[18px]'>REMOTE CONTROLLED</h2>
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
                </div>
            </div> */}
                    <ReviewadRatings />
                    <Footer />
                </div >
            }
        </>

    )
}

export default WithAppContext(ProductDetails)