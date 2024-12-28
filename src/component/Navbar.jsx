import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const { carts = [] } = useSelector((store) => store.carts); // Default carts = []
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white">
      {/* Top Section */}
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex items-center space-x-4">
          <p className="text-sm">+88012 3456 7894</p>
          <p className="text-sm">support@ui-lib.com</p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-sm hover:underline"
          >
            Theme FAQ's
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-sm hover:underline"
          >
            Need Help?
          </a>
        </div>
      </div>

      {/* Main Navbar Section */}
      <div className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1
              onClick={() => navigate("/")}
              className="text-red-500 font-bold text-lg cursor-pointer"
            >
              divineshop
            </h1>
          </div>

          {/* Search Box */}
          <div className="flex-grow mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search and hit enter..."
                className="w-full  border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className=" absolute top-0 right-0 h-full text-xs border-l border-gray-300 text-black px-4  z-10">
                <option>All Categories</option>
                <option>Category 1</option>
                <option>Category 2</option>
              </select>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              className="text-gray-700 hover:text-black"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 text-black">
            {[
              "Home",
              "Pages",
              "User Account",
              "Vendor Account",
              "Track My Orders",
              "Back to Demos",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-sm hover:underline"
              >
                {item}
              </a>
            ))}
            {/* User Icon */}
          </div>

          <button
              aria-label="User Account"
              className="relative text-gray-700 hover:text-black "
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
            {/* Cart Icon */}
            {/* Cart Icon */}
            <button
              onClick={() => navigate("/cart-details")}
              className="relative text-gray-700 hover:text-black sm:p-2 p-3 rounded-full"
              aria-label="Cart"
            >
              <svg
                className="w-8 h-8 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
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
              <span className="absolute top-[-5px] right-[-5px] bg-red-500 mt-4 text-white text-[10px] font-bold rounded-full px-1 py-0.5">
                {carts.length}
              </span>
            </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-gray-100 py-4 text-black">
            <div className="flex flex-col items-center space-y-4">
              {[
                "Home",
                "Pages",
                "User Account",
                "Vendor Account",
                "Track My Orders",
                "Back to Demos",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-sm hover:underline"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
