import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const data = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  5,
  6,
  44,
  21,
  88,
  2,
  7,
  68,
  15,
  62,
  9,
  3,
  9,
  8,
  73,
  28,
  16,
  4,
  6,
  87,
  28,
  65,
  38,
  6,
  7,
  16,
  85,
  63,
  23,
  6,
  9,
  64,
  91,
  9,
  70,
  8,
  1,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  6,
  9,
  90,
  1,
  6,
  7,
  64,
  4,
  3,
  9,
  73,
  80,
  98,
  4,
  6,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  3,
  4,
  53,
  7,
  8,
  40,
  14,
  5
];
ReactDOM.render(<App data={data} />, document.getElementById("root"));
