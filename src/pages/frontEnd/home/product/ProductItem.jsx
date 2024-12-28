/* eslint-disable react/prop-types */

import Popup from "./Popup";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { setProductToCart } from "../../../../database/firebaseUtils";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function ProductItem({ product, onFavorite }) {
  const { user } = useSelector((store) => store.auth);
  const { carts } = useSelector((store) => store.carts);

  const {
    id,
    productName,
    productPrice,
    productCategory,
    productImageUrl,
    isFavorite,
    rating = 4, // Default rating if not available
  } = product;

  const activeCart = carts.find((cart) => cart.productId == id);

  const [isPopup, setIsPopup] = useState(false);

  const navigate = useNavigate();

  const closeHandler = (e) => {
    e.stopPropagation();
    setIsPopup(false);
  };

  const handleClick = (e, id) => {
    e.stopPropagation();
    navigate(`/single-product/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (user) {
      setProductToCart({
        userId: user.id,
        productId: id,
        quantity: 1,
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      className="border bg-white p-4 rounded-lg text-center  shadow-md hover:shadow-lg transition-shadow duration-300"
      onClick={() => setIsPopup(true)}
    >
      <img
        className="w-full h-[160px] sm:h-[200px] lg:h-[250px] object-cover rounded-t-md"
        src={productImageUrl}
        alt={productName}
      />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full p-2">
        <div className="w-full">
          <h3
            onClick={(e) => handleClick(e, id)}
            className="font-bold text-lg cursor-pointer hover:text-red-600 transition-colors duration-300"
          >
            {productName}
          </h3>
          <span className="text-sm text-gray-500 block mb-1">
            {productCategory}
          </span>
          <p className="text-red-600 font-semibold text-lg">
            ${productPrice.toFixed(2)}
          </p>

          {/* Rating Section */}
          <div className="flex mb-4 mt-3 gap-1">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <span key={index}>
                  {index < rating ? (
                    <AiFillStar className="text-yellow-500" />
                  ) : (
                    <AiOutlineStar className="text-gray-400" />
                  )}
                </span>
              ))}
          </div>
        </div>

        <div className="mt-3 sm:mt-0 flex flex-col items-center">
          {!isFavorite ? (
            <svg
              onClick={() => onFavorite(id)}
              className="cursor-pointer w-6 h-6 text-red-600 dark:text-white hover:scale-110 transition-transform"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => onFavorite(id)}
              className="cursor-pointer w-6 h-6 text-red-600 dark:text-white hover:scale-110 transition-transform"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
            </svg>
          )}

          <button
            onClick={handleAddToCart}
            disabled={activeCart ? true : false}
            className="bg-red-600 rounded text-white py-2 px-2 mt-2 disabled:bg-red-200 hover:bg-red-700 transition-colors"
          >
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
          </button>
        </div>
      </div>

      {isPopup && (
        <Popup
          onClose={closeHandler}
          onFavorite={() => onFavorite(id)}
          product={product}
        />
      )}
    </div>
  );
}
