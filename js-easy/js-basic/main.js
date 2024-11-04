//こんにちは、世界!
console.log('Hello,world!')
//値

//数値
//console.log(100);
//console.log(1.5);

//文字列
console.log("Hello!")
console.log("ありがとう!")

//配列
console.log([1,2,3,4,5])

//真偽値(しんぎち)
console.log(true)
console.log(false)

//オブジェクト
console.log({ one: 1,two: 2})

//変数

const myName = 'Beppu'
//const 名前 = 値

console.log(myName)

const number = 100
const isvalid = true
const userIds = [1,3,10]

console.log(number)
console.log(isvalid)
console.log(userIds)
//変数myNameに値'Beppu'を代入する

 //! constは変数を必ず初期化する必要がある!
 //! letは初期化しなくてもOK!
 let learning

// constは再代入ができない
// letは再代入ができる
learning= 'Ruby'

console.log(learning)

//文字列処理
'これは文字列です。'
"これも文字列です。"

"I'm Beppu Takemitsu."

//文字列の場合
const breakfast = "トースト"

console.log("今日の朝ごはんは" + breakfast + "でした。\nとても美味しかった。")

//テンプレート文字列

console.log(`今日の朝ごはんは${breakfast}でした。
とても美味しかった。`)

//配列

const days = ['日' ,'月', '火', '水', '木', '金', '土']

console.log(days[3]) // => []の中にインデックスを指定して配列の要素を取得

console.log(days.length)

//配列の操作

const nengou = ['明治','大正' ,'昭和', '平成']
console.log(nengou)
//要素の追加
nengou.push('令和')

console.log(nengou) // =>['明治', '大正', '昭和', '平成', '令和']

nengou.splice(3,1) //配列.splice(削除したい要素のインデックス,削除したい要素の個数)

console.log(nengou)
// =>['明治', '大正', '昭和', '令和']

nengou[2] = 'showa'

console.log(nengou)
// => ['明治', '大正', 'showa', '令和']

const num = Math.random() //Math.random( ) => ランダムな数を返してくれるプログラム

if (num >= 0.5) { 
    console.log('大きめ')
}else {
    console.log('小さめ')
}

//numが0.5以上である場合

console.log(`数: ${num}`)

//真偽値 (if文のより厳密な挙動)

// 原則、if文は、条件式がtrueの場合に実行される。
//if (true){
 //   console.log('条件はtrueです!')
//} else{
 //   console.log('条件はfalseです!')
//}

if (0) {
    console.log('このプログラムは実行される!')
}

//条件式でfalseとみなされる値　=> 0, ""(空文字列)

const a = 2
const b = 3
const c = 10
const d = 10

//X === Y 
//XとYが等しいとみなされる際にtrueになる

console.log(a === b)　　
console.log(c === d)

console.log(a === b && c===d) // => false
// A && B => AがtrueかつBがtrueの場合、trueになる

console.log(a === b || c === d) //=> true
// A || B => AがtrueまたはBがtrueの場合、trueになる

console.log(!(a === b))
// => true

// for文

//for (let i = 0; i < 10; i++) {
  //  console.log(i)
//}

//1. 変数iに0を代入(初期化処理の実行)
//2. i<10は満たしているか？(継続条件を評価)　満たしていない場合は終了
//3. ブロック内の処理を実行
//4. iに可算代入する　(i === 10)
//5. 2に戻る

// while文

//let i = 0
//while (i < 10) {
   // console.log(i)
  //  i++
//}

// 関数(処理をまとめて名前をつけるもの)の定義
//function cook(food1, food2) {
 //   console.log(`${food1}が出来上がりました。`)
   // console.log(`${food2}が出来上がりました。`)
//}

function applyTax(price) {
   // console.log(price * 1.1) //TODO: 消費税(10%)込の金額を出力する
    return price * 1.1 //! return文を使用することで、任意の値を戻り値として指定できる!
}

//* function 関数名(仮引数) {
//* 処理
//* }

// 実行
// 関数を実行する際は、関数名に()をつける
//cook(`生姜焼き`, `カレー`)
//cook(`ステーキ`,`マッシュポテト`)
//applyTax(1000)
//applyTax(580)
const result1 = applyTax(1000)
const result2 = applyTax(580)

//Todo: 上の結果を合計したい...
console.log(result1 + result2) 

//関数を使うと...
// -好きな時に何度でも呼び出せる
//　-引数を用いて、実行時に任意の値を渡せる

//関数宣言
//* function applyTax(price) {
//*    return price * 1.1
//* }

// 関数式
 //const applyTax = function(price) {
   // return price * 1.1
 //}

 // アロー関数
 //const applyTax = (price) => {
 //   return price * 1.1
 //}

 // 引数が一つの場合、()を省略できる
 //const applyTax = price => {
    //return price * 1.1
 //}

 // 処理が一行の場合、returnとブロック({})を省略できる
 //const applyTax = price => price * 1.1

 const hoge = 200

 console.log(`100-1=${100-1}`)

 console.log (1 ==="1")

 const numObj={a:1,b:2,c:3,d:4,e:5} 
 nunObj[1][1] = s