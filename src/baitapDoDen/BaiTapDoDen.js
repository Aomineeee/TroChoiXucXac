import React from "react";
import KetQuaTroChoi from "./KetQuaTroChoi/KetQuaTroChoi";
import XucXac from "./XucXac/XucXac";
import "./XucXac/XucXac.css";
import bgGame from "../assets/GameXucXac/bgGame.png";

export default function BaiTapDoDen() {
  let styleBgGame = {
    backgroundImage: `url(${bgGame})`,
    width: "100vw",
    height: "100vh",
  };
  return (
    <div style={styleBgGame} className="game-container">
      <XucXac />
      <KetQuaTroChoi />
    </div>
  );
}
