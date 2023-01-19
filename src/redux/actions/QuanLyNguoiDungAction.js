import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { acessToken } from "../../utils/settings/config";
import {
  DANG_NHAP_ACTION,
  LAY_THONG_TIN_TAI_KHOAN,
} from "./types/QuanLyNguoiDungType";

export const loginAction = (loginInfo) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(loginInfo);
      console.log(result);
      // Nếu login thành công
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
        localStorage.setItem(acessToken, result.data.content.accessToken);
      }
    } catch (error) {
      throw error;
    }
  };
};

export const fetchProfileAction = async (next) => {
  try {
    const result = await quanLyNguoiDungService.layThongTinTaiKhoan();
    next({
      type: LAY_THONG_TIN_TAI_KHOAN,
      thongtinTaiKhoan: result.data.content,
    });
  } catch (err) {
    console.log(err);
  }
};
