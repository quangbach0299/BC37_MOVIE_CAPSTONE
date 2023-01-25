import { Button, Cascader, DatePicker, Form, InputNumber } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCineClusterInfoListSystemAction,
  getCineInfoListSystemAction,
} from "../../../redux/actions/QuanLyRapAction";
import { postSchedulerMovieAction } from "../../../redux/actions/QuanLyPhimAction";

export default function ShowTime() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const onFinish = (values) => {
    console.log("values", values);
    // console.log("dayjs", dayjs(values.ngayChieuGioChieu).format("DD-MM-YYYY hh:mm:ss"));

    const dataSubmit = {
      maPhim: +id,
      ngayChieuGioChieu: dayjs(values.ngayChieuGioChieu).format(
        "DD/MM/YYYY hh:mm:ss"
      ),
      maRap: values.maCumRap[0],
      giaVe: values.giaVe,
    };

    dispatch(postSchedulerMovieAction(dataSubmit));
  };

  const { heThongRap, heThongCumRap } = useSelector(
    (state) => state.QuanLyRapReducer
  );

  console.log(heThongCumRap);

  useEffect(() => {
    dispatch(getCineInfoListSystemAction());
  }, []);

  return (
    <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      onFinish={onFinish}
    >
      <h1 className="text-4xl">Tạo Lịch Chiếu</h1>
      <Form.Item label="Hệ Thống Rạp" name={"maHeThongRap"}>
        <Cascader
          placeholder={"Chọn hế thống rạp"}
          options={heThongRap.map((rap) => {
            return { value: rap.maHeThongRap, label: rap.tenHeThongRap };
          })}
          onChange={(maHeThongRap) => {
            console.log(maHeThongRap);
            dispatch(getCineClusterInfoListSystemAction(maHeThongRap));
          }}
        />
      </Form.Item>

      <Form.Item label="Cụm Rạp" name={"maCumRap"}>
        <Cascader
          placeholder={"Chọn cụm rạp"}
          options={heThongCumRap.map((cumRap) => {
            return {
              label: cumRap.tenCumRap,
              value: cumRap.maCumRap,
            };
          })}
        />
      </Form.Item>

      <Form.Item label="Ngày Chiếu Giờ Chiếu" name={"ngayChieuGioChieu"}>
        <DatePicker showTime format={"DD-MM-YYYY hh:mm:ss"} />
      </Form.Item>

      <Form.Item label="Giá Vé" name={"giaVe"}>
        <InputNumber min={75000} max={150000} />
      </Form.Item>

      <Form.Item label="Button">
        <Button htmlType="submit">Button</Button>
      </Form.Item>
    </Form>
  );
}
