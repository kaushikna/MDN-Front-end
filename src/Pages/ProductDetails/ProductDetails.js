import React from 'react';
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

const TechnicalDetail = [
    {
        head: 'Brand',
        name: 'atomberg'
    },
    {
        head: 'Colour',
        name: 'Marble White'
    },
    {
        head: 'Electric fan design',
        name: 'Ceiling Fan'
    },
    {
        head: 'Power Source',
        name: 'Corded Electric'
    },
    {
        head: 'Style',
        name: 'Aris Starlight'
    },
    {
        head: 'Product Dimensions',
        name: '62.5D x 33.5W x 22.8H Centimeters'
    },
    {
        head: 'Room Type',
        name: 'Bedroom, Living Room, Dining Room'
    },
    {
        head: 'Special Feature',
        name: 'Remote Controlled, LED Light, Inverter Compatible'
    },
    {
        head: 'Recommended Uses For Product',
        name: 'Indoor'
    },
    {
        head: 'Wattage',
        name: '39 Watts'
    },
    {
        head: 'Finish Type',
        name: 'Glossy'
    },
    {
        head: 'Number of Blades',
        name: '3'
    },
    {
        head: 'Air Flow Capacity',
        name: '245 Cubic Metres per Minute'
    },
    {
        head: 'Speed',
        name: '280 RPM'
    },
    {
        head: 'Voltage',
        name: '220 Volts'
    },
    {
        head: 'Collection Name',
        name: 'Home'
    },
    {
        head: 'Switch Type',
        name: 'remote'
    },
    {
        head: 'Item Weight',
        name: '5.1 Kilograms'
    },
    {
        head: 'Included Components',
        name: '1 Blade set, 1 remote,1 motor box, 2 canopies, 1 downrod, 1 shackle kit and warranty card'
    },
    {
        head: 'Indoor/Outdoor Usage',
        name: 'Indoor'
    },
    {
        head: 'Model Name',
        name: 'Aris Starlight'
    },
    {
        head: 'Specification Met',
        name: 'star rated'
    },
    {
        head: 'Control Method',
        name: 'Remote'
    },
    {
        head: 'Light Type',
        name: 'LED'
    },
    {
        head: 'Blade Material',
        name: 'Acrylonitrile Butadiene Styrene (ABS)'
    },
    {
        head: 'Manufacturer',
        name: 'Atomberg Technologies'
    },
    {
        head: 'Country of Origin',
        name: 'India'
    },
    {
        head: 'Item model number',
        name: 'Aris Starlight - Marble White'
    },
    {
        head: 'ASIN',
        name: 'B0BZ4RSJGG'
    },
]
const AdditionalDetail = [
    {
        head: 'Manufacturer',
        name: 'Atomberg Technologies, Atomberg Technologies Pvt Ltd,Mind Space Shelters LLP/ Vithai Developers LLP, Gat No. 51-59, Village Bhamboli, Chakan, Pune, Maharashtra-410507. Customer Care: support@atomberg.com/08448449442'
    },
    {
        head: 'Packer',
        name: 'Atomberg Technologies Pvt Ltd,Mind Space Shelters LLP/ Vithai Developers LLP, Gat No. 51-59, Village Bhamboli, Chakan, Pune, Maharashtra-410507. Customer Care: support@atomberg.com/08448449442'
    },
    {
        head: 'Importer',
        name: '	Atomberg Technologies Pvt Ltd,Mind Space Shelters LLP/ Vithai Developers LLP, Gat No. 51-59, Village Bhamboli, Chakan, Pune, Maharashtra-410507. Customer Care: support@atomberg.com/08448449442'
    },
    {
        head: 'Item Weight',
        name: '	5 kg 100 g'
    },
    {
        head: 'Net Quantity',
        name: '1 Count'
    },
    {
        head: 'Included Components	',
        name: '1 Blade set, 1 remote,1 motor box, 2 canopies, 1 downrod, 1 shackle kit and warranty card'
    },
    {
        head: 'Generic Name	',
        name: 'Ceiling Fan'
    },
    {
        head: 'Best Sellers Rank',
        name: '#13,174 in Home & Kitchen (See Top 100 in Home & Kitchen) #76 in Ceiling Fans'
    },
]

const ProductDetails = () => {
    return (
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
                            <img src={Fan} alt='Fan' />
                        </div>
                        <div className='mb-[30px]'>
                            <h2 className='text-[#3e337c] font-bold lg:text-[36px] sm:text-[30px] text-[26px]'>Atomberg Efficio Ceiling Fan</h2>
                            <p className='text-[#3e337c] sm:text-[16px] text-[14px] font-medium mt-3'>Atomberg Efficio Energy Efficient Ceiling Fan with BLDC Motor and Remote</p>
                            <div className='flex items-start mt-[20px]'>
                                <h3 className='line-through text-[#7b7492] font-semibold text-[26px]'>₹5,190</h3>
                                <div className='ml-[20px]'>
                                    <h3 className='text-[#3e337c] font-bold text-[26px]'>₹3,299</h3>
                                    <p className='text-[#3e337c] text-[10px]'>Inclusive of all taxes</p>
                                </div>
                                <h3 className='text-[#fdb913] font-semibold ml-[20px] text-[20px]'>-36%</h3>
                            </div>
                            <p className='flex text-[16px] text-[#3e337c] font-medium mt-3'><span className='font-bold block mr-2'>Color -</span> White</p>
                            <div className='mt-2 flex items-center gap-3'>
                                <button className='border-[#e2ddff] border-[1px] p-[6px] rounded-[4px]'>
                                    <div className='w-[26px] h-[26px] bg-[#000] rounded-[4px] border-[#e2ddff] border-[1px]' />
                                </button>
                                <button className='border-[#e2ddff] border-[1px] p-[6px] rounded-[4px] shadow-[0_2px_6px_1px_#3e337c30]'>
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
                                <p className='font-bold text-[#3e337c]'>285 in stock</p>
                            </div>
                            <div className='flex gap-[20px] mt-[30px] sm:flex-nowrap flex-wrap'>
                                <button className='bg-[#3e337c] text-[#f8f6ff] rounded-[30px] p-[10px_20px] uppercase font-semibold w-full'>Buy Now</button>
                                <button className='bg-[#c6c0db] text-[#f8f6ff] rounded-[30px] p-[10px_20px] uppercase font-semibold w-full'>Add to Cart</button>
                            </div>
                            <div className='flex gap-[20px] mt-[10px] sm:flex-nowrap flex-wrap'>
                                <button className='text-[#3e337c] rounded-[30px] p-[10px_20px] uppercase font-semibold w-full'>Add to compare</button>
                                <button className='text-[#3e337c] rounded-[30px] p-[10px_20px] uppercase font-semibold w-full'>FAN BUYING GUIDE</button>
                            </div>
                            <div className='flex items-center gap-[32px] mt-8 flex-wrap'>
                                <img src={Shipping} alt='Shipping' className='w-[100px]' />
                                <img src={Warranty} alt='Warranty' className='w-[100px]' />
                                <img src={Return} alt='Return' className='w-[100px]' />
                                <img src={Delivery} alt='Delivery' className='w-[100px]' />
                            </div>
                            <div className='sweep-main flex items-center justify-between mt-[20px] sm:flex-nowrap flex-wrap gap-[10px]'>
                                <input type='number' placeholder='Pincode' className='border-[#e2ddff] border-[1px] rounded-3xl p-[8px_12px] outline-none text-[14px]' />
                                <button className='bg-[#3e337c] text-[#f8f6ff] rounded-[30px] p-[9px_20px] text-[14px]'>Check Delivery time</button>
                            </div>
                        </div>
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
                                    {TechnicalDetail.map((data, i) =>
                                        <tr key={i}>
                                            <th className='bg-[#827e9d] text-[#fff] font-normal border-y-[#938ea1] border-y-[1px] p-[7px_14px_6px] text-left 2xl:text-[14px] text-[12px]'>{data.head}</th>
                                            <td className='border-y-[#938ea1] text-[#fff] font-normal border-y-[1px] p-[7px_14px_6px] text-left 2xl:text-[14px] text-[12px]'>{data.name}</td>
                                        </tr>
                                    )}
                                </table>
                            </div>
                        </div>
                        <div className='overflow-auto'>
                            <h1 className='text-[#fff] font-medium text-[18px]'>Additional Information</h1>
                            <div className='mt-[20px]'>
                                <table className='w-full'>
                                    {AdditionalDetail.map((data, i) =>
                                        <tr key={i}>
                                            <th className='bg-[#827e9d] text-[#fff] font-normal border-y-[#938ea1] border-y-[1px] p-[7px_14px_6px] text-left 2xl:text-[14px] text-[12px]'>{data.head}</th>
                                            <td className='border-y-[#938ea1] text-[#fff] font-normal border-y-[1px] p-[7px_14px_6px] text-left 2xl:text-[14px] text-[12px]'>{data.name}</td>
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
                    <h1 className='text-[#fff] font-semibold text-lg md:text-[22px] lg:text-[24px] text-center'>WHY SHOULD YOU BUY FROM THE ATOMBERG WEBSITE ?</h1>
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
        </div>
    )
}

export default ProductDetails