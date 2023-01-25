import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Switch,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postMovieDetailAndPictureAction } from "../../../../redux/actions/QuanLyPhimAction";
import { GROUPID } from "../../../../utils/settings/config";

export default function AddNew() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [imageBase64, setImageBase64] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
      maNhom: GROUPID,
    },
    onSubmit: (values) => {
      console.log("values", values);
      // console.log("formik", formData.get("tenPhim"));

      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }

      dispatch(postMovieDetailAndPictureAction(formData));
    },
  });

  const handleChangeDatePicker = (date, dateString) => {
    let ngayKhoiChieu = moment(date).format("DD-MM-YYYY");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);

    // formik.setFieldValue("ngayKhoiChieu", dateString);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleInputNumber = (value) => {
    console.log(value);
    formik.setFieldValue("danhGia", value);
  };

  const handleChangeFile = async (e) => {
    const file = e.target.files[0];
    await formik.setFieldValue("hinhAnh", file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      setImageBase64(event.target.result);
      // Đây là hình base64
    };
    setImageUpload(file);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      onFinish={formik.handleSubmit}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Tên Phim">
        <Input name="tenPhim" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Trailer">
        <Input name="trailer" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Mô tả">
        <Input name="moTa" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Ngày Khởi Chiếu">
        <DatePicker
          name="ngayKhoiChieu"
          format={"DD/MM/YYYY"}
          onChange={handleChangeDatePicker}
        />
      </Form.Item>

      <Form.Item label="Đang Chiếu" valuePropName="checked">
        <Switch
          className="bg-gray-400"
          onChange={handleChangeSwitch("dangChieu")}
        />
      </Form.Item>

      <Form.Item label="Sắp Chiếu" valuePropName="checked">
        <Switch
          className="bg-gray-400"
          onChange={handleChangeSwitch("sapChieu")}
        />
      </Form.Item>

      <Form.Item label="Hot" valuePropName="checked">
        <Switch className="bg-gray-400" onChange={handleChangeSwitch("hot")} />
      </Form.Item>

      <Form.Item label="Số Sao">
        <InputNumber
          onChange={handleInputNumber}
          defaultValue={10}
          min={1}
          max={10}
        />
      </Form.Item>

      <Form.Item label="Hình Ảnh">
        <input
          type="file"
          name="hinhAnh"
          accept="image/png, image/jpeg, image/gif"
          onChange={handleChangeFile}
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
          ""
        )}
      </Form.Item>

      <Form.Item label="Tác Vụ">
        <Button htmlType="submit" className="bg-white" danger>
          Thêm
        </Button>
      </Form.Item>
    </Form>
  );
}
