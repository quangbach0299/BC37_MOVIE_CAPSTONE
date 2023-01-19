import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { QuanLyDatVeReducer } from "./reducers/QuanLyDatVeReducer.js";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer";

const rootReducer = combineReducers({
  //state ứng dụng
  CarouselReducer: CarouselReducer,
  QuanLyPhimReducer: QuanLyPhimReducer,
  QuanLyRapReducer: QuanLyRapReducer,
  QuanLyNguoiDungReducer: QuanLyNguoiDungReducer,
  QuanLyDatVeReducer: QuanLyDatVeReducer,
  LoadingReducer: LoadingReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
