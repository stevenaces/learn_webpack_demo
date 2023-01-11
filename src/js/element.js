import "../css/style.css";
import "../css/title.less";
import "../css/image.css";
import "../font/iconfont.css"; // 引入字体样式

import zznhImg from "../img/zznh.png";

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好啊, steven~";
document.body.appendChild(divEl);

// 图像资源作为背景进行显示
const bgDiv = document.createElement("div");
bgDiv.className = "image-bg";
document.body.appendChild(bgDiv);

// 图像资源作为img元素src属性进行显示
const imgEl = document.createElement("img");
imgEl.src = zznhImg;
document.body.appendChild(imgEl);

// 字体资源
const iEl = document.createElement("i");
iEl.className = "iconfont icon-ashbin";
document.body.appendChild(iEl);
