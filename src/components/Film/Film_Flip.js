import React, { Fragment } from "react";
import "./Film_Flip.css";

import { Link } from "react-router-dom";
import { PlayCircleOutlined } from "@ant-design/icons";

export default function Film_Flip(props) {
  const { arrFilm } = props;

  const renderFilms = () => {
    return arrFilm.items?.map((item, index) => {
      return (
        // className={`${styleSlick["width-item"]}`}
        <div key={item.maPhim}>
          <div className="flip-card mt-10">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={item.hinhAnh}
                  alt="Avatar"
                  style={{ width: 300, height: 300 }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://picsum.photos/300/300";
                  }}
                />
              </div>
              <div
                className="flip-card-back"
                style={{
                  position: "relative",
                  backgroundColor: "rgba(0,0,0,.9)",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0 }}>
                  <img
                    src={item.hinhAnh}
                    alt="Avatar"
                    style={{ width: 300, height: 300 }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://picsum.photos/300/300";
                    }}
                  />
                </div>
                <div
                  className="w-full h-full"
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(0,0,0,.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div className="rounded-full cursor-pointer">
                      <PlayCircleOutlined style={{ fontSize: "50px" }} />
                    </div>
                    <div className="text-2xl mt-2 font-bold">
                      {item.tenPhim}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to={`/detail/${item.maPhim}`}>
              <div className="bg-black text-center text-white hover:text-red-400 cursor-pointer py-2   my-2 text-success-50 font-bold">
                ĐẶT VÉ
              </div>
            </Link>
          </div>
          {/* <Film phim={item} /> */}
        </div>
      );
    });
  };

  // console.log(props);
  return <Fragment>{renderFilms()}</Fragment>;
}
