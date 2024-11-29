//2112年9月3日12時に生まれる

//生まれる時間を取得する
//現在時刻を取得する
//生まれる時間と現在時刻の差を取る
//bodyタグを取得する
//bodyタグに表示する

// moment("2112-09-03 12:00")
// moment("YYYY-MM-DD")
//ドラえもんが生まれるまで後{}

const birth = moment("2112-09-03 12:00");
console.log(birth);

//ドラえもんが生まれるまで後day日hour時間minute分second秒

let text1 = document.createElement("div");

document.body.appendChild(text1);

setInterval(function () {
  let now = moment();
  console.log(now);
  let time = birth.diff(now);
  console.log(time);

  let time2 = Math.floor(time / 1000);
  console.log(time2);

  let time3 = Math.floor(time2 / 60);
  console.log(time3);

  let time4 = Math.floor(time3 / 60);
  console.log(time4);
  let day = Math.floor(time2 / 86400);
  console.log(day);

  let hour = Math.floor(time4 % 24);
  console.log(hour);

  let minute = Math.floor(time3 % 60);
  console.log(minute);

  let second = Math.floor(time2 % 60);
  console.log(second);
  text1.innerHTML = `ドラえもんが生まれるまで後${day}日${hour}時間${minute}分${second}秒`;
}, 1000);

let text = document.createElement("div");
document.body.appendChild(text);

setInterval(function () {
  const diff = moment("2112-09-03 12:00").diff(moment());
  console.log(diff);
  const duration = moment.duration(diff);
  console.log(duration);
  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();
  console.log(`${days}日と${hours}時間${minutes}分${seconds}秒`);
  text.innerHTML = `ドラえもんが生まれるまで後${days}日と${hours}時間${minutes}分${seconds}秒`;
}, 1000);
