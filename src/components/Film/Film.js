/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Film(props) {
  const { phim } = props;

  return (
    <div className="mr-2 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <div
        style={{
          background: `url(${phim.hinhAnh}),url("https://picsum.photos/200/300")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          className="opacity-0 w-full"
          style={{ height: "300px" }}
          src={phim.hinhAnh}
          alt={phim.tenPhim}
        />
      </div>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-10">
        {phim.tenPhim}
      </h1>
      <p className="leading-relaxed mb-3">
        {phim.moTa.length > 100 ? (
          <span>{phim.moTa.slice(0, 100)}...</span>
        ) : (
          <span>{phim.moTa}</span>
        )}
      </p>
      <a className="text-indigo-500 inline-flex items-center">
        {" "}
        Đặt Vé
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
