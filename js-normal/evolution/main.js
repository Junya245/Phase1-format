//ボタンを取得
//ボタンにイベント
//ランダムな数1～10に画像を割り振る
//1～4に1枚
//5～7に2枚
//8～9に3枚
//10に4枚
//リセットボタンで数字と画像リセット

const evoBtn = document.getElementById("setBtn");
const resBtn = document.getElementById("resetBtn");
const imgwrap = document.getElementById("showImg");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * max + min);
}

evoBtn.addEventListener("click", function () {
  const randomnum = getRandomInt(1, 10);
  imgwrap.innerHTML = "";
  const img1 = document.createElement("img");
  img1.setAttribute("src", "./img/evolution1.png");
  imgwrap.appendChild(img1);
  if (5 <= randomnum) {
    const img2 = document.createElement("img");
    img2.setAttribute("src", "./img/evolution2.png");
    imgwrap.appendChild(img2);
  }
  if (8 <= randomnum) {
    const img3 = document.createElement("img");
    img3.setAttribute("src", "./img/evolution3.png");
    imgwrap.appendChild(img3);
  }
  if (randomnum === 10) {
    const img4 = document.createElement("img");
    img4.setAttribute("src", "./img/evolution4.png");
    imgwrap.appendChild(img4);
  }
});

resBtn.addEventListener("click", function () {
  imgwrap.innerHTML = "";
});
