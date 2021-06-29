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

function rewrite_comment(comment_list) {
    for (let i=0; i < comment_list.length; i++) {
        comment_list[i].innerHTML = "あ";
    }
}

function test() {
    let chatFrame = document.getElementById('chatframe');
    const chatFrameDocument = chatFrame.contentWindow.document;
    let chats = chatFrameDocument.getElementById("item-offset");
    let comment_list = chats.querySelectorAll("#message"); // コメントのリスト(HTMLタグ付き)
    for (let i=0; i < comment_list.length; i++) {
        comment_list[i].innerHTML = "あ";
    }
}

  

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: test
      });
    // まずiframeで挿入されてるコメント欄にアクセスさせる
    /*
    let chatFrame = document.getElementById('chatframe');
    // コメント欄が見つかるまで繰り返す
    const setIntervalId = setInterval(startObserve, 1000);
    */
});