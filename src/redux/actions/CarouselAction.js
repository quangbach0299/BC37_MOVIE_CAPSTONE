import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_CAROUSEL } from "./types/CarouselType";

export const getCarouselAction = () => {
  return async (next) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyPhimService.layDanhSachBanner();

      next({
        type: SET_CAROUSEL,
        arrImg: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
