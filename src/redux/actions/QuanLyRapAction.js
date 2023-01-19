import { quanLyRapService } from "../../services/QuanLyRapService";
import { SET_DANH_SACH_RAP } from "./types/QuanLyRapType";

export const getCineListAction = () => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyRapService.layDanhSachRap();
      if (result.status === 200) {
        dispatch({
          type: SET_DANH_SACH_RAP,
          heThongRapChieu: result.data.content,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};