import { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { onValue, ref } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../database/firebaseUtils";
import { getCategories } from "../features/categories/categorySlice";
import { getProducts } from "../features/products/productsSlice";
import { getCarts } from "../features/cart/cartSlice";

export default function HomeLayout() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    // Reference variables
    const categoryRef = ref(db, "categories");
    const productRef = ref(db, "products");

    // Set category to redux for global usage
    const disableCategory = onValue(categoryRef, (snapshot) => {
      const updateCategoryList = [];
      snapshot.forEach((item) => {
        updateCategoryList.push({
          id: item.key,
          ...item.val(),
        });
      });
      dispatch(getCategories(updateCategoryList));
    });

    // Set products to redux for global usage
    const disableProduct = onValue(productRef, (snapshot) => {
      const updateProductList = [];
      snapshot.forEach((item) => {
        updateProductList.push({
          id: item.key,
          ...item.val(),
          isFavorite: false,
        });
      });
      dispatch(getProducts(updateProductList));
    });

    // Set Cart Items if user exists
    let disableCarts = null;
    if (user) {
      const cartRef = ref(db, `carts/${user.id}`);
      disableCarts = onValue(cartRef, (snapshot) => {
        const updateCartList = [];
        snapshot.forEach((item) => {
          updateCartList.push({
            id: item.key,
            ...item.val(),
          });
        });
        dispatch(getCarts(updateCartList));
      });
    }

    // Cleanup function
    return () => {
      disableCategory();
      disableProduct();
      if (disableCarts) disableCarts();
    };
  }, [dispatch, user]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
