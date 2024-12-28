export default function CategoryItem({ category }) {
    const { categoryImageUrl, categoryName } = category;

    return (
        <div className="border bg-white mx-3 cursor-pointer sm:mx-2 lg:mx-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
            {/* Image Container */}
            <div className="w-full text-center h-[120px] mt-3 sm:h-[150px] md:h-[180px]">
                <img
                    className="max-w-[120px] sm:max-w-[140px] md:max-w-[160px] mx-auto"
                    src={categoryImageUrl}
                    alt={categoryName}
                />
            </div>

            {/* Category Name */}
            <h4 className="border-t mt-2 text-lg sm:text-xl md:text-2xl py-2 text-center font-semibold">
                {categoryName}
            </h4>
        </div>
    );
}
