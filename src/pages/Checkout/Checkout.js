import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  detailCheckOutAction,
  orderTicketAction,
} from "../../redux/actions/QuanLyDatVeAction";
import style from "./Checkout.module.css";
import "./Checkout.css";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import {
  CHANGE_TAB_ACTIVE,
  DAT_VE,
} from "../../redux/actions/types/QuanLyDatVeType";
import _ from "lodash";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import clsx from "clsx";
import { Tabs } from "antd";
import moment from "moment";

function Checkout(props) {
  const { thongTinTaiKhoan } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );

  console.log(thongTinTaiKhoan);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const maLichChieu = params.maLichChieu;
    dispatch(detailCheckOutAction(maLichChieu));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  // const renderSeat = () => {
  //   return danhSachGhe.map((ghe, index) => {
  //     let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
  //     let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
  //     let classGheDangDat = "";
  //     let classgheDaDuocDat = "";

  //     //Sử dụng indexDD để chèn vào thuộc tính css màu của ghế đang đặt
  //     let indexGheDD = danhSachGheDangDat.findIndex(
  //       (gheDD) => gheDD.maGhe === ghe.maGhe
  //     );

  //     if (indexGheDD !== -1) {
  //       classGheDangDat = "gheDangDat";
  //     }

  //     if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
  //       classgheDaDuocDat = "gheDaDuocDat";
  //     }

  //     return (
  //       <Fragment key={ghe.maGhe}>
  //         <button
  //           disabled={ghe.daDat}
  //           key={index}
  //           className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classgheDaDuocDat} `}
  //           onClick={() => {
  //             dispatch({
  //               type: DAT_VE,
  //               gheDuocChon: ghe,
  //             });
  //           }}
  //         >
  //           {/* Nếu ghế đã được đặt thì render ra dấu chéo  */}

  //           {ghe.daDat === true ? (
  //             classgheDaDuocDat !== "" ? (
  //               <UserOutlined style={{ verticalAlign: "middle" }} />
  //             ) : (
  //               <CloseOutlined style={{ verticalAlign: "middle" }} />
  //             )
  //           ) : (
  //             ghe.stt
  //           )}
  //         </button>
  //         {(index + 1) % 16 === 0 ? <br /> : ``}
  //       </Fragment>
  //     );
  //   });
  // };

  // const renderSeatCLSX = () => {
  //   return danhSachGhe.map((ghe, index) => {
  //     return (
  //       <Fragment>
  //         <button
  //           onClick={() => {
  //             dispatch({
  //               type: DAT_VE,
  //               gheDuocChon: ghe,
  //             });
  //           }}
  //           className={clsx("ghe", {
  //             gheVip: ghe.loaiGhe === "Vip",
  //             gheDaDat: ghe.daDat === true,
  //             // truthy và falsy (findex trả về -1 luôn true)
  //             gheDangDat:
  //               danhSachGheDangDat.findIndex(
  //                 (gheDD) => gheDD.maGhe === ghe.maGhe
  //               ) !== -1,
  //             gheDaDuocDat: userLogin.taiKhoan === ghe.taiKhoanNguoiDat,
  //           })}
  //         >
  //           {ghe.daDat ? (
  //             userLogin.taiKhoan === ghe.taiKhoanNguoiDat ? (
  //               <UserOutlined style={{ verticalAlign: "middle" }} />
  //             ) : (
  //               <CloseOutlined style={{ verticalAlign: "middle" }} />
  //             )
  //           ) : (
  //             ghe.stt
  //           )}
  //         </button>
  //         {(index + 1) % 16 === 0 ? <br /> : ""}
  //       </Fragment>
  //     );
  //   });
  // };

  return (
    <div className="mt-5 min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="manHinh flex flex-col items-center mt-5">
            <div
              className="bg-black"
              style={{ width: "80%", height: "15px" }}
            ></div>
            <div className={`${style["trapezoid"]} text-center mt-2`}>
              <h3 className="mt-2 text-lg">Màn Hình</h3>
            </div>
          </div>
          <div className="text-center mt-10">
            {danhSachGhe.map((ghe, index) => {
              return (
                <Fragment key={index}>
                  <button
                    disabled={ghe.daDat}
                    onClick={() => {
                      dispatch({
                        type: DAT_VE,
                        gheDuocChon: ghe,
                      });
                    }}
                    className={clsx("ghe", {
                      gheVip: ghe.loaiGhe === "Vip",
                      gheDaDat: ghe.daDat === true,
                      // truthy và falsy (findex trả về -1 luôn true)
                      gheDangDat:
                        danhSachGheDangDat.findIndex(
                          (gheDD) => gheDD.maGhe === ghe.maGhe
                        ) !== -1,
                      gheDaDuocDat:
                        thongTinTaiKhoan.taiKhoan === ghe.taiKhoanNguoiDat,
                    })}
                  >
                    {ghe.daDat ? (
                      thongTinTaiKhoan.taiKhoan === ghe.taiKhoanNguoiDat ? (
                        <UserOutlined style={{ verticalAlign: "middle" }} />
                      ) : (
                        <CloseOutlined style={{ verticalAlign: "middle" }} />
                      )
                    ) : (
                      ghe.stt
                    )}
                  </button>
                  {(index + 1) % 16 === 0 ? <br /> : ""}
                </Fragment>
              );
            })}
          </div>
          <div className="mt-5">
            <table className="w-2/3 mx-auto text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Ghế chưa Đặt
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ghế đang đặt
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ghế VIP
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ghế đã được đặt
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ghế mình đặt
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className=" ">
                    <button className="ghe text-center">00</button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="ghe gheDangDat text-center">00</button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="ghe gheVip text-center">00</button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="ghe gheDaDat text-center">00</button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="ghe gheDaDuocDat text-center">
                      <UserOutlined style={{ verticalAlign: "middle" }} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-3">
          <h3 className="text-center text-2xl">
            {danhSachGheDangDat
              .reduce((tongtien, ghe, index) => {
                return (tongtien += ghe.giaVe);
              }, 0)
              .toLocaleString()}{" "}
          </h3>
          <hr />
          <h1 className="mt-2 text-2xl">{thongTinPhim.tenPhim}</h1>
          <p>
            Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
          </p>
          <p>
            Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
          </p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-400 text-lg ">
                <span className="text-red-400 text-lg">Ghế</span>{" "}
                {_.sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, index) => {
                  return (
                    <span key={index} className="text-green-500 text-xl">
                      {" "}
                      {gheDD.stt}
                    </span>
                  );
                })}
              </span>
            </div>
            <div className="w-1/5 text-center">
              <span className="text-green-800 text-lg"></span>
            </div>
          </div>
          <hr />
          <div className="my-5">
            <i>Email:</i>
            <br />
            {thongTinTaiKhoan.email}
          </div>
          <hr />
          <div className="my-5">
            <i>Phone:</i>
            <br />
            {thongTinTaiKhoan.soDT}
          </div>
          <hr />
          <div className="mb-0 flex flex-col items-center ">
            <div
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = params.maLichChieu;
                thongTinDatVe.danhSachVe = danhSachGheDangDat;
                dispatch(orderTicketAction(thongTinDatVe));
              }}
              className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer"
            >
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KetQuaDatVe(props) {
  const { thongTinTaiKhoan } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  return (
    <div className="p-5">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Lịch Sử Đặt Vé Khách Hàng
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Hãy xem thông tin và thời gian để xem phim vui vẻ nhé
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {thongTinTaiKhoan.thongTinDatVe?.reverse().map((ve, index) => {
              return (
                <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src={ve.hinhAnh}
                    />
                    <div className="flex-grow">
                      <h2 className="text-gray-900 title-font font-medium">
                        {ve.tenPhim}
                      </h2>
                      <p className="text-gray-500">
                        Giờ chiếu: {moment(ve.ngayDat).format("hh:mm A ")} -
                        Ngày chiếu: {moment(ve.ngayDat).format("DD-MM-YYYY")}{" "}
                      </p>
                      <p className="text-gray-500">
                        Địa điểm: {_.first(ve.danhSachGhe).tenHeThongRap} -{" "}
                        {_.first(ve.danhSachGhe).maCumRap}
                      </p>

                      {ve.danhSachGhe.slice(0, 2).map((ghe, index) => {
                        return (
                          <p key={index}>
                            <span>Rạp: {ghe.maCumRap}</span> -{" "}
                            <span>Ghế: {ghe.tenGhe}</span>
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Demo(props) {
  const { tabActive } = useSelector((state) => state.QuanLyDatVeReducer);
  console.log("tabActive", tabActive);
  const dispatch = useDispatch();

  return (
    <Tabs
      defaultActiveKey={tabActive}
      activeKey={tabActive}
      items={[
        {
          key: "1",
          label: `01 CHỌN GHẾ & THANH TOÁN`,
          children: <Checkout {...props} />,
        },
        {
          key: "2",
          label: `02 KẾT QUẢ ĐẶT VÉ`,
          children: <KetQuaDatVe {...props} />,
        },
      ]}
      onChange={(key) => {
        dispatch({
          type: CHANGE_TAB_ACTIVE,
          number: key.toString(),
        });
      }}
    />
  );
}
