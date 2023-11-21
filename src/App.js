import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Login from './Pages/LogIn/Login';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import AboutUs from './Pages/AboutUs/AboutUs';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import Support from './Pages/Support/Support';
import AddProduct from './Pages/AddProduct/AddProduct';
import './App.css';
import CeilingFans from './Pages/CeilingFans/CeilingFans';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Checkout from './Pages/Checkout/Checkout';
import OrderManage from './Pages/OrderManage/OrderManage';
import CustomerInquiry from './Pages/CustomerInquiry/CustomerInquiry';
import MyOrders from './Pages/MyOrders/MyOrders';
import EditProduct from './Pages/EditProduct/EditProduct';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product' element={<Product />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/support' element={<Support />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/ceiling-fans' element={<CeilingFans />} />
          <Route path='/product-details' element={<ProductDetails />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order-manage' element={<OrderManage />} />
          <Route path='/customer-inquiry' element={<CustomerInquiry />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/edit-product' element={<EditProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
