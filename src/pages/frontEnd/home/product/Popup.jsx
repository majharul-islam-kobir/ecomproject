import { FaTimes, FaHeart, FaShoppingCart } from "react-icons/fa";

export default function Popup({
  product,
  onClose,
  onFavorite,
  onAddToCart,
  activeCart, // Receiving activeCart from ProductItem
}) {
  const {
    id,
    productImageUrl,
    productCategory,
    productName,
    productPrice,
    isFavorite,
    rating = 4, // Default rating if not available
  } = product;

  return (
    <div className="w-full bg-black/60 fixed top-0 left-0 z-10 mt-[100px]">
      <div className="max-w-screen-md p-6 bg-white border w-full mx-auto mt-[100px] flex gap-3 items-center relative">
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        >
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
          <span className="text-red-600 text-sm">{productCategory}</span>
          <p className="mt-3">Price: ${productPrice.toFixed(2)}</p>

          <div className="flex items-center justify-center  mt-2">
            <FaHeart
              onClick={() => onFavorite()}
              className={`cursor-pointer w-10 h-10 mr-4 ${
                isFavorite
                  ? "text-red-600 fill-current"
                  : "text-red-600 dark:text-white"
              }`}
            />
            <button
              onClick={(e) => onAddToCart(e, id)}
              disabled={activeCart ? true : false} // Use activeCart here
              className="bg-red-600 rounded text-white py-2 px-2 disabled:bg-red-200 hover:bg-red-700 transition-colors"
            >
              <FaShoppingCart className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
