const bingo = document.getElementById("view");
const item = document.createElement("tr");
const item2 = document.createElement("tr");
const item3 = document.createElement("tr");
const item4 = document.createElement("tr");
const item5 = document.createElement("tr");
const item6 = document.createElement("tr");

view.appendChild(item);
view.appendChild(item2);
view.appendChild(item3);
view.appendChild(item4);
view.appendChild(item5);
view.appendChild(item6);

const item11 = document.createElement("td");
const item12 = document.createElement("td");
const item13 = document.createElement("td");
const item14 = document.createElement("td");
const item15 = document.createElement("td");
const item16 = document.createElement("td");

item.appendChild(item11);
item2.appendChild(item12);
item3.appendChild(item13);
item4.appendChild(item14);
item5.appendChild(item15);
item6.appendChild(item16);

const item21 = document.createElement("td");
const item22 = document.createElement("td");
const item23 = document.createElement("td");
const item24 = document.createElement("td");
const item25 = document.createElement("td");
const item26 = document.createElement("td");

item.appendChild(item21);
item2.appendChild(item22);
item3.appendChild(item23);
item4.appendChild(item24);
item5.appendChild(item25);
item6.appendChild(item26);

const item31 = document.createElement("td");
const item32 = document.createElement("td");
const item33 = document.createElement("td");
const item34 = document.createElement("td");
const item35 = document.createElement("td");
const item36 = document.createElement("td");

item.appendChild(item31);
item2.appendChild(item32);
item3.appendChild(item33);
item4.appendChild(item34);
item5.appendChild(item35);
item6.appendChild(item36);

const item41 = document.createElement("td");
const item42 = document.createElement("td");
const item43 = document.createElement("td");
const item44 = document.createElement("td");
const item45 = document.createElement("td");
const item46 = document.createElement("td");

item.appendChild(item41);
item2.appendChild(item42);
item3.appendChild(item43);
item4.appendChild(item44);
item5.appendChild(item45);
item6.appendChild(item46);

const item51 = document.createElement("td");
const item52 = document.createElement("td");
const item53 = document.createElement("td");
const item54 = document.createElement("td");
const item55 = document.createElement("td");
const item56 = document.createElement("td");

item.appendChild(item51);
item2.appendChild(item52);
item3.appendChild(item53);
item4.appendChild(item54);
item5.appendChild(item55);
item6.appendChild(item56);

item11.textContent = "B";
item21.textContent = "I";
item31.textContent = "N";
item41.textContent = "G";
item51.textContent = "O";

function random_number1() {
  const digit_number1 = [];

  for (let i = 0; digit_number1.length < 5; i++) {
    const number1 = Math.floor(Math.random() * 15) + 1;

    if (!digit_number1.includes(number1)) {
      digit_number1.push(number1);
    }
  }
  return digit_number1;
}

random_number1();
const number1 = random_number1();
console.log(number1);
const value12 = number1[0];
const value13 = number1[1];
const value14 = number1[2];
const value15 = number1[3];
const value16 = number1[4];

item12.textContent = `${value12}`;
item13.textContent = `${value13}`;
item14.textContent = `${value14}`;
item15.textContent = `${value15}`;
item16.textContent = `${value16}`;

function random_number2() {
  const digit_number2 = [];

  for (let i = 0; digit_number2.length < 5; i++) {
    const number2 = Math.floor(Math.random() * 15) + 16;

    if (!digit_number2.includes(number2)) {
      digit_number2.push(number2);
    }
  }
  return digit_number2;
}

random_number2();
const number2 = random_number2();
console.log(number2);
const value22 = number2[0];
const value23 = number2[1];
const value24 = number2[2];
const value25 = number2[3];
const value26 = number2[4];

item22.textContent = `${value22}`;
item23.textContent = `${value23}`;
item24.textContent = `${value24}`;
item25.textContent = `${value25}`;
item26.textContent = `${value26}`;

function random_number3() {
  const digit_number3 = [];

  for (let i = 0; digit_number3.length < 5; i++) {
    const number3 = Math.floor(Math.random() * 15) + 31;

    if (!digit_number3.includes(number3)) {
      digit_number3.push(number3);
    }
  }
  return digit_number3;
}

random_number3();
const number3 = random_number3();
console.log(number3);
const value32 = number3[0];
const value33 = number3[1];
const value35 = number3[3];
const value36 = number3[4];

item32.textContent = `${value32}`;
item33.textContent = `${value33}`;
item34.textContent = "free";
item35.textContent = `${value35}`;
item36.textContent = `${value36}`;

function random_number4() {
  const digit_number4 = [];

  for (let i = 0; digit_number4.length < 5; i++) {
    const number4 = Math.floor(Math.random() * 15) + 46;

    if (!digit_number4.includes(number4)) {
      digit_number4.push(number4);
    }
  }
  return digit_number4;
}

random_number4();
const number4 = random_number4();
console.log(number4);
const value42 = number4[0];
const value43 = number4[1];
const value44 = number4[2];
const value45 = number4[3];
const value46 = number4[4];

item42.textContent = `${value42}`;
item43.textContent = `${value43}`;
item44.textContent = `${value44}`;
item45.textContent = `${value45}`;
item46.textContent = `${value46}`;

function random_number5() {
  const digit_number5 = [];

  for (let i = 0; digit_number5.length < 5; i++) {
    const number5 = Math.floor(Math.random() * 15) + 61;

    if (!digit_number5.includes(number5)) {
      digit_number5.push(number5);
    }
  }
  return digit_number5;
}

random_number5();
const number5 = random_number5();
console.log(number5);
const value52 = number5[0];
const value53 = number5[1];
const value54 = number5[2];
const value55 = number5[3];
const value56 = number5[4];

item52.textContent = `${value52}`;
item53.textContent = `${value53}`;
item54.textContent = `${value54}`;
item55.textContent = `${value55}`;
item56.textContent = `${value56}`;
