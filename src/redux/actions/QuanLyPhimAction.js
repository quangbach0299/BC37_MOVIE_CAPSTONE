import { quanLyPhimService } from "../../services/QuanLyPhimService";
import {
  SET_CHI_TIET_PHIM,
  SET_DANH_SACH_PHIM,
  SET_DANH_SACH_PHIM_PHAN_TRANG,
} from "./types/QuanLyPhimType";

export const getMovieListAction = () => {
  return async (next) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyPhimService.layDanhSachPhim();
      next({
        type: SET_DANH_SACH_PHIM,
        arrFilm: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const getMoviePageListAction = (page = 1) => {
  return async (next) => {
    try {
      const result = await quanLyPhimService.layDanhSachPhimPhanTrang(page);
      next({
        type: SET_DANH_SACH_PHIM_PHAN_TRANG,
        arrFilm: result.data.content,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

//Ko cần thiết api dưới đã có đủ
export const getMovieDetailAction = (movieId) => {
  return async (next) => {
    try {
      const result = await quanLyPhimService.layChiTietPhim(movieId);
      console.log(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMovieDetailScheduler = (movieId) => {
  return async (next) => {
    try {
      const result = await quanLyPhimService.layChiTietLichChieuMoiPhim(
        movieId
      );
      next({
        type: SET_CHI_TIET_PHIM,
        filmDetail: result.data.content,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
