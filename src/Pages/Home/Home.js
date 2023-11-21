import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FanImage from "../../Assets/Images/SliderImages/fanImage.webp";
import Mixer from "../../Assets/Images/SliderImages/mixer.webp";
// import DoorLock from "../../Assets/Images/SliderImages/doorlock.webp";
import MordenFan from "../../Assets/Images/SliderImages/mordenFan.webp";
import Fan from "../../Assets/Images/ceiling-fan.png";
import MixerGrinder from "../../Assets/Images/blender.png";
import Lock from "../../Assets/Images/smart-door.png";
import LogoMDN from "../../Assets/Images/logoMDN.png";
import fan3 from "../../Assets/Images/FansImages/fan3.jpg";
import fan4 from "../../Assets/Images/FansImages/fan4.jpg";
import fan5 from "../../Assets/Images/FansImages/fan5.jpg";
import homedesk from "../../Assets/Images/FansImages/homedesk.png";
import homedesk2 from "../../Assets/Images/FansImages/homedesk2.jpg";
import Slider from "react-slick";

const ImageData = [
    { img: FanImage },
    { img: Mixer },
    // { img: DoorLock },
    { img: MordenFan },
];

const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000
    };
    return (
        <div>
            <Header />
            <Slider {...settings}>
                {ImageData.map((data, i) => (
                    <div className="outline-none">
                        <img src={data.img} alt="FanImage" />
                    </div>
                ))}
            </Slider>
            {/* <div className="bg-[#a9a4ba]">
                <div className="max-w-[1300px] mx-auto px-[20px]">
                    <div className="flex sm:flex-row flex-col gap-[40px] md:gap-[120px] justify-center items-center p-[40px_0] mt-[-8px]">
                        <div className="flex flex-col justify-between">
                            <img src={Fan} alt="Fan" className="w-[120px]" />
                            <p className="mt-2 text-[18px] text-[#f7f4ff] font-semibold text-center">
                                FAN
                            </p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <img
                                src={MixerGrinder}
                                alt="MixerGrinder"
                                className="w-[120px]"
                            />
                            <p className="mt-2 text-[18px] text-[#f7f4ff] font-semibold text-center">
                                MIXER GRINDER
                            </p>
                        </div>
                        <div className="text-center flex flex-col justify-between items-center h-[146px]">
                            <img src={Lock} alt="Lock" className="w-[90px]" />
                            <p className="mt-2 text-[18px] text-[#f7f4ff] font-semibold text-center">
                                SMART LOCK
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="bg-[#7b7492] mt-[-8px]">
                <div className="max-w-[1300px] mx-auto px-[20px] pt-[40px]">
                    <h2 className="text-[#f7f4ff] font-semibold text-lg md:text-[22px] lg:text-[24px] text-center">
                        ABOUT ATOMBERG
                    </h2>
                    <img
                        src={LogoMDN}
                        alt="LogoMDN"
                        className="max-w-[160px] mx-auto my-[30px] lg:my-[60px]"
                    />
                    <div className="bg-[#c6c0db] rounded-[60px_60px_0_0] max-w-[700px] mx-auto p-[20px] lg:p-[40px] text-center">
                        <p className="text-[#3e337c] font-medium">
                            At Atomberg, every innovation begins with questions. The right
                            questions. What comforts do our customers look for in their busy
                            day? How can we make the day easier for them? Such questions help us
                            focus on the things that really matter. Things like the latest
                            technology, innovation and sustainability.
                        </p>
                        <button className="bg-[#3e337c] text-[#f8f6ff] rounded-[30px] p-[8px_20px] mt-[20px]">
                            Know more
                        </button>
                    </div>
                </div>
            </div>
            <div className="pt-[40px] bg-[#a9a4ba]">
                <h2 className="text-[#3e337c] font-semibold text-lg md:text-[22px] lg:text-[24px] text-center mb-5">
                    ATOMBERG'S TOP PRODUCT
                </h2>
                <div className="flex md:flex-row flex-col items-center">
                    <div className="bg-[#c6c0db] md:w-1/2 rounded-tr-[80px] md:order-1 order-2">
                        <div className="md:max-w-[500px] ml-auto p-[40px]">
                            <h3 className="text-base md:text-[18px] lg:text-[22px] text-[#3e337c] font-semibold mb-2">
                                CEILING FAN
                            </h3>
                            <p className="text-[#3e337c]">
                                In answer to your questions, along with a sleek, sophisticated
                                design, this fan runs 3 times longer on an inverter battery and
                                helps you save *1500 per year, thanks to an energy-efficient
                                BLDC motor.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <img src={fan3} alt="" />
                    </div>
                </div>
                <div className="flex md:flex-row flex-col items-end justify-center lg:gap-5 pb-7">
                    <div className="md:w-1/2 flex flex-col md:flex-row items-center md:items-end order-2 md:order-1">
                        <img src={fan4} alt="" className="md:w-[70%]" />
                        <button className="bg-[#3e337c] text-[#f8f6ff] rounded-[30px] p-[8px_20px] mt-[20px]">
                            Know more
                        </button>
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2">
                        <img src={fan5} alt="" />
                        <div className="bg-[#c6c0db] rounded-tl-[80px]">
                            <div className="md:max-w-[450px] p-[40px]">
                                <h3 className="font-semibold text-base md:text-[18px] lg:text-[22px] text-[#3e337c] mb-2">
                                    Why not
                                    <span className="font-normal"> be in total control?</span>
                                </h3>
                                <p className="text-[#3e337c]">
                                    In answer to your questions, along with a sleek, sophisticated
                                    design, this fan runs 3 times longer on an inverter battery
                                    and helps you save *1500 per year, thanks to an
                                    energy-efficient BLDC motor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex md:flex-row flex-col items-center">
                    <div className="bg-[#c6c0db] w-full md:w-1/2 rounded-tr-[80px]">
                        <div className="md:max-w-[420px] ml-auto p-[40px]">
                            <h3 className="text-base md:text-[18px] lg:text-[22px] text-[#3e337c] font-semibold">
                                MIXER GRINDER
                            </h3>
                            <span className="text-[#c4403e] font-medium">Atomberg MG1</span>
                            <p className="text-[#3e337c]">
                                Why not get India's first Mixer Grinder with Inverter
                                Technology?
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={homedesk} alt="" className="pt-[20px] md:pt-[100px] lg:pt-[24px]" />
                    </div>
                </div> */}
                {/* <div className="flex md:flex-row flex-col items-end justify-center gap3 lg:gap-5">
                    <div className="md:w-1/2 pb-[60px]">
                        <img src={homedesk2} alt="" />
                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-[#c6c0db] rounded-tl-[80px]">
                            <div className="md:max-w-[450px] p-[40px]">
                                <p className="text-[#3e337c]">
                                    In answer to your questions, along with a sleek, sophisticated
                                    design, this fan runs 3 times longer on an inverter battery
                                    and helps you save *1500 per year, thanks to an
                                    energy-efficient BLDC motor.
                                </p>
                                <button className="bg-[#3e337c] text-[#f8f6ff] rounded-[30px] p-[8px_20px] mt-[20px]">
                                    Know more
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
