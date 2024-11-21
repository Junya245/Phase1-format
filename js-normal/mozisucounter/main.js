// リアルタイムで400文字まであと何文字か表示
//テキストエリアを取得する
//文字が打たれたらカウントを下げる

//リセットボタンでテキストを削除する
//リセットボタンを取得する
//ボタンをクリックしたらイベントを起こす
//テキストエリア内の文字を全部消す
//カウントを400に戻す
const tearea = document.getElementById("sampleForm");
const mozi = document.getElementById("textCounter");
const reset = document.getElementById("resetBtn");

let count = 400;
mozi.textContent = `あと${count - tearea.value.length}文字`;

tearea.addEventListener("keyup", function () {
  mozi.textContent = `あと${count - tearea.value.length}文字`;
});

reset.addEventListener("click", function () {
  mozi.textContent = `あと${count}文字`;
});
