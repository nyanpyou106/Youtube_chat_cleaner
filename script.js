function startObserve() {
  if (chatFrame!==null) {
    
    clearInterval(setIntervalId); // コメント欄が見つかったのでsetInterval解除

    // iframeのコメント欄からdocumentを取得 
    const chatFrameDocument = chatFrame.contentWindow.document;
    let chats = chatFrameDocument.getElementById("item-offset");
    let comment_list = chats.querySelectorAll("#message"); // コメントのリスト(HTMLタグ付き)
    rewrite_comment(comment_list);
    //alert("ok");

    } else {
        let chatFrame = document.getElementById('chatframe');
    }
}

function get_comment_list() {
    let chatFrame = document.getElementById('chatframe');
    const chatFrameDocument = chatFrame.contentWindow.document;
    let chats = chatFrameDocument.getElementById("item-offset");
    let comment_list = chats.querySelectorAll("#message"); // コメントのリスト(HTMLタグ付き)
    return comment_list;
}

function rewrite_comment(comment_list) {
    // 全部置き換え
    for (let i=0; i < comment_list.length; i++) {
        comment_list[i].innerHTML = "歪みねぇな";
    }
}

function rewrite_ng_comment(comment_list) {
    for (let i=0; i < comment_list.length; i++) {
        let comment =  comment_list[i].innerHTML
        if (comment.match(ngword)){
            comment_list[i].innerHTML = "歪みねぇな";
        }
    }
}

function erase_loaded_ng_comment(comment_list) {
    // 読み込み済みのコメントのうち、NGワード入りのものを削除
    for (let i=0; i < comment_list.length; i++) {
        let comment =  comment_list[i].innerHTML
        if (comment.match(ngwords)) {
            // NGワードを含んだコメントの祖先要素を探して削除　ユーザー名も残さない
            comment_list[i].closest("yt-live-chat-text-message-renderer").remove();
        }
    }
}

function mutate_and_erase_ng_comment() {
    // コメント欄が更新される度、NGワード入りか判定して削除
    // iframeのコメント欄を読み込み
    let chatFrame = document.getElementById('chatframe');
    const chatFrameDocument = chatFrame.contentWindow.document;

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            // 更新された時に実行する処理
            if (mutation.target.id==="message" && !mutation.target.classList.contains("censored")){
                let comment =  mutation.target.innerHTML
                if (comment.match(ngwords)) {
                    mutation.target.closest("yt-live-chat-text-message-renderer").remove();
                    // コメントを書き換えたいときは、無限ループ防止のため、処理済みを識別するクラスを追加
                    //mutation.target.classList.add("censored");
                }
            }
        });
    });
    
    const config = {
        characterData: true,
        childList: true, 
        subtree: true
    };
    
    observer.observe(chatFrameDocument, config);
}

console.log("Extention Start");

var ngwords = "";
// 記憶領域からoptionで決めた設定を読み込む
//NGワードの読み込み
chrome.storage.local.get(["ngword"], (key_value) => {
    let ngword_list = key_value.ngword.split("\n");
    // |で結合後空白を削除
    ngwords =  ngword_list.join("|").replace(/\s+/g, "");
    // 末尾が|になると全てNGワードになってしまうので修正
    if (ngwords.slice(-1)==="|") {
        ngwords = ngwords.slice(0, -1);
    }
});

mutate_and_erase_ng_comment()