// import { SET_DANH_SACH_PHIM } from "../actions/types/QuanLyPhimType";

import {
  SET_CHI_TIET_PHIM,
  SET_DANH_SACH_PHIM_PHAN_TRANG,
} from "../actions/types/QuanLyPhimType";

const stateDefault = {
  arrFilm: [],
  filmDetail: [],
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM_PHAN_TRANG: {
      state.arrFilm = action.arrFilm;
      return { ...state };
    }

    case SET_CHI_TIET_PHIM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
