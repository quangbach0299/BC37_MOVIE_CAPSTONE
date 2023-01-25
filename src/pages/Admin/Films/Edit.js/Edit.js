/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Switch,
  Upload,
} from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GROUPID } from "../../../../utils/settings/config";
import {
  getMovieDetailAction,
  postUpdateMovieDetailAndPictureAction,
  getMoviePageListAction,
} from "../../../../redux/actions/QuanLyPhimAction";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
const { TextArea } = Input;

// ----------------------------------------------------------------------------------------------
export default function AddNew() {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [imageBase64, setImageBase64] = useState(null);
  const [fileImage, setFileImage] = useState(null);
  const [ngayKhoiChieu, setNgayKhoiChieu] = useState(0);
  const { thongTinPhim } = useSelector((state) => state.QuanLyPhimReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    dispatch(getMovieDetailAction(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!thongTinPhim.maPhim) return null;

  const onFormLayoutChange = ({ disabled }, e) => {
    setComponentDisabled(disabled);
  };

  const onChange = (date, dateString) => {
    setNgayKhoiChieu(dateString);
  };

  const handleChangePic = (e) => {
    const file = e.target.files[0];
    // if (file.type === "image/jpeg" || file.type === "image/png") {
    // }
    // Tạo đối tượng để đọc file
    setFileImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      setImageBase64(event.target.result);
      // Đây là hình base64
    };
  };

  const onFinish = (values) => {
    //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata

    let formData = new FormData();
    formData.append("hot", values.hot);
    formData.append("tenPhim", values.tenPhim);
    formData.append("trailer", values.trailer);
    formData.append("moTa", values.moTa);
    formData.append("sapChieu", values.sapChieu);
    formData.append("dangChieu", values.dangChieu);
    formData.append("danhGia", values.danhGia);
    formData.append("ngayKhoiChieu", values.ngayKhoiChieu);
    formData.append("maNhom", GROUPID);
    formData.append("maPhim", thongTinPhim.maPhim);
    if (fileImage != null) {
      formData.append("File", fileImage, fileImage.name);
    } else {
      formData.append("File", null);
    }

    // Cập nhật upload hình
    dispatch(postUpdateMovieDetailAndPictureAction(formData))
      .then(() => {
        navigate("/admin/films");
        dispatch(getMoviePageListAction());
      })
      .catch((error) => {
        alert("Cập nhật phim thất bại");
      });
  };

  const lich = thongTinPhim.ngayKhoiChieu;
  const lichFilm = moment(lich).format("DD/MM/YYYY");

  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>

      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
        size={"default"}
        onFinish={onFinish}
        initialValues={{
          maPhim: thongTinPhim.maPhim,
          dangChieu: thongTinPhim.dangChieu,
          sapChieu: thongTinPhim.sapChieu,
          hot: thongTinPhim.hot,
          danhGia: thongTinPhim.danhGia,
          tenPhim: thongTinPhim.tenPhim,
          trailer: thongTinPhim.trailer,
          moTa: thongTinPhim.moTa,
          maNhom: GROUPID,
          ngayKhoiChieu: dayjs(lichFilm, "DD/MM/YYYY"),
          hinhAnh: null,
        }}
      >
        {/* ............... */}

        <Form.Item label="Tên Phim" name="tenPhim">
          <Input />
        </Form.Item>

        <Form.Item label="Trailer" name="trailer">
          <Input />
        </Form.Item>

        <Form.Item label="Mô Tả" name="moTa">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Ngày khởi chiếu" name="ngayKhoiChieu">
          <DatePicker onChange={onChange} format={"DD-MM-YYYY"} />
        </Form.Item>

        <Form.Item
          label="Đang Chiếu"
          valuePropName="checked"
          name="dangChieu"
          // initialValue={false}
        >
          <Switch className="bg-gray-400" />
        </Form.Item>
        <Form.Item
          label="Sắp Chiếu"
          valuePropName="checked"
          name="sapChieu"
          // initialValue={false}
        >
          <Switch className="bg-gray-400" />
        </Form.Item>
        <Form.Item
          label="Hot"
          valuePropName="checked"
          name="hot"
          // initialValue={false}
        >
          <Switch className="bg-gray-400" />
        </Form.Item>

        <Form.Item label="Đánh giá" name="danhGia">
          {/* initialValue={10} */}
          <InputNumber min={1} max={10} />
        </Form.Item>

        <Form.Item label="Upload" name="hinhAnh">
          <div>
            <input
              type="file"
              accept="image/png, image/jpeg,image/jpg, image/gìf"
              onChange={handleChangePic}
            />
            {imageBase64 ? (
              <img
                src={imageBase64}
                style={{
                  width: "150px",
                  height: "150px",
                }}
                alt=""
              />
            ) : (
              <img
                src={thongTinPhim.hinhAnh}
                style={{
                  marginTop: "20px",
                  width: "150px",
                  height: "150px",
                }}
                alt=""
              />
            )}
          </div>
        </Form.Item>
        <Form.Item label="Tác Vụ">
          <Button
            style={{ background: "#1677ff", color: "white" }}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
