// import { SET_DANH_SACH_PHIM } from "../actions/types/QuanLyPhimType";

import { act } from "react-dom/test-utils";
import { ThongTinPhim } from "../../_core/models/ThongPhim";
import {
  ADMIN_SET_CHI_TIET_PHIM,
  SET_CHI_TIET_PHIM,
  SET_DANH_SACH_PHIM,
  SET_DANH_SACH_PHIM_PHAN_TRANG,
} from "../actions/types/QuanLyPhimType";

const stateDefault = {
  arrFilm: [],
  filmDetail: [],
  thongTinPhim: [],
  arrFilmSearch: [],
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
    case ADMIN_SET_CHI_TIET_PHIM: {
      state.thongTinPhim = action.thongTinPhim;
      return { ...state };
    }
    case SET_DANH_SACH_PHIM: {
      state.arrFilmSearch = action.arrFilmSearch;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
