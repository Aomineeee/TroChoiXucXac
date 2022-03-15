import { DAT_CUOC, PLAY_GAME, TAI, XIU } from "../constants/XucXacConstants";
import { randomIntFromInterval } from "../utils/XucXacUtils";

const stateDefault = {
  soBanChoi: 0,
  soBanThang: 0,
  banChon: TAI,
  ketQua: "",
  diem: "",
  mangXucXac: [
    {
      hinhAnh: "./img/gameXucXac/2.png",
      diemSo: 2,
    },
    {
      hinhAnh: "./img/gameXucXac/2.png",
      diemSo: 2,
    },
    {
      hinhAnh: "./img/gameXucXac/2.png",
      diemSo: 2,
    },
  ],
};

export const XucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_CUOC:
      state.banChon = action.payload;
      return { ...state };
    case PLAY_GAME:
      let mangXucXacRanDom = [];
      let tongDiemXucXacRanDom = 0;
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = randomIntFromInterval(1, 6);
        tongDiemXucXacRanDom += soNgauNhien;
        let xxnn = {
          hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
          diemSo: soNgauNhien,
        };
        mangXucXacRanDom.push(xxnn);
      }
      let cloneState = { ...state };
      cloneState.mangXucXac = mangXucXacRanDom;
      cloneState.soBanChoi++;
      let ketQua = tongDiemXucXacRanDom >= 11 ? TAI : XIU;
      cloneState.ketQua = ketQua;
      cloneState.diem = tongDiemXucXacRanDom;
      if (ketQua == cloneState.banChon) {
        cloneState.soBanThang++;
      }
      return { ...cloneState };
    default:
      return state;
  }
};
