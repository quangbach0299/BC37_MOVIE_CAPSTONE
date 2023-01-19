// import { USER_LOGIN } from "../../utils/settings/config";
import {
  DANG_NHAP_ACTION,
  LAY_THONG_TIN_TAI_KHOAN,
} from "../actions/types/QuanLyNguoiDungType";

// let user = {};
// if (localStorage.getItem(USER_LOGIN)) {
//   //Nên lưu mỗi token thôi
//   user = JSON.parse(localStorage.getItem(USER_LOGIN));
// }

const stateDefault = {
  userLogin: {},
  thongTinTaiKhoan: {},
  isLogin: false,
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      // localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));

      return { ...state, userLogin: thongTinDangNhap, isLogin: true };
    }

    case LAY_THONG_TIN_TAI_KHOAN: {
      return { ...state, thongTinTaiKhoan: action.thongtinTaiKhoan };
    }

    default:
      return { ...state };
  }
};
