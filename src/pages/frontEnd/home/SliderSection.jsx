import BannerImg from "../../../assets/banner-img .png";
import BannerImg2 from "../../../assets/banner-img2.png";
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
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Set interval time (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="bg-[#F6F9FC]">
        <div className="container mx-auto p-4 pt-[50px] pb-[120px] grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="w-full">
            <h3 className="text-4xl md:text-6xl lg:text-8xl font-bold">
              Fashionable <br />
              <span className="text-yellow-800">Collection</span>
            </h3>
            <p className="text-lg md:text-xl">
              Get free shipping on all orders over $99.00
            </p>
            <Link className="bg-red-500 text-white rounded py-2 px-4 md:py-3 md:px-6 inline-block mt-4">
              Shop Now
            </Link>
          </div>

          <div className="w-full text-center mt-[50px]">
            <img
              className="max-w-full md:max-w-[460px] mx-auto"
              src={BannerImg}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F6F9FC]">
        <div className="container mx-auto p-4 pt-[50px] pb-[120px] grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="w-full">
            <h3 className="text-4xl md:text-6xl lg:text-8xl font-bold">
              Fashionable <br />
              <span className="text-yellow-800">Collection</span>
            </h3>
            <p className="text-lg md:text-xl">
              Get free shipping on all orders over $99.00
            </p>
            <Link className="bg-red-500 text-white rounded py-2 px-4 md:py-3 md:px-6 inline-block mt-4">
              Shop Now
            </Link>
          </div>

          <div className="w-full text-center mt-[50px]">
            <img
              className="max-w-full md:max-w-[460px] mx-auto"
              src={BannerImg2}
              alt=""
            />
          </div>
        </div>
      </div>
    </Slider>
  );
}
