//const setBtn = function () {
//  const num = Math.random();
// console.log('ok');
//  if (num >= 0.5) {
//  alert('齋藤さんだぞ');
// }　else {
//  alert('ぺっぺっぺー');ぺっぺっぺー
// };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const setBtn = function () {
  const random = getRandomInt(0, 9);

  if (random >= 4) {
    alert("齋藤さんだぞ");
  } else {
    alert("ぺっぺっぺー");
  }
};

//if (num >= 0.5) {
//console.log('齋藤さんだぞ')
//}　else {
//console.log('ぺっぺっぺー')
//}
