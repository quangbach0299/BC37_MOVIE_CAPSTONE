import { GROUPID } from "../utils/settings/config";
import { baseService } from "./baseService";

export class QuanLyPhimService extends baseService {
  // eslint-disable-next-line
  constructor() {
    super();
  }

  layDanhSachBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  layDanhSachPhim = (tenPhim) => {
    if (tenPhim !== "") {
      return this.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`
      );
    }
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };

  layDanhSachPhimPhanTrang = (page) => {
    return this.get(
      `api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUPID}&soTrang=${page}&soPhanTuTrenTrang=8`
    );
  };

  //Số trang là trang cần truy xuất
  //Số phần tử là số phim trên 1 trang
  layChiTietPhim = (maPhim) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };

  layChiTietLichChieuMoiPhim = (maPhim) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  };

  themUpLoadHinh = (formData) => {
    return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };

  capNhatUploadHinh = (formData) => {
    return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };

  xoaPhim = (maPhim) => {
    return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };

  taoLichChieuPhim = (dataSubmit) => {
    return this.post(`/api/QuanLyDatVe/TaoLichChieu`, dataSubmit);
  };
}

export const quanLyPhimService = new QuanLyPhimService();

// import { baseService } from "./baseService";

// export class QuanLyRapService extends baseService {
//   // eslint-disable-next-line
//   constructor() {
//     super();
//   }

//   layDanhSachRap = () => {
//     return this.get(`/api/QuanLyRap/LayThongTinHeThongRap `);
//   };
// }

// export const quanLyRapService = new QuanLyRapService();
