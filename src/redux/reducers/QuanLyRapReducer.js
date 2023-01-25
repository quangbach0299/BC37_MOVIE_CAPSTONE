import {
  SET_DANH_SACH_HE_THONG_CUM_RAP,
  SET_DANH_SACH_HE_THONG_RAP,
  SET_DANH_SACH_RAP,
} from "../actions/types/QuanLyRapType";

const stateDefault = {
  heThongRapChieu: [],
  heThongRap: [],
  heThongCumRap: [],
};

export const QuanLyRapReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_RAP: {
      state.heThongRapChieu = action.heThongRapChieu;
      return { ...state };
    }

    case SET_DANH_SACH_HE_THONG_RAP: {
      state.heThongRap = action.heThongRap;
      return { ...state };
    }

    case SET_DANH_SACH_HE_THONG_CUM_RAP: {
      state.heThongCumRap = action.heThongCumRap;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
