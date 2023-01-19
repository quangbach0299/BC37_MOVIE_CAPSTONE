import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { News } from "./pages/News/News";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Detail from "./pages/Detail/Detail";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProfileAction } from "./redux/actions/QuanLyNguoiDungAction";
import Loading from "./components/Loading/Loading";
import { Register } from "./pages/Register/Register";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Films from "./pages/Admin/Films/Films";
import ShowTime from "./pages/Admin/ShowTime/ShowTime";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfileAction);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Loading />
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index path="" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="news" element={<News />} />
            <Route path="detail/:id" element={<Detail />}></Route>
            <Route path="*" element={<Navigate to={""} />} />
            {/* Dùng để chuyển kí tự lung tung về home */}
          </Route>
          <Route path="checkout/:maLichChieu" element={<CheckoutTemplate />}>
            <Route path="" element={<Checkout />} />
          </Route>
          <Route path="user" element={<UserTemplate />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
          </Route>
          <Route path="admin" element={<AdminTemplate />}>
            <Route path="" element={<Dashboard />} />
            <Route path="films" element={<Films />} />
            <Route path="showtime" element={<ShowTime />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
