const changeBtn = document.getElementById("setPassword");
const nowpass = document.getElementById("nowPassword");

let passValue = "aaaaa";
nowpass.textContent = `現在のパスワードは${passValue}`;

changeBtn.addEventListener("click", function () {
  const confirmPass = document.getElementById("confirmPassword").value;
  const newPass = document.getElementById("newPassword").value;
  if (passValue === confirmPass) {
    if (passValue !== newPass) {
      passValue = newPass;
      nowpass.textContent = `現在のパスワードは${passValue}`;
      alert(`新しいパスワードは${passValue}です`);
    } else {
      alert("同じパスワードはつかえません！");
    }
  } else {
    alert("古いパスワードが間違っています！");
  }
});


