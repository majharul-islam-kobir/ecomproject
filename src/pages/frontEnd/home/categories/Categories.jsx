import Slider from "react-slick";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

export default function Categories() {
    const { categories = [], loading } = useSelector((store) => store.categories); 

    // ব্রাউজারের স্ক্রিন রেসপন্স অনুযায়ী সেটিংস
    const settings = {
        dots: false,
        infinite: categories.length > 4, // কন্টেন্ট যদি ৪টির বেশি হয় তাহলে লুপ চালু
        speed: 500,
        slidesToScroll: 1,
        arrows: false,
        slidesToShow: categories.length ? Math.min(categories.length, 4) : 1, // ডিফল্টে সর্বোচ্চ ৪টি স্লাইড, ফাঁকা হলে ১
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: Math.min(categories.length, 4), // সর্বোচ্চ ৪টি স্লাইড
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(categories.length, 3), // সর্বোচ্চ ৩টি স্লাইড
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(categories.length, 2), // সর্বোচ্চ ২টি স্লাইড
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: Math.min(categories.length, 2), // সর্বোচ্চ ২টি স্লাইড
                },
            },
        ],
    };

    if (loading) {
        return <p>Loading...</p>; // লোডিং হলে মেসেজ দেখাও
    }

    return (
        <div className="py-8 container mx-auto">
            {categories.length > 0 ? ( // যদি categories খালি না হয়
                <Slider {...settings}>
                    {categories.map((category) => (
                        <CategoryItem key={category.id} category={category} />
                    ))}
                </Slider>
            ) : (
                <p>No categories available.</p> // ফাঁকা হলে একটি বার্তা দেখাও
            )}
        </div>
    );
}
