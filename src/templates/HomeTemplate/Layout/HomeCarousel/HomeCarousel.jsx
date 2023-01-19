import { Carousel } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";

export const HomeCarousel = () => {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  // console.log("arrImg", arrImg);

  const dispatch = useDispatch();

  // Sẽ tự kích hoạt khi component load ra
  useEffect(() => {
    // 1. action = {type:"",data:""};
    // 2. (Phải cài middleware) callbackfunction(dispatch) (tức là hàm đã chạy nên ko cần dấu ngoặc) còn bên Action thì return về 1 hàm nhwung chưa đc thực thi nên gọi hàm đó là closure function
    dispatch(getCarouselAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contentStyle = {
    margin: 0,
    height: "900px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };

  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };

  const renderImg = () => {
    return arrImg?.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img src={item.hinhAnh} className="opacity-0" alt={item.hinhAnh} />
          </div>
        </div>
      );
    });
  };

  return (
    // marginTop: "88px"
    <Carousel style={{}} afterChange={onChange}>
      {renderImg()}
    </Carousel>
  );
};
