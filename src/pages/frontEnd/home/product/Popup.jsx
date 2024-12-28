import { FaTimes, FaHeart, FaShoppingCart } from 'react-icons/fa';

export default function Popup({ product, onClose, onFavorite }) {
    const {
        productImageUrl,
        productCategory,
        productName,
        productPrice,
        isFavorite,
    } = product;

    return (
        <div className="w-full h-screen bg-black/60 fixed top-0 left-0 z-9">
            <div className="max-w-screen-md p-6 bg-white border w-full mx-auto mt-[100px] flex gap-3 items-center relative">
                <div
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={onClose}
                >
                    {/* Using FaTimes from react-icons */}
                    <FaTimes className="w-9 h-9 text-gray-800 " />
                </div>
                <div className="w-1/2">
                    <img
                        className="w-full object-cover"
                        src={productImageUrl}
                        alt={productName}
                    />
                </div>
                <div className="w-1/2">
                    <h2 className="text-3xl font-semibold">{productName}</h2>
                    <span className="text-red-600 text-sm">
                        {productCategory}
                    </span>
                    <p className="mt-3">Price: {productPrice}</p>

                    <div className="flex items-center mt-2">
                        {/* Favorite Icon */}
                        {!isFavorite ? (
                            <FaHeart
                                onClick={() => onFavorite()}
                                className="cursor-pointer w-6 h-6 text-red-600 dark:text-white"
                            />
                        ) : (
                            <FaHeart
                                onClick={() => onFavorite()}
                                className="cursor-pointer w-6 h-6 text-red-600 dark:text-white fill-current"
                            />
                        )}

                        <button
                            disabled={true}
                            className="bg-red-600 rounded text-white py-2 px-2 inline-block ml-3 disabled:bg-red-200"
                        >
                            {/* Shopping Cart Icon */}
                            <FaShoppingCart className="w-6 h-6 text-white dark:text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
