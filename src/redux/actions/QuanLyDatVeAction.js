import { quanLyDatVeSrvice } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { DISPLAY_LOADING, HIDE_LOADING } from "./types/LoadingType";
import {
  CHUYEN_TAB,
  DAT_VE_HOAN_TAT,
  GET_CHI_TIET_PHONG_VE,
} from "./types/QuanLyDatVeType";

export const detailCheckOutAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeSrvice.layChiTietPhongVe(maLichChieu);

      if (result.status === 200) {
        dispatch({
          type: GET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content,
        });
      }
    } catch (erorr) {
      console.log(erorr);
    }
  };
};

export const orderTicketAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DISPLAY_LOADING });

      const result = await quanLyDatVeSrvice.datVe(thongTinDatVe);
      console.log(result.data.content);
      await dispatch(detailCheckOutAction(thongTinDatVe.maLichChieu));
      await dispatch({ type: DAT_VE_HOAN_TAT });
      await dispatch({ type: CHUYEN_TAB });

      dispatch({ type: HIDE_LOADING });
    } catch (error) {
      dispatch({ type: HIDE_LOADING });
      console.log("error", error);
    }
  };
};
