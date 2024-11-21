//  ボタンを押す
// ボタンを取得する
// ボタンを押してイベントを起こす

// const Btn = document.getElementById("pushBtn");
// const body = document.querySelector("body");
// const season = document.getElementById("viewImg");
// let count = 1;

// Btn.textContent = `春へ`;
// body.appendChild(season);
// Btn.addEventListener("click", function () {
//   count = count + 1;
//   seasonnum = `./img/slide${count}.png`;
//   season.setAttribute("src", seasonnum);
//   if (count === 1) {
//     Btn.textContent = `春へ`;
//   } else if (count === 2) {
//     Btn.textContent = `夏へ`;
//   } else if (count === 3) {
//     Btn.textContent = `秋へ`;
//   } else if (count === 4) {
//     Btn.textContent = `冬へ`;
//     count = 0;
//   }
// });
// //　画像が切り替わる 文字も切り替わる

// let seasonnum = `./img/slide${count}.png`;
// season.setAttribute("src", seasonnum);

const seasondata = [
  { img: "./img/slide1.png", text: "春へ" },
  { img: "./img/slide2.png", text: "夏へ" },
  { img: "./img/slide3.png", text: "秋へ" },
  { img: "./img/slide4.png", text: "冬へ" },
];
let count = 0;
const Btn = document.getElementById("pushBtn");
const season = document.getElementById("viewImg");
Btn.textContent = seasondata[count].text;
season.setAttribute("src", seasondata[count].img);

Btn.addEventListener("click", function () {
  if (count === 3) {
    count = 0;
  } else {
    count = count + 1;
  }
  season.setAttribute("src", seasondata[count].img);
  Btn.textContent = seasondata[count].text;
});
