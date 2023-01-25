import { quanLyRapService } from "../../services/QuanLyRapService";
import {
  SET_DANH_SACH_HE_THONG_CUM_RAP,
  SET_DANH_SACH_HE_THONG_RAP,
  SET_DANH_SACH_RAP,
} from "./types/QuanLyRapType";

export const getCineListAction = () => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyRapService.layThongTinLichChieuHeThongRap();
      dispatch({
        type: SET_DANH_SACH_RAP,
        heThongRapChieu: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const getCineInfoListSystemAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinRapTheoHeTHong();
      // console.log(result.data.content);

      dispatch({
        type: SET_DANH_SACH_HE_THONG_RAP,
        heThongRap: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCineClusterInfoListSystemAction = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinCumRapTheoHeThong(
        maHeThongRap
      );
      // console.log(result.data.content);

      dispatch({
        type: SET_DANH_SACH_HE_THONG_CUM_RAP,
        heThongCumRap: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
