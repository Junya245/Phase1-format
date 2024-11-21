// テキストボックスの数字をセットで受け取る
const  element = document.getElementById("inputTime");
console.log(element);
const mozi = document.getElementById("nowTime");
const stoBtn = document.getElementById("stopTimer");

// スタートでカウントダウン開始する
//スタートボタンを取得する
const staBtn = document.getElementById("startTimer");
//変更ボタンを取得する
const chaBtn = document.getElementById("setTime");
//クリックした時にイベントを起こす
let id;
let count;
chaBtn.addEventListener("click", function () {
  count = element.valueAsNumber;
  console.dir(element.valueAsNumber);
  mozi.innerHTML = element.valueAsNumber + " : セット完了です";
  //セット完了です
});


//クリックした時にイベントを起こす

staBtn.addEventListener("click", function () {
  if (count > 0) {
    id = setInterval(function () {
      count = count - 1;
      mozi.innerHTML = count;
      console.log(element.valueAsNumber);
      console.log(count);
      if (count === 0) {
        alert("終了");
        clearInterval(id);
      }
      //カウントダウンする
    }, 1000);
  }
});

//テキストボックスの下に数字を出す
//0になったら"終了"のアラートをする


// ストップボタンを取得する

//クリックした時にイベントを起こす
stoBtn.addEventListener("click", function () {
  clearInterval(id);
  mozi.innerHTML = count + " : ストップしました";
});
//カウントを止める
//ストップしましたの文字列を出す
