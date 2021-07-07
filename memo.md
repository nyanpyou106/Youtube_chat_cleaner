# やりたいこと
- メンバー限定でフィルタリングできる機能もあると便利。　ユーザー指定、ワード指定。消したコメントは消したことがわからないようにする。  

# メモ
Youtubeのコメント欄はiframeらしい？  

content_scriptsのmatchesにおける正規表現  
[Match patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/)

コメント欄は遅れて読み込まれるらしいので、コメント欄が見つかるまでループさせる処理を入れる  
[Youtube用chrome拡張作ってハマったとこ](https://shacchin.github.io/shacchinlog/2019/01/21/20190121/)

コンソールに打ち込む形でコメントの書き換えまではできたが、コンソールを閉じた状態だと実行されない謎  
とりあえずボタンを押したら実行する形にしてみる  

公式のサンプル集
https://github.com/GoogleChrome/chrome-extensions-samples


chrome.action.onClickedはどうも拡張機能のアイコンが押された時を指しているっぽい。  
拡張機能のアイコンを押した時にスクリプトを実行するようにするには、chrome.scriptingを使う。  
https://developer.chrome.com/docs/extensions/reference/scripting/

ボタンを押す代わりに、勝手に実行してくれるようにすれば完成？  
今はすべてのコメントを「歪みねぇな」に変えるようにしているが、特定の文字列を含むコメントだけを  
変更するようにすればよい。  

HTMLタグの親要素や祖先要素を取得する。  
[【Javascript】親要素や祖先要素を取得する方法 parentNode/closest](https://yuyauver98.me/js-parentnode-closest/)

erase_ng_commentは拡張機能の適応時のみ実行したい。  
mutateで更新を検出した時は、検出したコメント1個ずつにNGワード検出処理をしたい。いちいち更新のたびにコメント欄  
全取得してたら無駄だから。  
mutation.target.id==="message"でコメントの要素を抜き出すことができる。  
<span id="message" dir="auto" class="style-scope yt-live-chat-text-message-renderer">苗だけで普通に育つうん？</span>  
の部分。  
これのコメントを書き換えたい場合は、その書き換え行為もMutationObsevererが拾ってしまって無限ループになるので、  
適当に処理済みであることを識別するためのclassを追加して弾く必要あり。  
丸ごと消す場合は問題ない。  

まずはNGワードをポップアップから設定できるようにする。  
options.jsはoptions.htmlを開いたときにしか実行されない(当たり前だけど)  
オプションじゃなくてpopupにするのは？　アイコンを押したら設定画面が開いて、  
設定をした後にボタンを押したら実行開始。


popup.jsのconsole.log()を書いてもコンソールに出力されず、変数の確認ができない。  
今メインで開いている画面とは別の画面(popup.html)で動作しているものだから開発者ツールのコンソールに表示されない？

addEventListener("click", async () => {  
と書かないと動かないっぽいが、なぜそうなのか理由は不明。　チュートリアルに書いてあるのをそのまま真似した。  
現在のtabのIDを取得する際はawaitをつける必要あり。  
とりあえずチュートリアルを真似して、popupのボタンを押したらスクリプトが実行するようになった。  
そもそも
```javascript
async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
```
のtabについている[]の意味も分からない。  
同じ公式ドキュメントでも場所によって[]ついてなかったりするので本当に不明。   
例えばこのページ(https://developer.chrome.com/docs/extensions/mv3/promises/#using-asyncawait)   
chrome.tabs.query(queryOptions)の返り値としては大きさ1の配列が返ってきていた。でその中にタブの番号などの情報が色々入っている。  
```javascript
let [tab] = await chrome.tabs.query(queryOptions);
tab.id
```
と
```javascript
let tab = await chrome.tabs.query(queryOptions);
tab[0].id
```
は同じ結果になった。  
なんとなくはわかったけどどういう挙動をしてるのかはっきり言葉で表せない。

chrome.tab APIはpopupかbackgroundのスクリプトでしか使えないらしい  
[Cannot read property 'query' of undefined - In Vanilla Chrome Extension [duplicate]](https://stackoverflow.com/questions/62461559/cannot-read-property-query-of-undefined-in-vanilla-chrome-extension)

chrome.storage.local.get(["ngword"], (key_value) => {})でコールバック関数に渡されるのは  
key_valueの形なので、わざわざkey_value.ngwordとしてvalueを取り出さないといけない。

textareaで入力された値から空白削除する方法  
https://www.nishishi.com/javascript-tips/trim-space-chars.html  

全部消すとたくさん消えた場合に見た目が良くない　チャット欄が空白だらけになる  
チャットを非表示→再表示させると拡張が止まる  
削除や編集をしたときにカクカクするし、大量にNGワードにヒットするとコメントがフリーズする  
絵文字をどうやって防ぐか→別の欄を作ればOK？

絵文字はspan id="message"の下のimgタグで表現されていて、emoji classが割り当てられているみたい 
```html
<span id="message" dir="auto" class="style-scope yt-live-chat-text-message-renderer"><img class="emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer" src="https://www.youtube.com/s/gaming/emoji/7ff574f2/emoji_u1f929.svg" alt="🤩" shared-tooltip-text=":star_struck:" id="emoji-33"></span>
```

どうもjavascriptはコードを書いた順番通りに実行するわけではないらしい  
変数に特定の値を読み込んでから次の処理に行きたいのに、読み込む前に処理に入ったりする。  
javascriptの実行順について  
[コールバック地獄からの脱出](https://qiita.com/umeko2015/items/2fdb2785eac8f4117f23)

色々試してみた結果
```javascript
chrome.storage.local.get(["ngword"], (key_value) => {})
```
のコールバック内からは、グローバル変数のようなchrome.storage.local.get()の外にある変数  
の値を更新することが出来ないっぽいことが判明した。  
仕方が無いのでこのコールバック内で全ての処理を完結させるように変更。

メンバーバッジの表示部分は以下のようになっている
```html
<div id="image" class="style-scope yt-live-chat-author-badge-renderer"><img src="https://yt3.ggpht.com/e43lm5wGp4sHf2F9z-0-e43wIDLZhoESpbxopKlsbBIRycYMYi69p4dAqrEATabpuRKz2f9WAg=s16-c-k" class="style-scope yt-live-chat-author-badge-renderer" alt="Member (2 months)"></div>
```
alt部分はYoutubeの言語設定によって変わる。日本語の場合はメンバー(2 か月)みたいになる。  
comment_structure.mdにより詳細な構成を記載。  
span id="chat-badges"下にあるyt-live-chat-author-badge-rendererのtypeを参照すれば、  
メンバーとモデレーターを識別できそう。  
メンバーの場合はtype="member"、モデレーターの場合はtype="moderator"となっている。  

mutationからtype要素を取り出す方法は？  
targetでまずyt-live-chat-author-badge-rendererを探す  
その後attributes.type.valueでmemberか判定？  

まずtargetのclasslistにyt-live-chat-author-badge-rendererがあるか探し、その後親のtypeにmemberがあるか調べるのが良さそう。  
1発でtypeが書いてある場所を特定する方法が見つからなかった。  

というかyt-live-chat-author-badge-rendererを調べるだけでいい説ある。  メンバーかモデレーターしかこのclassの書かれた要素を持たない。  

yt-live-chat-item-list-rendererタグにauthor-typeの記述あり　ここにもmemberかmoderatorが書かれている。  
但しmoderatorかつmemberの場合はmoderatorの記述が優先されるっぽい。  

今までid=chatframe全体を監視していたが、これだとコメントを削除するときに要素の特定がしづらいことがわかったため、  
より狭い範囲をmutationobsevererに監視させるようにする。  
具体的には、
コメント(<yt-live-chat-text-message-renderer></yt-live-chat-text-message-renderer>)の親要素である
```html
<div id="items" class="style-scope yt-live-chat-item-list-renderer" style="transform: translateY(0px);"></div>
```
を監視させる。
但し、id="items"はなぜか2つ存在するので、querySelector("#item-offset > #items")とすることで、コメント欄のitemsを指定する。  
(もう1つのitemsはコメント欄上部のピン止めコメントに設定されている)


# 参考記事
[Chrome拡張の開発方法まとめ　その1：概念編](https://qiita.com/k7a/items/26d7a22233ecdf48fed8)  
[YouTubeLiveのチャットを言語解析してDeepLによる翻訳結果に置換するChrome拡張機能を作った](https://qiita.com/teahat/items/052a91d69b63b6d7de0c)  
[Youtube用chrome拡張作ってハマったとこ](https://shacchin.github.io/shacchinlog/2019/01/21/20190121/)  
[shacchin/youtube_chat_pinner](https://github.com/shacchin/youtube_chat_pinner/blob/master/src/ts/contentscript.ts)


# デバッグ法
[【chrome extensions】Google Chrome拡張機能の作り方② - デバッグの方法(console.log)](https://www.tweeeety.blog/entry/2015/03/04/231354)

# 設計
- 必要な機能
    - コメントにNGワードを設定する
    - NGユーザーを指定する
        - ユーザー名にNGワードを設定する　多分コメントと全く同様の判定システムでOK
    - NGに該当するコメントを完全に削除する
    - NGに該当するコメントを「このメッセージは不適切な表現を含んでいます」に変更する
    - 完全削除かマスクかは選べるようにする
    - コメントのフィルターを設定する(スパナ付きのみ表示、メンバーのみ表示)
        - これは余裕があれば追加する機能
    - NGワードの追加を何回でも行える機能
    - popup.htmlに書き込んだNGワードを保存する機能(内部的には保存してるけど今は閉じると見えない)
    - 動作中かどうかが分かるようにしたい