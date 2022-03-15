import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function KetQuaTroChoi() {
  let { soBanChoi, soBanThang, banChon, diem, ketQua } = useSelector(
    (state) => {
      return state.XucXacReducer;
    }
  );
  let dispatch = useDispatch();

  return (
    <div className="text-center py-3 display-4">
      <p>
        {ketQua} - {diem}
      </p>
      <div className="text-danger">Bạn Chọn: {banChon}</div>
      <div className="text-primary">Số Bàn Thắng: {soBanThang}</div>
      <div className="text-secondary">Số Bàn Chơi: {soBanChoi}</div>
      <button
        className="text-center display-3 bg-success text-black"
        onClick={() => {
          dispatch({
            type: "PLAY_GAME",
          });
        }}
      >
        PLAY GAME
      </button>
    </div>
  );
}
