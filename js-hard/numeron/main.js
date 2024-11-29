

function three_random_number() {
  const three_digit_number = [];

  for (let i = 0; three_digit_number.length < 3; i++) {
    const number = Math.floor(Math.random() * 10);

    if (!three_digit_number.includes(number)) {
      three_digit_number.push(number);
    }
  }

  return three_digit_number;
  console.log(three_digit_number);
  const value = three_digit_number[1];
  console.log(value);
}

three_random_number();
const CPnumbers = three_random_number();
console.log(CPnumbers);
let count;
let eatnum = 0;
let bitenum = 0;
const checkBtn = document.getElementById("numCheck");

checkBtn.addEventListener("click", function () {
  const answerNum = document.getElementById("answerNum");
  console.log(answerNum);
  count = answerNum.valueAsNumber;
  console.dir(answerNum.valueAsNumber);
  const arr = Array.from(String(count), Number);
  console.log(arr);
  if (arr.length < 3) {
    alert("3桁の数を入れて下さい");
    return;
    answerNum.value = "";
  }
  if (arr[0] === arr[1] || arr[0] === arr[2] || arr[1] === arr[2]) {
    alert("同じ数を2回使ってはいけません");
    return;
  }

  //   if (arr[0] === CPnumbers[0]) {
  //     eatnum = eatnum + 1;
  //   }
  //   if (arr[1] === CPnumbers[1]) {
  //     eatnum = eatnum + 1;
  //   }
  //   if (arr[2] === CPnumbers[2]) {
  //     eatnum = eatnum + 1;
  //   }
  //   if (arr[0] === CPnumbers[1]) {
  //     bitenum = bitenum + 1;
  //   }
  //   if (arr[0] === CPnumbers[2]) {
  //     bitenum = bitenum + 1;
  //   }
  //   if (arr[1] === CPnumbers[0]) {
  //     bitenum = bitenum + 1;
  //   }
  //   if (arr[1] === CPnumbers[2]) {
  //     bitenum = bitenum + 1;
  //   }
  //   if (arr[2] === CPnumbers[0]) {
  //     bitenum = bitenum + 1;
  //   }
  //   if (arr[2] === CPnumbers[1]) {
  //     bitenum = bitenum + 1;
  //   }

  arr.forEach(function (value1, index1) {
    CPnumbers.forEach(function (value2, index2) {
      if (value1 === value2) {
        if (index1 === index2) {
          eatnum = eatnum + 1;
        } else {
          bitenum = bitenum + 1;
        }
      }
    });
  });

  console.log(eatnum, bitenum);
  alert(`${eatnum}EAT,${bitenum}BITE`);
  if (eatnum === 3) {
    alert("正解です");
  }
});
