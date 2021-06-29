#やりたいこと
- メンバー限定でフィルタリングできる機能もあると便利。　ユーザー指定、ワード指定。消したコメントは消したことがわからないようにする。  

Youtubeのコメント欄はiframeらしい？  
参考になる？https://qiita.com/teahat/items/052a91d69b63b6d7de0c

content_scriptsのmatchesにおける正規表現  
[Match patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/)

コメント欄は遅れて読み込まれるらしいので、コメント欄が見つかるまでループさせる処理を入れる  
[Youtube用chrome拡張作ってハマったとこ](https://shacchin.github.io/shacchinlog/2019/01/21/20190121/)

コンソールに打ち込む形でコメントの書き換えまではできたが、コンソールを閉じた状態だと実行されない謎  
とりあえずボタンを押したら実行する形にしてみる  

公式のサンプル集
https://github.com/GoogleChrome/chrome-extensions-samples


chrome.action.onClickedはどうも拡張機能のアイコンが押された時を指しているっぽい。

ボタンを押す代わりに、勝手に実行してくれるようにすれば完成？  
今はすべてのコメントを「歪みねぇな」に変えるようにしているが、特定の文字列を含むコメントだけを  
変更するようにすればよい。  

HTMLタグの親要素や祖先要素を取得する。  
[【Javascript】親要素や祖先要素を取得する方法 parentNode/closest](https://yuyauver98.me/js-parentnode-closest/)