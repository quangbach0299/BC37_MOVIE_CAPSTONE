/* eslint-disable no-useless-constructor */
import { baseService } from "./baseService";

export class QuanLyDatVeService extends baseService {
  constructor() {
    super();
  }

  layChiTietPhongVe = (maLichChieu) => {
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };

  datVe = (thongTinDatVe) => {
    return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe);
  };
}

// {
//   "maLichChieu": 0,
//   "danhSachVe": [
//     {
//       "maGhe": 0,
//       "giaVe": 0
//     }
//   ]
// }

export const quanLyDatVeSrvice = new QuanLyDatVeService();
