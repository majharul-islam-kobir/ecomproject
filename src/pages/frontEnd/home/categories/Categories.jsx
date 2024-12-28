import Slider from "react-slick";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

export default function Categories() {
    const { categories } = useSelector((store) => store.categories);

    // ব্রাউজারের স্ক্রিন রেসপন্স অনুযায়ী সেটিংস
    const settings = {
        dots: false,
        infinite: categories.length > 4, // কন্টেন্ট যদি ৪টির বেশি হয় তাহলে লুপ চালু
        speed: 500,
        slidesToScroll: 1,
        arrows: false,
        slidesToShow: Math.min(categories.length, 4), // ডিফল্টে সর্বোচ্চ ৪টি স্লাইড
        responsive: [
            {
                breakpoint: 1280, // Large screens (>=1280px)
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024, // Medium screens (>=1024px)
                settings: {
                    slidesToShow:3, // সর্বোচ্চ ৩টি স্লাইড
                },
            },
            {
                breakpoint: 768, // Small screens (>=768px)
                settings: {
                    slidesToShow:  2, // সর্বোচ্চ ২টি স্লাইড
                },
            },
            {
                breakpoint: 640, // Extra small screens (<640px)
                settings: {
                    slidesToShow:  2, // সর্বোচ্চ ২টি স্লাইড
                },
            },
        ],
    };

    return (
        <div className="py-8 container mx-auto">
            <Slider {...settings}>
                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))}
            </Slider>
        </div>
    );
}
