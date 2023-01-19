import { SET_DANH_SACH_RAP } from "../actions/types/QuanLyRapType";

const stateDefault = {
  heThongRapChieu: [],
};

export const QuanLyRapReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_RAP: {
      state.heThongRapChieu = action.heThongRapChieu;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
