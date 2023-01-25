import React, { Fragment } from "react";
import { Button, Table } from "antd";
import { MySearch } from "../../../components/StyledComponent/SearchButtonStyledComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMovieAction,
  getMovieListAction,
  getMoviePageListAction,
} from "../../../redux/actions/QuanLyPhimAction";
import {
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

export default function Films(props) {
  const { arrFilm, arrFilmSearch } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  // const datasource = arrFilm.items?.map((object, index) => {
  //   return { ...object, key: `${index + 1}` };
  // });

  const dataSource = arrFilmSearch.length > 0 ? arrFilmSearch : arrFilm.items;

  // console.log(datasource[0].key);
  const dispatch = useDispatch();
  const onSearch = (values) => {
    // Gọi api lấy danh sách phim
    console.log(values);
    dispatch(getMovieListAction(values));
  };

  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend"],
      width: "10%",
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => a.tenPhim.localeCompare(b.tenPhim),
      sortDirections: ["descend"],
      width: "20%",
    },
    {
      title: "Mô Tả",
      // dataIndex: "moTa",
      width: "40%",
      sorter: (a, b) => a.moTa.localeCompare(b.moTa),
      render: (dataSrc) => {
        return (
          <Fragment key={dataSrc.maPhim}>
            {dataSrc.moTa.length > 200
              ? dataSrc.moTa.substring(0, 100) + "..."
              : dataSrc.moTa}
          </Fragment>
        );
      },
    },
    {
      title: "Hình Ảnh",
      // dataIndex: "hinhAnh",
      render: (dataSrc) => (
        <img
          key={dataSrc.maPhim}
          className=""
          src={dataSrc.hinhAnh}
          alt="img"
          style={{ width: "100px" }}
        />
      ),
      width: "10%",
    },
    {
      title: "Hành Động",
      // dataIndex: "maPhim",
      render: (dataSrc) => {
        return (
          <Fragment key={dataSrc.maPhim}>
            <NavLink
              to={`/admin/films/edit/${dataSrc.maPhim}`}
              className="text-2xl text-black m-2 hover:text-red-500"
            >
              <EditOutlined />
            </NavLink>
            <span
              className="text-2xl text-black m-2 hover:text-red-500"
              onClick={() => {
                if (
                  window.confirm("Bạn có chắc muốn xóa film" + dataSrc.tenPhim)
                ) {
                  dispatch(deleteMovieAction(dataSrc.maPhim));
                }
              }}
            >
              <DeleteOutlined />
            </span>
            <NavLink
              to={`/admin/films/showtime/${dataSrc.maPhim}`}
              className="text-2xl text-black hover:text-red-500"
            >
              <CalendarOutlined />
            </NavLink>
          </Fragment>
        );
      },
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h1 className="text-3xl mb-5">Quản Lý Phim</h1>

      <Link to="/admin/films/addnew">
        <Button className="mb-5">Thêm Phim</Button>
      </Link>

      <MySearch
        placeholder="Nhập nội dung tìm kiếm ..."
        enterButton="Tìm Kiếm "
        size="large"
        onSearch={onSearch}
        className="mb-5"
      />

      <Table
        rowKey="maPhim"
        columns={columns}
        dataSource={dataSource}
        onChange={onChange}
        pagination={
          arrFilmSearch.length > 0
            ? ""
            : {
                position: ["bottomCenter"],
                // Dùng để tích xanh cái nút
                defaultCurrent: 1,
                // Cái current có hay ko ko quan trọng
                // current: arrFilm.currentPage,
                total: arrFilm.totalCount,
                pageSize: 8,
                onChange: (current) => {
                  dispatch(getMoviePageListAction(current));
                },
              }
        }
      />
    </div>
  );
}
