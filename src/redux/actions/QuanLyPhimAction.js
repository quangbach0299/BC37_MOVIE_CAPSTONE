import { quanLyPhimService } from "../../services/QuanLyPhimService";
import {
  ADMIN_SET_CHI_TIET_PHIM,
  SET_CHI_TIET_PHIM,
  SET_DANH_SACH_PHIM,
  SET_DANH_SACH_PHIM_PHAN_TRANG,
} from "./types/QuanLyPhimType";

export const getMovieListAction = (tenPhim = "") => {
  return async (next) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyPhimService.layDanhSachPhim(tenPhim);
      console.log(result.data.content);
      next({
        type: SET_DANH_SACH_PHIM,
        arrFilmSearch: result.data.content,
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
      next({
        type: ADMIN_SET_CHI_TIET_PHIM,
        thongTinPhim: result.data.content,
      });
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

export const postMovieDetailAndPictureAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.themUpLoadHinh(formData);
      console.log(result);
      alert("Thêm Phim Thành Công");
    } catch (error) {
      console.log(error);
    }
  };
};

export const postUpdateMovieDetailAndPictureAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.capNhatUploadHinh(formData);
      alert("Cập nhật phim thành công");
      // Push api thành công thì mới navigate
      console.log(result);
    } catch (error) {
      throw error;
    }
  };
};

export const deleteMovieAction = (maPhim) => {
  return async (dispatch) => {
    try {
      // let result = await quanLyPhimService.xoaPhim(maPhim);
      // console.log(result);
      // alert("Xóa phim thành công");
      dispatch(getMoviePageListAction());
    } catch (error) {
      console.log(error);
    }
  };
};
