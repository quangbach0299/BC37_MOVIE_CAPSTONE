import { Tabs, Tag } from "antd";
import moment from "moment";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const HomeMenu = (props) => {
  const { heThongRapChieu } = props;

  // onChange={(key) => {
  //   // Coi lại phần then catch
  //   getCineListAction(key).then((res) =>
  //     setListSchedule(res.data.content)
  //   );
  // }}

  console.log(heThongRapChieu);

  // items={[{ label: `Tab`, key: id, children: `Content of Tab  ` }]}
  return (
    <div className="mt-10">
      <Tabs
        onChange={(e) => {
          console.log(e);
        }}
        tabPosition={"left"}
        items={heThongRapChieu?.map((heThongRap) => {
          return {
            label: (
              <>
                <img
                  src={heThongRap.logo}
                  alt={heThongRap.heThongRap}
                  style={{
                    width: "60px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                  className="my-2"
                />
                <hr />
              </>
            ),
            key: heThongRap.maHeThongRap,
            children: (
              <Tabs
                tabPosition="left"
                items={heThongRap.lstCumRap.slice(0, 4).map((cumRap) => {
                  return {
                    label: (
                      <>
                        <div
                          style={{ width: "300px", display: "flex" }}
                          className="my-2"
                        >
                          <img src={cumRap.hinhAnh} width="60px" alt="" />
                          <div
                            className="text-left   ml-2 "
                            style={{ fontSize: "15px" }}
                          >
                            <p>{cumRap.tenCumRap}</p>
                            <p className="text-green-800 mt-2">[Chi Tiết]</p>
                          </div>
                          <hr style={{ borderBottom: "2px solid black" }} />
                        </div>
                        <hr />
                      </>
                    ),
                    key: cumRap.maCumRap,
                    children: cumRap.danhSachPhim.slice(0, 4).map((phim) => {
                      return (
                        <Fragment key={phim.maPhim}>
                          <div
                            style={{
                              display: "flex",
                              marginBottom: "10px",
                              marginTop: "15px",
                            }}
                          >
                            <div
                              style={{
                                backgroundImage: `url(${phim.hinhAnh})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                              <img
                                src={phim.hinhAnh}
                                width="120"
                                height="150"
                                alt=""
                                className="opacity-0"
                                onError={() => {}}
                              />
                            </div>
                            <div className="ml-5">
                              <h1 className="text-2xl font-semibold">
                                {phim.tenPhim}
                              </h1>
                              {phim.lstLichChieuTheoPhim
                                .slice(0, 4)
                                .map((lichChieu, index) => {
                                  return (
                                    <Link
                                      to={`/detail/${phim.maPhim}`}
                                      className="text-xl  "
                                      style={
                                        {
                                          // border: "1px solid black",
                                          // borderRadius: "10px",
                                          // marginRight: "10px",
                                          // padding: "1px",
                                        }
                                      }
                                      key={index}
                                    >
                                      <Tag className="text-sm" color="magenta">
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("DD-MM-YYYY-hh:mm")}
                                      </Tag>
                                    </Link>
                                  );
                                })}
                            </div>
                          </div>
                          <hr />
                        </Fragment>
                      );
                    }),
                  };
                })}
              />
            ),
          };
        })}
      />
    </div>
  );
};

// cumRap.danhSachPhim.map((phim) => {
//   return (
//     <div>
//       <p>{phim.tenPhim}</p>
//       {phim.lstLichChieuTheoPhim.map((gioChieu) => {
//         return <button>{gioChieu.ngayGioChieu}</button>;
//       })}
//     </div>
//   );
// })
