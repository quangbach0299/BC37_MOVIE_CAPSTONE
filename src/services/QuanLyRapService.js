import { GROUPID } from "../utils/settings/config";
import { baseService } from "./baseService";

export class QuanLyRapService extends baseService {
  // eslint-disable-next-line
  constructor() {
    super();
  }

  layDanhSachRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };
}

export const quanLyRapService = new QuanLyRapService();
