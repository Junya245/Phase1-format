const title = document.getElementById('title')
console.log(`<h1>タグの中身のテキストは　${title.textContent}です。`)

const list = document.querySelector('.list')
console.log(`<ul>タグの２つめの子要素のテキストは　${list.children[1].textContent} です。`)

const newItem = document.createElement('li')
newItem.textContent = 'もも'
list.appendChild(newItem)

const button = document.getElementById('button')

// ボタンをクリックした時、確認画面を出す!
// イベントリスナー　=> 何か対象の要素にイベントが起こった際に、実行したい処理を記述できる機能
button.addEventListener('click', event => {
    confirm('削除してよろしいですか？')
})

