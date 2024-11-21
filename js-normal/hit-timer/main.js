// スタートでカウント開始

// 確認ボタンで結果と経過時間をアラートで知らせる
// 40 秒経ったら強制終了
//スタートボタンを取得する
const staBtn = document.getElementById("startTimer");
let count = 0;
let id;
//ボタン押したときに動かしたい
staBtn.addEventListener("click", function () {
  //一秒ごとにカウント増やしたい
  clearInterval(id)
   id = setInterval(function () {
    count = count + 1;
    if (count === 40) {
      alert("終了/また挑戦しろ");
      count = 0;
      clearInterval(id)
    }
    console.log(count);
  }, 1000);
});

//確認ボタンを取得する
const conBtn = document.getElementById("confirmTime");
conBtn.addEventListener("click", function () {
  if (count < 20) {
    alert(`まだ${count}秒、、、再スタートだ`);
  } else if (count === 20) {
    alert("大正解^-^");
  } else {
    alert(`もう${count}秒だ！再挑戦せよ`);
  }
  clearInterval(id);
  count = 0;
});
