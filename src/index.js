//index.js là chương trình crender app

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; //import default, khi import bằng một cái tên khác thì vẫn được chấp nhận
                        // ví dụ import AppI from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* nếu ở trên dùng import default thì chỗ này có thể gọi theo AppI */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
