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

function erase_ng_comment(comment_list) {
    for (let i=0; i < comment_list.length; i++) {
        let comment =  comment_list[i].innerHTML
        if (comment.match(ngwords)) {
            // NGワードを含んだコメントの祖先要素を探して削除　ユーザー名も残さない
            comment_list[i].closest("yt-live-chat-text-message-renderer").remove();
        }
    }
}

let ngword_list = ["アーカイブ", "グラ"];
let ngwords =  ngword_list.join("|");
erase_ng_comment(get_comment_list());