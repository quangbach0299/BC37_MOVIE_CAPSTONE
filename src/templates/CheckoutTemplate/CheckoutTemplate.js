import React from "react";
import { Outlet } from "react-router-dom";

const CheckoutTemplate = () => {
  return (
    <>
      {/* <Checkout /> */}
      {/* fixed lấy thẻ body làm thẻ cha  */}
      <Outlet />
      {/* load thẻ con ở bên ngoài đè lên outlet, thẻ con đó nằm giữa outlet */}
    </>
  );
};

export default CheckoutTemplate;
