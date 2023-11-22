import React from 'react';
import { IoMdStar } from "react-icons/io";
import Slider from "react-slick";
import User1 from '../../Assets/Images/ReviewImages/user1.jpg';
import User2 from '../../Assets/Images/ReviewImages/user2.jpg';
import User3 from '../../Assets/Images/ReviewImages/user3.jpg';
import User4 from '../../Assets/Images/ReviewImages/user4.jpg';

const ReviewData = [
    {
        img: User1,
        user: 'Marry Doe',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'
    },
    {
        img: User3,
        user: 'John Doe',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'
    },
    {
        img: User2,
        user: 'Alice Smith',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'
    },
    {
        img: User4,
        user: 'Bharat Kunal',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'
    },
]


const ReviewadRatings = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className=' bg-[#a9a4ba] py-[60px] review-main'>
            <div className="max-w-[1300px] mx-auto px-[20px]">
                <div>
                    <h3 className='text-[#3e337c] font-semibold text-lg md:text-[22px] lg:text-[24px] text-center'>REVIEWS AND RATINGS</h3>
                    <p className='text-[#3e337c] text-[14px] mt-[20px] text-center max-w-[800px] mx-auto'>More than 90% of our customers who have bought MDNproducts have loved them. Do take a look at what some of them have to say:</p>
                    <h2 className='text-[#3e337c] text-[50px] font-bold text-center mt-[20px]'>4.8<span className='text-[28px]'>/5</span></h2>
                    <div className='flex items-center justify-center gap-[2px]'>
                        <IoMdStar className='text-[#f2bb44] text-[20px]' />
                        <IoMdStar className='text-[#f2bb44] text-[20px]' />
                        <IoMdStar className='text-[#f2bb44] text-[20px]' />
                        <IoMdStar className='text-[#f2bb44] text-[20px]' />
                        <IoMdStar className='text-[#f2bb44] text-[20px]' />
                    </div>
                    <p className='text-center text-[14px] text-[#3e337c] mt-3 font-medium'>10394 Reviews</p>
                    <p className='text-center text-[14px] font-bold italic text-[#675e89] mt-2'>Updated on monthly basis</p>
                </div>
                <div className='mt-[40px]'>
                    <Slider {...settings}>
                        {ReviewData.map((data, key) =>
                            <div className='bg-white rounded-md lg:p-[40px_30px] p-[30px_15px]'>
                                <div className='flex justify-center'>
                                    <img src={data.img} alt='User1' className='lg:w-[140px] w-[120px] lg:h-[140px] h-[120px] rounded-full border-[4px] border-[#0000002b]' />
                                </div>
                                <h1 className='text-center text-[22px] text-[#3e337c] font-bold mt-[20px]'>{data.user}</h1>
                                <div className='flex items-center justify-center mt-2'>
                                    <IoMdStar className='text-[20px] text-[#f2bb44]' />
                                    <IoMdStar className='text-[20px] text-[#f2bb44]' />
                                    <IoMdStar className='text-[20px] text-[#f2bb44]' />
                                    <IoMdStar className='text-[20px] text-[#f2bb44]' />
                                    <IoMdStar className='text-[20px] text-[#f2bb44]' />
                                </div>
                                <p className='text-center sm:text-[14px] text-[12px] mt-[20px] text-[#3e337c] font-medium sm:leading-[25px] leading-[20px]'>{data.para}</p>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ReviewadRatings