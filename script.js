function get_loaded_comment_list(chatframedocument) {
    let chats = chatframedocument.getElementById("item-offset");
    let loaded_comment_list = chats.querySelectorAll("#message"); // コメントのリスト(HTMLタグ付き)
    return loaded_comment_list;
}

function erase_loaded_ng_comment(ngwords, loaded_comment_list) {
    // 読み込み済みのコメントのうち、NGワード入りのものを削除
    for (let i=0; i < loaded_comment_list.length; i++) {
        let comment =  loaded_comment_list[i].innerHTML
        if (comment.match(ngwords)) {
            // NGワードを含んだコメントの祖先要素を探して削除　ユーザー名も残さない
            loaded_comment_list[i].closest("yt-live-chat-text-message-renderer").remove();
        }
    }
}

function mutate_and_edit_ng_comment(ngwords, chatframedocument, selector) {
    // コメント欄が更新された時、それがNGワード入りか判定して手を加える
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            // 更新された時に実行する処理
            if (mutation.target.id==="message" && !mutation.target.classList.contains("censored")){
                let comment =  mutation.target.innerHTML
                if (comment.match(ngwords)&&selector=="erase") {
                    mutation.target.closest("yt-live-chat-text-message-renderer").remove();
                } else if (comment.match(ngwords)&&selector=="replace") {
                    mutation.target.innerHTML="";
                    // コメントを書き換えたいときは、無限ループ防止のため、処理済みを識別するクラスを追加
                    mutation.target.classList.add("censored");
                }
            }
        });
    });
    
    const config = {
        characterData: true,
        childList: true, 
        subtree: true
    };
    
    observer.observe(chatframedocument, config);
}

function clean_ng_comment() {
    console.log("Extention Start");

    // iframeのチャット欄の読み込み
    let chatFrame = document.getElementById('chatframe');
    let chatFrameDocument = chatFrame.contentWindow.document;

    // ストレージに保存しておいたNGワードの取得
    chrome.storage.local.get(["ngword"], (key_value) => {
        let ngword_list = key_value.ngword.split("\n");
        // |で結合後空白を削除
        let NGWORDS = ngword_list.join("|").replace(/\s+/g, "");
        // 末尾が|になると全てNGワードになってしまうので修正
        if (NGWORDS.slice(-1)==="|") {
            NGWORDS = NGWORDS.slice(0, -1);
        }

        // 削除の実行
        erase_loaded_ng_comment(NGWORDS, get_loaded_comment_list(chatFrameDocument));
        mutate_and_edit_ng_comment(NGWORDS, chatFrameDocument, "erase");
    });
}

function member_only() {
    // iframeのチャット欄の読み込み
    let chatFrame = document.getElementById('chatframe');
    let chatFrameDocument = chatFrame.contentWindow.document;
    // コメント欄が更新された時、それがメンバー以外の投稿の場合削除する
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            // 更新された時に実行する処理
            console.log(mutation.type);
            /*
            if (mutation.target.id==="chat-badges"){
                let comment =  mutation.target.innerHTML
                if (comment.match(ngwords)&&selector=="erase") {
                    mutation.target.closest("yt-live-chat-text-message-renderer").remove();
                } else if (comment.match(ngwords)&&selector=="replace") {
                    mutation.target.innerHTML="";
                    // コメントを書き換えたいときは、無限ループ防止のため、処理済みを識別するクラスを追加
                    mutation.target.classList.add("censored");
                }
            }
            */
        });
    });
    
    const config = {
        characterData: true,
        childList: true, 
        subtree: true
    };
    
    observer.observe(chatFrameDocument, config);
}
//clean_ng_comment();
member_only();