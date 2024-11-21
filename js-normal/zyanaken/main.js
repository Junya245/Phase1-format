const Btn = document.getElementById("gameStart");
const opp = document.getElementById("cpHand");
opp.textContent = "相手の手";
const res = document.getElementById("log");
res.textContent = "結果 :";
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * max + min);
}
Btn.addEventListener("click", function () {
  const num = document.getElementById("myHand").value;
  const oppnum = getRandomInt(1, 3);
  if (oppnum === 1) {
    opp.textContent = "相手の手 :グー";
  } else if (oppnum === 2) {
    opp.textContent = "相手の手 :チョキ";
  } else if (oppnum === 3) {
    opp.textContent = "相手の手 :パー";
  }

  
});
