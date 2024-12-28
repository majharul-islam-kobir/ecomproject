import Slider from "react-slick";
import car from "../../../assets/car.png";
import cart from "../../../assets/cart.png";
import clock from "../../../assets/clock.png";
import bank from "../../../assets/bank.png";
import support from "../../../assets/support.png";

export default function Facilities() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280, // Large screens (>=1280px)
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1024, // Medium screens (>=1024px)
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768, // Small screens (>=768px)
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640, // Extra small screens (<640px)
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="py-8 container  mx-auto">
            <Slider {...settings}>
                <div className="p-4 border w-[200px]  h-[100px]  rounded-md">
                    <div className="flex items-center">
                        <img src={car} alt="Fast Delivery" className="w-10 h-10" />
                        <div className="ml-3">
                            <h4 className="text-lg font-bold">Fast Delivery</h4>
                            <h4 className="text-[#7D879C] text-sm">Start from $10</h4>
                            <span className="text-[#7D879C] text-sm">All time</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 border w-[200px] h-[100px]  rounded-md">
                    <div className="flex items-center">
                        <img src={cart} alt="Secure Cart" className="w-10 h-10" />
                        <div className="ml-3">
                        <h4 className="text-lg font-bold">Protected Cart</h4>
                            <span className="text-[#7D879C] text-sm">Keep items safe</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 border w-[200px] h-[100px]  rounded-md">
                    <div className="flex items-center">
                        <img src={clock} alt="24/7 Service" className="w-10 h-10" />
                        <div className="ml-3">
                            <h4 className="text-lg font-bold">24/7 Service</h4>
                            <span className="text-[#7D879C] text-sm">We’re here anytime</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 border w-[200px] h-[100px]  rounded-md">
                    <div className="flex items-center">
                        <img src={bank} alt="Secure Payment" className="w-10 h-10" />
                        <div className="ml-3">
                            <h4 className="text-lg font-bold">Secure Payment</h4>
                            <span className="text-[#7D879C] text-sm">100% protected</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 border w-[200px] h-[100px]  rounded-md">
                    <div className="flex items-center">
                        <img src={support} alt="Customer Support" className="w-10 h-10" />
                        <div className="ml-3">
                            <h4 className="text-lg font-bold">Customer Support</h4>
                            <span className="text-[#7D879C] text-sm">24/7 assistance</span>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
