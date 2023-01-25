import React, { useEffect } from "react";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMoviePageListAction } from "../../redux/actions/QuanLyPhimAction";
import { Link, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to="/admin">Users</Link>, "1", <PieChartOutlined />),
  getItem("FilmManager", "sub1", <UserOutlined />, [
    getItem(<Link to="/admin/films">Films</Link>, "2"),
    getItem(<Link to="/admin/films/addnew">Add New</Link>, "3"),
    // getItem(<Link to="/admin/films/edit">Edit</Link>, "4"),
  ]),
  // getItem("Team", "sub2", <TeamOutlined />, [
  //   getItem("Team 1", "5"),
  //   getItem("Team 2", "6"),
  // ]),
  // getItem("Files", "7", <FileOutlined />),
];

export default function AdminTemplate() {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviePageListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 50,
            margin: 16,
            backgroundImage: `url("https://login.cyberlearn.vn/static/media/logo.0f405a3b.png")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        ></Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          CyberSoftAdmin ©2023 Created by Quang Bach
        </Footer>
      </Layout>
    </Layout>
  );
}
