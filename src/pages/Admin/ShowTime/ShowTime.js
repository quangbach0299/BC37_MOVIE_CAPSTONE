import { Button, Cascader, DatePicker, Form, InputNumber } from "antd";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCineClusterInfoListSystemAction,
  getCineInfoListSystemAction,
} from "../../../redux/actions/QuanLyRapAction";

export default function ShowTime() {
  const onChangeDatePicker = () => {};
  const onChaneDatePickerOk = () => {};
  const onChangeInputNumber = () => {};
  const dispatch = useDispatch();

  const { heThongRap, heThongCumRap } = useSelector(
    (state) => state.QuanLyRapReducer
  );

  useEffect(() => {
    dispatch(getCineInfoListSystemAction());
  }, []);

  // [
  //   {
  //     value: "GiaTrizhejiang",
  //     label: "Zhejiang",
  //     children: [
  //       {
  //         value: "GiaTrihangzhou",
  //         label: "Hangzhou",
  //       },
  //     ],
  //   },
  // ]

  return (
    <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
    >
      <h1 className="text-4xl">Tạo Lịch Chiếu</h1>
      <Form.Item label="Hệ Thống Rạp">
        <Cascader
          placeholder={"Chọn hế thống rạp"}
          options={heThongRap.map((rap) => {
            return { value: rap.maHeThongRap, label: rap.tenHeThongRap };
          })}
          onChange={(maHeThongRap) => {
            dispatch(getCineClusterInfoListSystemAction(maHeThongRap));
          }}
        />
      </Form.Item>

      <Form.Item label="Cụm Rạp">
        <Cascader
          placeholder={"Chọn cụm rạp"}
          options={[
            {
              value: "GiaTrizhejiang",
              label: "Zhejiang",
              children: [
                {
                  value: "GiaTrihangzhou",
                  label: "Hangzhou",
                },
              ],
            },
          ]}
        />
      </Form.Item>

      <Form.Item label="Ngày Chiếu Giờ Chiếu">
        <DatePicker
          showTime
          onChange={onChangeDatePicker}
          onOk={onChaneDatePickerOk}
        />
      </Form.Item>

      <Form.Item label="Giá Vé">
        <InputNumber min={75000} max={150000} onChange={onChangeInputNumber} />
      </Form.Item>

      <Form.Item label="Button">
        <Button htmlType="submit">Button</Button>
      </Form.Item>
    </Form>
  );
}
