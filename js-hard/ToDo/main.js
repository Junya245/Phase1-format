//テキストボックスを取得
const textbox = document.getElementById("add-area");
//追加するボタンを取得
const addBtn = document.getElementsByClassName("add-btn")[0];
//追加するボタンを押したときにliタグを作る
addBtn.addEventListener("click", function () {
  const item = document.createElement("li");
  //ボタンを作る
  const button = document.createElement("button");
  //ボタンに完了という文字を入力する
  button.innerText = "完了";
  //入力した文字と完了ボタンをliタグに追加する
  item.textContent = textbox.value;
  item.appendChild(button);
  //ulタグを取得する
  const todo = document.getElementById("todo");
  //liタグをulタグに追加する
  todo.appendChild(item);
  //完了ボタンを押したときにliタグを削除する
  button.addEventListener("click", function () {
    item.remove();
  });
});
