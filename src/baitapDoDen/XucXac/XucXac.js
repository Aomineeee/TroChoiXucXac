import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TAI, XIU } from "../redux/constants/XucXacConstants";

export default function XucXac() {
  let { mangXucXac } = useSelector((state) => {
    return state.XucXacReducer;
  });
  let dispatch = useDispatch();
  const handleUserDatCuoc = (value) => {
    dispatch({
      type: "DAT_CUOC",
      payload: value,
    });
  };
  const renderMangXucXac = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {mangXucXac.map((item) => {
          return <img style={{ width: "50px" }} src={item.hinhAnh} alt="" />;
        })}
      </div>
    );
  };
  return (
    <div className="pt-3">
      <p className="text-center display-3">Bài tập game xúc xắc</p>
      <div className="container">
        <div className="row">
          <div className="col-3 text-center d-flex justify">
            <div
              style={{
                width: "180px",
                height: "180px",
                boderRadius: "8px",
                background: "red",
                lineHeight: "160px",
                fontSize: "52px",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => {
                handleUserDatCuoc(TAI);
              }}
            >
              Tài
            </div>
          </div>
          <div className="col-6">{renderMangXucXac()}</div>
          <div className="col-3 text-center">
            <div
              style={{
                width: "180px",
                height: "180px",
                boderRadius: "8px",
                background: "black",
                lineHeight: "160px",
                fontSize: "52px",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => {
                handleUserDatCuoc(XIU);
              }}
            >
              Xỉu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
