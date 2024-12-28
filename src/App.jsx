import { Route, Routes } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import Error from "./Error";

// Dashboard Pages
import HomeDashboard from "./pages/dashboard/home/Index";
import CreateCategory from "./pages/dashboard/category/Create";
import CreateProduct from "./pages/dashboard/product/Create";
import IndexCategory from "./pages/dashboard/category/Index";
import IndexProduct from "./pages/dashboard/product/Index";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Private from "./pages/auth/Private";

// Frontend Pages
import HomeLayout from "./layout/HomeLayout";
import HomeIndex from "./pages/frontEnd/home/Index";
import SingleProductIndex from "./pages/frontEnd/product/Index";
import CartDetails from "./pages/frontEnd/cartDetails/CartDetails";

// React.lazy() and Suspense for lazy loading
import { lazy, Suspense } from "react";

// Lazy load Private Route
const PrivateRoute = lazy(() => import("./pages/auth/Private"));

export default function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<HomeIndex />} />
                    <Route path="single-product/:id" element={<SingleProductIndex />} />
                    <Route path="cart-details" element={<CartDetails />} />
                </Route>

                {/* Auth Routes */}
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

                {/* Private Routes */}
                <Route element={<PrivateRoute />}>
                    <Route path="dashboard" element={<DashboardLayout />}>
                        <Route index element={<HomeDashboard />} />

                        {/* Category Routes */}
                        <Route path="index-category" element={<IndexCategory />} />
                        <Route path="create-category" element={<CreateCategory />} />
                        <Route path="edit-category/:id" element={<CreateCategory />} />

                        {/* Product Routes */}
                        <Route path="index-product" element={<IndexProduct />} />
                        <Route path="create-product" element={<CreateProduct />} />
                        <Route path="edit-product/:id" element={<CreateProduct />} />
                    </Route>
                </Route>

                {/* Error Route */}
                <Route path="*" element={<Error />} />
            </Routes>
        </Suspense>
    );
}
