/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Film_Flip from "../Film/Film_Flip";

export default function MultipleRowSlick(props) {
  const renderFilms = () => {
    return props.arrFilm?.slice(0, 12).map((item, index) => {
      return (
        // className={`${styleSlick["width-item"]}`}
        <div key={index}>
          <Film_Flip item={item} />
          {/* <Film phim={item} /> */}
        </div>
      );
    });
  };

  return <div>{renderFilms()}</div>;
}
