import { Rate, Tabs, Tag } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import "../../assets/styles/circle.css";
import { getMovieDetailScheduler } from "../../redux/actions/QuanLyPhimAction";

export default function Detail() {
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  const params = useParams();
  console.log(filmDetail);
  useEffect(() => {
    let id = params.id;
    dispatch(getMovieDetailScheduler(id));
  }, []);

  return (
    filmDetail && (
      <div
        className="colorFull"
        style={{
          marginTop: "96px",
        }}
      >
        <div className="grid grid-cols-12  " style={{ paddingTop: "20px" }}>
          <div className="photo col-start-3 col-span-2">
            <img
              src={filmDetail.hinhAnh}
              className="w-full"
              style={{ height: "350px" }}
              alt=""
            />
          </div>
          <div className="col-start-5 col-end-8 ml-11">
            <h1 className="text-4xl pt-5">{filmDetail.tenPhim}</h1>
            <p className="text-xl pt-5 leading-6">{filmDetail.moTa}</p>
            <p className="text-2xl  text--300  pt-5">
              {moment(filmDetail.ngayKhoiChieu).format("DD MMM YYYY")}
            </p>
          </div>
          <div className="col-start-8 col-span-2 ml-10   ">
            <div className="c100 p50 big ">
              <span>{filmDetail.danhGia * 10}%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <div
              style={{ marginLeft: "15%" }}
              className="text-fuchsia-400 mt-10"
            >
              <Rate allowHalf value={filmDetail.danhGia / 2} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-5  ">
          <div
            className="col-start-3 col-end-11 bg-white "
            style={{ height: "550px" }}
          >
            <Tabs
              tabPosition="left"
              items={filmDetail.heThongRapChieu?.map((cumRap) => {
                return {
                  label: (
                    <>
                      <img src={cumRap.logo} style={{ width: "50px" }} alt="" />
                      <br />
                      <hr />
                    </>
                  ),
                  key: cumRap.maHeThongRap,
                  children: cumRap.cumRapChieu.map((rap, index) => {
                    return (
                      <div key={index}>
                        <h1
                          style={{
                            color: "blue",
                            fontWeight: "500",
                            lineHeight: "1.67",
                          }}
                          className="text-2xl  mb-2  "
                        >
                          {rap.tenCumRap}
                        </h1>
                        <h1 className="font-semibold text-xl mb-2">
                          {rap.diaChi}
                        </h1>
                        <div className="mb-2">
                          {rap.lichChieuPhim.map((lich) => {
                            return (
                              <NavLink
                                key={lich.maLichChieu}
                                to={`/checkout/${lich.maLichChieu}`}
                              >
                                <Tag color="#f50" className="text-xl mx-2">
                                  {moment(lich.ngayChieuGioChieu).format(
                                    "DD MM YYYY"
                                  )}
                                </Tag>
                              </NavLink>
                            );
                          })}
                        </div>
                        <br />
                        <hr />
                      </div>
                    );
                  }),
                };
              })}
            />
          </div>
        </div>
      </div>
    )
  );
}
