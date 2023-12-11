import { useFormik } from 'formik';
import React, { useCallback, useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { MdDelete } from 'react-icons/md';
import * as Yup from 'yup';
import Delivery from '../../Assets/Images/ProductDetailImages/delivery.webp';
import Fan from '../../Assets/Images/ProductDetailImages/fan.png';
import Return from '../../Assets/Images/ProductDetailImages/return.webp';
import Shipping from '../../Assets/Images/ProductDetailImages/shipping.webp';
import Warranty from '../../Assets/Images/ProductDetailImages/warranty.webp';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import WithAppContext from '../../Helper/Context/app.ContextHoc';
import { capitalize } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthAPI } from '../../API';

const validSchema = Yup.object().shape({
    house_no: Yup.string().required("Home No/ Building No. required"),
    street_name: Yup.string().required("Street Address required"),
    location: Yup.string().required("Location Name required"),
    pin_code: Yup.string().matches(/^[0-9]\d{5}$/, "Invalid Pincode number").required("Pincode required"),
    city: Yup.string().required("City must be required"),
    state: Yup.string().required("State must be required")
});
const imageURL = process.env.REACT_APP_IMAGE_URL;

const Checkout = ({ context }) => {
    const { incrementQuantity, decrementQuantity, cartData, handleSubTotal, removeItemFromCart, setCartData } = context
    const [isChecked, setIsChecked] = useState(false)
    const [isPayChecked, setIsPayChecked] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [address, setAddress] = useState({})
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            house_no: "",
            street_name: "",
            location: "",
            pin_code: "",
            city: "",
            state: "andaman and nicobar islands",
        },
        onSubmit: (values, { resetForm }) => {
            setAddress(values)
            setIsSubmit(true)
        },
        validationSchema: validSchema,
    })
    useEffect(() => {
        if (!cartData?.length) {
            navigate('/ceiling-fans')
        }
    }, [cartData])


    const editAddressHandler = () => {
        formik.setValues({
            house_no: address.house_no,
            street_name: address.street_name,
            location: address.location,
            pin_code: address.pin_code,
            city: address.city,
            state: address.state,
        })
        setIsSubmit(false)
    }
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    useEffect(() => {
        if (process.env.REACT_APP_RAZORPAY_SCRIPT_URL) {
            loadScript(process.env.REACT_APP_RAZORPAY_SCRIPT_URL)
        }
    }, [])

    const createOrderAPI = async () => {
        try {
            let userData = localStorage.getItem('user')
            if (!userData) {
                toast.error('Please log in')
            }
            userData = JSON.parse(userData)
            const payload = {
                userId: userData._id,
                orderItems: cartData.map(elem => ({
                    product_variant_id: elem.product_variant_id,
                    quantity: elem.quantity,
                    price: elem.price
                })),
                address: {
                    ...address,
                    pin_code: address?.pin_code?.toString(),
                    country: 'India'
                }
            }
            const response = await AuthAPI('/order/create', {
                method: "POST",
                data: payload
            })
            await handlePayment(response.data, userData)

        } catch (error) {
            toast.error(error?.message || error || 'Something went wrong!')
        }
    }

    const paymentHandler = async () => {
        await createOrderAPI()
    }

    const handlePayment = useCallback((payload, userData) => {
        const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY

        const options = {
            key: razorpayKey,
            name: 'MDN',
            amount: Number(payload?.orderData?.amount),
            currency: 'INR',
            order_id: payload?.orderData?.id,
            prefill: {
                contact: userData.contact_number,
                name: userData.full_name,
                email: userData.email,
            },
            handler: (res) => {
                if (!res.error) {
                    handleOrderPaymentSuccess(res, payload?.order?._id)
                } else {
                    toast.error('Payment failed', { autoClose: 2000 })
                }
            },
            modal: {
                escape: false,
            },
        }
        if (razorpayKey.includes('_test_')) {
            delete options.order_id
        }
        const rzpay = new (window).Razorpay(options)
        rzpay.open()
    }, [])
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const handleOrderPaymentSuccess = async (res, orderId) => {
        if (res?.razorpay_payment_id) {
            const payload = {
                orderId: orderId,
                razorpayPaymentId: res.razorpay_payment_id,
            }
            const response = await AuthAPI('/order/payment/success', {
                method: "POST",
                data: payload
            })
            toast.success(response.message || 'Order placed successfully')
            await sleep(2000)
            setCartData([])
            setIsChecked(false)
            setIsPayChecked(false)
            setIsSubmit(false)
            setAddress({})
            navigate('/myorders')
        }
    }

    return (
        <div>
            <Header />
            <div className='bg-[#c6c0db] pb-[60px]'>
                <div className="max-w-[1300px] mx-auto px-[20px]">
                    <p className='text-[#3e337c] py-[30px]'><a href='#' className='font-semibold'>Sign In </a>for Express Checkout</p>
                    <div className='md:flex items-start xl:gap-[40px] gap-[20px]'>
                        <div className='md:w-[60%] w-full '>
                            <div>
                                <div className='bg-[#7b7492] sm:p-[20px] p-[15px_12px] rounded-t-xl pb-[40px]'>
                                    <h1 className='text-[#fff] text-[18px] font-semibold'>1. SHIPPING INFORMATION</h1>
                                </div>
                                <div className={`bg-[#7b7492] sm:p-[20px] p-[15px_12px] rounded-b-xl pb-[40px]`}>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div>
                                            {/* <div className='mt-[30px] lg:grid grid-cols-2 gap-[20px]'>
                                                <input type='email' placeholder='Email' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none' />
                                                <div className='relative lg:mt-0 mt-[20px]'>
                                                    <input type='number' placeholder='Phone Number' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none pl-[40px]' />
                                                    <p className='absolute text-[#3e337c] text-[14px] top-[49%] translate-y-[-50%] left-[8px] font-medium'>+91</p>
                                                </div>
                                            </div>
                                            <div className='mt-[20px] lg:grid grid-cols-2 gap-[20px]'>
                                                <input type='text' placeholder='First Name' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none' />
                                                <input type='text' placeholder='Last Name' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none lg:mt-0 mt-[20px]' />
                                            </div> */}
                                            <div className='mt-[20px]'>
                                                <input type='text' name="house_no" onChange={formik.handleChange} value={formik.values.house_no} placeholder='Home No/ Building No. etc' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none' />
                                                {formik.errors.house_no && formik.touched.house_no ? (
                                                    <p className="text-red-500 text-sm">*{formik.errors.house_no}</p>
                                                ) : null}
                                            </div>
                                            <div className='mt-[20px]'>
                                                <input type='text' name="street_name" onChange={formik.handleChange} value={formik.values.street_name} placeholder='Street Address' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none' />
                                                {formik.errors.street_name && formik.touched.street_name ? (
                                                    <p className="text-red-500 text-sm">*{formik.errors.street_name}</p>
                                                ) : null}
                                            </div>
                                            <div className='mt-[20px]'>
                                                <input type='text' name="location" onChange={formik.handleChange} value={formik.values.location} placeholder='Street Address 2' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none' />
                                                {formik.errors.location && formik.touched.location ? (
                                                    <p className="text-red-500 text-sm">*{formik.errors.location}</p>
                                                ) : null}
                                            </div>
                                            <div className='mt-[20px] grid xl:grid-cols-3 lg:grid-cols-2 gap-[20px] sweep-main'>
                                                <div>
                                                    <input type='number' name="pin_code" onChange={formik.handleChange} value={formik.values.pin_code} placeholder='ZIP / Postal Code' className='border-[#e2ddff] border-[1px] rounded-md p-[8px_12px] outline-none text-[14px]' />
                                                    {formik.errors.pin_code && formik.touched.pin_code ? (
                                                        <p className="text-red-500 text-sm">*{formik.errors.pin_code}</p>
                                                    ) : null}
                                                </div>
                                                <div>
                                                    <input type='text' name="city" onChange={formik.handleChange} value={formik.values.city} placeholder='city' className='text-[14px] w-full border-[#c6c0db] text-[#3e337c] font-medium border-[1px] rounded-md p-[8px_12px] outline-none' />
                                                    {formik.errors.city && formik.touched.city ? (
                                                        <p className="text-red-500 text-sm">*{formik.errors.city}</p>
                                                    ) : null}
                                                </div>
                                                <div className='relative'>
                                                    <div className='relative'>
                                                        <select className='border-[#e2ddff] border-[1px] rounded-md p-[8px_12px] outline-none text-[14px] w-full pr-[24px]' name="state" value={formik.values.state} onChange={formik.handleChange}>
                                                            {/* <option disabled selected className='text-[#3e337c]'>Select State</option> */}
                                                            <option value="andaman and nicobar islands">Andaman & Nicobar Islands</option>
                                                            <option value="andhra pardesh">Andhra Pradesh</option>
                                                            <option value="arunachal pardesh">Arunachal Pradesh</option>
                                                            <option value="assam">Assam</option>
                                                            <option value="buhar">Bihar</option>
                                                            <option value="chandigrah">Chandigarh</option>
                                                            <option value="gujarat">Gujarat</option>
                                                            <option value="rajasthan">Rajasthan</option>
                                                            <option value="tamilnadu">Tamilnadu</option>
                                                        </select>
                                                        <div className='absolute top-[50%] translate-y-[-50%] right-[8px]'>
                                                            <FaAngleDown />
                                                        </div>
                                                    </div>
                                                    {formik.errors.state && formik.touched.state ? (
                                                        <p className="text-red-500 text-sm">*{formik.errors.state}</p>
                                                    ) : null}

                                                </div>
                                            </div>
                                            <div className='flex items-center gap-2 mt-[30px]'>
                                                <input type='checkbox' onChange={(e) => setIsChecked(e.target.checked)} id='check' className='cursor-pointer w-[18px] h-[18px]' />
                                                <label htmlFor='check' className='text-[#fff] text-[14px] font-normal select-none cursor-pointer' name="editAddress">By clicking this you allow communication from MDN electronics</label>
                                            </div>
                                            <button className='rounded-full inline-flex font-semibold text-[14px] items-center justify-center p-[10px_40px] bg-[#c6c0db] text-[#3e337c] mt-[40px]'>
                                                Deliver here
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {isChecked && isSubmit &&
                                <>
                                    <div className='bg-[#7b7492] sm:p-[20px] p-[20px_12px] rounded-xl mt-[20px]'>
                                        <div className='flex justify-between items-center'>
                                            <h2 className='text-[#fff] font-bold text-[18px]'>Deliver here</h2>
                                            <button className='text-[#3e337c] font-medium bg-[#c6c0db] p-[6px_20px] rounded-[20px] text-[14px]' onClick={() => editAddressHandler()}>Edit</button>
                                        </div>
                                        <div className='mt-[16px]'>
                                            <p className='text-[#fff] text-[14px] font-medium'>{address?.house_no} </p>
                                            <p className='text-[#fff] text-[14px] font-medium mt-[12px]'>{address?.street_name} </p>
                                            <p className='text-[#fff] text-[14px] font-medium mt-[12px]'>{address?.location} </p>
                                            <p className='text-[#fff] text-[14px] font-medium mt-[12px]'>{address?.pin_code} </p>
                                            <p className='text-[#fff] text-[14px] font-medium mt-[12px]'>{address?.city} </p>
                                            <p className='text-[#fff] text-[14px] font-medium mt-[12px]'>{address?.state} </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 mt-[20px]'>
                                        <input type='checkbox' id='check1' className='cursor-pointer w-[18px] h-[18px]' onChange={(e) => setIsPayChecked(e.target.checked)} />
                                        <label htmlFor='check1' className='text-[#3e337c] text-[14px] font-medium select-none cursor-pointer'>By clicking this you allow communication from MDN electronics</label>
                                    </div>
                                </>
                            }

                            {isPayChecked && <div className='bg-[#7b7492] sm:p-[20px] p-[20px_12px] rounded-xl mt-[20px]'>
                                <div className='flex items-center gap-2'>
                                    <input type='radio' id='check2' className='cursor-pointer w-[20px] h-[20px]' checked={true} />
                                    <label htmlFor='check2' className='text-[#fff] text-[16px] font-semibold select-none cursor-pointer'>Pay Online (UPI, Credit/Debit Card, Net Banking, Wallet, EMI etc.)</label>
                                </div>
                                <p className='text-[#fff] text-[16px] mt-[10px]'>Pay securely by UPI or Wallet or Credit or Debit card or Internet banking</p>
                                <button className='text-[#3e337c] font-medium bg-[#c6c0db] p-[9px_20px] rounded-[20px] text-[14px] mt-[20px] w-full' onClick={() => paymentHandler()}>Make online Payment</button>
                            </div>
                            }
                            <div className='flex items-center gap-[32px] mt-8 flex-wrap justify-between bg-[#fff] rounded-xl p-[20px]'>
                                <img src={Shipping} alt='Shipping' className='w-[100px]' />
                                <img src={Warranty} alt='Warranty' className='w-[100px]' />
                                <img src={Return} alt='Return' className='w-[100px]' />
                                <img src={Delivery} alt='Delivery' className='w-[100px]' />
                            </div>
                        </div>
                        <div className='md:w-[40%] w-full md:mt-0 mt-[20px]'>
                            <div className='bg-[#7b7492] rounded-xl'>
                                <div className='h-[60vh] min-h-[10vh] max-h-[40vh] overflow-y-auto'>
                                    {cartData?.map((val, index) => {
                                        return (
                                            <div className='py-[30px] flex gap-[16px] items-center border-b-[#c6c0db] border-b-[1px] sm:p-[20px] p-[20px_12px]' key={index}>
                                                <img src={val.product_image ? `${imageURL}${val.product_image}` : Fan} alt='Fan' className='w-[62px] rounded-md border border-gray-200' />
                                                <div>
                                                    <h5 className='text-[#fff] font-semibold text-[16px]'>{val.product_name}</h5>
                                                    <div className='mt-2'>
                                                        <button className='items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800'>{capitalize(val.color_name)}</button>
                                                    </div>
                                                    <div className='flex items-center gap-[12px] mt-[14px]'>
                                                        <p className='text-[#fff] text-[14px]'>₹{val.price}</p>
                                                        <div className='flex items-center'>
                                                            <button className='bg-[#c6c0db] text-white w-[26px] h-[26px] flex justify-center items-center' onClick={(e) => {
                                                                            e.preventDefault()
                                                                            decrementQuantity(val)
                                                                            e.stopPropagation()
                                                                        }}>-</button>
                                                            <button className='flex justify-center items-center p-[2.5px_10px] text-[14px] bg-white text-[#3e337c] shadow-[0_2px_6px_1px_#3e337c30]'>{val.quantity}</button>
                                                            <button className='bg-[#c6c0db] text-white w-[26px] h-[26px] flex justify-center items-center' onClick={(e) => {
                                                                            e.preventDefault()
                                                                            incrementQuantity(val)
                                                                            e.stopPropagation()
                                                                        }}>+</button>
                                                        </div>
                                                        <button className='text-[#fff] text-[24px]' onClick={() => removeItemFromCart(index)} ><MdDelete /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='sm:p-[20px] p-[20px_12px]'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-[#fff] text-[14px]'>Subtotal:</p>
                                        <div>
                                            <p className='text-[#fff] text-[14px]'>₹{handleSubTotal()}</p>
                                            <p className='text-[#fff] text-[10px]'>(incl. tax)</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center mt-[20px]'>
                                        <p className='text-[#fff] font-semibold text-[14px]'>Discount</p>
                                        <p className='text-[#fff] text-[14px]'>₹0</p>
                                    </div>
                                    <div className='flex justify-between items-center mt-[20px]'>
                                        <p className='text-[#fff] text-[14px]'>IGST</p>
                                        <p className='text-[#fff] text-[14px]'>-</p>
                                    </div>
                                    <div className='flex justify-between items-center mt-[20px]'>
                                        <p className='text-[#fff] text-[14px]'>Shipping</p>
                                        <p className='text-[#fff] text-[14px]'>FREE</p>
                                    </div>
                                    <div className='flex justify-between items-center mt-[20px]'>
                                        <p className='text-[#fff] text-[14px]'>Total</p>
                                        <p className='text-[#fff] text-[14px]'>₹{handleSubTotal()}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#7b7492] rounded-xl mt-[20px]'>
                                <div className='sm:p-[20px] p-[20px_12px] border-b-[#c6c0db] border-b-[1px]'>
                                    <h2 className='text-[#fff] text-[16px] font-semibold'>Very Happy with Renesa Fan!</h2>
                                    <div className='flex text-[18px] text-[#fff] mt-1'>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                    <p className='text-[14px] italic text-[#fff] mt-3'>Had purchased 2 fans till last year. But in this month one renesa Model Fan was not working so logged complain, Person came within 3 days of complaint registration. Technician Kashyap Thakkar visited to my place and replaced upper part of FAN PCB assembly and now working fine.Good service.</p>
                                    <div className='mt-5'>
                                        <p className='text-[#fff] text-[14px] font-medium'>Shailesh Wankhede</p>
                                        <p className='text-[#fff] text-[12px]'>Customer</p>
                                    </div>
                                </div>
                                <div className='sm:p-[20px] p-[20px_12px]'>
                                    <h2 className='text-[#fff] text-[16px] font-semibold'>Amazing Post-sales Service</h2>
                                    <div className='flex text-[18px] text-[#fff] mt-1'>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                    <p className='text-[14px] italic text-[#fff] mt-3'>Very very happy with the after sales service, my Efficio ceiling fan had some issue, made a complaint yesterday and the service technician Mr. Jeffrey arrived on the same day and fixed the problem. Keep up the good work team!!! Excellent product and excellent service 👍👍👍</p>
                                    <div className='mt-5'>
                                        <p className='text-[#fff] text-[14px] font-medium'>Nishant Balakrishnan</p>
                                        <p className='text-[#fff] text-[12px]'>Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default WithAppContext(Checkout)