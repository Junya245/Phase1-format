//スタートボタンを取得する
const staBtn = document.getElementById("startTimer");
//nowTime nowTime2 nowTime3を取得する
const nowTime = document.getElementById("nowTime");
const nowTime2 = document.getElementById("nowTime2");
const nowTime3 = document.getElementById("nowTime3");
//0をnowTime nowTime2 nowTime3に入力する
nowTime.textContent = 0;
nowTime2.textContent = 0;
nowTime3.textContent = 0;
//ストップボタン1,2,3を取得する
const stoBtn1 = document.getElementById("setTime1");
const stoBtn2 = document.getElementById("setTime2");
const stoBtn3 = document.getElementById("setTime3");
let count = 0;
let count2 = 0;
let count3 = 0;
let id;
let id2;
let id3;
// スタートボタンを押したら0.1秒間隔で0-9の数字を順番にnowTime nowTime2 nowTime3に表示する
staBtn.addEventListener("click", function () {
  clearInterval(id);
  clearInterval(id2);
  clearInterval(id3);
  stoBtn1.disabled = false;
  stoBtn2.disabled = false;
  stoBtn3.disabled = false;
  id = setInterval(function () {
    count = count + 1;
    nowTime.textContent = count;
    if (count === 9) {
      count = -1;
    }
  }, 100);
  id2 = setInterval(function () {
    count2 = count2 + 1;
    nowTime2.textContent = count2;
    if (count2 === 9) {
      count2 = -1;
    }
  }, 100);
  id3 = setInterval(function () {
    count3 = count3 + 1;
    nowTime3.textContent = count3;
    if (count3 === 9) {
      count3 = -1;
    }
  }, 100);
});
const check = function () {
  if (
    stoBtn1.disabled === true &&
    stoBtn2.disabled === true &&
    stoBtn3.disabled === true
  ) {
    if (count === count2 && count === count3) {
      alert("おめでとう");
    } else {
      alert("再挑戦");
    }
  }
};
// ストップボタンを押したとき数字を止める
stoBtn1.addEventListener("click", function () {
  clearInterval(id);
  stoBtn1.disabled = true;
  check();
});

stoBtn2.addEventListener("click", function () {
  clearInterval(id2);
  stoBtn2.disabled = true;
  check();
});
stoBtn3.addEventListener("click", function () {
  clearInterval(id3);
  stoBtn3.disabled = true;

  check();
});
//３つのストップボタンが押された状態でで３つの数字が揃ったらおめでとう、揃わなかったら再挑戦とアラートする
