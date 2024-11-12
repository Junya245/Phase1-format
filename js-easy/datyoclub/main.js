let n = 0
const cntUp = function() {
    n += 1;
    console.log(n)
}

const reply = function() {
    const str = 'どうぞどうぞ';
    const action = str.repeat(n);
    alert(action);
    n=0;
  };