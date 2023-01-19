/* eslint-disable react/jsx-pascal-case */
import { Pagination } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Film_Flip from "../../components/Film/Film_Flip";
import { getMoviePageListAction } from "../../redux/actions/QuanLyPhimAction";
import { getCineListAction } from "../../redux/actions/QuanLyRapAction";
import { HomeCarousel } from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import { HomeMenu } from "./HomeMenu/HomeMenu";

export const Home = () => {
  const dispatch = useDispatch();
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  console.log(arrFilm);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  // console.log("heThongRapChieu", heThongRapChieu);
  // console.log("arrFilm", arrFilm);

  useEffect(() => {
    dispatch(getMoviePageListAction());
    dispatch(getCineListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <div className="container">
        <div className="grid grid-cols-4 gap-8">
          <Film_Flip arrFilm={arrFilm}></Film_Flip>
        </div>
        <div className="mt-20">
          {arrFilm.items && (
            <Pagination
              current={arrFilm.currentPage}
              pageSize={arrFilm.count}
              total={arrFilm.totalCount}
              onChange={(e) => {
                dispatch(getMoviePageListAction(e));
              }}
            />
          )}
        </div>

        {/* Sử dụng Hook để ngăn ko render */}
        <HomeMenu heThongRapChieu={heThongRapChieu}></HomeMenu>
      </div>
    </div>
  );
};
