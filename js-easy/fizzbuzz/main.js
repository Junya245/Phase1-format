for (let i =1; i < 21; i++) {
    if (i % 3 === 0 && i % 5=== 0) {
        console.log('fizzBuzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }
}
   
let i = 0;
const Number = document.getElementById('Number');
Number.innerHTML = i;

const rewriteCntUp = function() {
  i += 1;
  if (i % 3 === 0 && i % 5 === 0) {
    Number.innerHTML = 'fizzbuzz';
  } else if (i % 3 === 0) {
    Number.innerHTML = 'fizz';
  } else if (i % 5 === 0) {
    Number.innerHTML = 'buzz';
  } else {
    Number.innerHTML = i;
  }
};
 
let i2 = 0;

const Number2 = document.getElementById('Number2');
Number2.innerHTML = i2;

const fizzBtn = function() {
  i2 += 1;
  if (i2 % 3 === 0) {
    Number2.innerHTML = 'fizz';
  } else {
    alert('ぶっぶーですわ');
    location.reload();
  }
};

const buzzBtn = function() {
  i2 += 1;
  if (i2 % 5 === 0) {
    Number2.innerHTML = 'buzz';
  } else {
    alert('ぶっぶーですわ');
    location.reload();
  }
};

const fizzbuzzBtn = function() {
  i2 += 1;
  if ((i2 % 3 === 0) & (i2 % 5 === 0)) {
    Number2.innerHTML = 'fizzbuzz';
  } else {
    alert('ぶっぶーですわ');
    location.reload();
  }
};

const numBtn = function() {
  i2 += 1;
  if (i2 % 3 === 0 || i2 % 5 === 0) {
    alert('ぶっぶーですわ');
    location.reload();
  }
  Number2.innerHTML = i2;
};

