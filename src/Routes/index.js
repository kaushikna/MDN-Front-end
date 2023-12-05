import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import Product from "../Pages/Product/Product";
import AboutUs from "../Pages/AboutUs/AboutUs";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Support from "../Pages/Support/Support";
import AddProduct from "../Pages/AddProduct/AddProduct";
import CeilingFans from "../Pages/CeilingFans/CeilingFans";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Checkout from "../Pages/Checkout/Checkout";
import OrderManage from "../Pages/OrderManage/OrderManage";
import { AuthContext } from "../Helper/Context";
import Signup from "../Pages/Signup/Signup";
import AppContextProvider from "../Helper/Context/AppContextProvider";
import MyOrders from "../Pages/MyOrders/MyOrders";

const RoutesLayout = () => {
  const [isAuthenticated, setAuthenticated] = useState(
    () => localStorage.getItem("token") !== null
  );

  const login = () => setAuthenticated(true);
  const logout = () => setAuthenticated(false);

  return (
    <AppContextProvider>
      <AuthContext.Provider value={{ login: login, logout: logout }}>
        <Router>
          <Routes>
            {/* UnAuthenticated Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* Authenticated Routes */}
            <Route
              path="/product"
              element={!isAuthenticated ? <Navigate to="/" /> : <Product />}
            />
            <Route
              path="/add-product"
              element={!isAuthenticated ? <Navigate to="/" /> : <AddProduct />}
            />
            <Route
              path="/ceiling-fans"
              element={<CeilingFans />}
            />
            <Route
              path={`/product-details/:product_id`}
              element={
                !isAuthenticated ? <Navigate to="/" /> : <ProductDetails />
              }
            />
            <Route
              path="/checkout"
              element={!isAuthenticated ? <Navigate to="/" /> : <Checkout />}
            />
            <Route
              path="/order-manage"
              element={!isAuthenticated ? <Navigate to="/" /> : <OrderManage />}
            />
            <Route
              path="/myorders"
              element={!isAuthenticated ? <Navigate to="/" /> : <MyOrders />}
            />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </AppContextProvider>
  );
};

export default RoutesLayout;