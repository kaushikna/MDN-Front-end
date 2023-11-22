import React from 'react';
import Slider from "react-slick";
import Image1 from '../../Assets/Images/AboutImages/image1.jpg';
import Image2 from '../../Assets/Images/AboutImages/image2.jpg';
import Image3 from '../../Assets/Images/AboutImages/image3.jpg';
import Image4 from '../../Assets/Images/AboutImages/image4.jpg';
import Image5 from '../../Assets/Images/AboutImages/image5.jpg';
import Image6 from '../../Assets/Images/AboutImages/image6.jpg';
import Image7 from '../../Assets/Images/AboutImages/image7.jpg';
import Image8 from '../../Assets/Images/AboutImages/image8.jpg';
import Image9 from '../../Assets/Images/AboutImages/image9.jpg';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const SliderData = [
    {
        Img: Image1,
        ImgSecond: Image2,
        ImgThird: Image5,
    },
    {
        Img: Image4,
        ImgSecond: Image3,
        ImgThird: Image6,
    },
    {
        Img: Image7,
        ImgSecond: Image8,
        ImgThird: Image9,
    },
]

const community = [
    {
        name: '1 factory 3 corporate offices',
    },
    {
        name: 'A team (we call them family) of 250',
    },
    {
        name: '3000+ retail partners A91 and IDFC as backers',
    },
    {
        name: '1 million happy homes with MDNfans.',
    }
]

const AboutUs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Header />
            <div>
                <div className='aboutimg  h-full !bg-center'>
                    <div className='bg-[#000000a3]'>
                        <div className='max-w-[1300px] mx-auto px-[20px]'>
                            <h2 className='lg:text-[40px] sm:text-[34px] text-[30px] text-white font-bold xl:p-[260px_0] sm:p-[160px_0] p-[100px_0]'>ABOUT US</h2>
                        </div>
                    </div>
                </div>
                <div className='bg-[#f8f6ff]'>
                    <div className='max-w-[1300px] mx-auto px-[20px]'>
                        <div className='grid sm:grid-cols-2 gap-[30px] p-[50px_0]'>
                            <div>
                                <p className='text-[#3e337c] font-medium sm:text-[16px] text-[14px] mb-[24px] leading-[28px] '>MDNis in the business of revolutionizing India's home appliances, by solving one problem at a time.</p>
                                <p className='text-[#3e337c] font-medium sm:text-[16px] text-[14px] leading-[28px] '>Our secret weapon? Asking the right questions. Pointed questions about how we can make our customers' daily lives easier. Questions that require granular answers and thoughtful product design.</p>
                            </div>
                            <div>
                                <p className='text-[#3e337c] font-medium sm:text-[16px] text-[14px] mb-[24px] leading-[28px] '>Every household appliance we create blends mindful design, energy-efficiency and next-gen smart tech.</p>
                                <p className='text-[#3e337c] font-medium sm:text-[16px] text-[14px] leading-[28px] '>We're relentless innovators. We're startup energy blended with big dreams. We think, dream and obsess over customer experience. We are atomberg.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#f1edff] rounded-[0_0_50px_50px] lg:pb-[100px] pb-[70px]'>
                    <div className='max-w-[1300px] mx-auto px-[20px]'>
                        <div className='grid sm:grid-cols-2 gap-[30px] p-[50px_0]'>
                            <div>
                                <p className='text-[#3e337c] font-medium sm:text-[16px] text-[14px] mb-[24px] leading-[28px] '>MDNTechnologies origin story begins with two IIT-Bombay graduates:Manoj Meena and Sibabrata Das, and some serious hi-tech.</p>
                                <p className='text-[#3e337c] font-medium sm:text-[16px] text-[14px] leading-[28px] '>The first few years were a blur of high-end technical products that went to prestigious clients like the Defense Research and Development Organisation, Bhabha Atomic Research Center and IIT-Bombay.</p>
                            </div>
                            <div>
                                <p className='text-[#3e337c] font-medium sm:text-[16px] text-[14px] mb-[24px] leading-[28px] '>Then the questions bug bit us. We started questioning why the average Indian had to struggle with outdated home appliances. Or why technology was making rapid strides everywhere else, but home appliance tech hadn’t changed in decades.</p>
                                <p className='text-[#3e337c] font-medium sm:text-[16px] text-[14px] leading-[28px] '>We decided to use our wealth of expertise to build meaningful, scalable and impactful products for every Indian home.</p>
                            </div>
                        </div>
                        <Slider {...settings}>
                            {SliderData.map((val, i) =>
                                <>
                                    <div key={i} className='!flex'>
                                        <img src={val.Img} alt='Img' className='sm:w-[33.33%] w-full lg:h-[300px] sm:h-[250px] h-[300px] object-cover' />
                                        <img src={val.ImgSecond} alt='Img' className='sm:w-[33.33%] w-full lg:h-[300px] sm:h-[250px] h-[300px] object-cover sm:!block !hidden' />
                                        <img src={val.ImgThird} alt='Img' className='sm:w-[33.33%] w-full lg:h-[300px] sm:h-[250px] h-[300px] object-cover sm:!block !hidden' />
                                    </div>
                                </>
                            )}
                        </Slider>
                    </div>
                </div>
                <div className='my-[60px]'>
                    <h1 className='text-[#3e337c] font-semibold sm:text-[28px] text-[20px] text-center mb-[50px]'>OUR COMMUNITY</h1>
                    <div className='max-w-[1300px] mx-auto px-[20px]'>
                        <div className='grid md:grid-cols-4 grid-cols-2 gap-4 gap-y-[30px]'>
                            {community.map((data, i) =>
                                <div key={i}>
                                    <div className='lg:w-[150px] md:w-[120px] w-[100px] lg:h-[150px] md:h-[120px] h-[100px] bg-[#3e337c] rounded-full mx-auto'></div>
                                    <h3 className='text-[#3e337c] lg:text-[16px] md:text-[14px] text-[12px] lg:max-w-[180px] max-w-[150px] mx-auto text-center font-medium mt-[20px]'>{data.name}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs