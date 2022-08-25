import "./App.css";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from "./components/Layout/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import ProductDetails from "./components/Product/ProductDetails";
import Products from "./components/Product/Products";
import Search from "./components/Product/Search";
import About from "./components/About/About";
import Therapy from "./components/Therapy-classes/Therapy";
import LoginSignUp from "./components/User/LoginSignUp";
import { useEffect, useState } from "react";
import { loadUser } from "./actions/userAction";
import store from "./store";
import { useSelector } from "react-redux";
import Profile from "./components/User/Profile";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Dashboard from "./components/Admin/Dashboard";
import NewProduct from "./components/Admin/NewProduct";
import ProductList from "./components/Admin/ProductList";
import UpdateProduct from "./components/Admin/UpdateProduct";
import UpdateUser from "./components/Admin/UpdateUser";
import UsersList from "./components/Admin/UsersList";
import Carousel from "./components/Layout/examples/Carousel";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import Payment from "./components/Cart/Payment";
import OrderSuccess from "./components/Cart/OrderSuccess";
import MyOrders from "./components/Order/MyOrders";
import OrderDetails from "./components/Order/OrderDetails";
import OrderList from "./components/Admin/OrderList";
import ProcessOrder from "./components/Admin/ProcessOrder";
import ProductReviews from "./components/Admin/ProductReviews";
import Crystals from "./components/Categories/Crystals";
import Swiper from "./components/Layout/examples/Swiper";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState(
    "pk_test_51KmcLASIYq14JtqujwtU4ui1jIrQd3zOC6QgCLrhmrnPJoFH4gb9I9d7R4JJHpLCXEHKSayBdU154D9hU9bdWJoJ00qp1Sahjp"
  );

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />

      <Routes>
        <Route
          exact
          path="/payment/process"
          element={
            <>
              <Elements stripe={loadStripe(stripeApiKey)}>
                {isAuthenticated && <Payment user={user} />}
              </Elements>
            </>
          }
        ></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/product/:id" element={<ProductDetails />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/products/:keyword" element={<Products />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/login" element={<LoginSignUp />}></Route>

        <Route exact path="/cart" element={<Cart />}></Route>

        <Route
          exact
          path="/login/shipping"
          element={<>{isAuthenticated && <Shipping user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/order/confirm"
          element={<>{isAuthenticated && <ConfirmOrder user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/success"
          element={<>{isAuthenticated && <OrderSuccess user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/orders"
          element={<>{isAuthenticated && <MyOrders user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/order/:id"
          element={<>{isAuthenticated && <OrderDetails user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/account"
          element={<>{isAuthenticated && <Profile user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/me/update"
          element={<>{isAuthenticated && <UpdateProfile user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/password/update"
          element={<>{isAuthenticated && <UpdatePassword user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/password/forgot"
          element={<ForgotPassword />}
        ></Route>

        <Route
          exact
          path="/api/v1/password/reset/:token"
          element={
            <>
              <ResetPassword />
            </>
          }
        ></Route>

        <Route
          exact
          path="/admin/dashboard"
          element={<>{isAuthenticated && <Dashboard user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/admin/product"
          element={<>{isAuthenticated && <NewProduct user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/admin/products"
          element={<>{isAuthenticated && <ProductList user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/admin/product/:id"
          element={<>{isAuthenticated && <UpdateProduct user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/admin/orders"
          element={<>{isAuthenticated && <OrderList user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/admin/order/:id"
          element={<>{isAuthenticated && <ProcessOrder user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/admin/users"
          element={<>{isAuthenticated && <UsersList user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/admin/user/:id"
          element={<>{isAuthenticated && <UpdateUser user={user} />}</>}
        ></Route>

        <Route
          exact
          path="/admin/reviews"
          element={<>{isAuthenticated && <ProductReviews user={user} />}</>}
        ></Route>

        <Route exact path="/about-us" element={<About />}></Route>
        <Route exact path="/therapy-classes" element={<Therapy />}></Route>
        <Route exact path="/contact-us" element={<ContactUs />}></Route>
        <Route exact path="/carousel" element={<Carousel />}></Route>
        <Route exact path="/swiper" element={<Swiper />}></Route>
        <Route
          exact
          path="/products/crystals"
          element={
            <>
              <Crystals />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
