import BannerImg from "../../../assets/banner-img .png";
import { Link } from "react-router";
import Slider from "react-slick";

export default function SliderSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // For screens <= 1024px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // For screens <= 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true, // Add dots for smaller screens
                },
            },
            {
                breakpoint: 480, // For screens <= 480px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true, // Show arrows for better navigation
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div className="bg-[#F6F9FC]">
                <div className="container m-auto pt-[50px] pb-[120px] grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="w-full">
                        <h3 className="text-4xl md:text-8xl font-bold">
                            Fashionable <br />{" "}
                            <span className="text-yellow-800">Collection</span>
                        </h3>
                        <p className="text-lg md:text-xl">
                            Get free shipping on all orders over $99.00
                        </p>
                        <Link className="bg-red-500 text-white rounded py-2 px-4 md:py-3 md:px-6 inline-block mt-4">
                            Shop Now
                        </Link>
                    </div>

                    <div className="w-full text-center">
                        <img className="max-w-[300px] md:max-w-[460px]" src={BannerImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-[#F6F9FC]">
                <div className="container m-auto pt-[80px] pb-[120px] grid grid-cols-1 md:grid-cols-2">
                    <div className="w-full md:w-6/12">
                        <h3 className="text-3xl md:text-6xl font-bold">
                            Fashionable <br /> Collection
                        </h3>
                        <p className="text-lg md:text-xl">
                            Get free shipping on all orders over $99.00
                        </p>
                        <Link className="bg-red-500 text-white rounded py-2 px-4 md:py-3 md:px-6 inline-block mt-4">
                            Shop Now
                        </Link>
                    </div>

                    <div className="w-full md:w-6/12">
                        <img className="max-w-[300px] md:max-w-full" src={BannerImg} alt="" />
                    </div>
                </div>
            </div>
        </Slider>
    );
}
