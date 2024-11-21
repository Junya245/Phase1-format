const startBtn = document.getElementById("diceBtn");
const body = document.querySelector("body");

const dice = document.createElement("img");

body.appendChild(dice);
dice.style.width = "100px";
dice.style.height = "100px";
startBtn.addEventListener("click", function () {
  const id = setInterval(function () {
    const randomnum = getRandomInt(1, 6);
    console.log(randomnum);
    const imagepath = `./img/saikoro${randomnum}.png`;
    dice.setAttribute("src", imagepath);
  }, 100);
  setTimeout(
    function () {
      clearInterval(id);
    },

    3000
  );
});

// 1-6のランダムな数字を作る
// 数字と画像を対応させる
//数字の1がでたらさいころの1の目が出る
let dicenum = "./img/saikoro1.png";

dice.setAttribute("src", dicenum);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * max + min);
}

// const diceBtn = function () {
//   const random = getRandomInt(1, 6);
//   if ((random = 1)) {
//     ("./img/saikoro1.png");
//   } else if ((random = 2)) {
//     ("./img/saikoro2.png");
//   } else if ((random = 3)) {
//     ("./img/saikoro3.png");
//   } else if ((random = 4)) {
//     ("./img/saikoro4.png");
//   } else if ((random = 5)) {
//     ("./img/saikoro5.png");
//   } else if ((random = 6)) {
//     ("./img/saikoro6.png");
//   }
// };
