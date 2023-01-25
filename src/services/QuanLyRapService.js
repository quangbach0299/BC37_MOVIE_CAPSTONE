import { GROUPID } from "../utils/settings/config";
import { baseService } from "./baseService";

export class QuanLyRapService extends baseService {
  // eslint-disable-next-line
  constructor() {
    super();
  }

  layThongTinLichChieuHeThongRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };

  layThongTinRapTheoHeTHong = () => {
    return this.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
  };

  layThongTinCumRapTheoHeThong = (maHeThongRap) => {
    return this.get(
      `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  };
}

export const quanLyRapService = new QuanLyRapService();
