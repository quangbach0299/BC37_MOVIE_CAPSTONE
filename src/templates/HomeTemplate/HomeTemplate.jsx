import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "./Layout/Footer/Footer";
import { Header } from "./Layout/Header/Header";

const HomeTemplate = (props) => {
  return (
    <>
      {/* fixed lấy thẻ body làm thẻ cha  */}
      <Header></Header>
      <Outlet />
      <Footer></Footer>
      {/* load thẻ con ở bên ngoài đè lên outlet, thẻ con đó nằm giữa outlet */}
    </>
  );
};

export default HomeTemplate;
