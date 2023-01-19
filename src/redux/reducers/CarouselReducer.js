import { SET_CAROUSEL } from "../actions/types/CarouselType";

const stateDefault = {
  // Mảng trong đối tượng
  arrImg: [],
};

export const CarouselReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CAROUSEL: {
      state.arrImg = action.arrImg;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
